import HeroCarousel from "../components/HeroCarousel";
import { WhatIs, Versus, Why, Featured, ProcessPreview } from "../components/sections";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  useSEO("Fresh microgreens", "Fresh microgreens grown with care by mini's greens.");
  return <>
    <div id="home"><HeroCarousel /></div>
    <WhatIs />
    <Versus />
    <div id="benefits"><Why /></div>
    <ProcessPreview />
    <Featured />
    <section className="sec dark home-closing"><div className="wrap"><p className="label">Keep exploring</p><h2>Fresh greens, familiar food, a little more to discover.</h2><div className="row"><Link className="btn" to="/products">View all products <ArrowRight aria-hidden="true" /></Link><Link className="btn ghost" to="/how-to-use">Learn how to use</Link><Link className="btn ghost" to="/farm-visits">Plan a farm visit</Link></div></div></section>
  </>;
}
