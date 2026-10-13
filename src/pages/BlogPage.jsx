import { Link } from "react-router-dom";
import posts from "../data/posts.json";
import CTA from "../components/CTA";

export const BlogPage = ({ onOpenInquiriesModal }) => {
  return (
    <div className="page-wrapper">
      <div className="hero-section" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-content">
          <h1>Telecom Insights & Engineering Blog</h1>
          <p>Deep dives into SMPP protocols, global SMS routing strategies, and technical tutorials.</p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container">
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map(post => (
              <div key={post.id} className="blog-card" style={{ background: 'var(--surface-color, #111)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color, #333)' }}>
                <span style={{ color: 'var(--primary-color, #00f0ff)', fontSize: '0.875rem', fontWeight: 'bold' }}>{post.category}</span>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary, #aaa)', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                <Link to={`/insights/${post.slug}`} className="btn-secondary" style={{ display: 'inline-block' }}>Read Article</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default BlogPage;
