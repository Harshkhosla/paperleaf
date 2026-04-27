import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogs } from "../data/blogs.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function Blog() {
  useDocumentTitle("Blog");
  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-20">
        <div className="container">
          <p className="eyebrow mb-3">Journal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Insights on sustainable packaging and food-safe design.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Long-form thinking on materials, regulation and how brands can move
            beyond single-use plastic.
          </p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (
              <article key={b.slug} className="card flex flex-col">
                <Link to={`/blog/${b.slug}`} className="block aspect-[16/10] overflow-hidden bg-cream-100">
                  <img
                    src={b.cover}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
                    {b.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    <Link to={`/blog/${b.slug}`} className="hover:text-primary-700">
                      {b.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-ink-mute line-clamp-3">{b.excerpt}</p>
                  <Link
                    to={`/blog/${b.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
