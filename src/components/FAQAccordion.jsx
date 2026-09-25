import { useState } from "react";
import { Plus, Minus } from "lucide-react";
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState([]);
  const toggle = (index) => setOpen((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  return <div className="faq">{items.map((f, i) => (
    <div key={f.q} className={`faq-item ${open.includes(i) ? "open" : ""}`}>
      <h3><button aria-expanded={open.includes(i)} aria-controls={`faq-${i}`} id={`faq-b${i}`} onClick={() => toggle(i)}>
        <span className="faq-n">{String(i + 1).padStart(2, "0")}</span><span className="faq-q">{f.q}</span>{open.includes(i) ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button></h3>
      <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-b${i}`}><div><p>{f.a}</p></div></div>
    </div>))}</div>;
}
