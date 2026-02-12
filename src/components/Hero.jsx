import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-background-placeholder">
                {/* 
                   In a real app, this would be a high-quality video or image.
                   We'll use CSS to make this look premium.
                */}
            </div>

            <div className="container hero-content">
                <motion.h1
                    className="hero-headline"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                >
                    Rajvansee<span className="accent">.</span>
                </motion.h1>

                <motion.div
                    className="hero-subheadline-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                >
                    <p className="hero-subheadline">
                        Defining Men's Ethnic Luxury for Generations. <br />From Mumbai to the World.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <Link to="/shop">
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore Collection
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
