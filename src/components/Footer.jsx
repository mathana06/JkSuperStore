import { FaInstagram, FaGoogle, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">JK Super Store</div>
      <p>Your one-stop shop for all home needs, kitchenware, toys & more</p>
      <div className="footer-location">
        <FaMapMarkerAlt />
        <span>Thiruvalluvar Nagar, Thiruvanmiyur, Chennai, Tamil Nadu 600041</span>
      </div>
      <div className="footer-socials">
        <a href="https://www.instagram.com/jksuperstore_rto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://share.google/dhrVdGCFY6oAt982f" target="_blank" rel="noopener noreferrer" aria-label="Google">
          <FaGoogle />
        </a>
        <a href="https://www.instagram.com/jksuperstore_rto/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp DM">
          <FaWhatsapp />
        </a>
        <a href="https://www.google.com/maps?sca_esv=48be81eed784dfe1&rlz=1C5GCEM_enIN1156IN1156&cs=1&kgmid=/g/11v61fqkm5&shem=dlvsc&shndl=30&kgs=8c143fdce6ffecaf&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb2O4ywMXVI6MXn7jndkqUCq&daddr=Thiruvalluvar+Nagar,+Thiruvanmiyur,+Chennai,+Tamil+Nadu+600041" target="_blank" rel="noopener noreferrer" aria-label="Directions">
          <FaMapMarkerAlt />
        </a>
      </div>
      <div className="footer-copy">© 2026 JK Super Store. All rights reserved.</div>
    </footer>
  );
}
