import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Btn } from "./ui";
import { useLanguage } from "../config/i18n";

const slides = [
  { label: "mini's greens", title: ["Small greens.", "Big everyday possibilities."], text: "Discover fresh microgreens grown with care.", a: ["/products", "Explore Products"], b: ["/farm-visits", "Plan a Farm Visit"] },
  { label: "What are microgreens?", title: ["Tiny plants.", "Big stage."], text: "See how a seed becomes a microgreen.", a: ["/why-microgreens", "Why Microgreens"], b: ["/our-process", "Our Process"] },
  { label: "Farm visits", title: ["Come see where", "the greens begin."], text: "Plan a visit to the farm.", a: ["/farm-visits", "Plan Your Visit"], b: ["/how-to-use", "How to Use"] }
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [n, setN] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const go = (d) => setN((v) => (v + d + slides.length) % slides.length);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused]);
  const onEnd = (e) => { if (startX.current === null) return; const dx = e.changedTouches[0].clientX - startX.current; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); startX.current = null; };
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Highlights"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)} onTouchEnd={onEnd}>
      <video className="hero-bg" autoPlay muted loop><source src="https://fuelroots.com/video/banner2.mp4" type="video/mp4" />
       </video>
      <div className="hero-shade" />
      <div className="wrap hero-slides" aria-live={paused ? "polite" : "off"}>
        {slides.map((s, i) => { const T = i === 0 ? "h1" : "h2"; return (
          <div key={s.label} className={`hero-slide ${i === n ? "on" : ""}`} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} aria-hidden={i !== n}>
            <p className="label">{t(s.label)}</p><T className="hero-title">{t(s.title[0])}<br />{t(s.title[1])}</T><p className="lead">{t(s.text)}</p>
            <div className="row"><Btn to={s.a[0]}>{s.a[1]}</Btn><Btn to={s.b[0]} variant="ghost">{s.b[1]}</Btn></div>
          </div>); })}
      </div>
      <div className="hero-ctl">
        <button onClick={() => go(-1)} aria-label="Previous slide"><ChevronLeft /></button>
        {slides.map((s, i) => <button key={s.label} className={`dot ${i === n ? "on" : ""}`} onClick={() => setN(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === n} />)}
        <button onClick={() => go(1)} aria-label="Next slide"><ChevronRight /></button>
      </div>
      <a href="#what" className="scroll">Discover ↓</a>
    </section>
  );
}
