const R = "[CONTENT REQUIRED]";

const make = (i) => ({
  id: `p${i}`,
  slug: `product-${i}`,
  name: `Product ${i}`,
  images: [],
  description: R,
  taste: R,
  benefits: [],
  nutrients: [],
  growthTime: {
    total: "",
    timeline: [],
    note: ""
  },
  shelfLife: R,
  storage: R,
  bestWaysToUse: [],
  farmConfirmationRequired: false
});

const peaShoot = {
  ...make(1),
  name: "Pea Shoot Microgreens",
  images: [
    "https://homemicrogreens.com/wp-content/uploads/2023/05/Pea-Jumbo-Microgreens-with-roots.jpg"
  ],
  taste: "Fresh, naturally sweet, crisp, tender & mildly vegetal with a delicate pea-like flavour",
  description:
    "Pea Shoot Microgreens are young pea plants harvested while their tender stems and leaves are still small. They have a naturally sweet pea-like flavour, crisp texture and fresh green character. Their soft leaves and tender shoots make them easy to use in salads, sandwiches, wraps, breakfast bowls and other everyday meals.",
  benefits: [
    "Naturally sweet pea-like flavour",
    "Tender stems and leaves with a crisp texture",
    "Easy to combine with both fresh and cooked dishes",
    "Adds fresh colour and texture to everyday meals"
  ],
  nutrients: [
    "Contains naturally occurring vitamin C and other micronutrients found in young pea plants.",
    "Pea microgreens are a source of minerals including potassium, calcium, magnesium, iron and copper.",
    "Research has reported particularly notable phosphorus and copper levels in pea microgreens.",
    "Nutritional composition varies with variety and growing conditions."
  ],
  growthTime: {
    total: "Total 8–10 days",
    timeline: [
      { day: "Day 1–2", stage: "Germination", description: "Pea seeds absorb moisture and begin germinating." },
      { day: "Day 3–5", stage: "Early Growth", description: "Young pea shoots emerge and begin developing." },
      { day: "Day 6–8", stage: "Leaf Development", description: "Tender stems and young leaves develop." },
      { day: "Day 8–10", stage: "Typical Harvest", description: "Pea shoots reach a suitable young harvest stage." }
    ],
    note: "General growing timeline. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed fresh. Actual shelf life depends on harvest condition, packaging, temperature and handling.",
  storage: "Keep refrigerated. Handle gently and protect from excess moisture. Remove only the amount needed for a meal and return the remaining greens to refrigeration.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Breakfast bowls",
    "Dosa",
    "Grain bowls",
    "Fresh toppings"
  ],
  farmConfirmationRequired: true
};

const radish = {
  ...make(2),
  name: "Radish Microgreens",
  images: [
    "https://5.imimg.com/data5/SELLER/Default/2026/1/577061635/SO/MH/FI/263384179/purpleraddish-microgreen-png-500x500.png"
  ],
  taste: "Crisp and refreshing with a noticeable peppery kick, mild heat and the fresh character of young radish.",
  description:
    "Radish Microgreens are young radish plants harvested at an early stage. They are known for their crisp texture, fresh green character and distinctive peppery flavour. Their stronger taste makes them especially useful when a dish needs a lively fresh finish.",
  benefits: [
    "Distinctive peppery flavour",
    "Crisp texture",
    "Adds colour and freshness",
    "Works well as a finishing green"
  ],
  nutrients: [
    "Contains naturally occurring vitamin C and other micronutrients found in young radish plants.",
    "Radish microgreens contain carotenoids and chlorophylls associated with young leafy plant tissues.",
    "Research has identified phenolic compounds and antioxidant-related phytochemicals in radish microgreens.",
    "Nutritional composition varies with radish variety and growing conditions."
  ],
  growthTime: {
    total: "8–12 days",
    timeline: [
      { day: "Day 1–2", stage: "Germination", description: "Radish seeds absorb moisture and begin germinating." },
      { day: "Day 3–5", stage: "Early Growth", description: "Young radish shoots emerge and begin growing." },
      { day: "Day 6–8", stage: "Leaf Development", description: "The first young leaves develop and the plants gain height." },
      { day: "Day 8–12", stage: "Typical Harvest", description: "Radish microgreens reach a suitable young harvest stage." }
    ],
    note: "General growing timeline. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh and crisp. Actual shelf life depends on harvesting, packaging and storage conditions.",
  storage: "Keep refrigerated and handle gently. Protect from excess moisture to help maintain crispness and freshness.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Dosa",
    "Poha",
    "Chaat",
    "Dal topping",
    "Savoury bowls"
  ],

  farmConfirmationRequired: true
};

