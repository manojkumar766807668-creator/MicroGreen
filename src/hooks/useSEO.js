import { useEffect } from "react";
const put = (sel, tag, attrs, attr, val) => { let el = document.head.querySelector(sel); if (!el) { el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el); } el.setAttribute(attr, val); };
export function useSEO(title, desc) {
  useEffect(() => {
    const t = `${title} | mini's greens`; document.title = t;
    put('meta[name="description"]', "meta", { name: "description" }, "content", desc);
    put('meta[property="og:title"]', "meta", { property: "og:title" }, "content", t);
    put('meta[property="og:description"]', "meta", { property: "og:description" }, "content", desc);
    put('link[rel="canonical"]', "link", { rel: "canonical" }, "href", window.location.href);
  }, [title, desc]);
}
