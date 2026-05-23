import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticle, calcReadTime, articles } from '@/lib/articles';

export function generateStaticParams() {
  return articles.interviews.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle('interviews', params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — WealthAfrica`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default function InterviewPage({ params }) {
  const article = getArticle('interviews', params.slug);
  if (!article) notFound();

  const readTime = calcReadTime(article.blocks);

  // Apply pull-quote placement rules (pq blocks only; q blocks are Q&A questions)
  const contentBlocks = article.blocks.filter(b => b.t !== 'pq');
  const candidatePqs = article.blocks
    .filter(b => b.t === 'pq')
    .filter(pq => (pq.v || '').trim().split(/\s+/).filter(Boolean).length >= 40);

  const wordCount = contentBlocks
    .map(b => b.v || '')
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const maxPqs = wordCount > 2000 ? 3 : wordCount > 1200 ? 2 : 1;
  const selectedPqs = candidatePqs.slice(0, maxPqs);

  const insertAfterIdx = selectedPqs.map((_, i) =>
    Math.max(0, Math.round(contentBlocks.length * ((i + 1) / (selectedPqs.length + 1))) - 1)
  );

  const pqMap = {};
  insertAfterIdx.forEach((blockIdx, pqIdx) => {
    pqMap[blockIdx] = pqMap[blockIdx] || [];
    pqMap[blockIdx].push(selectedPqs[pqIdx]);
  });

  const mergedBlocks = [];
  contentBlocks.forEach((block, i) => {
    mergedBlocks.push(block);
    if (pqMap[i]) pqMap[i].forEach(pq => mergedBlocks.push(pq));
  });

  return (
    <>
      <Header />
      <main className="article-page">
        {article.hero && (
          <div className="article-hero">
            <Image
              src={article.hero}
              alt={article.title}
              width={1400}
              height={560}
              style={{ width: '100%', maxHeight: 480, objectFit: 'cover' }}
              priority
            />
          </div>
        )}

        <div className="article-header" style={!article.hero ? { marginTop: 56 } : {}}>
          <div className="article-header-category">Interview</div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="article-meta-author">{article.author}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.date}</span>
            <span className="article-meta-dot">·</span>
            <span className="article-read-time">{readTime}</span>
          </div>
        </div>

        <div className="article-body">
          {mergedBlocks.map((block, i) => {
            if (block.t === 'q') return <p key={i} className="qa-question">{block.v}</p>;
            if (block.t === 'p') return <p key={i}>{block.v}</p>;
            if (block.t === 'h') return <h2 key={i}>{block.v}</h2>;
            if (block.t === 'pq') {
              return (
                <blockquote key={i} className="article-pull-quote">
                  <p>{block.v}</p>
                </blockquote>
              );
            }
            return null;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
