import { Fragment, useState } from "react";
import { Sprout, Leaf, Wheat, Heart, Share2, ArrowRight, MessageCircle } from "lucide-react";
import { Btn, Reveal, Img, Heading, useToast } from "./ui";
import ProductCard, { EmptyProducts } from "./ProductCard";
import FAQAccordion from "./FAQAccordion";
import { products } from "../data/products";
import { steps } from "../data/process";
import { useCases } from "../data/useCases";
import { faqs } from "../data/faqs";
import { nativeShare } from "../utils/sharing";
import { req } from "../config/siteConfig";
import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../config/i18n";
import { waLink } from "../utils/whatsapp";
import logo from "../assets/logo.jpeg";
import FarmVisitForm from "./FarmVisitForm";

const stages = [
  { name: "Seed", text: "A seed is where the plant starts growing.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfjNRrDjxkxAtYc7bvl0ecrv7Xt0P1J0TtrZnBjhysA&s=10" },
  { name: "Sprout", text: "The seed begins to grow, and a small root and shoot appear.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKR7M8fICleRNcjD9myGd_g8By9J3g3xviWFYuLWwXg&s=10" },
  { name: "Microgreen", text: "A young edible plant that is harvested while it is still small and tender.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPeOGuTiXelo9u5368uk0CHBc3LLADTJzI9l6qSQAEw&s=10" },
  { name: "Mature plant", text: "If it keeps growing, it becomes the full-sized vegetable or herb.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSbmA_9J-6gDLf--zWq6RigmaQ3MXU7_kcLpVXc5onQ&s=10" }
];
const trustPoints = [
  ["Farming", "Explore the general journey from seed selection through growth, harvest, and fulfilment."],
  ["Nutrition", "Microgreens contain naturally occurring nutrients. Their composition varies by variety and growing conditions."],
  ["Accessibility", "Learn simple ways to add microgreens to familiar Indian meals without changing your usual recipes."],
  ["Wellness", "Fresh greens can be one part of a varied, balanced way of eating; we avoid medical or treatment claims."]
];

export function WhatIs() {
  const { t } = useLanguage();
  return <section id="what-are-microgreens" className="sec what-is"><div className="wrap">
    <header className="what-is-heading"><p className="label">What are microgreens?</p><h2>{t("Young edible plants, harvested early.")}</h2><p className="lead">{t("Microgreens are young edible plants harvested at an early stage.")}</p></header>
    <div className="stages" aria-label="Seed to sprout to microgreen to mature plant">{stages.map((stage, index) => <Fragment key={stage.name}>
      <article className={`stage ${index === 2 ? "is-microgreen" : ""}`}>
        <div className={`stage-visual stage-visual-${index}`}>{stage.image ? <img src={stage.image} alt={`${stage.name} stage`} loading="lazy" /> : <StageIllustration stage={index} />}</div>
        <strong>{t(stage.name)}</strong><p>{t(stage.text)}</p>
      </article>
      {index < stages.length - 1 && <ArrowRight className="stage-arrow" aria-hidden="true" />}
    </Fragment>)}</div>
  </div></section>;
}

function StageIllustration({ stage }) {
  return <svg viewBox="0 0 180 120" role="img" aria-label={`${stages[stage].name} illustration`}>
    {stage === 0 && <><ellipse cx="90" cy="80" rx="21" ry="13" fill="#8f5a31" transform="rotate(-28 90 80)"/><ellipse cx="85" cy="76" rx="6" ry="3" fill="#c88b4f" transform="rotate(-28 85 76)"/><path d="M30 101h120" stroke="#c8ad7a" strokeWidth="3" strokeLinecap="round"/></>}
    {stage === 1 && <><path d="M90 92c-2-16 2-28 0-42m0 42c-8 9-13 13-19 17m19-17c7 8 13 12 20 16" fill="none" stroke="#8c6941" strokeWidth="3" strokeLinecap="round"/><path d="M90 57c-17-2-23-12-21-22 15 0 23 7 21 22Zm1-8c2-16 12-23 24-20-1 14-9 21-24 20Z" fill="#79a84c"/><ellipse cx="90" cy="94" rx="8" ry="6" fill="#8f5a31"/><path d="M30 101h120" stroke="#c8ad7a" strokeWidth="3" strokeLinecap="round"/></>}
    {stage === 2 && <><path d="M52 89V51m38 38V38m38 51V49" stroke="#527b34" strokeWidth="4" strokeLinecap="round"/><path d="M51 62c-18-1-23-12-20-23 15 0 23 8 20 23Zm2-10c3-15 13-20 24-17-2 13-10 19-24 17Zm36-1C71 50 68 38 73 28c14 4 19 14 16 23Zm2-6c4-14 15-18 25-13-4 13-13 17-25 13Zm35 9c-15-4-18-15-12-25 13 5 17 15 12 25Zm2-8c5-13 16-16 26-10-5 12-15 15-26 10Z" fill="#6f9c43"/><path d="M30 101h120" stroke="#c8ad7a" strokeWidth="3" strokeLinecap="round"/></>}
    {stage === 3 && <><path d="M90 87V31m0 28L66 43m24 31 24-27" fill="none" stroke="#527b34" strokeWidth="5" strokeLinecap="round"/><path d="M67 48C47 47 42 33 48 22c17 3 24 14 19 26Zm25-10c3-19 17-26 30-20-3 17-14 24-30 20ZM90 67C72 63 69 50 75 40c16 4 21 15 15 27Zm22-9c4-17 17-22 29-15-5 15-16 21-29 15ZM71 99h38l-5 14H76l-5-14Z" fill="#6f9c43"/><path d="M30 98h120" stroke="#c8ad7a" strokeWidth="3" strokeLinecap="round"/></>}
  </svg>;
}

