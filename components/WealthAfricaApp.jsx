'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Fade from './Fade';
import { CardSvg1, CardSvg2, CardSvg3, CardSvg4 } from './CardSvgs';
import ArticleView from './ArticleView';
import { READ_TIMES } from './articleData';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'insights', label: 'Insights' },
  { id: 'editions', label: 'Editions' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'What We Do' },
];

const STORIES = [
  {
    id: 'wealth-identity',
    cat: 'Editorial · WealthAfrica',
    title: "Wealth Is The African Identity",
    excerpt:
      "Africa does not sit at the periphery of the global economy. It sits, largely unacknowledged, at its foundation. This is not optimism. It is arithmetic.",
    bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1f00 50%, #1a0f00 100%)',
    hasImg: true,
    img: '/images/wealth-african-identity.png',
    light: true,
  },
  {
    id: 'nigeria-ftse',
    cat: 'Capital Markets · Nigeria',
    title: "Nigeria Returns to the Global Map — But the Harder Climb Lies Ahead",
    excerpt:
      "FTSE Russell has restored Nigeria to Frontier Market status. The celebration is premature. Here is what institutional investors actually need to know.",
    bg: 'linear-gradient(135deg, #0a2818 0%, #1a4a2e 50%, #0d2015 100%)',
    hasImg: true,
    img: '/images/ftse-nigeria.webp',
    light: true,
  },
  {
    id: 'macky-sall',
    cat: 'Editorial · Africa Leadership',
    title: "A Test of Africa's Discipline",
    excerpt:
      "Africa has argued for a place at the table. It has begun to secure that place. The question now is whether it can demonstrate the discipline required to shape what happens at that table — and whether the candidacy of Macky Sall is the moment that answers it.",
    bg: 'linear-gradient(135deg, #b8d4e8 0%, #d4b8d4 40%, #c9a8b8 100%)',
    hasImg: true,
    img: '/images/senegal-cover.jpg',
    light: false,
  },
  {
    id: 'blue-economy',
    cat: 'Blue Economy · Nigeria',
    title: "Nigeria's Blue Economy: A $500 Billion Question of Leadership",
    excerpt:
      "With 853 kilometres of coastline and exclusive economic zones spanning over 200,000 km², Nigeria sits on a blue economy potential that dwarfs most of its terrestrial resource wealth. Who leads, and who follows?",
    bg: 'linear-gradient(135deg, #0D2847 0%, #1a3a5c 50%, #0f2035 100%)',
    light: true,
  },
  {
    id: 'infra-gap',
    cat: 'Infrastructure · Investment',
    title: "Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving",
    excerpt:
      'How institutional investors are rethinking African infrastructure — from blended finance structures to greenfield equity participation. The landscape is shifting, and the early movers are already in position.',
    bg: 'linear-gradient(135deg, #2d1810 0%, #4a2820 50%, #1a1210 100%)',
    light: true,
  },
];

