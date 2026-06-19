// ================= DISTINCT PRODUCT CATALOG ENGINE =================

const CATEGORIES = ["Electronics", "Fitness", "Home & Kitchen", "Fashion", "Beauty"];

const ADJECTIVES = [
    "Premium", "Ultra", "Elite", "Pro", "Series X", "Classic", "V2", "Supreme",
    "Stealth", "NextGen", "Smart", "Eco", "Hybrid", "Precision", "Professional",
    "Limited Edition", "Signature", "Advanced", "Performance", "Glow", "Titanium",
    "Carbon", "Platinum", "Studio", "Essential", "Velocity", "Apex", "Zenith",
    "Quantum", "Nova", "Turbo", "Fusion", "Onyx", "Graphite", "Aura"
];

const BRANDS = {
    "Electronics": ["Sony", "Apple", "Bose", "Samsung", "Razer", "Logitech", "Dell", "HP", "Anker", "Canon", "GoPro", "ASUS", "Sennheiser", "JBL", "Audio-Technica", "LG", "Panasonic", "Microsoft", "Corsair", "HyperX", "Jabra", "Marshall", "Beats", "Acer"],
    "Fitness": ["Garmin", "Fitbit", "Nike", "Adidas", "Under Armour", "Bowflex", "Gaiam", "Hydro Flask", "Theragun", "Oakley", "Puma", "Reebok", "Spalding", "Wilson", "Peloton", "Manduka", "TRX", "Polar", "Suunto", "YETI", "New Balance", "Asics", "Brooks", "Gymshark"],
    "Home & Kitchen": ["Keurig", "Dyson", "Herman Miller", "Ninja", "Philips", "Breville", "Instant Pot", "Cuisinart", "iRobot", "Honeywell", "KitchenAid", "T-fal", "Nespresso", "Weber", "Le Creuset", "Vitamix", "Shark", "Calphalon", "OXO", "Bosch", "IKEA", "Staub", "Lodge", "Smeg"],
    "Fashion": ["Levi's", "Tommy Hilfiger", "Calvin Klein", "Patagonia", "The North Face", "Columbia", "Zara", "Ralph Lauren", "Lululemon", "Lacoste", "Burberry", "Hugo Boss", "Brooks Brothers", "Uniqlo", "Banana Republic", "J.Crew", "Everlane", "Allbirds", "Fjallraven", "Carhartt", "Mango", "Timberland", "Dockers", "Herschel"],
    "Beauty": ["The Ordinary", "CeraVe", "L'Oreal", "Estee Lauder", "Clinique", "Neutrogena", "Olay", "Burt's Bees", "Shiseido", "La Roche-Posay", "Kiehl's", "NARS", "MAC", "Fenty Beauty", "Drunk Elephant", "Tatcha", "SK-II", "Paula's Choice", "Sunday Riley", "Glossier", "Bobbi Brown", "Urban Decay", "Laneige", "Innisfree"]
};

const ITEM_CATALOG = {
    "Electronics": [
        ["Foldable Smartphone", "phone"],
        ["Gaming Smartphone", "phone"],
        ["Rugged 5G Phone", "phone"],
        ["Compact Android Phone", "phone"],
        ["Creator Laptop", "computer"],
        ["Gaming Laptop", "computer"],
        ["Business Ultrabook", "computer"],
        ["2-in-1 Touch Laptop", "computer"],
        ["Drawing Tablet", "tablet"],
        ["E-Reader Tablet", "tablet"],
        ["Wireless Earbuds", "audio"],
        ["Over-Ear ANC Headphones", "audio"],
        ["Studio Monitor Headphones", "audio"],
        ["Bluetooth Neckband", "audio"],
        ["Portable Party Speaker", "audio"],
        ["Dolby Atmos Soundbar", "audio"],
        ["USB Podcast Microphone", "audio"],
        ["4K Webcam", "camera"],
        ["Mirrorless Camera", "camera"],
        ["Action Camera", "camera"],
        ["Camera Gimbal", "camera"],
        ["Aerial Camera Drone", "camera"],
        ["4K OLED Monitor", "display"],
        ["Ultrawide Gaming Monitor", "display"],
        ["Portable USB-C Monitor", "display"],
        ["Mechanical Keyboard", "computer"],
        ["Ergonomic Wireless Mouse", "computer"],
        ["Trackball Mouse", "computer"],
        ["Graphics Tablet", "tablet"],
        ["Wi-Fi 7 Router", "network"],
        ["Mesh Wi-Fi Node", "network"],
        ["Network Switch", "network"],
        ["Smart Display", "smartHome"],
        ["Video Doorbell", "smartHome"],
        ["Indoor Security Camera", "smartHome"],
        ["Smart Thermostat", "smartHome"],
        ["Smart Light Strip", "smartHome"],
        ["Matter Smart Plug", "smartHome"],
        ["VR Headset", "gaming"],
        ["Cloud Gaming Controller", "gaming"],
        ["Handheld Game Console", "gaming"],
        ["Streaming Media Stick", "smartHome"],
        ["Power Bank", "power"],
        ["GaN Wall Charger", "power"],
        ["MagSafe Charging Stand", "power"],
        ["Braided USB-C Cable", "power"],
        ["Thunderbolt Dock", "power"],
        ["External SSD", "storage"],
        ["Portable Hard Drive", "storage"],
        ["MicroSD Card", "storage"]
    ],
    "Fitness": [
        ["Adjustable Dumbbell", "weights"],
        ["Competition Kettlebell", "weights"],
        ["Olympic Barbell", "weights"],
        ["Bumper Weight Plate", "weights"],
        ["Weighted Vest", "weights"],
        ["Grip Strength Trainer", "accessory"],
        ["Resistance Band Set", "accessory"],
        ["Suspension Trainer", "accessory"],
        ["Pull-Up Bar", "accessory"],
        ["Push-Up Handle Set", "accessory"],
        ["Foldable Treadmill", "cardio"],
        ["Spin Exercise Bike", "cardio"],
        ["Magnetic Rowing Machine", "cardio"],
        ["Compact Elliptical Trainer", "cardio"],
        ["Aerobic Step Platform", "cardio"],
        ["Mini Stair Stepper", "cardio"],
        ["Rebounder Trampoline", "cardio"],
        ["Yoga Mat", "yoga"],
        ["Cork Yoga Block", "yoga"],
        ["Yoga Strap", "yoga"],
        ["Pilates Ring", "yoga"],
        ["Balance Board", "yoga"],
        ["Foam Roller", "recovery"],
        ["Massage Gun", "recovery"],
        ["Acupressure Mat", "recovery"],
        ["Knee Compression Sleeve", "apparel"],
        ["Wrist Wrap Set", "apparel"],
        ["Weightlifting Belt", "apparel"],
        ["Boxing Gloves", "sport"],
        ["Freestanding Punching Bag", "sport"],
        ["Speed Jump Rope", "accessory"],
        ["Agility Ladder", "sport"],
        ["Training Cone Set", "sport"],
        ["Medicine Ball", "weights"],
        ["Slam Ball", "weights"],
        ["Wall Ball", "weights"],
        ["Battle Rope", "accessory"],
        ["Gym Bench", "weights"],
        ["Squat Rack", "weights"],
        ["Ab Wheel Roller", "accessory"],
        ["Heart Rate Chest Strap", "wearable"],
        ["GPS Running Watch", "wearable"],
        ["Fitness Tracker Band", "wearable"],
        ["Smart Scale", "wearable"],
        ["Hydration Bottle", "hydration"],
        ["Insulated Protein Shaker", "hydration"],
        ["Gym Duffel Bag", "accessory"],
        ["Running Waist Pack", "accessory"],
        ["Trail Running Shoes", "footwear"],
        ["Training Gloves", "apparel"]
    ],
    "Home & Kitchen": [
        ["Countertop Blender", "appliance"],
        ["Immersion Blender", "appliance"],
        ["Two-Slice Toaster", "appliance"],
        ["Convection Microwave", "appliance"],
        ["Smart Air Fryer", "appliance"],
        ["Espresso Machine", "appliance"],
        ["Drip Coffee Maker", "appliance"],
        ["Electric Kettle", "appliance"],
        ["Cold Press Juicer", "appliance"],
        ["Food Processor", "appliance"],
        ["Stand Mixer", "appliance"],
        ["Hand Mixer", "appliance"],
        ["Pressure Cooker", "appliance"],
        ["Slow Cooker", "appliance"],
        ["Rice Cooker", "appliance"],
        ["Induction Cooktop", "appliance"],
        ["Waffle Maker", "appliance"],
        ["Sous Vide Cooker", "appliance"],
        ["Chef Knife Set", "cookware"],
        ["Bamboo Cutting Board", "cookware"],
        ["Nonstick Fry Pan", "cookware"],
        ["Cast Iron Skillet", "cookware"],
        ["Stainless Saucepan", "cookware"],
        ["Dutch Oven", "cookware"],
        ["Carbon Steel Wok", "cookware"],
        ["Roasting Pan", "cookware"],
        ["Measuring Cup Set", "cookware"],
        ["Mixing Bowl Set", "cookware"],
        ["Silicone Spatula Set", "cookware"],
        ["Locking Tongs", "cookware"],
        ["Box Grater", "cookware"],
        ["Dinner Plate Set", "dining"],
        ["Ceramic Bowl Set", "dining"],
        ["Glass Tumbler Set", "dining"],
        ["Cutlery Set", "dining"],
        ["Vacuum Cleaner", "cleaning"],
        ["Robot Vacuum", "cleaning"],
        ["Steam Mop", "cleaning"],
        ["Air Purifier", "cleaning"],
        ["Humidifier", "appliance"],
        ["Garment Steamer", "appliance"],
        ["Steam Iron", "appliance"],
        ["Ergonomic Office Chair", "furniture"],
        ["Standing Desk", "furniture"],
        ["Bookshelf", "storage"],
        ["Drawer Organizer", "storage"],
        ["Food Storage Container Set", "storage"],
        ["Spice Rack", "storage"],
        ["Table Lamp", "lighting"],
        ["Smart LED Bulb", "lighting"],
        ["Bed Sheet Set", "textile"]
    ],
    "Fashion": [
        ["Organic Cotton T-Shirt", "top"],
        ["Oxford Button-Down Shirt", "top"],
        ["Slim Fit Polo Shirt", "top"],
        ["Merino Crew Sweater", "top"],
        ["Fleece Hoodie", "top"],
        ["Denim Jacket", "outerwear"],
        ["Rain Shell Jacket", "outerwear"],
        ["Puffer Jacket", "outerwear"],
        ["Wool Overcoat", "outerwear"],
        ["Tailored Blazer", "outerwear"],
        ["Two-Piece Suit", "outerwear"],
        ["Straight Fit Jeans", "bottom"],
        ["Chino Trousers", "bottom"],
        ["Linen Shorts", "bottom"],
        ["Pleated Skirt", "bottom"],
        ["Midi Wrap Dress", "dress"],
        ["Knit Bodycon Dress", "dress"],
        ["Athletic Leggings", "bottom"],
        ["Jogger Tracksuit Set", "bottom"],
        ["Thermal Base Layer", "top"],
        ["Cotton Boxer Briefs", "top"],
        ["No-Show Sock Pack", "accessory"],
        ["Leather Sneakers", "footwear"],
        ["Running Sneakers", "footwear"],
        ["Chelsea Boots", "footwear"],
        ["Hiking Boots", "footwear"],
        ["Penny Loafers", "footwear"],
        ["Leather Sandals", "footwear"],
        ["Block Heel Pumps", "footwear"],
        ["Ballet Flats", "footwear"],
        ["Canvas Backpack", "bag"],
        ["Leather Handbag", "bag"],
        ["Canvas Tote Bag", "bag"],
        ["Crossbody Sling Bag", "bag"],
        ["Travel Duffel Bag", "bag"],
        ["RFID Wallet", "accessory"],
        ["Reversible Leather Belt", "accessory"],
        ["Silk Tie", "accessory"],
        ["Cashmere Scarf", "accessory"],
        ["Wool Gloves", "accessory"],
        ["Baseball Cap", "accessory"],
        ["Ribbed Beanie", "accessory"],
        ["Polarized Sunglasses", "accessory"],
        ["Dress Watch", "accessory"],
        ["Minimal Necklace", "jewelry"],
        ["Stack Bracelet", "jewelry"],
        ["Hoop Earrings", "jewelry"],
        ["Luggage Set", "bag"],
        ["Flannel Shirt", "top"],
        ["Cargo Pants", "bottom"]
    ],
    "Beauty": [
        ["Matte Liquid Lipstick", "makeup"],
        ["Tinted Lip Balm", "makeup"],
        ["Hydrating Lip Gloss", "makeup"],
        ["Serum Foundation", "makeup"],
        ["Full-Coverage Concealer", "makeup"],
        ["Translucent Setting Powder", "makeup"],
        ["Cream Blush", "makeup"],
        ["Powder Bronzer", "makeup"],
        ["Liquid Highlighter", "makeup"],
        ["Neutral Eyeshadow Palette", "makeup"],
        ["Gel Eyeliner Pencil", "makeup"],
        ["Volumizing Mascara", "makeup"],
        ["Brow Definer Pencil", "makeup"],
        ["Pore Smoothing Primer", "makeup"],
        ["Long-Wear Setting Spray", "makeup"],
        ["Makeup Brush Set", "tool"],
        ["Beauty Sponge Duo", "tool"],
        ["Gel Nail Polish", "makeup"],
        ["Cuticle Oil", "skincare"],
        ["Eau de Parfum", "fragrance"],
        ["Citrus Cologne", "fragrance"],
        ["Gentle Face Wash", "skincare"],
        ["Cream Cleanser", "skincare"],
        ["Exfoliating Toner", "skincare"],
        ["Vitamin C Serum", "skincare"],
        ["Hyaluronic Acid Serum", "skincare"],
        ["Ceramide Moisturizer", "skincare"],
        ["Clay Face Mask", "skincare"],
        ["Retinol Eye Cream", "skincare"],
        ["Mineral Sunscreen", "skincare"],
        ["Body Lotion", "bath"],
        ["Body Wash", "bath"],
        ["Shea Butter Soap", "bath"],
        ["Scalp Shampoo", "haircare"],
        ["Repair Conditioner", "haircare"],
        ["Argan Hair Oil", "haircare"],
        ["Deep Conditioning Mask", "haircare"],
        ["Flexible Hairspray", "haircare"],
        ["Styling Hair Gel", "haircare"],
        ["Aluminum-Free Deodorant", "grooming"],
        ["Shaving Cream", "grooming"],
        ["Safety Razor", "grooming"],
        ["Facial Cleansing Brush", "tool"],
        ["Jade Facial Roller", "tool"],
        ["LED Face Mask", "tool"],
        ["Hair Dryer", "tool"],
        ["Ceramic Flat Iron", "tool"],
        ["Curling Wand", "tool"],
        ["Makeup Organizer", "tool"],
        ["Travel Toiletry Bag", "tool"]
    ]
};

