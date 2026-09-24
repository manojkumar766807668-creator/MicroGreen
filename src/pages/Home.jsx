import { CTASection } from "../components/ui";
import HeroCarousel from "../components/HeroCarousel";
import { WhatIs, Versus, Why, Trust, Featured, ProcessPreview, UseCases, FarmBand, ShareBand, FAQ } from "../components/sections";
import { useSEO } from "../hooks/useSEO";
export default function Home() {
  useSEO("Fresh microgreens", "Fresh microgreens grown with care by mini's greens.");
  return <>
    <HeroCarousel />
    <div id="what" /><WhatIs /><Versus /><Why /><Trust /><Featured /><ProcessPreview /><UseCases /><FarmBand /><ShareBand /><FAQ /><CTASection />
  </>;
}