export default function WealthAfricaApp() {
  const [slide, setSlide] = useState(0);
  const [artOpen, setArtOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', org: '', type: 'government', message: '' });

  const isCorp = ['about', 'services', 'contact'].includes(active);
  const cur = STORIES[slide];

  const goTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = [...NAV.map((x) => x.id), 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const next = useCallback(() => setSlide((s) => (s + 1) % STORIES.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + STORIES.length) % STORIES.length), []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. WealthAfrica will respond within 48 hours.');
    setForm({ name: '', email: '', org: '', type: 'government', message: '' });
  };

  return (
    <>
      {/* ─── NAV ─── */}
      <nav className={`nav${scrolled ? ' shd' : ''}${isCorp ? ' corp' : ''}`}>
        <div className="nav-logo-row">
          <div className="nav-brand">
            <img
              src="/images/masthead.png"
              alt="WealthAfrica"
              className="nav-logo-img"
              onClick={() => goTo('home')}
            />
            <img
              src="/images/web-banner.png"
              alt="WealthAfrica Web Banner"
              className="nav-banner-img"
            />
          </div>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="nav-bar">
          <div className={`nav-bar-in${menuOpen ? ' open' : ''}`}>
            {NAV.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? 'act' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(s.id);
                }}
              >
                {s.label}
              </a>
            ))}
            <button className="cta" onClick={() => goTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HOME — CAROUSEL ─── */}
      <section id="home" style={{ paddingTop: 212 }}>
        <div className="carousel">
          {STORIES.map((s, i) => {
            const state = i === slide ? 'on' : i < slide ? 'prev' : 'next';
            return (
              <div key={s.id} className={`csl ${state}`} style={{ background: s.bg }}>
                <div className="csl-in">
                  <div>
                    <div className={`sl-cat ${s.light ? 'lt' : 'dk'}`}>{s.cat}</div>
                    <h1 className={`sl-t ${s.light ? 'lt' : 'dk'}`}>{s.title}</h1>
                    <p className={`sl-ex ${s.light ? 'lt' : 'dk'}`}>{s.excerpt}</p>
                    <button
                      className={`sl-rd ${s.light ? 'lt' : 'dk'}`}
                      onClick={() => setArtOpen(s.id)}
                    >
                      Read Article
                    </button>
                    <div className={`sl-m ${s.light ? 'lt' : 'dk'}`}>{READ_TIMES[s.id]}</div>
                  </div>
                  <div className="sl-vis">
                    {s.hasImg && (
                      <img src={s.img} alt={s.title} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Dots */}
          <div className="c-dots">
            {STORIES.map((_, i) => (
              <div
                key={i}
                className={`c-dot ${i === slide ? 'on' : 'off'}${cur.light ? ' lt' : ''}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="c-arrows">
            <button className={`c-btn${cur.light ? ' lt' : ''}`} onClick={prev} aria-label="Previous">
              ←
            </button>
            <button className={`c-btn${cur.light ? ' lt' : ''}`} onClick={next} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ─── */}
      <section id="insights" className="ins-sec">
        <div className="ins-in">
          <Fade>
            <div className="ins-hd">
              <h3>
                Latest <em>Insights</em>
              </h3>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="ins-grid">
              <a href="/articles/gold-paradox" className="ins-c ins-featured">
                <div className="ins-c-img">
                  <CardSvg4 />
                </div>
                <div className="ins-c-body">
                  <span className="ins-featured-badge">New Analysis</span>
                  <div className="ins-c-cat">Geopolitics &amp; Finance</div>
                  <h4>The Gold Paradox: Why the IMF&apos;s $360 Billion Reserve Is Both Africa&apos;s Best Hope and a Political Impossibility</h4>
                  <p>
                    The Africa Expert Panel&apos;s proposal to sell IMF gold for debt relief is
                    economically sound, historically precedented, and almost certainly dead on
                    arrival. The gap between those two realities tells us everything about where
                    the continent actually sits in global financial governance.
                  </p>
                  <div className="ins-c-m">WealthAfrica Editorial &nbsp;·&nbsp; April 2026 &nbsp;·&nbsp; 8 min read</div>
                </div>
              </a>

              <div className="ins-c" onClick={() => setArtOpen('blue-economy')}>
                <div className="ins-c-img">
                  <CardSvg1 />
                </div>
                <div className="ins-c-body">
                  <div className="ins-c-cat">Blue Economy</div>
                  <h4>Nigeria's Blue Economy: A $500 Billion Question of Leadership</h4>
                  <p>
                    With 853km of coastline and EEZs spanning over 200,000 km², Nigeria sits on blue
                    economy potential that dwarfs its terrestrial resource wealth.
                  </p>
                  <div className="ins-c-m">WealthAfrica · 2025</div>
                </div>
              </div>

              <div className="ins-c" onClick={() => setArtOpen('infra-gap')}>
                <div className="ins-c-img">
                  <CardSvg2 />
                </div>
                <div className="ins-c-body">
                  <div className="ins-c-cat">Infrastructure</div>
                  <h4>Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving</h4>
                  <p>
                    How institutional investors are rethinking African infrastructure — from blended
                    finance to greenfield equity.
                  </p>
                  <div className="ins-c-m">WealthAfrica · 2025</div>
                </div>
              </div>

              <div className="ins-c">
                <div className="ins-c-img">
                  <CardSvg3 />
                </div>
                <div className="ins-c-body">
                  <div className="ins-c-cat">Investment Strategy</div>
                  <h4>The PPP Paradox: Why 60% of African Projects Fail Before Financial Close</h4>
                  <p>
                    A WealthAfrica analysis of structural failures in PPP development across the
                    continent.
                  </p>
                  <div className="ins-c-m">WealthAfrica · 2025</div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ─── EDITIONS ─── */}
      <section id="editions" className="ed-sec">
        <div className="ed-in">
          <Fade>
            <div className="ey ey-r">Editions</div>
            <h2 className="st st-dk" style={{ fontSize: 'clamp(28px,3.5vw,40px)' }}>
              Stories That Move <em>Capital</em>
            </h2>
            <p className="ss ss-dk">
              Each edition spotlights investable opportunities, profiles visionary leaders, and
              shifts global perception of African markets.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <div className="ed-grid">
              <div className="ed-c">
                <div className="ed-cv">
                  <img src="/images/senegal-cover.jpg" alt="The Senegal Presidential Edition" />
                </div>
                <div className="ed-nf">
                  <div className="ed-tg">Published Edition</div>
                  <h3>The Senegal Presidential Edition: Lion of Africa</h3>
                  <p>
                    Commissioned by President Macky Sall, this landmark 50,000-copy edition
                    positioned Senegal as a premier investment destination on the global stage.
                  </p>
                  <span className="ed-badge pub">Published</span>
                </div>
              </div>

              <div className="ed-c">
                <div className="ed-cv">
                  <img src="/images/nigeria-mockup.jpg" alt="Nigeria Edition — Turnaround Titan" />
                </div>
                <div className="ed-nf">
                  <div className="ed-tg">Concept Edition</div>
                  <h3>Turnaround Titan: Nigeria's March to a Trillion-Dollar Economy</h3>
                  <p>
                    Inside the major reform blueprints reshaping Nigeria's foundations under
                    President Tinubu's transformation agenda.
                  </p>
                  <span className="ed-badge con">In Development</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ─── ZONE DIVIDER ─── */}
      <div className="zone-line" />

      {/* ─── ABOUT — Corporate Zone ─── */}
      <section id="about" className="abt">
        <div className="abt-bg" />
        <div className="abt-grid-bg" />
        <div className="abt-hero">
          <div>
            <Fade>
              <div className="abt-ey">WealthAfrica</div>
            </Fade>
            <Fade delay={0.08}>
              <h1>
                Where Global Capital
                <br />
                Meets <em>African</em>
                <br />
                Opportunity
              </h1>
            </Fade>
            <Fade delay={0.16}>
              <p className="abt-sub">
                An investment facilitation platform bridging international capital with high-impact
                African opportunities — powered by market intelligence, government partnerships, and
                a publication trusted at the highest levels.
              </p>
            </Fade>
          </div>
          <Fade delay={0.12} className="abt-cv">
            <div className="abt-cw">
              <img src="/images/senegal-cover.jpg" alt="WealthAfrica — Senegal Edition" />
              <div className="abt-badge">50,000 Copies Commissioned</div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ─── CREDIBILITY STRIP ─── */}
      <div className="cred">
        <div className="cred-in">
          <div className="cred-i">
            <div className="cred-n">$500B+</div>
            <div className="cred-l">Opportunities Mapped</div>
          </div>
          <div className="cred-i">
            <div className="cred-n">20+</div>
            <div className="cred-l">Years in African Markets</div>
          </div>
          <div className="cred-i">
            <div className="cred-n">HQ</div>
            <div className="cred-l">New York · 800 Third Avenue</div>
          </div>
          <div className="cred-i">
            <div className="cred-n">50K</div>
            <div className="cred-l">Copies — Senegal Edition</div>
          </div>
        </div>
      </div>

      {/* ─── ABOUT DETAIL ─── */}
      <div className="abt-detail">
        <div className="abt-d-in">
          <Fade>
            <div className="ey ey-g">Our Foundation</div>
            <h2 className="st st-lt" style={{ fontSize: 'clamp(28px,3.8vw,44px)' }}>
              Not Just a Publication.
              <br />
              <em>An Investment Engine.</em>
            </h2>
            <p className="ss ss-lt">
              From project identification to capital deployment — the complete value chain.
            </p>
          </Fade>
          <div className="abt-d-grid">
            <Fade delay={0.08}>
              <div className="abt-d-text">
                <p>
                  Africa's investment landscape presents a $2.6 trillion infrastructure gap by 2030.
                  Every year, billions in international capital search for credible entry points into
                  the continent's fastest-growing markets — yet 60% of structured projects fail due
                  to poor packaging, inadequate risk allocation, and the absence of trusted
                  intermediaries who understand both sides of the table.
                </p>
                <p>
                  WealthAfrica was built to close that gap. We are an investment facilitation
                  platform headquartered in New York, operating at the intersection of institutional
                  capital, government partnerships, and deep African market intelligence. Our
                  publication — trusted by heads of state and industry leaders — is the credibility
                  vehicle that opens doors. What happens after the door opens is where our real work
                  begins.
                </p>
                <p>
                  From government advisory and PPP structuring to investor mobilization and equity
                  co-investment, WealthAfrica provides the complete value chain that transforms
                  African opportunity from concept to capital deployment.
                </p>
              </div>
            </Fade>
            <Fade delay={0.16}>
              <div className="pillars">
                <div className="pil">
                  <div className="pil-n">01</div>
                  <h4>Government-First Approach</h4>
                  <p>
                    Direct partnerships with African governments at national and state level,
                    positioning WealthAfrica as a strategic ally in investment promotion.
                  </p>
                </div>
                <div className="pil">
                  <div className="pil-n">02</div>
                  <h4>Equity Participation</h4>
                  <p>
                    Not just advisory — WealthAfrica takes ownership positions in the projects we
                    help structure, aligning our success with our partners' outcomes.
                  </p>
                </div>
                <div className="pil">
                  <div className="pil-n">03</div>
                  <h4>Holistic Value Chain</h4>
                  <p>
                    From project identification through structuring, investor mobilization, and
                    implementation — a complete facilitation architecture.
                  </p>
                </div>
                <div className="pil">
                  <div className="pil-n">04</div>
                  <h4>Continental Intelligence</h4>
                  <p>
                    Two decades of on-the-ground experience across African markets, with a network
                    reaching from presidential offices to institutional trading floors.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* ─── WHAT WE DO ─── */}
      <section id="services" className="svc">
        <div className="svc-in">
          <Fade>
            <div className="ey ey-g">What We Do</div>
            <h2 className="st st-lt" style={{ fontSize: 'clamp(28px,3.8vw,44px)' }}>
              Full-Spectrum <em>Investment</em> Facilitation
            </h2>
            <p className="ss ss-lt">
              Our integrated service architecture spans the complete investment lifecycle — from
              opportunity identification to capital deployment.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <div className="svc-grid">
              <div className="svc-c">
                <div className="svc-num">01</div>
                <h3>Government Advisory</h3>
                <p>
                  We work directly with national and state governments to assess investment climates,
                  structure public-private partnerships, and design investor mobilization strategies.
                </p>
                <ul className="svc-f">
                  <li>Investment climate assessment</li>
                  <li>PPP origination &amp; structuring</li>
                  <li>Regulatory gap analysis</li>
                  <li>Destination branding strategy</li>
                </ul>
              </div>
              <div className="svc-c">
                <div className="svc-num">02</div>
                <h3>Strategic Publishing</h3>
                <p>
                  WealthAfrica Magazine is the continent's premier investment-focused publication —
                  positioning leaders, nations, and sectors before the global investment community.
                </p>
                <ul className="svc-f">
                  <li>Government publication contracts</li>
                  <li>Investment promotion editions</li>
                  <li>Executive profiling &amp; positioning</li>
                  <li>Sector-specific special editions</li>
                </ul>
              </div>
              <div className="svc-c">
                <div className="svc-num">03</div>
                <h3>Investment Facilitation</h3>
                <p>
                  Beyond advisory, we actively facilitate deal flow — connecting vetted African
                  opportunities with sovereign wealth funds, DFIs, private equity, and strategic
                  corporate investors.
                </p>
                <ul className="svc-f">
                  <li>Investor mobilization &amp; roadshows</li>
                  <li>Due diligence facilitation</li>
                  <li>Co-investment structuring</li>
                  <li>Transaction support</li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ─── GET IN TOUCH ─── */}
      <section id="contact" className="ctc">
        <div className="ctc-in">
          <Fade>
            <div className="ey ey-g">Get in Touch</div>
            <h2 className="st st-lt" style={{ fontSize: 'clamp(28px,3.8vw,44px)' }}>
              Let's Build <em>Together</em>
            </h2>
          </Fade>
          <div className="ctc-grid">
            <div>
              <Fade delay={0.08}>
                <p className="ctc-text">
                  Whether you represent a government seeking investment promotion, an institution
                  exploring African opportunities, or a leader ready to tell your story to the global
                  investment community — we welcome the conversation.
                </p>
                <div className="ctc-details">
                  <div className="ctc-item">
                    <div className="ctc-icon">ADDRESS</div>
                    <div className="ctc-val">
                      800 Third Avenue
                      <br />
                      New York, NY 10022
                      <br />
                      United States
                    </div>
                  </div>
                  <div className="ctc-item">
                    <div className="ctc-icon">EMAIL</div>
                    <div className="ctc-val">
                      <a href="mailto:tundelamidi@wealthafrica.africa">
                        tundelamidi@wealthafrica.africa
                      </a>
                    </div>
                  </div>
                  <div className="ctc-item">
                    <div className="ctc-icon">WEB</div>
                    <div className="ctc-val">
                      <a href="https://wealthafrica.africa" target="_blank" rel="noopener noreferrer">
                        wealthafrica.africa
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade delay={0.14}>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-r">
                  <div className="form-g">
                    <label className="form-l" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      className="form-i"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-g">
                    <label className="form-l" htmlFor="email">Email</label>
                    <input
                      id="email"
                      className="form-i"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@organization.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-r">
                  <div className="form-g">
                    <label className="form-l" htmlFor="org">Organization</label>
                    <input
                      id="org"
                      className="form-i"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="form-g">
                    <label className="form-l" htmlFor="type">I Am A</label>
                    <select
                      id="type"
                      className="form-s"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      <option value="government">Government Representative</option>
                      <option value="investor">Institutional Investor</option>
                      <option value="corporate">Corporate / Strategic Partner</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-g">
                  <label className="form-l" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-ta"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest or inquiry..."
                  />
                </div>
                <button type="submit" className="form-btn">
                  Send Inquiry
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-in">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="/images/masthead.png"
                alt="WealthAfrica"
                className="footer-logo"
                onClick={() => goTo('home')}
              />
              <p>
                Bridging global capital and African opportunity through investment facilitation,
                government partnerships, and the continent's premier investment publication.
              </p>
            </div>
            <div className="footer-col">
              <h5>Platform</h5>
              <a href="#about" onClick={(e) => { e.preventDefault(); goTo('about'); }}>About</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services'); }}>Services</a>
              <a href="#editions" onClick={(e) => { e.preventDefault(); goTo('editions'); }}>Editions</a>
              <a href="#insights" onClick={(e) => { e.preventDefault(); goTo('insights'); }}>Insights</a>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services'); }}>Government Advisory</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services'); }}>Strategic Publishing</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services'); }}>Investment Facilitation</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href="#contact" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Get in Touch</a>
              <a href="mailto:tundelamidi@wealthafrica.africa">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bot">
            <p>&copy; {new Date().getFullYear()} WealthAfrica Ltd. All rights reserved.</p>
            <p>New York &middot; Lagos &middot; Banjul</p>
          </div>
        </div>
      </footer>

      {/* ─── ARTICLE VIEW OVERLAY ─── */}
      <ArticleView
        artOpen={artOpen}
        onClose={() => setArtOpen(null)}
        onNavClick={goTo}
      />
    </>
  );
}
