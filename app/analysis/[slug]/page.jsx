import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleBody from '@/components/ArticleBody';
import { getArticle, calcReadTime, articles } from '@/lib/articles';

export function generateStaticParams() {
  return articles.analysis.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle('analysis', params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — WealthAfrica`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.hero ? [{ url: article.hero }] : [],
      type: 'article',
    },
  };
}

export default function AnalysisArticlePage({ params }) {
  const article = getArticle('analysis', params.slug);
  if (!article) notFound();

  const readTime = calcReadTime(article.blocks);

  return (
    <>
      <Header />
      <main className="article-page">
        <div className="article-hero">
          {article.hero ? (
            <>
              <Image
                src={article.hero}
                alt={article.title}
                width={1400}
                height={560}
                style={{ width: '100%', maxHeight: 480, objectFit: 'cover' }}
                priority
              />
              {article.aiImage && (
                <span className="article-hero-ai-label">AI Generated Image</span>
              )}
            </>
          ) : (
            <div className="article-hero-placeholder">WA</div>
          )}
        </div>

        <div className="article-header">
          <div className="article-header-category">{article.category}</div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="article-meta-author">{article.author}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.date}</span>
            <span className="article-meta-dot">·</span>
            <span className="article-read-time">{readTime}</span>
          </div>
        </div>

        <ArticleBody blocks={article.blocks} />
      </main>
      <Footer />
    </>
  );
}
