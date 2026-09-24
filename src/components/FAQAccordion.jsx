import { useState } from "react";
import { Plus, Minus } from "lucide-react";
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return <div className="faq">{items.map((f, i) => (
    <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
      <h3><button aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-b${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
        <span className="faq-n">{String(i + 1).padStart(2, "0")}</span><span className="faq-q">{f.q}</span>{open === i ? <Minus /> : <Plus />}</button></h3>
      <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-b${i}`}><div><p>{f.a}</p></div></div>
    </div>))}</div>;
}
