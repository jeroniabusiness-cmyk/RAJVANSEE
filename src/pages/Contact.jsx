import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your enquiry. We will get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Visit our Mumbai flagship store or drop us a message.</p>
            </div>

            <div className="container contact-grid">
                <div className="contact-info">
                    <div className="info-item">
                        <MapPin className="icon-gold" size={24} />
                        <div>
                            <h3>Visit Us</h3>
                            <p>123, Heritage Lane, Colaba,<br />Mumbai, Maharashtra 400001</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Phone className="icon-gold" size={24} />
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 98765 43210</p>
                            <p>+91 22 1234 5678</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Mail className="icon-gold" size={24} />
                        <div>
                            <h3>Email Us</h3>
                            <p>info@rajvansee.com</p>
                            <p>wholesale@rajvansee.com</p>
                        </div>
                    </div>

                    <div className="map-placeholder">
                        {/* Google Map Placeholder */}
                        <span>Google Map View</span>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                required
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
