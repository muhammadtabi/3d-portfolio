import { useEffect, useRef, useState } from 'react';

const row1Images = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const MarqueeSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const scrollY = window.scrollY;
            const sectionTop = sectionRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            
            // Calculate offset based on rules
            const scrollOffset = (scrollY - sectionTop + windowHeight) * 0.3;
            setOffset(scrollOffset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Triple arrays correctly for seamless
    const tripleRow1 = [...row1Images, ...row1Images, ...row1Images];
    const tripleRow2 = [...row2Images, ...row2Images, ...row2Images];

    return (
        <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
            {/* Row 1 moves right */}
            <div 
                className="flex gap-3" 
                style={{ 
                    transform: `translateX(${offset - 200}px)`,
                    willChange: 'transform' 
                }}
            >
                {tripleRow1.map((src, idx) => (
                    <img key={idx} src={src} loading="lazy" alt="" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
                ))}
            </div>
            
            {/* Row 2 moves left */}
            <div 
                className="flex gap-3"
                style={{ 
                    transform: `translateX(${-(offset - 200)}px)`,
                    willChange: 'transform' 
                }}
            >
                {tripleRow2.map((src, idx) => (
                    <img key={idx} src={src} loading="lazy" alt="" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
                ))}
            </div>
        </section>
    )
};