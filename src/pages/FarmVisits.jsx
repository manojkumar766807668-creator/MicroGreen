import { Clock3, Leaf, MapPin, Sprout, Users } from "lucide-react";
import { Btn, Heading } from "../components/ui";
import FarmVisitForm from "../components/FarmVisitForm";
import { useSEO } from "../hooks/useSEO";
import { siteConfig } from "../config/siteConfig";

export default function FarmVisits() {
  useSEO("Farm visits", "Plan a visit to learn about the microgreen growing journey.");
  return <div className="farm-visit-page">
    <section className="farm-visit-hero"><div className="wrap farm-visit-hero-grid">
      <div className="farm-visit-copy"><p className="label">Visit mini’s greens</p><h1>See how fresh greens begin.</h1><p>Step into the growing journey, explore microgreens up close, and take home new ideas for everyday meals.</p><div className="farm-visit-actions"><Btn to="#visit-form">Request a visit</Btn><a className="farm-visit-text-link" href={`https://wa.me/${siteConfig.whatsapp}`}><span>Have a question?</span> Chat with us</a></div><div className="farm-visit-meta"><span><MapPin/>Hyderabad</span><span><Users/>Visits by request</span></div></div>
      <div className="farm-visit-image"><img src={siteConfig.contactImage} alt="Young greens growing in trays"/><div className="farm-visit-image-note"><Sprout/><span>From seed<br/>to table</span></div></div>
    </div></section>
    <section className="sec farm-visit-experience"><div className="wrap"><div className="farm-visit-section-head"><div><p className="label">A closer look at growing</p><h2>Curiosity is welcome here.</h2></div><p>Every visit is shaped around what is growing and the questions your group brings. We’ll confirm the details with you before your visit.</p></div><div className="farm-visit-cards">
      <article><span className="farm-visit-icon"><Sprout/></span><p className="label">01 / Explore</p><h3>See the growing stages</h3><p>Get a closer look at young plants and the way a crop develops.</p></article>
      <article><span className="farm-visit-icon"><Leaf/></span><p className="label">02 / Discover</p><h3>Learn about microgreens</h3><p>Understand what makes a microgreen, how it differs from a sprout, and when it is harvested.</p></article>
      <article><span className="farm-visit-icon"><Users/></span><p className="label">03 / Connect</p><h3>Bring your questions</h3><p>Talk about varieties, growing, and simple ways to enjoy greens in everyday food.</p></article>
    </div></div></section>
    <section className="sec cream farm-visit-flow"><div className="wrap farm-visit-flow-grid"><div><p className="label">Plan ahead</p><h2>A simple visit, arranged around you.</h2><p className="lead">Send a request with your preferred date and group size. We’ll get back to you to confirm availability, visit duration, and arrangements.</p><div className="farm-visit-facts"><span><Clock3/>Duration confirmed with your visit</span><span><MapPin/>{siteConfig.address}</span></div></div><ol className="farm-visit-steps">
      <li><span>01</span><div><h3>Request a date</h3><p>Tell us when you’d like to come and who will be joining.</p></div></li><li><span>02</span><div><h3>Confirm the details</h3><p>We’ll contact you to discuss availability and what to expect.</p></div></li><li><span>03</span><div><h3>Come explore</h3><p>Join us to see the growing journey and ask your questions.</p></div></li>
    </ol></div></section>
    <section id="visit-form" className="sec farm-visit-request"><div className="wrap farm-visit-request-grid"><div><p className="label">Your visit starts here</p><h2>Let’s find a day that works.</h2><p>Share a few details and we’ll continue the conversation on WhatsApp. Your information is not stored on this website.</p><div className="farm-visit-contact"><MapPin/><span>{siteConfig.address}</span></div></div><div className="farm-visit-form-card"><Heading title="Request a farm visit">We’ll follow up to confirm your preferred date and visit details.</Heading><FarmVisitForm /></div></div></section>
  </div>;
}
