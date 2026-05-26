import { FadeIn } from '../components/FadeIn';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const pricingPlans = [
    {
        name: 'Standard',
        price: '$1.5K',
        period: 'Starting at',
        description: 'Perfect for single 3D assets or simple motion graphics tailored for social media and basic branding.',
        features: ['1 Custom 3D Model', 'High-Res Rendering', 'Basic Motion Design', '2 Revisions', 'Delivery in 1 Week'],
    },
    {
        name: 'Premium',
        price: '$4K+',
        period: 'Starting at',
        description: 'Comprehensive 3D branding, complex environments, or advanced animations for entire campaigns.',
        features: ['Multiple 3D Assets', 'Advanced Motion', 'Full Brand Identity', 'Priority Support', 'Unlimited Revisions'],
        isPopular: true
    }
];

const PremiumShape = () => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                <mesh scale={1.8}>
                    <icosahedronGeometry args={[9, 1]} />
                    <meshPhysicalMaterial 
                        color="#BBCCD7"
                        metalness={1}
                        roughness={0.1}
                        wireframe={true}
                        transparent
                        opacity={0.15}
                    />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                <mesh scale={1.2}>
                    <torusKnotGeometry args={[6, 1.5, 256, 32]} />
                    <meshPhysicalMaterial 
                        color="#D7E2EA"
                        metalness={0.8}
                        roughness={0.2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            </Float>
        </group>
    );
};

export const PricingSection = () => {
    return (
        <section id="price" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 z-20 relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden">
            
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#B600A8" />
                    <PremiumShape />
                    <Environment preset="city" />
                </Canvas>
                {/* Falloff Gradients to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-transparent to-[#0C0C0C]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-transparent to-[#0C0C0C]"></div>
            </div>

            <div className="relative z-10">
                <FadeIn y={40}>
                    <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] pb-12 sm:pb-16 md:pb-20 leading-none">
                        Plans
                    </h2>
                </FadeIn>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {pricingPlans.map((plan, i) => (
                        <FadeIn key={i} delay={i * 0.2}>
                            <div className={`relative flex flex-col h-full rounded-[40px] sm:rounded-[50px] p-8 sm:p-10 md:p-12 transition-all duration-500 overflow-hidden group
                                ${plan.isPopular 
                                    ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl' 
                                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {/* Premium Tag Highlight */}
                                {plan.isPopular && (
                                    <div className="absolute top-0 right-8 bg-[#D7E2EA] text-[#0C0C0C] px-4 py-1.5 rounded-b-xl text-xs font-bold uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-[#D7E2EA] text-[clamp(1.5rem,3vw,2.5rem)] font-medium uppercase leading-tight mb-3">
                                    {plan.name}
                                </h3>
                                <p className="text-[#D7E2EA] opacity-70 flex-1 font-light text-sm sm:text-base md:text-lg mb-8">
                                    {plan.description}
                                </p>
                                
                                <div className="mb-10 sm:mb-12">
                                    <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest opacity-60 block mb-1">
                                        {plan.period}
                                    </span>
                                    <span className="text-white font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none block">
                                        {plan.price}
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-4 mb-10 sm:mb-14">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-sm sm:text-base text-[#D7E2EA] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                            <div className={`w-2 h-2 shrink-0 rounded-full ${plan.isPopular ? 'bg-white' : 'bg-white/50'}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`mt-auto w-full py-4 sm:py-5 rounded-full font-medium uppercase tracking-widest text-sm sm:text-base transition-all duration-300
                                    ${plan.isPopular 
                                        ? 'bg-[#D7E2EA] text-[#0C0C0C] hover:scale-[1.02]' 
                                        : 'border-2 border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40'
                                    }`}
                                >
                                    Choose {plan.name}
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};