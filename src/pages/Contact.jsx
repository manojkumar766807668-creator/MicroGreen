import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import FAQAccordion from "../components/FAQAccordion";
import { Btn } from "../components/ui";
import { contactFaqs } from "../data/contactContent";
import { siteConfig as c } from "../config/siteConfig";
import { useLanguage } from "../config/i18n";
import { useSEO } from "../hooks/useSEO";
import { waLink } from "../utils/whatsapp";
import logo from "../assets/logo.jpeg";

const options = [
  [MessageCircle, "Chat on WhatsApp", "Have a quick question or product enquiry? Send us a message on WhatsApp and connect with the mini's greens team.", "Chat on WhatsApp", "whatsapp"],
  [Phone, "Give Us a Call", "Call us for questions about our microgreens, products, farm visits or general enquiries.", "Call Us", "phone"],
  [Mail, "Send Us an Email", "Have a detailed question or enquiry? Send us an email and share what you'd like to know about mini's greens.", "Email Us", "email"],
  [MapPin, "Visit the Farm", "Want to see where the greens begin? Explore the growing environment and learn about the journey from seed to harvest.", "Visit the Farm", "farm"]
];

function getContactHref(type) {
  if (type === "whatsapp") return c.whatsapp && waLink(c.whatsappGreeting);
  if (type === "phone") return c.phone && `tel:${c.phone}`;
  if (type === "email") return c.email && `mailto:${c.email}`;
  return "/farm-visits";
}

export default function Contact() {
  const { t } = useLanguage();
  useSEO("Contact", "Get in touch with mini's greens.");
  const translatedFaqs = contactFaqs.map(([question, answer]) => ({ q: t(question), a: t(answer) }));
  const contactDetails = [["Address", c.address], ["Phone", c.phone], ["WhatsApp", c.phone], ["Email", c.email]];

  return <>
    <section className="contact-hero"><div className="wrap contact-hero-in">
      <div><p className="label">{t("Let's connect")}</p><h1>{t("Let's Talk About Greens")}</h1><p className="lead">{t("Have a question about microgreens, our products, or a farm visit? We'd love to hear from you. Whether you're discovering microgreens for the first time, want to know more about a product, or simply have a question about using and storing your greens, get in touch with mini's greens.")}</p><div className="row contact-hero-actions"><Btn href={waLink(c.whatsappGreeting)}>{t("Chat on WhatsApp")}</Btn><Btn href={`mailto:${c.email}`} variant="outline">{t("Send an Email")}</Btn></div></div><img className="contact-hero-logo" src={logo} alt="mini's greens" />
    </div></section>

    <section className="sec contact-options-section"><div className="wrap contact-options-layout">
      <div className="contact-visual"><img className="contact-visual-image" src={c.contactImage} alt="Fresh sunflower microgreens" loading="lazy" /><div><p className="label">{t("Fresh greens, close to home.")}</p><p>{t("A simple place to ask, learn and connect with the growing journey.")}</p></div></div>
      <div><p className="label">{t("Contact options")}</p><div className="contact-options-grid">{options.map(([Icon, title, description, action, type]) => {
        const href = getContactHref(type);
        const content = <><Icon className="contact-option-icon" aria-hidden="true" /><h2>{t(title)}</h2><p>{t(description)}</p><span className="contact-option-link">{t(action)} <ArrowUpRight size={16} aria-hidden="true" /></span></>;
        return type === "farm" ? <Link key={title} className="contact-option" to={href}>{content}</Link> : <a key={title} className="contact-option" href={href}>{content}</a>;
      })}</div></div>
    </div></section>

    <section className="sec contact-find"><div className="wrap"><div className="contact-section-heading"><div><p className="label">{t("Find us")}</p><h2>{t("Come closer to where the greens begin.")}</h2></div><p>{t("Come closer to where the greens begin. Find the mini's greens location and connect with us for product enquiries or farm visits.")}</p></div>
      <div className="contact-find-grid"><div className="contact-details">{contactDetails.map(([label, value]) => <div key={label}><span>{t(label)}</span><strong>{value || "-"}</strong></div>)}</div><div className="contact-map">{c.mapUrl ? <><MapPin size={28} aria-hidden="true" /><h3>{c.address}</h3><a className="btn outline" href={c.mapUrl} target="_blank" rel="noreferrer">{t("View on Map")}<ArrowUpRight size={16} aria-hidden="true" /></a></> : <><MapPin size={28} aria-hidden="true" /><p>{t("Location is being updated. Please contact us directly for directions.")}</p></>}</div></div>
    </div></section>

    <section className="contact-visit"><div className="wrap contact-visit-in"><div><p className="label">{t("Farm visits")}</p><h2>{t("Come See Where the Greens Begin")}</h2></div><p>{t("Step beyond the screen and experience the journey behind your greens. Explore the growing environment, learn how microgreens move from seed to harvest, and discover the process behind the fresh greens you enjoy.")}</p><div className="row"><Btn to="/farm-visits">{t("Plan a Farm Visit")}</Btn><Btn to="/our-process" variant="ghost">{t("Learn About Our Process")}</Btn></div></div></section>

    <section id="faq" className="sec contact-faq"><div className="wrap narrow"><div className="heading"><p className="label">{t("Questions, answered")}</p><h2>{t("Frequently Asked Questions")}</h2><p className="lead">{t("A few simple answers to help you discover, understand and enjoy microgreens.")}</p></div><FAQAccordion items={translatedFaqs} /></div></section>
  </>;
}
