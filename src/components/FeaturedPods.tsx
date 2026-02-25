'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const featuredCars = [
    { image: '/media/evo.webp', name: 'Mitsubishi EVO 6', subtitle: 'Full Rally Pod Setup' },
    { image: '/media/suburu.webp', name: 'Subaru WRX', subtitle: 'Performance Light Pod' },
    { image: '/media/evo 9.webp', name: 'Mitsubishi EVO 9', subtitle: 'Service Park Ready' },
    { image: '/media/porche911.webp', name: 'Porsche 911', subtitle: 'Classic Rally Lighting' },
    { image: '/media/toyata 86.webp', name: 'Toyota 86', subtitle: 'Sport Light Pod' },
    { image: '/media/hyandi xl.webp', name: 'Hyundai i20', subtitle: 'Rally Spec Pod' },
    { image: '/media/toyotagr.webp', name: 'Toyota GR Yaris', subtitle: 'Competition Light Pod' },
];

export default function FeaturedPods() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="relative py-20 sm:py-28 bg-racing-charcoal overflow-hidden" ref={ref}>
            {/* Dirt texture overlay */}
            <div className="absolute inset-0 dirt-texture pointer-events-none" />
            <div className="absolute inset-0 mud-splatter pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-rally-red text-sm tracking-[0.3em] uppercase font-semibold mb-3 block">
                        Our Builds
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        RALLY LIGHT PODS ON{' '}
                        <span className="text-rally-red">CLIENT CARS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Check out some of the custom rally light pods we have built and fitted for our customers across Australia and around the world.
                    </p>
                </motion.div>

                {/* Featured Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCars.map((car, i) => (
                        <motion.div
                            key={car.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative rounded-2xl overflow-hidden bg-racing-dark card-glow cursor-pointer transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 sm:h-72 overflow-hidden">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-racing-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Red accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-rally-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3
                                    className="text-xl font-bold text-white group-hover:text-rally-red transition-colors"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {car.name}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">{car.subtitle}</p>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rally-red/0 group-hover:border-rally-red transition-all duration-500 rounded-tr-lg" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
