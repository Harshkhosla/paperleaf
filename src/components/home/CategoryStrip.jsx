import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader.jsx";
import PaperCupArt from "../ui/PaperCupArt.jsx";
import { products } from "../../data/products.js";

export default function CategoryStrip() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          eyebrow="Our sizes"
          title="Explore Our Paper Cup Range"
          subtitle="Six trusted sizes for tea, coffee, juice and cold drinks — all food-safe, biodegradable and ready to print with your brand."
        />
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="snap-start min-w-[220px] max-w-[220px] card group"
            >
              <div className="aspect-square overflow-hidden">
                <PaperCupArt sizeMl={p.sizeMl} label={p.size} className="transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
                  {p.size}
                </p>
                <h3 className="text-base font-semibold mt-1">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
