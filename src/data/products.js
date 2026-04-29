const cupPhotos = {
  woodenTray:
    "https://images.pexels.com/photos/8858941/pexels-photo-8858941.jpeg?auto=compress&cs=tinysrgb&w=1400",
  cafeStack:
    "https://images.pexels.com/photos/10214353/pexels-photo-10214353.jpeg?auto=compress&cs=tinysrgb&w=1400",
  coffeePair:
    "https://images.pexels.com/photos/20282353/pexels-photo-20282353.jpeg?auto=compress&cs=tinysrgb&w=1400",
  topView:
    "https://images.pexels.com/photos/7319334/pexels-photo-7319334.jpeg?auto=compress&cs=tinysrgb&w=1400",
  minimalistPair:
    "https://images.pexels.com/photos/6312134/pexels-photo-6312134.jpeg?auto=compress&cs=tinysrgb&w=1400",
  warmCafe:
    "https://images.pexels.com/photos/17926902/pexels-photo-17926902.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

// Catalog: paper cups in six sizes.
export const products = [
  {
    slug: "paper-cup-100ml",
    name: "Paper Cup — 100 ml",
    size: "100 ml",
    sizeMl: 100,
    short: "Cutting chai & espresso shots.",
    description:
      "Perfectly sized for a quick cutting chai or a strong espresso shot. Compact, lightweight and food-safe — ideal for tea stalls, offices and events.",
    features: [
      "100% biodegradable food-grade board",
      "Leak-resistant inner coating",
      "Smooth rolled rim for safe sipping",
      "Custom printing in 1–4 colors",
    ],
    image: {
      src: cupPhotos.cafeStack,
      alt: "Stacked paper cups in a warm cafe setting",
      position: "center",
    },
    featured: true,
  },
  {
    slug: "paper-cup-130ml",
    name: "Paper Cup — 130 ml",
    size: "130 ml",
    sizeMl: 130,
    short: "Standard tea & water cup.",
    description:
      "The everyday tea and water cup used at offices, weddings and dispensers. Sturdy walls and crisp print surface.",
    features: [
      "FSSAI-compliant board",
      "Stackable for easy storage",
      "Bulk-pack ready",
      "Custom branding available",
    ],
    image: {
      src: cupPhotos.minimalistPair,
      alt: "Paper cups arranged on a wooden tray",
      position: "center",
    },
    featured: true,
  },
  {
    slug: "paper-cup-150ml",
    name: "Paper Cup — 150 ml",
    size: "150 ml",
    sizeMl: 150,
    short: "Filter coffee & masala chai.",
    description:
      "Built for filter coffee and masala chai. The 150 ml size hits the sweet spot between portion size and cost-per-cup.",
    features: [
      "Heat-stable up to 90°C",
      "Smooth print finish",
      "Greaseproof inner liner",
      "Perfect for cafes & tea brands",
    ],
    image: {
      src: cupPhotos.coffeePair,
      alt: "Fresh coffee served in paper cups",
      position: "center",
    },
    featured: true,
  },
  {
    slug: "paper-cup-200ml",
    name: "Paper Cup — 200 ml",
    size: "200 ml",
    sizeMl: 200,
    short: "Coffee, juice & cold drinks.",
    description:
      "A versatile 200 ml cup for hot coffee, fresh juices and chilled beverages. Comfortable hand feel with a confident rim.",
    features: [
      "Hot & cold compatible",
      "Compatible with sip-lids",
      "Print-friendly matte surface",
      "Ideal for QSR & cloud kitchens",
    ],
    image: {
      src: cupPhotos.topView,
      alt: "Takeaway paper cups with wooden stirrers on a tray",
      position: "center",
    },
    featured: true,
  },
  {
    slug: "paper-cup-250ml",
    name: "Paper Cup — 250 ml",
    size: "250 ml",
    sizeMl: 250,
    short: "Takeaway lattes & lassi.",
    description:
      "The most-loved takeaway size. Holds a generous latte, lassi or buttermilk without sloshing.",
    features: [
      "Reinforced base for stability",
      "Snap-fit lid compatible",
      "Premium print surface",
      "Stackable for transport",
    ],
    image: {
      src: cupPhotos.warmCafe,
      alt: "Paper cup stack ready for takeaway service",
      position: "center",
    },
    featured: true,
  },
  {
    slug: "paper-cup-300ml",
    name: "Paper Cup — 300 ml",
    size: "300 ml",
    sizeMl: 300,
    short: "Large coffee & smoothies.",
    description:
      "The largest in our range — perfect for full-size coffees, smoothies and milkshakes. Strong sidewall keeps the cup rigid all the way down.",
    features: [
      "Extra-thick board (≥ 280 GSM)",
      "Lid & sleeve compatible",
      "Stable base, no flex",
      "Great print real estate",
    ],
    image: {
      src: cupPhotos.coffeePair,
      alt: "Paper cups filled with frothy coffee",
      position: "center",
    },
    featured: true,
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export const featuredProducts = products.filter((p) => p.featured);
