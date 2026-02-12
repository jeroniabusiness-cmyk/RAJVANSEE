import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isHome = location.pathname === '/';

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <header className={`navbar ${isScrolled || !isHome || isMobileMenuOpen ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Rajvansee</Link>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        <li><Link to="/shop">Collections</Link></li>
                        <li><Link to="/">Heritage</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="nav-icons">
                    <Search className="icon search-icon" size={20} />
                    <ShoppingBag className="icon bag-icon" size={20} />
                    <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul>
                            <motion.li variants={itemVariants}>
                                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Heritage</Link>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
