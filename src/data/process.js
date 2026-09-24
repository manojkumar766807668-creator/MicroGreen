const descriptions = [
  "We begin with carefully selected seeds that form the foundation of every microgreen crop. The selection process focuses on seeds suitable for growing microgreens, with attention to germination and consistent growth. Starting with the right seeds helps create a strong foundation for the stages that follow.",
  "Once the seeds are selected, they are evenly distributed across the growing medium in trays. Proper seeding gives the plants a suitable starting environment and helps create an even crop as germination begins.",
  "After seeding, the seeds begin to absorb moisture and germinate. Tiny shoots emerge from the seeds and begin their early growth. This is the stage where the first visible signs of the microgreen journey appear.",
  "As the young plants develop, they grow towards light and begin developing their leaves and stems. During this stage, the plants gradually take the form of the fresh, young greens that will eventually be harvested.",
  "Throughout the growing process, the crop is regularly observed. Important growing conditions such as moisture, light and overall development are monitored to support consistent growth and identify anything that requires attention.",
  "When the microgreens reach the appropriate harvesting stage, they are carefully harvested. The young leaves and stems are prepared for use, followed by careful post-harvest handling to maintain their condition.",
  "After harvest and preparation, the microgreens are packed and made ready for fulfilment. The final stage connects the growing journey with the customer, taking the freshly prepared greens from the farm towards their destination."
];

export const steps = ["Seed selection", "Seeding", "Germination & early growth", "Light & growth", "Daily monitoring", "Harvest & post-harvest", "Delivery / fulfilment"]
  .map((title, i) => ({ n: String(i + 1).padStart(2, "0"), title, text: descriptions[i] }));
