import { PageHero, Heading } from "../components/ui";
import FarmVisitForm from "../components/FarmVisitForm";
import { FarmBand } from "../components/sections";
import { useSEO } from "../hooks/useSEO";
export default function FarmVisits() {
  useSEO("Farm visits", "Plan a visit to the mini's greens farm.");
  return <><PageHero title="Step inside the farm." /><FarmBand />
    <section className="sec"><div className="wrap narrow"><Heading title="Visit options">Choose from the available farm-visit options based on your group and requirements.</Heading><h3>What to expect</h3><p className="lead">Welcome &rarr; Explore the growing environment &rarr; Learn about the growing journey &rarr; Ask questions &rarr; Discover everyday uses</p></div></section>
    <section id="visit-form" className="sec cream"><div className="wrap narrow"><Heading title="Plan Your Visit">Tell us your preferred date, visit type, number of people, and any additional notes. We'll receive your request through WhatsApp and help you plan your visit.</Heading><FarmVisitForm /></div></section></>;
}
