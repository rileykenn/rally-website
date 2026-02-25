'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CheckeredDivider() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="relative py-2">
            {/* Racing stripe accent line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-1 bg-rally-red origin-left"
            />

            {/* Checkered Pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="checkered-stripe h-10 sm:h-14"
            />

            {/* Bottom racing stripe */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="h-1 bg-rally-red origin-right"
            />
        </div>
    );
}