const vs = {
  micro: ["Microgreens", "Microgreens are young edible plants harvested after their first leaves and stems have developed. They are grown in a growing medium and cut above it, with both the tender leaves and stem eaten. They are harvested later than sprouts and can be added to salads, sandwiches, wraps, bowls, breakfast dishes, and other everyday meals.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVH1qt_hdBC45QPs0SXGfZGFu-6izjKrbU9ufpL-lr4eT--9yMyNl7n8D&s=10"],
  sprout: ["Sprouts", "Sprouts are at an earlier stage of plant growth, beginning from a germinated seed before the plant develops into a leafy young plant. They are commonly eaten as a whole germinated seed with the young root and shoot. Their fresh, crunchy texture makes them suitable for salads, sandwiches, bowls, and other everyday dishes.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpYPqqq1fiRspW1oqxxQZKTnq7q7nskjmesH3hJFf8w&s=10"]
};
export function Versus() {
  const [on, setOn] = useState("micro");
  return <section className="sec cream"><div className="wrap"><Heading title="Microgreens vs sprouts">Microgreens grow beyond germination. Compare their growth stage and what is harvested.</Heading>
    <div className="vs">{Object.entries(vs).map(([k, [t, d]]) => (
      <button key={k} className={`vs-panel ${k} ${on === k ? "on" : ""}`} style={{ "--vs-image": `url("${vs[k][2]}")` }} aria-pressed={on === k} onClick={() => setOn(k)}><h3>{t}</h3><p>{d}</p></button>))}</div></div></section>;
}

const why = [
  [Sprout, "Freshness", "A bright, fresh finish", "Harvested young and enjoyed fresh, microgreens bring colour and a crisp finish to a meal. Add them just before serving to keep their delicate leaves and stems at their best."],
  [Leaf, "Nutrition", "A little more variety", "Microgreens contain naturally occurring nutrients, with levels that vary by plant variety and growing conditions. Enjoy them as one part of a varied, balanced diet."],
  [Wheat, "Flavour & texture", "Distinctive taste, tender bite", "Flavours range from mild and sweet to earthy or peppery, depending on the variety. Their tender leaves and stems add contrast to salads, sandwiches, dal, and other familiar dishes."],
  [Heart, "Everyday use", "Easy to make your own", "There is no special recipe to learn. Add a handful to poha, dosa, breakfast bowls, wraps, or a sandwich for a simple way to bring fresh greens to food you already enjoy."]
];
export function Why() {
  const { t } = useLanguage();
  return <section id="why-microgreens" className="sec"><div className="wrap why">
    <header className="why-heading"><p className="label">Everyday benefits</p><h2>{t("Why microgreens?")}</h2><p className="lead">A fresh, flexible ingredient that brings flavour, texture, and variety to everyday meals.</p></header>
    {why.map(([I, category, heading, text], i) => <Reveal key={category} className={`why-b w${i}`} delay={i * 60}><span className="big-n">0{i + 1}</span><I aria-hidden="true" /><h3>{t(category)}</h3><strong>{t(heading)}</strong><p>{t(text)}</p></Reveal>)}</div></section>;
}

export function Trust() {
  const { t } = useLanguage();
  return <section className="sec dark"><div className="wrap"><h2 className="giant">{t("Grown with intention.")}</h2>
    <ul className="trust">{trustPoints.map(([title, text]) => <li key={title}><h3>{t(title)}</h3><p>{t(text)}</p></li>)}</ul></div></section>;
}

export function Featured() {
  return <section className="sec" id="products"><div className="wrap"><Heading label="Our greens" title="Find a green for your table.">Compare taste, texture, pack details, and price enquiries across our microgreens.</Heading>
    {products.length ? <div className="featured-product-grid">{products.map((p, i) => <Reveal key={p.id} delay={i * 40} className="pgrid-i"><ProductCard p={p} /></Reveal>)}</div> : <EmptyProducts />}
  </div></section>;
}

