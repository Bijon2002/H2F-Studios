import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArrowForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
  </svg>
);

const portfolioItems = [
    { id: 1, category: 'Weddings', title: 'Agni & Silk', sub: 'Traditional Jaffna Ceremony', src: '/images/v3/portfolio_wedding.png' },
    { id: 2, category: 'Portraits', title: 'Wisdom of Jaffna', sub: 'Heritage Portraiture', src: '/images/v3/portfolio_portrait.png' },
    { id: 3, category: 'Commercial', title: 'Culinary Heritage', sub: 'Editorial Product', src: '/images/v3/portfolio_commercial.png' },
    { id: 4, category: 'Events', title: 'Cultural Festival', sub: 'Live Event Coverage', src: '/images/v3/portfolio_events.png' },
];

const motifs = [
    { id: 1, title: 'Kolam', desc: 'Geometric purity symbolizing prosperity at the threshold.', img: '/images/v3/roots_kolam.png' },
    { id: 2, title: 'Temple Gopuram', desc: 'Architectural reverence reaching towards the divine.', img: '/images/v3/roots_temple.png' },
    { id: 3, title: 'Palmyrah', desc: 'The tree of life, standing resilient in the northern soil.', img: '/images/v3/roots_palmyrah.png' },
    { id: 4, title: 'Textile', desc: 'Gold threads weaving the legacy of our ancestors.', img: '/images/v3/roots_textile.png' },
];

