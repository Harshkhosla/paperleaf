// Catalog: paper cups in six sizes. Each cup is rendered as a vector
// illustration scaled to its volume — see components/ui/PaperCupArt.jsx.
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
    featured: true,
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export const featuredProducts = products.filter((p) => p.featured);
