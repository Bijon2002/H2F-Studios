import React, { useState } from 'react';

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

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Desktop Nav */}
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 transition-all duration-500 hidden md:block">
                <div className="flex justify-between items-center w-full px-margin-desktop py-5 mx-auto max-w-container-max">
                    <button onClick={() => scrollTo('hero')} className="font-display-sm text-[32px] tracking-[-0.03em] text-primary">
                        H2F Studios
                    </button>
                    <nav className="flex gap-10 items-center">
                        <button onClick={() => scrollTo('studio')} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">The Studio</button>
                        <button onClick={() => scrollTo('portfolio')} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Portfolio</button>
                        <button onClick={() => scrollTo('roots')} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Cultural Roots</button>
                        <button onClick={() => scrollTo('contact')} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Contact</button>
                    </nav>
                    <button onClick={() => scrollTo('contact')} className="bg-primary text-on-primary font-label-caps text-label-caps px-7 py-3 hover:bg-tertiary transition-colors duration-300">
                        Inquire
                    </button>
                </div>
            </header>

            {/* Mobile Nav */}
            <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-outline-variant/20 py-4 px-margin-mobile md:hidden flex justify-between items-center">
                <button onClick={() => scrollTo('hero')} className="font-display-sm text-[24px] tracking-[-0.03em] text-primary">
                    H2F
                </button>
                <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary p-1">
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-10 pt-20">
                    <button onClick={() => scrollTo('studio')} className="font-display-sm text-[28px] text-primary hover:text-tertiary transition-colors">The Studio</button>
                    <button onClick={() => scrollTo('portfolio')} className="font-display-sm text-[28px] text-primary hover:text-tertiary transition-colors">Portfolio</button>
                    <button onClick={() => scrollTo('roots')} className="font-display-sm text-[28px] text-primary hover:text-tertiary transition-colors">Cultural Roots</button>
                    <button onClick={() => scrollTo('contact')} className="font-display-sm text-[28px] text-primary hover:text-tertiary transition-colors">Contact</button>
                    <button onClick={() => scrollTo('contact')} className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 mt-4">Inquire</button>
                </div>
            )}
        </>
    );
}
