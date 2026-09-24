import { useState } from "react";
import { Sprout, Leaf, Wheat, Heart, Share2 } from "lucide-react";
import { Btn, Reveal, Img, Heading, useToast } from "./ui";
import ProductCard, { EmptyProducts } from "./ProductCard";
import FAQAccordion from "./FAQAccordion";
import { products } from "../data/products";
import { steps } from "../data/process";
import { useCases } from "../data/useCases";
import { faqs } from "../data/faqs";
import { nativeShare } from "../utils/sharing";
import { req } from "../config/siteConfig";

const stages = [["Seed", "Where every plant begins."], ["Sprout", "The seed wakes up."], ["Microgreen", "First leaves open. This is the stage we harvest."], ["Mature plant", "The full-grown vegetable or herb."]];
const trustPoints = [
  ["Careful growing", "Every stage of the growing journey is approached with care and attention."],
  ["Freshness", "Harvested at an early stage to bring fresh greens to everyday meals."],
  ["Quality", "A focus on clean, consistent growing and careful handling from seed to harvest."],
  ["Transparency", "Clear information about our greens, growing journey, products and how to use them."]
];

export function WhatIs() {
  const [on, setOn] = useState(2);
  return <section className="sec what-is"><div className="wrap about-split">
    <Reveal className="about-visual" aria-hidden="true">
      <img className="about-produce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zAs5Xyjs2tMuHpH0HV5YFuvkJCw1D2-tFelaKeNumHD7zDL-E8RRhwQ&s=10" alt="" />
      <img className="about-inset" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=85" alt="" />
    </Reveal>
    <Reveal className="about-copy" delay={100}>
      <h2>Tiny Plants, Big Impact</h2>
      <p className="lead">Mini's greens is a homegrown microgreens brand on a mission to make healthy living simple and sustainable. We grow science-backed, nutrient-rich greens with care and purpose, connecting people to real, natural nutrition.</p>
      <Btn to="/about">Read more</Btn>
    </Reveal>
  </div>
    <div className="wrap stages" role="tablist" aria-label="Growth stages">{stages.map(([t, d], i) => (
      <button key={t} role="tab" aria-selected={on === i} className={`stage ${on === i ? "on" : ""}`} onClick={() => setOn(i)}>
        <span className={`plant p${i}`} aria-hidden="true" /><strong>{t}</strong><span className="small">{d}</span></button>))}</div></section>;
}

const vs = {
  micro: ["Microgreens", "Microgreens are young edible plants harvested after their first leaves and stems have developed. They are grown in a growing medium and cut above it, with both the tender leaves and stem eaten. They are harvested later than sprouts and can be added to salads, sandwiches, wraps, bowls, breakfast dishes, and other everyday meals.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVH1qt_hdBC45QPs0SXGfZGFu-6izjKrbU9ufpL-lr4eT--9yMyNl7n8D&s=10"],
  sprout: ["Sprouts", "Sprouts are at an earlier stage of plant growth, beginning from a germinated seed before the plant develops into a leafy young plant. They are commonly eaten as a whole germinated seed with the young root and shoot. Their fresh, crunchy texture makes them suitable for salads, sandwiches, bowls, and other everyday dishes.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpYPqqq1fiRspW1oqxxQZKTnq7q7nskjmesH3hJFf8w&s=10"]
};
export function Versus() {
  const [on, setOn] = useState("micro");
  return <section className="sec cream"><div className="wrap"><Heading title="Microgreens vs sprouts">Tap a side to see the difference.</Heading>
    <div className="vs">{Object.entries(vs).map(([k, [t, d]]) => (
      <button key={k} className={`vs-panel ${k} ${on === k ? "on" : ""}`} style={{ "--vs-image": `url("${vs[k][2]}")` }} aria-pressed={on === k} onClick={() => setOn(k)}><h3>{t}</h3><p>{d}</p></button>))}</div></div></section>;
}

