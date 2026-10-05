import { useState } from "react";
import { Search, X } from "lucide-react";
import { PageHero, Reveal, Heading, CTASection } from "../components/ui";
import ProductCard, { EmptyProducts } from "../components/ProductCard";
import { products } from "../data/products";
import { useSEO } from "../hooks/useSEO";
import { useLanguage } from "../config/i18n";
export default function Products() {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  useSEO("Our greens", "Browse mini's greens microgreens and enquire on WhatsApp.");
  const normalize = (value) => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
  const normalizedQuery = normalize(query);
  const filteredProducts = products.filter((p) => normalize([p.name, p.taste, p.description, ...(p.benefits || []), ...(p.bestWaysToUse || [])].join(" ")).includes(normalizedQuery));
  return <><PageHero label="Our greens" title="Fresh ideas, grown naturally." sub="Meet our microgreens and explore the flavours, textures, and everyday uses of each variety." />
    <section className="sec cream"><div className="wrap product-intro-grid"><div><p className="label">Explore the range</p><h2>Small greens with their own character.</h2></div><p className="lead">Each variety brings a different flavour and texture to familiar meals. Browse the collection and open any green for growing, storage, and serving details.</p></div></section>
    <section className="sec"><div className="wrap"><div className="product-search"><Search size={19} aria-hidden="true" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("Search microgreens, flavours or meals")} aria-label={t("Search microgreens")} />{query && <button type="button" onClick={() => setQuery("")} aria-label={t("Clear search")}><X size={18} /></button>}</div>{products.length ? filteredProducts.length ? <><p className="search-status" aria-live="polite">{filteredProducts.length} {t(filteredProducts.length === 1 ? "green found" : "greens found")}</p><div className="product-catalog-grid">{filteredProducts.map((p, i) => <Reveal key={p.id} delay={i * 60} className="pgrid-i"><ProductCard p={p} /></Reveal>)}</div></> : <div className="empty"><h3>{t("No greens found.")}</h3><p>{t("Try a different name, flavour, or meal.")}</p></div> : <EmptyProducts />}</div></section>
    <section className="sec cream"><div className="wrap product-quality"><Heading label="Care & quality" title="Learn about every green before you choose.">Product details include flavour, usage ideas, storage guidance and growing information where available. Nutrition notes are general and can vary by variety and growing conditions.</Heading></div></section><CTASection title="Have a question about our greens?" /></>;
}
