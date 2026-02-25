'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function DirtParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            color: string;
        }> = [];

        const colors = ['#C49A6C', '#8B6914', '#5C4033', '#D4A574', '#A0855B'];

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: -Math.random() * 0.5 - 0.1,
                opacity: Math.random() * 0.5 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        let animationId: number;
        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;

                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < -10 || p.x > canvas.width + 10) {
                    p.x = Math.random() * canvas.width;
                }
            });

            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10 pointer-events-none"
        />
    );
}

export default function Hero() {
    const [burstActive, setBurstActive] = useState(false);

    const handleCTAClick = () => {
        setBurstActive(true);
        setTimeout(() => setBurstActive(false), 600);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/media/forest road litup.webp"
                    alt="Rally car lighting up a forest road at night"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-racing-black/70 via-racing-black/50 to-racing-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-racing-black/70 via-transparent to-racing-black/40" />
            </div>

            {/* Dirt Particles */}
            <DirtParticles />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-rally-red text-sm sm:text-base tracking-[0.3em] uppercase font-semibold mb-4"
                    >
                        Balance Motorsport Australia
                    </motion.p>

                    {/* Main Headline */}
                    <h1
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="block"
                        >
                            RALLY LIGHT
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="block text-rally-red"
                        >
                            PODS AUSTRALIA
                        </motion.span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        Discover the extra lighting potential with our hand crafted, competition grade rally light pods.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#gallery"
                            onClick={handleCTAClick}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-rally-red text-white font-bold text-lg rounded-xl hover:bg-rally-red-glow transition-all duration-300 hover:shadow-2xl hover:shadow-rally-red/30 active:scale-95 group"
                        >
                            View Our Work
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-xl hover:border-rally-red hover:text-rally-red transition-all hover:shadow-xl active:scale-95"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Dirt burst effect */}
                {burstActive && (
                    <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <span
                                key={i}
                                className="absolute w-3 h-3 rounded-full bg-dirt-tan"
                                style={{
                                    animation: 'dirt-spray 0.6s ease-out forwards',
                                    animationDelay: `${i * 0.03}s`,
                                    transform: `rotate(${i * 30}deg) translateX(0)`,
                                    left: '50%',
                                    top: '50%',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll</span>
                    <svg className="w-5 h-5 text-rally-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
