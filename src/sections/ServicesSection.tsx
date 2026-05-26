import { FadeIn } from '../components/FadeIn';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const servicesOptions = [
    {
        num: '01',
        title: '3D Modeling',
        desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.'
    },
    {
        num: '02',
        title: 'Rendering',
        desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.'
    },
    {
        num: '03',
        title: 'Motion Design',
        desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.'
    },
    {
        num: '04',
        title: 'Branding',
        desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.'
    },
    {
        num: '05',
        title: 'Web Design',
        desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.'
    }
];

export const ServicesSection = () => {
    return (
        <section id="services" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 overflow-hidden">
            
            {/* Animated Stars Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0C]/50 to-[#0C0C0C] pointer-events-none"></div>
            </div>

            <div className="relative z-10">
                <FadeIn y={40}>
                    <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
                        Services
                    </h2>
                </FadeIn>

                <div className="max-w-5xl mx-auto flex flex-col relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D7E2EA]/20 to-transparent hidden sm:block"></div>
                    
                    {servicesOptions.map((service, i) => (
                        <FadeIn key={i} delay={i * 0.15}>
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-b border-[rgba(215,226,234,0.15)] py-8 sm:py-10 md:py-12 items-start sm:items-center group hover:bg-white/[0.02] transition-colors duration-500 rounded-2xl sm:rounded-none px-4 sm:px-0">
                                <span className="hero-heading font-black leading-none text-[clamp(4rem,10vw,140px)] w-full sm:w-[35%] md:w-[30%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-left">
                                    {service.num}
                                </span>
                                <div className="flex flex-col gap-2 w-full sm:w-[65%] md:w-[70%]">
                                    <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight text-[clamp(1.25rem,2.2vw,2.1rem)] group-hover:text-white transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#D7E2EA] opacity-60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] group-hover:opacity-80 transition-opacity duration-500">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};