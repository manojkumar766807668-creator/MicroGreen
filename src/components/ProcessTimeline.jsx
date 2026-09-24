import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "../config/i18n";
export default function ProcessTimeline({ steps }) {
  const [active, setActive] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const { t } = useLanguage();
  const current = steps[active];
  const move = (direction) => setActive((value) => (value + direction + steps.length) % steps.length);
  useEffect(() => {
    if (detailOpen) return undefined;
    const timer = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(timer);
  }, [detailOpen, steps.length]);
  return <section className="process-carousel" aria-label="Our growing process">
    <div className="process-image-wrap"><button className="process-image-trigger" type="button" onClick={() => setDetailOpen(true)} aria-label={`${t("Open details for")} ${t(current.title)}`}><img className="process-image" src={current.image} alt={`${t(current.title)} process step`} /></button><div className="process-step-label" aria-live="polite"><span>{t("Step")} {current.n}</span><h2>{t(current.title)}</h2><p>{t(current.text)}</p><small>{t("Tap the image for details")}</small></div><button className="process-arrow process-prev" type="button" onClick={() => move(-1)} aria-label={t("Previous process step")}><ChevronLeft /></button><button className="process-arrow process-next" type="button" onClick={() => move(1)} aria-label={t("Next process step")}><ChevronRight /></button></div>
    {detailOpen && <div className="process-detail-backdrop" role="presentation" onClick={() => setDetailOpen(false)}><article className="process-detail" role="dialog" aria-modal="true" aria-labelledby="process-detail-title" onClick={(event) => event.stopPropagation()}><button className="process-detail-close" type="button" onClick={() => setDetailOpen(false)} aria-label={t("Close process details")}><X /></button><img src={current.image} alt={`${t(current.title)} detailed view`} /><div><p className="label">{t("Step")} {current.n} {t("of")} {steps.length}</p><h2 id="process-detail-title">{t(current.title)}</h2>{(current.details || [current.text]).map((paragraph) => <p key={paragraph}>{t(paragraph)}</p>)}{current.takeaway && <p className="process-takeaway">{t(current.takeaway)}</p>}</div></article></div>}
  </section>;
}
