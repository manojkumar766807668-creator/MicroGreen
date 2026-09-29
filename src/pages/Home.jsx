import HeroCarousel from "../components/HeroCarousel";
import { WhatIs, Versus, Why, Trust, Featured, ProcessPreview, UseCases, FarmBand, ShareBand, FAQ } from "../components/sections";
import Contact from "./Contact";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  useSEO("Fresh microgreens", "Fresh microgreens grown with care by mini's greens.");
  return <>
    <div id="home"><HeroCarousel /></div>
    <WhatIs />
    <Versus />
    <div id="benefits"><Why /></div>
    <Trust />
    <Featured />
    <ProcessPreview />
    <UseCases all />
    <section id="about" className="sec about-home"><div className="wrap"><p className="label">About mini's greens</p><h2>Making microgreens easier to know and enjoy.</h2><p className="lead">mini's greens brings fresh microgreens and clear, practical learning together. We want people to understand what these young plants are, how they reach harvest, and how they can fit into familiar meals.</p><p className="about-byline">By Manoj Kumar</p><div className="about-principles"><article><span>01</span><h3>Awareness through learning</h3><p>We explain the stages of growth and the difference between sprouts, microgreens, and mature plants in straightforward terms.</p></article><article><span>02</span><h3>Fresh greens for everyday food</h3><p>We share practical ways to add microgreens to meals already on your table.</p></article><article><span>03</span><h3>A seed-to-table perspective</h3><p>We connect the growing process with the food people prepare at home.</p></article></div></div></section>
    <FarmBand />
    <ShareBand />
    <FAQ />
    <div id="contact"><Contact /></div>
  </>;
}
