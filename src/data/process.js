const descriptions = [
  "We begin with carefully selected seeds that form the foundation of every microgreen crop. The selection process focuses on seeds suitable for growing microgreens, with attention to germination and consistent growth. Starting with the right seeds helps create a strong foundation for the stages that follow.",
  "Once the seeds are selected, they are evenly distributed across the growing medium in trays. Proper seeding gives the plants a suitable starting environment and helps create an even crop as germination begins.",
  "After seeding, the seeds begin to absorb moisture and germinate. Tiny shoots emerge from the seeds and begin their early growth. This is the stage where the first visible signs of the microgreen journey appear.",
  "As the young plants develop, they grow towards light and begin developing their leaves and stems. During this stage, the plants gradually take the form of the fresh, young greens that will eventually be harvested.",
  "Throughout the growing process, the crop is regularly observed. Important growing conditions such as moisture, light and overall development are monitored to support consistent growth and identify anything that requires attention.",
  "When the microgreens reach the appropriate harvesting stage, they are carefully harvested. The young leaves and stems are prepared for use, followed by careful post-harvest handling to maintain their condition.",
  "After harvest and preparation, the microgreens are packed and made ready for fulfilment. The final stage connects the growing journey with the customer, taking the freshly prepared greens from the farm towards their destination."
];

const details = [
  [
    "Every microgreen journey begins with the seed. The first step is selecting seeds that are suitable for growing as microgreens and capable of developing into healthy young plants.",
    "Different plants have different growth characteristics, flavours, colours and textures. Choosing suitable seed helps establish the intended crop and provides the foundation for consistent growth.",
    "Once the appropriate seeds have been selected, they are ready to begin their journey from seed to young plant."
  ],
  [
    "After the seeds have been selected, they are distributed across the growing medium in trays, creating the starting point for the new crop.",
    "Even seeding gives the developing plants a suitable environment as they begin to grow. The seeds now have a place from which they can absorb moisture, germinate and develop their first shoots.",
    "This stage establishes the crop that will continue developing through the following stages."
  ],
  [
    "Following seeding, the seeds begin to absorb moisture and undergo germination. Gradually, tiny shoots emerge as the seeds transition from dormant seeds into actively growing young plants.",
    "This is one of the first visible transformations in the journey. What began as small seeds starts developing into recognisable plants with the early structure that will become harvested microgreens.",
    "This stage marks the transition from seed to growing plant."
  ],
  [
    "As the young plants develop, they grow towards light and gradually form their leaves and stems. The crop becomes increasingly recognisable as a collection of young microgreens.",
    "The small shoots from the earlier stage are now developing into tender plants. Their stems extend, their young leaves develop and the crop takes on the appearance of fresh, young greens.",
    "The crop continues progressing until the young greens reach the appropriate stage for harvest."
  ],
  [
    "Growing does not stop once the plants emerge. Throughout the crop's development, the process requires regular observation and attention.",
    "The developing microgreens are monitored as they progress through their growth stages. Their overall development and growing conditions are observed so the crop can continue towards its intended harvest stage.",
    "Daily monitoring connects the earlier stages with the point where the young plants are ready to be harvested."
  ],
  [
    "When the microgreens reach the appropriate stage for harvest, the growing journey reaches an important milestone. The young greens are harvested from the growing medium and move into post-harvest handling.",
    "Because microgreens are young and delicate, careful handling is important. The harvested greens are prepared for the next part of their journey while maintaining their fresh character, appearance and texture.",
    "Harvest is where the growing journey ends and the fresh-food journey begins."
  ],
  [
    "After harvesting and post-harvest handling, the microgreens move into fulfilment. The harvested greens are prepared for their intended destination and the final part of their journey.",
    "The process that started with seed selection has now moved through seeding, germination, growth, monitoring and harvest before reaching the customer.",
    "From a tiny seed to a fresh young green, the complete journey comes together as the greens move towards an everyday meal."
  ]
];

const takeaways = [
  "The journey begins with the right seed.",
  "Seeds are placed. Growth begins.",
  "A tiny shoot becomes the beginning of a young green.",
  "From tiny shoots to recognisable young greens.",
  "Watch, observe and follow the growth.",
  "The growing journey ends. The fresh-food journey begins.",
  "From the growing environment to your table."
];

const images = [
  "https://i.ibb.co/9mwwST4L/Screenshot-2026-09-24-234731.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKSRNzI_YtE8TeM7GGU4FIWZMntfM-4hrPllT3snQaeVFJnS4PFqZZAtb&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWndVeIvP9zsg19QfsRJR2rEMsQmwnOfT9ANo5ejG9PfUG-X9If2n0d6e&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbpnegC_d3-mwOSn3-uXTw6BiOzudW3E7MmYPMMJdJlJ1efQ4KsKbljw&s=10",
  "https://microgreensfarmer.com/wp-content/uploads/2019/04/microgrren-farming.jpg",
  "https://images.squarespace-cdn.com/content/v1/65764d4e6c1b3b026d0afd05/1702863853743-NVVABZZ40XI2MMCZXA9W/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKeuySL3CFGnhBFtZN1ra64o8ndZfIRjJYKFePXndTQ&s=10"
];

export const steps = ["Seed selection", "Seeding", "Germination & early growth", "Light & growth", "Daily monitoring", "Harvest & post-harvest", "Delivery / fulfilment"]
  .map((title, i) => ({ n: String(i + 1).padStart(2, "0"), title, text: descriptions[i], details: details[i], takeaway: takeaways[i], image: images[i] }));
