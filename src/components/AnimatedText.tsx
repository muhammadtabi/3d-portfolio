import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.8', 'end 0.2']
    });

    return (
        <p ref={container} className={`flex flex-wrap ${className}`}>
            {text.split('').map((char, i) => {
                const total = text.length;
                const progressRange = [i / total, (i + 1) / total];
                // Map local scroll progress for this character
                const opacity = useTransform(scrollYProgress, progressRange, [0.2, 1]);
                return (
                    <span key={i} className="relative">
                        <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
                        <motion.span style={{ opacity }} className="absolute left-0">
                           {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    </span>
                )
            })}
        </p>
    )
}