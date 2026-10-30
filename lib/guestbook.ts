
import {
  GUESTBOOK_SCRIPT_URL,
  MANTLE_BASE_URL,
  MANTLE_NAMESPACE,
  MESSAGE_MAX,
  NAME_MAX,
} from "@/lib/guestbook-config";

export type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

const DEMO_KEY = "oj-wishes-demo";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function isLocalDemo(): boolean {
  if (!isBrowser()) return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function useMantle(): boolean {
  // Keep the original function name for compatibility.
  // Google Apps Script replaces Mantle as the backend.
  return Boolean(GUESTBOOK_SCRIPT_URL);
}

export function isGuestbookConfigured(): boolean {
  return Boolean(GUESTBOOK_SCRIPT_URL) || isLocalDemo();
}

export function sanitizeWishInput(
  name: string,
  message: string
): { name: string; message: string } | null {
  const cleanName = name.replace(/\s+/g, " ").trim().slice(0, NAME_MAX);
  const cleanMessage = message.replace(/\s+\n/g, "\n").trim().slice(0, MESSAGE_MAX);

  if (!cleanName || !cleanMessage) return null;

  return { name: cleanName, message: cleanMessage };
}

function sortNewest(wishes: Wish[]): Wish[] {
  return [...wishes].sort((a, b) => b.createdAt - a.createdAt);
}

function isWish(value: unknown): value is Wish {
  if (!value || typeof value !== "object") return false;

  const wish = value as Wish;
  return Boolean(wish.name && wish.message);
}

function readDemoWishes(): Wish[] {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(DEMO_KEY);
    const parsed = raw ? (JSON.parse(raw) as Wish[]) : [];

    return Array.isArray(parsed) ? sortNewest(parsed) : [];
  } catch {
    return [];
  }
}

function writeDemoWishes(wishes: Wish[]) {
  window.localStorage.setItem(DEMO_KEY, JSON.stringify(sortNewest(wishes)));
}

async function parsePayload(
  response: Response
): Promise<{ wishes?: Wish[]; wish?: Wish; error?: string }> {
  const text = await response.text();

  try {
    return JSON.parse(text) as {
      wishes?: Wish[];
      wish?: Wish;
      error?: string;
    };
  } catch {
    throw new Error("تعذّر قراءة سجل التهاني.");
  }
}

async function requestGuestbook(
  init?: RequestInit & { query?: Record<string, string> }
): Promise<{
  wishes?: Wish[];
  wish?: Wish;
  error?: string;
}> {
  if (!GUESTBOOK_SCRIPT_URL) {
    throw new Error("سجل التهاني غير مربوط بعد.");
  }

  const url = new URL(GUESTBOOK_SCRIPT_URL);

  if (init?.query) {
    for (const [key, value] of Object.entries(init.query)) {
      url.searchParams.set(key, value);
    }
  }

  const isPost = init?.method === "POST";

  const response = await fetch(url.toString(), {
    method: isPost ? "POST" : "GET",

    // text/plain avoids triggering a CORS preflight with Apps Script.
    ...(isPost && init?.body
      ? {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: init.body,
        }
      : {}),

    redirect: "follow",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("تعذّر الوصول إلى سجل التهاني.");
  }

  return parsePayload(response);
}

// Kept with its original name to avoid changing other code.
async function mantleFetch(
  path: string,
  init?: RequestInit
): Promise<Response> {
  if (!GUESTBOOK_SCRIPT_URL) {
    throw new Error("سجل التهاني غير مربوط بعد.");
  }

  const cleanPath = path.replace(/^\/+/, "");
  const url = new URL(GUESTBOOK_SCRIPT_URL);

  // A request without a body is treated as a list request.
  if (!init?.body) {
    return fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      redirect: "follow",
      cache: "no-store",
    });
  }

  return fetch(url.toString(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: init.body,
    redirect: "follow",
    cache: "no-store",
  });
}

// Kept with its original name to avoid changing other code.
async function listMantleWishes(): Promise<Wish[]> {
  const response = await mantleFetch("wishes");

  if (!response.ok) {
    throw new Error("تعذّر تحميل سجل التهاني الآن.");
  }

  const payload = await parsePayload(response);
  const wishes = Array.isArray(payload.wishes) ? payload.wishes : [];

  return sortNewest(
    wishes.filter(
      (wish) => wish && wish.name && wish.message
    )
  );
}

// Kept with its original name to avoid changing other code.
async function addMantleWish(
  name: string,
  message: string
): Promise<Wish> {
  const response = await mantleFetch("wishes", {
    method: "POST",
    body: JSON.stringify({ name, message }),
  });

  if (!response.ok) {
    throw new Error("تعذّر حفظ التهنئة. حاولوا مرة أخرى.");
  }

  const payload = await parsePayload(response);

  if (payload.error === "empty") {
    throw new Error("من فضلكم اكتبوا الاسم وكلمة التهنئة.");
  }

  if (payload.wish?.name && payload.wish.message) {
    return payload.wish;
  }

  throw new Error("تعذّر حفظ التهنئة. حاولوا مرة أخرى.");
}

export async function listWishes(): Promise<Wish[]> {
  if (GUESTBOOK_SCRIPT_URL) {
    return listMantleWishes();
  }

  if (isLocalDemo()) {
    return readDemoWishes();
  }

  throw new Error("سجل التهاني غير مربوط بعد.");
}

export async function addWish(
  name: string,
  message: string
): Promise<Wish> {
  const clean = sanitizeWishInput(name, message);

  if (!clean) {
    throw new Error("من فضلكم اكتبوا الاسم وكلمة التهنئة.");
  }

  if (GUESTBOOK_SCRIPT_URL) {
    return addMantleWish(clean.name, clean.message);
  }

  if (isLocalDemo()) {
    const wish: Wish = {
      id: crypto.randomUUID(),
      name: clean.name,
      message: clean.message,
      createdAt: Date.now(),
    };

    writeDemoWishes([wish, ...readDemoWishes()]);

    return wish;
  }

  throw new Error("سجل التهاني غير مربوط بعد.");
}
