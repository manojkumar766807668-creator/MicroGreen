import { PageHero, CTASection } from "../components/ui";
import ProcessTimeline from "../components/ProcessTimeline";
import { steps } from "../data/process";
import { useSEO } from "../hooks/useSEO";
export default function OurProcess() {
  useSEO("Our process", "How mini's greens goes from seed to harvest.");
  return <><PageHero title="From seed to harvest." sub="From the first seed to the final harvest, every stage matters." /><section className="sec process-overview"><div className="wrap process-overview-grid"><div><p className="label">The complete growing journey</p><h2>A small seed becomes a fresh young green.</h2></div><p className="about-copy-large">Growing microgreens is a journey of carefully connected stages. A crop begins with suitable seeds, moves through seeding and germination, develops into young plants, is monitored throughout its growth, and is finally harvested and prepared for fulfilment.</p></div></section><section className="sec"><div className="wrap"><ProcessTimeline steps={steps} /></div></section><section className="sec cream process-summary"><div className="wrap"><p className="label">Complete seed-to-harvest journey</p><h2>Seven stages. One connected story.</h2><div className="process-summary-grid">{steps.map((step) => <div key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div><p className="process-endline">Seed <span>→</span> Sprout <span>→</span> Young plant <span>→</span> Microgreen <span>→</span> Harvest <span>→</span> Table</p></div></section><CTASection /></>;
}
