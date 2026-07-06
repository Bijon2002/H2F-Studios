import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
  </svg>
);

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => currentPath === path ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary transition-colors duration-300";

    return (
        <>
            {/* TopNavBar */}
            <header className="fixed top-0 w-full z-40 bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-500 ease-in-out hidden md:block" id="mainNav">
                <div className="flex justify-between items-center w-full px-margin-desktop py-4 mx-auto max-w-container-max">
                    <Link className="font-display-sm text-display-sm tracking-tighter text-primary dark:text-primary-fixed-dim" to="/">
                        H2F Studios
                    </Link>
                    <nav className="flex gap-8 items-center font-label-caps text-label-caps">
                        <Link className={`${isActive('/studio')} hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out`} to="/studio">The Studio</Link>
                        <Link className={`${isActive('/portfolio')} hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out`} to="/portfolio">Portfolio</Link>
                        <Link className={`${isActive('/roots')} hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out`} to="/roots">Cultural Roots</Link>
                        <Link className={`${isActive('/contact')} hover:bg-surface-container-low/50 transition-all duration-500 ease-in-out`} to="/contact">Contact</Link>
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
        </>
    );
}
