import { useState } from "react";
import { Btn } from "./ui";
import { waLink } from "../utils/whatsapp";
const init = { name: "", phone: "", type: "", people: "", date: "", note: "" };
export default function FarmVisitForm() {
  const [f, setF] = useState(init), [err, setErr] = useState({}), [done, setDone] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = "Enter your name";
    if (!/^(\+?91)?[6-9]\d{9}$/.test(f.phone.replace(/[\s-]/g, ""))) x.phone = "Enter a valid 10-digit mobile number";
    if (!f.type.trim()) x.type = "Enter a visit type";
    if (!(+f.people > 0)) x.people = "Enter number of people";
    if (!f.date) x.date = "Choose a date";
    setErr(x); if (Object.keys(x).length) return;
    const msg = `Hi mini's greens, I'd like to request a farm visit.\n\nName: ${f.name}\nPhone: ${f.phone}\nVisit type: ${f.type}\nPeople: ${f.people}\nPreferred date: ${f.date}\nNote: ${f.note || "-"}`;
    window.open(waLink(msg), "_blank", "noopener"); setDone(true); setF(init); // nothing is stored
  };
  const field = (k, label, p = {}) => <label key={k} className="field">{label}<input value={f[k]} onChange={on(k)} aria-invalid={!!err[k]} {...p} />{err[k] && <span className="err" role="alert">{err[k]}</span>}</label>;
  return <form className="form" onSubmit={submit} noValidate>
    {field("name", "Name", {autoComplete:"name"})}{field("phone", "Phone", {type:"tel",autoComplete:"tel",inputMode:"tel"})}
    {field("type", "Visit type", {})}{field("people", "Number of people", {type:"number",min:"1"})}
    {field("date", "Preferred date", {type:"date"})}
    <label className="field">Note<textarea rows="3" value={f.note} onChange={on("note")} /></label>
    <Btn type="submit">Send on WhatsApp</Btn>
    {done && <p className="ok" role="status">Opening WhatsApp. Your details are not stored on this site.</p>}</form>;
}
