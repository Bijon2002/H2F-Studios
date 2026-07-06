
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    useEffect(() => {
        
    }, []);

    return (
        <>
            
{/* Subtle Kolam Pattern Background */}
<div className="fixed inset-0 kolam-bg z-0 pointer-events-none"></div>
<div className="fixed inset-0 grain-overlay z-0"></div>
{/* TopNavBar */}
<header className="bg-background/90 dark:bg-background/90 backdrop-blur-md fixed top-0 w-full border-b border-outline-variant/30 flat no shadows transition-all duration-500 ease-in-out z-50">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-container-max">
<div className="font-display-sm text-display-sm tracking-tighter text-primary dark:text-primary-fixed-dim">
                H2F Studios
            </div>
{/* Desktop Nav */}
<nav className="hidden md:flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Portfolio</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">The Studio</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Cultural Roots</a>
<a className="font-label-caps text-label-caps text-primary font-bold border-b-2 border-primary pb-1" href="#">Contact</a>
</nav>
<div className="hidden md:block">
<button className="bg-primary text-on-primary font-label-caps text-label-caps py-2 px-6 rounded-DEFAULT hover:opacity-90 transition-opacity">Inquire</button>
</div>
{/* Mobile Menu Icon */}
<div className="md:hidden">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow pt-[100px] md:pt-[120px] pb-section-gap relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Left Column: Intro & Info */}
<div className="lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
<h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Let's craft your narrative.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                    Whether it's a momentous celebration in Jaffna or a quiet portrait session reflecting your heritage, we are here to document it with reverence and artistry.
                </p>
<div className="space-y-8">
{/* Contact Detail */}
<div className="flex items-start gap-4 group">
<div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
</div>
<div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">Studio Location</h3>
<p className="font-body-md text-body-md text-on-background">Jaffna, Sri Lanka<br/>Available globally for select commissions.</p>
</div>
</div>
{/* Contact Detail */}
<div className="flex items-start gap-4 group">
<div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
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
{/* Input */}
<div className="relative">
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="name">Name</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="name" name="name" required="" type="text"/>
</div>
{/* Input */}
<div className="relative">
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="email" name="email" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Select */}
<div className="relative">
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="event-type">Event / Commission Type</label>
<select className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors appearance-none" id="event-type" name="event-type">
<option disabled="" selected="" value="">Select a category</option>
<option value="wedding">Traditional Wedding</option>
<option value="portrait">Heritage Portraiture</option>
<option value="editorial">Editorial / Commercial</option>
<option value="other">Other</option>
</select>
</div>
{/* Date */}
<div className="relative">
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="date">Proposed Date</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" id="date" name="date" type="date"/>
</div>
</div>
{/* Textarea */}
<div className="relative">
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-2" htmlFor="message">Share your vision</label>
<textarea className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors resize-none" id="message" name="message" placeholder="Tell us about the significance of this moment..." required="" rows="4"></textarea>
</div>
{/* Submit Button */}
<div className="pt-4">
<button className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 w-full hover:bg-tertiary transition-colors duration-300 flex justify-center items-center gap-2 group" type="submit">
                                Submit Inquiry
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>
</div>
{/* Map Section */}
<div className="mt-section-gap">
<div className="w-full h-64 md:h-96 bg-surface-container-low border border-outline-variant/30 relative overflow-hidden group">
{/* Using a subtle placeholder image to act as the map background in this high-end aesthetic */}
<div className="bg-cover bg-center w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" data-alt="A highly detailed, minimalist stylized map of Jaffna, Sri Lanka, designed in a modern editorial style. The map uses a cream and terracotta color palette to match a premium heritage brand. Delicate gold lines represent major roads, and subtle dot patterns inspired by Kolam indicate landmarks. The overall aesthetic is clean, sophisticated, and artistic, avoiding a generic digital map look." style={{ backgroundImage: "url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAKoWEuzeGc0m-IAk4BDOZCsAIRWBqJR92CyEitQcHIG3Ks9E9AuWTzq-5n1CGDVILwkzZqjdz9RlM7IWVrCKxMLi9nCCQvJ561bZmDjAdfidvNzR9EtwzPTt6SP5ryluxuw_hnSD8k-2PdKcbIAabBlmy_6HlxqpfdByEj9HOFiZT3-NaZ8XOTnKDMJ1OSEKgBaQKXTX_xGEZ48SNnIxHK7_vqBuF5ZbFOoGGsCXNj9qyYPq9WXT3V\')" }}></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-lowest dark:bg-surface-dim w-full rounded-t-none border-t border-outline-variant/50 flat no shadows z-10 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
<div className="flex flex-col gap-4">
<span className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim">H2F Studios</span>
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 H2F Studios. Storytelling through the lens of Jaffna heritage.</p>
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
