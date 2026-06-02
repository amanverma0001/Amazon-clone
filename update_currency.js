const fs = require('fs');

let appJs = fs.readFileSync('c:\\Users\\Amandeep_\\Desktop\\abhinav\\app.js', 'utf8');
let amzHtml = fs.readFileSync('c:\\Users\\Amandeep_\\Desktop\\abhinav\\amazon.html', 'utf8');

// 1. Change PRODUCTS_PER_CATEGORY to 500 (2500 products total)
appJs = appJs.replace(/const PRODUCTS_PER_CATEGORY = 400;/g, 'const PRODUCTS_PER_CATEGORY = 500;');

// 2. Change the math for the price to scale to INR ~83x
const oldPriceMath = `    const price = parseFloat((29.99 + ((i * 17.31 + catIdx * 53.7) % 920)).toFixed(2));
    const origPrice = i % 3 === 0 ? parseFloat((price * (1.15 + (i % 5) * 0.05)).toFixed(2)) : null;`;
const newPriceMath = `    const price = Math.floor(83 * (29.99 + ((i * 17.31 + catIdx * 53.7) % 920))) + 0.99;
    const origPrice = i % 3 === 0 ? Math.floor(price * (1.15 + (i % 5) * 0.05)) + 0.99 : null;`;
appJs = appJs.replace(oldPriceMath, newPriceMath);

// 3. Replace the $ symbol with ₹ in strings, safely
appJs = appJs.replace(/class="original-price">\$(\$)?/g, 'class="original-price">₹$1');
appJs = appJs.replace(/<span class="price-currency">\$/g, '<span class="price-currency">₹');
appJs = appJs.replace(/margin-bottom: 5px;">\$(\$)?/g, 'margin-bottom: 5px;">₹$1');
appJs = appJs.replace(/font-weight: 500;">\$(\$)?/g, 'font-weight: 500;">₹$1');
appJs = appJs.replace(/balLabel\.textContent = `\$(\$)?/g, 'balLabel.textContent = `₹$1');
appJs = appJs.replace(/credited \$(\$)?/g, 'credited ₹$1');
appJs = appJs.replace(/margin-bottom: 10px;">\$(\$)?/g, 'margin-bottom: 10px;">₹$1');
appJs = appJs.replace(/class="quickview-price">\$(\$)?/g, 'class="quickview-price">₹$1');
appJs = appJs.replace(/color: #2e7d32;">\$(\$)?/g, 'color: #2e7d32;">₹$1');
appJs = appJs.replace(/textContent = "\$0\.00"/g, 'textContent = "₹0.00"');
appJs = appJs.replace(/class="cart-item-price">\$(\$)?/g, 'class="cart-item-price">₹$1');
appJs = appJs.replace(/textContent = `\$(\$)?/g, 'textContent = `₹$1');

// 4. Update the tracking mock price
appJs = appJs.replace(/price: 149\.99,/g, 'price: 12499.00,');

// 5. Replace in amazon.html
amzHtml = amzHtml.replace(/>\$0\.00</g, '>₹0.00<');
amzHtml = amzHtml.replace(/\(claims \$50\)/g, '(claims ₹5000)');
amzHtml = amzHtml.replace(/\(claims \$100\)/g, '(claims ₹10000)');
amzHtml = amzHtml.replace(/AMZ-GIFT-50/g, 'AMZ-GIFT-5000');
amzHtml = amzHtml.replace(/AMZ-GIFT-100/g, 'AMZ-GIFT-10000');
amzHtml = amzHtml.replace(/Showing 2000 premium deals/g, 'Showing 2500 premium deals');

// Also update the app.js cache buster
amzHtml = amzHtml.replace(/app\.js\?v=2/g, 'app.js?v=3');

fs.writeFileSync('c:\\Users\\Amandeep_\\Desktop\\abhinav\\app.js', appJs);
fs.writeFileSync('c:\\Users\\Amandeep_\\Desktop\\abhinav\\amazon.html', amzHtml);
fs.writeFileSync('c:\\Users\\Amandeep_\\Desktop\\abhinav\\index.html', amzHtml);
console.log('Update complete!');
