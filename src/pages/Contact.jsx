import React, { useEffect } from 'react';
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

export default function Contact() {
    useEffect(() => {
        // Any interactions
    }, []);

    return (
        <>
            {/* Subtle Kolam Pattern Background */}
            <div className="fixed inset-0 kolam-bg z-0 pointer-events-none"></div>
            <div className="fixed inset-0 grain-overlay z-0"></div>

            {/* TopNavBar */}
            <header className="bg-background/90 dark:bg-background/90 backdrop-blur-md fixed top-0 w-full border-b border-outline-variant/30 flat no shadows transition-all duration-500 ease-in-out z-50">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-container-max">
                    <Link to="/" className="font-display-sm text-display-sm tracking-tighter text-primary dark:text-primary-fixed-dim">
                        H2F Studios
                    </Link>
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8">
                        <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" to="/#portfolio">Portfolio</Link>
                        <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" to="/#about">The Studio</Link>
                        <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" to="/#roots">Cultural Roots</Link>
                        <Link className="font-label-caps text-label-caps text-primary font-bold border-b-2 border-primary pb-1" to="/contact">Contact</Link>
                    </nav>
                    <div className="hidden md:block">
                        <Link to="/contact" className="bg-primary text-on-primary font-label-caps text-label-caps py-2 px-6 rounded-DEFAULT hover:opacity-90 transition-opacity">Inquire</Link>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <span className="text-primary cursor-pointer"><MenuIcon /></span>
                    </div>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="flex-grow pt-[100px] md:pt-[120px] pb-section-gap relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    
                    {/* Left Column: Intro & Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
                        <span className="font-label-caps text-label-caps text-primary-container mb-4 block">Contact</span>
                        <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Let's Tell Your Story</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                            Reach out for bookings, collaborations, or a conversation about your next shoot.
                        </p>

                        <div className="space-y-8">
                            {/* Contact Detail */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-75.5-184.5T480-812q-89 0-164.5 75.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">Studio Location</h3>
                                    <p className="font-body-md text-body-md text-on-background">Jaffna, Sri Lanka<br/>Available globally for select commissions.</p>
                                </div>
                            </div>
                            
                            {/* Contact Detail */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
                                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">Direct Inquiries</h3>
                                    <p className="font-body-md text-body-md text-on-background">hello@h2fstudios.com</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-8 border-t border-outline-variant/30 mt-8">
                                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">Connect</h3>
                                <div className="flex gap-4">
                                    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Instagram</a>
                                    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Facebook</a>
                                    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">WhatsApp</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form */}
                    <div className="lg:col-span-7 relative">
                        <div className="bg-surface p-8 md:p-12 border border-outline-variant/50 relative shadow-[0_10px_30px_rgba(149,51,55,0.05)]">
                            {/* Gold accent line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                            
                            <h2 className="font-title-md text-title-md text-primary mb-8">Booking Inquiry</h2>
                            
                            <form action="https://formspree.io/f/placeholder" className="space-y-6" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="relative">
                                        <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="name">Name</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="name" name="name" required="" type="text"/>
                                    </div>
                                    {/* Email / Phone */}
                                    <div className="relative">
                                        <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="contact">Email / Phone</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="contact" name="contact" required="" type="text"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Event Type */}
                                    <div className="relative">
                                        <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="event-type">Event Type</label>
                                        <select className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors appearance-none" id="event-type" name="event-type">
                                            <option disabled="" selected="" value="">Select a category</option>
                                            <option value="wedding">Traditional Wedding</option>
                                            <option value="portrait">Heritage Portraiture</option>
                                            <option value="editorial">Editorial / Commercial</option>
                                            <option value="event">Event</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    {/* Date */}
                                    <div className="relative">
                                        <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="date">Date</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="date" name="date" type="date"/>
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="relative">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors resize-none" id="message" name="message" placeholder="Tell us about the significance of this moment..." required="" rows="4"></textarea>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 w-full hover:bg-tertiary transition-colors duration-300 flex justify-center items-center gap-2 group" type="submit">
                                        Inquire
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            <ArrowForwardIcon />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-section-gap">
                    <div className="w-full h-64 md:h-96 bg-surface-container-low border border-outline-variant/30 relative overflow-hidden group">
                        <div className="bg-cover bg-center w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKoWEuzeGc0m-IAk4BDOZCsAIRWBqJR92CyEitQcHIG3Ks9E9AuWTzq-5n1CGDVILwkzZqjdz9RlM7IWVrCKxMLi9nCCQvJ561bZmDjAdfidvNzR9EtwzPTt6SP5ryluxuw_hnSD8k-2PdKcbIAabBlmy_6HlxqpfdByEj9HOFiZT3-NaZ8XOTnKDMJ1OSEKgBaQKXTX_xGEZ48SNnIxHK7_vqBuF5ZbFOoGGsCXNj9qyYPq9WXT3V')" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-75.5-184.5T480-812q-89 0-164.5 75.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-surface-container-lowest dark:bg-surface-dim w-full rounded-t-none border-t border-outline-variant/50 flat no shadows z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
                    <div className="flex flex-col gap-4">
                        <span className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim">H2F Studios</span>
                        <p className="font-body-md text-body-md text-on-surface-variant">© 2026 H2F Studios. Storytelling through the lens of Jaffna heritage.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-label-caps text-label-caps text-on-surface-variant">Explore</span>
                        <nav className="flex flex-col gap-2">
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:translate-y-[-2px] transition-transform duration-300" href="#">Instagram</a>
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:translate-y-[-2px] transition-transform duration-300" href="#">Vimeo</a>
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:translate-y-[-2px] transition-transform duration-300" href="#">Archive</a>
                            <a className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary hover:translate-y-[-2px] transition-transform duration-300" href="#">Privacy</a>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4 items-start md:items-end">
                        <div className="w-16 h-1 border-t-2 border-primary/30"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
