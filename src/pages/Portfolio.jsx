import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const portfolioItems = [
    { id: 1, category: 'Weddings', title: 'Agni & Silk', src: '/images/v3/portfolio_wedding.png' },
    { id: 2, category: 'Portraits', title: 'Wisdom of Jaffna', src: '/images/v3/portfolio_portrait.png' },
    { id: 3, category: 'Commercial', title: 'Culinary Heritage', src: '/images/v3/portfolio_commercial.png' },
    { id: 4, category: 'Events', title: 'Cultural Festival', src: '/images/v3/portfolio_events.png' },
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Weddings', 'Portraits', 'Commercial', 'Events'];

    const filteredItems = activeFilter === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

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

            <main className="pt-[100px] md:pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop min-h-screen">
                <div className="max-w-container-max mx-auto">
                    
                    {/* Expertise Section */}
                    <div className="mb-24 reveal">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block text-center">Our Expertise</span>
                        <h2 className="font-display-sm text-display-sm md:font-display-md md:text-display-md text-primary mb-12 text-center">Mastery in Every Frame</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-b border-outline-variant/30 py-8">
                            <div className="flex flex-col items-center text-center p-4">
                                <span className="font-label-caps text-label-caps text-primary mb-2">01 / Rituals</span>
                                <h3 className="font-title-lg text-title-lg text-on-surface">Weddings</h3>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 border-t md:border-t-0 md:border-l border-outline-variant/30">
                                <span className="font-label-caps text-label-caps text-primary mb-2">02 / Faces</span>
                                <h3 className="font-title-lg text-title-lg text-on-surface">Portraits</h3>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 border-t md:border-t-0 md:border-l border-outline-variant/30">
                                <span className="font-label-caps text-label-caps text-primary mb-2">03 / Brands</span>
                                <h3 className="font-title-lg text-title-lg text-on-surface">Commercial</h3>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 border-t md:border-t-0 md:border-l border-outline-variant/30">
                                <span className="font-label-caps text-label-caps text-primary mb-2">04 / Moments</span>
                                <h3 className="font-title-lg text-title-lg text-on-surface">Events</h3>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="reveal">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="font-display-sm text-display-sm text-primary mb-4">Stories We've Told</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Explore our curated collection of recent commissions, categorised by discipline.</p>
                            </div>
                            
                            {/* Filters */}
                            <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
                                {filters.map(filter => (
                                    <button 
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`font-label-caps text-label-caps pb-1 border-b-2 transition-colors ${
                                            activeFilter === filter 
                                            ? 'border-primary text-primary font-bold' 
                                            : 'border-transparent text-on-surface-variant hover:text-primary'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredItems.map(item => (
                                <div key={item.id} className="group relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/3] bg-surface-container">
                                    <div 
                                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${item.src}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <span className="font-label-caps text-label-caps text-primary-container mb-2">{item.category}</span>
                                        <h3 className="font-title-lg text-title-lg text-white">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
