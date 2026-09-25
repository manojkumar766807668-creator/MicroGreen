export async function copyLink(url, show) {
  try {
    await navigator.clipboard.writeText(url);
    show("Link copied!");
  } catch (error) {
    console.error("Copy failed:", error);
    show("Unable to copy link");
  }
}

export async function nativeShare(url, title, toast) {
  if (navigator.share) {
    try { await navigator.share({ title, text: `${title} ${url}`, url }); } catch { /* cancelled */ }
  } else {
    copyLink(url, toast);
  }
}

export const shareLinks = (url, title) => ({
  wa: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  fb: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  ig: `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
});
