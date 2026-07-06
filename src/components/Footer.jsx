import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-surface-container-lowest dark:bg-surface-dim w-full rounded-t-none border-t border-outline-variant/50 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
                <div className="col-span-1 flex flex-col gap-4">
                    <span className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim block mb-4">
                        H2F Studios
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                        © 2026 H2F Studios. Storytelling through the lens of Jaffna heritage.
                    </p>
                </div>
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
    );
}
