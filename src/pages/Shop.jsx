import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Shop.css';

const Shop = () => {
    const [filter, setFilter] = useState("All");

    const filteredProducts = filter === "All"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="shop-page">
            <div className="shop-header">
                <h1>Our Collections</h1>
                <p>Curated elegance for every occasion.</p>
            </div>

            <div className="shop-filters container">
                {["All", "Wedding", "Festive", "Indo-Western"].map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="shop-grid container">
                {filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                        <motion.div
                            className="product-card"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-img"
                                />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <span className="product-category">{product.category}</span>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;
