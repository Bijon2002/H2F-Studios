const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const headContent = `
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/images/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>H2F Studios | Wedding & Event Photography in Jaffna</title>
    <meta name="description" content="Capture your special moments with H2F Studios, the premier wedding and event photography studio in Jaffna. Book your traditional wedding shoot today." />
    <link rel="canonical" href="https://h2fstudios.com/" />

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "PhotographyBusiness",
      "name": "H2F Studios",
      "image": "https://h2fstudios.com/images/logo.png",
      "description": "Premium wedding and event photography business in Jaffna, specializing in traditional Tamil weddings.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jaffna Town",
        "addressLocality": "Jaffna",
        "addressRegion": "Northern Province",
        "postalCode": "40000",
        "addressCountry": "LK"
      },
      "telephone": "+94 77 000 0000",
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00",
      "url": "https://h2fstudios.com/"
    }
    </script>
`;

html = html.replace(/<head>[\s\S]*?<title>H2F Studios - Traditionally Timeless<\/title>/i, `<head>\n${headContent}`);
fs.writeFileSync('index.html', html);
console.log('Updated index.html SEO tags');
