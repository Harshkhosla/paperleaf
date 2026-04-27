import { useMemo, useState } from "react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";
import { products } from "../data/products.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const filters = [
  { id: "all", label: "All" },
  { id: "cups", label: "Cups & Glasses", match: (p) => /cup|glass/i.test(p.name) },
  { id: "bowls", label: "Bowls & Tubs", match: (p) => /bowl|tub/i.test(p.name) },
  { id: "boxes", label: "Boxes & Trays", match: (p) => /box|tray/i.test(p.name) },
];

export default function Products() {
  useDocumentTitle("Products");
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const f = filters.find((x) => x.id === active);
    return active === "all" || !f?.match ? products : products.filter(f.match);
  }, [active]);

  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-20">
        <div className="container">
          <p className="eyebrow mb-3">Catalog</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Sustainable tableware for every service moment.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Browse the full range — from everyday paper glasses to premium
            double-wall cups, salad bowls and meal trays.
          </p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeader
            eyebrow="Our products"
            title="Explore the full range"
            subtitle="Click any product to view sizes and request a quote."
          />
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === f.id
                    ? "bg-primary-600 text-white shadow-card"
                    : "bg-white text-ink-soft hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
