import { useState } from "react";
import { Search, X } from "lucide-react";
import { PageHero, Reveal } from "../components/ui";
import ProductCard, { EmptyProducts } from "../components/ProductCard";
import { products } from "../data/products";
import { useSEO } from "../hooks/useSEO";
export default function Products() {
  const [query, setQuery] = useState("");
  useSEO("Our greens", "Browse mini's greens microgreens and enquire on WhatsApp.");
  const normalize = (value) => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
  const normalizedQuery = normalize(query);
  const filteredProducts = products.filter((p) => normalize([p.name, p.taste, p.description, ...(p.benefits || []), ...(p.bestWaysToUse || [])].join(" ")).includes(normalizedQuery));
  return <><PageHero label="Our greens" title="Fresh ideas, grown naturally." />
    <section className="sec"><div className="wrap"><div className="product-search"><Search size={19} aria-hidden="true" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search microgreens, flavours or meals" aria-label="Search microgreens" />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={18} /></button>}</div>{products.length ? filteredProducts.length ? <><p className="search-status" aria-live="polite">{filteredProducts.length} {filteredProducts.length === 1 ? "green" : "greens"} found</p><div className="pgrid">{filteredProducts.map((p, i) => <Reveal key={p.id} delay={i * 60} className="pgrid-i"><ProductCard p={p} /></Reveal>)}</div></> : <div className="empty"><h3>No greens found.</h3><p>Try a different name, flavour, or meal.</p></div> : <EmptyProducts />}</div></section></>;
}
