import { MessageCircle } from "lucide-react";
import { brand } from "../../config/brand.js";

export default function WhatsAppButton() {
  // Hide the WhatsApp button until a real number is configured.
  if (!brand.whatsapp || /^9?1?0+$/.test(brand.whatsapp)) return null;
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to enquire about your paper tableware.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-card transition hover:bg-emerald-600"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
