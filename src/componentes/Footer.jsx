import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiHelpCircle } from "react-icons/fi";
import { 
  FiInstagram, 
  FiYoutube, 
  FiFacebook, 
  FiTwitter 
} from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column logo-column">
            <Link to="/" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoheader1-izquierda.png"
                alt="Dolarchito Logo"
              />
            </Link>
          </div>
          
          <div className="footer-column links-column">
            <div className="social-links">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiYoutube className="social-icon" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiFacebook className="social-icon" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiTwitter className="social-icon" />
                <span>Twitter</span>
              </a>
              <Link to="/ayuda" className="social-link help-link">
                <FiHelpCircle className="social-icon" />
                <span>Ayuda</span>
              </Link>
            </div>
          </div>
          
          <div className="footer-column logo-column">
            <Link to="/" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoheader2-derecha.png"
                alt="Dolarchito Logo"
              />
            </Link>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;