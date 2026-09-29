import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { waLink } from "../utils/whatsapp";

export default function Contact() {
  const c = siteConfig;
  return <section className="sec contact-home"><div className="wrap">
    <p className="label">Get in touch</p><h2>Contact mini's greens</h2><p className="lead">Questions about our greens or planning a visit? We’d be happy to hear from you.</p>
    <div className="contact-home-grid">
      <a className="contact-home-card" href={waLink(c.whatsappGreeting)}><MessageCircle/><strong>WhatsApp</strong><span>Chat with us</span></a>
      <a className="contact-home-card" href={`tel:${c.phone}`}><Phone/><strong>Phone</strong><span>{c.phone}</span></a>
      <a className="contact-home-card" href={`mailto:${c.email}`}><Mail/><strong>Email</strong><span>{c.email}</span></a>
      <a className="contact-home-card" href={c.mapUrl} target="_blank" rel="noreferrer"><MapPin/><strong>Address / Map</strong><span>{c.address}</span></a>
    </div>
    <div className="contact-home-actions"><a className="btn" href={waLink(c.whatsappGreeting)}>WhatsApp</a><a className="btn outline" href={`tel:${c.phone}`}>Call</a><a className="btn outline" href={`mailto:${c.email}`}>Email</a><a className="btn outline" href="/farm-visits">Farm Visit</a></div>
  </div></section>;
}
