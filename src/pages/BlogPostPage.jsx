import { useParams, Navigate, Link } from "react-router-dom";
import posts from "../data/posts.json";
import CTA from "../components/CTA";
import "../styles/pages/Subpages.css";

export const BlogPostPage = ({ onOpenInquiriesModal }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" />;
  }

  // Same-category posts first, then the most recent others
  const related = posts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => {
      const sameA = a.category === post.category ? 1 : 0;
      const sameB = b.category === post.category ? 1 : 0;
      if (sameA !== sameB) return sameB - sameA;
      return a.date < b.date ? 1 : -1;
    })
    .slice(0, 3);

  return (
    <div className="page-wrapper">
      <div className="hero-section" style={{ minHeight: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/insights" style={{ color: 'var(--primary-color, #00f0ff)', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to Insights</Link>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h1>
          <p style={{ color: 'var(--text-secondary, #aaa)' }}>
            By {post.author} · {post.category} · Published <time dateTime={post.date}>{post.date}</time>
            {post.updated && post.updated !== post.date && (
              <> · Updated <time dateTime={post.updated}>{post.updated}</time></>
            )}
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <article
            className="blog-content"
            style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {related.length > 0 && (
        <section className="subpage-info-section" aria-labelledby="related-posts">
          <div className="container">
            <div className="section-heading">
              <p className="stats-eyebrow">Keep Reading</p>
              <h2 id="related-posts">Related Telecom Guides</h2>
            </div>
            <div className="info-grid-3">
              {related.map(p => (
                <article key={p.slug} className="info-card">
                  <p className="stats-eyebrow" style={{ marginBottom: '8px' }}>{p.category}</p>
                  <h3><Link to={`/insights/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                </article>
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
