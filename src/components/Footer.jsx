import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { siteConfig as c } from "../config/siteConfig";

export default function Footer({ onSectionNavigate }) {
  const location = useLocation();
  const sectionClick = (event, href) => {
    const target = new URL(href, window.location.origin);
    const id = decodeURIComponent(target.hash.slice(1));
    if (target.origin === window.location.origin && id) onSectionNavigate?.(id);
    if (target.pathname === location.pathname && id && target.hash === location.hash) {
      event.preventDefault();
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };
  const socials = [["Instagram", c.social?.instagram], ["Facebook", c.social?.facebook], ["YouTube", c.social?.youtube], ["LinkedIn", c.social?.linkedin]].filter(([, url]) => url);
  const services = [["Fresh microgreens", "/products"], ["Growing education", "/what-are-microgreens"], ["Farm visits", "/farm-visits"]];
  const learn = [["What are microgreens?", "/what-are-microgreens"], ["How we grow", "/our-process"], ["How to eat them", "/how-to-use"], ["Why microgreens", "/why-microgreens"]];
  const company = [["About us", "/about"], ["Contact", "/contact"]];
  return <footer className="footer"><div className="wrap foot-in">
    <div className="foot-brand"><Link to="/#home" onClick={(event) => sectionClick(event, "/#home")} aria-label="mini's greens home"><img src={logo} alt="mini's greens" className="foot-logo" width="220" height="124" loading="lazy" /></Link><p className="foot-tagline">Small greens. Big Nutrition.</p><span>Fresh microgreens grown for everyday meals.</span></div>
    <div className="foot-column"><strong>Services</strong>{services.map(([name, href]) => <Link key={name} to={href} onClick={(event) => sectionClick(event, href)}>{name}</Link>)}</div>
    <div className="foot-column"><strong>Learn</strong>{learn.map(([name, href]) => <Link key={name} to={href} onClick={(event) => sectionClick(event, href)}>{name}</Link>)}</div>
    <div className="foot-column"><strong>Company help</strong>{company.map(([name, href]) => <Link key={name} to={href} onClick={(event) => sectionClick(event, href)}>{name}</Link>)}<Link to="/contact#faq">FAQs</Link></div>
    <div className="foot-column footer-contact"><strong>Get in touch</strong><a href={`https://wa.me/${c.whatsapp}`}>{c.phone}</a><a href={c.mapUrl} target="_blank" rel="noreferrer">{c.address}</a><a href={`mailto:${c.email}`}>{c.email}</a>{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</div>
    <p className="small foot-copy">© {new Date().getFullYear()} mini's greens. All rights reserved.</p>
  </div></footer>;
}
