const fs = require('fs');

['src/pages/Home.jsx', 'src/pages/Contact.jsx'].forEach(file => {
    let jsx = fs.readFileSync(file, 'utf8');
    
    // Fix fontVariationSettings string error
    // It's currently: fontVariationSettings: ''FILL' 0'
    // We want it to be: fontVariationSettings: "'FILL' 0"
    jsx = jsx.replace(/fontVariationSettings: ''FILL' 0'/g, 'fontVariationSettings: "\\'FILL\\' 0"');
    
    // Fix other common ones
    jsx = jsx.replace(/autoplay=""/gi, 'autoPlay');
    jsx = jsx.replace(/playsinline=""/gi, 'playsInline');
    jsx = jsx.replace(/loop=""/gi, 'loop');
    jsx = jsx.replace(/muted=""/gi, 'muted');
    
    fs.writeFileSync(file, jsx);
});
