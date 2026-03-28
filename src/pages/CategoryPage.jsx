import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === id);
  const items = products[id] || [];

  if (!category) {
    return (
      <div className="product-page" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h2>Category not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Categories
      </button>

      <motion.div
        className="category-hero"
        style={{ background: category.gradient }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="category-hero-emoji">{category.emoji}</span>
        <h1>{category.name}</h1>
        <p>{items.length} products available</p>
      </motion.div>

      <div className="products-grid">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="dm-banner">
        <motion.div
          className="dm-banner-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3>📩 Want to order?</h3>
          <p>DM us on Instagram with the product name and we'll arrange delivery!</p>
          <a
            href="https://www.instagram.com/jksuperstore_rto/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            DM on Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
}
