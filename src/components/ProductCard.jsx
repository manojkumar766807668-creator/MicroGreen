import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Img } from "./ui";
import { waLink, productMessage } from "../utils/whatsapp";
import { useLanguage } from "../config/i18n";
export default function ProductCard({ p, feature }) {
  const { t } = useLanguage();
  return <article className={`pcard ${feature ? "feature" : ""}`}>
    <Link to={`/products/${p.slug}`} className="pcard-img" aria-label={`View ${p.name}`}><Img src={p.images[0]} alt={p.name} /><ArrowUpRight className="pcard-arrow" /></Link>
    <div className="pcard-body"><h3>{t(p.name)}</h3>{p.taste && <p className="muted">{t("Taste")}: {t(p.taste)}</p>}
      {(p.packSizes[0] || p.price) && <p className="small">{p.packSizes[0] || ""}{p.packSizes[0] && p.price ? " · " : ""}{p.price ? `₹${p.price}` : ""}</p>}
      {p.benefits[0] && <p>{p.benefits[0]}</p>}
      <div className="row"><Link className="link" to={`/products/${p.slug}`}>{t("View Product")}</Link>
        <a className="icon-link" href={waLink(productMessage(p))} target="_blank" rel="noreferrer" aria-label={`Enquire about ${p.name} on WhatsApp`}><MessageCircle size={18} /></a></div></div></article>;
}
export function EmptyProducts() {
  return <div className="empty"><h3>Our greens are getting ready.</h3><p>Products will appear here soon.</p></div>;
}
