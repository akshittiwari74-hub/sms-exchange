import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const suggestions = [
  { to: "/otp-sms", label: "OTP SMS & verification API" },
  { to: "/rates", label: "Wholesale SMS rate cards" },
  { to: "/coverage", label: "Country coverage" },
  { to: "/api", label: "API & SMPP documentation" },
  { to: "/insights", label: "Engineering & compliance guides" },
  { to: "/contact", label: "Contact the NOC" },
];

// data-page="not-found" lets the prerender script detect routes with no page.
export const NotFoundPage = () => (
  <section className="not-found" data-page="not-found">
    <div className="ui-wrap ui-wrap--narrow">
      <p className="stats-eyebrow">404</p>
      <h1>This page doesn't exist</h1>
      <p className="page-header-intro">
        The link may be out of date or mistyped. These pages are a good place to continue:
      </p>
      <ul className="not-found-links">
        {suggestions.map((s) => (
          <li key={s.to}>
            <Link to={s.to}>
              {s.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn--primary btn--lg">Back to the homepage</Link>
    </div>
  </section>
);

export default NotFoundPage;
