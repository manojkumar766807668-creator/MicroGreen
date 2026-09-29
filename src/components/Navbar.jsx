import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { languages, useLanguage } from "../config/i18n";

const links = [["/#home", "Home"], ["/#products", "Products"], ["/#about", "About"], ["/#contact", "Contact"]];
const learnLinks = [["/what-are-microgreens", "What are microgreens?"], ["/our-process", "How we grow"], ["/how-to-use", "How to eat them"], ["/why-microgreens", "Why microgreens"], ["/#farm-visit", "Farm Visit"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { setOpen(false); setMoreOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; const k = (e) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [open]);
  const overHero = pathname === "/" && !scrolled && !open;
  const handleNavClick = (event, to) => {
    setOpen(false);
    const target = new URL(to, window.location.origin);
    if (target.pathname === pathname && target.hash === hash) {
      event.preventDefault();
      if (target.hash) {
        const id = decodeURIComponent(target.hash.slice(1));
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
      } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  return (
    <header className={`nav ${overHero ? "over-hero" : "solid"}`}>
      <div className="wrap nav-in">
        <Link to="/#home" onClick={(event) => handleNavClick(event, "/#home")} className="brand" aria-label="mini's greens home">mini's greens</Link>
        {open && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
        <nav id="menu" className={`menu ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([to, text]) => <NavLink key={to} to={to} onClick={(event) => handleNavClick(event, to)} className="navlink">{t(text)}</NavLink>)}
          <div className={`learn-menu ${moreOpen ? "open" : ""}`} onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button type="button" className="learn-toggle navlink" aria-expanded={moreOpen} aria-label="Learn menu" onClick={() => setMoreOpen(value => !value)}>Learn <ChevronDown size={15} aria-hidden="true"/></button>
            <div className="learn-dropdown" aria-label="Learn">
              {learnLinks.map(([to, text]) => <Link key={to} to={to} className="learn-link" onClick={(event) => { handleNavClick(event, to); setOpen(false); setMoreOpen(false); }}>{t(text)}</Link>)}
            </div>
          </div>
          <label className="language-picker"><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">{languages.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></label>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
