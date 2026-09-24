import { Link2, Share2, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useToast } from "./ui";
import { copyLink, nativeShare, shareLinks } from "../utils/sharing";
export default function ShareButtons({ title }) {
  const [toast, show] = useToast();
  const url = window.location.href, l = shareLinks(url, title);
  return <div className="share"><span className="small">Share</span>
    <button onClick={() => nativeShare(url, title, show)} aria-label="Share"><Share2 size={18} /></button>
    <a href={l.wa} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><MessageCircle size={18} /></a>
    <a href={l.fb} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><Facebook size={18} /></a>
    <button onClick={() => copyLink(url, show, "Link copied! Paste it in Instagram.")} aria-label="Copy link for Instagram"><Instagram size={18} /></button>
    <button onClick={() => copyLink(url, show)} aria-label="Copy link"><Link2 size={18} /></button>{toast}</div>;
}
