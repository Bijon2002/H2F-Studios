const fs = require('fs');

['src/pages/Home.jsx', 'src/pages/Contact.jsx'].forEach(file => {
    let jsx = fs.readFileSync(file, 'utf8');
    
    // Fix fontVariationSettings string error
    jsx = jsx.replace(/fontVariationSettings:\s*''FILL'\s*0'/g, 'fontVariationSettings: "\\'FILL\\' 0"');
    
    // Fix other common ones
    jsx = jsx.replace(/autoplay=""/gi, 'autoPlay');
    jsx = jsx.replace(/playsinline=""/gi, 'playsInline');
    jsx = jsx.replace(/loop=""/gi, 'loop');
    jsx = jsx.replace(/muted=""/gi, 'muted');
    
    fs.writeFileSync(file, jsx);
});
