import { siteConfig as c } from "../config/siteConfig";
export const waLink = (msg) => `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
export const productMessage = (p) => {
  const sizes = p.packSizes?.length ? p.packSizes.join(", ") : "Please share the available pack sizes";
  const price = p.price != null ? `₹${p.price}` : "Please share the current price";
  return `Hi mini's greens, I'm interested in ${p.name}.\n\nPack sizes: ${sizes}\nPrice: ${price}\n\nPlease let me know the current availability.`;
};

export const productMailto = (p) => {
  const sizes = p.packSizes?.length ? p.packSizes.join(", ") : "Please share the available pack sizes";
  const price = p.price != null ? `₹${p.price}` : "Please share the current price";
  const body = `Hi mini's greens,\n\nI'm interested in ${p.name}.\nPack sizes: ${sizes}\nPrice: ${price}\n\nPlease let me know the current availability.\n\nThank you.`;
  return `mailto:${c.email}?subject=${encodeURIComponent("Enquiry about " + p.name)}&body=${encodeURIComponent(body)}`;
};
