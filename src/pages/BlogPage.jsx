import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import posts from "../data/posts.json";
import CTA from "../components/CTA";
import { PageHeader, Section } from "../components/ui";
import "../styles/pages/Subpages.css";
import "../styles/pages/Article.css";

export const BlogPage = ({ onOpenInquiriesModal }) => {
  const sorted = [...posts].sort((a, b) => ((a.updated || a.date) < (b.updated || b.date) ? 1 : -1));
  const [featured, ...rest] = sorted;
  const categories = [...new Set(sorted.map((p) => p.category))];

  return (
    <div className="page-insights">
      <PageHeader
        path="/insights"
        eyebrow="Insights"
        title="Telecom engineering & compliance guides"
        intro="Practical, in-depth guides on SMPP, OTP delivery, SMS routing, fraud prevention and country regulations — written for engineers and messaging teams."
      />

      <Section id="latest" eyebrow="Latest" title="Featured guide">
        <Link to={`/insights/${featured.slug}`} className="featured-post">
          <div>
            <p className="article-card-cat">{featured.category}</p>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
          </div>
          <span className="article-card-link">Read guide <ArrowRight size={16} aria-hidden="true" /></span>
        </Link>
      </Section>

      <Section id="all-guides" eyebrow="Library" title="All guides" intro={`Topics: ${categories.join(" · ")}`} alt>
        <div className="info-grid-3">
          {rest.map((post) => (
            <Link key={post.slug} to={`/insights/${post.slug}`} className="info-card article-card">
              <p className="article-card-cat">{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="article-card-link">Read guide <ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <CTA onOpenInquiriesModal={onOpenInquiriesModal} />
    </div>
  );
};

export default BlogPage;
