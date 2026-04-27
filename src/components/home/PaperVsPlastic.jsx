import { Check, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import { comparisonRows } from "../../data/comparison.js";

export default function PaperVsPlastic() {
  return (
    <section className="section bg-leaf-gradient">
      <div className="container">
        <SectionHeader
          eyebrow="The shift"
          title="The Future of Serving is Sustainable Tableware"
          subtitle="A side-by-side look at how paper tableware compares to traditional plastic across the metrics that matter."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-6 lg:p-8 border-t-4 border-primary-500">
            <h3 className="text-2xl font-bold text-primary-700">Paper Cups</h3>
            <p className="text-sm text-ink-mute mt-1">Eco-friendly choice</p>
            <ul className="mt-6 space-y-4">
              {comparisonRows.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-700">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">{r.title}</p>
                    <p className="text-sm text-ink-soft">{r.paper}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 lg:p-8 border-t-4 border-rose-400 bg-cream-50">
            <h3 className="text-2xl font-bold text-rose-600">Plastic Cups</h3>
            <p className="text-sm text-ink-mute mt-1">Conventional choice</p>
            <ul className="mt-6 space-y-4">
              {comparisonRows.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-600">
                    <X className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">{r.title}</p>
                    <p className="text-sm text-ink-soft">{r.plastic}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
