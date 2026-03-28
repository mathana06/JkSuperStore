import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductCard({ product, index }) {
  const [liked, setLiked] = useState(false);

  const handleDM = () => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in "${product.name}" (₹${product.price}) from JK Super Store.`
    );
    window.open(`https://www.instagram.com/jksuperstore_rto/`, '_blank');
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-badge">New</span>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          ₹{product.price.toLocaleString('en-IN')} <span>incl. taxes</span>
        </div>
        <div className="product-actions">
          <button className="dm-btn" onClick={handleDM}>
            DM to Order
          </button>
          <button
            className="wishlist-btn"
            onClick={() => setLiked(!liked)}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
