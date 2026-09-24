import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { siteConfig as c } from "../config/siteConfig";
import { waLink } from "../utils/whatsapp";
export default function Footer() {
  return <footer className="footer"><div className="wrap foot-in">
    <img src={logo} alt="mini's greens logo" className="foot-logo" width="220" height="124" loading="lazy" />
    <nav aria-label="Footer"><Link to="/products">Products</Link><Link to="/our-process">Our Process</Link><Link to="/how-to-use">How to Use</Link><Link to="/farm-visits">Farm Visits</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></nav>
    <div className="footer-contact"><a href={waLink(c.whatsappGreeting)} target="_blank" rel="noreferrer">WhatsApp: {c.phone}</a><a href={`tel:${c.phone}`}>Phone: {c.phone}</a><a href={`mailto:${c.email}`}>Email: {c.email}</a><a href={c.mapUrl} target="_blank" rel="noreferrer">{c.address}</a></div>
    <p className="small">© {new Date().getFullYear()} mini's greens · Version 1.1</p></div></footer>;
}
