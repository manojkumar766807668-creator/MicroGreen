import { ArrowUpRight, BookOpen, Heart, Leaf, Sparkles, Users } from "lucide-react";
import { Btn, Reveal } from "../components/ui";
import { useSEO } from "../hooks/useSEO";

const values = [
  [Heart, "Care", "Careful attention throughout the growing journey, from seed to harvest."],
  [Leaf, "Freshness", "The natural freshness, texture and character of young greens."],
  [BookOpen, "Education", "Clear information that makes microgreens easier to understand and enjoy."],
  [Sparkles, "Everyday use", "Simple ways to bring microgreens into familiar meals."],
  [Users, "Connection", "A closer connection between people, their food and the growing process."]
];
const everydayFoods = ["Sandwiches", "Wraps", "Salads", "Dosa", "Poha", "Dal", "Soups", "Breakfast bowls"];

export default function About() {
  useSEO("About", "Learn about mini's greens and our approach to fresh, everyday microgreens.");
  return <main className="about-page">
    <section className="about-hero">
      <div className="wrap about-hero-in">
        <Reveal><p className="label">About mini's greens</p><h1>Fresh greens<br /><em>for everyday living.</em></h1><p className="small">By Manoj Kumar</p></Reveal>
        <Reveal delay={120} className="about-hero-note"><p>Small plants, thoughtful growing and simple ways to make everyday food feel fresher.</p><ArrowUpRight aria-hidden="true" /></Reveal>
      </div>
    </section>

    <section className="sec about-intro"><div className="wrap about-intro-grid">
      <Reveal><p className="label">Why we exist</p><h2>Fresh greens should feel approachable, not complicated.</h2></Reveal>
      <Reveal delay={100}><p className="about-copy-large">At <strong>mini's greens</strong>, we believe that discovering better food choices starts with understanding what we eat. Microgreens may be small, but they bring colour, texture and flavour to everyday meals. Our aim is to make them easier to understand, easier to use and easier to include in the foods people already enjoy.</p><p>Whether someone is completely new to microgreens or already enjoys them, we want to provide a clear place to learn about young plants, explore different varieties and discover simple ways to bring them into everyday meals.</p></Reveal>
    </div></section>

    <section className="about-purpose"><div className="wrap about-purpose-grid">
      <Reveal><p className="label">Our purpose</p><h2>Awareness.<br />Education.<br /><em>Everyday use.</em></h2></Reveal>
      <Reveal delay={120}><p>We want to introduce more people to the world of microgreens by showing how naturally they can fit into daily food. A small handful can become part of a sandwich, wrap, salad, dosa, poha, dal, soup or breakfast bowl.</p><p>We focus on helping people understand what microgreens are, how they grow, how they differ from sprouts, how to store them and how to use them.</p></Reveal>
    </div></section>

    <section className="sec about-journey"><div className="wrap">
      <div className="about-section-head"><Reveal><p className="label">From seed to table</p><h2>A closer look at the growing journey.</h2></Reveal><Reveal delay={100}><p>Every microgreen begins with a seed and follows a journey before it reaches the plate: seeding, germination, early growth, development, monitoring and harvesting.</p></Reveal></div>
      <div className="journey-steps"><div><span>01</span><h3>Begin</h3><p>Every growing journey starts with a seed.</p></div><div><span>02</span><h3>Develop</h3><p>Young plants grow through their early stages with care and attention.</p></div><div><span>03</span><h3>Harvest</h3><p>Tender greens become ready to bring from the growing space to the table.</p></div></div>
    </div></section>

    <section className="sec cream about-care"><div className="wrap about-care-grid"><Reveal><h2>Growing with care.</h2></Reveal><Reveal delay={100}><p>Growing young plants requires attention throughout their development. From the beginning of the growing journey through harvesting and post-harvest handling, care plays an important role in maintaining quality and freshness.</p><p>We believe the growing process should be something people can understand rather than something hidden behind the final product.</p></Reveal></div></section>

    <section className="sec about-everyday"><div className="wrap"><div className="about-section-head"><Reveal><p className="label">Made for everyday food</p><h2>A little green can go a long way.</h2></Reveal><Reveal delay={100}><p>Microgreens do not have to mean completely changing the way you eat. They can be added to foods that are already familiar.</p></Reveal></div><div className="food-list">{everydayFoods.map((food, i) => <span key={food}><b>{String(i + 1).padStart(2, "0")}</b>{food}</span>)}</div></div></section>

    <section className="sec dark about-learn"><div className="wrap about-care-grid"><Reveal><p className="label">Learning before choosing</p><h2>Useful information makes better food feel simple.</h2></Reveal><Reveal delay={100}><p>We explain the difference between sprouts and microgreens, introduce different varieties, describe their flavours and textures, show how they are grown and share practical ideas for using them.</p><p>Our goal is to make that information clear, useful and easy to understand for someone discovering microgreens for the first time.</p></Reveal></div></section>

    <section className="sec about-values"><div className="wrap"><Reveal><p className="label">Our values</p><h2>What guides the way we grow.</h2></Reveal><div className="values-grid">{values.map(([Icon, title, text], i) => <Reveal key={title} delay={i * 60} className="value-item"><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

    <section className="about-vision"><div className="wrap about-vision-in"><Reveal><p className="label">Our vision</p><h2>Discover. Learn.<br /><em>Explore. Experience.</em></h2></Reveal><Reveal delay={120}><p>We envision a future where microgreens are not seen as complicated or unfamiliar, but as a simple and approachable part of everyday food. We want mini's greens to be a place where people can understand the first stages of growth and find a place for fresh greens on their own plate.</p><Btn to="/how-to-use">Explore everyday uses</Btn></Reveal></div></section>
  </main>;
}
