import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Img, Btn, PageHero } from "../components/ui";
import ShareButtons from "../components/ShareButtons";
import { products } from "../data/products";
import { waLink, productMessage, productMailto } from "../utils/whatsapp";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../config/i18n";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const p = products.find((x) => x.slug === slug);
  const [i, setI] = useState(0);
  useSEO(p ? p.name : "Product not found", p ? `${p.name} from mini's greens. ${p.description}` : "This product could not be found.");
  if (!p) return <PageHero title="This green seems to have wandered off." sub={<Btn to="/#products">Explore all products</Btn>} />;
  const imgs = p.images.length ? p.images : [null];
  const rows = [
    ["Taste", p.taste], ["Health benefits", p.benefits?.join(", ")], ["Nutrients", p.nutrients?.join(", ")],
    ["Growing time", typeof p.growthTime === "string" ? p.growthTime : p.growthTime?.total],
    ["Shelf life", p.shelfLife], ["Storage method", p.storage], ["Best ways to use", p.bestWaysToUse?.join(", ")]
  ];
  return <section className="sec pd"><div className="wrap pd-in">
    <div className="gallery"><div className="gallery-main"><Img src={imgs[i]} alt={p.name} /></div>
      {imgs.length > 1 && <div className="thumbs">{imgs.map((s, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show image ${k + 1}`} className={k === i ? "on" : ""}><Img src={s} alt="" /></button>)}</div>}</div>
    <div><h1>{t(p.name)}</h1>{p.taste && <p className="muted">{t(p.taste)}</p>}<p>{t(p.description)}</p>
      <div className="row"><Btn href={waLink(productMessage(p))}>Enquire on WhatsApp</Btn><Btn href={productMailto(p)} variant="outline" target="_self">Email Us</Btn></div><ShareButtons /></div></div>
    <div className="wrap"><dl className="facts pd-facts">{rows.filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{t(label)}</dt><dd>{t(value)}</dd></div>)}</dl>
      {Array.isArray(p.growthTime?.timeline) && p.growthTime.timeline.length > 0 && <section className="product-timeline"><h2>Seed-to-harvest timeline</h2><ol>{p.growthTime.timeline.map((stage, index) => <li key={`${stage.day}-${index}`}><span>{stage.day}</span><div><h3>{t(stage.stage)}</h3><p>{t(stage.description)}</p></div></li>)}</ol>{p.growthTime.note && <p className="small">{t(p.growthTime.note)}</p>}</section>}
      <Link className="btn outline product-back-bottom" to="/#products">← {t("Back to Products")}</Link>
    </div></section>;
}
