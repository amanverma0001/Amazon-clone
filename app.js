// ================= DYNAMIC 1000 PRODUCT PROCEDURAL GENERATION ENGINE =================

const CATEGORIES = ["Electronics", "Fitness", "Home & Kitchen", "Fashion", "Beauty"];

const BRANDS = {
  "Electronics": ["Sony", "Apple", "Bose", "Samsung", "Razer", "Logitech", "Dell", "HP", "Anker", "Canon", "GoPro", "ASUS", "Sennheiser", "JBL", "Audio-Technica"],
  "Fitness": ["Garmin", "Fitbit", "Nike", "Adidas", "Under Armour", "Bowflex", "Gaiam", "Hydro Flask", "Theragun", "Oakley", "Puma", "Reebok", "Spalding", "Wilson"],
  "Home & Kitchen": ["Keurig", "Dyson", "Herman Miller", "Ninja", "Philips", "Breville", "Instant Pot", "Cuisinart", "iRobot", "Honeywell", "KitchenAid", "T-fal"],
  "Fashion": ["Levi's", "Tommy Hilfiger", "Calvin Klein", "Patagonia", "The North Face", "Columbia", "Zara", "H&M", "Ralph Lauren", "Lululemon", "Lacoste"],
  "Beauty": ["The Ordinary", "CeraVe", "L'Oreal", "Estee Lauder", "Clinique", "Neutrogena", "Olay", "Burt's Bees", "Shiseido", "La Roche-Posay", "Kiehl's"]
};

const NOUNS = {
  "Electronics": ["Wireless Headphones", "Active Noise Cancelling Earbuds", "27-inch 4K Monitor", "Mechanical Gaming Keyboard", "4K Action Camera", "Bluetooth Smart Speaker", "Triple-Device Power Dock", "USB-C Fast Charger", "Portable SSD Drive", "Vlogging Ring Light"],
  "Fitness": ["GPS Smartwatch", "High-Density Yoga Mat", "Adjustable Dumbbell Set", "Vacuum Insulated Gym Bottle", "Deep Tissue Massage Gun", "Aerodynamic Cycling Helmet", "Body Analyzer Smart Scale", "Weighted Jump Rope", "Resistance Bands Set", "Running Waist Pack"],
  "Home & Kitchen": ["Precision Espresso Machine", "LiDAR Robot Vacuum", "Ergonomic Office Chair", "Digital Air Fryer", "High-Speed Smoothie Blender", "Solar LED Path Lights", "Smart Programmable Thermostat", "Precision Sous Vide Circulator", "Non-Stick Cookware Set", "Electric Milk Frother"],
  "Fashion": ["Weatherproof Rain Jacket", "Knit Extrafine Merino Scarf", "Classic Cotton Casual Shirt", "Polarized Sport Sunglasses", "Lightweight Canvas Backpack", "Stretch Denim Jeans", "Casual Leather Belt", "Athletic Crew Socks", "Slim Fit Chino Pants", "Merino Wool Sweater"],
  "Beauty": ["Hyaluronic Acid Serum", "Argan & Tea Tree Hair Oil", "Shea Butter Facial Cream", "18-Color Eyeshadow Palette", "Bamboo Makeup Brush Set", "Hydrating Lip Balm", "Gentle Foaming Cleanser", "Mineral Sunscreen SPF 50", "Exfoliating Face Scrub", "Nourishing Body Wash"]
};

const ADJECTIVES = ["Premium", "Ultra", "Elite", "Pro", "Series X", "Classic", "V2", "Supreme", "Stealth", "NextGen", "Smart", "Eco", "Hybrid", "Precision", "Professional", "Limited Edition", "Signature", "Advanced", "Performance", "Glow"];

const IMAGES = {
  "Electronics": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=400&q=80"
  ],
  "Fitness": [
    "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80"
  ],
  "Home & Kitchen": [
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80"
  ],
  "Fashion": [
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=400&q=80"
  ],
  "Beauty": [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80"
  ]
};

const SPEC_KEYS = {
  "Electronics": ["Battery Life", "Connectivity", "Dimensions", "Port Type", "Weight"],
  "Fitness": ["Material", "Dimensions", "Weight Support", "Smart Features", "Waterproofing"],
  "Home & Kitchen": ["Power", "Capacity", "Material", "Smart Home Link", "Weight"],
  "Fashion": ["Fabric Material", "Size Options", "Weatherproofing", "Care Instructions", "Weight"],
  "Beauty": ["Active Ingredients", "Skin Type Compatibility", "Volume", "Scent Profile", "Free From"]
};

