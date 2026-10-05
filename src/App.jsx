import { useCallback, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Detail from "./pages/ProductDetails";
import { PageHero } from "./components/ui";
import Products from "./pages/Products";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import FarmVisits from "./pages/FarmVisits";
import Contact from "./pages/Contact";
import OurProcess from "./pages/OurProcess";
import WhatMicrogreens from "./pages/WhatMicrogreens";
import WhyMicrogreens from "./pages/WhyMicrogreens";

export default function App() {
  const { pathname, hash } = useLocation();
  const scrollFloor = useRef(null);
  const pendingSection = useRef(null);
  const navigateToSection = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) { pendingSection.current = id; return; }
    pendingSection.current = null;
    const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - margin);
    scrollFloor.current = top;
    window.scrollTo({ top, behavior: "instant" });
  }, []);
  useEffect(() => {
    scrollFloor.current = null;
  }, [pathname]);
  useEffect(() => {
    let touchStartY = 0;
    const blockScrollAboveFloor = (event) => {
      if (scrollFloor.current !== null && window.scrollY <= scrollFloor.current + 2 && event.deltaY < 0) {
        event.preventDefault();
      }
    };
    const rememberTouch = (event) => { touchStartY = event.touches[0]?.clientY ?? 0; };
    const blockTouchAboveFloor = (event) => {
      const touchY = event.touches[0]?.clientY ?? touchStartY;
      if (scrollFloor.current !== null && window.scrollY <= scrollFloor.current + 2 && touchY > touchStartY) {
        event.preventDefault();
      }
    };
    const enforceFloor = () => {
      if (scrollFloor.current !== null && window.scrollY < scrollFloor.current) {
        window.scrollTo({ top: scrollFloor.current, behavior: "instant" });
      }
    };
    window.addEventListener("wheel", blockScrollAboveFloor, { passive: false });
    window.addEventListener("touchstart", rememberTouch, { passive: true });
    window.addEventListener("touchmove", blockTouchAboveFloor, { passive: false });
    window.addEventListener("scroll", enforceFloor, { passive: true });
    return () => {
      window.removeEventListener("wheel", blockScrollAboveFloor);
      window.removeEventListener("touchstart", rememberTouch);
      window.removeEventListener("touchmove", blockTouchAboveFloor);
      window.removeEventListener("scroll", enforceFloor);
    };
  }, []);
  useEffect(() => {
    if (!hash) { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); return; }
    const id = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      if (pendingSection.current === id) {
        const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - margin);
        scrollFloor.current = top;
        pendingSection.current = null;
        window.scrollTo({ top, behavior: "instant" });
        return;
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);
  return <>
    <a href="#main" className="skip">Skip to content</a><Navbar onSectionNavigate={navigateToSection} />
    <main id="main" key={pathname} className="page">
      <Routes><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/products/:slug" element={<Detail />} />
        <Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
        <Route path="/our-process" element={<OurProcess />} /><Route path="/why-microgreens" element={<WhyMicrogreens />} />
        <Route path="/what-are-microgreens" element={<WhatMicrogreens />} /><Route path="/how-to-use" element={<HowToUse />} /><Route path="/farm-visits" element={<FarmVisits />} /><Route path="/farm-visit" element={<FarmVisits />} />
        <Route path="*" element={<PageHero title="Page not found" sub="The page you requested does not exist." />} /></Routes></main>
    <Footer onSectionNavigate={navigateToSection} /><WhatsAppButton /></>;
}
