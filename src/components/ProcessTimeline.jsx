import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export default function ProcessTimeline({ steps }) {
  const [active, setActive] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const current = steps[active];
  const move = (direction) => setActive((value) => (value + direction + steps.length) % steps.length);
  useEffect(() => {
    if (detailOpen) return undefined;
    const timer = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(timer);
  }, [detailOpen, steps.length]);
  return <section className="process-carousel" aria-label="Our growing process">
    <div className="process-image-wrap"><button className="process-image-trigger" type="button" onClick={() => setDetailOpen(true)} aria-label={`Open details for ${current.title}`}><img className="process-image" src={current.image} alt={`${current.title} process step`} /></button><div className="process-step-label" aria-live="polite"><span>Step {current.n}</span><h2>{current.title}</h2><p>{current.text}</p><small>Tap the image for details</small></div><button className="process-arrow process-prev" type="button" onClick={() => move(-1)} aria-label="Previous process step"><ChevronLeft /></button><button className="process-arrow process-next" type="button" onClick={() => move(1)} aria-label="Next process step"><ChevronRight /></button></div>
    {detailOpen && <div className="process-detail-backdrop" role="presentation" onClick={() => setDetailOpen(false)}><article className="process-detail" role="dialog" aria-modal="true" aria-labelledby="process-detail-title" onClick={(event) => event.stopPropagation()}><button className="process-detail-close" type="button" onClick={() => setDetailOpen(false)} aria-label="Close process details"><X /></button><img src={current.image} alt={`${current.title} detailed view`} /><div><p className="label">Step {current.n} of {steps.length}</p><h2 id="process-detail-title">{current.title}</h2>{(current.details || [current.text]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{current.takeaway && <p className="process-takeaway">{current.takeaway}</p>}</div></article></div>}
  </section>;
}
