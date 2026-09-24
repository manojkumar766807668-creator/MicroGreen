import { PageHero, CTASection } from "../components/ui";
import ProcessTimeline from "../components/ProcessTimeline";
import { steps } from "../data/process";
import { useSEO } from "../hooks/useSEO";
export default function OurProcess() {
  useSEO("Our process", "How mini's greens goes from seed to harvest.");
  return <><PageHero title="From seed to harvest." /><section className="sec"><div className="wrap"><ProcessTimeline steps={steps} /></div></section><CTASection /></>;
}
