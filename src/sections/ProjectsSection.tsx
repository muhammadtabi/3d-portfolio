import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LiveProjectButton } from '../components/Buttons';

const projects = [
    {
        num: '01',
        client: 'Client',
        name: 'Nextlevel Studio',
        images: {
            col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
            col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
            col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
        }
    },
    {
        num: '02',
        client: 'Personal',
        name: 'Aura Brand Identity',
        images: {
            col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
            col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
            col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
        }
    },
    {
        num: '03',
        client: 'Client',
        name: 'Solaris Digital',
        images: {
            col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
            col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
            col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
        }
    },
    {
        num: '04',
        client: 'Personal',
        name: 'Zenith Interactive',
        images: {
            col1_img1: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
            col1_img2: 'https://images.unsplash.com/photo-1633511090164-b4412f111f18?q=80&w=2564&auto=format&fit=crop',
            col2_img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop'
        }
    },
    {
        num: '05',
        client: 'Client',
        name: 'Lumina Experiences',
        images: {
            col1_img1: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2564&auto=format&fit=crop',
            col1_img2: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2564&auto=format&fit=crop',
            col2_img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2564&auto=format&fit=crop'
        }
    }
];

const Card = ({ project, i, progress, range, targetScale }: any) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    
    return (
        <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full pt-4 md:pt-10">
            <motion.div 
                style={{ 
                    scale, 
                    top: `calc(10% + ${i * 28}px)`
                }} 
                className="relative flex flex-col gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto origin-top"
            >
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
                    <div className="flex gap-4 sm:gap-6 md:gap-10 items-end">
                        <span className="text-white font-black leading-none text-[clamp(2.5rem,8vw,140px)]">
                            {project.num}
                        </span>
                        <div className="flex flex-col gap-1 pb-1 sm:pb-2 md:pb-4">
                            <span className="text-[#D7E2EA] opacity-60 uppercase text-sm font-medium tracking-widest">{project.client}</span>
                            <h3 className="text-white text-[clamp(1.2rem,3vw,3rem)] font-medium leading-none uppercase">{project.name}</h3>
                        </div>
                    </div>
                    <div className="pb-1 sm:pb-2 md:pb-4 self-start md:self-end">
                        <LiveProjectButton />
                    </div>
                </div>

                {/* Bottom Row Images */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-full w-full flex-1">
                    {/* Left Column (40%) */}
                    <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-[40%]">
                        <img 
                            src={project.images.col1_img1} 
                            alt="" 
                            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                            style={{ height: 'clamp(130px, 16vw, 230px)' }}
                        />
                        <img 
                            src={project.images.col1_img2} 
                            alt="" 
                            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
                            style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
                        />
                    </div>
                    
                    {/* Right Column (60%) */}
                    <div className="w-full sm:w-[60%] h-full min-h-[300px] sm:min-h-0">
                        <img 
                            src={project.images.col2_img} 
                            alt="" 
                            className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                        />
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export const ProjectsSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 sm:pt-24 md:pt-32 pb-32 w-full">
            <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] pb-10">
                Project
            </h2>

            <div ref={container} className="px-4 sm:px-8 md:px-10 relative">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - 1 - i) * 0.03);
                    return (
                        <Card 
                            key={i} 
                            i={i} 
                            project={project} 
                            progress={scrollYProgress} 
                            range={[i * 0.25, 1]} 
                            targetScale={targetScale}
                        />
                    )
                })}
            </div>
        </section>
    );
};