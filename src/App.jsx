const solutions = [
  {
    title: 'Innovation Programs',
    description:
      'We structure innovation pipelines, applied research, and roadmap execution for companies that need technology to create business impact.',
    accent: 'Orange',
  },
  {
    title: 'Digital Product Engineering',
    description:
      'From portals and platforms to internal tools, we design and build software experiences that support real operations and growth.',
    accent: 'Graphite',
  },
  {
    title: 'Validation and Quality Flows',
    description:
      'We support teams that need robust testing logic, documentation discipline, and reliable technology processes from prototype to scale.',
    accent: 'Mist',
  },
  {
    title: 'Strategic Technology Consulting',
    description:
      'We help leadership teams evaluate priorities, modernize delivery, and turn technical investments into measurable outcomes.',
    accent: 'Orange',
  },
]

const sectors = [
  'Industrial Technology',
  'Health and Laboratory Operations',
  'Energy and Utilities',
  'Telecom and Connectivity',
  'Automotive and Mobility',
  'Corporate Innovation Hubs',
]

const metrics = [
  { value: '40+', label: 'projects accelerated' },
  { value: '12', label: 'core technology capabilities' },
  { value: '5x', label: 'faster path from idea to delivery' },
]

const partnerships = [
  'Applied research squads',
  'Technology assessments',
  'Product and platform delivery',
  'Operational modernization',
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VSTech home">
          <img
            className="brand-logo"
            src="/logo/vstech_logo.png"
            alt="VSTech logo"
          />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#sectors">Sectors</a>
          <a href="#partners">Partnerships</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button--ghost" href="#contact">
          Talk to us
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Technology that moves business forward</p>
            <h1>
              Innovation, engineering, and strategic execution for companies
              building what comes next.
            </h1>
            <p className="hero-text">
              Inspired by the institutional strength of large innovation
              centers, VSTech positions your company with a sharper, more agile
              digital presence focused on credibility, delivery, and momentum.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#solutions">
                Explore solutions
              </a>
              <a className="button button--secondary" href="#contact">
                Request a meeting
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="signal-card">
              <span className="signal-label">VSTech Focus</span>
              <strong>Turning technical vision into structured delivery.</strong>
              <p>
                We connect strategy, product thinking, and operational
                execution so innovation is visible, practical, and scalable.
              </p>
            </div>

            <div className="hero-grid">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--statement">
          <div className="section-heading">
            <p className="eyebrow">Why VSTech</p>
            <h2>A company website with institutional confidence and startup speed.</h2>
          </div>
          <p className="statement-copy">
            This experience takes the content architecture of the Eldorado
            reference site and translates it into a more modern React-driven
            presentation for your own company identity. The result is cleaner,
            more direct, and ready to evolve into a full corporate website.
          </p>
        </section>

        <section className="section" id="solutions">
          <div className="section-heading">
            <p className="eyebrow">Solutions</p>
            <h2>Capabilities designed for innovation-heavy organizations.</h2>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <span className="solution-accent">{solution.accent}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a href="#contact">Start a conversation</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--sectors" id="sectors">
          <div className="section-heading">
            <p className="eyebrow">Sectors</p>
            <h2>Built to support companies across complex industries.</h2>
          </div>

          <div className="sector-list">
            {sectors.map((sector) => (
              <article className="sector-pill" key={sector}>
                {sector}
              </article>
            ))}
          </div>
        </section>

        <section className="section section--partners" id="partners">
          <div className="section-heading">
            <p className="eyebrow">Partnerships</p>
            <h2>Collaborative models that scale with your ambition.</h2>
          </div>

          <div className="partners-layout">
            <div className="partners-copy">
              <p>
                We work as a strategic partner for companies that need more
                than execution alone. Our model supports discovery, planning,
                implementation, and long-term evolution.
              </p>
            </div>

            <div className="partners-list">
              {partnerships.map((item) => (
                <div className="partner-item" key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-banner" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s shape a stronger digital presence for VSTech.</h2>
          </div>

          <a className="button button--primary" href="mailto:contact@vstech.com">
            contact@vstech.com
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand brand--footer" href="#top">
            <img
              className="brand-logo brand-logo--footer"
              src="/logo/vstech_logo.png"
              alt="VSTech logo"
            />
          </a>
          <p>
            A React-based institutional website concept inspired by
            eldorado.org.br, adapted for VSTech with a cleaner, bolder visual
            direction.
          </p>
        </div>

        <div className="footer-links">
          <a href="#solutions">Solutions</a>
          <a href="#sectors">Sectors</a>
          <a href="#partners">Partnerships</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}
