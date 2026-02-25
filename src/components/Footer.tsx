'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <footer className="relative bg-racing-black border-t border-white/5 overflow-hidden" ref={ref}>
            {/* Top racing stripe */}
            <div className="h-1 racing-stripe w-full" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {/* Left - Logo & Brand */}
                    <div>
                        <a href="#home" className="flex items-center gap-3 group mb-3">
                            <div className="w-10 h-10 rounded-lg bg-rally-red flex items-center justify-center transform transition-transform group-hover:rotate-12">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <span
                                className="text-xl font-bold text-white tracking-wider"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                RALLY LIGHT PODS
                            </span>
                        </a>
                        <p className="text-gray-500 text-sm">
                            Balance Motorsport Australia
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Haywards Bay, NSW 2530
                        </p>
                    </div>

                    {/* Center - Nav Links */}
                    <div className="flex justify-center gap-6">
                        {['Home', 'Gallery', 'Products', 'Contact'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-sm text-gray-400 hover:text-rally-red transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Right - Social & Copyright */}
                    <div className="text-right">
                        <a
                            href="https://www.facebook.com/profile.php?id=100057312144154"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-rally-red transition-colors mb-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </a>
                        <p className="text-gray-600 text-xs">
                            &copy; {new Date().getFullYear()} Rally Lamp Pods. All Rights Reserved.
                        </p>
                    </div>
                </motion.div>

                {/* Checkered bottom accent */}
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-gray-700 text-xs">
                        Website designed and developed by{' '}
                        <a
                            href="https://rileytechstudio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-rally-red transition-colors"
                        >
                            Riley Tech Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
