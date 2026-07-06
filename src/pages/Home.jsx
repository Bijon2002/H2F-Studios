import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
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
            {/* Background Elements */}
            <div className="fixed inset-0 bg-surface z-[-2]"></div>
            
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <video 
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="/images/hero.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
                </div>
                
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto text-center reveal">
                    <h1 className="font-display-lg text-[64px] md:text-display-lg text-primary tracking-tighter mb-4 text-glow">
                        Capturing Jaffna's Moments, Traditionally Timeless
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                        A sophisticated blend of ancient cultural motifs and contemporary minimalist luxury.
                    </p>
                    <Link to="/studio" className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 rounded-DEFAULT hover:bg-tertiary transition-colors duration-300 inline-block">
                        Explore The Studio
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
