/* ============================================================
   style.css  –  Giulio Leonardo Battista CV
   Extracted from original index.html and organised by component.
   ============================================================ */

/* ── 1. Design tokens ─────────────────────────────────────── */
:root {
  /* Colours – adjust to match the original palette */
  --color-bg:          #ffffff;
  --color-surface:     #f8f8f6;
  --color-text:        #1a1a1a;
  --color-text-muted:  #6b6b6b;
  --color-accent:      #1a1a1a;   /* change to your accent colour */
  --color-border:      #e0e0e0;
  --color-link:        #1a1a1a;
  --color-link-hover:  #555555;

  /* Typography */
  --font-heading:      'Georgia', serif;
  --font-body:         'Helvetica Neue', Helvetica, Arial, sans-serif;

  /* Spacing */
  --space-xs:   0.25rem;
  --space-sm:   0.5rem;
  --space-md:   1rem;
  --space-lg:   2rem;
  --space-xl:   4rem;

  /* Layout */
  --content-max-width: 860px;
  --nav-height:        60px;
}

/* ── 2. Reset / base ──────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
}

a {
  color: var(--color-link);
  text-decoration: none;
  transition: color 0.2s ease;
}
a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

ul { list-style: none; }
img { max-width: 100%; display: block; }

/* ── 3. Navigation ────────────────────────────────────────── */
#main-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.nav-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: var(--space-lg);
}

.nav-links a {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--color-text);
  text-decoration: none;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-text);
}

/* ── 4. Main content ──────────────────────────────────────── */
#content {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
}

.section-wrapper {
  /* Each section partial is injected here */
}

/* ── 5. Shared section styles ─────────────────────────────── */
.section {
  padding: var(--space-xl) 0;
  border-bottom: 1px solid var(--color-border);
}
.section:last-child {
  border-bottom: none;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: var(--space-lg);
  letter-spacing: -0.01em;
}

/* ── 6. About ─────────────────────────────────────────────── */
.about-inner {
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
}

.about-photo-wrap {
  flex-shrink: 0;
}

.about-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
}

.about-name {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.02em;
}

.about-tagline {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.about-bio {
  margin-bottom: var(--space-lg);
  max-width: 600px;
}

.about-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.about-link {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
}

/* ── 7. Timeline (Experience & Education) ─────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.timeline-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-lg);
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  padding-top: 3px;
  white-space: nowrap;
}

.date-sep { margin: 0 2px; }

.timeline-role {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.timeline-org {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.timeline-bullets {
  list-style: disc;
  padding-left: 1.1rem;
}
.timeline-bullets li {
  font-size: 0.9rem;
  margin-bottom: var(--space-xs);
}

.timeline-detail {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* ── 8. Skills ────────────────────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.skill-group-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.skill-item {
  font-size: 0.95rem;
}

.skill-level {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* ── 9. Research ──────────────────────────────────────────── */
.research-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.research-item {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}
.research-item:last-child { border-bottom: none; }

.research-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.research-link:hover { text-decoration: underline; }

.research-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.research-abstract {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  max-width: 640px;
}

/* ── 10. Articles ─────────────────────────────────────────── */
.articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-md);
}

.article-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.article-card {
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.article-card:hover {
  border-color: var(--color-text);
  background: var(--color-surface);
}

.article-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-xs);
}

.article-title {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.article-source {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* ── 11. Loading state ────────────────────────────────────── */
.section-loading {
  padding: var(--space-xl) 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  animation: pulse 1.2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

/* ── 12. Responsive ───────────────────────────────────────── */
@media (max-width: 680px) {
  #main-nav {
    padding: 0 var(--space-md);
  }

  .nav-links {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }
  .nav-links.open { display: flex; }
  .nav-links li a {
    display: block;
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }

  .nav-toggle { display: block; }

  #content {
    padding: var(--space-lg) var(--space-md);
  }

  .about-inner {
    flex-direction: column;
    gap: var(--space-lg);
  }

  .about-photo {
    width: 120px;
    height: 120px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: var(--space-xs);
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }

  .articles-list {
    grid-template-columns: 1fr;
  }
}
