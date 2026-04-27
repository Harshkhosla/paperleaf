// Vector illustration of a paper cup. Proportions scale with size.
const SIZE_STYLES = {
  100: { topW: 70, baseW: 50, h: 170 },
  130: { topW: 76, baseW: 54, h: 188 },
  150: { topW: 82, baseW: 58, h: 205 },
  200: { topW: 88, baseW: 62, h: 222 },
  250: { topW: 94, baseW: 66, h: 240 },
  300: { topW: 100, baseW: 70, h: 258 },
};

export default function PaperCupArt({ sizeMl = 200, label = "200 ML", className = "" }) {
  const cfg = SIZE_STYLES[sizeMl] || SIZE_STYLES[200];
  const cx = 200;
  const baseY = 340;
  const topY = baseY - cfg.h;
  const id = `pc${sizeMl}`;

  const widthAt = (y) => {
    const t = (y - topY) / (baseY - topY);
    return cfg.topW + (cfg.baseW - cfg.topW) * t;
  };

  const bandTop = topY + cfg.h * 0.4;
  const bandBot = topY + cfg.h * 0.62;
  const wTop = widthAt(bandTop);
  const wBot = widthAt(bandBot);
  const bandMid = (bandTop + bandBot) / 2;

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`Paper cup ${label}`}
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5efe0" />
          <stop offset="100%" stopColor="#dcebd3" />
        </linearGradient>
        <linearGradient id={`cup-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#fffdf6" />
          <stop offset="100%" stopColor="#ebe2c8" />
        </linearGradient>
        <linearGradient id={`rim-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dccda0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4ad6e" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="400" fill={`url(#bg-${id})`} />

      {/* Decorative leaf-like blobs */}
      <circle cx="55" cy="65" r="55" fill="#bcd7ab" opacity="0.45" />
      <circle cx="345" cy="335" r="65" fill="#94bd7a" opacity="0.32" />
      <circle cx="350" cy="80" r="22" fill="#94bd7a" opacity="0.28" />

      {/* Steam wisps for hot drink feel */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M ${cx - 30 + i * 30} ${topY - 22}
              c -6 -10, 6 -18, 0 -32`}
          stroke="#3e6a2c"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      ))}

      {/* Shadow under cup */}
      <ellipse
        cx={cx}
        cy={baseY + 10}
        rx={cfg.baseW + 14}
        ry="7"
        fill="#23381c"
        opacity="0.2"
      />

      {/* Cup body trapezoid */}
      <path
        d={`M ${cx - cfg.topW},${topY}
            L ${cx + cfg.topW},${topY}
            L ${cx + cfg.baseW},${baseY}
            L ${cx - cfg.baseW},${baseY} Z`}
        fill={`url(#cup-${id})`}
        stroke="#3e6a2c"
        strokeWidth="1.6"
      />

      {/* Soft side highlight */}
      <path
        d={`M ${cx - cfg.topW + 14},${topY + 10}
            L ${cx - cfg.baseW + 14},${baseY - 6}`}
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Top rim ellipse */}
      <ellipse
        cx={cx}
        cy={topY}
        rx={cfg.topW}
        ry="10"
        fill={`url(#rim-${id})`}
        stroke="#3e6a2c"
        strokeWidth="1.6"
      />

      {/* Liquid surface */}
      <ellipse cx={cx} cy={topY} rx={cfg.topW - 8} ry="7" fill="#3a2a1d" />
      <ellipse cx={cx} cy={topY - 0.5} rx={cfg.topW - 14} ry="3" fill="#5a4128" opacity="0.85" />
      <ellipse cx={cx - 16} cy={topY - 2} rx="14" ry="2.5" fill="#ffffff" opacity="0.45" />

      {/* Brand band wrapping the cup */}
      <path
        d={`M ${cx - wTop},${bandTop}
            L ${cx + wTop},${bandTop}
            L ${cx + wBot},${bandBot}
            L ${cx - wBot},${bandBot} Z`}
        fill="#3e6a2c"
      />
      {/* Slim accent stripes above/below the band */}
      <line x1={cx - wTop} y1={bandTop - 4} x2={cx + wTop} y2={bandTop - 4} stroke="#3e6a2c" strokeWidth="1.5" opacity="0.6" />
      <line x1={cx - wBot} y1={bandBot + 4} x2={cx + wBot} y2={bandBot + 4} stroke="#3e6a2c" strokeWidth="1.5" opacity="0.6" />

      {/* Leaf icon */}
      <path
        d={`M ${cx - 44} ${bandMid + 1}
            c -1 -8, 6 -15, 14 -15
            c 0 8, -6 15, -14 15 z`}
        fill="#bcd7ab"
      />
      <path
        d={`M ${cx - 38} ${bandMid - 6} l 4 8`}
        stroke="#3e6a2c"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Size label */}
      <text
        x={cx + 6}
        y={bandMid + 6}
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#fffefb"
        letterSpacing="1.2"
      >
        {label.toUpperCase()}
      </text>
    </svg>
  );
}
