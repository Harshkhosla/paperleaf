import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { brand } from "../../config/brand.js";
import { categories } from "../../data/categories.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", hasMenu: true },
  { to: "/blog", label: "Blog" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-cream-200">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-primary-700">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-bold tracking-tight">{brand.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.hasMenu ? (
              <div key={l.to} ref={productsRef} className="relative">
                <button
                  type="button"
                  onClick={() => setProductsOpen((o) => !o)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-ink-soft hover:text-primary-700 hover:bg-primary-50 inline-flex items-center gap-1"
                >
                  {l.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {productsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white shadow-card border border-cream-200 p-2 grid grid-cols-1 gap-0.5">
                    <Link
                      to="/products"
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-primary-700 hover:bg-primary-50"
                    >
                      All products →
                    </Link>
                    <div className="h-px bg-cream-200 my-1" />
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/products/${c.slug}`}
                        className="px-3 py-2 rounded-lg text-sm text-ink-soft hover:bg-primary-50 hover:text-primary-700"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "text-primary-700 bg-primary-50"
                      : "text-ink-soft hover:text-primary-700 hover:bg-primary-50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary-50 text-primary-700"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream-200 bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive
                      ? "text-primary-700 bg-primary-50"
                      : "text-ink-soft hover:bg-primary-50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 self-start">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
