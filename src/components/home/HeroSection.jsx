import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Recycle, ShieldCheck } from "lucide-react";
import { brand } from "../../config/brand.js";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-leaf-gradient">
      <div className="absolute inset-0 -z-0 opacity-50 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-200 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cream-300 blur-3xl" />
      </div>
      <div className="container relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-4">Eco-friendly tableware</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
            Premium paper cups, made for every pour.
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft text-base md:text-lg leading-relaxed">
            From 100 ml cutting chai to 300 ml takeaway coffee — food-safe,
            biodegradable cups crafted in Delhi and ready to print with your brand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">
              View All Sizes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Custom Quote
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat icon={<Leaf className="h-5 w-5" />} value="100%" label="Biodegradable" />
            <Stat icon={<ShieldCheck className="h-5 w-5" />} value="FSSAI" label="Food-safe" />
            <Stat icon={<Recycle className="h-5 w-5" />} value="6" label="Cup sizes" />
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Sustainable paper cups"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:flex absolute -left-8 bottom-8 bg-white rounded-2xl shadow-card p-4 gap-3 items-center max-w-xs">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-primary-700">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Plastic-free packaging</p>
              <p className="text-ink-mute text-xs">A cleaner planet, one cup at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-xl bg-white/70 backdrop-blur p-3 border border-white">
      <div className="flex items-center gap-2 text-primary-700">{icon}<span className="font-semibold">{value}</span></div>
      <p className="text-xs text-ink-mute mt-1">{label}</p>
    </div>
  );
}
