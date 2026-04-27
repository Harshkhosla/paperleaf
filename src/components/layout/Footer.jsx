import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { brand } from "../../config/brand.js";
import { categories } from "../../data/categories.js";

// Inline brand icons (lucide-react v1+ removed brand icons).
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.45 9.93v-7.02H7.9v-2.91h2.41V9.92c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.49v1.78h2.64l-.42 2.91h-2.22V22c4.79-.75 8.45-4.91 8.45-9.93z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-cream-100 mt-12">
      <div className="container py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-500 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">{brand.name}</span>
          </Link>
          <p className="mt-4 text-sm text-cream-100/80 leading-relaxed">
            A plastic-free earth isn't just a dream. It's a commitment we put into
            practice with every paper cup, bowl and glass we make.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={brand.socials.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-700 hover:bg-primary-600 transition"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={brand.socials.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-700 hover:bg-primary-600 transition"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={brand.socials.linkedin}
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-700 hover:bg-primary-600 transition"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/certificates" className="hover:text-white">Certificates</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link to={`/products/${c.slug}`} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-300" />
              <span>{brand.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="h-4 w-4 shrink-0 text-primary-300" />
              <a href={`tel:${brand.phoneRaw}`} className="hover:text-white">
                {brand.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="h-4 w-4 shrink-0 text-primary-300" />
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container py-5 text-xs text-cream-100/70 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Crafted with care for a plastic-free future.</p>
        </div>
      </div>
    </footer>
  );
}
