import { beforeEach, describe, expect, it, vi } from "vitest";
import { submitContact } from "./contact";

describe("submitContact", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("rejects missing required fields", async () => {
    const result = await submitContact({
      name: "",
      company: "测试公司",
      interest: "platform",
      phone: "13800000000",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toContain("姓名");
  });

  it("logs when webhook is not configured", async () => {
    const spy = vi.spyOn(console, "info").mockImplementation(() => {});
    const result = await submitContact({
      name: "张三",
      company: "示例银行",
      interest: "ops",
      phone: "13800138000",
    });
    expect(result).toEqual({ ok: true, mode: "log" });
    expect(spy).toHaveBeenCalled();
  });

  it("posts to webhook when configured", async () => {
    vi.stubEnv("CONTACT_WEBHOOK_URL", "https://hooks.example.com/lead");
    vi.stubEnv("CONTACT_WEBHOOK_TOKEN", "secret");

    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContact({
      name: "李四",
      company: "示例集团",
      interest: "credit",
      phone: "13900139000",
      email: "li@example.com",
    });

    expect(result).toEqual({ ok: true, mode: "webhook" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://hooks.example.com/lead",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer secret",
        }),
      }),
    );
  });
});
