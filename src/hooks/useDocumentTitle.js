import { useEffect } from "react";
import { brand } from "../config/brand.js";

export function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — ${brand.name}` : `${brand.name} — ${brand.tagline}`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
