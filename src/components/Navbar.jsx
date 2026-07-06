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
            {/* Desktop Nav — hidden below lg (1024px) */}
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 transition-all duration-500 hidden lg:block">
                <div className="flex justify-between items-center w-full px-8 xl:px-margin-desktop py-5 mx-auto max-w-container-max">
                    <button onClick={() => scrollTo('hero')} className="font-display-sm text-[28px] xl:text-[32px] tracking-[-0.03em] text-primary">
                        H2F Studios
                    </button>
                    <nav className="flex gap-6 xl:gap-10 items-center">
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

            {/* Mobile + Tablet Nav — visible below lg */}
            <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-outline-variant/20 py-4 px-5 sm:px-8 lg:hidden flex justify-between items-center">
                <button onClick={() => scrollTo('hero')} className="font-display-sm text-[22px] sm:text-[26px] tracking-[-0.03em] text-primary">
                    H2F Studios
                </button>
                <div className="flex items-center gap-4">
                    {/* Show Inquire on tablet */}
                    <button onClick={() => scrollTo('contact')} className="hidden sm:block bg-primary text-on-primary font-label-caps text-label-caps px-5 py-2.5 hover:bg-tertiary transition-colors">
                        Inquire
                    </button>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary p-1">
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
