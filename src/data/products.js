import imgSherwaniIvory from '../assets/images/sherwani-ivory.jpg';
import imgBandhgalaBlue from '../assets/images/bandhgala-blue.jpg';
import imgKurtaGold from '../assets/images/kurta-gold.jpg';
import imgKurtaPurple from '../assets/images/kurta-purple.jpg';
import imgSherwaniRedGold from '../assets/images/sherwani-red-gold.jpg';

export const products = [
    {
        id: 1,
        name: "Royal Ivory Sherwani",
        category: "Wedding",
        price: "₹45,000",
        image: imgSherwaniIvory,
        description: "Hand-embroidered ivory sherwani with intricate zardozi work. Perfect for the modern groom.",
        details: ["Fabric: Raw Silk", "Work: Zardozi & Thread", "Includes: Sherwani, Churidar, Stole"]
    },
    {
        id: 2,
        name: "Midnight Blue Bandhgala",
        category: "Indo-Western",
        price: "₹28,000",
        image: imgBandhgalaBlue,
        description: "Velvet bandhgala in deep midnight blue with antique gold buttons.",
        details: ["Fabric: Premium Velvet", "Fit: Slim Fit", "Occasion: Reception/Cocktail"]
    },
    {
        id: 3,
        name: "Crimson Royal Sherwani",
        category: "Wedding",
        price: "₹65,000",
        image: imgSherwaniRedGold,
        description: "Majestic crimson sherwani with heavy gold embroidery for a grand wedding look.",
        details: ["Fabric: Velvet", "Work: Heavy Zardozi", "Includes: Sherwani, Dupatta, Churidar"]
    },
    {
        id: 4,
        name: "Gold Brocade Kurta",
        category: "Festive",
        price: "₹18,000",
        image: imgKurtaGold,
        description: "Opulent gold brocade kurta for a regal festive look.",
        details: ["Fabric: Banarasi Brocade", "Work: Self-woven", "Includes: Kurta, Churidar"]
    },
    {
        id: 5,
        name: "Regal Purple Indo-Western",
        category: "Indo-Western",
        price: "₹32,000",
        image: imgKurtaPurple,
        description: "Contemporary indo-western set in regal purple with subtle detailing.",
        details: ["Fabric: Italian Suiting", "Style: Asymmetric", "Occasion: Sangeet"]
    },
    {
        id: 6,
        name: "Classic Ivory Kurta Set",
        category: "Festive",
        price: "₹12,500",
        image: imgSherwaniIvory, // Reusing ivory image for now as a placeholder for a simple kurta or using the same aesthetic
        description: "Timeless ivory kurta set with elegant embroidery.",
        details: ["Fabric: Silk Blend", "Includes: Kurta, Pajama", "Comfort Fit"]
    }
];
