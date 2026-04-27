import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function Privacy() {
  useDocumentTitle("Privacy Policy");
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <div className="prose prose-sm md:prose mt-8 text-ink-soft space-y-4">
          <p>
            We respect your privacy. This placeholder policy describes the
            information we collect and how we use it. Please replace it with your
            finalized policy before going live.
          </p>
          <h2 className="font-semibold text-ink mt-6">Information we collect</h2>
          <p>
            We collect details you submit through the enquiry form (name, contact
            information, company, product interest and message) only for the
            purpose of responding to your enquiry.
          </p>
          <h2 className="font-semibold text-ink mt-6">How we use it</h2>
          <p>
            Your information is used to share quotes, samples and follow-up
            communications. We never sell your data and only share it with team
            members directly involved in fulfilling your request.
          </p>
          <h2 className="font-semibold text-ink mt-6">Cookies</h2>
          <p>
            This site uses minimal cookies for routing and analytics. You can
            disable cookies in your browser settings at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
