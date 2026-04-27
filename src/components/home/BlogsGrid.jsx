import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import { blogs } from "../../data/blogs.js";

export default function BlogsGrid() {
  const recent = blogs.slice(0, 3);
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <SectionHeader
          eyebrow="From the journal"
          title="Our Blogs"
          subtitle="Insights on sustainable packaging, food-safety and what it takes to build an eco-conscious brand."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {recent.map((b) => (
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
                  Blog · {b.date}
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
        <div className="mt-10 text-center">
          <Link to="/blog" className="btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
