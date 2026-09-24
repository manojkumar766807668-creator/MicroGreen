import { PageHero } from "../components/ui";
import { req } from "../config/siteConfig";
import { useSEO } from "../hooks/useSEO";
export default function About() {
  useSEO("About", "The story behind mini's greens.");
  return <><PageHero title="Our story." />{["Why we exist", "Our values", "Our farm", "Our mission"].map((t, i) => (
    <section key={t} className={`sec ${i % 2 ? "cream" : ""}`}><div className="wrap narrow"><h2>{t}</h2><p>{req}</p></div></section>))}</>;
}
