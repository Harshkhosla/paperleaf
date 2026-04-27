import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
              alt="Sustainable production"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden md:block bg-primary-600 text-white rounded-2xl p-5 shadow-card max-w-xs">
            <p className="font-display text-2xl">10+ Years</p>
            <p className="text-sm text-cream-100/80">
              of crafting eco-friendly tableware for India's leading brands.
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-3">Our story</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Journey Towards a Plastic-Free Future
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            A plastic-free earth isn't just a dream — it's a commitment we put into
            practice through carefully designed paper cups, bowls and glasses that
            are safe, dependable and gentle on the planet.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Every product is built to provide a responsible, clean, user-friendly
            experience. Sustainability and practicality, combined.
          </p>
          <Link to="/about" className="btn-primary mt-8">
            Know More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
