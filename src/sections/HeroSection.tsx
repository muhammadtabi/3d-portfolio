import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/Buttons';

export const HeroSection = () => {
    return (
        <section className="h-screen flex flex-col pt-6 md:pt-8 w-full relative">
            <FadeIn y={-20} className="px-6 md:px-10 flex justify-between uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] font-medium z-20 relative">
                {['About', 'Price', 'Projects', 'Contact'].map((item) => (
                   <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
                       {item}
                   </a> 
                ))}
            </FadeIn>

            <div className="flex-1 flex flex-col justify-center">
                <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
                    <FadeIn delay={0.15} y={40}>
                        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                            HI, I'M TABI
                        </h1>
                    </FadeIn>
                </div>
            </div>

            <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
                <FadeIn delay={0.35} y={20}>
                    <p className="font-light uppercase tracking-wide leading-snug w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
                        a 3d creator driven by crafting striking and unforgettable projects
                    </p>
                </FadeIn>
                <FadeIn delay={0.5} y={20}>
                    <ContactButton />
                </FadeIn>
            </div>

            <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
                <Magnet>
                    <img 
                        src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
                        alt="TABI Portrait" 
                        className="w-full h-auto pointer-events-none"
                    />
                </Magnet>
            </FadeIn>
        </section>
    );
};