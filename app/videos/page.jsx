import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Videos — WealthAfrica',
  description:
    'Video content from WealthAfrica — conversations, analysis, and insights on African capital markets.',
  openGraph: { title: 'Videos — WealthAfrica' },
};

const VIDEOS = [
  {
    id: 'jVs4NBoHZic',
    embedId: 'jVs4NBoHZic',
    title: 'Aliko Dangote: Building Africa\'s industrial future from the ground up | Podcast | In Good Company',
    description:
      'Nicolai Tangen sits down with Aliko Dangote, Founder and CEO of the Dangote Group, Africa\'s largest industrial conglomerate, to explore his journey from a small Lagos trading firm to a sprawling empire spanning cement, fertiliser, petrochemicals, and the world\'s largest single-train oil refinery.',
  },
  {
    id: 'iOrvOwBRsdk',
    embedId: 'iOrvOwBRsdk',
    title: 'How Boring Businesses Create Billionaires',
    description:
      "A Princeton economist's research reveals that many of America's millionaires built their fortunes through private businesses in industries most people overlook.",
  },
  {
    id: '2v4J7cV5LEg',
    embedId: '2v4J7cV5LEg',
    title: 'Infrastructure, Fiscal Space, and Capital Market Funding',
    description:
      "Why Nigeria's and Africa's infrastructure conversation must now shift from ambition to financing architecture.",
  },
];

export default function VideosPage() {
  return (
    <>
      <Header />
      <main className="videos-page">
        <div className="container">
          <div className="videos-heading">
            <div className="videos-heading-label">WealthAfrica</div>
            <h1>Videos</h1>
            <p>
              Video analysis, interviews, and market intelligence from the
              WealthAfrica editorial team and from other sources.
            </p>
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
      </main>
      <Footer />
    </>
  );
}
