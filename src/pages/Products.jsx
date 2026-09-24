import { PageHero, Reveal } from "../components/ui";
import ProductCard, { EmptyProducts } from "../components/ProductCard";
import { products } from "../data/products";
import { useSEO } from "../hooks/useSEO";
export default function Products() {
  useSEO("Our greens", "Browse mini's greens microgreens and enquire on WhatsApp.");
  return <><PageHero label="Our greens" title="Fresh ideas, grown naturally." />
    <section className="sec"><div className="wrap">{products.length ? <div className="pgrid">{products.map((p, i) => <Reveal key={p.id} delay={i * 60} className="pgrid-i"><ProductCard p={p} /></Reveal>)}</div> : <EmptyProducts />}</div></section></>;
}
