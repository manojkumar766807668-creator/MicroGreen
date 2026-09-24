import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Img, Btn, PageHero } from "../components/ui";
import ShareButtons from "../components/ShareButtons";
import { products } from "../data/products";
import { req } from "../config/siteConfig";
import { waLink, productMessage, productMailto } from "../utils/whatsapp";
import { useSEO } from "../hooks/useSEO";
export default function ProductDetails() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);
  const [i, setI] = useState(0);
  useSEO(p ? p.name : "Product not found", p ? `${p.name} from mini's greens. ${p.description}` : "This product could not be found.");
  if (!p) return <PageHero title="This green seems to have wandered off." sub={<Btn to="/products">Explore all products</Btn>} />;
  const imgs = p.images.length ? p.images : [null];
  const rows = [["Taste", p.taste], ["Nutrition", p.nutrients.join(", ")], ["Growing time", p.growthTime], ["Freshness / shelf life", p.shelfLife], ["Storage", p.storage], ["Best ways to use", p.bestWaysToUse.join(", ")]];
  return <section className="sec pd"><div className="wrap pd-in">
    <div className="gallery"><div className="gallery-main"><Img src={imgs[i]} alt={p.name} /></div>
      {imgs.length > 1 && <div className="thumbs">{imgs.map((s, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show image ${k + 1}`} className={k === i ? "on" : ""}><Img src={s} alt="" /></button>)}</div>}</div>
    <div><p className="small"><Link to="/products">← All products</Link></p><h1>{p.name}</h1><p className="muted">{p.taste || req}</p><p>{p.description || req}</p>
      <p className="price">{p.packSizes[0] || req} · {p.price ? `₹${p.price}` : req}</p>
      <div className="row"><Btn href={waLink(productMessage(p))}>Enquire on WhatsApp</Btn><Btn href={productMailto(p)} variant="outline" target="_self">Email Us</Btn></div>
      <ShareButtons title={p.name} /></div></div>
    <div className="wrap"><dl className="facts pd-facts">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v || req}</dd></div>)}</dl></div></section>;
}
