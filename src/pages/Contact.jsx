import { useState } from "react";
import { ArrowRight, Heart, Leaf, Mail, MapPin, MessageCircle, Phone, Sprout } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { waLink } from "../utils/whatsapp";

export default function Contact() {
  const c = siteConfig;
  const [form, setForm] = useState({ name: "", reply: "", message: "" });
  const submit = (event) => {
    event.preventDefault();
    const body = `Hello mini's greens,\n\nName: ${form.name}\nPhone / Email: ${form.reply}\n\n${form.message}`;
    window.open(waLink(body), "_blank", "noopener,noreferrer");
  };
  return <section className="sec contact-home"><div className="wrap">
    <div className="contact-home-layout">
      <div className="contact-story">
        <div className="contact-story-photo"><img className="contact-story-image" src={c.contactImage} alt="Fresh microgreens growing at the farm"/><div className="contact-story-copy"><p className="label">Get in touch</p><h2>Come say hello</h2><p>Have questions about our products, planning a farm visit, or anything else? We’d love to hear from you.</p><div className="contact-story-notes"><span><Sprout/>Freshly grown<br/>in Hyderabad</span><span><Heart/>Healthy food<br/>for brighter days</span><span><Leaf/>Visit our farm<br/>by appointment</span></div></div></div>
      </div>
      <div className="contact-workspace">
        <div className="contact-home-grid">
          <a className="contact-home-card" href={waLink(c.whatsappGreeting)}><i><MessageCircle/></i><strong>WhatsApp</strong><span>{c.phone}</span></a>
          <a className="contact-home-card" href={`tel:${c.phone}`}><i><Phone/></i><strong>Phone</strong><span>{c.phone}</span></a>
          <a className="contact-home-card" href={`mailto:${c.email}`}><i><Mail/></i><strong>Email</strong><span>{c.email}</span></a>
          <a className="contact-home-card" href={c.mapUrl} target="_blank" rel="noreferrer"><i><MapPin/></i><strong>Address / Map</strong><span>{c.address}<br/><u>View on Google Maps →</u></span></a>
        </div>
        <div className="contact-message-layout">
          <div className="contact-message">
            <h3>Send us a message</h3><p>We usually reply within 1 business day.</p>
            <form onSubmit={submit}>
              <label>Name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Your name"/></label>
              <label>Phone / Email<input required value={form.reply} onChange={e => setForm({...form, reply:e.target.value})} placeholder="Your phone number or email"/></label>
              <label className="message-field">Message<textarea required rows="3" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell us how we can help."/></label>
              <button className="btn message-submit" type="submit">Send Enquiry <ArrowRight size={17}/></button>
            </form>
          </div>
          <aside className="contact-direct"><div className="direct-title"><Sprout/><strong>Other ways to connect</strong></div><p>Prefer a quick chat? Reach us directly through the options below.</p>
            <a href={waLink(c.whatsappGreeting)}><MessageCircle/>WhatsApp Chat<ArrowRight/></a><a href={`tel:${c.phone}`}><Phone/>Call Us<ArrowRight/></a><a href={`mailto:${c.email}`}><Mail/>Email Us<ArrowRight/></a><a href="/farm-visits"><MapPin/>Plan a Farm Visit<ArrowRight/></a>
          </aside>
        </div>
      </div>
    </div>
  </div></section>;
}
