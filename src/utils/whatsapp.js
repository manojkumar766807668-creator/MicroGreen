import { siteConfig as c } from "../config/siteConfig";
export const waLink = (msg) => `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
export const productMessage = (p) => `Hi, I'm interested in ${p.name}.\n\nPlease share more details.`;

export const productMailto = (p) => {
  const body = `Hi mini's greens,\n\nI'm interested in ${p.name}.\n\nPlease share more details.\n\nThank you.`;
  return `mailto:${c.email}?subject=${encodeURIComponent("Enquiry about " + p.name)}&body=${encodeURIComponent(body)}`;
};
