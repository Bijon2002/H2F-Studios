const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
let newHead = fs.readFileSync('src/new_head.txt', 'utf8');

const tailwindConfigMatch = newHead.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
const styleMatch = newHead.match(/<style>([\s\S]*?)<\/style>/);
const fontMatch = newHead.match(/<link href="https:\/\/fonts.googleapis.com\/css2\?family=[^"]*" rel="stylesheet"\/>/g);

if (tailwindConfigMatch && styleMatch) {
    indexHtml = indexHtml.replace(/<script id="tailwind-config">([\s\S]*?)<\/script>/, `<script id="tailwind-config">${tailwindConfigMatch[1]}</script>`);
    indexHtml = indexHtml.replace(/<style>([\s\S]*?)<\/style>/, `<style>${styleMatch[1]}</style>`);
}
if (fontMatch) {
    // just append fonts before tailwind
    indexHtml = indexHtml.replace(/<!-- Tailwind CSS -->/, `${fontMatch.join('\n')}\n<!-- Tailwind CSS -->`);
}
fs.writeFileSync('index.html', indexHtml);

// 2. Helper to convert HTML body to JSX
function htmlToJsx(htmlBody) {
    let jsx = htmlBody;
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
    jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
    jsx = jsx.replace(/viewbox=/gi, 'viewBox=');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
    jsx = jsx.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
    jsx = jsx.replace(/<source([^>]*[^\/])>/g, '<source$1 />');

    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim() !== '');
        const styleProps = styles.map(s => {
            let [key, ...valParts] = s.split(':');
            if(!valParts.length) return '';
            let val = valParts.join(':').trim();
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            return `${key}: '${val}'`;
        }).filter(Boolean);
        return `style={{ ${styleProps.join(', ')} }}`;
    });
    
    // Fix scripts (remove them for React, they are usually logic we need to port)
    const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
    let scripts = '';
    jsx = jsx.replace(scriptRegex, (match, code) => {
        scripts += code + '\n';
        return '';
    });
    
    // Convert <a> tags referencing pages to <Link> ? Actually let's just keep <a> for now or convert to Link.
    // We'll leave <a> and just use standard anchor tags for simplicity, or convert to Link if they are internal.
    
    return { jsx, scripts };
}

// 3. Create Pages
if (!fs.existsSync('src/pages')) {
    fs.mkdirSync('src/pages');
}

const homeHtml = fs.readFileSync('src/home.html', 'utf8');
const homeBodyMatch = homeHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let homeContent = homeBodyMatch ? homeBodyMatch[1] : homeHtml;
let { jsx: homeJsx, scripts: homeScripts } = htmlToJsx(homeContent);

fs.writeFileSync('src/pages/Home.jsx', `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        ${homeScripts}
    }, []);

    return (
        <>
            ${homeJsx}
        </>
    );
}
`);

const contactHtml = fs.readFileSync('src/contact.html', 'utf8');
const contactBodyMatch = contactHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let contactContent = contactBodyMatch ? contactBodyMatch[1] : contactHtml;
let { jsx: contactJsx, scripts: contactScripts } = htmlToJsx(contactContent);

fs.writeFileSync('src/pages/Contact.jsx', `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    useEffect(() => {
        ${contactScripts}
    }, []);

    return (
        <>
            ${contactJsx}
        </>
    );
}
`);

// 4. Update App.jsx
fs.writeFileSync('src/App.jsx', `
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
`);

// 5. Update main.jsx
let mainJsx = fs.readFileSync('src/main.jsx', 'utf8');
if (!mainJsx.includes('BrowserRouter')) {
    mainJsx = `import { BrowserRouter } from 'react-router-dom';\n` + mainJsx;
    mainJsx = mainJsx.replace(/<App \/>/, `<BrowserRouter><App /></BrowserRouter>`);
    fs.writeFileSync('src/main.jsx', mainJsx);
}

console.log('Setup complete.');
