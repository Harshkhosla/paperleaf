import PaperCupArt from "./PaperCupArt.jsx";

export default function ProductPhoto({
  product,
  showCupBadge = false,
  className = "",
  imageClassName = "",
}) {
  if (!product?.image?.src) {
    return <PaperCupArt sizeMl={product?.sizeMl} label={product?.size} />;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-cream-100 ${className}`}>
      <img
        src={product.image.src}
        alt={product.image.alt || product.name}
        className={`h-full w-full object-cover ${imageClassName}`}
        style={{ objectPosition: product.image.position || "center" }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-white/10" />
      {showCupBadge && (
        <div className="absolute bottom-4 right-4 h-24 w-24 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-card sm:h-28 sm:w-28">
          <PaperCupArt sizeMl={product.sizeMl} label={product.size} />
        </div>
      )}
    </div>
  );
}
