import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import imgZardozi from '../assets/images/fabric-zardozi.png';
import imgSilk from '../assets/images/fabric-silk.png';
import imgButtons from '../assets/images/fabric-buttons.png';
import imgCuts from '../assets/images/fabric-cuts.png';
import './ArtOfDetail.css';

const details = [
    { id: 1, label: "Zardozi Embroidery", image: imgZardozi },
    { id: 2, label: "Rich Silk Textures", image: imgSilk },
    { id: 3, label: "Handcrafted Buttons", image: imgButtons },
    { id: 4, label: "Precision Cuts", image: imgCuts },
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
                            className="art-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={item.image} alt={item.label} className="art-image" />
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
