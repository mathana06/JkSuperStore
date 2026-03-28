import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function CategoryCard({ category, index }) {
  const navigate = useNavigate();
  const count = products[category.id]?.length || 0;

  return (
    <motion.div
      className="category-card"
      onClick={() => navigate(`/category/${category.id}`)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ '--card-color': category.color }}
    >
      <div
        className="category-card"
        style={{ border: 'none', padding: 0, background: 'none' }}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/category/${category.id}`)}
      >
        <span className="category-emoji">{category.emoji}</span>
        <div className="category-name">{category.name}</div>
        <div className="category-count">{count} products</div>
        <div className="category-arrow" style={{ background: category.gradient }}>→</div>
      </div>
    </motion.div>
  );
}
