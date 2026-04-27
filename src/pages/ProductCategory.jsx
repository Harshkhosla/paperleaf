import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { getProduct, products } from "../data/products.js";
import ProductCard from "../components/ui/ProductCard.jsx";
import PaperCupArt from "../components/ui/PaperCupArt.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function ProductCategory() {
  const { slug } = useParams();
  const product = getProduct(slug);
  useDocumentTitle(product ? product.name : "Product");

  if (!product) {
    return (
      <section className="section">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-3 text-ink-mute">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary mt-6">View all products</Link>
        </div>
      </section>
    );
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="bg-leaf-gradient py-12 md:py-16">
        <div className="container">
          <p className="eyebrow mb-2"><Link to="/products" className="hover:text-primary-700">Products</Link> / {product.name}</p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">{product.name}</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">{product.short}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-card">
            <PaperCupArt sizeMl={product.sizeMl} label={product.size} />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">About {product.name}</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{product.description}</p>

            {product.size && (
              <div className="mt-6">
                <p className="eyebrow mb-3">Size</p>
                <span className="rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
                  {product.size}
                </span>
              </div>
            )}

            {product.features && (
              <div className="mt-8">
                <p className="eyebrow mb-3">Features</p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-ink-soft">
                      <Check className="h-4 w-4 mt-0.5 text-primary-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 rounded-2xl bg-cream-50 p-6 border border-cream-200">
              <h3 className="font-semibold text-lg">Need a custom quote?</h3>
              <p className="mt-1 text-sm text-ink-mute">
                Tell us your sizes, quantities and branding — we'll respond within 24 hours.
              </p>
              <Link to={`/contact?product=${product.slug}`} className="btn-primary mt-4">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
