import { FileText, Mail, MapPin } from "lucide-react";
import EnquiryForm from "../components/forms/EnquiryForm.jsx";
import { brand } from "../config/brand.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function Contact() {
  useDocumentTitle("Contact");
  return (
    <>
      <section className="bg-leaf-gradient py-16 md:py-20">
        <div className="container">
          <p className="eyebrow mb-3">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Let's build packaging that tells your story.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">
            Share a few details and our team will respond with sizes, MOQ and
            sample options within 24 hours.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Visit us"
              body={brand.address}
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              body={
                <a href={`mailto:${brand.email}`} className="block hover:text-primary-700">
                  {brand.email}
                </a>
              }
            />
            {brand.gstin && (
              <InfoCard
                icon={<FileText className="h-5 w-5" />}
                title="GSTIN / State"
                body={
                  <>
                    <span className="block font-mono">{brand.gstin}</span>
                    <span className="block text-ink-mute mt-1">
                      State: {brand.state}
                    </span>
                  </>
                }
              />
            )}
            <div className="rounded-3xl overflow-hidden aspect-video bg-cream-100">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.93%2C28.34%2C77.0%2C28.40&amp;layer=mapnik"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="card p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">Send an enquiry</h2>
            <p className="mt-2 text-ink-mute text-sm">
              All fields marked are required. We'll never share your details.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, body }) {
  return (
    <div className="card p-6 flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-700">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <div className="text-sm text-ink-soft mt-1">{body}</div>
      </div>
    </div>
  );
}
