import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { waLink } from "../utils/whatsapp";
export default function WhatsAppButton() {
  return <a className="wa" href={waLink(siteConfig.whatsappGreeting)} target="_blank" rel="noreferrer" aria-label="Chat with mini's greens on WhatsApp"><MessageCircle /></a>;
}
