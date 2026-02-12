import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Smartphone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">Rajvansee</h2>
                    <p className="footer-tagline">Heritage Luxury. Since 1996.</p>
                </div>

                <div className="footer-col links-col">
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/">Our Story</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact</h3>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>Mumbai, India</span>
                    </div>
                    {/* Phone number removed as per request */}
                    <div className="social-links">
                        <a href="#" className="social-icon"><Instagram size={24} /></a>
                    </div>
                </div>

                <div className="footer-col newsletter-col">
                    <h3>Exclusive Updates</h3>
                    <p>Join our private list for new collections.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                    <button className="whatsapp-cta">
                        Enquire on WhatsApp
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Rajvansee. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
