import SectionHeader from "../ui/SectionHeader.jsx";
import ProductCard from "../ui/ProductCard.jsx";
import { featuredProducts } from "../../data/products.js";

export default function TopSellers() {
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <SectionHeader
          eyebrow="Best sellers"
          title="Cups Chosen By Premium Brands"
          subtitle="Every size in our range is made from 100% biodegradable, food-safe board — trusted across cafes, cloud kitchens and event organisers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
