"use client";

import { useState } from "react";
import { interestOptions } from "@/content/contact";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error" | "preview";

const isStaticPreview = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isStaticPreview) {
      setStatus("preview");
      setMessage(
        "当前为 GitHub Pages 静态预览，预约接口不可用。正式站点部署后即可在此提交。",
      );
      return;
    }

    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      role: String(data.get("role") || ""),
      interest: String(data.get("interest") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      note: String(data.get("note") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error || "提交失败，请稍后重试。");
        return;
      }
      setStatus("success");
      setMessage("已收到您的预约，顾问将尽快与您联系。");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("网络异常，请稍后重试。");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {isStaticPreview && (
        <p
          className="form-note"
          role="note"
          style={{
            margin: 0,
            padding: "0.75rem 0.9rem",
            borderRadius: 10,
            background: "rgba(45, 212, 191, 0.1)",
            border: "1px solid rgba(45, 212, 191, 0.35)",
            color: "var(--light-ink)",
          }}
        >
          静态预览模式：页面可浏览，预约提交将提示不可用（无服务端
          API）。正式环境请使用 Vercel / Node 部署。
        </p>
      )}
      <div className="field">
        <label htmlFor="name">姓名</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="您的称呼"
        />
      </div>
      <div className="field">
        <label htmlFor="company">公司 / 机构</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          placeholder="单位全称"
        />
      </div>
      <div className="field">
        <label htmlFor="role">角色</label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="如：科技部 / 业务负责人 / 架构师"
        />
      </div>
      <div className="field">
        <label htmlFor="interest">感兴趣的方向</label>
        <select id="interest" name="interest" defaultValue="platform" required>
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="phone">手机</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="便于顾问回电"
        />
      </div>
      <div className="field">
        <label htmlFor="email">邮箱（选填）</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@company.com"
        />
      </div>
      <div className="field">
        <label htmlFor="note">补充说明（选填）</label>
        <textarea
          id="note"
          name="note"
          placeholder="现有系统、期望时间窗口、参会角色等"
        />
      </div>
      <p className="form-note">
        提交即表示您同意我们为安排演示而联系您。正式上线后将补充完整隐私政策。
      </p>
      <Button
        type="submit"
        variant="dark"
        disabled={status === "submitting"}
        style={{ borderRadius: 999, width: "100%" }}
      >
        {status === "submitting" ? "提交中…" : "提交预约"}
      </Button>
      {message && (
        <p
          role="status"
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color:
              status === "error"
                ? "#b91c1c"
                : status === "preview"
                  ? "#0f766e"
                  : "#0f766e",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
