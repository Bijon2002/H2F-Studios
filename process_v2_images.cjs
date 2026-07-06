const fs = require('fs');
const https = require('https');
const path = require('path');
const sharp = require('sharp');

const files = ['src/home.html', 'src/contact.html'];
const urlRegex = /(?:src|url)\s*=\s*['"]?(https?:\/\/[^\s'"\\)]+)['"]?/gi;

if (!fs.existsSync('public/images/v2')) {
    fs.mkdirSync('public/images/v2', { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(resolve);
            });
        }).on('error', function(err) {
            fs.unlink(dest, () => {});
            reject(err.message);
        });
    });
}

async function processUrls() {
    let i = 1;
    let promises = [];
    
    for (const file of files) {
        let html = fs.readFileSync(file, 'utf-8');
        let newHtml = html;
        let match;
        
        while ((match = urlRegex.exec(html)) !== null) {
            const url = match[1];
            if (url.includes('cdn.tailwindcss.com') || url.includes('fonts.googleapis') || url.includes('fonts.gstatic') || url.includes('cdnjs.cloudflare.com')) continue;
            
            let ext = 'jpg';
            if (url.includes('.png')) ext = 'png';
            if (url.includes('.svg')) ext = 'svg';
            if (url.includes('.webp')) ext = 'webp';
            if (url.includes('.mp4')) ext = 'mp4';

            const filename = `img_${i}.${ext}`;
            const dest = path.join('public/images/v2', filename);
            console.log('Downloading', url, 'to', filename);
            
            // Replace globally in this file
            newHtml = newHtml.split(url).join(`/images/v2/${filename}`);
            
            promises.push(download(url, dest));
            i++;
        }
        fs.writeFileSync(file, newHtml);
    }
    
    await Promise.all(promises);
    console.log('Downloaded all new images.');

    // Now convert to WebP
    const dir = 'public/images/v2';
    const downloadedFiles = fs.readdirSync(dir);
    
    for (const file of downloadedFiles) {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const name = path.parse(file).name;
            const src = path.join(dir, file);
            const dest = path.join(dir, `${name}.webp`);
            await sharp(src).webp({ quality: 80 }).toFile(dest);
            fs.unlinkSync(src);
            console.log(`Converted ${file} to ${name}.webp`);
        }
    }
    
    // Update HTML files with .webp
    for (const file of files) {
        let html = fs.readFileSync(file, 'utf-8');
        html = html.replace(/\/images\/v2\/([a-zA-Z0-9_]+)\.jpg/g, '/images/v2/$1.webp');
        html = html.replace(/\/images\/v2\/([a-zA-Z0-9_]+)\.png/g, '/images/v2/$1.webp');
        fs.writeFileSync(file, html);
    }
    
    console.log('Image processing complete.');
}

processUrls().catch(console.error);
