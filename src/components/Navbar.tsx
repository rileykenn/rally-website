'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
                    }`}
            >
                {/* Racing stripe top accent */}
                <div className="h-1 racing-stripe w-full" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-rally-red flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div>
                                <span
                                    className="text-xl sm:text-2xl font-bold text-white tracking-wider"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    RALLY LIGHT PODS
                                </span>
                                <span className="hidden sm:block text-[10px] tracking-[0.3em] text-rally-red uppercase">
                                    Australia
                                </span>
                            </div>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-rally-red transition-all duration-300 group-hover:w-3/4" />
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="ml-4 px-5 py-2 bg-rally-red text-white text-sm font-semibold rounded-lg hover:bg-rally-red-glow transition-all hover:shadow-lg hover:shadow-rally-red/25 active:scale-95"
                            >
                                Get a Quote
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-rally-red transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                        }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-racing-black/98 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-3xl font-bold text-white py-3 border-b border-white/10 hover:text-rally-red transition-colors"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setMobileOpen(false)}
                                className="mt-6 px-6 py-4 bg-rally-red text-white text-center text-lg font-bold rounded-xl"
                            >
                                Get a Quote
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
