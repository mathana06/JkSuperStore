import { motion } from 'framer-motion';
import { FaInstagram, FaHeart } from 'react-icons/fa';

export default function FollowBanner() {
  return (
    <section className="follow-section">
      <motion.div
        className="follow-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="follow-emoji-row">
          <span>🛍️</span>
          <span>✨</span>
          <span>🏠</span>
          <span>💖</span>
          <span>🥂</span>
        </div>
        <h3 className="follow-title">
          Psst... you're missing out! <span className="follow-wink">😉</span>
        </h3>
        <p className="follow-text">
          We post new arrivals, deals & behind-the-scenes fun on Instagram every day.
          <br />
          Come be part of the JK fam — we'd love to have you! <FaHeart className="follow-heart" />
        </p>
        <a
          href="https://www.instagram.com/jksuperstore_rto/"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-btn"
        >
          <FaInstagram className="follow-btn-icon" />
          <span>Follow @jksuperstore_rto</span>
        </a>
        <p className="follow-subtext">
          Go on, tap that follow button — you know you want to 💕
        </p>
      </motion.div>
    </section>
  );
}
