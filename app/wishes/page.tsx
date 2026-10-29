import type { Metadata } from "next";
import { WishesBoard } from "@/components/WishesBoard";

export const metadata: Metadata = {
  title: "سجل التهاني | إسلام وخلود",
  description: "كلمات التهنئة لإسلام وخلود بمناسبة الزفاف.",
};

export default function WishesPage() {
  return <WishesBoard />;
}
