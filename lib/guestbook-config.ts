/**
 * Guestbook storage for the static GitHub Pages invite.
 *
 * Primary: MantleDB (CORS JSON store — no Google login needed).
 * Optional override: Google Apps Script web app URL via env or paste below.
 */
export const GUESTBOOK_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GUESTBOOK_URL?.trim() || "";

/** Unclaimed MantleDB namespace — public read/write for the wedding guestbook. */
export const MANTLE_NAMESPACE =
  process.env.NEXT_PUBLIC_MANTLE_NAMESPACE?.trim() || "Eslam-kholoud-tahani-2026";

export const MANTLE_BASE_URL = "https://script.google.com/macros/s/AKfycbx0r8e6fJFxKacXeS8BJJZpnrtPHChywb_3sCnWvX-4RmbhEG1WiiEiRfnhK0upKYwi5Q/exec";

export const NAME_MAX = 60;
export const MESSAGE_MAX = 500;
