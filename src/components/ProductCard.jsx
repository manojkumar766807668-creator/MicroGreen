import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Img } from "./ui";
import { useLanguage } from "../config/i18n";
export default function ProductCard({ p, feature }) {
  const { t } = useLanguage();
  return <article className={`pcard ${feature ? "feature" : ""}`}>
    <Link to={`/products/${p.slug}`} className="pcard-img" aria-label={`View ${p.name}`}><Img src={p.images[0]} alt={p.name} /><ArrowUpRight className="pcard-arrow" /></Link>
    <div className="pcard-body"><h3><Link to={`/products/${p.slug}`}>{t(p.name)}</Link></h3>{p.taste && <p className="muted">{t("Taste")}: {t(p.taste)}</p>}
      {p.benefits?.[0] && <p>{p.benefits[0]}</p>}
    </div></article>;
}
export function EmptyProducts() {
  return <div className="empty"><h3>Our greens are getting ready.</h3><p>Products will appear here soon.</p></div>;
}
