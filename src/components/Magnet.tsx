import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagnetProps {
    children: ReactNode;
    padding?: number;
    strength?: number;
    className?: string;
}

export const Magnet = ({
    children,
    padding = 150,
    strength = 3,
    className = "",
}: MagnetProps) => {
    const [isActive, setIsActive] = useState(false);
    const magnetRef = useRef<HTMLDivElement>(null);

    const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetRef.current) return;
            
            const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
            
            // Calculate distance from center
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const distX = e.clientX - centerX;
            const distY = e.clientY - centerY;
            
            // Check if cursor is within padding area
            if (
                e.clientX >= left - padding &&
                e.clientX <= left + width + padding &&
                e.clientY >= top - padding &&
                e.clientY <= top + height + padding
            ) {
                setIsActive(true);
                x.set(distX / strength);
                y.set(distY / strength);
            } else {
                setIsActive(false);
                x.set(0);
                y.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [padding, strength, x, y]);

    return (
        <motion.div
            ref={magnetRef}
            className={`inline-block ${className}`}
            style={{
                x,
                y,
                willChange: 'transform'
            }}
        >
            <motion.div
                animate={isActive ? { y: 0 } : { y: [-15, 15, -15] }}
                transition={isActive ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};