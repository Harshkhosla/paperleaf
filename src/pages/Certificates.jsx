import { Award } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const certs = [
  { name: "FSSAI", body: "Food Safety and Standards Authority of India" },
  { name: "ISO 9001:2015", body: "Quality Management System" },
  { name: "ISO 22000", body: "Food Safety Management" },
  { name: "FSC Certified", body: "Responsibly sourced paper" },
  { name: "BRC Global", body: "Packaging Materials Standard" },
  { name: "MSME Verified", body: "Registered manufacturing unit" },
];

export default function Certificates() {
  useDocumentTitle("Certificates");
  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-20">
        <div className="container">
          <p className="eyebrow mb-3">Compliance</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Certified for safety, sourcing and sustainability.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Every product is built around standards that food brands and
            regulators trust.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Our certificates"
            title="Trust, documented"
            subtitle="A few of the certifications we hold across food safety, quality and responsible sourcing."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c) => (
              <div key={c.name} className="card p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-primary-700">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-mute">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
