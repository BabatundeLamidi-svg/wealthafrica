import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleBody from '@/components/ArticleBody';
import { getArticle, calcReadTime, articles } from '@/lib/articles';

export function generateStaticParams() {
  return articles.briefs.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle('briefs', params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — WealthAfrica`,
    description: article.excerpt,
  };
}

export default function BriefPage({ params }) {
  const article = getArticle('briefs', params.slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="article-page">
        <div className="article-header" style={{ marginTop: 56 }}>
          <div className="article-header-category">Brief</div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="article-meta-author">{article.author}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.date}</span>
          </div>
        </div>

        <ArticleBody blocks={article.blocks} />
      </main>
      <Footer />
    </>
  );
}
