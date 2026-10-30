import { MESSAGE_MAX, NAME_MAX } from "@/lib/guestbook-config";

// Recipient inboxes. Override at build time with NEXT_PUBLIC_NOTIFY_EMAIL (comma-separated).
const RECIPIENTS = (
  process.env.NEXT_PUBLIC_NOTIFY_EMAIL?.trim() ||
  "eslameslam11993377@gmail.com,samykholoud22@gmail.com"
)
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

export const NOTIFY_EMAIL = RECIPIENTS[0] ?? "";
const CC_EMAILS = RECIPIENTS.slice(1).join(",");

export function isNotifyConfigured(): boolean {
  return Boolean(NOTIFY_EMAIL);
}

// Sends the wish to the owner's inbox through FormSubmit (no server needed).
export async function sendWishEmail(name: string, message: string): Promise<void> {
  if (!NOTIFY_EMAIL) throw new Error("NOTIFY_EMAIL is not set");

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `تهنئة جديدة من ${name}`,
        _template: "box",
        _captcha: "false",
        ...(CC_EMAILS ? { _cc: CC_EMAILS } : {}),
        name: name.slice(0, NAME_MAX),
        message: message.slice(0, MESSAGE_MAX),
      }),
    }
  );

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean | string;
  } | null;

  if (!response.ok || !payload || String(payload.success) !== "true") {
    throw new Error("email failed");
  }
}
