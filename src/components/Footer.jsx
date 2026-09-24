import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { siteConfig as c } from "../config/siteConfig";
import { useLanguage } from "../config/i18n";
export default function Footer() {
  const { t } = useLanguage();
  return <footer className="footer"><div className="wrap foot-in">
    <div className="foot-brand"><img src={logo} alt="mini's greens logo" className="foot-logo" width="220" height="124" loading="lazy" /><p>{t("Small greens. Big Nutrition.")}</p><span className="small">{t("Fresh microgreens grown for everyday meals.")}</span></div>
    <div className="foot-column"><strong>{t("Our greens")}</strong><Link to="/products">{t("All microgreens")}</Link><Link to="/products">{t("Popular microgreens")}</Link><Link to="/why-microgreens">{t("Why microgreens")}</Link><Link to="/how-to-use">{t("How to use them")}</Link></div>
    <div className="foot-column"><strong>{t("Learn")}</strong><Link to="/what-are-microgreens">{t("What are microgreens?")}</Link><Link to="/our-process">{t("How we grow")}</Link><Link to="/how-to-use">{t("How to eat them")}</Link><Link to="/why-microgreens">{t("Why microgreens")}</Link></div>
    <div className="foot-column"><strong>{t("Company help")}</strong><Link to="/about">{t("About us")}</Link><Link to="/farm-visits">{t("Farm visits")}</Link><Link to="/contact">{t("Contact")}</Link><Link to="/contact">{t("FAQs")}</Link></div>
    <div className="foot-column footer-contact"><strong>{t("Get in touch")}</strong><a href={`tel:${c.phone}`}>{c.phone}</a><a href={c.mapUrl} target="_blank" rel="noreferrer">{c.address}</a><a href={`mailto:${c.email}`}>{c.email}</a></div>
    <p className="small foot-copy">© {new Date().getFullYear()} mini's greens. All rights reserved. Version 1.1.0</p></div></footer>;
}