const PRICE_RANGES = {
    "Electronics": {
        phone: [14999, 159999],
        computer: [24999, 249999],
        tablet: [7999, 99999],
        audio: [999, 79999],
        camera: [2499, 299999],
        display: [6999, 179999],
        network: [1199, 59999],
        smartHome: [699, 49999],
        gaming: [1999, 119999],
        power: [299, 29999],
        storage: [499, 89999],
        default: [999, 99999]
    },
    "Fitness": {
        weights: [499, 99999],
        cardio: [1499, 199999],
        yoga: [299, 14999],
        recovery: [699, 59999],
        sport: [299, 49999],
        wearable: [1499, 79999],
        hydration: [249, 8999],
        apparel: [399, 24999],
        footwear: [799, 24999],
        accessory: [299, 39999],
        default: [299, 59999]
    },
    "Home & Kitchen": {
        appliance: [699, 149999],
        cookware: [249, 39999],
        dining: [199, 24999],
        cleaning: [999, 99999],
        furniture: [1999, 129999],
        lighting: [299, 29999],
        textile: [399, 29999],
        storage: [249, 24999],
        default: [299, 69999]
    },
    "Fashion": {
        top: [249, 9999],
        outerwear: [999, 59999],
        bottom: [499, 14999],
        dress: [699, 24999],
        footwear: [799, 34999],
        bag: [799, 79999],
        accessory: [149, 19999],
        jewelry: [399, 59999],
        default: [249, 24999]
    },
    "Beauty": {
        makeup: [149, 8999],
        skincare: [199, 14999],
        haircare: [149, 12999],
        fragrance: [799, 49999],
        grooming: [199, 19999],
        bath: [99, 7999],
        tool: [149, 24999],
        default: [149, 9999]
    }
};

const USER_NAMES = ["Alex M.", "Jessica T.", "Emily R.", "David K.", "Robert G.", "Sarah L.", "Michael B.", "James H.", "Lisa C.", "Karen W.", "Daniel P.", "Sophia N.", "Chris F.", "Megan V.", "Nathan A.", "Olivia W.", "Tyler J.", "Amanda R.", "Brandon S.", "Rachel D."];
const REVIEW_TEMPLATES_5 = [
    "This is pure luxury! The build quality and specs of this product represent the brand perfectly.",
    "Outstanding purchase. Exceeded all my expectations. Highly recommended for daily use!",
    "Absolutely robust! Super easy to use, beautiful styling, and extremely well-made.",
    "Hands down the best purchase I've made this year. The craftsmanship is phenomenal.",
    "Five stars isn't enough! This product completely transformed my experience.",
    "Incredible attention to detail. You can tell a lot of engineering went into this."
];
const REVIEW_TEMPLATES_4 = [
    "Very good quality and performs exactly as advertised. Fits nicely into my routine.",
    "Highly satisfied. Solid build quality, although shipping took an extra day.",
    "Great value for money. Highly recommend this version to anyone looking for premium features.",
    "Really impressed with the design. A few minor improvements could make it perfect.",
    "Exactly what I needed. The quality-to-price ratio is excellent for this category.",
    "Reliable and well-constructed. Would definitely consider buying from this brand again."
];
const REVIEW_TEMPLATES_3 = [
    "Decent performance, but not sure if it justifies the premium pricing tier.",
    "Okay product. Works as described, but the user manual could be simplified.",
    "Average build. It gets the job done but doesn't particularly stand out.",
    "Mixed feelings on this one. Some features shine while others feel underdeveloped.",
    "It's functional but I expected more polish at this price point honestly."
];

const IMAGE_THEMES = {
    "Electronics": { hue: 211, label: "Tech" },
    "Fitness": { hue: 152, label: "Training" },
    "Home & Kitchen": { hue: 28, label: "Home" },
    "Fashion": { hue: 331, label: "Style" },
    "Beauty": { hue: 276, label: "Care" }
};

const USE_CASES = {
    "Electronics:storage": "portable backups, media libraries, and secure file transfers",
    "Home & Kitchen:storage": "organized shelves, pantry zones, and clutter control",
    "Fitness:accessory": "organized training, grip, support, and portable setup",
    "Fashion:accessory": "finishing touches, travel organization, and polished styling",
    phone: "mobile productivity, calls, apps, and sharp everyday photography",
    computer: "fast multitasking, creative work, school, gaming, and office workflows",
    tablet: "portable reading, sketching, streaming, and note-taking",
    audio: "clear listening, calls, streaming, and travel-friendly sound",
    camera: "stable photos, video capture, vlogging, and creator shoots",
    display: "sharp desk setups, gaming visuals, and extended productivity",
    network: "reliable whole-home connectivity and faster device traffic",
    smartHome: "connected home control, automation, security, and convenience",
    gaming: "responsive play, immersive entertainment, and console-style control",
    power: "safe charging, cable management, and travel power",
    storage: "organized storage and everyday utility",
    weights: "strength training, progressive overload, and home gym routines",
    cardio: "endurance sessions, calorie burn, and low-impact conditioning",
    yoga: "stretching, balance, mobility, and floor practice",
    recovery: "muscle release, warmups, cooldowns, and mobility care",
    sport: "skill drills, boxing practice, court training, and outdoor workouts",
    wearable: "tracking health metrics, workout zones, and daily activity",
    hydration: "cold drinks, shakes, and gym hydration",
    apparel: "breathable training comfort, support, and repeat workouts",
    accessory: "practical everyday support and carry",
    appliance: "daily cooking, prep, cleaning, and countertop convenience",
    cookware: "precise cooking, heat control, and durable meal prep",
    dining: "serving, dining, and everyday table settings",
    cleaning: "floor care, air quality, and low-effort home maintenance",
    furniture: "organized rooms, ergonomic work, and comfortable living spaces",
    lighting: "task lighting, ambience, and smart room control",
    textile: "comfortable bedding, bath, and home soft goods",
    storage: "organized shelves, pantry zones, and clutter control",
    top: "daily outfits, layering, and polished casual wear",
    outerwear: "weather-ready layers, commute comfort, and structured styling",
    bottom: "everyday movement, office outfits, and weekend styling",
    dress: "occasion dressing, work events, and effortless styling",
    footwear: "walking comfort, traction, cushioning, and daily rotation",
    bag: "commuting, travel, storage, and hands-free carrying",
    jewelry: "finishing touches, gifting, and polished styling",
    makeup: "color, coverage, definition, and long-wear finishing",
    skincare: "hydration, barrier support, brightening, and daily skin care",
    haircare: "cleansing, smoothing, styling, and hair maintenance",
    fragrance: "signature scent, gifting, and day-to-night wear",
    grooming: "clean shaving, skin comfort, and daily grooming",
    bath: "body cleansing, softness, scent, and shower routines",
    tool: "precise application, styling, cleaning, and beauty organization"
};

