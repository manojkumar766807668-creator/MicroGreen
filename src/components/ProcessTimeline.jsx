import { useState } from "react";
import { Reveal } from "./ui";
export default function ProcessTimeline({ steps }) {
  const [open, setOpen] = useState(0);
  return <ol className="tl">{steps.map((s, i) => (
    <li key={s.n} className={open === i ? "open" : ""}>
      <Reveal delay={i * 70}>
        <button className="tl-head" aria-expanded={open === i} onClick={() => setOpen(i)}><span className="tl-n">{s.n}</span><span className="tl-t">{s.title}</span></button>
        <p className="tl-body">{s.text}</p>
      </Reveal></li>))}</ol>;
}
