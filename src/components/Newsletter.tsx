'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Newsletter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="relative py-16 sm:py-24 overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-rally-red via-rally-red to-rally-orange" />
            <div className="absolute inset-0 dirt-texture opacity-20 pointer-events-none" />

            {/* Racing stripe accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-racing-black/30" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-racing-black/30" />

            {/* Checkered corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 checkered-stripe opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 checkered-stripe opacity-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        STAY IN THE RACE
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                        Sign up to hear from us about new products, specials, sales, and events. Be the first to know when we add new models to our range.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 backdrop-blur-sm transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-racing-black text-white font-bold rounded-xl hover:bg-racing-charcoal transition-all duration-300 hover:shadow-2xl active:scale-95 whitespace-nowrap"
                        >
                            {submitted ? (
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Subscribed!
                                </span>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
