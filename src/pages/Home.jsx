import React, { useState, useEffect, useRef, useCallback } from 'react';
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

/* ─── Data ─── */
const portfolioItems = [
    { id: 1, category: 'Weddings', title: 'Agni & Silk', sub: 'Traditional Jaffna Ceremony', src: '/images/v3/portfolio_wedding.png', gallery: [
        '/images/v3/portfolio_wedding.png',
        '/images/v3/tamil_cinematic_1.png',
        '/images/v3/tamil_cinematic_2.png',
        '/images/v3/tamil_girl_1.png',
        '/images/v3/tamil_girl_2.png'
    ] },
    { id: 2, category: 'Portraits', title: 'Wisdom of Jaffna', sub: 'Heritage Portraiture', src: '/images/v3/portfolio_portrait.png', gallery: [
        '/images/v3/portfolio_portrait.png',
        '/images/v3/tamil_cinematic_3.png',
        '/images/v3/tamil_girl_4.png',
        '/images/v3/tamil_girl_5.png',
        '/images/v3/tamil_girl_6.png'
    ] },
    { id: 3, category: 'Commercial', title: 'Culinary Heritage', sub: 'Editorial Product', src: '/images/v3/portfolio_commercial.png', gallery: [
        '/images/v3/portfolio_commercial.png',
        '/images/v3/tamil_cinematic_4.png',
        '/images/v3/roots_kolam.png',
        '/images/v3/roots_textile.png',
        '/images/v3/roots_palmyrah.png'
    ] },
    { id: 4, category: 'Events', title: 'Cultural Festival', sub: 'Live Event Coverage', src: '/images/v3/portfolio_events.png', gallery: [
        '/images/v3/portfolio_events.png',
        '/images/v3/tamil_cinematic_5.png',
        '/images/v3/roots_temple.png',
        '/images/v3/roots_kolam.png',
        '/images/v3/roots_palmyrah.png'
    ] },
    { id: 5, category: 'Weddings', title: 'Sacred Bonds', sub: 'Temple Wedding Ceremony', src: '/images/v3/tamil_girl_1.png', gallery: [
        '/images/v3/tamil_girl_1.png',
        '/images/v3/tamil_cinematic_2.png',
        '/images/v3/tamil_cinematic_1.png',
        '/images/v3/portfolio_wedding.png',
        '/images/v3/roots_temple.png'
    ] },
    { id: 6, category: 'Portraits', title: 'Golden Hour', sub: 'Natural Light Portrait', src: '/images/v3/tamil_girl_4.png', gallery: [
        '/images/v3/tamil_girl_4.png',
        '/images/v3/tamil_girl_7.png',
        '/images/v3/tamil_cinematic_3.png',
        '/images/v3/portfolio_portrait.png',
        '/images/v3/tamil_girl_3.png'
    ] },
    { id: 7, category: 'Commercial', title: 'Spice Route', sub: 'Brand Storytelling', src: '/images/v3/roots_textile.png', gallery: [
        '/images/v3/roots_textile.png',
        '/images/v3/tamil_cinematic_4.png',
        '/images/v3/roots_kolam.png',
        '/images/v3/portfolio_commercial.png',
        '/images/v3/roots_palmyrah.png'
    ] },
    { id: 8, category: 'Events', title: 'Temple Bells', sub: 'Religious Ceremony', src: '/images/v3/roots_temple.png', gallery: [
        '/images/v3/roots_temple.png',
        '/images/v3/tamil_cinematic_5.png',
        '/images/v3/portfolio_events.png',
        '/images/v3/roots_kolam.png',
        '/images/v3/tamil_girl_2.png'
    ] },
];

const motifs = [
    { id: 1, title: 'Kolam', desc: 'Geometric purity symbolizing prosperity at the threshold.', img: '/images/v3/roots_kolam.png' },
    { id: 2, title: 'Temple Gopuram', desc: 'Architectural reverence reaching towards the divine.', img: '/images/v3/roots_temple.png' },
    { id: 3, title: 'Palmyrah', desc: 'The tree of life, standing resilient in the northern soil.', img: '/images/v3/roots_palmyrah.png' },
    { id: 4, title: 'Textile', desc: 'Gold threads weaving the legacy of our ancestors.', img: '/images/v3/roots_textile.png' },
];

const scrollGallery = [
    '/images/v3/portfolio_wedding.png',
    '/images/v3/tamil_girl_2.png',
    '/images/v3/roots_kolam.png',
    '/images/v3/portfolio_portrait.png',
    '/images/v3/tamil_girl_3.png',
    '/images/v3/portfolio_commercial.png',
    '/images/v3/roots_palmyrah.png',
    '/images/v3/portfolio_events.png',
    '/images/v3/tamil_girl_4.png',
    '/images/v3/roots_textile.png',
];

