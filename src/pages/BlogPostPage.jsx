import { useParams, Navigate, Link } from "react-router-dom";
import posts from "../data/posts.json";
import CTA from "../components/CTA";

export const BlogPostPage = ({ onOpenInquiriesModal }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" />;
  }

  return (
    <div className="page-wrapper">
      <div className="hero-section" style={{ minHeight: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/insights" style={{ color: 'var(--primary-color, #00f0ff)', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to Insights</Link>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h1>
          <p style={{ color: 'var(--text-secondary, #aaa)' }}>By {post.author} | {post.date}</p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div 
            className="blog-content" 
            style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </section>
      
      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default BlogPostPage;