const SPEC_VALUES = {
  "Battery Life": ["40 Hours", "50 Hours", "14 Days", "8 Hours (continuous)", "10 Hours"],
  "Connectivity": ["Bluetooth 5.2", "Wi-Fi Dual-Band", "USB-C Direct", "Bluetooth 5.0 Auto", "3.5mm Analog Jack"],
  "Dimensions": ["12 x 8 x 2 inches", "72 x 24 inches", "27-inch widescreen", "10 x 10 x 14 inches", "Standard Compact"],
  "Port Type": ["USB Type-C Fast", "Lightning Port", "Wireless Charging standard", "AC Wall Outlet", "Micro USB"],
  "Weight": ["250 grams", "280 grams", "2.4 kg", "15 lbs", "1.2 lbs"],
  "Material": ["Aerospace Aluminum & Glass", "Biodegradable Premium TPE", "100% Extrafine Merino Wool", "Double-Wall Stainless Steel", "Reinforced Mesh & Nylon"],
  "Weight Support": ["Up to 300 lbs", "Up to 400 lbs", "Up to 52.5 lbs standard", "Universal Fit", "Up to 150 kg"],
  "Smart Features": ["LiDAR 3D Laser mapping", "Continuous Heart Rate & SpO2 tracker", "16 Million RGB colors", "Programmable Schedules", "Alexa/Google home voice controls"],
  "Waterproofing": ["IPX7 fully waterproof", "IP65 certified weather resistant", "5ATM swimproof up to 50m", "IPX4 sweat resistant", "Weatherproof shell"],
  "Weatherproofing": ["Water-resistant weatherproof shell", "Heavy-duty windproof shielding", "100% wind & water barrier", "DWR water repellent coating", "All-weather protective lining"],
  "Power": ["1700 Watts High Output", "1200 Watts torque motor", "1100 Watts precision heating", "1250 Watts espresso pump", "15W fast QI wireless output"],
  "Capacity": ["6 Quarts large basket", "1.8 Liters removable tank", "32 Fluid Ounces", "64 Ounces pitcher", "5 Gallons maximum"],
  "Smart Home Link": ["Fully compatible with Alexa / Google Assistant", "Companion mobile app", "Touch-sensitive slider controls", "Wi-Fi programmable scheduler", "Standalone smart logic"],
  "Fabric Material": ["100% GORE-TEX Breathable Nylon", "100% Extrafine Merino Wool", "100% Combed Organic Cotton", "Heavy-Duty Weatherproof Shell", "Ultra-soft Bamboo Fleece"],
  "Size Options": ["Small / Medium / Large / XL", "Adjustable secure sizing dial", "Standard Unisex fit", "Slim Fit tailored cut", "Universal stretch fit"],
  "Care Instructions": ["Machine wash cold, air dry", "Hand wash only with mild soap", "Wipe down with damp cloth", "Dishwasher safe basket", "Spot clean only"],
  "Active Ingredients": ["10% Pure Hyaluronic Acid & Aloe", "100% Cold-Pressed Organic Argan Oil", "African Raw Unrefined Shea Butter & Vitamin E", "Mineral Zinc Oxide & SPF 50", "Salicylic Acid & Green Tea"],
  "Skin Type Compatibility": ["All skin types (hypoallergenic)", "Oily and Acne-Prone skin", "Dry and Sensitive skin", "Normal to combination skin", "Clinically tested gentle"],
  "Volume": ["1.7 fl. oz. (50 ml)", "4.0 fl. oz. (120 ml)", "8.0 fl. oz. (240 ml)", "12 brushes premium kit", "18 shades palette"],
  "Scent Profile": ["Unscented / Free from perfumes", "Mild natural lavender oils", "Refreshing tea tree signature", "Soft citrus infusion", "Organic chamomile extracts"],
  "Free From": ["Parabens, Sulfates, Phthalates", "Cruelty-free, Vegan, No dyes", "Gluten-free, Non-toxic", "Chemical filters, artificial scents", "Preservatives, microplastics"]
};

const USER_NAMES = ["Alex M.", "Jessica T.", "Emily R.", "David K.", "Robert G.", "Sarah L.", "Michael B.", "James H.", "Lisa C.", "Karen W."];
const REVIEW_TEMPLATES_5 = [
  "This is pure luxury! The build quality and specs of this product represent the brand perfectly.",
  "Outstanding purchase. Exceeded all my expectations. Highly recommended for daily use!",
  "Absolutely robust! Super easy to use, beautiful styling, and extremely well-made."
];
const REVIEW_TEMPLATES_4 = [
  "Very good quality and performs exactly as advertised. Fits nicely into my routine.",
  "Highly satisfied. Solid build quality, although shipping took an extra day.",
  "Great value for money. Highly recommend this version to anyone looking for premium features."
];
const REVIEW_TEMPLATES_3 = [
  "Decent performance, but not sure if it justifies the premium pricing tier.",
  "Okay product. Works as described, but the user manual could be simplified.",
  "Average build. It gets the job done but doesn't particularly stand out."
];

// COMPILING 1000 TOTALLY UNIQUE PRODUCTS DYNAMICALLY WITH NO DUPLICATES
const PRODUCTS = [];
const dealsCount = 20; // Number of lightning deals to show

for (let i = 0; i < 1000; i++) {
  // Category cycle
  const category = CATEGORIES[i % CATEGORIES.length];
  
  // Moduli-based lexicons mapping to ensure mathematically zero exact duplicates
  const brandList = BRANDS[category];
  const nounList = NOUNS[category];
  
  const brand = brandList[Math.floor(i / CATEGORIES.length) % brandList.length];
  const noun = nounList[Math.floor(i / (CATEGORIES.length * brandList.length)) % nounList.length];
  const adj = ADJECTIVES[Math.floor(i / (CATEGORIES.length * brandList.length * nounList.length)) % ADJECTIVES.length];
  
  const title = `${brand} ${adj} ${noun} - Model ${100 + i}`;
  const id = i + 1;
  
  // Custom non-repeating description builders
  const desc = `This state-of-the-art ${noun} by ${brand} delivers top-tier performance. Features an elegant ${adj} construction with optimized specifications for everyday durability and modern styling.`;
  
  // Varied unique prices
  const price = parseFloat((39.99 + ((i * 13.37) % 650)).toFixed(2));
  const origPrice = i % 3 === 0 ? parseFloat((price * 1.25).toFixed(2)) : null;
  
  // Varied ratings and reviews count
  const ratingVariability = parseFloat((4.0 + ((i * 0.17) % 1.1)).toFixed(1));
  const rating = Math.min(5.0, Math.max(3.5, ratingVariability));
  const reviewsCount = 120 + ((i * 19) % 1500);
  
  // Structured categories Unsplash images
  const imagePool = IMAGES[category];
  const image = imagePool[i % imagePool.length];
  
  // Dynamic specs mapping
  const specKeys = SPEC_KEYS[category];
  const specs = {
    "Brand": brand,
    "Model Line": `${adj} ${noun}`,
    "SKU ID": `AMZ-PRM-${1000 + id}`
  };
  
  // Assign 4 distinct category specifications
  specKeys.forEach((key, kIdx) => {
    const vals = SPEC_VALUES[key];
    specs[key] = vals[(i + kIdx) % vals.length];
  });
  
  // Procedural custom reviews generator
  const reviewsList = [];
  const reviewCount = 1 + (i % 3);
  
  for (let r = 0; r < reviewCount; r++) {
    const user = USER_NAMES[(i + r) % USER_NAMES.length];
    const date = new Date(2026, 4, (1 + (i + r) % 28)).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'});
    
    let text = "";
    let reviewRating = 5;
    if (rating >= 4.7) {
      text = REVIEW_TEMPLATES_5[(i + r) % REVIEW_TEMPLATES_5.length];
      reviewRating = 5;
    } else if (rating >= 4.2) {
      text = REVIEW_TEMPLATES_4[(i + r) % REVIEW_TEMPLATES_4.length];
      reviewRating = 4;
    } else {
      text = REVIEW_TEMPLATES_3[(i + r) % REVIEW_TEMPLATES_3.length];
      reviewRating = 3;
    }
    
    // Tailor review comment text to match the product brand and type!
    text = `${text.replace("product", noun).replace("brand", brand)} Fits into my premium lifestyle perfectly.`;
    
    reviewsList.push({ user, rating: reviewRating, date, text });
  }
  
  PRODUCTS.push({
    id,
    title,
    category,
    description: desc,
    price,
    originalPrice: origPrice,
    rating,
    reviews: reviewsCount,
    tag: i % 10 === 0 ? "Best Seller" : (i % 12 === 0 ? "Deals" : ""),
    image,
    specs,
    reviewsList
  });
}