const why = [
  [Sprout, "Farming", "Grown with care", "Thoughtfully grown and harvested at an early stage, when microgreens are young, fresh and ready to use."],
  [Leaf, "Nutrition", "Small greens, real food", "Microgreens can add fresh flavour, colour and variety to everyday meals."],
  [Wheat, "Accessibility", "Easy to add", "From breakfast to lunch and dinner, microgreens can be added to familiar everyday foods."],
  [Heart, "Wellness", "A fresh everyday choice", "Make your everyday meals more colourful, fresh and interesting with microgreens."]
];
export function Why() {
  return <section className="sec"><div className="wrap why">
    <h2 className="giant why-c">Small plants.<br />A fresh way to eat.</h2>
    {why.map(([I, t, heading, text], i) => <Reveal key={t} className={`why-b w${i}`} delay={i * 80}><span className="big-n">{i + 1}</span><I aria-hidden="true" /><h3>{t}</h3><strong>{heading}</strong><p>{text}</p></Reveal>)}</div></section>;
}

export function Trust() {
  return <section className="sec dark"><div className="wrap"><h2 className="giant">Grown with intention.</h2>
    <ul className="trust">{trustPoints.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul></div></section>;
}

export function Featured() {
  const [a, ...rest] = products.slice(0, 3);
  return <section className="sec"><div className="wrap"><Heading title="Fresh from the farm">Our featured greens.</Heading>
    {a ? <div className="feat"><ProductCard p={a} feature /><div className="feat-side">{rest.slice(0, 2).map((p) => <ProductCard key={p.id} p={p} />)}</div></div> : <EmptyProducts />}
    <div className="center"><Btn to="/products" variant="outline">See more products</Btn></div></div></section>;
}

export function ProcessPreview() {
  return <section className="sec cream"><div className="wrap"><Heading title="From seed to harvest" />
    <div className="track" tabIndex="0" aria-label="Process steps">{steps.map((s, i) => <Reveal key={s.n} className="track-i" delay={i * 60}><span className="tl-n">{s.n}</span><h3>{s.title}</h3></Reveal>)}</div>
    <Btn to="/our-process" variant="outline">See our process</Btn></div></section>;
}

export function UseCases({ all }) {
  const list = all ? useCases : useCases.slice(0, 3);
  return <section className="sec"><div className="wrap"><Heading title="A little green goes a long way" />
    <div className="uses">{list.map((u, i) => <Reveal key={u.name} className={`use u${i}`} delay={i * 60}><Img src={u.image} alt={u.name} /><div><h3>{u.name}</h3>{u.text !== "[CONTENT REQUIRED]" && <p>{u.text}</p>}{u.placement !== "[CONTENT REQUIRED]" && <p className="small">Where the greens go: {u.placement}</p>}{u.product !== "[CONTENT REQUIRED]" && <p className="small">Product used: {u.product}</p>}</div></Reveal>)}</div>
    {!all && <Btn to="/how-to-use">See more ways</Btn>}</div></section>;
}

export function FarmBand() {
  return <section className="sec farm"><div className="wrap"><h2 className="giant">Come see where<br />the greens begin.</h2>
    <p className="lead">Step beyond the screen and experience the journey behind your greens. Discover how microgreens are grown, explore their journey from seed to harvest, and get a closer look at the growing process.</p>
    <dl className="facts"><div><dt>What you'll see</dt><dd>Explore the growing environment, see the different stages of the microgreen journey, and learn how young plants develop before harvest.</dd></div><div><dt>Duration</dt><dd>Visit duration: To be confirmed.</dd></div><div><dt>Who it's for</dt><dd>Farm visits are for people interested in learning more about microgreens, their growing journey, and everyday use.</dd></div></dl>
    <Btn to="/farm-visits">Plan Your Visit</Btn></div></section>;
}

export function ShareBand() {
  const [toast, show] = useToast();
  return <section className="sec share-band"><div className="wrap center"><h2>Found something fresh?<br />Share it with someone who'd love it.</h2>
    <Btn onClick={() => nativeShare(window.location.origin, "mini's greens", show)}><Share2 size={16} aria-hidden="true" />Share mini's greens</Btn>{toast}</div></section>;
}

export function FAQ() {
  return <section className="sec"><div className="wrap narrow"><Heading title="Questions, answered" /><FAQAccordion items={faqs} /></div></section>;
}
