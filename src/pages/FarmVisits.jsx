import { PageHero, Heading } from "../components/ui";
import FarmVisitForm from "../components/FarmVisitForm";
import { useSEO } from "../hooks/useSEO";

export default function FarmVisits() {
  useSEO("Farm visits", "Plan a visit to learn about the microgreen growing journey.");
  return <>
    <PageHero title="Step inside the growing journey." sub="See how microgreens develop and learn how they can be part of everyday food." />
    <section className="sec"><div className="wrap farm-page-grid">
      <div><p className="label">What to expect</p><h2>Explore the stages, ask questions, and learn together.</h2><p className="lead">A visit can include an introduction to microgreens, a look at crops at different stages, and practical ideas for using young greens in familiar meals.</p></div>
      <div><h3>A simple visit flow</h3><ol className="visit-flow"><li>Arrive and get oriented</li><li>Explore the growing stages</li><li>Learn what makes a microgreen ready to harvest</li><li>Ask questions about varieties and everyday use</li></ol><p className="muted">Share your preferred date and group details below. mini’s greens will confirm availability, duration, and visit arrangements.</p></div>
    </div></section>
    <section id="visit-form" className="sec cream"><div className="wrap narrow"><Heading title="Plan your visit">Send a request through WhatsApp. The website does not store your form details.</Heading><FarmVisitForm /></div></section>
  </>;
}