// App State Management
let cart = [];
let wishlist = [];
let activeCategory = "All";
let searchQuery = "";
let currentCheckoutStep = 1;

// User Profile state
let userProfile = {
  signedIn: false,
  username: "Guest Customer",
  walletBalance: 0.00,
  email: "guest@amazonpremium.com"
};

// Delivery Address State
let deliveryAddress = {
  fullName: "Premium Customer",
  street: "742 Evergreen Terrace",
  city: "New Delhi",
  zip: "110001",
  country: "India"
};

// Simulated Orders Database for Live Tracking
let trackingOrders = [
  {
    orderId: "AMZ-827491-DEL",
    itemName: "Sony Pro Wireless Headphones - Model 100",
    price: 149.99,
    date: "May 29, 2026",
    status: "Shipped",
    statusDescription: "Package left transit hub and is traveling toward regional sorting facility.",
    progress: 60,
    steps: ["Ordered", "Shipped", "Out for Delivery", "Delivered"],
    activeStep: 1, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80"
  },
  {
    orderId: "AMZ-993410-DEL",
    itemName: "iRobot Ultra LiDAR Robot Vacuum - Model 106",
    price: 249.00,
    date: "June 01, 2026",
    status: "Ordered",
    statusDescription: "Payment processed successfully. Seller is preparing shipment.",
    progress: 25,
    steps: ["Ordered", "Shipped", "Out for Delivery", "Delivered"],
    activeStep: 0, 
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=100&q=80"
  }
];

// Today's Deals Countdowns State
let dealsTimeRemaining = 3600 * 4 + 1800; // 4h 30m

// Document Ready Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  initHeroCarousel();
  updateHeaderAddress();
  updateHeaderUserDisplay();
  startDealsTimer();
});

// Render Star Ratings HTML Helper
function getRatingStarsHTML(rating) {
  let starsHTML = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML += "★";
    } else if (i === fullStars && halfStar) {
      starsHTML += "☆"; 
    } else {
      starsHTML += "☆";
    }
  }
  return starsHTML;
}

