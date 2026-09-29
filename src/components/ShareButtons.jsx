import { Share2 } from "lucide-react";
import { useToast } from "./ui";
import { nativeShare } from "../utils/sharing";
export default function ShareButtons() {
  const [toast, show] = useToast();
  const url = window.location.href;
  return <div className="share">
    <button className="btn outline" type="button" onClick={() => nativeShare(url, document.title, show)} aria-label="Share product"><Share2 size={18} /> Share</button>{toast}</div>
}
