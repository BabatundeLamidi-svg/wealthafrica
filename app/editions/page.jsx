'use client';

import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EDITIONS = [
  { id: 1, label: 'WealthAfrica\nSenegal\nPresidential\nEdition', href: 'https://www.calameo.com/read/0009460785c15266fa19c', image: '/images/WealthAfrica-01.jpg' },
  { id: 2, label: 'WealthAfrica\nNigeria\nEdition', href: '/analysis/golden-mirage', image: '/images/GoldMirage.jpg' },
  { id: 3, label: 'WealthAfrica\nKenya\nEdition', href: '#' },
  { id: 4, label: 'WealthAfrica\nGhana\nEdition', href: '#' },
  { id: 5, label: 'WealthAfrica\nRwanda\nEdition', href: '#' },
  { id: 6, label: 'WealthAfrica\nSouth Africa\nEdition', href: '#' },
];

export default function EditionsPage() {
  const carouselRef = useRef(null);

  function scroll(dir) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector('.edition-card');
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    carousel.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
  }

  return (
    <>
      <Header />
      <main className="editions-page">
        <div className="container">
          <div className="editions-heading">
            <div className="editions-heading-label">WealthAfrica</div>
            <h1>Editions</h1>
            <p>
              WealthAfrica&apos;s flagship print and digital publications — commissioned for
              governments, investors, and institutions shaping Africa&apos;s economic future.
            </p>
          </div>

          <div className="editions-carousel-wrap">
            <div className="editions-carousel" ref={carouselRef}>
              {EDITIONS.map(ed => (
                <a
                  key={ed.id}
                  href={ed.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edition-card"
                >
                  {ed.image
                    ? <img src={ed.image} alt={ed.label.replace(/\n/g, ' ')} className="edition-card-img" />
                    : (
                      <div className="edition-card-watermark">
                        {ed.label.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    )
                  }
                </a>
              ))}
            </div>

            <div className="editions-controls">
              <button
                className="editions-ctrl-btn"
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                className="editions-ctrl-btn"
                onClick={() => scroll(1)}
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
