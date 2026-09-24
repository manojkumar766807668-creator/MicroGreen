import { PageHero, CTASection, Heading } from "../components/ui";
import { UseCases } from "../components/sections";
import { storageTips } from "../data/useCases";
import { useSEO } from "../hooks/useSEO";
export default function HowToUse() {
  useSEO("How to use", "Everyday ways to use microgreens, plus storage tips.");
  return <><PageHero title="Make Every Meal A Little Greener" /><UseCases all />
    <section className="sec cream"><div className="wrap narrow"><Heading title="Storage tips" /><p>{storageTips}</p></div></section><CTASection /></>;
}
