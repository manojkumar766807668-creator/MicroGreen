import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Btn } from "./ui";
import { languages, useLanguage } from "../config/i18n";

const links = [["/", "Home"], ["/products", "Products"], ["/about", "About"], ["/contact", "Contact"]];
const learnLinks = [["/what-are-microgreens", "What are Microgreens"], ["/our-process", "How We Grow"], ["/how-to-use", "How to Eat"], ["/products", "Find My Microgreens"], ["/why-microgreens", "Why Microgreens"], ["/farm-visits", "Farm Visits"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { setOpen(false); setLearnOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; const k = (e) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [open]);
  const overHero = pathname === "/" && !scrolled && !open;
  return (
    <header className={`nav ${overHero ? "over-hero" : "solid"}`}>
      <div className="wrap nav-in">
        <Link to="/" className="brand" aria-label="mini's greens home">mini's greens</Link>
        {open && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
        <nav id="menu" className={`menu ${open ? "open" : ""}`} aria-label="Main">
          <div className="menu-head">
            <span>Explore</span>
            <span className="menu-mark" aria-hidden="true">mg</span>
          </div>
          {links.slice(0, 2).map(([to, text]) => <NavLink key={to} to={to} end={to === "/"} className="navlink">{t(text)}</NavLink>)}
          <div className={`learn-menu ${learnOpen ? "open" : ""}`}>
            <button className="navlink learn-toggle" aria-expanded={learnOpen} onClick={() => setLearnOpen(!learnOpen)}>{t("Learn")} <ChevronDown size={15} aria-hidden="true" /></button>
            <div className="learn-dropdown">{learnLinks.map(([to, text]) => <NavLink key={text} to={to} className="learn-link">{t(text)}</NavLink>)}</div>
          </div>
          {links.slice(2).map(([to, text]) => <NavLink key={to} to={to} end className="navlink">{t(text)}</NavLink>)}
          <label className="language-picker"><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">{languages.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></label>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
