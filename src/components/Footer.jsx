
import { Link } from "react-router-dom";
import { Shirt, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP = "254723124731";
const BUSINESS_EMAIL = ""; // Add the confirmed email address here.

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">
              <Shirt size={25} />
            </span>
            <span>
              <strong>EUNEX</strong>
              <small>UNIFORMS</small>
            </span>
          </Link>

          <p>
            Your partner for professional uniforms, reflective wear,
            caps, capes, printing and branding solutions in Kenya.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products & Services</Link>
          <Link to="/printing-branding">Printing & Branding</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href={`https://wa.me/${WHATSAPP}`}
             target="_blank" rel="noopener noreferrer">
            <Phone size={17} /> +254 723 124 731
          </a>

          {BUSINESS_EMAIL && (
            <a href={`mailto:${BUSINESS_EMAIL}`}>
              <Mail size={17} /> {BUSINESS_EMAIL}
            </a>
          )}

          <span><MapPin size={17} /> Kenya</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Eunex Uniforms.
          All rights reserved.
        </p>
        <p>Professional Uniforms. Professional Identity.</p>
      </div>
    </footer>
  );
}
