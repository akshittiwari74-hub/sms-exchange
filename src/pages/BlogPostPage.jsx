import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import posts from "../data/posts.json";
import CTA from "../components/CTA";
import NotFoundPage from "./NotFoundPage";
import { Breadcrumbs } from "../components/ui";
import "../styles/pages/Subpages.css";
import "../styles/pages/Article.css";

const slugify = (s) =>
  s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "and").replace(/&[a-z]+;/g, "")
    .toLowerCase().replace(/^\d+\.\s*/, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Give every <h2> a stable id and collect a table of contents (deterministic, so SSR == client).
function withAnchors(html) {
  const toc = [];
  const seen = new Set();
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => {
    let id = slugify(inner) || `section-${toc.length + 1}`;
    while (seen.has(id)) id += "-2";
    seen.add(id);
    toc.push({ id, label: inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/^\d+\.\s*/, "") });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

const readingTime = (html) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 220));

export const BlogPostPage = ({ onOpenInquiriesModal }) => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const { html, toc } = withAnchors(post.content);
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const sameA = a.category === post.category ? 1 : 0;
      const sameB = b.category === post.category ? 1 : 0;
      if (sameA !== sameB) return sameB - sameA;
      return a.date < b.date ? 1 : -1;
    })
    .slice(0, 3);

  return (
    <div className="page-article">
      <header className="page-header article-header">
        <div className="ui-wrap">
          <Breadcrumbs path={`/insights/${post.slug}`} current={post.title} />
          <p className="stats-eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="page-header-intro">{post.excerpt}</p>
          <p className="article-meta">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>Published <time dateTime={post.date}>{post.date}</time></span>
            {post.updated && post.updated !== post.date && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated <time dateTime={post.updated}>{post.updated}</time></span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span className="article-meta-time"><Clock size={14} aria-hidden="true" /> {readingTime(post.content)} min read</span>
          </p>
        </div>
      </header>

      <div className="article-layout ui-wrap">
        {toc.length > 2 && (
          <aside className="article-toc" aria-label="On this page">
            <p className="article-toc-title">On this page</p>
            <ol>
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
              ))}
            </ol>
          </aside>
        )}
        <article className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {related.length > 0 && (
        <section className="ui-section ui-section--alt" aria-labelledby="related-posts">
          <div className="ui-wrap">
            <div className="ui-heading">
              <p className="stats-eyebrow">Keep reading</p>
              <h2 id="related-posts">Related telecom guides</h2>
            </div>
            <div className="info-grid-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/insights/${p.slug}`} className="info-card article-card">
                  <p className="article-card-cat">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="article-card-link">Read guide <ArrowRight size={15} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default BlogPostPage;
