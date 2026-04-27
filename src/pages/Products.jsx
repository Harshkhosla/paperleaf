import { useMemo, useState } from "react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";
import { products } from "../data/products.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const filters = [
  { id: "all", label: "All sizes" },
  ...products.map((p) => ({ id: p.size, label: p.size })),
];

export default function Products() {
  useDocumentTitle("Paper Cups");
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.size === active);
  }, [active]);

  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-20">
        <div className="container">
          <p className="eyebrow mb-3">Catalog</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Eco-friendly paper cups for every pour.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Six trusted sizes — from a 100 ml cutting chai to a 300 ml takeaway
            coffee. Food-safe, biodegradable and ready to print with your brand.
          </p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeader
            eyebrow="Our paper cups"
            title="Pick the right size"
            subtitle="Tap a size to filter, or click any cup for full details and a quote."
          />
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === f.id
                    ? "bg-primary-600 text-white shadow-card"
                    : "bg-white text-ink-soft hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
