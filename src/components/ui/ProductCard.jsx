import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductPhoto from "./ProductPhoto.jsx";

export default function ProductCard({ product }) {
  return (
    <article className="card group flex flex-col">
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <div className="absolute inset-0 transition duration-500 group-hover:scale-105">
          <ProductPhoto product={product} />
        </div>
        {product.size && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary-700 shadow-card">
            {product.size}
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold">
          <Link to={`/products/${product.slug}`} className="hover:text-primary-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-mute">{product.short}</p>
        <div className="mt-5 pt-4 border-t border-cream-200 flex items-center justify-between">
          <Link
            to={`/contact?product=${product.slug}`}
            className="text-sm font-semibold text-primary-700 inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            ENQUIRE NOW <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={`/products/${product.slug}`}
            className="text-xs text-ink-mute hover:text-primary-700"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
