import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function Terms() {
  useDocumentTitle("Terms & Conditions");
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        <div className="prose prose-sm md:prose mt-8 text-ink-soft space-y-4">
          <p>
            These terms govern your use of this website. By accessing the site you
            agree to the terms set out here. This is a sample placeholder and
            should be replaced with your final legal copy before going live.
          </p>
          <h2 className="font-semibold text-ink mt-6">1. Use of the site</h2>
          <p>
            You agree to use this site for lawful purposes only and not to
            interfere with its operation, security or other users' enjoyment of it.
          </p>
          <h2 className="font-semibold text-ink mt-6">2. Orders & quotes</h2>
          <p>
            All quotes are indicative and confirmed only upon receipt of a signed
            purchase order. Lead times depend on artwork sign-off, board
            availability and shipment destination.
          </p>
          <h2 className="font-semibold text-ink mt-6">3. Intellectual property</h2>
          <p>
            All content, branding and product imagery on this site are the
            property of their respective owners and may not be reused without
            prior written consent.
          </p>
        </div>
      </div>
    </section>
  );
}