// Render Products Grid based on Category & Search Filter
function renderProducts() {
  const gridContainer = document.getElementById("products-feed");
  if (!gridContainer) return;
  
  // Filter products
  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesCategory = activeCategory === "All" || prod.category === activeCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Set matching product count
  const countLabel = document.getElementById("results-count");
  if (countLabel) {
    countLabel.textContent = `Showing ${filteredProducts.length} premium deals`;
  }
  
  if (filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
        <h3>No matching items found. Try searching for "Sony", "Dyson", "Nike", "CeraVe" or reset the filters.</h3>
      </div>
    `;
    return;
  }
  
  // Render maximum of 40 products on active load for scroll performance, supports search
  const visibleProducts = filteredProducts.slice(0, 40);
  
  gridContainer.innerHTML = visibleProducts.map(prod => {
    const originalPriceHTML = prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : "";
    const badgeHTML = prod.tag ? `<span class="badge-tag">${prod.tag}</span>` : "";
    const priceWhole = Math.floor(prod.price);
    const priceFraction = (prod.price % 1).toFixed(2).split(".")[1] || "00";
    
    // Heart active status check
    const wishActive = wishlist.includes(prod.id) ? "active" : "";
    
    return `
      <div class="product-card" data-id="${prod.id}">
        ${badgeHTML}
        
        <!-- Interactive Wishlist Heart Button -->
        <button class="wishlist-heart-btn ${wishActive}" onclick="toggleWishlistItem(event, ${prod.id})" title="Save to list">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        <div class="product-image-box" onclick="openQuickView(${prod.id})">
          <img src="${prod.image}" alt="${prod.title}" loading="lazy">
        </div>
        <div class="product-category-tag">${prod.category}</div>
        <h4 class="product-title" onclick="openQuickView(${prod.id})">${prod.title}</h4>
        <div class="product-rating">
          <span class="stars">${getRatingStarsHTML(prod.rating)}</span>
          <span class="rating-count">(${prod.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="price-currency">$</span>
          <span class="price-whole">${priceWhole}</span>
          <span class="price-fraction">${priceFraction}</span>
          ${originalPriceHTML}
        </div>
        <div class="card-actions">
          <button class="btn-primary" onclick="addToCart(${prod.id})">Add to Cart</button>
          <button class="btn-secondary" onclick="openQuickView(${prod.id})" title="Quick View Specs & Reviews">
            <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Hero Auto-Sliding Promo Carousel
function initHeroCarousel() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  if (slides.length === 0) return;
  
  function nextSlide() {
    const slider = document.querySelector(".hero-slider");
    if(slider && slider.classList.contains("hide")) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  
  setInterval(nextSlide, 6000);
}

// Switch between Main Products Feed and Dynamic Dashboards
window.showDashboard = function(type) {
  const feed = document.getElementById("products-feed");
  const titleRow = document.getElementById("products-feed-title-row");
  const promoGrid = document.querySelector(".category-promo-grid");
  const slider = document.querySelector(".hero-slider");
  
  if (feed) feed.classList.add("hide");
  if (titleRow) titleRow.classList.add("hide");
  if (promoGrid) promoGrid.classList.add("hide");
  if (slider) slider.classList.add("hide");
  
  // Deactivate all subnav tabs first
  document.querySelectorAll(".nav-sub-item").forEach(item => item.classList.remove("active"));
  
  // Deactivate all dashboard panels
  document.querySelectorAll(".dashboard-view-panel").forEach(p => p.classList.remove("active"));
  
  if (type === "main") {
    if (feed) feed.classList.remove("hide");
    if (titleRow) titleRow.classList.remove("hide");
    if (promoGrid) promoGrid.classList.remove("hide");
    if (slider) slider.classList.remove("hide");
    
    const activeSubTab = document.querySelector("[data-category=All]");
    if (activeSubTab) activeSubTab.classList.add("active");
    
    activeCategory = "All";
    renderProducts();
    return;
  }
  
  // Make active dashboard panel visible
  const targetPanel = document.getElementById(`dashboard-${type}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
  
  // Customize active dashboard sub-views rendering
  if (type === "deals") {
    renderDealsDashboard();
  } else if (type === "giftcards") {
    renderGiftcardDashboard();
  } else if (type === "registry") {
    renderRegistryDashboard();
  } else if (type === "wishlist") {
    renderWishlistDashboard();
  }
}

// Today's Deals Dashboard Logic
function startDealsTimer() {
  setInterval(() => {
    if (dealsTimeRemaining > 0) {
      dealsTimeRemaining--;
      const timeString = formatDealsTime(dealsTimeRemaining);
      const timerVal = document.getElementById("deals-time-string");
      if (timerVal) timerVal.textContent = timeString;
    }
  }, 1000);
}

function formatDealsTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, "0")}h : ${minutes.toString().padStart(2, "0")}m : ${secs.toString().padStart(2, "0")}s`;
}

function renderDealsDashboard() {
  const container = document.getElementById("deals-items-grid");
  if (!container) return;
  
  // Pick products that have tags or discounts
  const dealProducts = PRODUCTS.slice(50, 70); // Distinct deals
  
  container.innerHTML = dealProducts.map((prod, index) => {
    const claimedPct = Math.floor(25 + (index * 4)) % 100;
    const dealPrice = (prod.price * 0.85).toFixed(2); 
    
    return `
      <div class="deal-card">
        <span style="background-color: #cc0c39; color: white; padding: 4px 8px; font-size: 11px; font-weight: 700; border-radius: 4px; align-self: flex-start; margin-bottom: 10px;">15% OFF</span>
        <img src="${prod.image}" alt="${prod.title}">
        <h4 class="product-title" onclick="openQuickView(${prod.id})">${prod.title}</h4>
        <div style="margin-top: auto; padding-top: 10px;">
          <div style="font-size: 18px; font-weight: 800; color: #cc0c39; margin-bottom: 5px;">$${dealPrice} <span style="color: #777; text-decoration: line-through; font-size: 13px; font-weight: 500;">$${prod.price.toFixed(2)}</span></div>
          <div style="font-size: 12px; color: #555; display: flex; justify-content: space-between;">
            <span>${claimedPct}% claimed</span>
            <span>Limited Stock</span>
          </div>
          <div class="deal-claim-bar-bg">
            <div class="deal-claim-bar-fill" style="width: ${claimedPct}%"></div>
          </div>
          <button class="btn-primary" style="width: 100%; margin-top: 10px;" onclick="addToCart(${prod.id})">Claim Lightning Deal</button>
        </div>
      </div>
    `;
  }).join("");
}

// Giftcard Dashboard balance claims logic
function renderGiftcardDashboard() {
  const balLabel = document.getElementById("giftcard-wallet-bal");
  if (balLabel) {
    balLabel.textContent = `$${userProfile.walletBalance.toFixed(2)}`;
  }
}

window.claimGiftCardCode = function() {
  const codeInput = document.getElementById("giftcard-code-input");
  if (!codeInput) return;
  const code = codeInput.value.trim().toUpperCase();
  
  if (!code) {
    alert("Please enter a valid gift card promo code!");
    return;
  }
  
  let claimAmount = 0;
  if (code === "AMZ-GIFT-50") {
    claimAmount = 50.00;
  } else if (code === "AMZ-GIFT-100") {
    claimAmount = 100.00;
  } else if (code.startsWith("AMZ-") && code.length >= 8) {
    claimAmount = 25.00; 
  } else {
    alert("Invalid or expired gift card code! Try using 'AMZ-GIFT-50' or 'AMZ-GIFT-100'.");
    return;
  }
  
  userProfile.walletBalance += claimAmount;
  alert(`Success! Successfully credited $${claimAmount.toFixed(2)} to your Premium Wallet.`);
  
  codeInput.value = "";
  renderGiftcardDashboard();
  updateHeaderUserDisplay();
}

// Registry Finder & Creator simulation logic
function renderRegistryDashboard() {
  const regList = document.getElementById("active-registries-feed");
  if (regList) {
    regList.innerHTML = `
      <div style="border-left: 4px solid #007185; padding: 15px; margin-bottom: 15px; background-color: #f7f7f7;">
        <h4 style="margin-bottom: 5px;">Emma & Liam's Wedding Registry</h4>
        <p style="font-size: 13px; color: #555;">Event Date: October 15, 2026 | Location: California, US</p>
      </div>
      <div style="border-left: 4px solid #007185; padding: 15px; margin-bottom: 15px; background-color: #f7f7f7;">
        <h4 style="margin-bottom: 5px;">Sarah's Premium Baby Shower List</h4>
        <p style="font-size: 13px; color: #555;">Event Date: July 28, 2026 | Location: London, UK</p>
      </div>
    `;
  }
}

window.createNewRegistry = function(e) {
  e.preventDefault();
  const name = document.getElementById("registry-creator-name").value.trim();
  const type = document.getElementById("registry-creator-type").value;
  const date = document.getElementById("registry-creator-date").value;
  
  if (!name || !date) {
    alert("Please fill in all registry fields!");
    return;
  }
  
  const regList = document.getElementById("active-registries-feed");
  if (regList) {
    const newItemHTML = `
      <div style="border-left: 4px solid #2e7d32; padding: 15px; margin-bottom: 15px; background-color: #e8f5e9;">
        <h4 style="margin-bottom: 5px;">${name}'s Premium ${type} Registry</h4>
        <p style="font-size: 13px; color: #555;">Event Date: ${new Date(date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})} | Created Successfully!</p>
      </div>
    `;
    regList.innerHTML = newItemHTML + regList.innerHTML;
  }
  
  alert(`Congratulations! Your ${type} Registry was created successfully.`);
  document.getElementById("registry-form-tag").reset();
}

// Wishlist Manager Logic
window.toggleWishlistItem = function(event, productId) {
  if (event) event.stopPropagation(); 
  
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    alert("Item removed from your shopping wishlist!");
  } else {
    wishlist.push(productId);
    alert("Item saved to your shopping wishlist!");
  }
  
  renderProducts();
}

function renderWishlistDashboard() {
  const container = document.getElementById("wishlist-items-grid");
  if (!container) return;
  
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
        <svg style="width: 60px; height: 60px; fill: #ccc; margin-bottom: 10px;" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <h3>Your shopping wishlist is empty.</h3>
        <p>Save items by clicking the heart button on deal cards!</p>
      </div>
    `;
    return;
  }
  
  const wishProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
  
  container.innerHTML = wishProducts.map(prod => {
    return `
      <div class="wishlist-card">
        <img src="${prod.image}" style="height: 120px; object-fit: contain; margin-bottom: 10px;" alt="${prod.title}">
        <h4 style="font-size: 14px; font-weight: 600; line-height: 1.4; margin-bottom: 10px; flex: 1;">${prod.title}</h4>
        <div style="font-weight: 700; margin-bottom: 10px;">$${prod.price.toFixed(2)}</div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-primary" style="padding: 6px; font-size: 13px;" onclick="addToCart(${prod.id})">Move to Cart</button>
          <button class="btn-secondary" style="width: 32px;" onclick="toggleWishlistItem(null, ${prod.id}); renderWishlistDashboard();" title="Remove Item">✕</button>
        </div>
      </div>
    `;
  }).join("");
}

// Deep Multi-Tab Product Details Modal
let activeDetailProductId = null;

window.openQuickView = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  
  activeDetailProductId = productId;
  const modalOverlay = document.getElementById("quickview-modal-overlay");
  const modalBody = document.getElementById("quickview-modal-body");
  if (!modalOverlay || !modalBody) return;
  
  modalBody.innerHTML = `
    <!-- Tabbed navigation header -->
    <div class="quickview-tabs-nav">
      <button class="quickview-tab-btn active" onclick="switchDetailTab(event, 'overview')">Overview Details</button>
      <button class="quickview-tab-btn" onclick="switchDetailTab(event, 'specs')">Specifications</button>
      <button class="quickview-tab-btn" onclick="switchDetailTab(event, 'reviews')">User Reviews (${prod.reviewsList.length})</button>
    </div>

    <!-- Tab 1: Overview -->
    <div class="quickview-tab-content active" id="tab-overview">
      <div class="quickview-layout">
        <div class="quickview-image-pane">
          <img src="${prod.image}" alt="${prod.title}">
        </div>
        <div class="quickview-info-pane">
          <span class="quickview-category">${prod.category}</span>
          <h2 class="quickview-title">${prod.title}</h2>
          <div class="quickview-rating">
            <span class="stars">${getRatingStarsHTML(prod.rating)}</span>
            <span class="rating-count">(${prod.reviews} ratings)</span>
          </div>
          <div class="quickview-price-row">
            <span class="quickview-price">$${prod.price.toFixed(2)}</span>
            ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ""}
          </div>
          <p class="quickview-desc">${prod.description}</p>
          <div class="quickview-actions">
            <button class="btn-primary" style="width: 100%; padding: 12px;" onclick="addToCart(${prod.id}); closeModal('quickview-modal-overlay');">Add to Shopping Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 2: Technical Specifications -->
    <div class="quickview-tab-content" id="tab-specs">
      <h3 style="margin-bottom: 15px; color: var(--amazon-dark);">Technical Specifications</h3>
      <table class="specs-table">
        <tbody>
          ${Object.entries(prod.specs).map(([key, val]) => `
            <tr>
              <th>${key}</th>
              <td>${val}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Tab 3: Customer Reviews & Submission Builder -->
    <div class="quickview-tab-content" id="tab-reviews">
      <h3 style="margin-bottom: 20px; color: var(--amazon-dark);">Customer Feedback</h3>
      
      <div class="reviews-feed" id="tab-reviews-list-container">
        ${renderReviewsListHTML(prod.reviewsList)}
      </div>

      <!-- Active Review Builder Form -->
      <div class="review-builder-box">
        <h4 style="margin-bottom: 10px; color: var(--amazon-dark);">Submit a Customer Review</h4>
        <form id="review-builder-form" onsubmit="submitProductReview(event)">
          
          <!-- Stars selector -->
          <div class="star-rating-input">
            <input type="radio" id="star-5" name="star-score" value="5" checked><label for="star-5" title="5 stars">★</label>
            <input type="radio" id="star-4" name="star-score" value="4"><label for="star-4" title="4 stars">★</label>
            <input type="radio" id="star-3" name="star-score" value="3"><label for="star-3" title="3 stars">★</label>
            <input type="radio" id="star-2" name="star-score" value="2"><label for="star-2" title="2 stars">★</label>
            <input type="radio" id="star-1" name="star-score" value="1"><label for="star-1" title="1 star">★</label>
          </div>

          <div class="form-group">
            <label for="rev-user-name">Your Nickname</label>
            <input type="text" id="rev-user-name" class="form-control" placeholder="E.g., John D." value="${userProfile.username}" required>
          </div>

          <div class="form-group">
            <label for="rev-text">Review Comments</label>
            <textarea id="rev-text" class="form-control" rows="3" placeholder="Share your experience with this premium product..." required></textarea>
          </div>

          <button type="submit" class="btn-primary" style="padding: 10px 20px;">Submit Verified Review</button>
        </form>
      </div>
    </div>
  `;
  
  modalOverlay.classList.add("active");
}

window.switchDetailTab = function(e, tabName) {
  document.querySelectorAll(".quickview-tab-btn").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  
  document.querySelectorAll(".quickview-tab-content").forEach(pane => pane.classList.remove("active"));
  document.getElementById(`tab-${tabName}`).classList.add("active");
}

function renderReviewsListHTML(list) {
  if (list.length === 0) {
    return `<p style="color: #777; font-style: italic;">No reviews posted yet. Be the first to review this product!</p>`;
  }
  
  return list.map(rev => {
    let stars = "";
    for(let i=0; i<5; i++) {
      stars += i < rev.rating ? "★" : "☆";
    }
    return `
      <div style="border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <strong>${rev.user}</strong>
          <span style="font-size: 13px; color: #888;">${rev.date}</span>
        </div>
        <div style="color: #ffa41c; font-size: 14px; margin-bottom: 6px;">${stars}</div>
        <p style="font-size: 14px; color: #444; line-height: 1.5;">${rev.text}</p>
      </div>
    `;
  }).join("");
}

window.submitProductReview = function(e) {
  e.preventDefault();
  const prod = PRODUCTS.find(p => p.id === activeDetailProductId);
  if (!prod) return;
  
  const user = document.getElementById("rev-user-name").value.trim();
  const text = document.getElementById("rev-text").value.trim();
  const ratingInput = document.querySelector('input[name="star-score"]:checked');
  const rating = ratingInput ? parseInt(ratingInput.value) : 5;
  
  if (!user || !text) return;
  
  const newReview = {
    user,
    rating,
    date: new Date().toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'}),
    text
  };
  
  prod.reviewsList.push(newReview);
  
  const container = document.getElementById("tab-reviews-list-container");
  if (container) {
    container.innerHTML = renderReviewsListHTML(prod.reviewsList);
  }
  
  document.getElementById("rev-text").value = "";
  alert("Thank you! Your verified customer review was added successfully.");
}

// Account Center Modal Actions
window.openAccountModal = function() {
  const modal = document.getElementById("account-modal-overlay");
  if (!modal) return;
  
  updateAccountViewDisplay(); // Render the view panel layout first!
  
  const nameInput = document.getElementById("acc-signin-name");
  const emailInput = document.getElementById("acc-signin-email");
  
  if (nameInput && emailInput) {
    nameInput.value = userProfile.signedIn ? userProfile.username : "";
    emailInput.value = userProfile.signedIn ? userProfile.email : "";
  }
  
  modal.classList.add("active");
}

function updateAccountViewDisplay() {
  const body = document.getElementById("account-modal-body-panel");
  if (!body) return;
  
  if (userProfile.signedIn) {
    body.innerHTML = `
      <div style="text-align: center; margin-bottom: 25px;">
        <div style="width: 70px; height: 70px; border-radius: 50%; background-color: var(--amazon-accent); color: var(--amazon-dark); font-size: 32px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto;">
          ${userProfile.username[0].toUpperCase()}
        </div>
        <h3>Welcome, ${userProfile.username}!</h3>
        <p style="color: #666; font-size: 14px;">${userProfile.email} | Premium Gold Member</p>
      </div>

      <div style="background-color: #f7f7f7; border: 1px solid #ddd; border-radius: 8px; padding: 15px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <span style="font-size: 13px; color: #666; display: block;">Digital Wallet Balance</span>
          <strong style="font-size: 22px; color: #2e7d32;">$${userProfile.walletBalance.toFixed(2)}</strong>
        </div>
        <button class="btn-primary" style="padding: 8px 15px;" onclick="closeModal('account-modal-overlay'); showDashboard('giftcards');">Add Gift Card</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <button class="btn-secondary" style="padding: 12px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="closeModal('account-modal-overlay'); showDashboard('wishlist');">
          <svg style="width: 18px; height: 18px; fill: #ff5858;" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          My Wishlist
        </button>
        <button class="btn-secondary" style="padding: 12px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="closeModal('account-modal-overlay'); openTrackingModal();">
          <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          Track Orders
        </button>
      </div>

      <button class="btn-secondary" style="width: 100%; margin-top: 25px; border-color: #cc0c39; color: #cc0c39;" onclick="userSignOut()">Sign Out Account</button>
    `;
  } else {
    body.innerHTML = `
      <h3 style="margin-bottom: 15px; color: var(--amazon-dark);">Sign In Your Account</h3>
      <form onsubmit="userSignIn(event)">
        <div class="form-group">
          <label for="acc-signin-name">Full Name / Username</label>
          <input type="text" id="acc-signin-name" class="form-control" placeholder="E.g., John Doe" required>
        </div>
        <div class="form-group">
          <label for="acc-signin-email">Email Address</label>
          <input type="email" id="acc-signin-email" class="form-control" placeholder="E.g., john@gmail.com" required>
        </div>
        <button type="submit" class="btn-primary" style="width: 100%; padding: 12px; margin-top: 10px;">Sign In Securely</button>
      </form>
    `;
  }
}

window.userSignIn = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById("acc-signin-name").value.trim();
  const email = document.getElementById("acc-signin-email").value.trim();
  
  if (!name || !email) return;
  
  userProfile.signedIn = true;
  userProfile.username = name;
  userProfile.email = email;
  
  updateHeaderUserDisplay();
  updateAccountViewDisplay();
  
  alert(`Welcome to Amazon Premium, ${name}! You are now signed in.`);
  closeModal("account-modal-overlay");
}

window.userSignOut = function() {
  userProfile.signedIn = false;
  userProfile.username = "Guest Customer";
  userProfile.email = "guest@amazonpremium.com";
  userProfile.walletBalance = 0.00;
  
  updateHeaderUserDisplay();
  updateAccountViewDisplay();
  
  alert("You have successfully signed out.");
  closeModal("account-modal-overlay");
}

function updateHeaderUserDisplay() {
  const accountTriggerText = document.getElementById("header-account-trigger-text");
  if (accountTriggerText) {
    if (userProfile.signedIn) {
      accountTriggerText.innerHTML = `
        <span class="nav-opt-line-1">Hello, ${userProfile.username}</span>
        <span class="nav-opt-line-2">Account & Lists</span>
      `;
    } else {
      accountTriggerText.innerHTML = `
        <span class="nav-opt-line-1">Hello, Sign in</span>
        <span class="nav-opt-line-2">Account & Lists</span>
      `;
    }
  }
}

// Interactive Address Modal Logic
window.openAddressModal = function() {
  const modal = document.getElementById("address-modal-overlay");
  if (!modal) return;
  
  document.getElementById("addr-name").value = deliveryAddress.fullName;
  document.getElementById("addr-street").value = deliveryAddress.street;
  document.getElementById("addr-city").value = deliveryAddress.city;
  document.getElementById("addr-zip").value = deliveryAddress.zip;
  document.getElementById("addr-country").value = deliveryAddress.country;
  
  modal.classList.add("active");
}

window.saveAddress = function() {
  const name = document.getElementById("addr-name").value.trim();
  const street = document.getElementById("addr-street").value.trim();
  const city = document.getElementById("addr-city").value.trim();
  const zip = document.getElementById("addr-zip").value.trim();
  const country = document.getElementById("addr-country").value;
  
  if (!name || !street || !city || !zip) {
    alert("Please complete all shipping address fields!");
    return;
  }
  
  deliveryAddress = { fullName: name, street, city, zip, country };
  updateHeaderAddress();
  closeModal("address-modal-overlay");
}

function updateHeaderAddress() {
  const headerAddressLabel = document.getElementById("header-delivery-label");
  if (headerAddressLabel) {
    headerAddressLabel.innerHTML = `
      Deliver to ${deliveryAddress.fullName}
      <strong>${deliveryAddress.city} ${deliveryAddress.zip}</strong>
    `;
  }
}

// Interactive Order Tracking Modal Logic
window.openTrackingModal = function() {
  const modal = document.getElementById("tracking-modal-overlay");
  const orderListContainer = document.getElementById("tracking-orders-list");
  if (!modal || !orderListContainer) return;
  
  if (trackingOrders.length === 0) {
    orderListContainer.innerHTML = `
      <p style="text-align: center; color: #666; padding: 20px;">No recent orders found in your timeline history.</p>
    `;
  } else {
    orderListContainer.innerHTML = trackingOrders.map(order => {
      const stepsHTML = order.steps.map((step, idx) => {
        let stepClass = "";
        if (idx < order.activeStep) {
          stepClass = "completed";
        } else if (idx === order.activeStep) {
          stepClass = "active";
        }
        return `
          <div class="tracking-step ${stepClass}">
            <div class="step-dot">${idx < order.activeStep ? "✔" : idx + 1}</div>
            <div class="step-label">${step}</div>
          </div>
        `;
      }).join("");

      return `
        <div class="tracking-order-item" style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px; background-color: #fafafa;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 14px; color: #555; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <span>Order ID: <strong>${order.orderId}</strong></span>
            <span>Date Placed: <strong>${order.date}</strong></span>
          </div>
          <div style="display: flex; gap: 15px; margin-bottom: 20px;">
            <img src="${order.image}" style="width: 60px; height: 60px; object-fit: contain; background: white; border: 1px solid #eee; border-radius: 4px; padding: 4px;" alt="${order.itemName}">
            <div>
              <h4 style="color: var(--amazon-dark); font-size: 15px; margin-bottom: 5px;">${order.itemName}</h4>
              <p style="font-size: 13px; color: #666; line-height: 1.4;">Status: <span style="font-weight: 700; color: #2e7d32;">${order.status}</span> - ${order.statusDescription}</p>
            </div>
          </div>
          
          <div class="tracking-stepper-container" style="margin-top: 15px;">
            <div class="tracking-progress-line">
              <div class="tracking-progress-fill" style="width: ${order.progress}%"></div>
            </div>
            <div class="tracking-steps-row" style="display: flex; justify-content: space-between; position: relative; z-index: 2;">
              ${stepsHTML}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
  
  modal.classList.add("active");
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

// Multi-step Checkout Flow
window.openCheckout = function() {
  if (cart.length === 0) {
    alert("Please add items to your shopping cart first!");
    return;
  }
  toggleCartDrawer(false);
  const checkoutModal = document.getElementById("checkout-modal-overlay");
  if (checkoutModal) {
    document.getElementById("shipping-name").value = deliveryAddress.fullName;
    document.getElementById("shipping-address").value = `${deliveryAddress.street}, ${deliveryAddress.city}, ${deliveryAddress.zip}, ${deliveryAddress.country}`;
    
    checkoutModal.classList.add("active");
    currentCheckoutStep = 1;
    updateCheckoutStepView();
  }
}

function updateCheckoutStepView() {
  const indicators = document.querySelectorAll("#checkout-modal-overlay .step-indicator");
  indicators.forEach((ind, index) => {
    ind.classList.remove("active", "completed");
    const stepNum = index + 1;
    if (stepNum < currentCheckoutStep) {
      ind.classList.add("completed");
    } else if (stepNum === currentCheckoutStep) {
      ind.classList.add("active");
    }
  });
  
  const panes = document.querySelectorAll("#checkout-modal-overlay .checkout-pane");
  panes.forEach((pane, index) => {
    pane.classList.remove("active");
    if (index + 1 === currentCheckoutStep) {
      pane.classList.add("active");
    }
  });
  
  const prevBtn = document.getElementById("checkout-prev-btn");
  const nextBtn = document.getElementById("checkout-next-btn");
  
  if (currentCheckoutStep === 1) {
    prevBtn.style.display = "none";
    nextBtn.textContent = "Continue to Payment";
  } else if (currentCheckoutStep === 2) {
    prevBtn.style.display = "block";
    nextBtn.textContent = "Place Order Securely";
  } else {
    prevBtn.style.display = "none";
    nextBtn.textContent = "Finish & Continue Shopping";
  }
}

window.checkoutNext = function() {
  if (currentCheckoutStep === 1) {
    const name = document.getElementById("shipping-name").value;
    const address = document.getElementById("shipping-address").value;
    if (!name || !address) {
      alert("Please fill in shipping name and destination address!");
      return;
    }
    currentCheckoutStep = 2;
    updateCheckoutStepView();
  } else if (currentCheckoutStep === 2) {
    const cardNum = document.getElementById("card-number").value;
    if (!cardNum || cardNum.length < 12) {
      alert("Please enter a valid card credential!");
      return;
    }
    
    const trackingNewItems = cart.map((item, index) => {
      return {
        orderId: `AMZ-${Math.floor(100000 + Math.random() * 900000)}-DEL`,
        itemName: item.title,
        price: item.price,
        date: new Date().toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'}),
        status: "Ordered",
        statusDescription: "Order successfully submitted! Standard delivery route processing.",
        progress: 25,
        steps: ["Ordered", "Shipped", "Out for Delivery", "Delivered"],
        activeStep: 0,
        image: item.image
      };
    });
    
    trackingOrders = [...trackingNewItems, ...trackingOrders];
    
    currentCheckoutStep = 3;
    updateCheckoutStepView();
    cart = []; 
    updateCartBadge();
  } else {
    closeModal("checkout-modal-overlay");
  }
}

window.checkoutPrev = function() {
  if (currentCheckoutStep > 1) {
    currentCheckoutStep--;
    updateCheckoutStepView();
  }
}

// Cart Drawer Management
window.toggleCartDrawer = function(open = true) {
  const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
  if (cartDrawerOverlay) {
    if (open) {
      cartDrawerOverlay.classList.add("active");
      renderCartItems();
    } else {
      cartDrawerOverlay.classList.remove("active");
    }
  }
}

window.addToCart = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  
  updateCartBadge();
  toggleCartDrawer(true);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalQty;
  }
}

function renderCartItems() {
  const container = document.getElementById("cart-items-list");
  const subtotalLabel = document.getElementById("cart-subtotal");
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your shopping cart is feeling light. Let's add some premium deals!</p>
      </div>
    `;
    if (subtotalLabel) subtotalLabel.textContent = "$0.00";
    return;
  }
  
  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-actions">
            <div class="cart-item-qty">
              <button onclick="changeQty(${item.id}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
  
  if (subtotalLabel) subtotalLabel.textContent = `$${subtotal.toFixed(2)}`;
}

window.changeQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeCartItem(productId);
  } else {
    updateCartBadge();
    renderCartItems();
  }
}

window.removeCartItem = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCartItems();
}

// Interactive Header Search/Filter events setup
function setupEventListeners() {
  const categoryItems = document.querySelectorAll(".nav-sub-item");
  categoryItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const cat = e.target.getAttribute("data-category");
      if (!cat) return;
      
      showDashboard("main");
      categoryItems.forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
      activeCategory = cat;
      renderProducts();
    });
  });
  
  const searchInput = document.getElementById("search-input-field");
  const searchBtn = document.getElementById("search-submit-btn");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      showDashboard("main");
      searchQuery = e.target.value;
      renderProducts();
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (searchInput) {
        showDashboard("main");
        searchQuery = searchInput.value;
        renderProducts();
      }
    });
  }
  
  const searchSelect = document.getElementById("search-dept-select");
  if (searchSelect) {
    searchSelect.addEventListener("change", (e) => {
      showDashboard("main");
      activeCategory = e.target.value;
      
      categoryItems.forEach(item => {
        if (item.getAttribute("data-category") === activeCategory) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
      renderProducts();
    });
  }
  
  const logo = document.getElementById("header-logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      showDashboard("main");
    });
  }
}
