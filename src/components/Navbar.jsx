import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Btn } from "./ui";

const links = [["/", "Home"], ["/why-microgreens", "Why Microgreens"], ["/products", "Products"], ["/our-process", "Our Process"], ["/how-to-use", "How to Use"], ["/farm-visits", "Farm Visits"], ["/about", "About"], ["/contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [pathname]);
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
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === "/"} className="navlink">{t}</NavLink>)}
          <Btn to="/products" className="nav-cta">Explore Products</Btn>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
