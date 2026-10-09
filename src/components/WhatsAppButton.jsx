
import { MessageCircle } from "lucide-react";

const WHATSAPP = "254723124731";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Eunex Uniforms, I would like to enquire about your products and services."
  );

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${WHATSAPP}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Eunex Uniforms on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}
