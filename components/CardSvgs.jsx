export function CardSvg1() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="240" fill="#0f1923" />
      <path d="M0 160 Q50 140 100 160 Q150 180 200 160 Q250 140 300 160 Q350 180 400 160 L400 240 L0 240Z" fill="rgba(25,80,140,0.2)" />
      <text x="60" y="80" fill="rgba(201,168,76,0.12)" fontSize="48" fontFamily="Georgia" fontWeight="bold">$500B</text>
      <path d="M280 200 L310 170 L340 185 L370 150" stroke="rgba(201,168,76,0.2)" strokeWidth="2" fill="none" />
      <circle cx="370" cy="150" r="3" fill="rgba(201,168,76,0.4)" />
    </svg>
  );
}

export function CardSvg2() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="240" fill="#0f1923" />
      <rect x="50" y="100" width="24" height="100" fill="rgba(196,30,42,0.12)" rx="2" />
      <rect x="84" y="70" width="24" height="130" fill="rgba(196,30,42,0.16)" rx="2" />
      <rect x="118" y="90" width="24" height="110" fill="rgba(196,30,42,0.13)" rx="2" />
      <rect x="152" y="50" width="24" height="150" fill="rgba(196,30,42,0.2)" rx="2" />
      <rect x="186" y="60" width="24" height="140" fill="rgba(201,168,76,0.15)" rx="2" />
      <rect x="220" y="80" width="24" height="120" fill="rgba(201,168,76,0.12)" rx="2" />
      <rect x="254" y="40" width="24" height="160" fill="rgba(201,168,76,0.18)" rx="2" />
      <text x="290" y="190" fill="rgba(201,168,76,0.06)" fontSize="56" fontFamily="Georgia" fontWeight="bold">$2.6T</text>
    </svg>
  );
}

export function CardSvg3() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="240" fill="#0f1923" />
      <circle cx="140" cy="110" r="50" fill="none" stroke="rgba(196,30,42,0.15)" strokeWidth="2" />
      <circle cx="260" cy="110" r="50" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="2" />
      <text x="115" y="115" fill="rgba(255,255,255,0.1)" fontSize="13" fontFamily="sans-serif">Public</text>
      <text x="235" y="115" fill="rgba(255,255,255,0.1)" fontSize="13" fontFamily="sans-serif">Private</text>
      <circle cx="200" cy="200" r="22" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5" />
      <circle cx="200" cy="200" r="22" fill="none" stroke="rgba(196,30,42,0.3)" strokeWidth="5" strokeDasharray="83 138" transform="rotate(-90 200 200)" />
      <text x="189" y="205" fill="rgba(255,255,255,0.2)" fontSize="13" fontFamily="Georgia" fontWeight="bold">60%</text>
    </svg>
  );
}

export function CardSvg4() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <radialGradient id="rg4" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#162D50" />
          <stop offset="100%" stopColor="#0A1628" />
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="url(#rg4)" />
      {/* Subtle grid */}
      <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="0" y1="240" x2="400" y2="240" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="80" y1="0" x2="80" y2="320" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="320" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="320" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <line x1="320" y1="0" x2="320" y2="320" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      {/* Gold bars — bottom left */}
      <rect x="28" y="238" width="76" height="30" rx="3" fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
      <rect x="38" y="222" width="56" height="22" rx="3" fill="rgba(201,168,76,0.13)" stroke="rgba(201,168,76,0.32)" strokeWidth="1" />
      <rect x="48" y="208" width="36" height="18" rx="3" fill="rgba(201,168,76,0.09)" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
      {/* Gold bars — top right */}
      <rect x="296" y="58" width="76" height="30" rx="3" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
      <rect x="306" y="42" width="56" height="22" rx="3" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
      {/* Central figure */}
      <text x="200" y="158" fontFamily="Georgia,serif" fontSize="74" fontWeight="bold" fill="#C9A84C" textAnchor="middle">$360B</text>
      {/* Rule */}
      <line x1="126" y1="178" x2="274" y2="178" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
      {/* Label */}
      <text x="200" y="204" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="bold" letterSpacing="3" fill="rgba(255,255,255,0.45)" textAnchor="middle">IMF GOLD RESERVE</text>
      {/* Sub-label */}
      <text x="200" y="228" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="1" fill="rgba(201,168,76,0.55)" textAnchor="middle">90.5M OUNCES  ·  $4,000+/oz</text>
    </svg>
  );
}
