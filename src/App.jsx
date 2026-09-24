import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Why from "./pages/WhyMicrogreens";
import Products from "./pages/Products";
import Detail from "./pages/ProductDetails";
import Process from "./pages/OurProcess";
import Use from "./pages/HowToUse";
import Farm from "./pages/FarmVisits";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [pathname, hash]);
  return <>
    <a href="#main" className="skip">Skip to content</a><Navbar />
    <main id="main" key={pathname} className="page">
      <Routes><Route path="/" element={<Home />} /><Route path="/why-microgreens" element={<Why />} /><Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Detail />} /><Route path="/our-process" element={<Process />} /><Route path="/how-to-use" element={<Use />} />
        <Route path="/farm-visits" element={<Farm />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /></Routes></main>
    <Footer /><WhatsAppButton /></>;
}
