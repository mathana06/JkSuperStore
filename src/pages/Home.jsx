import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import { categories } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import InstagramReels from '../components/InstagramReels';
import StoreGallery from '../components/StoreGallery';
import FollowBanner from '../components/FollowBanner';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-badge">
            <span className="dot" />
            Shopping & Retail
          </div>
          <h1>
            Welcome to <br />
            <span className="highlight">JK Super Store</span>
          </h1>
          <p>
            Your one-stop destination for home essentials, kitchenware,
            glassware, toys, beauty products and much more.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}>
              Browse Categories
            </button>
            <a
              href="https://www.instagram.com/jksuperstore_rto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-outline">DM to Order</button>
            </a>
          </div>
        </motion.div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our wide range of products
          </motion.p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      <section className="location-section" id="location">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            📍 Visit Our Store
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Located in RTO Thiruvanmiyur, Chennai
          </motion.p>
        </div>

        <motion.div
          className="location-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="location-map">
            <iframe
              title="JK Super Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.26!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiTiA4MMKwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location-info">
            <div className="location-pin">
              <FaMapMarkerAlt />
            </div>
            <div className="location-details">
              <h3>JK Super Store</h3>
              <p className="location-area">Located in: RTO Thiruvanmiyur</p>
              <p className="location-address">
                Thiruvalluvar Nagar, Thiruvanmiyur,<br />
                Chennai, Tamil Nadu 600041
              </p>
              <a
                href="https://www.google.com/maps?sca_esv=48be81eed784dfe1&rlz=1C5GCEM_enIN1156IN1156&cs=1&kgmid=/g/11v61fqkm5&shem=dlvsc&shndl=30&kgs=8c143fdce6ffecaf&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb2O4ywMXVI6MXn7jndkqUCq&daddr=Thiruvalluvar+Nagar,+Thiruvanmiyur,+Chennai,+Tamil+Nadu+600041"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <FaDirections /> Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <StoreGallery />

      <InstagramReels />

      <FollowBanner />

      <div className="dm-banner">
        <motion.div
          className="dm-banner-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3>📩 DM to Order</h3>
          <p>See something you like? Send us a message on Instagram and we'll get your order ready!</p>
          <div className="dm-banner-links">
            <a
              href="https://www.instagram.com/jksuperstore_rto/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Message on Instagram
            </a>
            <a
              href="https://share.google/dhrVdGCFY6oAt982f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Visit Google Page
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
