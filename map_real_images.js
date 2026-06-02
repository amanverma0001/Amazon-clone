const fs = require('fs');
const path = require('path');

// Usage: node map_real_images.js
// Scans ./images/real for image files and writes ./images/images_map.json grouped by category

const realDir = path.join(__dirname, 'images', 'real');
const outFile = path.join(__dirname, 'images', 'images_map.json');

if (!fs.existsSync(realDir)) {
    console.error('Directory not found:', realDir);
    console.error('Create a folder named images/real and place your product image files there.');
    process.exit(1);
}

const allowed = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];
const files = fs.readdirSync(realDir)
    .filter(f => allowed.includes(path.extname(f).toLowerCase()))
    .sort();

if (files.length === 0) {
    console.error('No image files found in', realDir);
    process.exit(1);
}

// Group images by category prefix
const mapping = {
    "Electronics": [],
    "Fitness": [],
    "Home & Kitchen": [],
    "Fashion": [],
    "Beauty": []
};

files.forEach(f => {
    const relPath = path.posix.join('images', 'real', f);
    if (f.startsWith('electronics_')) {
        mapping["Electronics"].push(relPath);
    } else if (f.startsWith('fitness_')) {
        mapping["Fitness"].push(relPath);
    } else if (f.startsWith('home_')) {
        mapping["Home & Kitchen"].push(relPath);
    } else if (f.startsWith('fashion_')) {
        mapping["Fashion"].push(relPath);
    } else if (f.startsWith('beauty_')) {
        mapping["Beauty"].push(relPath);
    }
});

fs.writeFileSync(outFile, JSON.stringify(mapping, null, 2));
console.log('Wrote category-grouped map to', outFile);