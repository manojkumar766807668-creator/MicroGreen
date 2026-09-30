import { useCallback, useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Detail from "./pages/ProductDetails";
import { PageHero } from "./components/ui";

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
      <Routes><Route path="/" element={<Home />} /><Route path="/products/:slug" element={<Detail />} />
        <Route path="/products" element={<Navigate to="/#products" replace />} /><Route path="/about" element={<Navigate to="/#about" replace />} /><Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/our-process" element={<Navigate to="/#growing-process" replace />} /><Route path="/why-microgreens" element={<Navigate to="/#why-microgreens" replace />} />
        <Route path="/what-are-microgreens" element={<Navigate to="/#what-are-microgreens" replace />} /><Route path="/how-to-use" element={<Navigate to="/#how-to-eat" replace />} /><Route path="/farm-visits" element={<Navigate to="/#farm-visit" replace />} />
        <Route path="*" element={<PageHero title="Page not found" sub="The page you requested does not exist." />} /></Routes></main>
    <Footer onSectionNavigate={navigateToSection} /><WhatsAppButton /></>;
}
