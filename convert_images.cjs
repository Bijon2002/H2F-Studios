const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/images';
const files = fs.readdirSync(dir);

async function convert() {
    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            if (file === 'logo.png') {
                continue; // keep logo as png for now (favicon use)
            }
            const name = path.parse(file).name;
            const src = path.join(dir, file);
            const dest = path.join(dir, `${name}.webp`);
            await sharp(src).webp({ quality: 80 }).toFile(dest);
            fs.unlinkSync(src); // remove old file
            console.log(`Converted ${file} to ${name}.webp`);
        }
    }
}
convert().catch(console.error);
