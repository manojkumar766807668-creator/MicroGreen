import { PageHero, CTASection, Heading, Reveal } from "../components/ui";
import { WhatIs, Versus, Why, Trust, FAQ } from "../components/sections";
import { useSEO } from "../hooks/useSEO";

const reasons = [
  ["01", "Nutrient-Rich", "Many varieties contain important nutrients and naturally occurring antioxidants. Their nutritional composition varies by variety, growing conditions, and harvest stage."],
  ["02", "Fresh & Flavorful", "Microgreens add fresh flavor, color, and texture to everyday meals without requiring large quantities."],
  ["03", "Easy to Add to Meals", "Add them to salads, sandwiches, wraps, soups, smoothies, rice dishes, poha, breakfast bowls, and many other recipes."],
  ["04", "Variety of Choices", "Broccoli, radish, sunflower, pea shoots, mustard, beetroot, and coriander offer different tastes, colors, and textures."],
  ["05", "Quick-Growing Plants", "Compared with mature crops, many microgreens can be harvested relatively quickly, making them suitable for small-scale growing."],
  ["06", "Fresh Growing Experience", "They can be grown in controlled environments with limited space, from home gardens to educational and urban farming projects."]
];

const varieties = [
  ["Broccoli Microgreens", "Mild, fresh, and easy to combine with salads, sandwiches, and bowls."],
  ["Radish Microgreens", "Crisp with a peppery flavor, making them suitable for salads and wraps."],
  ["Sunflower Microgreens", "Crunchy and slightly nutty, they work well in sandwiches, bowls, and salads."],
  ["Pea Shoots", "Fresh, tender, and naturally sweet, they suit salads and cooked dishes."],
  ["Mustard Microgreens", "A stronger, spicy flavor that adds intensity to everyday meals."],
  ["Beetroot Microgreens", "Recognizable by their vibrant appearance and mild earthy flavor."]
];

const mealIdeas = ["Salads", "Sandwiches", "Wraps", "Soups", "Rice & grain bowls", "Smoothie bowls", "Breakfast dishes", "Poha and everyday meals", "Food plating and garnishing"];

function MicrogreensGuide() {
  return <>
    <section className="sec micro-learn-intro"><div className="wrap micro-learn-grid">
      <Reveal><p className="label">A closer look</p><h2>Small Plants. Big Nutrition.</h2></Reveal>
      <Reveal delay={100}><p className="about-copy-large">Microgreens are young, edible plants harvested shortly after the first leaves develop. Although they are small in size, they contain a concentrated combination of nutrients, natural plant compounds, vibrant colors, and fresh flavors.</p><p>They are commonly grown from vegetables, herbs, and other edible plants such as broccoli, radish, sunflower, pea, mustard, beetroot, and coriander.</p><p>Unlike fully grown vegetables, microgreens are harvested at an early stage of plant development. Depending on the variety, they may taste mild, fresh, spicy, nutty, or slightly sweet.</p></Reveal>
    </div></section>

    <section className="sec micro-difference"><div className="wrap micro-difference-grid"><Reveal><p className="label">What makes them different?</p><h2>Harvested young, enjoyed fresh.</h2></Reveal><div className="difference-points"><Reveal delay={80}><h3>Earlier than mature vegetables</h3><p>Microgreens are harvested soon after their first leaves develop, before the plant becomes a full-sized vegetable or herb.</p></Reveal><Reveal delay={140}><h3>Different from sprouts</h3><p>Sprouts are eaten at an earlier germinated-seed stage. Microgreens develop leaves and are cut above the growing medium, so their leaves and tender stems are eaten.</p></Reveal><Reveal delay={200}><h3>More than one flavor</h3><p>Each variety brings its own combination of color, texture, and taste, from mild broccoli to peppery radish and sweet pea shoots.</p></Reveal></div></div></section>

    <section className="sec cream"><div className="wrap"><Heading label="Why choose them" title="Fresh food with plenty of possibility." /><div className="reason-grid">{reasons.map(([number, title, text], i) => <Reveal key={number} delay={i * 50} className="reason-item"><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

    <section className="sec micro-story"><div className="wrap micro-story-grid"><Reveal><p className="label">More than just a garnish</p><h2>Bring fresh flavor to the everyday plate.</h2></Reveal><Reveal delay={100}><p className="about-copy-large">Microgreens are often used as a decorative garnish, but their potential goes far beyond presentation. They can become part of everyday meals and contribute fresh flavors, textures, and plant-based nutrition.</p><p>From a colorful salad to a simple bowl of poha, microgreens can transform an ordinary meal into something more visually appealing and flavorful.</p></Reveal></div></section>

    <section className="sec dark micro-journey"><div className="wrap micro-journey-grid"><Reveal><p className="label">From seed to plate</p><h2>Growing is part of the experience.</h2></Reveal><Reveal delay={100}><p className="about-copy-large">Our approach focuses on the complete microgreen journey:</p><p className="journey-line">Seed <span>→</span> Growing <span>→</span> Harvesting <span>→</span> Quality <span>→</span> Meal</p><p>The goal is to make microgreens easier to understand, grow, choose, and incorporate into everyday food.</p></Reveal></div></section>

    <section className="sec"><div className="wrap"><Heading label="Explore different microgreens" title="Every variety brings something different." /><div className="variety-grid">{varieties.map(([title, text], i) => <Reveal key={title} delay={i * 50} className="variety-item"><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

    <section className="sec cream"><div className="wrap micro-use-grid"><Reveal><p className="label">How can you use microgreens?</p><h2>Add a little green to familiar food.</h2></Reveal><Reveal delay={100}><div className="meal-list">{mealIdeas.map((meal) => <span key={meal}>{meal}</span>)}</div></Reveal></div></section>

    <section className="sec micro-vision"><div className="wrap micro-vision-grid"><Reveal><p className="label">Why are they becoming popular?</p><h2>A compact crop for a changing food culture.</h2></Reveal><Reveal delay={100}><p>As people become more interested in fresh food, home growing, nutrition, and sustainable urban agriculture, microgreens are attracting increasing attention. Their short growing cycle, compact size, variety of flavors, and versatility make them suitable for beginners and experienced growers.</p><p>We believe healthy food does not have to be complicated. By making microgreens easier to discover, understand, grow, and use, we want to encourage people to bring more fresh plant-based ingredients into everyday meals.</p><strong>Small plants can make a meaningful difference to the way we grow, prepare, and enjoy food.</strong></Reveal></div></section>
  </>;
}

export default function WhyMicrogreens() {
  useSEO("Why microgreens", "What microgreens are and why they belong on your plate.");
  return <><PageHero title="Why microgreens?" sub="Small plants with a lot to say." /><WhatIs /><MicrogreensGuide /><Versus /><Why /><Trust /><FAQ /><CTASection /></>;
}
