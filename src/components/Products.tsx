'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const products = [
    {
        image: '/media/highpowerledglobes.webp',
        title: 'High Power LED Globes',
        subtitle: 'T90 Plus LED Globe Kit',
        description:
            'Presenting the T90 Plus LED Globe Kit. Exclusively imported and rigorously tested for Balance Motorsport Australia, this advanced LED headlamp bulb upgrade kit is not to be compared with standard retail LED bulbs available on the market. This kit significantly enhances light output from your existing headlights. These LED bulbs deliver a powerful, focused beam that transforms your nighttime visibility on both road and rally stages.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
    {
        image: '/media/contantlyaddingtoourrange.webp',
        title: 'Constantly Adding to Our Range',
        subtitle: 'New Models Available',
        description:
            'We are constantly adding new models and products to our collection so feel free to drop us a line and we may be able to help you. Our latest model is the Toyota Celica ST185 GT4 and joins our ST165 and Yaris GR range. Our lamp pods are specifically designed to take Wesem rally lamps, but they can be easily modified to accept other rally lamp brands too. If you have a specific car and lamp combination, just get in touch and we will work something out for you.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        ),
    },
    {
        image: '/media/fibreglasspods.webp',
        title: 'Fibreglass Pods',
        subtitle: 'Wide Range of Makes & Models',
        description:
            'Rally light Pods are available for a wide variety of makes and models, including Subaru, Mitsubishi EVO, Datsun 1600, Holden Commodore, Ford Fiesta R2, Nissans, Early Minis, Toyota 86, GR Yaris, Celica 185 and 165 models, Hyundai i20, and Porsche 911. We can make you a pod and even fit the lamps including a wiring loom too. We understand that not every car is the same, so each pod is hand crafted to ensure a perfect fit and finish.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
        ),
    },
];

export default function Products() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="products" className="relative py-20 sm:py-28 bg-racing-dark overflow-hidden" ref={ref}>
            {/* Background textures */}
            <div className="absolute inset-0 dirt-texture pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rally-red/3 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-rally-red text-sm tracking-[0.3em] uppercase font-semibold mb-3 block">
                        Products
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        BOOST YOUR <span className="text-rally-red">NIGHTTIME</span> PERFORMANCE
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From high power LED globe kits to custom fibreglass pods, we have everything you need to light up the night.
                    </p>
                </motion.div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group relative bg-racing-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-rally-red/30 card-glow transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-racing-charcoal via-racing-charcoal/30 to-transparent" />

                                {/* Icon badge */}
                                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-rally-red/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-rally-red/20">
                                    {product.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3
                                    className="text-2xl font-bold text-white mb-1 group-hover:text-rally-red transition-colors"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {product.title}
                                </h3>
                                <p className="text-rally-red text-sm font-medium mb-3">{product.subtitle}</p>
                                <p className={`text-gray-400 text-sm leading-relaxed ${expandedIndex === i ? '' : 'line-clamp-3'}`}>
                                    {product.description}
                                </p>
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                    className="mt-3 text-rally-red text-sm font-semibold hover:text-rally-orange transition-colors flex items-center gap-1 group/btn"
                                >
                                    {expandedIndex === i ? 'Show Less' : 'Read More'}
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Bottom red accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-rally-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
