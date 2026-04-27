import { Award, Globe, Leaf, Recycle, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { brand } from "../config/brand.js";

const values = [
  {
    icon: Leaf,
    title: "Plant-first design",
    body: "Every product starts with the question: how can this leave the planet better?",
  },
  {
    icon: ShieldCheck,
    title: "Food-safe by default",
    body: "FSSAI-compliant board and food-grade linings on every order.",
  },
  {
    icon: Recycle,
    title: "Built to compost",
    body: "Materials chosen for end-of-life — not just point-of-use.",
  },
  {
    icon: Award,
    title: "Trusted by brands",
    body: "Premium cafes, FMCG brands and event partners across India.",
  },
];

export default function About() {
  useDocumentTitle("About");
  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-24">
        <div className="container">
          <p className="eyebrow mb-3">About {brand.name}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Replacing plastic with care, craft and conviction.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            We design and manufacture sustainable paper tableware for businesses
            that believe great service shouldn't cost the planet.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Our facility"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              From a small idea to a movement for plastic-free India.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              {brand.name} began with a simple belief — that the cup in your hand
              shouldn't outlive the moment it served. We started with a single
              line of paper cups and grew into a full tableware partner for some of
              India's most loved food brands.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Today our team designs, prints and ships across the country, helping
              every partner replace plastic without compromising on quality, food
              safety or aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeader
            eyebrow="What we stand for"
            title="Our values"
            subtitle="Four principles that guide every product, every print and every shipment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-primary-700">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-3">
          <Stat icon={<Users className="h-5 w-5" />} value="200+" label="Brand partners" />
          <Stat icon={<Globe className="h-5 w-5" />} value="50+" label="Cities served" />
          <Stat icon={<Recycle className="h-5 w-5" />} value="10M+" label="Plastic items replaced" />
        </div>
      </section>
    </>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="card p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-primary-700">
        {icon}
      </div>
      <p className="mt-4 text-3xl font-display font-bold">{value}</p>
      <p className="text-sm text-ink-mute">{label}</p>
    </div>
  );
}
