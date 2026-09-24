import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Img } from "./ui";
import { req } from "../config/siteConfig";
import { waLink, productMessage } from "../utils/whatsapp";
export default function ProductCard({ p, feature }) {
  return <article className={`pcard ${feature ? "feature" : ""}`}>
    <Link to={`/products/${p.slug}`} className="pcard-img" aria-label={`View ${p.name}`}><Img src={p.images[0]} alt={p.name} /><ArrowUpRight className="pcard-arrow" /></Link>
    <div className="pcard-body"><h3>{p.name}</h3><p className="muted">Taste: {p.taste || req}</p>
      <p className="small">{p.packSizes[0] || req} · {p.price ? `₹${p.price}` : req}</p>
      <p>{p.benefits[0] || req}</p>
      <div className="row"><Link className="link" to={`/products/${p.slug}`}>View Product</Link>
        <a className="icon-link" href={waLink(productMessage(p))} target="_blank" rel="noreferrer" aria-label={`Enquire about ${p.name} on WhatsApp`}><MessageCircle size={18} /></a></div></div></article>;
}
export function EmptyProducts() {
  return <div className="empty"><h3>Our greens are getting ready.</h3><p>Products will appear here soon.</p></div>;
}
