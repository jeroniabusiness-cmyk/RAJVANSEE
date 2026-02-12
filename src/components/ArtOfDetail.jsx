import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ArtOfDetail.css';

const details = [
    { id: 1, label: "Zardozi Embroidery", class: "detail-zardozi" },
    { id: 2, label: "Rich Silk Textures", class: "detail-silk" },
    { id: 3, label: "Handcrafted Buttons", class: "detail-buttons" },
    { id: 4, label: "Precision Cuts", class: "detail-cuts" },
];

const ArtOfDetail = () => {
    return (
        <section className="art-section">
            <div className="container">
                <h2 className="art-headline">The Art of Detail</h2>
                <p className="art-subhead">Every stitch tells a story of perfection.</p>

                <div className="art-grid">
                    {details.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`art-card ${item.class}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="art-overlay">
                                <span>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtOfDetail;
