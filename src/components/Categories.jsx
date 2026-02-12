import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgWedding from '../assets/images/sherwani-ivory.jpg';
import imgFestive from '../assets/images/kurta-gold.jpg';
import imgIndoWestern from '../assets/images/kurta-purple.jpg';
import './Categories.css';

const categories = [
    {
        id: 1,
        title: "Wedding Sherwanis",
        description: "Regal attire for your special day.",
        image: imgWedding
    },
    {
        id: 2,
        title: "Festive Kurtas",
        description: "Vibrant styles for every celebration.",
        image: imgFestive
    },
    {
        id: 3,
        title: "Indo-Western",
        description: "Contemporary fusion for the modern man.",
        image: imgIndoWestern
    }
];

const Categories = () => {
    return (
        <section className="categories-section">
            <div className="container">
                <motion.div
                    className="categories-grid"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            className="category-card"
                            whileHover={{ y: -10 }}
                        >
                            <div className="category-image-container">
                                <img src={cat.image} alt={cat.title} className="category-img" />
                            </div>
                            <div className="category-overlay">
                                <h3 className="category-title">{cat.title}</h3>
                                <p className="category-desc">{cat.description}</p>
                                <Link to="/shop" className="category-link">View Collection</Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
