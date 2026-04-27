import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

export default function NotFound() {
  useDocumentTitle("Not Found");
  return (
    <section className="section">
      <div className="container text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-4xl md:text-6xl font-bold">Page not found</h1>
        <p className="mt-4 text-ink-mute max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary">Back to home</Link>
          <Link to="/products" className="btn-outline">View products</Link>
        </div>
      </div>
    </section>
  );
}
