'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    { src: '/media/evo.webp', alt: 'Mitsubishi EVO 6 Full Rally Pod', label: 'EVO 6' },
    { src: '/media/suburu.webp', alt: 'Subaru WRX Rally Light Pod', label: 'Subaru WRX' },
    { src: '/media/evo 9.webp', alt: 'Mitsubishi EVO 9 in Service Park', label: 'EVO 9' },
    { src: '/media/porche911.webp', alt: 'Porsche 911 Rally Lamp Pod', label: 'Porsche 911' },
    { src: '/media/toyata 86.webp', alt: 'Toyota 86 with Rally Light Pod', label: 'Toyota 86' },
    { src: '/media/toyotagr.webp', alt: 'Toyota GR Yaris Rally Light Pod', label: 'GR Yaris' },
    { src: '/media/hyandi xl.webp', alt: 'Hyundai i20 Rally Pod', label: 'Hyundai i20' },
    { src: '/media/forest road litup.webp', alt: 'Rally car lighting up forest road at night', label: 'Night Stage' },
    { src: '/media/fibreglasspods.webp', alt: 'Fibreglass rally light pods collection', label: 'Pod Range' },
    { src: '/media/highpowerledglobes.webp', alt: 'High Power LED Globe Kit', label: 'LED Globes' },
    { src: '/media/contantlyaddingtoourrange.webp', alt: 'Toyota Celica rally model', label: 'Celica GT4' },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (i: number) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
    const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

    return (
        <section id="gallery" className="relative py-20 sm:py-28 bg-racing-black overflow-hidden" ref={ref}>
            {/* Background accents */}
            <div className="absolute inset-0 mud-splatter pointer-events-none" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-rally-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rally-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-rally-red text-sm tracking-[0.3em] uppercase font-semibold mb-3 block">
                        Gallery
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        THE <span className="text-rally-red">FULL</span> COLLECTION
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Browse through our complete collection of rally light pods, LED upgrades, and custom installations. Click any image for a closer look.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer card-glow"
                            onClick={() => openLightbox(i)}
                        >
                            <div className={`relative ${i % 3 === 0 ? 'h-80' : i % 3 === 1 ? 'h-64' : 'h-72'} w-full`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-racing-black/80 via-racing-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span
                                        className="text-white text-lg font-bold"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        {img.label}
                                    </span>
                                </div>

                                {/* Zoom icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-rally-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>

                                {/* Red accent bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-rally-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-rally-red transition-colors flex items-center justify-center z-10"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-rally-red transition-colors flex items-center justify-center z-10"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-rally-red transition-colors flex items-center justify-center z-10"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={galleryImages[lightboxIndex].src}
                                alt={galleryImages[lightboxIndex].alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-racing-black/80 px-6 py-2 rounded-full">
                                <span className="text-white font-medium">{galleryImages[lightboxIndex].label}</span>
                                <span className="text-gray-400 ml-3 text-sm">{lightboxIndex + 1} / {galleryImages.length}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
