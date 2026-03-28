import { motion } from 'framer-motion';
import { FaInstagram, FaPlay } from 'react-icons/fa';

const REELS = [
  { url: 'https://www.instagram.com/p/DWX8SMRCn5i/', img: '/store-photos/store-2.jpg', label: 'New Arrivals' },
  { url: 'https://www.instagram.com/jksuperstore_rto/reel/DWa5Q3qio9y/', img: '/store-photos/store-3.jpg', label: 'Kitchen Deals' },
  { url: 'https://www.instagram.com/p/DWZHoLnioQu/', img: '/store-photos/store-4.jpg', label: 'Glassware' },
  { url: 'https://www.instagram.com/p/DWT7b3eCpik/', img: '/store-photos/store-5.jpg', label: 'Beauty' },
  { url: 'https://www.instagram.com/p/DWO7WPAiklT/', img: '/store-photos/store-6.jpg', label: 'Toys' },
  { url: 'https://www.instagram.com/p/DWB_zzhihpJ/', img: '/store-photos/store-7.jpg', label: 'Arts' },
  { url: 'https://www.instagram.com/p/DV8elB-Tmxv/', img: '/store-photos/store-10.jpg', label: 'Home Decor' },
  { url: 'https://www.instagram.com/p/DV565qez9dw/', img: '/store-photos/store-11.jpg', label: 'Storage' },
  { url: 'https://www.instagram.com/p/DV5XfVqCvtc/', img: '/store-photos/store-13.jpg', label: 'Crockery' },
];

export default function InstagramReels() {
  return (
    <section className="reels-section" id="reels">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaInstagram style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
          Our Instagram Reels
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Watch our latest product showcases
        </motion.p>
      </div>

      <div className="tv-grid">
        {REELS.map((reel, i) => (
          <motion.a
            key={reel.url}
            className="tv-item"
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <div className="tv-frame">
              <div className="tv-screen">
                <img src={reel.img} alt={reel.label} loading="lazy" />
                <div className="tv-play-overlay">
                  <FaPlay />
                </div>
              </div>
              <div className="tv-led" />
            </div>
            <div className="tv-stand" />
            <div className="tv-label">{reel.label}</div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="reels-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://www.instagram.com/jksuperstore_rto/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          <FaInstagram /> View All on Instagram
        </a>
      </motion.div>
    </section>
  );
}
