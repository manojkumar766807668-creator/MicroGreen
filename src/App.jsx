import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Detail from "./pages/ProductDetails";
import { PageHero } from "./components/ui";

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); return; }
    const id = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const navHeight = document.querySelector(".nav")?.getBoundingClientRect().height ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [pathname, hash]);
  return <>
    <a href="#main" className="skip">Skip to content</a><Navbar />
    <main id="main" key={pathname} className="page">
      <Routes><Route path="/" element={<Home />} /><Route path="/products/:slug" element={<Detail />} />
        <Route path="/products" element={<Navigate to="/#products" replace />} /><Route path="/about" element={<Navigate to="/#about" replace />} /><Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/our-process" element={<Navigate to="/#growing-process" replace />} /><Route path="/why-microgreens" element={<Navigate to="/#why-microgreens" replace />} />
        <Route path="/what-are-microgreens" element={<Navigate to="/#what-are-microgreens" replace />} /><Route path="/how-to-use" element={<Navigate to="/#how-to-eat" replace />} /><Route path="/farm-visits" element={<Navigate to="/#farm-visit" replace />} />
        <Route path="*" element={<PageHero title="Page not found" sub="The page you requested does not exist." />} /></Routes></main>
    <Footer /><WhatsAppButton /></>;
}
