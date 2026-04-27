import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="card group flex flex-col">
      <Link to={`/products/${product.slug}`} className="block aspect-[4/3] overflow-hidden bg-cream-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold">
          <Link to={`/products/${product.slug}`} className="hover:text-primary-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-mute">{product.short}</p>
        {product.sizes && (
          <p className="mt-3 text-xs text-ink-mute">
            <span className="font-medium text-ink-soft">Sizes:</span>{" "}
            {product.sizes.slice(0, 3).join(" · ")}
            {product.sizes.length > 3 ? "…" : ""}
          </p>
        )}
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
