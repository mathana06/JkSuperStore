import { motion } from 'framer-motion';
import { FaCamera, FaGoogle } from 'react-icons/fa';

const base = import.meta.env.BASE_URL;

const STORE_PHOTOS = [
  { id: 1, src: `${base}store-photos/store-19.webp`, alt: 'JK Super Store - Store View', span: 'wide' },
  { id: 2, src: `${base}store-photos/store-15.webp`, alt: 'JK Super Store - Products Display', span: 'normal' },
  { id: 3, src: `${base}store-photos/store-16.webp`, alt: 'JK Super Store - Shelves', span: 'normal' },
  { id: 4, src: `${base}store-photos/store-17.webp`, alt: 'JK Super Store - Collection', span: 'normal' },
  { id: 5, src: `${base}store-photos/store-18.webp`, alt: 'JK Super Store - Items', span: 'normal' },
  { id: 6, src: `${base}store-photos/store-14.webp`, alt: 'JK Super Store - Interior', span: 'wide' },
  { id: 7, src: `${base}store-photos/store-4.jpg`, alt: 'JK Super Store - Products', span: 'normal' },
  { id: 8, src: `${base}store-photos/store-3.jpg`, alt: 'JK Super Store - Aisle', span: 'normal' },
];

export default function StoreGallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaCamera style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
          Inside Our Store
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Take a peek at JK Super Store, Thiruvanmiyur
        </motion.p>
      </div>

      <div className="gallery-grid">
        {STORE_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            className={`gallery-item ${photo.span === 'wide' ? 'gallery-wide' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>{photo.alt.replace('JK Super Store - ', '')}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="gallery-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://www.google.com/search?sca_esv=48be81eed784dfe1&rlz=1C5GCEM_enIN1156IN1156&cs=1&output=search&kgmid=/g/11v61fqkm5&q=JK+super+stores&shem=dlvsc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=8c143fdce6ffecaf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-google-photos"
        >
          <FaGoogle /> View More Photos on Google
        </a>
      </motion.div>
    </section>
  );
}
