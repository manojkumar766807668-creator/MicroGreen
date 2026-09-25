export async function copyLink(url, toast, msg = "Link copied!") {
  try { await navigator.clipboard.writeText(url); toast(msg); } catch { toast("Could not copy link"); }
}

export async function nativeShare(url, title, toast) {
  if (navigator.share) {
    try { await navigator.share({ title, url }); } catch { /* cancelled */ }
  } else {
    copyLink(url, toast);
  }
}

export const shareLinks = (url, title) => ({
  wa: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  fb: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  ig: `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
});
