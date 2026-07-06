const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Replace .jpg with .webp
jsx = jsx.replace(/\.jpg/g, '.webp');

// Replace image_1.webp with logo.png
jsx = jsx.replace(/image_1\.webp/g, 'logo.png');

// Add alt text and lazy loading
// Logo
jsx = jsx.replace(/alt="H2F Studios Logo"/g, 'alt="H2F Studios Logo - Wedding Photographer Jaffna"');

// Other images
jsx = jsx.replace(/data-alt="([^"]*)" src="\/images\/image_3.webp"/g, 'alt="Jaffna traditional wedding photography by H2F Studios - Temple Ceremony" loading="lazy" src="/images/image_3.webp"');
jsx = jsx.replace(/data-alt="([^"]*)" src="\/images\/image_4.webp"/g, 'alt="Beautiful Sri Lankan Tamil bride getting ready in Jaffna" loading="lazy" src="/images/image_4.webp"');
jsx = jsx.replace(/data-alt="([^"]*)" src="\/images\/image_5.webp"/g, 'alt="Cinematic couple portrait at Jaffna fort by H2F Studios" loading="lazy" src="/images/image_5.webp"');
jsx = jsx.replace(/data-alt="([^"]*)" src="\/images\/image_6.webp"/g, 'alt="Candid wedding moments captured by Jaffna photo studio" loading="lazy" src="/images/image_6.webp"');

// Replace H1
jsx = jsx.replace(
    /<h1 className="([^"]*)">H2F Studios<\/h1>/,
    `<h1 className="$1">\n    H2F Studios\n    <span className="block text-3xl md:text-5xl mt-2 md:mt-4 font-normal tracking-wide">Wedding Photographer Jaffna</span>\n</h1>`
);

// Fix autoplay etc in video
jsx = jsx.replace(/autoplay=""/g, 'autoPlay');
jsx = jsx.replace(/loop=""/g, 'loop');
jsx = jsx.replace(/muted=""/g, 'muted');
jsx = jsx.replace(/playsinline=""/g, 'playsInline');
jsx = jsx.replace(/playsinline/g, 'playsInline'); // just in case

// Write back
fs.writeFileSync('src/App.jsx', jsx);
console.log('App.jsx updated with SEO and WebP fixes.');
