import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { PageHero } from "../components/ui";
import { siteConfig as c, req } from "../config/siteConfig";
import { waLink } from "../utils/whatsapp";
import { useSEO } from "../hooks/useSEO";
export default function Contact() {
  useSEO("Contact", "Get in touch with mini's greens.");
  const cards = [[MessageCircle, "WhatsApp", c.whatsapp && waLink(c.whatsappGreeting), c.whatsapp], [Phone, "Phone", c.phone && `tel:${c.phone}`, c.phone], [Mail, "Email", c.email && `mailto:${c.email}`, c.email],
    [MapPin, "Address", c.mapUrl, c.address], [Instagram, "Instagram", c.social.instagram, c.social.instagram], [Facebook, "Facebook", c.social.facebook, c.social.facebook]];
  return <><PageHero title="Say hello." /><section className="sec"><div className="wrap cgrid">{cards.map(([I, t, href, v]) => {
    const inner = <><I aria-hidden="true" /><h3>{t}</h3><p>{v || req}</p></>;
    return href ? <a key={t} className="ccard" href={href} target="_blank" rel="noreferrer">{inner}</a> : <div key={t} className="ccard">{inner}</div>; })}</div></section></>;
}
