import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader.jsx";
import { products } from "../../data/products.js";

export default function CategoryStrip() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          eyebrow="Our range"
          title="Explore Our Tableware Range"
          subtitle="From everyday tea glasses to premium double-wall cups, our sustainable tableware combines environmental responsibility with exceptional quality and performance."
        />
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="snap-start min-w-[220px] max-w-[220px] card group"
            >
              <div className="aspect-square overflow-hidden bg-cream-100">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
                  {p.sizes?.[0]}
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
