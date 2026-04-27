export const blogs = [
  {
    slug: "choosing-the-right-kraft-food-tray",
    title: "How To Choose The Right Kraft Food Tray For Your Food Business",
    date: "24 Mar 2026",
    excerpt:
      "Packaging is no longer just transport — it tells your brand story. Here's how to pick the right kraft tray for your menu.",
    cover:
      "https://images.unsplash.com/photo-1604908554049-49e8d04a4f3a?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Choosing the right kraft food tray begins with understanding your menu. Wet curries, fried snacks and bakery items all behave differently in packaging.",
      "Look for unbleached, food-grade kraft board with a greaseproof inner liner. The right GSM (typically 250–300) balances rigidity with cost.",
      "Finally, consider the print surface. Kraft offers an honest, rustic feel that pairs beautifully with one or two-color logos.",
    ],
  },
  {
    slug: "benefits-of-paper-food-containers",
    title: "Top 7 Benefits Of Paper Food Containers For Takeaway Businesses",
    date: "10 Dec 2025",
    excerpt:
      "Customers judge takeaway by both taste and presentation. Paper containers nail both while keeping the planet in mind.",
    cover:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Paper containers communicate care. They feel premium, look clean and align with what eco-conscious customers expect today.",
      "They are lightweight, stackable and microwave-friendly variants exist for hot meals.",
      "Paired with custom printing, they double as a marketing surface every time food is delivered.",
    ],
  },
  {
    slug: "biodegradable-paper-cups",
    title: "The Truth About Biodegradable Paper Cups",
    date: "15 Nov 2025",
    excerpt:
      "Are paper cups really sustainable? A look at how modern coatings, sourcing and recycling change the answer.",
    cover:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Biodegradable paper cups use plant-based or PE-free water resistant linings, which decompose far faster than traditional polyethylene.",
      "Sourcing matters too — FSC-certified board ensures the forests behind the cup are responsibly managed.",
      "When paired with the right recycling stream, paper cups close the loop in a way plastic simply can't.",
    ],
  },
  {
    slug: "eco-packaging-brand-loyalty",
    title: "How Eco Friendly Packaging Boosts Brand Loyalty",
    date: "05 Nov 2025",
    excerpt:
      "Sustainability is no longer a buzzword — it's a strategy that customers reward with repeat business.",
    cover:
      "https://images.unsplash.com/photo-1556909211-d5b0b1f1d8b1?auto=format&fit=crop&w=1200&q=70",
    body: [
      "When customers see thoughtful, recyclable packaging they remember it.",
      "It signals that your brand cares — beyond the product itself.",
      "Across cafes, cloud kitchens and grocers, eco packaging consistently lifts repeat-order rates.",
    ],
  },
  {
    slug: "sustainable-materials-2026",
    title: "Top 7 Sustainable Materials Revolutionizing Eco Paper Boxes",
    date: "21 Aug 2025",
    excerpt:
      "From bagasse to PLA, here are the materials redefining what 'paper packaging' even means.",
    cover:
      "https://images.unsplash.com/photo-1607452096010-b8b0e8b7c1c4?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Bagasse, a sugarcane fibre by-product, has become the standard for compostable plates and bowls.",
      "PLA linings replace petroleum-based PE for true biodegradability.",
      "Recycled kraft, FSC virgin pulp and bamboo blends round out a powerful new material palette.",
    ],
  },
  {
    slug: "paper-vs-plastic-cups",
    title: "What Manufacturers Say About Paper vs Plastic Cups",
    date: "21 Jul 2025",
    excerpt:
      "We asked makers on both sides what truly separates paper from plastic in 2026.",
    cover:
      "https://images.unsplash.com/photo-1585238342028-4bbc1c20c2b1?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Plastic still wins on raw cost — but loses across every other lens that matters.",
      "Paper cups today match plastic on leak resistance and beat it on customer perception.",
      "With single-use plastic bans rolling out worldwide, the long-term answer is clear.",
    ],
  },
  {
    slug: "biodegradable-food-boxes",
    title: "The Role Of Biodegradable Food Boxes In A Greener Future",
    date: "19 Jul 2025",
    excerpt:
      "Each year millions of tons of plastic enter the ocean. Biodegradable food boxes are part of the answer.",
    cover:
      "https://images.unsplash.com/photo-1584270354949-c26b0d5b0a40?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Biodegradable food boxes break down in months — not centuries.",
      "Modern formulations rival plastic on strength and oil resistance.",
      "Switching is easier than ever, especially when paired with custom branding.",
    ],
  },
  {
    slug: "are-paper-cups-eco-friendly",
    title: "Are Paper Cups Truly Eco Friendly? A Deep Dive",
    date: "01 Jul 2025",
    excerpt:
      "Paper cups feel green — but how green are they really? Here's the full lifecycle picture.",
    cover:
      "https://images.unsplash.com/photo-1517663154410-d77f8d3f9d1e?auto=format&fit=crop&w=1200&q=70",
    body: [
      "From raw material to landfill, paper cups outperform plastic by every meaningful metric.",
      "The remaining gap — recycling infrastructure — is closing fast.",
      "For brands, the choice is no longer paper or plastic. It's paper or irrelevance.",
    ],
  },
];

export function getBlog(slug) {
  return blogs.find((b) => b.slug === slug);
}
