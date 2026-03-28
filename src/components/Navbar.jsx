import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaGoogle } from 'react-icons/fa';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/')}>
        <div className="navbar-logo">JK</div>
        <div>
          <div className="navbar-title">JK Super Store</div>
          <div className="navbar-subtitle">Shopping & Retail</div>
        </div>
      </div>
      <div className="navbar-links">
        <a
          href="https://www.instagram.com/jksuperstore_rto/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://share.google/dhrVdGCFY6oAt982f"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn google"
        >
          <FaGoogle /> Google
        </a>
      </div>
    </nav>
  );
}