export default function Home() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showHeroText, setShowHeroText] = useState(true);
    const videoRef = useRef(null);
    const filters = ['All', 'Weddings', 'Portraits', 'Commercial', 'Events'];
    const filteredItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

    // Slow-motion video + AOS refresh
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.4;
        }
        if (window.AOS) window.AOS.refresh();
    }, [activeFilter]);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            // Original video is 10s. At 0.4x, it plays for 25s.
            // Hiding during the last 3 seconds of playback means hiding for the last 1.2s of media time (time > 8.8).
            if (videoRef.current.currentTime >= 8.8) {
                setShowHeroText(false);
            } else {
                setShowHeroText(true);
            }
        }
    };

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-background text-on-background overflow-x-hidden">
            <div className="grain-overlay"></div>
            <Navbar />

            {/* ═══════════════════════════════════════════
                HERO — Full-screen slow-motion VIDEO
                Fixed: text no longer hidden behind navbar
            ═══════════════════════════════════════════ */}
            <section id="hero" className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-start overflow-hidden">
                {/* Background video — slow-motion */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover object-top"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                    >
                        <source src="/images/hero.mp4" type="video/mp4" />
                    </video>
                    {/* Cinematic overlays — darker for text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-[#0a0503]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0503]/60 via-transparent to-transparent"></div>
                </div>

                {/* Hero content — vertically centered, left-aligned */}
                <div className={`relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop pt-24 sm:pt-28 lg:pt-32 transition-opacity duration-1000 ${showHeroText ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="max-w-3xl">
                        <span data-aos="fade-up" className="font-label-caps text-[9px] sm:text-[10px] lg:text-[11px] text-[#D4AF37] tracking-[0.25em] mb-4 sm:mb-5 block">
                            Wedding & Event Photography — Jaffna
                        </span>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="font-display-lg text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-[-0.03em] text-white mb-4 sm:mb-5">
                            Capturing Jaffna's<br/> Moments, Traditionally<br className="hidden sm:block"/> Timeless
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="font-body-lg text-[13px] sm:text-[14px] lg:text-[16px] text-white/60 max-w-lg mb-6 sm:mb-8 leading-relaxed">
                            A sophisticated blend of ancient cultural motifs and contemporary minimalist luxury.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
                            <button onClick={() => scrollTo('portfolio')} className="bg-white text-[#0a0503] font-label-caps text-[10px] sm:text-[11px] py-3 sm:py-3.5 px-6 hover:bg-[#D4AF37] hover:text-[#0a0503] transition-all duration-300 flex items-center justify-center gap-2 group">
                                View Portfolio
                                <span className="group-hover:translate-x-1 transition-transform"><ArrowForwardIcon /></span>
                            </button>
                            <a href="tel:0720172910" className="border border-white/30 text-white font-label-caps text-[10px] sm:text-[11px] py-3 sm:py-3.5 px-6 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center">
                                Call for Shoots — 0720172910
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <button onClick={() => scrollTo('heritage')} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white transition-colors animate-bounce hidden sm:block">
                    <ArrowDownIcon />
                </button>
            </section>

            {/* ═══════════════════════════════════════════
                HERITAGE — Jaffna Library
            ═══════════════════════════════════════════ */}
            <section id="heritage" className="py-16 sm:py-20 lg:py-28 xl:py-32 px-5 sm:px-8 lg:px-margin-desktop bg-surface-container-low">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter items-center">
                    <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1" data-aos="fade-right">
                        <span className="font-label-caps text-[10px] sm:text-label-caps text-[#D4AF37] tracking-[0.15em] mb-4 sm:mb-5 block">Our Inspiration</span>
                        <h2 className="font-display-sm text-[26px] sm:text-[30px] lg:text-[36px] text-primary leading-tight mb-5 sm:mb-6">
                            Rooted in <br className="hidden sm:block" /> Intellectual Heritage
                        </h2>
                        <div className="w-10 h-[2px] bg-[#D4AF37]/50 mb-6 sm:mb-8"></div>
                        <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mb-5 leading-relaxed">
                            The iconic Jaffna Public Library stands not just as an architectural marvel, but as a beacon of our rich cultural and intellectual history. Its resilience mirrors the spirit of the people we photograph.
                        </p>
                        <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
                            At H2F Studios, we draw profound inspiration from such enduring symbols of our heritage. We approach every wedding, every portrait, and every event with the same reverence for legacy—ensuring that the moments we capture today become the timeless histories of tomorrow.
                        </p>
                    </div>
                    <div className="lg:col-span-6 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="150">
                        <div className="aspect-[4/3] sm:aspect-[3/2] overflow-hidden relative group shadow-2xl">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                style={{ backgroundImage: "url('/images/v3/jaffna_library.png')" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
            </div>

            {/* ═══════════════════════════════════════════
                THE STUDIO
            ═══════════════════════════════════════════ */}
            <section id="studio" className="py-16 sm:py-20 lg:py-28 xl:py-32 px-5 sm:px-8 lg:px-margin-desktop">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-gutter items-center">
                    {/* Image */}
                    <div className="md:col-span-1 lg:col-span-6" data-aos="fade-right">
                        <div className="relative">
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-[#D4AF37]/20 hidden sm:block"></div>
                            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-surface-container">
                                <div
                                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000"
                                    style={{ backgroundImage: "url('/images/v3/tamil_girl_2.png')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    {/* Copy */}
                    <div className="md:col-span-1 lg:col-span-5 lg:col-start-8" data-aos="fade-left" data-aos-delay="150">
                        <span className="font-label-caps text-[10px] sm:text-label-caps text-[#D4AF37] tracking-[0.15em] mb-4 sm:mb-5 block">The Studio</span>
                        <h2 className="font-display-sm text-[26px] sm:text-[30px] lg:text-display-sm text-primary leading-tight mb-5 sm:mb-6">The Soul of Jaffna Photography</h2>
                        <div className="w-10 sm:w-12 h-[2px] bg-[#D4AF37]/50 mb-6 sm:mb-8"></div>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mb-4 sm:mb-5 leading-relaxed">
                            We don't just take pictures; we weave narratives. Deeply rooted in the vibrant heritage of Jaffna, our studio merges traditional reverence with modern editorial aesthetics.
                        </p>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                            Every frame is a testament to the tactile beauty of our culture — from the intricate patterns of pulli kolam to the timeless elegance of gold silk.
                        </p>

                        {/* Expertise pills */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {[
                                { num: '01', label: 'Rituals', name: 'Weddings' },
                                { num: '02', label: 'Faces', name: 'Portraits' },
                                { num: '03', label: 'Brands', name: 'Commercial' },
                                { num: '04', label: 'Moments', name: 'Events' },
                            ].map((item, i) => (
                                <div key={i} data-aos="zoom-in" data-aos-delay={i * 80} className="border border-outline-variant/30 p-3 sm:p-4 hover:border-primary/50 transition-colors">
                                    <span className="font-label-caps text-[9px] sm:text-[10px] text-[#D4AF37] tracking-[0.15em] block mb-1">{item.num} / {item.label}</span>
                                    <span className="font-title-md text-[15px] sm:text-title-md text-on-surface">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 text-primary font-title-md text-[16px] sm:text-title-md hover:text-tertiary transition-colors group">
                            Book a session
                            <span className="group-hover:translate-x-1 transition-transform"><ArrowForwardIcon /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
            </div>

            {/* ═══════════════════════════════════════════
                PORTFOLIO
            ═══════════════════════════════════════════ */}
            <section id="portfolio" className="py-16 sm:py-20 lg:py-28 xl:py-32 px-5 sm:px-8 lg:px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14" data-aos="fade-up">
                        <div>
                            <span className="font-label-caps text-[10px] sm:text-label-caps text-[#D4AF37] tracking-[0.15em] mb-3 sm:mb-4 block">Portfolio</span>
                            <h2 className="font-display-sm text-[26px] sm:text-[30px] lg:text-display-sm text-primary leading-tight mb-2 sm:mb-3">Stories We've Told</h2>
                            <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant max-w-md">A curated collection of recent commissions.</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 sm:overflow-visible">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`font-label-caps text-[10px] sm:text-label-caps px-3 sm:px-4 py-2 border whitespace-nowrap transition-all duration-300 ${
                                        activeFilter === f
                                        ? 'border-primary bg-primary text-on-primary'
                                        : 'border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {filteredItems.map((item, i) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                className={`group relative overflow-hidden bg-surface-container ${
                                    i === 0 && filteredItems.length > 1 ? 'sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:h-full' : 'aspect-[4/3]'
                                }`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url('${item.src}')` }}
                                ></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 z-10">
                                    <span className="font-label-caps text-[9px] sm:text-[10px] text-[#D4AF37] tracking-[0.15em] block mb-1.5 sm:mb-2">{item.category}</span>
                                    <h3 className="font-display-sm text-[20px] sm:text-[24px] lg:text-[28px] text-white leading-tight">{item.title}</h3>
                                    <p className="font-body-md text-[12px] sm:text-[14px] text-white/60 mt-1">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
            </div>

            {/* ═══════════════════════════════════════════
                CULTURAL ROOTS
            ═══════════════════════════════════════════ */}
            <section id="roots" className="py-16 sm:py-20 lg:py-28 xl:py-32 px-5 sm:px-8 lg:px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-10 sm:mb-14 lg:mb-16" data-aos="fade-up">
                        <span className="font-label-caps text-[10px] sm:text-label-caps text-[#D4AF37] tracking-[0.15em] mb-3 sm:mb-4 block">Identity</span>
                        <h2 className="font-display-sm text-[26px] sm:text-[30px] lg:text-display-sm text-primary leading-tight mb-4 sm:mb-5">Cultural Roots</h2>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant max-w-xl mx-auto">
                            Our aesthetic is drawn from the very fabric of Jaffna. These motifs define our visual language.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {motifs.map((motif, i) => (
                            <div key={motif.id} data-aos="fade-up" data-aos-delay={i * 100} className="group text-center">
                                <div className="aspect-square overflow-hidden mb-3 sm:mb-5 relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                                        style={{ backgroundImage: `url('${motif.img}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <h3 className="font-title-md text-[14px] sm:text-title-md text-primary mb-1.5 sm:mb-2">{motif.title}</h3>
                                <p className="font-body-md text-[12px] sm:text-[14px] text-on-surface-variant leading-relaxed">{motif.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
            </div>

            {/* ═══════════════════════════════════════════
                CONTACT
            ═══════════════════════════════════════════ */}
            <section id="contact" className="py-16 sm:py-20 lg:py-28 xl:py-32 px-5 sm:px-8 lg:px-margin-desktop">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter">
                    {/* Left */}
                    <div className="lg:col-span-5" data-aos="fade-right">
                        <span className="font-label-caps text-[10px] sm:text-label-caps text-[#D4AF37] tracking-[0.15em] mb-4 sm:mb-5 block">Contact</span>
                        <h2 className="font-display-sm text-[26px] sm:text-[30px] lg:text-display-sm text-primary leading-tight mb-4 sm:mb-5">Let's Tell Your Story</h2>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mb-8 sm:mb-10 max-w-md leading-relaxed">
                            Reach out for bookings, collaborations, or a conversation about your next shoot.
                        </p>

                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 border border-outline-variant/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-75.5-184.5T480-812q-89 0-164.5 75.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] mb-1">Studio</h3>
                                    <p className="font-body-md text-[14px] sm:text-body-md text-on-background">Jaffna, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 border border-outline-variant/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] mb-1">Call for shoots</h3>
                                    <a href="tel:0720172910" className="font-body-md text-[14px] sm:text-body-md text-primary font-bold hover:text-tertiary transition-colors">0720172910</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 border border-outline-variant/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] mb-1">Email</h3>
                                    <p className="font-body-md text-[14px] sm:text-body-md text-on-background">hello@h2fstudios.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-outline-variant/20">
                            <span className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-3">Follow</span>
                            <div className="flex gap-4 sm:gap-5">
                                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-[14px] sm:text-body-md" href="#">Instagram</a>
                                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-[14px] sm:text-body-md" href="#">Facebook</a>
                                <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-[14px] sm:text-body-md" href="#">WhatsApp</a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="lg:col-span-6 lg:col-start-7" data-aos="fade-left" data-aos-delay="150">
                        <div className="bg-surface-container-low p-6 sm:p-8 lg:p-12 border border-outline-variant/30 relative">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40"></div>
                            <h3 className="font-title-md text-[16px] sm:text-title-md text-primary mb-6 sm:mb-8">Booking Inquiry</h3>
                            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-5 sm:space-y-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
                                    <div>
                                        <label className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-2" htmlFor="name">Name</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-[14px] sm:text-body-md text-on-background transition-colors" id="name" name="name" required type="text"/>
                                    </div>
                                    <div>
                                        <label className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-2" htmlFor="contact">Email / Phone</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-[14px] sm:text-body-md text-on-background transition-colors" id="contact" name="contact" required type="text"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
                                    <div>
                                        <label className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-2" htmlFor="event-type">Event Type</label>
                                        <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-[14px] sm:text-body-md text-on-background transition-colors appearance-none" id="event-type" name="event-type" defaultValue="">
                                            <option disabled value="">Select a category</option>
                                            <option value="wedding">Traditional Wedding</option>
                                            <option value="portrait">Heritage Portraiture</option>
                                            <option value="editorial">Editorial / Commercial</option>
                                            <option value="event">Event</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-2" htmlFor="date">Date</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-[14px] sm:text-body-md text-on-background transition-colors" id="date" name="date" type="date"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant tracking-[0.1em] block mb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-[14px] sm:text-body-md text-on-background transition-colors resize-none" id="message" name="message" placeholder="Tell us about the significance of this moment..." required rows="4"></textarea>
                                </div>
                                <button className="bg-primary text-on-primary font-label-caps text-[11px] sm:text-label-caps py-3.5 sm:py-4 px-6 sm:px-8 w-full hover:bg-tertiary transition-colors duration-300 flex justify-center items-center gap-2 group" type="submit">
                                    Inquire
                                    <span className="group-hover:translate-x-1 transition-transform"><ArrowForwardIcon /></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
