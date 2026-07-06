import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const motifs = [
    {
        id: 1,
        title: 'Kolam',
        desc: 'Geometric purity symbolizing prosperity at the threshold.',
        img: '/images/v3/roots_kolam.png'
    },
    {
        id: 2,
        title: 'Temple Gopuram',
        desc: 'Architectural reverence reaching towards the divine.',
        img: '/images/v3/roots_temple.png'
    },
    {
        id: 3,
        title: 'Palmyrah',
        desc: 'The tree of life, standing resilient in the northern soil.',
        img: '/images/v3/roots_palmyrah.png'
    },
    {
        id: 4,
        title: 'Textile',
        desc: 'Gold threads weaving the legacy of our ancestors.',
        img: '/images/v3/roots_textile.png'
    }
];

export default function Roots() {
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
                    
                    <div className="text-center mb-16 reveal">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block">Identity</span>
                        <h2 className="font-display-sm text-display-sm md:font-display-md md:text-display-md text-primary mb-6">Cultural Roots</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                            Our aesthetic is not arbitrary. It is drawn from the very fabric of Jaffna. These are the motifs that define our visual language.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {motifs.map((motif, index) => (
                            <div key={motif.id} className="reveal flex flex-col items-center text-center group" style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-outline-variant/30 group-hover:border-primary transition-colors duration-500 mb-6 relative">
                                    <div 
                                        className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                                        style={{ backgroundImage: `url('${motif.img}')` }}
                                    ></div>
                                </div>
                                <h3 className="font-title-lg text-title-lg text-primary mb-3">{motif.title}</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-[250px]">{motif.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
