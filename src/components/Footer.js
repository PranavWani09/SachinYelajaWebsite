import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2025 Sachin Yelaja. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://wa.me/919881108283" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title="Chat with us on WhatsApp"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