const sunflower = {
  ...make(3),
  name: "Sunflower Microgreens",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KuFzbtHZRwb_9IjyzvhT0-rorDLWeryuk8I1SyAcseOeMlTE23DYKCY&s=10"
  ],
  taste: "Fresh, nutty & pleasantly crisp",
  description:
    "Sunflower microgreens are young, tender greens with a satisfying crisp texture and a naturally mild, nutty character. Their substantial texture makes them a versatile choice for adding freshness, colour and contrast to everyday dishes.",
  nutrients: [
    "Sunflower microgreens contain naturally occurring nutrients found in young sunflower plants. Their nutritional profile can vary depending on the variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Sunflower microgreens develop through the early stages of the sunflower plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "They are harvested while the young leaves and stems are tender and ready to enjoy." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Freshly harvested sunflower microgreens are best enjoyed while they retain their fresh appearance, crisp texture and flavour.",
  storage: "Keep refrigerated and follow the recommended storage guidance provided with the product. Handle gently and protect the greens from excess moisture to help maintain their quality.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Other everyday meals"
  ],
  benefits: [
    "With its crisp bite and naturally nutty character, sunflower microgreens can add texture, freshness and a satisfying green element to a wide variety of meals."
  ],
  farmConfirmationRequired: true
};

const broccoli = {
  ...make(4),
  name: "Broccoli Microgreens",
  images: [
    "https://m.media-amazon.com/images/I/51VZ8A+P9EL._AC_UF1000,1000_QL80_.jpg"
  ],
  taste: "Mild, fresh & slightly earthy",
  description:
    "Broccoli microgreens are young, tender greens with a delicate texture and a mild, fresh flavour. Their vibrant appearance makes them an easy way to bring more colour, freshness and variety to everyday meals.",
  nutrients: [
    "Broccoli microgreens contain naturally occurring nutrients found in young broccoli plants. Their nutritional profile can vary depending on the variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Broccoli microgreens develop through the early stages of the broccoli plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "They are harvested while the young leaves and stems are tender and ready to enjoy." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Freshly harvested broccoli microgreens are best enjoyed while they retain their fresh appearance, delicate texture and flavour.",
  storage: "Keep refrigerated and follow the recommended storage guidance provided with the product. Handle gently and protect the greens from excess moisture to help maintain their quality.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Its mild flavour and delicate texture make broccoli microgreens easy to pair with familiar foods, adding a fresh green element without overpowering the dish."
  ],
  farmConfirmationRequired: true
};

const mungBean = {
  ...make(5),
  name: "Mung Bean Microgreens",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GUzsiMJykFdgXx2AK90wmRTtn-0ZU7vff-EwSc0RFfX6HTdAoqbArv4&s=10"
  ],
  taste: "Fresh, mild & slightly nutty",
  description:
    "Tender young greens with a fresh character and crisp texture. Their mild flavour makes them easy to combine with familiar everyday dishes.",
  nutrients: [
    "Naturally occurring nutrients found in young mung bean plants; nutritional composition can vary by variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Mung bean plants develop through their early young-green stage." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "They are harvested during the young microgreen stage when the stems and leaves are tender." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Mild flavour and crisp texture make it an easy addition to everyday food."
  ],
  farmConfirmationRequired: true
};

