import './globals.css';

export const metadata = {
  title: 'WealthAfrica — Where Global Capital Meets African Opportunity',
  description:
    "WealthAfrica is an investment facilitation platform headquartered in New York, bridging international capital with high-impact African opportunities through market intelligence, government partnerships, and the continent's premier investment publication.",
  keywords:
    'Africa investment, African opportunity, WealthAfrica, investment facilitation, government advisory, PPP Africa, African markets, investment publication',
  authors: [{ name: 'WealthAfrica Ltd' }],
  openGraph: {
    title: 'WealthAfrica — Where Global Capital Meets African Opportunity',
    description:
      'An investment facilitation platform bridging international capital with high-impact African opportunities.',
    url: 'https://wealthafrica.africa',
    siteName: 'WealthAfrica',
    images: [
      {
        url: '/images/senegal-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'WealthAfrica — Senegal Presidential Edition',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WealthAfrica — Where Global Capital Meets African Opportunity',
    description:
      'An investment facilitation platform bridging international capital with high-impact African opportunities.',
    images: ['/images/senegal-cover.jpg'],
  },
  metadataBase: new URL('https://wealthafrica.africa'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600;700&family=Bebas+Neue&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
