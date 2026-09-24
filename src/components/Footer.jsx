import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { siteConfig as c } from "../config/siteConfig";
export default function Footer() {
  return <footer className="footer"><div className="wrap foot-in">
    <div className="foot-brand"><img src={logo} alt="mini's greens logo" className="foot-logo" width="220" height="124" loading="lazy" /><p>Small Greens. Big Nutrition.</p><span className="small">Fresh microgreens grown for everyday meals.</span></div>
    <div className="foot-column"><strong>Our greens</strong><Link to="/products">All microgreens</Link><Link to="/products">Popular microgreens</Link><Link to="/why-microgreens">Why microgreens</Link><Link to="/how-to-use">How to use them</Link></div>
    <div className="foot-column"><strong>Learn</strong><Link to="/what-are-microgreens">What are microgreens?</Link><Link to="/our-process">How we grow</Link><Link to="/how-to-use">How to eat them</Link><Link to="/why-microgreens">Why microgreens</Link></div>
    <div className="foot-column"><strong>Company help</strong><Link to="/about">About us</Link><Link to="/farm-visits">Farm visits</Link><Link to="/contact">Contact</Link><Link to="/contact">FAQs</Link></div>
    <div className="foot-column footer-contact"><strong>Get in touch</strong><a href={`tel:${c.phone}`}>{c.phone}</a><a href={c.mapUrl} target="_blank" rel="noreferrer">{c.address}</a><a href={`mailto:${c.email}`}>{c.email}</a></div>
    <p className="small foot-copy">© {new Date().getFullYear()} mini's greens. All rights reserved. Version 1.1.0</p></div></footer>;
}