const amaranth = {
  ...make(6),
  name: "Amaranth Microgreens",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72jP54GXa6dC97TMfqGROsJAN_w11_ed_TSDfJ6zC-HmDnQQ2bzQE5W1H&s=10"
  ],
  taste: "Fresh, mild & slightly earthy",
  description:
    "Tender young amaranth greens with a delicate texture and fresh flavour. Their vibrant appearance makes them an attractive addition to everyday meals.",
  nutrients: [
    "Naturally occurring nutrients found in young amaranth plants; nutritional composition can vary by variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Amaranth develops through the early stages of the plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "It is harvested during the young microgreen stage when the leaves and stems are tender." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Delicate flavour, fresh texture and vibrant appearance make it easy to add to everyday dishes."
  ],
  farmConfirmationRequired: true
};

const fenugreek = {
  ...make(7),
  name: "Fenugreek Microgreens",
  images: [
    "https://5.imimg.com/data5/CS/YM/LT/SELLER-37654953/methi-500x500.png"
  ],
  taste: "Fresh, mildly bitter & earthy",
  description:
    "Tender young fenugreek greens with a distinctive fresh character and delicate texture. Their unique flavour can add depth and variety to familiar everyday meals.",
  nutrients: [
    "Naturally occurring nutrients found in young fenugreek plants; nutritional composition can vary by variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Fenugreek develops through the early stages of the plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "It is harvested during the young microgreen stage when the leaves and stems are tender." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Its distinctive earthy character brings a different flavour and freshness to everyday dishes."
  ],
  farmConfirmationRequired: true
};

const basil = {
  ...make(8),
  name: "Basil Microgreens",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNo-thyy81pIrr2yaPlGomXJO4d6JbsoPqAul69eKve0WqcCxwOltudsX&s=10"
  ],
  taste: "Fresh, aromatic & mildly sweet",
  description:
    "Tender young basil greens with a delicate texture and characteristic fresh aroma. Their distinctive flavour makes them a versatile addition to familiar everyday dishes.",
  nutrients: [
    "Naturally occurring nutrients found in young basil plants; nutritional composition can vary by variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Basil develops through the early stages of the plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "It is harvested during the young microgreen stage when the leaves and stems are tender." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Fresh aroma and delicate flavour can add a distinctive touch to everyday meals."
  ],
  farmConfirmationRequired: true
};

const coriander = {
  ...make(9),
  name: "Coriander Microgreens",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWIAqaoO1YtZfK9UUVhdQE7GSt0BPtXhLRIt4z_9kVukDjm7TUqu_WMdE&s=10"
  ],
  taste: "Fresh, citrusy & herbaceous",
  description:
    "Tender young coriander greens with a delicate texture and the familiar aromatic character of coriander. They can add freshness and a distinctive herbal touch to everyday meals.",
  nutrients: [
    "Naturally occurring nutrients found in young coriander plants; nutritional composition can vary by variety and growing conditions."
  ],
  growthTime: {
    total: "Young microgreen stage",
    timeline: [
      { day: "Growing stage", stage: "Early Growth", description: "Coriander develops through the early stages of the plant." },
      { day: "Harvest stage", stage: "Typical Harvest", description: "It is harvested during the young microgreen stage when the leaves and stems are tender." }
    ],
    note: "General growing description. Mini's greens should confirm the exact farm harvest timing before publishing."
  },
  shelfLife: "Best enjoyed while fresh, with good texture, appearance and flavour.",
  storage: "Keep refrigerated, handle gently, and protect from excess moisture.",
  bestWaysToUse: [
    "Salads",
    "Sandwiches",
    "Wraps",
    "Bowls",
    "Breakfast",
    "Dosa",
    "Everyday meals"
  ],
  benefits: [
    "Familiar coriander aroma with a fresh, delicate texture makes it easy to include in everyday dishes."
  ],
  farmConfirmationRequired: true
};

export const products = [
  peaShoot,
  radish,
  sunflower,
  broccoli,
  mungBean,
  amaranth,
  fenugreek,
  basil,
  coriander
];
