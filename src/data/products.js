// Placeholder entries: replace with verified product data. An empty array shows the empty state.
const R = "[CONTENT REQUIRED]";
const make = (i) => ({ id: `p${i}`, slug: `product-${i}`, name: `Product ${i}`, images: [], description: R, taste: R,
  benefits: [], nutrients: [], growthTime: R, shelfLife: R, storage: R, packSizes: [], price: "", bestWaysToUse: [] });
const peaShoot = {
  ...make(1),
  name: "Pea Shoot Microgreens",
  images: ["https://homemicrogreens.com/wp-content/uploads/2023/05/Pea-Jumbo-Microgreens-with-roots.jpg"],
  taste: "Fresh, crisp & subtly sweet",
  description: "Pea Shoot Microgreens are tender young pea plants harvested at an early stage, offering a fresh green character, naturally crisp texture, and subtly sweet flavour. Their delicate leaves and stems make them easy to enjoy in a wide variety of everyday meals. Add them to fresh salads for extra texture, layer them into sandwiches and wraps, or use them as a fresh topping for bowls and breakfast dishes. They can also bring colour, freshness, and a pleasant crisp bite to simple home-cooked meals, making pea shoots a versatile way to include fresh microgreens in your everyday food.",
  benefits: ["Tender young pea shoots with a fresh green character and a naturally crisp texture."],
  nutrients: ["Naturally contains a variety of nutrients found in young pea plants.", "Add verified nutrition details before publishing."],
  growthTime: "Typically harvested at the young microgreen stage. Add the confirmed number of days from the farm.",
  shelfLife: "Freshly harvested for best quality and flavour. Add the confirmed shelf-life period.",
  storage: "Keep refrigerated and follow the recommended storage instructions to help maintain freshness.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast"]
};
const radish = {
  ...make(2),
  name: "Radish Microgreens",
  images: ["https://5.imimg.com/data5/SELLER/Default/2026/1/577061635/SO/MH/FI/263384179/purpleraddish-microgreen-png-500x500.png"],
  taste: "Fresh, crisp & mildly peppery",
  description: "Radish microgreens are young, vibrant greens known for their fresh character, crisp texture and distinctive peppery flavour. Their bright appearance and lively taste make them an easy way to add freshness, colour and texture to everyday meals.",
  nutrients: ["Radish microgreens can contribute a variety of naturally occurring nutrients found in young radish plants. Their nutritional profile can vary depending on the variety and growing conditions."],
  growthTime: "Grown through the early stages of the plant's life and harvested while the young leaves and stems are tender and ready to enjoy.",
  shelfLife: "Freshly harvested radish microgreens offer their best flavour, texture and appearance when handled and stored properly.",
  storage: "Keep refrigerated and follow the recommended storage guidance provided with the product. Handle gently and keep the greens protected from excess moisture to help maintain their freshness.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Other everyday meals"],
  benefits: ["A crisp texture, fresh green character and mildly peppery flavour make radish microgreens a versatile addition to meals when you want a little more freshness and colour."]
};
const sunflower = {
  ...make(3),
  name: "Sunflower Microgreens",
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KuFzbtHZRwb_9IjyzvhT0-rorDLWeryuk8I1SyAcseOeMlTE23DYKCY&s=10"],
  taste: "Fresh, nutty & pleasantly crisp",
  description: "Sunflower microgreens are young, tender greens with a satisfying crisp texture and a naturally mild, nutty character. Their substantial texture makes them a versatile choice for adding freshness, colour and contrast to everyday dishes.",
  nutrients: ["Sunflower microgreens contain naturally occurring nutrients found in young sunflower plants. Their nutritional profile can vary depending on the variety and growing conditions."],
  growthTime: "Grown through the early stages of the sunflower plant and harvested while the young leaves and stems are tender and ready to enjoy.",
  shelfLife: "Freshly harvested sunflower microgreens are best enjoyed while they retain their fresh appearance, crisp texture and flavour.",
  storage: "Keep refrigerated and follow the recommended storage guidance provided with the product. Handle gently and protect the greens from excess moisture to help maintain their quality.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Other everyday meals"],
  benefits: ["With its crisp bite and naturally nutty character, sunflower microgreens can add texture, freshness and a satisfying green element to a wide variety of meals."],
  farmConfirmationRequired: true
};
const broccoli = {
  ...make(4),
  name: "Broccoli Microgreens",
  images: ["https://m.media-amazon.com/images/I/51VZ8A+P9EL._AC_UF1000,1000_QL80_.jpg"],
  taste: "Mild, fresh & slightly earthy",
  description: "Broccoli microgreens are young, tender greens with a delicate texture and a mild, fresh flavour. Their vibrant appearance makes them an easy way to bring more colour, freshness and variety to everyday meals.",
  nutrients: ["Broccoli microgreens contain naturally occurring nutrients found in young broccoli plants. Their nutritional profile can vary depending on the variety and growing conditions."],
  growthTime: "Grown through the early stages of the broccoli plant and harvested while the young leaves and stems are tender and ready to enjoy.",
  shelfLife: "Freshly harvested broccoli microgreens are best enjoyed while they retain their fresh appearance, delicate texture and flavour.",
  storage: "Keep refrigerated and follow the recommended storage guidance provided with the product. Handle gently and protect the greens from excess moisture to help maintain their quality.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday meals"],
  benefits: ["Its mild flavour and delicate texture make broccoli microgreens easy to pair with familiar foods, adding a fresh green element without overpowering the dish."],
  farmConfirmationRequired: true
};
const mungBean = {
  ...make(5),
  name: "Mung Bean Microgreens",
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GUzsiMJykFdgXx2AK90wmRTtn-0ZU7vff-EwSc0RFfX6HTdAoqbArv4&s=10"],
  taste: "Fresh, mild & slightly nutty",
  description: "Tender young greens with a fresh character and crisp texture. Their mild flavour makes them easy to combine with familiar everyday dishes.",
  nutrients: ["Naturally occurring nutrients found in young mung bean plants; nutritional composition can vary by variety and growing conditions."],
  growthTime: "Harvested during the young microgreen stage when the stems and leaves are tender.",
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday Meals"],
  benefits: ["Mild flavour and crisp texture make it an easy addition to everyday food."],
  farmConfirmationRequired: true
};
const amaranth = {
  ...make(6),
  name: "Amaranth Microgreens",
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72jP54GXa6dC97TMfqGROsJAN_w11_ed_TSDfJ6zC-HmDnQQ2bzQE5W1H&s=10"],
  taste: "Fresh, mild & slightly earthy",
  description: "Tender young amaranth greens with a delicate texture and fresh flavour. Their vibrant appearance makes them an attractive addition to everyday meals.",
  nutrients: ["Naturally occurring nutrients found in young amaranth plants; nutritional composition can vary by variety and growing conditions."],
  growthTime: "Harvested during the young microgreen stage when the leaves and stems are tender.",
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday Meals"],
  benefits: ["Delicate flavour, fresh texture and vibrant appearance make it easy to add to everyday dishes."],
  farmConfirmationRequired: true
};
const fenugreek = {
  ...make(7),
  name: "Fenugreek Microgreens",
  images: ["https://5.imimg.com/data5/CS/YM/LT/SELLER-37654953/methi-500x500.png"],
  taste: "Fresh, mildly bitter & earthy",
  description: "Tender young fenugreek greens with a distinctive fresh character and delicate texture. Their unique flavour can add depth and variety to familiar everyday meals.",
  nutrients: ["Naturally occurring nutrients found in young fenugreek plants; nutritional composition can vary by variety and growing conditions."],
  growthTime: "Harvested during the young microgreen stage when the leaves and stems are tender.",
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday Meals"],
  benefits: ["Its distinctive earthy character brings a different flavour and freshness to everyday dishes."],
  farmConfirmationRequired: true
};
const basil = {
  ...make(8),
  name: "Basil Microgreens",
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNo-thyy81pIrr2yaPlGomXJO4d6JbsoPqAul69eKve0WqcCxwOltudsX&s=10"],
  taste: "Fresh, aromatic & mildly sweet",
  description: "Tender young basil greens with a delicate texture and characteristic fresh aroma. Their distinctive flavour makes them a versatile addition to familiar everyday dishes.",
  nutrients: ["Naturally occurring nutrients found in young basil plants; nutritional composition can vary by variety and growing conditions."],
  growthTime: "Harvested during the young microgreen stage when the leaves and stems are tender.",
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday Meals"],
  benefits: ["Fresh aroma and delicate flavour can add a distinctive touch to everyday meals."],
  farmConfirmationRequired: true
};
const coriander = {
  ...make(9),
  name: "Coriander Microgreens",
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWIAqaoO1YtZfK9UUVhdQE7GSt0BPtXhLRIt4z_9kVukDjm7TUqu_WMdE&s=10"],
  taste: "Fresh, citrusy & herbaceous",
  description: "Tender young coriander greens with a delicate texture and the familiar aromatic character of coriander. They can add freshness and a distinctive herbal touch to everyday meals.",
  nutrients: ["Naturally occurring nutrients found in young coriander plants; nutritional composition can vary by variety and growing conditions."],
  growthTime: "Harvested during the young microgreen stage when the leaves and stems are tender.",
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: ["Salads", "Sandwiches", "Wraps", "Bowls", "Breakfast", "Dosa", "Everyday Meals"],
  benefits: ["Familiar coriander aroma with a fresh, delicate texture makes it easy to include in everyday dishes."],
  farmConfirmationRequired: true
};
export const products = [peaShoot, radish, sunflower, broccoli, mungBean, amaranth, fenugreek, basil, coriander];
