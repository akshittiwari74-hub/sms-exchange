import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";
import { pageByPath } from "../data/routes.js";

/* --------------------------------------------------------------------------
 * Shared page building blocks. Styling lives in styles/ui.css.
 * ------------------------------------------------------------------------ */

/** Visible breadcrumb trail built from src/data/routes.js (matches BreadcrumbList JSON-LD). */
export function Breadcrumbs({ path, current }) {
  const trail = [];
  let p = pageByPath[path];
  // walk parents (e.g. /bulk-sms-india -> /coverage)
  while (p && p.parent) {
    const parent = pageByPath[p.parent];
    if (!parent) break;
    trail.unshift({ to: parent.path, label: parent.label });
    p = parent;
  }
  if (path?.startsWith("/insights/")) trail.unshift({ to: "/insights", label: "Insights" });

  const label = current || pageByPath[path]?.label;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        {trail.map((t) => (
          <li key={t.to}>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to={t.to}>{t.label}</Link>
          </li>
        ))}
        {label && (
          <li aria-current="page">
            <ChevronRight size={14} aria-hidden="true" />
            <span>{label}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}

/** Subpage header: breadcrumbs, eyebrow, H1, intro and optional actions. */
export function PageHeader({ path, crumb, eyebrow, title, intro, children, meta }) {
  return (
    <header className="page-header">
      <div className="ui-wrap">
        <Breadcrumbs path={path} current={crumb} />
        {eyebrow && <p className="stats-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-header-intro">{intro}</p>}
        {meta && <p className="page-header-meta">{meta}</p>}
        {children && <div className="page-header-actions">{children}</div>}
      </div>
    </header>
  );
}

/** Standard content section with optional heading block. */
export function Section({ id, eyebrow, title, intro, alt = false, narrow = false, center = false, children, className = "" }) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} className={`ui-section${alt ? " ui-section--alt" : ""} ${className}`} aria-labelledby={title ? headingId : undefined}>
      <div className={`ui-wrap${narrow ? " ui-wrap--narrow" : ""}`}>
        {(eyebrow || title || intro) && (
          <div className={`ui-heading${center ? " ui-heading--center" : ""}`}>
            {eyebrow && <p className="stats-eyebrow">{eyebrow}</p>}
            {title && <h2 id={headingId}>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Accessible FAQ accordion. Answers are always in the HTML (collapsed with
 * the `hidden` attribute) so search engines can index them.
 */
export function FaqAccordion({ items, badge }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const q = item.q ?? item.question;
        const a = item.a ?? item.answer;
        const isOpen = open === idx;
        const panelId = `faq-panel-${idx}-${String(q).length}`;
        return (
          <div key={q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <h3 className="faq-q-heading">
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="faq-q-text">
                  {badge && <span className="faq-badge">{badge}</span>}
                  <span>{q}</span>
                </span>
                <Plus size={18} className="faq-toggle-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="faq-answer" hidden={!isOpen}>
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** FAQ section wrapper used at the bottom of most pages. */
export function FaqSection({ title = "Frequently asked questions", eyebrow = "FAQ", items, badge, intro }) {
  return (
    <Section id="faq" eyebrow={eyebrow} title={title} intro={intro} narrow>
      <FaqAccordion items={items} badge={badge} />
    </Section>
  );
}
