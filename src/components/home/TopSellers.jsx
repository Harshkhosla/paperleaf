import SectionHeader from "../ui/SectionHeader.jsx";
import ProductCard from "../ui/ProductCard.jsx";
import { featuredProducts } from "../../data/products.js";

export default function TopSellers() {
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <SectionHeader
          eyebrow="Best sellers"
          title="Top Sellers Chosen By Premium Brands"
          subtitle="Made from 100% biodegradable, food-safe materials. Trusted across cafes, cloud kitchens, FMCG brands and event organisers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
