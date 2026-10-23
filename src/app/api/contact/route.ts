import { NextResponse } from "next/server";
import { submitContact, type ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "请求格式不正确" },
      { status: 400 },
    );
  }

  const result = await submitContact(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true, mode: result.mode });
}
