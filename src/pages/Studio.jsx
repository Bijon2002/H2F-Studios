import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArrowForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
  </svg>
);

export default function Studio() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
        revealElements.forEach(el => revealObserver.observe(el));
    }, []);

    return (
        <>
            <div className="grain-overlay"></div>
            <Navbar />

            <main className="pt-[100px] md:pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop kolam-grid min-h-screen">
                <div className="max-w-container-max mx-auto grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
                    <div className="col-span-4 md:col-span-5 md:col-start-2 reveal relative z-10 order-2 md:order-1 mt-12 md:mt-0">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block">The Studio</span>
                        <h2 className="font-display-sm text-display-sm text-primary mb-6 hidden md:block">The Soul of Jaffna Photography</h2>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-6 md:hidden">The Soul of Jaffna Photography</h2>
                        <div className="w-12 border-t-2 border-[#D4AF37] mb-8"></div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            We don't just take pictures; we weave narratives. Deeply rooted in the vibrant heritage of Jaffna, our studio merges traditional reverence with modern editorial aesthetics.
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                            Every frame is a testament to the tactile beauty of our culture — from the intricate patterns of pulli kolam to the timeless elegance of gold silk.
                        </p>
                        <Link className="inline-flex items-center gap-2 text-primary font-title-md text-title-md hover:text-primary-container transition-colors group" to="/portfolio">
                            Discover our story
                            <span className="transform group-hover:translate-x-1 transition-transform">
                                <ArrowForwardIcon />
                            </span>
                        </Link>
                    </div>
                    <div className="col-span-4 md:col-span-5 md:col-start-8 reveal order-1 md:order-2 h-[500px] md:h-[700px] relative w-full">
                        <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-4 translate-y-4"></div>
                        <div className="w-full h-full overflow-hidden bg-surface-container relative">
                            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/v3/studio_hero.png')" }}></div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
