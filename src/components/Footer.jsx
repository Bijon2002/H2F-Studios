import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-surface-container-lowest dark:bg-surface-dim w-full border-t border-outline-variant/50 relative z-10">
            <div className="px-5 sm:px-8 lg:px-margin-desktop py-16 sm:py-20 lg:py-section-gap max-w-container-max mx-auto">
                {/* Top row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <span className="font-poppins font-bold text-[28px] sm:text-[32px] text-primary dark:text-primary-fixed-dim block mb-4">
                            H2F STUDIOS
                        </span>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant max-w-xs leading-relaxed">
                            Storytelling through the lens of Jaffna heritage.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <span className="font-label-caps text-[11px] text-on-surface-variant tracking-[0.1em] block mb-4">Contact</span>
                        <a className="font-body-md text-[14px] sm:text-body-md text-primary font-bold hover:opacity-80 transition-opacity block mb-2" href="tel:0720172910">
                            Call for shoots: 0720172910
                        </a>
                        <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant">hello@h2fstudios.com</p>
                    </div>

                    {/* Explore */}
                    <div>
                        <span className="font-label-caps text-[11px] text-on-surface-variant tracking-[0.1em] block mb-4">Explore</span>
                        <div className="flex flex-col gap-2.5">
                            <a className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Instagram</a>
                            <a className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Vimeo</a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <span className="font-label-caps text-[11px] text-on-surface-variant tracking-[0.1em] block mb-4">Legal</span>
                        <div className="flex flex-col gap-2.5">
                            <a className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Archive</a>
                            <a className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 sm:mt-16 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant/70">
                        © 2026 H2F Studios. All rights reserved.
                    </p>
                    <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant/70">
                        Created by <a href="https://bijonn.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">H2F Solutions</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
