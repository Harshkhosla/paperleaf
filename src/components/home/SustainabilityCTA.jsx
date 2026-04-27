import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SustainabilityCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-3xl bg-primary-700 text-cream-100 p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-primary-200 font-semibold uppercase tracking-[0.2em] text-xs">
              <Sparkles className="h-4 w-4" /> Sustainability at the Core
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              Customize packaging that tells your brand story.
            </h3>
            <p className="mt-3 max-w-xl text-cream-100/80">
              From bespoke prints to bulk orders, we partner with you to design
              tableware that reduces waste and amplifies your identity.
            </p>
          </div>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-cream-100 self-start md:self-center">
            Customize Your Packaging <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
