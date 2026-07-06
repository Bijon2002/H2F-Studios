import React, { useState, useEffect } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -960 960 960" fill="currentColor">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Dynamic styles: transparent on hero, solid after scroll
    const navBg = scrolled
        ? 'bg-background/95 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm'
        : 'bg-transparent border-b border-transparent';
    const textColor = scrolled ? 'text-on-surface-variant' : 'text-white/80';
    const btnStyle = scrolled
        ? 'bg-primary text-on-primary hover:bg-tertiary'
        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20';

    return (
        <>
            {/* Desktop Nav — hidden below lg (1024px) */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 hidden lg:block ${navBg}`}>
                <div className="flex justify-between items-center w-full px-8 xl:px-margin-desktop py-5 mx-auto max-w-container-max">
                    <button onClick={() => scrollTo('hero')} className="transition-opacity duration-300 hover:opacity-80">
                        <img src="/images/backliog.png" alt="H2F Studios" className="h-10 xl:h-12 w-auto object-contain" />
                    </button>
                    <nav className="flex gap-6 xl:gap-10 items-center">
                        <button onClick={() => scrollTo('studio')} className={`font-label-caps text-label-caps transition-colors duration-300 hover:text-[#D4AF37] ${textColor}`}>The Studio</button>
                        <button onClick={() => scrollTo('portfolio')} className={`font-label-caps text-label-caps transition-colors duration-300 hover:text-[#D4AF37] ${textColor}`}>Portfolio</button>
                        <button onClick={() => scrollTo('roots')} className={`font-label-caps text-label-caps transition-colors duration-300 hover:text-[#D4AF37] ${textColor}`}>Cultural Roots</button>
                        <button onClick={() => scrollTo('contact')} className={`font-label-caps text-label-caps transition-colors duration-300 hover:text-[#D4AF37] ${textColor}`}>Contact</button>
                    </nav>
                    <button onClick={() => scrollTo('contact')} className={`font-label-caps text-label-caps px-7 py-3 transition-all duration-300 ${btnStyle}`}>
                        Inquire
                    </button>
                </div>
            </header>

            {/* Mobile + Tablet Nav — visible below lg */}
            <header className={`fixed top-0 w-full z-50 py-4 px-5 sm:px-8 lg:hidden flex justify-between items-center transition-all duration-500 ${navBg}`}>
                <button onClick={() => scrollTo('hero')} className="transition-opacity duration-300 hover:opacity-80">
                    <img src="/images/backliog.png" alt="H2F Studios" className="h-8 sm:h-9 w-auto object-contain" />
                </button>
                <div className="flex items-center gap-4">
                    <button onClick={() => scrollTo('contact')} className={`hidden sm:block font-label-caps text-label-caps px-5 py-2.5 transition-all duration-300 ${btnStyle}`}>
                        Inquire
                    </button>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-1 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8 sm:gap-10 pt-16">
                    <button onClick={() => scrollTo('studio')} className="font-display-sm text-[24px] sm:text-[30px] text-primary hover:text-tertiary transition-colors">The Studio</button>
                    <button onClick={() => scrollTo('portfolio')} className="font-display-sm text-[24px] sm:text-[30px] text-primary hover:text-tertiary transition-colors">Portfolio</button>
                    <button onClick={() => scrollTo('roots')} className="font-display-sm text-[24px] sm:text-[30px] text-primary hover:text-tertiary transition-colors">Cultural Roots</button>
                    <button onClick={() => scrollTo('contact')} className="font-display-sm text-[24px] sm:text-[30px] text-primary hover:text-tertiary transition-colors">Contact</button>
                    <div className="w-12 h-px bg-outline-variant/30 my-2"></div>
                    <a href="tel:0720172910" className="font-body-md text-body-md text-on-surface-variant">Call: 0720172910</a>
                    <button onClick={() => scrollTo('contact')} className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 sm:hidden">Inquire</button>
                </div>
            )}
        </>
    );
}
