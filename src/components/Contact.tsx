'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    const hours = [
        { day: 'Monday', time: '9:00 AM \u2013 6:00 PM' },
        { day: 'Tuesday', time: '9:00 AM \u2013 6:00 PM' },
        { day: 'Wednesday', time: '9:00 AM \u2013 6:00 PM' },
        { day: 'Thursday', time: '9:00 AM \u2013 6:00 PM' },
        { day: 'Friday', time: '9:00 AM \u2013 6:00 PM' },
        { day: 'Saturday', time: 'By Appointment' },
        { day: 'Sunday', time: 'By Appointment' },
    ];

    return (
        <section id="contact" className="relative py-20 sm:py-28 bg-racing-charcoal overflow-hidden" ref={ref}>
            {/* Background effects */}
            <div className="absolute inset-0 mud-splatter pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-rally-red/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-rally-red text-sm tracking-[0.3em] uppercase font-semibold mb-3 block">
                        Get in Touch
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CONTACT <span className="text-rally-red">US</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We love to chat to our customers, so feel free to drop us a line. Please leave your name and email so we can reply to your questions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Name <span className="text-rally-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-5 py-4 bg-racing-dark border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rally-red/50 focus:border-rally-red/30 transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email <span className="text-rally-red">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-5 py-4 bg-racing-dark border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rally-red/50 focus:border-rally-red/30 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message <span className="text-rally-red">*</span>
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-5 py-4 bg-racing-dark border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rally-red/50 focus:border-rally-red/30 transition-all resize-none"
                                    placeholder="Tell us about your car and what pods you need..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-rally w-full py-4 bg-rally-red text-white font-bold text-lg rounded-xl hover:bg-rally-red-glow transition-all hover:shadow-2xl hover:shadow-rally-red/25 active:scale-[0.98]"
                            >
                                {sent ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent!
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="space-y-8"
                    >
                        {/* Business Info */}
                        <div className="bg-racing-dark rounded-2xl p-6 border border-white/5">
                            <h3
                                className="text-2xl font-bold text-white mb-4"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                Balance Motorsport Australia
                            </h3>
                            <p className="text-rally-red font-medium mb-6">&quot;Rally Light Pods Australia&quot;</p>

                            <div className="space-y-4">
                                {/* Phone */}
                                <a
                                    href="tel:0242566789"
                                    className="flex items-center gap-4 text-gray-300 hover:text-rally-red transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-rally-red/10 flex items-center justify-center group-hover:bg-rally-red/20 transition-colors">
                                        <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Telephone</p>
                                        <p className="font-medium">02 4256 6789</p>
                                    </div>
                                </a>

                                {/* Mobile */}
                                <a
                                    href="tel:0430317594"
                                    className="flex items-center gap-4 text-gray-300 hover:text-rally-red transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-rally-red/10 flex items-center justify-center group-hover:bg-rally-red/20 transition-colors">
                                        <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Mobile</p>
                                        <p className="font-medium">0430 317 594</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:balancemotorsportaustralia@bigpond.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-rally-red transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-rally-red/10 flex items-center justify-center group-hover:bg-rally-red/20 transition-colors">
                                        <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium text-sm">balancemotorsportaustralia@bigpond.com</p>
                                    </div>
                                </a>

                                {/* Address */}
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 rounded-lg bg-rally-red/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Address</p>
                                        <p className="font-medium">Haywards Bay Drive, Haywards Bay, NSW 2530</p>
                                    </div>
                                </div>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/profile.php?id=100057312144154"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-300 hover:text-rally-red transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-rally-red/10 flex items-center justify-center group-hover:bg-rally-red/20 transition-colors">
                                        <svg className="w-5 h-5 text-rally-red" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Facebook</p>
                                        <p className="font-medium">Follow us on Facebook</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-racing-dark rounded-2xl p-6 border border-white/5">
                            <h3
                                className="text-xl font-bold text-white mb-4 flex items-center gap-2"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Opening Hours
                            </h3>
                            <div className="space-y-2">
                                {hours.map((h) => (
                                    <div key={h.day} className="flex justify-between text-sm">
                                        <span className="text-gray-400">{h.day}</span>
                                        <span className={`font-medium ${h.time === 'By Appointment' ? 'text-rally-red' : 'text-white'}`}>
                                            {h.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
