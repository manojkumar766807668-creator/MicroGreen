import { PageHero, CTASection } from "../components/ui";
import { WhatIs, Versus, Why, Trust, FAQ } from "../components/sections";
import { useSEO } from "../hooks/useSEO";
export default function WhyMicrogreens() {
  useSEO("Why microgreens", "What microgreens are and why they belong on your plate.");
  return <><PageHero title="Why microgreens?" sub="Small plants with a lot to say." /><WhatIs /><Versus /><Why /><Trust /><FAQ /><CTASection /></>;
}
