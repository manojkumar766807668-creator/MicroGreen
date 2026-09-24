import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../config/i18n";

export function Btn({ to, href, variant = "solid", children, ...rest }) {
  const { t } = useLanguage();
  const cls = `btn ${variant}`;
  const inner = <>{typeof children === "string" ? t(children) : children}<ArrowRight size={16} aria-hidden="true" /></>;
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>;
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer" {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { rootMargin: "0px 0px -6% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`} style={{ "--d": `${delay}ms` }}>{children}</div>;
}

// Image slot: shows a placeholder until a real `src` is supplied in the data files.
export function Img({ src, alt, className = "" }) {
  return src ? <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
    : <div className={`ph ${className}`} role="img" aria-label={`${alt} (image to be added)`} />;
}

export function Heading({ label, title, children, light }) {
  const { t } = useLanguage();
  return <header className={`heading ${light ? "light" : ""}`}>{label && <p className="label">{t(label)}</p>}<h2>{t(title)}</h2>{children && <p className="lead">{typeof children === "string" ? t(children) : children}</p>}</header>;
}

export function useToast() {
  const [msg, setMsg] = useState("");
  const show = (t) => { setMsg(t); setTimeout(() => setMsg(""), 2200); };
  return [<div key="t" className={`toast ${msg ? "show" : ""}`} role="status" aria-live="polite">{msg}</div>, show];
}

export function CTASection({ title = "Ready to bring more greens into your everyday?" }) {
  const { t } = useLanguage();
  return <section className="cta"><div className="wrap"><h2>{t(title)}</h2>
    <div className="row"><Btn to="/products">Explore Products</Btn><Btn to="/farm-visits" variant="ghost">Plan a Farm Visit</Btn></div></div></section>;
}

export function PageHero({ title, sub, label }) {
  const { t } = useLanguage();
  return <section className="page-hero"><div className="wrap">{label && <p className="label">{t(label)}</p>}<h1>{t(title)}</h1>{sub && <p className="lead">{t(sub)}</p>}</div></section>;
}
