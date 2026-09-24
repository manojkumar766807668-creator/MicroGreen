import { PageHero, CTASection, Heading, Reveal } from "../components/ui";
import { WhatIs, Versus, ProcessPreview } from "../components/sections";
import { useSEO } from "../hooks/useSEO";

const examples = [
  ["Broccoli", "Mild and fresh, with a clean flavor for salads, sandwiches, and bowls."],
  ["Radish", "Crisp and peppery, adding energy to salads and wraps."],
  ["Sunflower", "Crunchy and slightly nutty, with a satisfying texture."],
  ["Pea shoots", "Tender, fresh, and naturally sweet for salads and cooked dishes."],
  ["Mustard", "A stronger spicy flavor for adding intensity to meals."],
  ["Beetroot", "Vibrant in appearance with a mild earthy flavor."]
];

export default function WhatMicrogreens() {
  useSEO("What are microgreens?", "Learn what microgreens are, how they grow, and how they differ from sprouts.");
  return <>
    <PageHero title="What are microgreens?" sub="Young edible plants, harvested at their freshest stage." />
    <section className="sec"><div className="wrap micro-learn-grid">
      <Reveal><p className="label">The simple answer</p><h2>Small plants with fresh possibility.</h2></Reveal>
      <Reveal delay={100}><p className="about-copy-large">Microgreens are young, edible plants harvested shortly after their first leaves develop. They are grown from vegetables, herbs, and other edible plants, then cut above the growing medium so the tender leaves and stems can be enjoyed.</p><p>They are not sprouts and they are not fully grown vegetables. Microgreens sit between those stages: they have developed leaves, but are harvested while the plant is still young.</p></Reveal>
    </div></section>
    <WhatIs />
    <section className="sec cream"><div className="wrap"><Heading label="Common varieties" title="Different plants, different personalities." /><div className="variety-grid">{examples.map(([name, text], i) => <Reveal key={name} delay={i * 50} className="variety-item"><span>{String(i + 1).padStart(2, "0")}</span><h3>{name} microgreens</h3><p>{text}</p></Reveal>)}</div></div></section>
    <Versus />
    <ProcessPreview />
    <CTASection title="Ready to discover your greens?" />
  </>;
}
