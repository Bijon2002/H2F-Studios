import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArrowForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
  </svg>
);

const portfolioImages = [
    { category: 'Weddings', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD23rqxE1TEI0VX98vpSltpvzDOUFxWHSCWEgAygaDDhQqEIduy3OYNR1VrM-s-0idm7eHCMdH5t4VCxK8WOrW01fSbq5nKzdvY-qM7E5StNa_x7ZjR4iMuejtQHrFc1tu0Mab9jtsDXmldvnr_vMSoxDEOancdGvQx8eO6GbiQM-MtOYx5725-qqle64FD0EzGeJGXYGWxuJz1b1-3MjN60xN1lPmJeTvHiI1mqBLwXbk7O38FwNCx', alt: 'Wedding' },
    { category: 'Portraits', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX8s2qNDd3X2JggyE-26V-9j0sGYVgcCf1zWRE_UIbAFoU9qZLkR03V3L4OKKmAXjKQaKpN0hPHxsK1wLrRec5XCm47y3aSLxsFkN_NLRoRj-1P75eD7kosaXPz8pOrx_GT5x7XgX4ykSS2gK8dPqD-twu3PHCO9egKP6W5yCC70L4bZFRkd0FZJC5TflqPqbThuXHjUStefU7nWyjJ0vcn-H2hB1Ca5HlIlldwT-SBMhm5P6pTeGh', alt: 'Portrait' },
    { category: 'Commercial', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2oc_6mIeB6RKnSdCt8meYJH0rve0WhR3j-Bhi-f5SsqhMQrmCCzA2VHQjrbBa_M2xOrnsMu6pKRXnJLPx2dH3HTVMnMyQ0Xk5vAHr7Q5wvfRDqwJmm4RyaNcqX3jCc0wpJbTErMI9uE7dwvqpjxMSiph9IksU6tWjVhFkIIUmYwgXkFlGVkenJ1o01TxSBnncDddbwxGAOu6G1-LJw4j45zi3t5bkzLUvgYTZ_bCBHFKzDD1lML5D', alt: 'Commercial' },
    { category: 'Events', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19hHEX5Sh-gXT0waH7Q1PXHLoIgIkPN2EcPdd4Fzmk6Wu84ET7bpUe8o8DFdktoHM9F8FDRjR4MUV9yMdEkPK9Cdcom5fmbvrG3POekXm_lIvI3oQZB5wM_uDtDp179umNPefzsxGBqhZgbqXY5rLz3yO6oqGVVJ6MbEm3zwbtdEOTzy16PLJi6fP81M_8VpduaTsQ4mCvptYCZcAEq6UiSKFmiqACMcG1akQxX5YLMBeBX227x8k', alt: 'Events' }
];

export default function Home() {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealCallback = (entries, observer) => {
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

        // Parallax effect on scroll for backgrounds
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            
            parallaxElements.forEach(el => {
                const speed = 0.4;
                const limit = el.parentElement.offsetTop;
                if(scrolled > limit - window.innerHeight) {
                   el.style.transform = `translateY(${(scrolled - limit) * speed}px)`;
                }
            });

            // Nav backdrop blur adjustment on scroll
            const nav = document.getElementById('mainNav');
            if (scrolled > 50) {
                nav.classList.add('shadow-sm');
                nav.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)'; // #D4AF37
            } else {
                nav.classList.remove('shadow-sm');
                nav.style.borderBottomColor = ''; // Revert to class style
            }
        });
    }, []);

    const filteredImages = filter === 'All' 
        ? portfolioImages 
        : portfolioImages.filter(img => img.category === filter);

    return (
        <>
            {/* Tactile Grain Layer */}
            <div className="grain-overlay"></div>

            {/* TopNavBar */}
            <header className="fixed top-0 w-full z-40 bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-500 ease-in-out hidden md:block" id="mainNav">
                <div className="flex justify-between items-center w-full px-margin-desktop py-4 mx-auto max-w-container-max">
                    <Link className="font-display-sm text-display-sm tracking-tighter text-primary dark:text-primary-fixed-dim" to="/">
                        H2F Studios
                    </Link>
                    <nav className="flex gap-8">
                        <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out" href="#about">The Studio</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out" href="#portfolio">Portfolio</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out" href="#roots">Cultural Roots</a>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out" to="/contact">Contact</Link>
                    </nav>
                    <Link to="/contact" className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 transition-colors">
                        Inquire
                    </Link>
                </div>
            </header>

            {/* Mobile Nav Header */}
            <header className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant/30 py-4 px-margin-mobile md:hidden flex justify-between items-center">
                <Link className="font-display-sm text-[24px] tracking-tighter text-primary" to="/">
                    H2F
                </Link>
                <button className="text-primary">
                    <MenuIcon />
                </button>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section className="relative h-screen w-full overflow-hidden bg-on-background flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full">
                        <img alt="Jaffna sunset" className="w-full h-full object-cover ken-burns opacity-70" src="/images/v2/img_1.webp"/>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mt-16 md:mt-0">
                        <img alt="H2F Studios Logo" className="w-32 h-32 md:w-48 md:h-48 rounded-sm mb-8 reveal" src="/images/v2/img_2.webp"/>
                        <h1 className="font-display-lg text-display-lg text-on-primary mb-4 reveal max-w-4xl drop-shadow-lg hidden md:block">
                            Capturing Jaffna's Moments, Traditionally Timeless
                        </h1>
                        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary mb-4 reveal max-w-4xl drop-shadow-lg md:hidden">
                            Capturing Jaffna's Moments, Traditionally Timeless
                        </h1>
                        <p className="font-body-lg text-body-lg text-surface-container max-w-2xl reveal delay-100">
                            A sophisticated blend of ancient cultural motifs and contemporary minimalist luxury.
                        </p>
                        <a href="#about" className="inline-block mt-8 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-label-caps text-label-caps px-8 py-4 rounded hover:bg-[#D4AF37]/10 transition-colors reveal delay-200 backdrop-blur-sm">
                            Explore The Studio
                        </a>
                    </div>
                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center reveal delay-300">
                        <span className="font-label-caps text-label-caps text-on-primary/70 mb-2 tracking-widest">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-section-gap px-margin-mobile md:px-margin-desktop kolam-grid relative" id="about">
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
                            <a className="inline-flex items-center gap-2 text-primary font-title-md text-title-md hover:text-primary-container transition-colors group" href="#portfolio">
                                Discover our story
                                <span className="transform group-hover:translate-x-1 transition-transform">
                                    <ArrowForwardIcon />
                                </span>
                            </a>
                        </div>
                        <div className="col-span-4 md:col-span-5 md:col-start-8 reveal order-1 md:order-2 h-[500px] md:h-[700px] relative w-full">
                            <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-4 translate-y-4"></div>
                            <div className="w-full h-full overflow-hidden bg-surface-container relative">
                                <div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-bg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmJqhzEsTYI3RwM6RVjh47M3rMxZD3-d26PIM7-NuYHfAlb3OdvoxiC7nNsxF_ijUfCDBTPx_hhoaTrtFblYbyy0C54THs8N-zvXhRA3gWjPpFuyxHvkiRk0eeQDfdU_OV9a4rD43wdAON0R7sdVAn98h5woGDgmgGtNIK6M4MVLWeoopKdeXPJzGalqkFWV4m4cf1Dr1J0In2uTieQcxxhemR1LkueWQEMJV6shStY690Rss3fnZY')" }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/20 relative">
                    <div className="max-w-container-max mx-auto mb-16 text-center reveal">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block">Heritage Portraiture</span>
                        <h2 className="font-display-sm text-display-sm text-primary mb-4 hidden md:block">Our Expertise</h2>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4 md:hidden">Our Expertise</h2>
                        <div className="flex justify-center items-center gap-2 text-tertiary">
                            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                            <span className="w-2 h-2 rounded-full bg-tertiary opacity-50"></span>
                            <span className="w-2 h-2 rounded-full bg-tertiary opacity-25"></span>
                        </div>
                    </div>
                    <div className="max-w-container-max mx-auto grid grid-cols-4 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
                        {/* 01 Weddings */}
                        <div className="col-span-4 md:col-span-8 relative group overflow-hidden bg-surface-container cursor-pointer reveal">
                            <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD23rqxE1TEI0VX98vpSltpvzDOUFxWHSCWEgAygaDDhQqEIduy3OYNR1VrM-s-0idm7eHCMdH5t4VCxK8WOrW01fSbq5nKzdvY-qM7E5StNa_x7ZjR4iMuejtQHrFc1tu0Mab9jtsDXmldvnr_vMSoxDEOancdGvQx8eO6GbiQM-MtOYx5725-qqle64FD0EzGeJGXYGWxuJz1b1-3MjN60xN1lPmJeTvHiI1mqBLwXbk7O38FwNCx')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent group-hover:bg-tertiary/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="font-label-caps text-label-caps text-[#D4AF37] mb-2 block">01 / Rituals</span>
                                        <h3 className="font-display-sm text-display-sm text-on-primary hidden md:block">Weddings</h3>
                                        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary md:hidden">Weddings</h3>
                                    </div>
                                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowForwardIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* 02 Portraits */}
                        <div className="col-span-4 md:col-span-4 relative group overflow-hidden bg-surface-container cursor-pointer reveal delay-100">
                            <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDX8s2qNDd3X2JggyE-26V-9j0sGYVgcCf1zWRE_UIbAFoU9qZLkR03V3L4OKKmAXjKQaKpN0hPHxsK1wLrRec5XCm47y3aSLxsFkN_NLRoRj-1P75eD7kosaXPz8pOrx_GT5x7XgX4ykSS2gK8dPqD-twu3PHCO9egKP6W5yCC70L4bZFRkd0FZJC5TflqPqbThuXHjUStefU7nWyjJ0vcn-H2hB1Ca5HlIlldwT-SBMhm5P6pTeGh')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent group-hover:bg-tertiary/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                                <div>
                                    <span className="font-label-caps text-label-caps text-[#D4AF37] mb-2 block">02 / Soul</span>
                                    <h3 className="font-title-md text-title-md text-on-primary">Portraits</h3>
                                </div>
                                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowForwardIcon />
                                </span>
                            </div>
                        </div>
                        {/* 03 Commercial */}
                        <div className="col-span-4 md:col-span-5 relative group overflow-hidden bg-surface-container cursor-pointer reveal">
                            <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2oc_6mIeB6RKnSdCt8meYJH0rve0WhR3j-Bhi-f5SsqhMQrmCCzA2VHQjrbBa_M2xOrnsMu6pKRXnJLPx2dH3HTVMnMyQ0Xk5vAHr7Q5wvfRDqwJmm4RyaNcqX3jCc0wpJbTErMI9uE7dwvqpjxMSiph9IksU6tWjVhFkIIUmYwgXkFlGVkenJ1o01TxSBnncDddbwxGAOu6G1-LJw4j45zi3t5bkzLUvgYTZ_bCBHFKzDD1lML5D')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent group-hover:bg-tertiary/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                                <div>
                                    <span className="font-label-caps text-label-caps text-[#D4AF37] mb-2 block">03 / Craft</span>
                                    <h3 className="font-title-md text-title-md text-on-primary">Commercial</h3>
                                </div>
                                <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowForwardIcon />
                                </span>
                            </div>
                        </div>
                        {/* 04 Events */}
                        <div className="col-span-4 md:col-span-7 relative group overflow-hidden bg-surface-container cursor-pointer reveal delay-100">
                            <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC19hHEX5Sh-gXT0waH7Q1PXHLoIgIkPN2EcPdd4Fzmk6Wu84ET7bpUe8o8DFdktoHM9F8FDRjR4MUV9yMdEkPK9Cdcom5fmbvrG3POekXm_lIvI3oQZB5wM_uDtDp179umNPefzsxGBqhZgbqXY5rLz3yO6oqGVVJ6MbEm3zwbtdEOTzy16PLJi6fP81M_8VpduaTsQ4mCvptYCZcAEq6UiSKFmiqACMcG1akQxX5YLMBeBX227x8k')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent group-hover:bg-tertiary/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="font-label-caps text-label-caps text-[#D4AF37] mb-2 block">04 / Energy</span>
                                        <h3 className="font-display-sm text-display-sm text-on-primary hidden md:block">Events</h3>
                                        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary md:hidden">Events</h3>
                                    </div>
                                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowForwardIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative" id="portfolio">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center reveal mb-12">
                            <span className="font-label-caps text-label-caps text-primary-container mb-4 block">Portfolio</span>
                            <h2 className="font-display-sm text-display-sm text-primary mb-6">Stories We've Told</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-8">
                                A curated selection of moments — weddings, portraits, and events framed through a Jaffna lens.
                            </p>
                            {/* Filter Tabs */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {['All', 'Weddings', 'Portraits', 'Commercial', 'Events'].map(tab => (
                                    <button 
                                        key={tab}
                                        onClick={() => setFilter(tab)}
                                        className={`font-label-caps text-label-caps px-4 py-2 rounded-full border transition-colors ${filter === tab ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-on-surface-variant border-outline-variant hover:border-primary'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Portfolio Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                            {filteredImages.map((img, idx) => (
                                <div key={idx} className="relative group overflow-hidden h-80 rounded shadow-sm">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${img.src}')` }}></div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-label-caps text-label-caps tracking-widest">{img.category}</span>
                                    </div>
                                </div>
                            ))}
                            {filteredImages.length === 0 && (
                                <div className="col-span-full text-center py-12 text-on-surface-variant">
                                    No items found for this category.
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Cultural Roots Section */}
                <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low kolam-grid relative border-t border-outline-variant/20" id="roots">
                    <div className="max-w-container-max mx-auto text-center reveal mb-16">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block">Cultural Roots</span>
                        <h2 className="font-display-sm text-display-sm text-primary mb-6">Where Heritage Meets the Lens</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                            Jaffna's identity lives in its kolam patterns, temple gopurams, and palmyrah-lined shores. We carry these motifs into every frame we shoot.
                        </p>
                    </div>

                    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal delay-100">
                        {[
                            { title: 'Kolam', subtitle: 'The rhythm of patterns', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD23rqxE1TEI0VX98vpSltpvzDOUFxWHSCWEgAygaDDhQqEIduy3OYNR1VrM-s-0idm7eHCMdH5t4VCxK8WOrW01fSbq5nKzdvY-qM7E5StNa_x7ZjR4iMuejtQHrFc1tu0Mab9jtsDXmldvnr_vMSoxDEOancdGvQx8eO6GbiQM-MtOYx5725-qqle64FD0EzGeJGXYGWxuJz1b1-3MjN60xN1lPmJeTvHiI1mqBLwXbk7O38FwNCx' },
                            { title: 'Temple Gopuram', subtitle: 'Sacred architecture', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19hHEX5Sh-gXT0waH7Q1PXHLoIgIkPN2EcPdd4Fzmk6Wu84ET7bpUe8o8DFdktoHM9F8FDRjR4MUV9yMdEkPK9Cdcom5fmbvrG3POekXm_lIvI3oQZB5wM_uDtDp179umNPefzsxGBqhZgbqXY5rLz3yO6oqGVVJ6MbEm3zwbtdEOTzy16PLJi6fP81M_8VpduaTsQ4mCvptYCZcAEq6UiSKFmiqACMcG1akQxX5YLMBeBX227x8k' },
                            { title: 'Palmyrah', subtitle: 'Our enduring spirit', img: '/images/v2/img_1.webp' },
                            { title: 'Textile', subtitle: 'The tactile beauty of silk', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2oc_6mIeB6RKnSdCt8meYJH0rve0WhR3j-Bhi-f5SsqhMQrmCCzA2VHQjrbBa_M2xOrnsMu6pKRXnJLPx2dH3HTVMnMyQ0Xk5vAHr7Q5wvfRDqwJmm4RyaNcqX3jCc0wpJbTErMI9uE7dwvqpjxMSiph9IksU6tWjVhFkIIUmYwgXkFlGVkenJ1o01TxSBnncDddbwxGAOu6G1-LJw4j45zi3t5bkzLUvgYTZ_bCBHFKzDD1lML5D' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-surface shadow-md">
                                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                </div>
                                <h3 className="font-title-md text-title-md text-primary mb-2">{item.title}</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant text-center">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-surface-container-lowest dark:bg-surface-dim w-full rounded-t-none border-t border-outline-variant/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-desktop py-section-gap max-w-container-max mx-auto">
                    {/* Brand */}
                    <div className="col-span-1">
                        <span className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim block mb-4">
                            H2F Studios
                        </span>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                            © 2026 H2F Studios. Storytelling through the lens of Jaffna heritage.
                        </p>
                    </div>
                    {/* Links */}
                    <div className="col-span-1 md:col-span-2 flex flex-wrap gap-8 md:justify-end items-start mt-8 md:mt-0">
                        <div className="flex flex-col gap-4">
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:opacity-80 transition-opacity hover:translate-y-[-2px] transition-transform duration-300" href="#">Instagram</a>
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:opacity-80 transition-opacity hover:translate-y-[-2px] transition-transform duration-300" href="#">Vimeo</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:opacity-80 transition-opacity hover:translate-y-[-2px] transition-transform duration-300" href="#">Archive</a>
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:opacity-80 transition-opacity hover:translate-y-[-2px] transition-transform duration-300" href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
