import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
export default function Footer() {
  return <footer className="footer"><div className="wrap foot-in">
    <img src={logo} alt="mini's greens logo" className="foot-logo" width="220" height="124" loading="lazy" />
    <nav aria-label="Footer"><Link to="/products">Products</Link><Link to="/our-process">Our Process</Link><Link to="/how-to-use">How to Use</Link><Link to="/farm-visits">Farm Visits</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></nav>
    <p className="small">© {new Date().getFullYear()} mini's greens</p></div></footer>;
}
