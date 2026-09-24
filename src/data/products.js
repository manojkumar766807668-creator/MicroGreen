// Placeholder entries: replace with verified product data. An empty array shows the empty state.
const R = "[CONTENT REQUIRED]";
const make = (i) => ({ id: `p${i}`, slug: `product-${i}`, name: `Product ${i}`, images: [], description: R, taste: R,
  benefits: [], nutrients: [], growthTime: R, shelfLife: R, storage: R, packSizes: [], price: "", bestWaysToUse: [] });
export const products = [make(1), make(2), make(3)];
