import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogs, getBlog } from "../data/blogs.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlog(slug);
  useDocumentTitle(post ? post.title : "Blog");

  if (!post) {
    return (
      <section className="section">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/blog" className="btn-primary mt-6">Back to blog</Link>
        </div>
      </section>
    );
  }

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="bg-white">
        <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden bg-cream-100">
          <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="container max-w-3xl py-12 md:py-16">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary-700 hover:gap-2 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <p className="eyebrow mt-6 mb-3">{post.date}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 space-y-5 text-ink-soft leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="section bg-cream-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((b) => (
              <article key={b.slug} className="card flex flex-col">
                <Link to={`/blog/${b.slug}`} className="block aspect-[16/10] overflow-hidden bg-cream-100">
                  <img src={b.cover} alt={b.title} loading="lazy" className="h-full w-full object-cover" />
                </Link>
                <div className="p-6">
                  <p className="text-xs text-primary-600 font-semibold uppercase">{b.date}</p>
                  <h3 className="mt-2 font-semibold leading-snug">
                    <Link to={`/blog/${b.slug}`} className="hover:text-primary-700">{b.title}</Link>
                  </h3>
                  <Link to={`/blog/${b.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
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
