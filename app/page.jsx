import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import NewsletterStrip from '@/components/NewsletterStrip';
import EditionsCarousel from '@/components/EditionsCarousel';
import { getAllArticles, calcReadTime } from '@/lib/articles';

const VIDEOS = [
  {
    id: 'jVs4NBoHZic',
    embedId: 'jVs4NBoHZic',
    title: "Aliko Dangote: Building Africa's industrial future from the ground up | Podcast | In Good Company",
    description: "Nicolai Tangen sits down with Aliko Dangote, Founder and CEO of the Dangote Group, Africa's largest industrial conglomerate, to explore his journey from a small Lagos trading firm to a sprawling empire spanning cement, fertiliser, petrochemicals, and the world's largest single-train oil refinery.",
  },
  {
    id: 'iOrvOwBRsdk',
    embedId: 'iOrvOwBRsdk',
    title: 'How Boring Businesses Create Billionaires',
    description: "A Princeton economist's research reveals that many of America's millionaires built their fortunes through private businesses in industries most people overlook.",
  },
  {
    id: '2v4J7cV5LEg',
    embedId: '2v4J7cV5LEg',
    title: 'Infrastructure, Fiscal Space, and Capital Market Funding',
    description: "Why Nigeria's and Africa's infrastructure conversation must now shift from ambition to financing architecture.",
  },
];

const STATS = [
  { number: '$500B+', label: 'Opportunities Mapped' },
  { number: '20+', label: 'Years in African Markets' },
  { number: 'HQ', label: 'New York · 800 Third Avenue' },
  { number: '50K', label: 'Copies — Senegal Edition' },
];

export const metadata = {
  title: 'WealthAfrica — Intelligence for Institutional Capital',
  description:
    'Editorial intelligence for investors, policymakers, and institutions engaged with African capital markets.',
  openGraph: {
    title: 'WealthAfrica — Intelligence for Institutional Capital',
    description: 'Where Global Capital Meets African Opportunity.',
    images: [{ url: '/images/senegal-cover.jpg', width: 1200, height: 630 }],
  },
};

const SECTION_PATHS = {
  Analysis: 'analysis',
  'Long Read': 'long-reads',
  Brief: 'briefs',
  Interview: 'interviews',
};

export default function HomePage() {
  const allArticles = getAllArticles();
  const lead = allArticles[0];
  const rest = allArticles.slice(1);
  const firstChunk = rest.slice(0, 3);
  const secondChunk = rest.slice(3);

  const leadPath = SECTION_PATHS[lead.category] || 'analysis';
  const leadReadTime = calcReadTime(lead.blocks);

  return (
    <>
      <Header />
      <main className="home-page">
        {/* ── Lead Story ── constrained within container ── */}
        <div className="lead-story">
          <div className="container">
            <Link href={`/${leadPath}/${lead.slug}`} className="lead-story-hero">
              {lead.hero ? (
                <Image
                  src={lead.hero}
                  alt={lead.title}
                  width={1600}
                  height={520}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              ) : (
                <div className="lead-story-img-placeholder" />
              )}
            </Link>
            <div className="lead-story-body">
              <div className="lead-story-category">{lead.category}</div>
              <h2 className="lead-story-title">{lead.title}</h2>
              <p className="lead-story-excerpt">{lead.excerpt}</p>
              <div className="lead-story-meta">
                <span>{lead.author}</span>
                <span>·</span>
                <span>{lead.date}</span>
                <span>·</span>
                <span>{leadReadTime}</span>
              </div>
              <Link href={`/${leadPath}/${lead.slug}`} className="lead-story-read-more">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* ── First article chunk ── */}
        {firstChunk.length > 0 && (
          <div className="container">
            <div className="article-grid">
              {firstChunk.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}

        {/* ── Newsletter strip ── */}
        <NewsletterStrip />

        {/* ── Remaining articles ── */}
        {secondChunk.length > 0 && (
          <div className="container">
            <div className="article-grid">
              {secondChunk.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}
        {/* ── Editions Preview ── */}
        <section className="home-editions">
          <div className="container">
            <div className="home-section-header">
              <div>
                <h2 className="home-section-title">Editions</h2>
                <p className="home-section-sub">Stories That Move Capital</p>
              </div>
              <Link href="/editions" className="home-section-link">View All Editions →</Link>
            </div>
            <EditionsCarousel />
          </div>
        </section>

        {/* ── Videos Preview ── */}
        <section className="home-videos">
          <div className="container">
            <div className="home-section-header">
              <div>
                <h2 className="home-section-title">Videos</h2>
                <p className="home-section-sub">Analysis, Interviews &amp; Market Intelligence</p>
              </div>
              <Link href="/videos" className="home-section-link">View All Videos →</Link>
            </div>
            <div className="videos-grid">
              {VIDEOS.map(video => (
                <div key={video.id} className="video-slot">
                  <div className="video-embed-wrap">
                    {video.embedId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="video-placeholder">
                        <div className="video-placeholder-icon">▶</div>
                        <div className="video-placeholder-text">Coming Soon</div>
                      </div>
                    )}
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-desc">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="home-divider" />

        {/* ── Corporate Zone ── */}
        <section className="home-corporate">
          <div className="container">
            <div className="home-corporate-label">WealthAfrica</div>
            <h2 className="home-corporate-heading">
              Where Global Capital Meets African Opportunity
            </h2>
            <div className="home-corporate-stats">
              {STATS.map(s => (
                <div key={s.number} className="home-corporate-stat">
                  <span className="home-corporate-stat-number">{s.number}</span>
                  <span className="home-corporate-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="home-corporate-cta">Learn More →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
