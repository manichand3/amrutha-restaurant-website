import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { MapPin, Phone, Clock, Menu, X, ArrowRight, Star, Utensils, Instagram } from "lucide-react";
import "./styles.css";

const phone = "+917671073970";
const whatsapp = "917671073970";

const menuItems = [
  { name: "Paneer Tikka", category: "Starters", price: "₹220", description: "Smoky, char-grilled paneer with fresh herbs." },
  { name: "Chicken 65", category: "Starters", price: "₹240", description: "Crispy chicken tossed with aromatic spices." },
  { name: "Butter Chicken", category: "Main Course", price: "₹290", description: "Creamy tomato gravy with tender chicken." },
  { name: "Paneer Butter Masala", category: "Main Course", price: "₹250", description: "Rich, silky tomato gravy with paneer." },
  { name: "Chicken Biryani", category: "Biryani", price: "₹280", description: "Fragrant basmati rice layered with spiced chicken." },
  { name: "Veg Biryani", category: "Biryani", price: "₹220", description: "Aromatic rice cooked with seasonal vegetables." },
];

function App() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("All");

  const filtered = category === "All"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Amrutha home">
            <span className="brand-mark">A</span>
            <span>
              <strong>AMRUTHA</strong>
              <small>Multi Cuisine Family Restaurant</small>
            </span>
          </button>

          <nav className={open ? "nav-links show" : "nav-links"}>
            {["home", "menu", "about", "gallery", "contact"].map(id => (
              <button key={id} onClick={() => scrollTo(id)}>{id[0].toUpperCase() + id.slice(1)}</button>
            ))}
            <a className="nav-cta" href={`tel:${phone}`}>Call Now</a>
          </nav>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="eyebrow"><Star size={15} fill="currentColor" /> 4.6 ★ · 100+ Reviews</div>
            <h1>Good food.<br /><em>Great moments.</em></h1>
            <p>Multi-cuisine family dining in the heart of Bank Colony, Hanamkonda.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("menu")}>Explore Menu <ArrowRight size={18} /></button>
              <a className="secondary" href={`https://wa.me/${whatsapp}?text=Hi%20Amrutha%20Restaurant%2C%20I%20would%20like%20to%20know%20more.`}>WhatsApp Us</a>
            </div>
          </div>
        </section>

        <section className="quick-info">
          <div className="container info-grid">
            <div><Clock /><span><b>Open Daily</b>12:00 PM – 11:00 PM</span></div>
            <div><MapPin /><span><b>Visit Us</b>Bank Colony, Hanamkonda</span></div>
            <div><Phone /><span><b>Call Us</b>+91 76710 73970</span></div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="container">
            <div className="section-heading">
              <span>OUR MENU</span>
              <h2>Made to bring<br /><em>people together.</em></h2>
              <p>A selection of family favourites. Replace these demo items with the restaurant's confirmed menu and prices before launch.</p>
            </div>
            <div className="filters">
              {["All", "Starters", "Main Course", "Biryani"].map(c => (
                <button className={category === c ? "active" : ""} onClick={() => setCategory(c)} key={c}>{c}</button>
              ))}
            </div>
            <div className="menu-grid">
              {filtered.map(item => (
                <article className="menu-card" key={item.name}>
                  <div>
                    <span className="category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <strong>{item.price}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="split-section">
          <div className="split-image food-image" />
          <div className="split-copy">
            <span>ABOUT AMRUTHA</span>
            <h2>A place for <em>every appetite.</em></h2>
            <p>Amrutha Multi Cuisine Family Restaurant brings together comforting favourites, relaxed family dining and a welcoming atmosphere in Hanamkonda.</p>
            <p>Whether it is a family lunch, dinner with friends or a quick meal, our goal is simple: serve food worth coming back for.</p>
            <button className="text-btn" onClick={() => scrollTo("contact")}>Find Us <ArrowRight size={17} /></button>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading center">
              <span>THE EXPERIENCE</span>
              <h2>Come hungry.<br /><em>Leave happy.</em></h2>
            </div>
            <div className="gallery">
              <div className="gallery-item g1" />
              <div className="gallery-item g2" />
              <div className="gallery-item g3" />
              <div className="gallery-item g4" />
            </div>
          </div>
        </section>

        <section className="review-section">
          <div className="container review">
            <div className="stars">★★★★★</div>
            <blockquote>“A 4.6-star local favourite with 100+ reviews.”</blockquote>
            <p>Real customer reviews can be added here from the restaurant's verified Google profile.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <span>VISIT AMRUTHA</span>
              <h2>Let's make your<br /><em>next meal special.</em></h2>
              <p>Bank Colony, Hanamkonda, Telangana 506009</p>
              <div className="contact-buttons">
                <a className="primary" href={`tel:${phone}`}><Phone size={18} /> Call Restaurant</a>
                <a className="outline" href={`https://wa.me/${whatsapp}`}>WhatsApp</a>
              </div>
            </div>
            <div className="map-card">
              <div className="map-pin"><MapPin size={30} /></div>
              <h3>Amrutha Multi Cuisine Family Restaurant</h3>
              <p>Bank Colony · Hanamkonda</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Amrutha+Multi+Cuisine+Family+Restaurant+Hanamkonda" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div><strong>AMRUTHA</strong><small>Multi Cuisine Family Restaurant</small></div>
          <p>© {new Date().getFullYear()} Amrutha Restaurant. All rights reserved.</p>
          <a href={`https://wa.me/${whatsapp}`} aria-label="WhatsApp">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
