export type ContactPayload = {
  name: string;
  company: string;
  role?: string;
  interest: string;
  phone: string;
  email?: string;
  note?: string;
};

export type ContactResult =
  { ok: true; mode: "webhook" | "log" } | { ok: false; error: string };

function validate(payload: ContactPayload): string | null {
  if (!payload.name?.trim()) return "请填写姓名";
  if (!payload.company?.trim()) return "请填写公司 / 机构";
  if (!payload.phone?.trim()) return "请填写手机";
  if (!payload.interest?.trim()) return "请选择感兴趣的方向";
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "邮箱格式不正确";
  }
  return null;
}

/**
 * Pluggable lead handler.
 *
 * Configure `CONTACT_WEBHOOK_URL` to POST JSON leads to your CRM / Feishu /
 * Slack / Zapier / Make / custom endpoint. Optional `CONTACT_WEBHOOK_TOKEN`
 * is sent as `Authorization: Bearer <token>`.
 *
 * Without a webhook, submissions are accepted and logged server-side (dev /
 * staging convenience) — do not rely on this for production lead capture.
 */
export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const error = validate(payload);
  if (error) return { ok: false, error };

  const body = {
    ...payload,
    source: "noesis-website",
    brand: "新致新知 Noesis AI",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const token = process.env.CONTACT_WEBHOOK_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return {
        ok: false,
        error: `提交通道暂时不可用（${res.status}），请稍后重试或直接联系顾问。`,
      };
    }
    return { ok: true, mode: "webhook" };
  }

  console.info("[contact] lead received (no CONTACT_WEBHOOK_URL configured)", {
    name: body.name,
    company: body.company,
    interest: body.interest,
    phone: body.phone.replace(/.(?=.{4})/g, "*"),
  });
  return { ok: true, mode: "log" };
}