const SVG_ESCAPE_CHARS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};

function escapeSvg(value) {
    return String(value).replace(/[&<>"']/g, char => SVG_ESCAPE_CHARS[char]);
}

function pick(values, index) {
    return values[index % values.length];
}

function interleaveCatalogByKind(items) {
    const queues = new Map();
    items.forEach(item => {
        const kind = item[1];
        if (!queues.has(kind)) queues.set(kind, []);
        queues.get(kind).push(item);
    });

    const ordered = [];
    while ([...queues.values()].some(queue => queue.length > 0)) {
        queues.forEach(queue => {
            if (queue.length > 0) ordered.push(queue.shift());
        });
    }
    return ordered;
}

function wrapSvgText(text, maxChars = 24) {
    const words = text.split(" ");
    const lines = [];
    let current = "";

    words.forEach(word => {
        const next = current ? `${current} ${word}` : word;
        if (next.length <= maxChars) {
            current = next;
        } else {
            if (current) lines.push(current);
            current = word;
        }
    });

    if (current) lines.push(current);
    if (lines.length <= 2) return lines;
    return [lines[0], lines.slice(1).join(" ")];
}

function renderSvgTextLines(text, y, size, weight, fill) {
    return wrapSvgText(text).map((line, index) => (
        `<text x="250" y="${y + index * (size + 6)}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${escapeSvg(line)}</text>`
    )).join("");
}

function productIconSvg(kind, accent, ink, category, itemName = "") {
    const common = `fill="${accent}" stroke="${ink}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"`;
    const noFill = `fill="none" stroke="${ink}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"`;
    const shell = icon => `<svg x="125" y="72" width="250" height="250" viewBox="0 0 240 240" aria-hidden="true">${icon}</svg>`;
    const normalizedName = itemName.toLowerCase();

    if (kind === "phone") {
        return shell(`<rect x="75" y="22" width="90" height="176" rx="20" ${common}/><rect x="91" y="42" width="58" height="116" rx="8" fill="#ffffff" opacity="0.9"/><circle cx="120" cy="178" r="8" fill="${ink}" stroke="none"/>`);
    }
    if (kind === "tablet") {
        return shell(`<rect x="52" y="46" width="136" height="148" rx="18" ${common}/><rect x="70" y="66" width="100" height="104" rx="8" fill="#ffffff" opacity="0.9"/><circle cx="120" cy="180" r="6" fill="${ink}" stroke="none"/><path d="M172 178l34 34M180 170l34 34" ${noFill}/>`);
    }
    if (kind === "computer") {
        return shell(`<rect x="48" y="45" width="144" height="96" rx="10" ${common}/><rect x="62" y="58" width="116" height="68" rx="5" fill="#ffffff" opacity="0.9"/><path d="M28 172h184l-20 26H48z" ${common}/><path d="M95 184h50" ${noFill}/>`);
    }
    if (kind === "audio") {
        if (normalizedName.includes("earbud")) {
            return shell(`<path d="M76 72c24 0 38 16 38 38v26c0 16-12 28-28 28s-28-12-28-28v-42c0-12 8-22 18-22z" ${common}/><path d="M164 72c-24 0-38 16-38 38v26c0 16 12 28 28 28s28-12 28-28v-42c0-12-8-22-18-22z" ${common}/><path d="M86 164v34M154 164v34" ${noFill}/><circle cx="86" cy="112" r="12" fill="#ffffff" opacity="0.86"/><circle cx="154" cy="112" r="12" fill="#ffffff" opacity="0.86"/>`);
        }
        if (normalizedName.includes("speaker")) {
            return shell(`<rect x="72" y="46" width="96" height="148" rx="24" ${common}/><circle cx="120" cy="96" r="26" fill="#ffffff" stroke="${ink}" stroke-width="7"/><circle cx="120" cy="154" r="18" fill="#ffffff" stroke="${ink}" stroke-width="7"/><path d="M92 34h56" ${noFill}/>`);
        }
        if (normalizedName.includes("soundbar")) {
            return shell(`<rect x="34" y="106" width="172" height="58" rx="20" ${common}/><circle cx="76" cy="135" r="12" fill="#ffffff" stroke="${ink}" stroke-width="6"/><circle cx="120" cy="135" r="12" fill="#ffffff" stroke="${ink}" stroke-width="6"/><circle cx="164" cy="135" r="12" fill="#ffffff" stroke="${ink}" stroke-width="6"/><path d="M70 182h100" ${noFill}/>`);
        }
        if (normalizedName.includes("microphone")) {
            return shell(`<rect x="88" y="42" width="64" height="112" rx="32" ${common}/><path d="M62 112c0 34 24 58 58 58s58-24 58-58M120 170v34M86 204h68" ${noFill}/><path d="M104 78h32M104 104h32" stroke="#ffffff" stroke-width="7" opacity="0.82"/>`);
        }
        if (normalizedName.includes("neckband")) {
            return shell(`<path d="M56 68c0 78 24 122 64 122s64-44 64-122" ${noFill}/><rect x="42" y="134" width="36" height="54" rx="18" ${common}/><rect x="162" y="134" width="36" height="54" rx="18" ${common}/><path d="M78 158h28M134 158h28" ${noFill}/>`);
        }
        return shell(`<path d="M52 128v-22c0-42 28-72 68-72s68 30 68 72v22" ${noFill}/><rect x="34" y="118" width="42" height="70" rx="18" ${common}/><rect x="164" y="118" width="42" height="70" rx="18" ${common}/><path d="M88 194h64" ${noFill}/>`);
    }
    if (kind === "camera") {
        return shell(`<rect x="40" y="76" width="160" height="104" rx="18" ${common}/><path d="M76 76l16-26h56l16 26" ${common}/><circle cx="120" cy="128" r="35" fill="#ffffff" stroke="${ink}" stroke-width="7"/><circle cx="120" cy="128" r="15" fill="${ink}" stroke="none"/>`);
    }
    if (kind === "display") {
        return shell(`<rect x="36" y="48" width="168" height="112" rx="12" ${common}/><rect x="54" y="64" width="132" height="78" rx="6" fill="#ffffff" opacity="0.88"/><path d="M120 160v34M82 198h76" ${noFill}/>`);
    }
    if (kind === "network" || kind === "smartHome") {
        return shell(`<path d="M42 120l78-70 78 70" ${noFill}/><rect x="66" y="112" width="108" height="78" rx="14" ${common}/><circle cx="120" cy="150" r="11" fill="#ffffff" stroke="${ink}" stroke-width="7"/><path d="M72 60c30-24 66-24 96 0M90 82c18-14 42-14 60 0" ${noFill}/>`);
    }
    if (kind === "gaming") {
        return shell(`<path d="M70 100h100c25 0 42 20 48 62 3 22-16 35-32 19l-24-24H78l-24 24c-16 16-35 3-32-19 6-42 23-62 48-62z" ${common}/><path d="M70 138h34M87 121v34M150 132h2M178 150h2" ${noFill}/>`);
    }
    if (kind === "power") {
        return shell(`<rect x="54" y="72" width="132" height="92" rx="18" ${common}/><path d="M186 102h18v32h-18" ${common}/><path d="M126 84l-32 48h26l-14 38 42-56h-28z" fill="#ffffff" stroke="${ink}" stroke-width="6" stroke-linejoin="round"/>`);
    }
    if (kind === "storage" && category === "Electronics") {
        return shell(`<rect x="54" y="76" width="132" height="96" rx="18" ${common}/><rect x="76" y="98" width="88" height="42" rx="8" fill="#ffffff" opacity="0.82"/><circle cx="96" cy="154" r="7" fill="${ink}" stroke="none"/><path d="M114 154h44M74 188h92" ${noFill}/>`);
    }
    if (kind === "weights") {
        return shell(`<path d="M30 120h180" ${noFill}/><rect x="42" y="80" width="28" height="80" rx="8" ${common}/><rect x="74" y="66" width="34" height="108" rx="8" ${common}/><rect x="132" y="66" width="34" height="108" rx="8" ${common}/><rect x="170" y="80" width="28" height="80" rx="8" ${common}/>`);
    }
    if (kind === "cardio") {
        return shell(`<path d="M50 166h136c14 0 25 10 25 22H66c-18 0-31-13-31-31V80" ${noFill}/><circle cx="68" cy="190" r="14" ${common}/><circle cx="178" cy="190" r="14" ${common}/><path d="M86 88h68l28 78M112 88l-28 78" ${noFill}/>`);
    }
    if (kind === "yoga" || kind === "recovery") {
        return shell(`<rect x="40" y="146" width="160" height="42" rx="21" ${common}/><circle cx="100" cy="82" r="24" ${common}/><path d="M124 102c30 10 48 28 56 54M98 110l-38 32M106 112l18 40" ${noFill}/>`);
    }
    if (kind === "sport") {
        return shell(`<circle cx="120" cy="120" r="74" ${common}/><path d="M56 98c42 20 86 20 128 0M56 142c42-20 86-20 128 0M120 48c-18 46-18 98 0 144M120 48c18 46 18 98 0 144" ${noFill}/>`);
    }
    if (kind === "wearable") {
        return shell(`<rect x="84" y="72" width="72" height="96" rx="22" ${common}/><path d="M100 72V34h40v38M100 168v38h40v-38" ${common}/><path d="M104 122h32l10-18 12 34 12-22h20" ${noFill}/>`);
    }
    if (kind === "hydration") {
        return shell(`<path d="M94 44h52l-8 30v112c0 14-10 24-24 24h-4c-14 0-24-10-24-24V74z" ${common}/><rect x="98" y="88" width="44" height="74" rx="12" fill="#ffffff" opacity="0.75"/><path d="M96 44h48" ${noFill}/>`);
    }
    if (kind === "appliance") {
        return shell(`<rect x="54" y="54" width="132" height="142" rx="20" ${common}/><rect x="78" y="76" width="84" height="54" rx="10" fill="#ffffff" opacity="0.86"/><circle cx="94" cy="158" r="10" fill="#ffffff" stroke="${ink}" stroke-width="6"/><circle cx="146" cy="158" r="10" fill="#ffffff" stroke="${ink}" stroke-width="6"/>`);
    }
    if (kind === "cookware") {
        return shell(`<path d="M52 132c0-34 28-62 68-62s68 28 68 62v18H52z" ${common}/><path d="M42 150h156M76 70l-14-28M120 70V38M164 70l14-28" ${noFill}/><path d="M188 132h34" ${noFill}/>`);
    }
    if (kind === "dining") {
        return shell(`<circle cx="112" cy="126" r="62" ${common}/><circle cx="112" cy="126" r="34" fill="#ffffff" opacity="0.82" stroke="${ink}" stroke-width="6"/><path d="M190 62v128M206 62v128M190 124h22" ${noFill}/>`);
    }
    if (kind === "cleaning") {
        return shell(`<path d="M62 166h116c14 0 26 10 26 24H58c-14 0-24-10-24-24v-16h28z" ${common}/><path d="M92 150L150 62c8-12 24-4 18 10l-30 78M78 190h84" ${noFill}/>`);
    }
    if (kind === "furniture") {
        return shell(`<rect x="58" y="72" width="124" height="84" rx="16" ${common}/><path d="M74 156v46M166 156v46M58 120H36M182 120h22M88 202h64" ${noFill}/>`);
    }
    if (kind === "lighting") {
        return shell(`<path d="M92 42h56l24 84H68z" ${common}/><path d="M120 126v58M86 196h68M100 184h40" ${noFill}/><circle cx="120" cy="84" r="16" fill="#ffffff" opacity="0.82" stroke="${ink}" stroke-width="6"/>`);
    }
    if (kind === "storage" && category === "Home & Kitchen") {
        return shell(`<rect x="54" y="74" width="132" height="116" rx="16" ${common}/><path d="M54 112h132M54 150h132M98 74v116M142 74v116" stroke="#ffffff" stroke-width="7" opacity="0.78"/><path d="M78 52h84l24 22H54z" ${common}/>`);
    }
    if (kind === "textile") {
        return shell(`<path d="M54 82h132v88c0 18-14 32-32 32H54z" ${common}/><path d="M54 118h132M82 82v120M110 82v120" stroke="#ffffff" stroke-width="7" opacity="0.8"/><path d="M54 82c18-18 42-18 60 0" ${noFill}/>`);
    }
    if (kind === "top" || kind === "outerwear" || kind === "apparel") {
        return shell(`<path d="M86 52l34 22 34-22 48 34-26 42-22-12v78H86v-78l-22 12-26-42z" ${common}/><path d="M104 72c8 12 24 12 32 0" ${noFill}/>`);
    }
    if (kind === "bottom" || kind === "dress") {
        return shell(`<path d="M82 50h76l18 146h-50l-6-86-12 86H58z" ${common}/><path d="M82 50c18 18 58 18 76 0M120 112v80" ${noFill}/>`);
    }
    if (kind === "footwear") {
        return shell(`<path d="M54 150c34 2 64-18 94-48l24 46c22 4 38 14 42 32H58c-18 0-28-10-28-24z" ${common}/><path d="M92 136l26 18M116 116l26 20" ${noFill}/>`);
    }
    if (kind === "bag") {
        return shell(`<rect x="58" y="82" width="124" height="112" rx="18" ${common}/><path d="M88 82c0-28 64-28 64 0M82 120h76" ${noFill}/><circle cx="88" cy="114" r="5" fill="${ink}" stroke="none"/><circle cx="152" cy="114" r="5" fill="${ink}" stroke="none"/>`);
    }
    if (kind === "accessory" && category === "Fitness") {
        return shell(`<path d="M52 76c36-28 100-28 136 0M68 102c28-18 76-18 104 0" ${noFill}/><rect x="58" y="124" width="124" height="44" rx="22" ${common}/><path d="M82 168l-22 34M158 168l22 34M88 146h64" ${noFill}/>`);
    }
    if (kind === "accessory" || kind === "jewelry") {
        return shell(`<circle cx="120" cy="120" r="58" fill="none" stroke="${accent}" stroke-width="24"/><path d="M84 72l36 48 36-48M92 174h56M120 120l22 54" ${noFill}/>`);
    }
    if (kind === "makeup") {
        return shell(`<rect x="70" y="104" width="42" height="94" rx="10" ${common}/><path d="M78 104l14-54 14 54" ${common}/><rect x="132" y="72" width="58" height="126" rx="14" ${common}/><path d="M146 96h30M146 124h30M146 152h30" stroke="#ffffff" stroke-width="7" opacity="0.8"/>`);
    }
    if (kind === "skincare" || kind === "haircare" || kind === "bath" || kind === "fragrance") {
        return shell(`<path d="M92 58h56l-8 32v90c0 14-10 24-24 24h-8c-14 0-24-10-24-24V90z" ${common}/><rect x="98" y="112" width="44" height="50" rx="8" fill="#ffffff" opacity="0.82"/><path d="M100 58V36h40v22M96 90h48" ${noFill}/>`);
    }
    if (kind === "grooming" || kind === "tool") {
        return shell(`<path d="M70 54h100v42H70z" ${common}/><path d="M120 96v106M96 202h48M86 76h68M160 108l34 64M80 108l-34 64" ${noFill}/>`);
    }

    return shell(`<rect x="54" y="54" width="132" height="132" rx="24" ${common}/><path d="M82 120h76M120 82v76" ${noFill}/>`);
}

// Return small and large image URLs from Unsplash (based on product keywords).
function getProductImageUrls(category, item, brand, id) {
    const query = encodeURIComponent(`${brand} ${item.name} ${category}`);
    // Unsplash featured endpoints return relevant images for a query. Use fixed sizes for consistency.
    const small = `https://source.unsplash.com/seed/${encodeURIComponent(brand + '-' + item.name + '-' + id)}/500x500/?${query}`;
    const large = `https://source.unsplash.com/seed/${encodeURIComponent(brand + '-' + item.name + '-' + id)}/1200x1200/?${query}`;
    return { small, large };
}

function buildPrice(category, kind, itemIndex) {
    const ranges = PRICE_RANGES[category] || {};
    const [min, max] = ranges[kind] || ranges.default;
    const seed = ((itemIndex + 1) * 9301 + category.length * 49297) % 233280;
    const normalized = seed / 233280;
    const curved = Math.pow(normalized, 1.12);
    return Math.max(49.99, Math.round((min + (max - min) * curved) / 50) * 50 - 0.01);
}

function buildProductDescription(category, item, brand, adj) {
    const useCase = USE_CASES[`${category}:${item.kind}`] || USE_CASES[item.kind] || `everyday ${category.toLowerCase()} use`;
    return `${brand} ${adj} ${item.name} is built for ${useCase}. This curated ${category.toLowerCase()} pick uses product-specific features, materials, and sizing so it feels distinct from the rest of the catalog.`;
}

function buildElectronicsSpecs(kind, n) {
    if (kind === "phone") {
        return {
            "Display": `${(6.1 + (n % 5) * 0.2).toFixed(1)} inch AMOLED, ${pick(["90Hz", "120Hz", "144Hz"], n)}`,
            "Storage": pick(["128GB", "256GB", "512GB", "1TB"], n),
            "Main Camera": `${48 + (n % 5) * 12}MP wide + ${12 + (n % 3) * 4}MP ultra-wide`,
            "Battery": `${4200 + (n % 8) * 250} mAh with fast charging`,
            "Connectivity": pick(["5G, Wi-Fi 6E, NFC", "5G, Wi-Fi 7, Bluetooth 5.4", "Dual SIM 5G, NFC"], n)
        };
    }
    if (kind === "computer" || kind === "tablet") {
        return {
            "Processor": pick(["Intel Core Ultra 7", "Apple M-series class chip", "AMD Ryzen 7", "Qualcomm Snapdragon X"], n),
            "Memory": pick(["8GB LPDDR5", "16GB LPDDR5X", "32GB DDR5", "24GB unified memory"], n),
            "Storage": pick(["512GB NVMe SSD", "1TB NVMe SSD", "2TB NVMe SSD", "256GB flash storage"], n),
            "Display": pick(["13.3 inch touch display", "14 inch 2.8K panel", "15.6 inch FHD display", "16 inch creator-grade panel"], n),
            "Ports": pick(["USB-C, HDMI, audio jack", "Thunderbolt 4, USB-A, HDMI", "USB-C with DisplayPort", "Dual USB-C and microSD"], n)
        };
    }
    if (kind === "audio") {
        return {
            "Driver": `${pick(["10mm dynamic", "40mm neodymium", "50mm studio"], n)} driver`,
            "Noise Control": pick(["Hybrid active noise cancellation", "Passive isolation", "Transparency mode with ANC", "Studio monitor tuning"], n),
            "Battery": `${8 + (n % 8) * 4} hours playback`,
            "Connectivity": pick(["Bluetooth 5.3 multipoint", "USB-C wired mode", "2.4GHz low latency", "Bluetooth 5.4"], n),
            "Water Rating": pick(["IPX4 sweat resistant", "IPX5 splash resistant", "Indoor studio use", "IP67 dust and water resistant"], n)
        };
    }
    if (kind === "camera") {
        return {
            "Sensor": pick(["1 inch stacked CMOS", "APS-C CMOS", "Full-frame CMOS", "1/1.3 inch action sensor"], n),
            "Video": pick(["4K 60fps", "5.3K 60fps", "6K open-gate", "1080p 240fps slow motion"], n),
            "Stabilization": pick(["5-axis in-body stabilization", "Electronic horizon lock", "3-axis gimbal stabilization", "Optical stabilization"], n),
            "Lens Support": pick(["Interchangeable mount", "Ultra-wide fixed lens", "24-70mm equivalent zoom", "Creator accessory mount"], n),
            "Storage Media": pick(["UHS-II SD", "microSD UHS-I", "CFexpress Type B", "Dual SD slots"], n)
        };
    }
    if (kind === "display") {
        return {
            "Panel": pick(["OLED", "IPS Black", "Mini LED", "VA curved"], n),
            "Resolution": pick(["4K UHD", "QHD", "3440 x 1440 ultrawide", "1080p portable"], n),
            "Refresh Rate": pick(["60Hz", "120Hz", "144Hz", "240Hz"], n),
            "Ports": pick(["HDMI 2.1, DisplayPort", "USB-C 90W, HDMI", "Mini HDMI, USB-C", "DisplayPort, USB hub"], n),
            "Stand": pick(["Height, tilt, swivel", "Foldable magnetic cover", "VESA compatible", "Ergonomic gaming stand"], n)
        };
    }
    if (kind === "network" || kind === "smartHome") {
        return {
            "Protocol": pick(["Wi-Fi 7", "Matter over Thread", "Zigbee 3.0", "Dual-band Wi-Fi 6"], n),
            "Coverage": pick(["Up to 1,500 sq ft", "Up to 3,000 sq ft mesh", "Room-level control", "Entryway monitoring"], n),
            "Control": pick(["Mobile app and voice", "Local button and app", "Alexa and Google Assistant", "HomeKit compatible"], n),
            "Power": pick(["USB-C", "AC wall power", "Battery powered", "PoE supported"], n),
            "Security": pick(["WPA3 encryption", "End-to-end video encryption", "Two-factor app login", "Local automation support"], n)
        };
    }
    if (kind === "gaming") {
        return {
            "Platform": pick(["PC and console", "Android cloud gaming", "Standalone VR", "Handheld streaming"], n),
            "Controls": pick(["Hall-effect sticks", "Adaptive triggers", "6DoF tracking", "Programmable back buttons"], n),
            "Display or Latency": pick(["90Hz VR display", "Low-latency 2.4GHz", "7 inch 120Hz panel", "HD haptics"], n),
            "Battery": `${10 + (n % 9) * 3} hours typical use`,
            "Compatibility": pick(["Windows, macOS, Android", "Xbox, PC, mobile", "Steam and cloud services", "USB-C and Bluetooth"], n)
        };
    }
    if (kind === "power") {
        return {
            "Output": pick(["30W USB-C PD", "65W GaN fast charge", "100W USB-C PD", "240W EPR cable rated"], n),
            "Capacity": pick(["10,000 mAh", "20,000 mAh", "Desktop wall power", "Magnetic charging stand"], n),
            "Protection": pick(["Overheat and surge protection", "E-marker safety chip", "Foreign-object detection", "Short-circuit protection"], n),
            "Cable or Port": pick(["USB-C", "USB-C and USB-A", "MagSafe compatible", "Thunderbolt compatible"], n),
            "Travel Ready": pick(["Foldable pins", "Airline carry-on safe", "Braided jacket", "Compact desktop footprint"], n)
        };
    }
    return {
        "Capacity": pick(["512GB", "1TB", "2TB", "4TB", "256GB"], n),
        "Interface": pick(["USB 3.2 Gen 2", "Thunderbolt 4", "UHS-I", "NVMe over USB-C"], n),
        "Read Speed": pick(["Up to 160MB/s", "Up to 1,050MB/s", "Up to 2,800MB/s", "Up to 5,000MB/s"], n),
        "Form Factor": pick(["Pocket drive", "MicroSD", "Portable SSD", "Desktop backup"], n),
        "Protection": pick(["Drop resistant", "Password encryption", "Heat-spreading shell", "Water-resistant case"], n)
    };
}

function buildFitnessSpecs(kind, n) {
    if (kind === "weights") {
        return {
            "Material": pick(["Cast iron with rubber coating", "Stainless steel handle", "Powder-coated steel", "Dense urethane shell"], n),
            "Training Load": pick(["2.5-24 kg adjustable", "16 kg competition size", "20 kg Olympic standard", "5-25 kg pair"], n),
            "Grip": pick(["Knurled steel", "Textured rubber", "Contoured handle", "Sweat-resistant grip"], n),
            "Floor Protection": pick(["Rubber impact edge", "Flat anti-roll base", "Quiet drop coating", "Rounded studio shell"], n),
            "Best For": pick(["Home strength sessions", "Cross-training", "Powerlifting", "Functional workouts"], n)
        };
    }
    if (kind === "cardio") {
        return {
            "Resistance or Speed": pick(["16 magnetic levels", "0.8-16 km/h belt", "Air and magnetic resistance", "8 incline levels"], n),
            "Max User Weight": `${120 + (n % 5) * 15} kg`,
            "Console": pick(["LCD workout console", "Bluetooth app metrics", "Tablet shelf display", "Heart-rate program display"], n),
            "Storage": pick(["Foldable frame", "Transport wheels", "Compact upright storage", "Low-profile footprint"], n),
            "Programs": `${8 + (n % 7) * 2} guided workout modes`
        };
    }
    if (kind === "yoga" || kind === "recovery") {
        return {
            "Material": pick(["Natural rubber", "Cork and EVA", "High-density EVA foam", "Textured TPE"], n),
            "Dimensions": pick(["183 x 61 cm", "30 x 15 cm block", "90 cm roller", "Full-body mat size"], n),
            "Grip or Texture": pick(["Dry-grip top layer", "Raised massage texture", "Non-slip cork surface", "Dual-zone traction"], n),
            "Portability": pick(["Carry strap included", "Lightweight studio build", "Travel-friendly roll", "Compact recovery size"], n),
            "Care": pick(["Wipe clean after use", "Air dry only", "Spot clean mild soap", "Odor-resistant surface"], n)
        };
    }
    if (kind === "wearable") {
        return {
            "Sensors": pick(["Optical heart rate", "Heart rate and SpO2", "GPS + barometer", "Bioimpedance body metrics"], n),
            "Battery": `${5 + (n % 12)} days typical use`,
            "Water Rating": pick(["5ATM swimproof", "IP68 dust and water resistant", "IPX7 splash proof", "Sweat resistant"], n),
            "Tracking": pick(["Sleep, steps, zones", "Outdoor GPS workouts", "Recovery score", "Body composition trends"], n),
            "App Support": pick(["iOS and Android", "Bluetooth sync", "Cloud dashboard", "Coach-ready exports"], n)
        };
    }
    if (kind === "hydration") {
        return {
            "Capacity": pick(["600 ml", "750 ml", "1 liter", "32 oz"], n),
            "Insulation": pick(["24 hours cold", "Double-wall vacuum", "Single-wall lightweight", "Sweat-free shell"], n),
            "Lid": pick(["Flip straw lid", "Leakproof shaker cap", "Wide-mouth screw top", "Carry loop lid"], n),
            "Material": pick(["18/8 stainless steel", "BPA-free Tritan", "Food-grade silicone seal", "Powder-coated steel"], n),
            "Cleaning": pick(["Dishwasher safe lid", "Hand wash bottle", "Removable mixer grid", "Easy-clean wide opening"], n)
        };
    }
    return {
        "Material": pick(["Breathable polyester knit", "Neoprene support panel", "Reinforced nylon webbing", "Sweat-wicking stretch fabric"], n),
        "Fit": pick(["Adjustable", "Compression fit", "Unisex sizing", "Contoured training fit"], n),
        "Support": pick(["Medium support", "Heavy-duty support", "Grip assistance", "Joint stability"], n),
        "Use Case": pick(["Gym sessions", "Outdoor drills", "Strength training", "Running and HIIT"], n),
        "Care": pick(["Machine wash cold", "Wipe clean", "Air dry", "Spot clean only"], n)
    };
}

function buildHomeSpecs(kind, n) {
    if (kind === "appliance") {
        return {
            "Power": `${600 + (n % 9) * 180} watts`,
            "Capacity": pick(["1.5 liter jar", "6 liter basket", "1.2 liter tank", "10 cup carafe", "5 liter pot"], n),
            "Controls": pick(["Touch presets", "Manual dial", "Digital timer", "App-assisted programs"], n),
            "Cleaning": pick(["Dishwasher-safe parts", "Self-clean cycle", "Removable drip tray", "Nonstick removable basket"], n),
            "Safety": pick(["Auto shutoff", "Cool-touch handle", "Overheat protection", "Pressure release valve"], n)
        };
    }
    if (kind === "cookware") {
        return {
            "Material": pick(["Tri-ply stainless steel", "Hard-anodized aluminum", "Seasoned cast iron", "Bamboo and silicone"], n),
            "Size": pick(["24 cm", "28 cm", "5 quart", "8 piece set", "Large prep board"], n),
            "Cooktop Support": pick(["Gas, electric, induction", "Oven safe to 230C", "All stovetops", "Countertop prep use"], n),
            "Coating": pick(["PFOA-free nonstick", "Natural seasoning", "Satin steel finish", "Food-safe oil finish"], n),
            "Care": pick(["Hand wash recommended", "Dishwasher safe", "Season after washing", "Wipe dry immediately"], n)
        };
    }
    if (kind === "dining") {
        return {
            "Material": pick(["Stoneware ceramic", "Tempered glass", "18/10 stainless steel", "Lead-free porcelain"], n),
            "Set Size": pick(["Set of 4", "Set of 6", "16 piece set", "24 piece service"], n),
            "Finish": pick(["Matte glaze", "Clear polished", "Brushed steel", "Reactive glaze"], n),
            "Dishwasher Safe": pick(["Yes", "Top rack only", "Dishwasher and microwave safe", "Hand wash preferred"], n),
            "Use": pick(["Everyday meals", "Hosting", "Coffee bar", "Formal table setting"], n)
        };
    }
    if (kind === "cleaning") {
        return {
            "Motor or Filter": pick(["HEPA sealed filter", "Cyclonic suction motor", "Steam cleaning core", "Multi-stage carbon filter"], n),
            "Coverage": pick(["Up to 1,200 sq ft", "40 minute runtime", "Room mapping", "Large-room air cycling"], n),
            "Controls": pick(["App scheduling", "One-touch control", "Remote control", "Voice assistant support"], n),
            "Noise Level": `${48 + (n % 6) * 4} dB`,
            "Maintenance": pick(["Washable filter", "Self-empty dock compatible", "Reusable mop pads", "Tool-free bin release"], n)
        };
    }
    if (kind === "furniture") {
        return {
            "Material": pick(["Powder-coated steel", "Engineered wood", "Breathable mesh", "Solid wood frame"], n),
            "Dimensions": pick(["120 x 60 cm", "5 shelf format", "Adjustable height", "Compact apartment size"], n),
            "Weight Capacity": `${80 + (n % 6) * 25} kg`,
            "Assembly": pick(["Tool kit included", "15 minute assembly", "Flat-packed", "Pre-drilled hardware"], n),
            "Adjustment": pick(["Height adjustable", "Tilt and lumbar support", "Fixed sturdy frame", "Modular shelves"], n)
        };
    }
    return {
        "Material": pick(["Cotton percale", "Bamboo blend", "Powder-coated metal", "Clear BPA-free plastic", "LED diffuser acrylic"], n),
        "Size or Capacity": pick(["Queen size", "Set of 6 bins", "3 tier rack", "800 lumens", "Large drawer fit"], n),
        "Finish": pick(["Matte white", "Warm natural", "Soft brushed finish", "Transparent pantry view"], n),
        "Care": pick(["Machine washable", "Wipe clean", "Dry dust only", "Dishwasher safe inserts"], n),
        "Best Room": pick(["Bedroom", "Kitchen", "Pantry", "Home office", "Living room"], n)
    };
}

function buildFashionSpecs(kind, n) {
    if (kind === "footwear") {
        return {
            "Upper": pick(["Full-grain leather", "Breathable knit mesh", "Water-resistant suede", "Canvas and rubber"], n),
            "Sole": pick(["Rubber cupsole", "EVA cushioned sole", "Lug traction outsole", "Leather stacked heel"], n),
            "Closure": pick(["Laces", "Slip-on", "Side zip", "Buckle strap"], n),
            "Fit": pick(["True to size", "Wide sizes available", "Cushioned arch support", "Break-in leather fit"], n),
            "Use": pick(["Daily wear", "Trail walking", "Office outfits", "Travel rotation"], n)
        };
    }
    if (kind === "bag") {
        return {
            "Material": pick(["Water-resistant nylon", "Full-grain leather", "Waxed canvas", "Recycled polyester"], n),
            "Capacity": pick(["14 liter", "22 liter", "Cabin carry-on", "Laptop up to 15 inches"], n),
            "Compartments": pick(["Padded laptop sleeve", "RFID pocket", "Shoe pocket", "Organizer panel"], n),
            "Strap": pick(["Adjustable shoulder strap", "Top handles", "Padded backpack straps", "Crossbody strap"], n),
            "Hardware": pick(["YKK zippers", "Brass finish", "Magnetic closure", "Lockable pulls"], n)
        };
    }
    if (kind === "jewelry" || kind === "accessory") {
        return {
            "Material": pick(["Stainless steel", "Italian leather", "Sterling silver plated", "Acetate frame", "Merino wool"], n),
            "Fit": pick(["Adjustable", "One size", "S/M/L", "Universal travel size"], n),
            "Finish": pick(["Polished", "Matte", "Brushed", "Tortoise", "Soft knit"], n),
            "Care": pick(["Wipe clean", "Store dry", "Spot clean", "Hand wash cold"], n),
            "Styling": pick(["Formal", "Everyday", "Travel", "Cold weather", "Minimal"], n)
        };
    }
    return {
        "Fabric": pick(["Organic cotton", "Merino wool", "Recycled polyester", "Japanese denim", "Linen blend"], n),
        "Fit": pick(["Regular fit", "Slim fit", "Relaxed fit", "Tailored fit", "Stretch fit"], n),
        "Size Range": pick(["XS to XXL", "28 to 40 waist", "Petite to Plus", "Regular and Tall"], n),
        "Detail": pick(["Reinforced seams", "Hidden zip", "Button closure", "Ribbed cuffs", "DWR finish"], n),
        "Care": pick(["Machine wash cold", "Dry clean recommended", "Tumble dry low", "Hand wash cold"], n)
    };
}

function buildBeautySpecs(kind, n) {
    if (kind === "makeup") {
        return {
            "Finish": pick(["Matte", "Dewy", "Satin", "Soft shimmer", "Natural skin finish"], n),
            "Shade Range": pick(["12 shades", "18 shades", "24 shades", "Universal tint", "Buildable color"], n),
            "Wear Time": `${6 + (n % 7)} hours`,
            "Skin Feel": pick(["Lightweight", "Creamy", "Non-sticky", "Transfer-resistant", "Blendable"], n),
            "Free From": pick(["Parabens", "Mineral oil", "Talc", "Synthetic fragrance", "Sulfates"], n)
        };
    }
    if (kind === "skincare" || kind === "bath") {
        return {
            "Key Ingredients": pick(["Niacinamide and zinc", "Ceramides and hyaluronic acid", "Vitamin C and ferulic", "Shea butter and glycerin", "Mineral zinc oxide"], n),
            "Skin Type": pick(["All skin types", "Dry and sensitive", "Oily and acne-prone", "Normal to combination", "Mature skin"], n),
            "Volume": pick(["30 ml", "50 ml", "100 ml", "200 ml", "250 ml"], n),
            "Texture": pick(["Gel cream", "Light lotion", "Rich balm", "Foaming wash", "Milky serum"], n),
            "Free From": pick(["Fragrance", "Parabens", "Sulfates", "Drying alcohol", "Essential oils"], n)
        };
    }
    if (kind === "haircare") {
        return {
            "Hair Type": pick(["All hair types", "Dry or damaged", "Curly and wavy", "Fine hair", "Color-treated hair"], n),
            "Key Ingredients": pick(["Argan oil", "Keratin complex", "Aloe and panthenol", "Rice protein", "Coconut amino blend"], n),
            "Volume": pick(["100 ml", "200 ml", "250 ml", "300 ml", "500 ml"], n),
            "Use": pick(["Daily wash", "Leave-in shine", "Heat styling", "Weekly treatment", "Flexible hold"], n),
            "Free From": pick(["Sulfates", "Silicones", "Parabens", "Drying alcohol", "Artificial dyes"], n)
        };
    }
    if (kind === "fragrance") {
        return {
            "Top Notes": pick(["Bergamot and pear", "Citrus zest", "Pink pepper", "Mandarin", "Fresh lavender"], n),
            "Heart Notes": pick(["Jasmine", "Cedar leaf", "Rose", "Marine accord", "Cardamom"], n),
            "Base Notes": pick(["Amber musk", "Sandalwood", "Vanilla bean", "Vetiver", "White woods"], n),
            "Concentration": pick(["Eau de parfum", "Eau de toilette", "Cologne spray", "Discovery set"], n),
            "Volume": pick(["10 ml", "30 ml", "50 ml", "75 ml", "100 ml"], n)
        };
    }
    if (kind === "grooming" || kind === "tool") {
        return {
            "Tool Type": pick(["Synthetic brush fiber", "Ceramic heat plate", "Stainless safety razor", "LED treatment panel", "Travel organizer"], n),
            "Use": pick(["Makeup application", "Facial massage", "Hair styling", "Shaving prep", "Storage and travel"], n),
            "Cleaning": pick(["Rinse clean", "Wipe with damp cloth", "Brush cleaner safe", "Removable head", "Heat-safe mat included"], n),
            "Handle": pick(["Non-slip grip", "Balanced handle", "Foldable design", "Weighted metal handle", "Soft-touch finish"], n),
            "Includes": pick(["Protective cap", "Carry pouch", "Two attachments", "Charging cable", "Storage case"], n)
        };
    }
    return {
        "Formula": pick(["Cream", "Gel", "Oil", "Balm", "Spray"], n),
        "Volume": pick(["50 ml", "100 ml", "150 ml", "200 ml", "Set of 3"], n),
        "Skin Feel": pick(["Gentle", "Smooth", "Hydrating", "Cooling", "Non-greasy"], n),
        "Scent": pick(["Unscented", "Citrus", "Vanilla", "Fresh clean", "Floral"], n),
        "Free From": pick(["Parabens", "Sulfates", "Phthalates", "Synthetic dyes", "Mineral oil"], n)
    };
}

function buildProductSpecs(category, item, brand, adj, id, itemIndex) {
    const baseSpecs = {
        "Brand": brand,
        "Product Type": item.name,
        "Model Line": `${adj} ${item.name}`,
        "SKU ID": `AMZ-PRM-${2000 + id}`
    };
    const n = id + itemIndex * 5;

    if (category === "Electronics") return {...baseSpecs, ...buildElectronicsSpecs(item.kind, n) };
    if (category === "Fitness") return {...baseSpecs, ...buildFitnessSpecs(item.kind, n) };
    if (category === "Home & Kitchen") return {...baseSpecs, ...buildHomeSpecs(item.kind, n) };
    if (category === "Fashion") return {...baseSpecs, ...buildFashionSpecs(item.kind, n) };
    return {...baseSpecs, ...buildBeautySpecs(item.kind, n) };
}

// Build a curated catalog where each category item type appears once.
const PRODUCTS = [];
const dealsCount = 20;
const titleSet = new Set();
let globalId = 1;

CATEGORIES.forEach((category, catIdx) => {
    const brandList = BRANDS[category];
    const items = interleaveCatalogByKind(ITEM_CATALOG[category]);

    items.forEach(([name, kind], itemIdx) => {
        const item = { name, kind };
        const brand = brandList[(itemIdx * 5 + catIdx * 3) % brandList.length];
        const adj = ADJECTIVES[(itemIdx * 7 + catIdx * 11) % ADJECTIVES.length];
        const title = `${brand} ${adj} ${item.name}`;

        // Strict dedup guard
        if (titleSet.has(title)) return;
        titleSet.add(title);

        const id = globalId++;
        const i = id - 1; // zero-based index for variation math

        const desc = buildProductDescription(category, item, brand, adj);
        const price = buildPrice(category, item.kind, itemIdx + catIdx * 100);
        const origPrice = itemIdx % 4 === 0 ? Math.round(price * (1.12 + (itemIdx % 5) * 0.04) / 50) * 50 - 0.01 : null;

        // Dynamic ratings
        const ratingBase = 3.5 + ((i * 0.131 + catIdx * 0.29) % 1.5);
        const rating = parseFloat(Math.min(5.0, Math.max(3.5, ratingBase)).toFixed(1));
        const reviewsCount = 45 + ((i * 23 + catIdx * 97) % 2800);

        const imgs = getProductImageUrls(category, item, brand, id);
        const image = imgs.small;
        const imageLarge = imgs.large;
        const specs = buildProductSpecs(category, item, brand, adj, id, itemIdx);

        // Reviews
        const reviewsList = [];
        const reviewCount = 1 + (i % 3);
        for (let r = 0; r < reviewCount; r++) {
            const user = USER_NAMES[(i + r * 3) % USER_NAMES.length];
            const date = new Date(2026, (3 + r) % 12, 1 + (i + r) % 28).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

            let text = "";
            let reviewRating = 5;
            if (rating >= 4.6) {
                text = REVIEW_TEMPLATES_5[(i + r) % REVIEW_TEMPLATES_5.length];
                reviewRating = 5;
            } else if (rating >= 4.0) {
                text = REVIEW_TEMPLATES_4[(i + r) % REVIEW_TEMPLATES_4.length];
                reviewRating = 4;
            } else {
                text = REVIEW_TEMPLATES_3[(i + r) % REVIEW_TEMPLATES_3.length];
                reviewRating = 3;
            }
            text = `${text.replace("product", item.name.toLowerCase()).replace("brand", brand)} Good match for ${item.name.toLowerCase()} shoppers.`;
            reviewsList.push({ user, rating: reviewRating, date, text });
        }

        // Build a small SVG fallback (embedded data URL) so we always have a visible image.
        const theme = IMAGE_THEMES[category] || IMAGE_THEMES.Electronics;
        const hue = (theme.hue + id * 11) % 360;
        const bg = `hsl(${hue}, 60%, 92%)`;
        const accent = `hsl(${hue}, 70%, 48%)`;
        const fallbackSvg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'>` +
            `<rect width='100%' height='100%' fill='${bg}'/>` +
            `<text x='50%' y='40%' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='20' fill='${accent}' font-weight='700'>${escapeSvg(brand)}</text>` +
            `<text x='50%' y='54%' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='18' fill='#334155'>${escapeSvg(item.name)}</text>` +
            `</svg>`;
        const fallbackImage = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(fallbackSvg);

        PRODUCTS.push({
            id,
            title,
            itemType: item.name,
            category,
            description: desc,
            price,
            originalPrice: origPrice,
            rating,
            reviews: reviewsCount,
            tag: itemIdx % 13 === 0 ? "Best Seller" : (itemIdx % 17 === 0 ? "Deals" : (itemIdx % 19 === 0 ? "New Arrival" : "")),
            image,
            imageLarge,
            fallbackImage,
            specs,
            reviewsList
        });
    });
});

// Use real Unsplash product images. Keep the URLs already generated by getProductImageUrls().
// Optionally try to load local images from images/images_map.json (generated by map_real_images.js).
// If local file exists, swap images; otherwise keep the real Unsplash URLs.
function getPremiumUnsplashUrl(category, itemName) {
    const clean = itemName.toLowerCase();
    
    // Electronics Mapping
    if (category === "Electronics") {
        if (clean.includes("earbuds") || clean.includes("neckband") || clean.includes("audio") || clean.includes("earphone")) {
            return "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("headphones")) {
            return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("laptop") || clean.includes("ultrabook") || clean.includes("notebook")) {
            if (clean.includes("gaming")) {
                return "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80";
            }
            return "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("tablet") || clean.includes("e-reader") || clean.includes("drawing")) {
            return "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("phone") || clean.includes("smartphone")) {
            return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("webcam") || clean.includes("camera") || clean.includes("action camera")) {
            return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("drone")) {
            return "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("smart display")) {
            return "images/real/electronics_smartdisplay.png";
        }
        if (clean.includes("monitor") || clean.includes("display")) {
            return "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("keyboard")) {
            return "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("mouse")) {
            return "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("router") || clean.includes("wi-fi") || clean.includes("mesh")) {
            return "images/real/electronics_router.png";
        }
        if (clean.includes("speaker") || clean.includes("soundbar")) {
            return "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("charger") || clean.includes("power") || clean.includes("cable") || clean.includes("dock")) {
            return "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("ssd") || clean.includes("storage") || clean.includes("hard drive")) {
            return "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80";
        }
        return "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=600&q=80"; // generic gadget
    }
    
    // Fitness Mapping
    if (category === "Fitness") {
        if (clean.includes("dumbbell") || clean.includes("kettlebell") || clean.includes("barbell") || clean.includes("weight")) {
            return "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("watch") || clean.includes("tracker") || clean.includes("wearable")) {
            return "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("yoga") || clean.includes("mat") || clean.includes("block") || clean.includes("strap") || clean.includes("pilates")) {
            return "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("treadmill") || clean.includes("cardio")) {
            return "https://images.unsplash.com/photo-1578762560072-46cf152c9741?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("bike") || clean.includes("rowing")) {
            return "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("gloves") || clean.includes("punching")) {
            return "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("bottle") || clean.includes("shaker") || clean.includes("hydration")) {
            return "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("shoes") || clean.includes("sneakers") || clean.includes("footwear")) {
            return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("bag") || clean.includes("duffel")) {
            return "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80";
        }
        return "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"; // generic fitness
    }

    // Home & Kitchen Mapping
    if (category === "Home & Kitchen") {
        if (clean.includes("espresso") || clean.includes("coffee") || clean.includes("barista")) {
            return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("blender") || clean.includes("juicer") || clean.includes("processor") || clean.includes("mixer")) {
            return "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("vacuum") || clean.includes("cleaner") || clean.includes("mop") || clean.includes("sweeper")) {
            return "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("chair") || clean.includes("desk") || clean.includes("furniture")) {
            return "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("toaster") || clean.includes("microwave") || clean.includes("fryer") || clean.includes("cooker") || clean.includes("appliance")) {
            return "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("knife") || clean.includes("cookware") || clean.includes("pan") || clean.includes("skillet")) {
            return "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("lamp") || clean.includes("bulb") || clean.includes("lighting")) {
            return "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("sheet") || clean.includes("textile") || clean.includes("bed")) {
            return "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80";
        }
        return "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"; // generic home
    }

    // Fashion Mapping
    if (category === "Fashion") {
        if (clean.includes("sneakers") || clean.includes("shoes") || clean.includes("boots") || clean.includes("footwear") || clean.includes("flats") || clean.includes("loafers") || clean.includes("sandals")) {
            return "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("jacket") || clean.includes("coat") || clean.includes("blazer") || clean.includes("outerwear")) {
            return "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("backpack") || clean.includes("bag") || clean.includes("handbag") || clean.includes("tote") || clean.includes("sling") || clean.includes("duffel") || clean.includes("luggage")) {
            return "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("t-shirt") || clean.includes("shirt") || clean.includes("polo") || clean.includes("sweater") || clean.includes("hoodie") || clean.includes("top")) {
            return "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("jeans") || clean.includes("pants") || clean.includes("trousers") || clean.includes("shorts") || clean.includes("skirt") || clean.includes("leggings") || clean.includes("jogger") || clean.includes("bottom")) {
            return "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("dress")) {
            return "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("wallet") || clean.includes("belt") || clean.includes("scarf") || clean.includes("sunglasses") || clean.includes("watch") || clean.includes("accessory") || clean.includes("tie")) {
            return "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80";
        }
        return "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"; // generic fashion
    }

    // Beauty Mapping
    if (category === "Beauty") {
        if (clean.includes("lipstick") || clean.includes("lip") || clean.includes("balm") || clean.includes("gloss")) {
            return "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("serum") || clean.includes("skincare") || clean.includes("toner") || clean.includes("cleanser") || clean.includes("moisturizer")) {
            return "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("dryer") || clean.includes("hair") || clean.includes("flat iron") || clean.includes("shampoo") || clean.includes("conditioner")) {
            return "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("makeup") || clean.includes("mascara") || clean.includes("foundation") || clean.includes("powder") || clean.includes("eyeshadow") || clean.includes("blush")) {
            return "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("shaving") || clean.includes("razor") || clean.includes("grooming")) {
            return "https://images.unsplash.com/photo-1626290541334-7fc3df0840ee?auto=format&fit=crop&w=600&q=80";
        }
        if (clean.includes("fragrance") || clean.includes("parfum") || clean.includes("cologne")) {
            return "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80";
        }
        return "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"; // generic beauty
    }

    return "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=600&q=80";
}

function getPremiumLocalFallbackUrl(category, itemName) {
    const clean = itemName.toLowerCase();
    
    if (category === "Electronics") {
        if (clean.includes("smart display")) {
            return "images/real/electronics_smartdisplay.png";
        }
        if (clean.includes("router") || clean.includes("wi-fi") || clean.includes("mesh")) {
            return "images/real/electronics_router.png";
        }
        if (clean.includes("laptop") || clean.includes("computer") || clean.includes("ultrabook") || clean.includes("notebook") || clean.includes("tablet") || clean.includes("monitor") || clean.includes("display")) {
            return "images/real/electronics_laptop.png";
        }
        if (clean.includes("earbuds") || clean.includes("headphones") || clean.includes("neckband") || clean.includes("audio") || clean.includes("earphone") || clean.includes("speaker") || clean.includes("soundbar")) {
            return "images/real/electronics_headphones.png";
        }
        return "images/real/electronics_phone.png";
    }
    
    if (category === "Fitness") {
        if (clean.includes("yoga") || clean.includes("mat") || clean.includes("block") || clean.includes("strap") || clean.includes("pilates") || clean.includes("hydration") || clean.includes("bottle") || clean.includes("shaker")) {
            return "images/real/fitness_yoga.png";
        }
        if (clean.includes("watch") || clean.includes("tracker") || clean.includes("wearable")) {
            return "images/real/fitness_watch.png";
        }
        return "images/real/fitness_dumbbells.png";
    }
    
    if (category === "Home & Kitchen") {
        if (clean.includes("espresso") || clean.includes("coffee") || clean.includes("barista") || clean.includes("blender") || clean.includes("juicer") || clean.includes("processor") || clean.includes("mixer") || clean.includes("toaster") || clean.includes("microwave") || clean.includes("fryer") || clean.includes("cooker") || clean.includes("knife") || clean.includes("cookware")) {
            return "images/real/home_espresso.png";
        }
        if (clean.includes("chair") || clean.includes("desk") || clean.includes("furniture") || clean.includes("sheet") || clean.includes("bed") || clean.includes("textile")) {
            return "images/real/home_chair.png";
        }
        return "images/real/home_vacuum.png";
    }
    
    if (category === "Fashion") {
        if (clean.includes("backpack") || clean.includes("bag") || clean.includes("handbag") || clean.includes("tote") || clean.includes("sling") || clean.includes("duffel") || clean.includes("luggage") || clean.includes("wallet") || clean.includes("belt")) {
            return "images/real/fashion_backpack.png";
        }
        if (clean.includes("sneakers") || clean.includes("shoes") || clean.includes("boots") || clean.includes("footwear") || clean.includes("flats") || clean.includes("loafers") || clean.includes("sandals")) {
            return "images/real/fashion_sneakers.png";
        }
        return "images/real/fashion_jacket.png";
    }
    
    if (category === "Beauty") {
        if (clean.includes("lipstick") || clean.includes("lip") || clean.includes("balm") || clean.includes("gloss") || clean.includes("makeup") || clean.includes("mascara") || clean.includes("foundation") || clean.includes("powder") || clean.includes("blush") || clean.includes("eyeshadow")) {
            return "images/real/beauty_lipstick.png";
        }
        if (clean.includes("serum") || clean.includes("skincare") || clean.includes("toner") || clean.includes("cleanser") || clean.includes("moisturizer") || clean.includes("cream")) {
            return "images/real/beauty_serum.png";
        }
        return "images/real/beauty_dryer.png";
    }
    
    return "images/real/electronics_laptop.png";
}

(function applyRealImages() {
    PRODUCTS.forEach((p) => {
        // 1. Assign unique dynamic image search URLs based on specific product names
        p.image = getPremiumUnsplashUrl(p.category, p.title);
        p.imageLarge = p.image;

        // 2. Assign high-quality local generated images as fallbacks matching the product kind
        p.fallbackImage = getPremiumLocalFallbackUrl(p.category, p.title);
    });
})();

// App State Management
let cart = [];
let wishlist = [];
let activeCategory = "All";
let searchQuery = "";
let currentCheckoutStep = 1;
let visibleCount = 40;

// User Profile state
let userProfile = {
    signedIn: false,
    username: "Guest Customer",
    walletBalance: 0.00,
    email: "guest@amazonpremium.com"
};

// Public helper to replace a product's images at runtime.
// Usage (in browser console): setProductImage(12, 'images/sony-x1-500.jpg', 'images/sony-x1-1200.jpg')
window.setProductImage = function(productId, smallUrl, largeUrl) {
    const prod = PRODUCTS.find(p => p.id === Number(productId));
    if (!prod) {
        console.warn('setProductImage: product id not found', productId);
        return false;
    }

    // Update product model
    prod.image = smallUrl || prod.image;
    prod.imageLarge = largeUrl || prod.imageLarge || prod.image;

    // Update any img elements that reference this product by data-id or alt text
    // 1) product-card by data-id
    const cardImg = document.querySelector(`.product-card[data-id="${prod.id}"] img.product-image`);
    if (cardImg) {
        cardImg.setAttribute('data-remote', prod.image);
        cardImg.setAttribute('data-large', prod.imageLarge);
        cardImg.removeAttribute('data-remote-loaded');
        // set small placeholder first, then attempt to load remote
        try { cardImg.src = prod.fallbackImage || prod.image; } catch (e) {}
        const pre = new Image();
        pre.onload = function() {
            cardImg.src = prod.image;
            cardImg.dataset.remoteLoaded = '1';
        };
        pre.onerror = function() { /* keep fallback */ };
        pre.src = prod.image;
    }

    // 2) any deals or other images matching alt/title
    document.querySelectorAll('img.product-image').forEach(img => {
        if (img.alt && img.alt.trim() === prod.title) {
            img.setAttribute('data-remote', prod.image);
            img.setAttribute('data-large', prod.imageLarge);
            img.src = prod.fallbackImage || prod.image;
            const pre2 = new Image();
            pre2.onload = function() {
                img.src = prod.image;
                img.dataset.remoteLoaded = '1';
            };
            pre2.onerror = function() {};
            pre2.src = prod.image;
        }
    });

    console.log('setProductImage: updated product', prod.id, prod.title);
    return true;
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
let trackingOrders = [{
        orderId: "AMZ-827491-DEL",
        itemName: "Sony Pro Wireless Headphones - Model 100",
        price: 12499.00,
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

// Glassmorphic Theme Switcher
window.toggleTheme = function() {
    const isDark = document.documentElement.classList.toggle("dark-theme");
    localStorage.setItem("amazon-theme", isDark ? "dark" : "light");
};

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

// Filter helper
function getFilteredProducts() {
    return PRODUCTS.filter(prod => {
        const matchesCategory = activeCategory === "All" || prod.category === activeCategory;
        const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prod.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

let renderTimeoutId = null;

function getSkeletonGridHTML() {
    let html = "";
    for (let i = 0; i < 8; i++) {
        html += `
      <div class="skeleton-card">
        <div class="skeleton-shimmer"></div>
        <div class="skeleton-image"></div>
        <div class="skeleton-text category"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text short"></div>
        <div class="skeleton-text rating"></div>
        <div class="skeleton-text price"></div>
        <div class="skeleton-actions">
          <div class="skeleton-btn-1"></div>
          <div class="skeleton-btn-2"></div>
        </div>
      </div>
    `;
    }
    return html;
}

// Render Products Grid based on Category & Search Filter
function renderProducts(isScroll = false) {
    const gridContainer = document.getElementById("products-feed");
    if (!gridContainer) return;

    const filteredProducts = getFilteredProducts();

    if (isScroll) {
        const visibleProducts = filteredProducts.slice(0, visibleCount);
        renderProductCards(visibleProducts, gridContainer);
        return;
    }

    // Reset counts and show skeleton loader
    visibleCount = 40;
    const countLabel = document.getElementById("results-count");
    if (countLabel) {
        countLabel.textContent = "Loading premium deals...";
    }
    gridContainer.innerHTML = getSkeletonGridHTML();

    if (renderTimeoutId) {
        clearTimeout(renderTimeoutId);
    }

    renderTimeoutId = setTimeout(() => {
        if (countLabel) {
            countLabel.textContent = `Showing ${filteredProducts.length} premium deals`;
        }
        if (filteredProducts.length === 0) {
            gridContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;" class="fade-in-element">
            <h3>No matching items found. Try searching for "Sony", "Dyson", "Nike", "CeraVe" or reset the filters.</h3>
          </div>
        `;
            return;
        }
        const visibleProducts = filteredProducts.slice(0, visibleCount);
        renderProductCards(visibleProducts, gridContainer, true);
    }, 550);
}

function renderProductCards(visibleProducts, gridContainer, withFade = false) {
    const cardsHTML = visibleProducts.map(prod => {
        const originalPriceHTML = prod.originalPrice ? `<span class="original-price">₹${prod.originalPrice.toFixed(2)}</span>` : "";
        const badgeHTML = prod.tag ? `<span class="badge-tag">${prod.tag}</span>` : "";
        const priceWhole = Math.floor(prod.price);
        const priceFraction = (prod.price % 1).toFixed(2).split(".")[1] || "00";
        const wishActive = wishlist.includes(prod.id) ? "active" : "";
        const fadeClass = withFade ? "fade-in-element" : "";

        return `
      <div class="product-card ${fadeClass}" data-id="${prod.id}">
        ${badgeHTML}
        
        <!-- Interactive Wishlist Heart Button -->
        <button class="wishlist-heart-btn ${wishActive}" onclick="toggleWishlistItem(event, ${prod.id})" title="Save to list">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        <div class="product-image-box" onclick="openQuickView(${prod.id})">
          <img class="product-image" src="${prod.fallbackImage}" data-remote="${prod.image}" data-large="${prod.imageLarge || prod.image}" data-fallback="${prod.fallbackImage}" alt="${prod.title}" loading="lazy">
        </div>
        <div class="product-category-tag">${prod.category}</div>
        <h4 class="product-title" onclick="openQuickView(${prod.id})">${prod.title}</h4>
        <div class="product-rating">
          <span class="stars">${getRatingStarsHTML(prod.rating)}</span>
          <span class="rating-count">(${prod.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="price-currency">₹</span>
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

    gridContainer.innerHTML = cardsHTML;
}

// Hero Auto-Sliding Promo Carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    if (slides.length === 0) return;

    function nextSlide() {
        const slider = document.querySelector(".hero-slider");
        if (slider && slider.classList.contains("hide")) return;
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

    // Spread deal picks across the whole catalog so the panel does not repeat one category.
    const dealStep = Math.max(1, Math.floor(PRODUCTS.length / dealsCount));
    const dealProducts = PRODUCTS.filter((_, index) => index % dealStep === 0).slice(0, dealsCount);

    container.innerHTML = dealProducts.map((prod, index) => {
        const claimedPct = Math.floor(25 + (index * 4)) % 100;
        const dealPrice = (prod.price * 0.85).toFixed(2);

        return `
      <div class="deal-card">
        <span style="background-color: #cc0c39; color: white; padding: 4px 8px; font-size: 11px; font-weight: 700; border-radius: 4px; align-self: flex-start; margin-bottom: 10px;">15% OFF</span>
        <img class="product-image" src="${prod.fallbackImage}" data-remote="${prod.image}" data-large="${prod.imageLarge || prod.image}" data-fallback="${prod.fallbackImage}" alt="${prod.title}">
        <h4 class="product-title" onclick="openQuickView(${prod.id})">${prod.title}</h4>
        <div style="margin-top: auto; padding-top: 10px;">
          <div style="font-size: 18px; font-weight: 800; color: #cc0c39; margin-bottom: 5px;">₹${dealPrice} <span style="color: #777; text-decoration: line-through; font-size: 13px; font-weight: 500;">₹${prod.price.toFixed(2)}</span></div>
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
        balLabel.textContent = `₹${userProfile.walletBalance.toFixed(2)}`;
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
    alert(`Success! Successfully credited ₹${claimAmount.toFixed(2)} to your Premium Wallet.`);

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
        <h4 style="margin-bottom: 5px;">₹{name}'s Premium ${type} Registry</h4>
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
        <div style="font-weight: 700; margin-bottom: 10px;">₹${prod.price.toFixed(2)}</div>
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
            <span class="quickview-price">₹${prod.price.toFixed(2)}</span>
            ${prod.originalPrice ? `<span class="original-price">₹${prod.originalPrice.toFixed(2)}</span>` : ""}
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
          <strong style="font-size: 22px; color: #2e7d32;">₹${userProfile.walletBalance.toFixed(2)}</strong>
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
              <h4 style="color: var(--amazon-dark); font-size: 15px; margin-bottom: 5px;">₹{order.itemName}</h4>
              <p style="font-size: 13px; color: #666; line-height: 1.4;">Status: <span style="font-weight: 700; color: #2e7d32;">₹{order.status}</span> - ${order.statusDescription}</p>
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
    if (subtotalLabel) subtotalLabel.textContent = "₹0.00";
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
          <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
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
  
  if (subtotalLabel) subtotalLabel.textContent = `₹${subtotal.toFixed(2)}`;
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

  // Infinite scroll listener
  window.addEventListener("scroll", () => {
    const feed = document.getElementById("products-feed");
    if (feed && !feed.classList.contains("hide")) {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 800) {
        const filtered = getFilteredProducts();
        if (visibleCount < filtered.length) {
          visibleCount += 40;
          renderProducts(true);
        }
      }
    }
  });
}

// Automatically attach load handlers and preloaders to all product images
function attachImageLoadHandlers() {
    document.querySelectorAll('img.product-image').forEach(img => {
        if (img.dataset.onerrorAttached) return;
        img.addEventListener('error', function onErr() {
            const fallback = img.dataset.fallback;
            img.dataset.fallback = ""; // Clear to prevent loops
            if (fallback) {
                img.src = fallback;
                return;
            }
            try {
                const title = img.alt || 'Product Image';
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"><rect width="100%" height="100%" fill="#f4f6f8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9aa4ac" font-family="Inter, Arial, sans-serif" font-size="20">${escapeSvg(title)}</text></svg>`;
                img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
            } catch (e) {
                img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"><rect width="100%" height="100%" fill="#f4f6f8"/></svg>');
            }
        });
        img.dataset.onerrorAttached = '1';
    });

    document.querySelectorAll('img.product-image[data-remote]').forEach(img => {
        const remote = img.getAttribute('data-remote');
        if (!remote) return;
        if (img.dataset.remoteLoaded) return;
        
        const p = new Image();
        p.onload = function() {
            try { 
                img.src = remote; 
                img.dataset.remoteLoaded = '1'; 
            } catch (e) { /* ignore */ }
        };
        p.onerror = function() {
            // leave fallback in place
        };
        p.src = remote;
    });
}

// Observe DOM mutations to automatically attach load handlers to any new dynamically loaded image
(function setupImageObserver() {
    // Initial run on startup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachImageLoadHandlers);
    } else {
        attachImageLoadHandlers();
    }
    
    const observer = new MutationObserver(() => {
        attachImageLoadHandlers();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();

// Expose state getters for external components (like the quick-access widget)
window.getCartState = () => cart;
window.getWishlistState = () => wishlist;
window.getTrackingOrdersState = () => trackingOrders;