const processSteps = [
    { num: '01', title: 'Discovery', desc: 'We begin with a heartfelt conversation about your story, vision, and the moments that matter most.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80q-33 0-56.5-23.5T0-160v-640q0-33 23.5-56.5T80-880h800q33 0 56.5 23.5T960-800v640q0 33-23.5 56.5T913-80L800-193H80v113Z"/></svg> },
    { num: '02', title: 'Planning', desc: 'We scout locations, plan the shot list, and design the visual narrative around your cultural traditions.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg> },
    { num: '03', title: 'Capture', desc: 'On the day, we blend into your celebration — capturing raw emotion with cinematic precision.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h160l64-80h272l64 80h160q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm360-160q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> },
    { num: '04', title: 'Delivery', desc: 'Your gallery is hand-edited with our signature warm tone and delivered in a premium collection.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-216 284-332q-11-7-17.5-18.5T260-374v-212q0-12 6.5-23.5T284-628l196-116q10-6 20-6t20 6l196 116q11 7 17.5 18.5T740-586v212q0 12-6.5 23.5T716-332L520-216q-10 6-20 6t-20-6Zm0-127 159-93-159-93-159 93 159 93Zm0-244 159-93-159-93-159 93 159 93ZM340-424l100 58v-116l-100-58v116Zm280 0v-116l-100 58v116l100-58Z"/></svg> },
];

const testimonials = [
    { name: 'Priya & Karthik', event: 'Wedding, 2024', quote: 'H2F captured our wedding with such grace and authenticity. Every photo tells a story of our heritage and love.', img: '/images/v3/tamil_girl_1.png' },
    { name: 'Anusha Sivam', event: 'Portrait Session', quote: 'The way they use light and shadow is pure artistry. My portraits feel like they belong in a gallery.', img: '/images/v3/tamil_girl_3.png' },
    { name: 'Nallur Temple Trust', event: 'Festival Coverage', quote: 'No one captures the essence of Jaffna festivals quite like H2F. Their work is a treasure for our community.', img: '/images/v3/roots_temple.png' },
];

/* ─── Hero Slide Data ─── */
const SLIDE_DURATION = 5500;
const heroSlides = [
    {
        tagline: 'Premium Wedding Photography',
        headingLines: ["Where Heritage", "Meets the Lens"],
        description: 'Cinematic storytelling rooted in the vibrant textures of Northern Sri Lanka.',
        cta: 'View Our Work',
        ctaTarget: 'portfolio',
    },
    {
        tagline: 'Cultural Portraiture',
        headingLines: ["Every Face", "Tells a Story"],
        description: 'Portraits that honor tradition while embracing contemporary elegance.',
        cta: 'Explore Portraits',
        ctaTarget: 'portfolio',
    },
    {
        tagline: 'Jaffna\'s Finest Studio',
        headingLines: ["Timeless Moments,", "Captured Forever"],
        description: 'A sophisticated blend of ancient cultural motifs and modern luxury.',
        cta: 'Book Your Session',
        ctaTarget: 'contact',
    },
];

/* ─── Word Split Component ─── */
const SplitWords = ({ text }) => (
    <span>
        {text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
                <span className="hero-word inline-block">{word}</span>
            </span>
        ))}
    </span>
);

export default function Home() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [heroIndex, setHeroIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [portfolioTick, setPortfolioTick] = useState(0);
    const [isHoveringFilmstrip, setIsHoveringFilmstrip] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPortfolioTick(t => t + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeAlbum && !isHoveringFilmstrip) {
            const interval = setInterval(() => {
                setActiveImageIndex(prev => (prev + 1) % activeAlbum.gallery.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [activeAlbum, isHoveringFilmstrip]);
    const videoRef = useRef(null);
    const heroContentRef = useRef(null);
    const progressRef = useRef(null);
    const timerRef = useRef(null);
    const filters = ['All', 'Weddings', 'Portraits', 'Commercial', 'Events'];
    const filteredItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

    /* ─── GSAP Hero Animations ─── */
    const goToSlide = useCallback((newIndex) => {
        if (isAnimating || newIndex === heroIndex) return;
        setIsAnimating(true);
        const gsap = window.gsap;
        if (!gsap || !heroContentRef.current) { setHeroIndex(newIndex); setIsAnimating(false); return; }
        const c = heroContentRef.current;
        const exitTl = gsap.timeline({
            onComplete: () => { setHeroIndex(newIndex); requestAnimationFrame(() => requestAnimationFrame(() => animateIn())); }
        });
        exitTl.to(c.querySelectorAll('.hero-word'), { y: -80, opacity: 0, rotateX: 45, stagger: 0.02, duration: 0.4, ease: 'power3.in' }, 0)
              .to(c.querySelector('.hero-tagline'), { x: -30, opacity: 0, duration: 0.3, ease: 'power2.in' }, 0)
              .to(c.querySelector('.hero-desc'), { y: 20, opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.1)
              .to(c.querySelector('.hero-cta'), { y: 20, opacity: 0, scale: 0.95, duration: 0.25, ease: 'power2.in' }, 0.15);
    }, [heroIndex, isAnimating]);

    const animateIn = useCallback(() => {
        const gsap = window.gsap;
        if (!gsap || !heroContentRef.current) { setIsAnimating(false); return; }
        const c = heroContentRef.current;
        const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });
        gsap.set(c.querySelectorAll('.hero-word'), { y: 60, opacity: 0, rotateX: -25 });
        gsap.set(c.querySelector('.hero-tagline'), { x: 40, opacity: 0 });
        gsap.set(c.querySelector('.hero-desc'), { y: 30, opacity: 0 });
        gsap.set(c.querySelector('.hero-cta'), { y: 30, opacity: 0, scale: 0.9 });
        tl.to(c.querySelector('.hero-tagline'), { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.1)
          .to(c.querySelectorAll('.hero-word'), { y: 0, opacity: 1, rotateX: 0, stagger: 0.06, duration: 0.7, ease: 'power3.out' }, 0.2)
          .to(c.querySelector('.hero-desc'), { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.5)
          .to(c.querySelector('.hero-cta'), { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 0.65);
        if (progressRef.current) gsap.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: SLIDE_DURATION / 1000, ease: 'none' });
    }, []);

    useEffect(() => { const t = setTimeout(() => animateIn(), 400); return () => clearTimeout(t); }, []);
    useEffect(() => {
        timerRef.current = setInterval(() => goToSlide((heroIndex + 1) % heroSlides.length), SLIDE_DURATION);
        return () => clearInterval(timerRef.current);
    }, [heroIndex, goToSlide]);

    // Testimonial auto-rotate
    useEffect(() => {
        const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 0.8;
        if (window.AOS) window.AOS.refresh();
    }, [activeFilter]);

    const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
    const handleSlideClick = (i) => { clearInterval(timerRef.current); goToSlide(i); };
    const currentSlide = heroSlides[heroIndex];

    return (
        <div className="bg-background text-on-background overflow-x-hidden">
            <div className="grain-overlay"></div>
            <Navbar />

            {/* ═══════════════════════════════════════════════════
                HERO — Split-Screen Cinematic
            ═══════════════════════════════════════════════════ */}
            <section id="hero" className="relative w-full h-[100svh] min-h-[650px] overflow-hidden select-none bg-[#0a0503]">
                {/* Background video — covers full, visible through content gaps */}
                <div className="absolute inset-0 z-0">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src="/images/hero.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[#0a0503]/75"></div>
                </div>

                {/* Split Layout */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row">
                    {/* LEFT — Text Content */}
                    <div className="flex-1 flex items-center px-5 sm:px-8 lg:px-16 xl:px-20 pt-20 pb-8 lg:pb-0 lg:pt-0">
                        <div ref={heroContentRef} className="max-w-xl w-full">
                            {/* Logo mark */}
                            <div className="flex items-center gap-3 mb-6 sm:mb-8" >
                                <img src="/images/backliog.png" alt="H2F Studios" className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-80" />
                                <div className="h-6 w-px bg-[#D4AF37]/30"></div>
                                <span className="font-label-caps text-[9px] sm:text-[10px] text-white/40 tracking-[0.2em]">Jaffna, Sri Lanka</span>
                            </div>

                            <span className="hero-tagline font-label-caps text-[9px] sm:text-[10px] lg:text-[11px] text-[#D4AF37] tracking-[0.35em] mb-4 sm:mb-5 block uppercase" style={{ textShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
                                {currentSlide.tagline}
                            </span>

                            <h1 className="font-display-lg text-[32px] sm:text-[42px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-[-0.03em] text-white mb-5 sm:mb-6" style={{ perspective: '600px' }}>
                                {currentSlide.headingLines.map((line, li) => (
                                    <React.Fragment key={`${heroIndex}-${li}`}>
                                        <SplitWords text={line} />
                                        {li < currentSlide.headingLines.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h1>

                            <p className="hero-desc font-body-lg text-[13px] sm:text-[15px] text-white/50 max-w-md mb-7 sm:mb-9 leading-relaxed">
                                {currentSlide.description}
                            </p>

                            <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={() => scrollTo(currentSlide.ctaTarget)} className="relative bg-[#D4AF37] text-[#0a0503] font-label-caps text-[10px] sm:text-[11px] py-3.5 sm:py-4 px-8 sm:px-10 hover:bg-white transition-all duration-500 flex items-center justify-center gap-2.5 group w-full sm:w-auto">
                                    {currentSlide.cta}
                                    <span className="group-hover:translate-x-1.5 transition-transform duration-300"><ArrowForwardIcon /></span>
                                </button>
                                <button onClick={() => scrollTo('studio')} className="border border-white/20 text-white/70 font-label-caps text-[10px] sm:text-[11px] py-3.5 sm:py-4 px-8 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm">
                                    About Us
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <div className="w-full h-[2px] bg-white/5">
                        <div ref={progressRef} className="h-full bg-[#D4AF37] origin-left" style={{ transform: 'scaleX(0)' }}></div>
                    </div>
                    <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 py-4 sm:py-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-display-lg text-[24px] sm:text-[32px] text-white/80 leading-none tabular-nums">{String(heroIndex + 1).padStart(2, '0')}</span>
                            <div className="flex flex-col"><span className="w-5 h-px bg-white/20 mb-1"></span><span className="font-label-caps text-[8px] text-white/30 tracking-[0.15em]">{String(heroSlides.length).padStart(2, '0')}</span></div>
                        </div>
                        <div className="flex items-center gap-2.5">
                            {heroSlides.map((_, i) => (
                                <button key={i} onClick={() => handleSlideClick(i)} disabled={isAnimating} className={`h-[2px] transition-all duration-700 ${i === heroIndex ? 'w-10 sm:w-14 bg-[#D4AF37]' : 'w-4 sm:w-6 bg-white/15 hover:bg-white/40'}`} aria-label={`Slide ${i + 1}`} />
                            ))}
                        </div>
                        <button onClick={() => scrollTo('gallery-strip')} className="text-white/25 hover:text-white transition-colors hidden sm:flex items-center gap-2 group">
                            <span className="font-label-caps text-[8px] tracking-[0.2em]">Scroll</span>
                            <span className="animate-bounce"><ArrowDownIcon /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                HORIZONTAL SCROLLING GALLERY STRIP
            ═══════════════════════════════════════════════════ */}
            <section id="gallery-strip" className="py-4 sm:py-6 bg-[#0a0503] overflow-hidden">
                <div className="flex animate-marquee gap-3 sm:gap-4" style={{ width: 'max-content' }}>
                    {[...scrollGallery, ...scrollGallery].map((src, i) => (
                        <div key={i} className="w-[200px] sm:w-[260px] lg:w-[300px] h-[120px] sm:h-[160px] lg:h-[180px] flex-shrink-0 overflow-hidden group">
                            <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" style={{ backgroundImage: `url('${src}')` }}></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                STATS BAR
            ═══════════════════════════════════════════════════ */}
            <section className="relative py-12 sm:py-16 px-5 sm:px-8 lg:px-margin-desktop overflow-hidden border-b border-outline-variant/10">
                <div className="absolute inset-0 kolam-grid opacity-20"></div>
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        {[
                            { num: '500+', label: 'Moments Captured', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h160l64-80h272l64 80h160q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm360-160q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> },
                            { num: '8+', label: 'Years of Heritage', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M80-120v-80h800v80H80Zm160-160v-400H160v-80h640v80H720v400H240ZM320-280h80v-400h-80v400Zm160 0h80v-400h-80v400Zm160 0h80v-400h-80v400Z"/></svg> },
                            { num: '100%', label: 'Client Satisfaction', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg> },
                            { num: '50+', label: 'Cultural Events', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto text-[#D4AF37]" viewBox="0 -960 960 960" fill="currentColor"><path d="M400-360h160v-80H400v80Zm0-160h160v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg> },
                        ].map((stat, i) => (
                            <div key={i}  data-aos-delay={i * 100} className="text-center group cursor-default">
                                <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                                <span className="font-display-lg text-[36px] sm:text-[44px] lg:text-[52px] text-primary block leading-none mb-1.5 tracking-tight">{stat.num}</span>
                                <span className="font-label-caps text-[9px] sm:text-[10px] text-on-surface-variant tracking-[0.18em]">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                THE STUDIO
            ═══════════════════════════════════════════════════ */}
            <section id="studio" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]"></div>
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-10 lg:gap-gutter items-center">
                    {/* Images */}
                    <div className="md:col-span-1 lg:col-span-6 relative"  >
                        <div className="relative">
                            <div className="absolute -top-5 -left-5 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/30 z-20 hidden sm:block"></div>
                            <div className="absolute -bottom-5 -right-5 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/30 z-20 hidden sm:block"></div>
                            <div className="aspect-[4/5] overflow-hidden bg-surface-container relative">
                                <div role="img" aria-label="Studio portrait" className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('/images/v3/tamil_girl_2.png')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
                            </div>
                            <div className="absolute top-5 right-5 lg:-right-4 lg:top-8 z-20 bg-[#0a0503]/80 backdrop-blur-xl px-4 py-3 border border-[#D4AF37]/30"  >
                                <span className="font-label-caps text-[8px] text-[#D4AF37] tracking-[0.2em] block">Est.</span>
                                <span className="font-display-lg text-[22px] text-white leading-none">2018</span>
                            </div>
                        </div>
                    </div>
                    {/* Copy */}
                    <div className="md:col-span-1 lg:col-span-5 lg:col-start-8"   >
                        <div className="flex items-center gap-3 mb-5" >
                            <img src="/images/backliog.png" alt="" className="w-8 h-8 opacity-60" />
                            <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.2em]">The Studio</span>
                        </div>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight mb-5 sm:mb-6"  >The Soul of Jaffna<br className="hidden sm:block"/> Photography</h2>
                        <div className="flex items-center gap-3 mb-6 sm:mb-8"  >
                            <div className="w-14 h-[2px] bg-[#D4AF37]"></div><div className="w-4 h-[2px] bg-[#D4AF37]/40"></div><div className="w-2 h-[2px] bg-[#D4AF37]/20"></div>
                        </div>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mb-4 leading-relaxed"  >
                            We don't just take pictures; we <span className="text-primary font-semibold">weave narratives</span>. Deeply rooted in the vibrant heritage of Jaffna, our studio merges traditional reverence with modern editorial aesthetics.
                        </p>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mb-8 sm:mb-10 leading-relaxed"  >
                            Every frame is a testament to the tactile beauty of our culture — from the intricate patterns of <span className="text-primary italic">pulli kolam</span> to the timeless elegance of gold silk.
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                            {[
                                { num: '01', label: 'Rituals', name: 'Weddings' },
                                { num: '02', label: 'Faces', name: 'Portraits' },
                                { num: '03', label: 'Brands', name: 'Commercial' },
                                { num: '04', label: 'Moments', name: 'Events' },
                            ].map((item, i) => (
                                <div key={i}  data-aos-delay={300 + i * 80} className="relative border border-outline-variant/30 p-4 sm:p-5 hover:border-[#D4AF37]/50 transition-all duration-500 group cursor-default overflow-hidden bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <span className="font-label-caps text-[9px] text-[#D4AF37] tracking-[0.15em] block mb-1.5 relative z-10">{item.num} / {item.label}</span>
                                    <span className="font-title-md text-[15px] sm:text-title-md text-on-surface relative z-10 group-hover:text-primary transition-colors duration-300">{item.name}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => scrollTo('contact')} className="relative inline-flex items-center gap-3 text-primary font-title-md text-[16px] hover:text-[#D4AF37] transition-all duration-500 group"  >
                            <span className="relative">Book a session<span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span></span>
                            <span className="w-8 h-8 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300"><ArrowForwardIcon /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop"><div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div></div>

            {/* ═══════════════════════════════════════════════════
                HOW WE WORK — Process
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden">
                <div className="absolute inset-0 kolam-grid opacity-10"></div>
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Process</span>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight mb-4">How We Work</h2>
                        <p className="font-body-md text-[14px] text-on-surface-variant max-w-lg mx-auto">From the first conversation to the final delivery, every step is crafted with intention.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i}  data-aos-delay={i * 120} className="relative group">
                                {/* Connection line */}
                                {i < processSteps.length - 1 && <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent"></div>}
                                <div className="border border-outline-variant/20 p-6 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-500 bg-gradient-to-b from-surface-container-low to-transparent relative overflow-hidden group-hover:shadow-lg">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="text-3xl mb-4">{step.icon}</div>
                                    <span className="font-label-caps text-[9px] text-[#D4AF37] tracking-[0.2em] block mb-2">{step.num}</span>
                                    <h3 className="font-title-md text-[18px] text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                                    <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                PORTFOLIO — 8 Items
            ═══════════════════════════════════════════════════ */}
            <section id="portfolio" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px]"></div>
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 mb-12 sm:mb-16" >
                        <div>
                            <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.2em] mb-3 block">◆ Portfolio</span>
                            <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight mb-2">Stories We've Told</h2>
                            <p className="font-body-md text-[14px] text-on-surface-variant max-w-md">A curated collection of recent commissions across Jaffna.</p>
                        </div>
                        <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 sm:overflow-visible">
                            {filters.map(f => (
                                <button key={f} onClick={() => setActiveFilter(f)} className={`relative font-label-caps text-[10px] px-4 py-2.5 whitespace-nowrap transition-all duration-500 ${activeFilter === f ? 'text-[#D4AF37]' : 'text-on-surface-variant hover:text-primary'}`}>
                                    {f}
                                    <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${activeFilter === f ? 'w-full' : 'w-0'}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredItems.map((item, i) => (
                            <div key={item.id} onClick={() => { setActiveAlbum(item); setActiveImageIndex(0); }} className={`group relative overflow-hidden bg-surface-container cursor-pointer ${i === 0 && filteredItems.length > 3 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:h-full' : 'aspect-[4/3]'}`}>
                                {item.gallery.map((gImg, gIdx) => (
                                    <div key={gIdx} aria-label={item.title} className={`absolute inset-0 bg-cover bg-center transition-all duration-[2s] ease-in-out group-hover:scale-110 ${gIdx === (portfolioTick % item.gallery.length) ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} style={{ backgroundImage: `url('${gImg}')` }}></div>
                                ))}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700"></div>
                                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="font-label-caps text-[9px] text-[#D4AF37] tracking-[0.2em] block mb-1.5">{item.category}</span>
                                            <h3 className="font-display-sm text-[18px] sm:text-[22px] text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-500">{item.title}</h3>
                                            <p className="font-body-md text-[12px] text-white/40 mt-1">{item.sub}</p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                                            <div className="w-9 h-9 border border-white/30 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0a0503] transition-all duration-300"><ArrowForwardIcon /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                FEATURED MASTERPIECE
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop bg-[#0a0503] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[150px]"></div>
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div  >
                            <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-4 block">◆ Featured Story</span>
                            <h2 className="font-display-sm text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-tight mb-6">The Golden Era of Jaffna Weddings</h2>
                            <p className="font-body-md text-[15px] sm:text-[16px] text-white/60 mb-8 leading-relaxed max-w-lg">
                                Experience a complete visual journey through one of our most breathtaking wedding collections. From the early morning temple rituals bathed in soft light, to the vibrant celebration of love and heritage.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10 border-l border-[#D4AF37]/20 pl-6">
                                <div>
                                    <span className="block font-display-sm text-[28px] text-[#D4AF37] mb-1 leading-none">12hrs</span>
                                    <span className="font-label-caps text-[9px] text-white/40 tracking-[0.2em]">Coverage</span>
                                </div>
                                <div>
                                    <span className="block font-display-sm text-[28px] text-[#D4AF37] mb-1 leading-none">Nallur</span>
                                    <span className="font-label-caps text-[9px] text-white/40 tracking-[0.2em]">Location</span>
                                </div>
                            </div>
                            <button onClick={() => setActiveAlbum(portfolioItems[0])} className="border border-[#D4AF37] text-[#D4AF37] font-label-caps text-[10px] sm:text-[11px] py-4 px-10 hover:bg-[#D4AF37] hover:text-[#0a0503] transition-all duration-500 flex items-center gap-3 group">
                                View Full Gallery
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[500px] sm:h-[600px] lg:h-[700px] relative"  >
                            {/* Decorative framing */}
                            <div className="absolute -inset-4 border border-[#D4AF37]/10 z-0"></div>
                            
                            <div className="space-y-4 sm:space-y-6 h-full pt-8 sm:pt-12 relative z-10">
                                <div className="h-[55%] bg-cover bg-center overflow-hidden group">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s] ease-out" style={{ backgroundImage: "url('/images/v3/portfolio_wedding.png')" }}></div>
                                </div>
                                <div className="h-[40%] bg-cover bg-center overflow-hidden group">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s] ease-out" style={{ backgroundImage: "url('/images/v3/tamil_girl_1.png')" }}></div>
                                </div>
                            </div>
                            <div className="space-y-4 sm:space-y-6 h-full pb-8 sm:pb-12 relative z-10">
                                <div className="h-[40%] bg-cover bg-center overflow-hidden group">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s] ease-out" style={{ backgroundImage: "url('/images/v3/roots_temple.png')" }}></div>
                                </div>
                                <div className="h-[55%] bg-cover bg-center overflow-hidden group">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s] ease-out" style={{ backgroundImage: "url('/images/v3/tamil_girl_2.png')" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                BEAUTY OF TRADITION
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop bg-surface-container-low relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-16 sm:mb-20" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Faces of Jaffna</span>
                        <h2 className="font-display-sm text-[32px] sm:text-[40px] lg:text-[48px] text-primary leading-tight max-w-2xl mx-auto">The Beauty of Tradition</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { img: '/images/v3/tamil_girl_5.png', title: 'Traditional Silk', delay: 0 },
                            { img: '/images/v3/tamil_girl_6.png', title: 'Golden Laughter', delay: 100 },
                            { img: '/images/v3/tamil_girl_7.png', title: 'Editorial Bride', delay: 200 },
                            { img: '/images/v3/tamil_girl_4.png', title: 'Natural Glow', delay: 300 }
                        ].map((item, i) => (
                            <div key={i}  data-aos-delay={item.delay} className={`group relative overflow-hidden rounded-sm ${i === 1 || i === 3 ? 'lg:translate-y-8' : ''}`}>
                                <div className="aspect-[3/4] relative">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="w-8 h-px bg-[#D4AF37] mb-4 group-hover:w-full transition-all duration-700"></div>
                                        <h3 className="font-display-sm text-[20px] text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                CINEMATIC QUOTE
            ═══════════════════════════════════════════════════ */}
            <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/v3/jaffna_library.png')" }}></div>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 max-w-container-max mx-auto px-5 sm:px-8 lg:px-margin-desktop text-center">
                    <span className="text-[56px] sm:text-[72px] text-[#D4AF37]/15 font-display-lg block leading-none mb-4" >"</span>
                    <blockquote className="font-display-sm text-[22px] sm:text-[30px] lg:text-[38px] text-white leading-snug max-w-3xl mx-auto mb-6"  >
                        Photography is the story I fail to put into words — told through the <span className="text-[#D4AF37] italic">sacred light</span> of Jaffna.
                    </blockquote>
                    <div className="flex items-center justify-center gap-3"  >
                        <div className="w-8 h-px bg-[#D4AF37]/50"></div>
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em]">H2F Studios</span>
                        <div className="w-8 h-px bg-[#D4AF37]/50"></div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                TESTIMONIALS
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-12 sm:mb-16" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Testimonials</span>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight">What Our Clients Say</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"  >
                        {/* Image */}
                        <div className="lg:col-span-5">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                {testimonials.map((t, i) => (
                                    <div key={i} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${i === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} style={{ backgroundImage: `url('${t.img}')` }}></div>
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="lg:col-span-6 lg:col-start-7">
                            <div className="relative min-h-[200px]">
                                {testimonials.map((t, i) => (
                                    <div key={i} className={`transition-all duration-700 ${i === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute top-0 left-0 right-0 pointer-events-none'}`}>
                                        <span className="text-[48px] text-[#D4AF37]/20 font-display-lg block leading-none mb-2">"</span>
                                        <p className="font-body-lg text-[16px] sm:text-[18px] lg:text-[20px] text-on-surface leading-relaxed mb-6 italic">{t.quote}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-px bg-[#D4AF37]/50"></div>
                                            <div>
                                                <span className="font-title-md text-[14px] text-primary block">{t.name}</span>
                                                <span className="font-label-caps text-[9px] text-on-surface-variant tracking-[0.15em]">{t.event}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-8">
                                {testimonials.map((_, i) => (
                                    <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-[2px] transition-all duration-500 ${i === activeTestimonial ? 'w-10 bg-[#D4AF37]' : 'w-5 bg-outline-variant/30 hover:bg-outline-variant/60'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                SERVICES
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden bg-background">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-16 sm:mb-20" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Offerings</span>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight">Our Signature Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { title: 'Bridal & Wedding', desc: 'Comprehensive coverage of your special day, honoring tradition and emotion.', img: '/images/v3/portfolio_wedding.png' },
                            { title: 'Heritage Portraits', desc: 'Timeless portraiture capturing the essence of your cultural identity.', img: '/images/v3/portfolio_portrait.png' },
                            { title: 'Commercial & Editorial', desc: 'High-end visual storytelling for brands, artisans, and campaigns.', img: '/images/v3/portfolio_commercial.png' }
                        ].map((s, i) => (
                            <div key={i}  data-aos-delay={i * 150} className="group relative h-[450px] sm:h-[500px] overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110" style={{ backgroundImage: `url('${s.img}')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-[#0a0503]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <h3 className="font-display-sm text-[24px] text-[#D4AF37] mb-3">{s.title}</h3>
                                        <p className="font-body-md text-[14px] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">{s.desc}</p>
                                        <div className="w-10 h-[1px] bg-[#D4AF37] group-hover:w-20 transition-all duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                CULTURAL ROOTS — Dark Section
            ═══════════════════════════════════════════════════ */}
            <section id="roots" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop bg-[#0a0503] relative overflow-hidden">
                <div className="absolute inset-0 kolam-grid opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Identity</span>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-white leading-tight mb-4">Cultural Roots</h2>
                        <div className="flex items-center justify-center gap-3 mb-4"><div className="w-8 h-px bg-[#D4AF37]/40"></div><div className="w-2 h-2 border border-[#D4AF37]/40 rotate-45"></div><div className="w-8 h-px bg-[#D4AF37]/40"></div></div>
                        <p className="font-body-md text-[14px] text-white/50 max-w-xl mx-auto">Our aesthetic is drawn from the very fabric of Jaffna.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {motifs.map((motif, i) => (
                            <div key={motif.id}  data-aos-delay={i * 120} className="group cursor-pointer">
                                <div className="aspect-square overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s]" style={{ backgroundImage: `url('${motif.img}')` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-500"></div>
                                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-500 delay-100"></div>
                                    <div className="absolute top-3 right-3"><span className="font-display-lg text-[32px] text-white/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500 leading-none">{String(i + 1).padStart(2, '0')}</span></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"><h3 className="font-title-md text-[14px] sm:text-[16px] text-white">{motif.title}</h3></div>
                                </div>
                                <p className="font-body-md text-[12px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500 text-center">{motif.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                FAQ SECTION
            ═══════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-margin-desktop bg-surface-container relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16" >
                        <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.25em] mb-3 block">◆ Details</span>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] text-primary leading-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: 'Do you travel outside of Jaffna?', a: 'Yes, we are available for commissions throughout Sri Lanka and internationally. Travel and accommodation fees apply for locations outside the Northern Province.' },
                            { q: 'How many images will we receive?', a: 'For a standard wedding package, you can expect between 600 to 800 fully edited, high-resolution images. We focus on quality storytelling over sheer quantity.' },
                            { q: 'What is your turnaround time?', a: 'Portrait sessions are delivered within 2 weeks. Wedding and large event galleries take 4 to 6 weeks to ensure meticulous color grading and retouching.' },
                            { q: 'Do you offer physical albums?', a: 'Absolutely. We believe photographs are meant to be printed. We design and deliver premium, handcrafted heritage albums customized to your preferences.' },
                        ].map((faq, i) => (
                            <div key={i} className="group border-b border-outline-variant/20 pb-6"  data-aos-delay={i * 100}>
                                <div className="flex justify-between items-start cursor-default">
                                    <h3 className="font-display-sm text-[20px] text-primary group-hover:text-[#D4AF37] transition-colors pr-8">{faq.q}</h3>
                                    <span className="text-[#D4AF37] text-xl opacity-50 group-hover:opacity-100 transition-opacity mt-1">+</span>
                                </div>
                                <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                                    <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed max-w-3xl">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                CONTACT
            ═══════════════════════════════════════════════════ */}
            <section id="contact" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-margin-desktop relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px]"></div>
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter relative z-10">
                    <div className="lg:col-span-5"  >
                        <div className="flex items-center gap-3 mb-5" >
                            <img src="/images/backliog.png" alt="" className="w-8 h-8 opacity-60" />
                            <span className="font-label-caps text-[10px] text-[#D4AF37] tracking-[0.2em]">Contact</span>
                        </div>
                        <h2 className="font-display-sm text-[28px] sm:text-[34px] lg:text-display-sm text-primary leading-tight mb-4"  >Let's Tell Your Story</h2>
                        <div className="flex items-center gap-3 mb-6 sm:mb-8"  ><div className="w-14 h-[2px] bg-[#D4AF37]"></div><div className="w-4 h-[2px] bg-[#D4AF37]/40"></div></div>
                        <p className="font-body-md text-[14px] text-on-surface-variant mb-8 max-w-md leading-relaxed"  >Reach out for bookings, collaborations, or a conversation about your next shoot.</p>
                        <div className="space-y-5">
                            {[
                                { label: 'Studio', value: 'Jaffna, Sri Lanka', href: null, icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-75.5-184.5T480-812q-89 0-164.5 75.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg> },
                                { label: 'Call for shoots', value: '0720172910', href: 'tel:0720172910', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg> },
                                { label: 'Email', value: 'hello@h2fstudios.com', href: null, icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group"  data-aos-delay={250 + i * 80}>
                                    <div className="w-12 h-12 flex-shrink-0 border border-outline-variant/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0503] group-hover:border-[#D4AF37] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">{item.icon}</div>
                                    <div>
                                        <h3 className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] mb-1">{item.label}</h3>
                                        {item.href ? <a href={item.href} className="font-body-md text-[14px] text-primary font-bold hover:text-[#D4AF37] transition-colors">{item.value}</a> : <p className="font-body-md text-[14px] text-on-background">{item.value}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-outline-variant/20"  >
                            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-4">Follow Us</span>
                            <div className="flex gap-3">
                                {['Instagram', 'Facebook', 'WhatsApp'].map(s => (
                                    <a key={s} href="#" className="px-4 py-2 border border-outline-variant/30 text-on-surface-variant hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 font-label-caps text-[10px] tracking-[0.1em] group flex items-center gap-2">{s}<span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[10px]">→</span></a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7"   >
                        <div className="bg-surface-container-low p-6 sm:p-8 lg:p-12 border border-outline-variant/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#D4AF37]/20"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#D4AF37]/20"></div>
                            <h3 className="font-title-md text-[18px] sm:text-[20px] text-primary mb-2">Booking Inquiry</h3>
                            <p className="font-body-md text-[13px] text-on-surface-variant mb-6 sm:mb-8">Fill out the form and we'll respond within 24 hours.</p>
                            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-6 sm:space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                    <div className="group"><label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="name">Name</label><input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-[#D4AF37] focus:ring-0 px-0 py-2.5 font-body-md text-[14px] text-on-background transition-colors duration-300" id="name" name="name" required type="text"/></div>
                                    <div className="group"><label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="contact">Email / Phone</label><input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-[#D4AF37] focus:ring-0 px-0 py-2.5 font-body-md text-[14px] text-on-background transition-colors duration-300" id="contact" name="contact" required type="text"/></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                    <div className="group"><label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="event-type">Event Type</label>
                                        <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-[#D4AF37] focus:ring-0 px-0 py-2.5 font-body-md text-[14px] text-on-background transition-colors duration-300 appearance-none" id="event-type" name="event-type" defaultValue="">
                                            <option disabled value="">Select a category</option><option value="wedding">Traditional Wedding</option><option value="portrait">Heritage Portraiture</option><option value="editorial">Editorial / Commercial</option><option value="event">Event</option><option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="group"><label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="date">Date</label><input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-[#D4AF37] focus:ring-0 px-0 py-2.5 font-body-md text-[14px] text-on-background transition-colors duration-300" id="date" name="date" type="date"/></div>
                                </div>
                                <div className="group"><label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="message">Message</label><textarea className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-[#D4AF37] focus:ring-0 px-0 py-2.5 font-body-md text-[14px] text-on-background transition-colors duration-300 resize-none" id="message" name="message" placeholder="Tell us about the significance of this moment..." required rows="4"></textarea></div>
                                <button className="relative bg-primary text-on-primary font-label-caps text-[11px] py-4 sm:py-5 px-8 w-full overflow-hidden group" type="submit">
                                    <span className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                    <span className="relative z-10 flex justify-center items-center gap-2.5 group-hover:text-[#0a0503] transition-colors duration-500">Inquire<span className="group-hover:translate-x-1.5 transition-transform duration-300"><ArrowForwardIcon /></span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* ALBUM MODAL */}
            {activeAlbum && (
                <div className="fixed inset-0 z-[100] bg-[#0a0503] flex flex-col overflow-hidden animate-[fadeIn_0.5s_ease-out]">
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/80 to-transparent pt-6 sm:pt-10 pb-16 px-6 sm:px-12 flex justify-between items-start pointer-events-none">
                        <div className="pointer-events-auto">
                            <span className="font-label-caps text-[10px] sm:text-[12px] text-[#D4AF37] tracking-[0.3em] mb-2 block uppercase">{activeAlbum.category}</span>
                            <h2 className="font-display-sm text-[28px] sm:text-[40px] lg:text-[56px] text-white leading-[1.1] tracking-tight">{activeAlbum.title}</h2>
                        </div>
                        <button onClick={() => { setActiveAlbum(null); setActiveImageIndex(0); }} className="pointer-events-auto w-10 h-10 sm:w-14 sm:h-14 bg-black/40 hover:bg-[#D4AF37] border border-white/10 text-white hover:text-black backdrop-blur-md flex items-center justify-center rounded-full transition-all duration-500 flex-shrink-0 group cursor-pointer shadow-2xl mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-500" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Main Image Viewer */}
                    <div className="flex-1 relative w-full h-full bg-[#0a0503] overflow-hidden">
                        {activeAlbum.gallery.map((img, i) => (
                            <img 
                                key={i} 
                                src={img} 
                                alt="" 
                                className={`absolute inset-0 w-full h-full object-contain ${i === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                style={{ 
                                    transform: i === activeImageIndex ? 'scale(1.05)' : 'scale(1)', 
                                    transition: 'transform 10s ease-out, opacity 1s ease-in-out' 
                                }}
                            />
                        ))}
                    </div>

                    {/* Filmstrip Footer */}
                    <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black via-black/90 to-transparent pt-20 pb-6 px-6 sm:px-12 flex justify-center pointer-events-none">
                        <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 max-w-full pointer-events-auto" style={{ scrollbarWidth: 'none' }} onMouseEnter={() => setIsHoveringFilmstrip(true)} onMouseLeave={() => setIsHoveringFilmstrip(false)}>
                            {activeAlbum.gallery.map((img, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex-shrink-0 rounded-sm overflow-hidden transition-all duration-500 cursor-pointer ${i === activeImageIndex ? 'border-2 border-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)] z-20' : 'border border-white/20 opacity-40 hover:opacity-100 z-10'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                    {i !== activeImageIndex && <div className="absolute inset-0 bg-black/50 hover:bg-transparent transition-colors"></div>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
