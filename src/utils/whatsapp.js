import { siteConfig as c } from "../config/siteConfig";
export const waLink = (msg) => `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
export const productMessage = (p) => {
  const details = [
    p.packSizes[0] && `Pack Size: ${p.packSizes[0]}`,
    p.price && `Price: ₹${p.price}`
  ].filter(Boolean);
  return `Hi, I'm interested in ${p.name}.\n\n${details.length ? `${details.join("\n")}\n\n` : ""}Please share more details.`;
};
export const productMailto = (p) => {
  const body = `Hi mini's greens,\n\nI'm interested in ${p.name}.\n\nPack Size: ${p.packSizes[0] || ""}\nPrice: ${p.price || ""}\n\nPlease share more details.\n\nThank you.`;
  return `mailto:${c.email}?subject=${encodeURIComponent("Enquiry about " + p.name)}&body=${encodeURIComponent(body)}`;
};
