export async function copyLink(url, show) {
  try {
    await navigator.clipboard.writeText(url);
    show("Link copied!");
  } catch {
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