export function ProcessPreview() {
  const summaries = [
    "Choose a suitable seed variety and begin with healthy, viable seed.",
    "Spread seed across the growing medium to establish an even crop.",
    "Moisture supports germination as the first shoots emerge.",
    "Young plants develop their first leaves and tender stems.",
    "Observe moisture, light, and crop development as the greens grow.",
    "Harvest at a suitable young stage, then handle the greens carefully.",
    "Pack prepared greens for fulfilment and their journey to the customer."
  ];
  return <section className="sec cream" id="growing-process"><div className="wrap"><Heading title="How we grow">A general look at the stages of a microgreen crop, from seed selection through fulfilment.</Heading>
    <div className="track home-process" aria-label="Complete growing journey">{steps.map((s, i) => <Reveal key={s.n} className="track-i" delay={i * 35}><span className="tl-n">{s.n}</span><h3>{s.title}</h3><p>{summaries[i]}</p></Reveal>)}</div>
    </div></section>;
}

export function UseCases({ all }) {
  const list = all ? useCases : useCases.slice(0, 3);
  return <section id="how-to-eat" className="sec"><div className="wrap"><Heading title="How to eat microgreens">Keep it simple: add fresh greens at the end so their delicate texture stays noticeable.</Heading>
    <div className={`uses ${all ? "uses-detailed" : "uses-preview"}`}>{list.map((u, i) => <Reveal key={u.name} className={`use u${i}`} delay={i * 40}><Img src={u.image} alt={u.name} /><div><h3>{u.name}</h3>{u.text !== "[CONTENT REQUIRED]" && <p>{u.text.split(". ").slice(0, 2).join(". ")}.</p>}</div></Reveal>)}</div>
    <p className="use-ideas"><strong>Try them in:</strong> Salads · Sandwiches · Wraps · Dosa · Poha · Dal · Breakfast bowls · Fresh toppings</p>
    <p className="storage-tip"><strong>Storage tip:</strong> Refrigerate in the supplied container, keep away from excess moisture, and use while fresh. Follow the product’s packaging instructions.</p></div></section>;
}

export function FarmBand() {
  const { t } = useLanguage();
  const [visitFormOpen, setVisitFormOpen] = useState(false);
  return <section id="farm-visit" className="sec farm"><div className="wrap"><p className="label">Farm visits</p><h2 className="giant">{t("See the growing journey up close.")}</h2>
    <p className="lead">A farm visit is an opportunity to see how microgreens develop and ask practical questions about growing and using them.</p>
    <dl className="facts"><div><dt>During the visit</dt><dd>Explore the growing area, observe crops at different stages, and learn what makes a microgreen ready to harvest.</dd></div><div><dt>Who can visit</dt><dd>Individuals and groups interested in learning about microgreens are welcome to send a request.</dd></div><div><dt>Planning</dt><dd>Share your preferred date and group size. The team will confirm availability and visit details with you.</dd></div></dl>
    <div className="farm-home-layout"><div><h3>A simple visit flow</h3><ol className="visit-flow"><li>Arrive and get oriented</li><li>Explore the growing stages</li><li>Ask questions and learn how to use microgreens</li></ol><Btn type="button" aria-expanded={visitFormOpen} aria-controls="visit-form" onClick={() => setVisitFormOpen((value) => !value)}>{visitFormOpen ? "Close Visit Form" : "Plan Your Visit"}</Btn></div>{visitFormOpen && <div id="visit-form" className="visit-form-panel"><h3>Request a visit</h3><p className="visit-form-intro">Send your details to mini’s greens through WhatsApp. The website does not store your form.</p><FarmVisitForm /></div>}</div></div></section>;
}

export function ShareBand() {
  const [toast, show] = useToast();
  const { t } = useLanguage();
  return <section className="sec share-band"><div className="wrap center"><h2>{t("Found something fresh?")}<br />{t("Share it with someone who'd love it.")}</h2>
    <Btn type="button" onClick={() => nativeShare(window.location.href, "mini's greens", show)}><Share2 size={16} aria-hidden="true" />Share mini's greens</Btn>{toast}</div></section>;
}

export function FAQ() {
  return <section id="faq" className="sec faq-home"><div className="wrap"><div className="faq-home-layout"><div className="faq-home-intro"><p className="label">FAQ / Help</p><h2>Quick answers,<br/>simply explained</h2><p>Everything you need to know about our microgreens, from growing to storage, usage and farm visits.</p><div className="faq-home-art"><img src={logo} alt="mini's greens" /></div></div><div className="faq-home-content"><FAQAccordion items={faqs}/><div className="faq-help"><span className="faq-help-icon"><MessageCircle size={22}/></span><div><strong>Still have a question?</strong><p>We’re happy to help on WhatsApp.</p></div><a href={waLink(siteConfig.whatsappGreeting)}> <MessageCircle size={17}/> WhatsApp us <ArrowRight size={17}/></a></div></div></div></div></section>;
}
