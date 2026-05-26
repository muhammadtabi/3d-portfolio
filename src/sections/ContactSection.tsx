import { FadeIn } from '../components/FadeIn';

export const ContactSection = () => {
    return (
        <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-10 relative z-30 flex flex-col items-center w-full">
            <div className="w-full border-t border-[rgba(215,226,234,0.15)] pt-20 sm:pt-24 md:pt-32 flex flex-col items-center">
                <FadeIn y={40} className="w-full">
                    <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none mb-6 sm:mb-10">
                        Let's Talk
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2} y={30} className="w-full flex justify-center">
                    <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed max-w-2xl text-center text-[clamp(0.85rem,1.6vw,1.25rem)] mb-12 sm:mb-16">
                        Ready to bring your next big idea to life? Reach out and let's craft something unforgettable together.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3} y={30} className="w-full flex justify-center mb-20 sm:mb-32">
                    <a href="mailto:tayyaabmuhammad7007@gmail.com" className="text-[clamp(1.5rem,4vw,3.5rem)] font-medium text-[#D7E2EA] hover:opacity-70 transition-opacity border-b-2 sm:border-b-4 border-[#D7E2EA] pb-1 sm:pb-2">
                        tayyaabmuhammad7007@gmail.com
                    </a>
                </FadeIn>

                <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-8 pt-8">
                    <div className="flex gap-4 sm:gap-8 flex-wrap justify-center sm:justify-start">
                        {[
                            { name: 'Instagram', url: '#instagram' },
                            { name: 'LinkedIn', url: 'https://linkedin.com/in/-tayyaab/' },
                            { name: 'Discord', url: 'https://discordapp.com/users/tabish_1122_41026' },
                            { name: 'GitHub', url: 'https://github.com/muhammadtabi' }
                        ].map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity">
                                {social.name}
                            </a>
                        ))}
                    </div>
                    <span className="text-[#D7E2EA] opacity-60 text-[10px] sm:text-xs font-light uppercase tracking-wider text-center sm:text-left mt-4 sm:mt-0">
                        © {new Date().getFullYear()} TABI 3D Creator. All rights reserved.
                    </span>
                </div>
            </div>
        </section>
    );
};