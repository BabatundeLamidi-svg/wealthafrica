'use client';

import { ARTICLE, ARTICLE_META, READ_TIMES } from './articleData';

const STORIES = [
  { id: 'wealth-identity', cat: 'Editorial · WealthAfrica', title: "Wealth Is The African Identity" },
  { id: 'nigeria-ftse', cat: 'Capital Markets · Nigeria', title: "Nigeria Returns to the Global Map — But the Harder Climb Lies Ahead" },
  { id: 'macky-sall', cat: 'Editorial · Africa Leadership', title: "A Test of Africa's Discipline" },
  { id: 'blue-economy', cat: 'Blue Economy · Nigeria', title: "Nigeria's Blue Economy: A $500 Billion Question of Leadership" },
  { id: 'infra-gap', cat: 'Infrastructure · Investment', title: "Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving" },
];

const STORY_MAP = STORIES.reduce((acc, s) => {
  acc[s.id] = s;
  return acc;
}, {});

export default function ArticleView({ artOpen, onClose, onNavClick }) {
  const story = STORY_MAP[artOpen];
  const blocks = ARTICLE[artOpen] || [{ t: 'p', v: 'Full article coming soon.' }];

  if (!artOpen) return null;

  return (
    <div className={`av${artOpen ? ' open' : ''}`}>
      {/* Nav inside article view */}
      <nav className="nav shd">
        <div className="nav-logo-row">
          <img
            src="/images/masthead.png"
            alt="WealthAfrica"
            className="nav-logo-img"
            onClick={onClose}
            style={{ height: 46, cursor: 'pointer' }}
          />
        </div>
        <div className="nav-bar">
          <div className="nav-bar-in open">
            {['home', 'insights', 'editions', 'about', 'services'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  setTimeout(() => onNavClick(id), 100);
                }}
              >
                {id === 'services' ? 'What We Do' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <button className="av-back" onClick={onClose}>
        Back to Home
      </button>

      {story && (
        <>
          <div className="av-hd">
            <div className="av-hd-cat">{story.cat}</div>
            <h1>{story.title}</h1>
            <div className="av-hd-m">WealthAfrica Editorial · {READ_TIMES[artOpen]}</div>
          </div>
          {ARTICLE_META[artOpen]?.hero && (
            <div className="av-hero">
              <img src={ARTICLE_META[artOpen].hero} alt={story.title} />
            </div>
          )}
          <div className="av-body">
            {blocks.map((block, i) =>
              block.t === 'p' ? (
                <p key={i}>{block.v}</p>
              ) : block.t === 'h' ? (
                <h2 key={i}>{block.v}</h2>
              ) : block.t === 'q' ? (
                <blockquote key={i}>{block.v}</blockquote>
              ) : block.t === 'pq' ? (
                <div key={i} className="av-pq"><span>{block.v}</span></div>
              ) : null
            )}
          </div>
        </>
      )}
    </div>
  );
}
