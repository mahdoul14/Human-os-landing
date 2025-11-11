import React from 'react';

const navigation = [
  { label: "Solutions", href: "#solutions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const Button = ({ variant = "primary", children, icon }) => (
  <button className={`button button--${variant}`}>
    {children}
    {icon && <span>{icon}</span>}
  </button>
);

const SectionTitle = ({ eyebrow, title, description }) => (
  <header className="section-title">
    {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </header>
);

const CapabilityCard = ({ icon, title, description }) => (
  <article className="card capability-card">
    <span className="capability-card__icon">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

const TestimonialCard = ({ quote, name, role }) => (
  <article className="card testimonial-card">
    <p className="testimonial-card__quote">"{quote}"</p>
    <div className="testimonial-card__author">
      <span className="testimonial-card__name">{name}</span>
      <span className="testimonial-card__role">{role}</span>
    </div>
  </article>
);

const BenefitCard = ({ title, description, visual }) => (
  <div className="benefit-card">
    <h3>{title}</h3>
    <div className="benefit-card__visual">
      <code>{visual}</code>
    </div>
    <p>{description}</p>
  </div>
);

const Navigation = () => (
  <nav className="nav">
    <a className="nav__brand" href="#">
      HUMAN OS.
    </a>
    <div className="nav__links">
      {navigation.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
    <Button variant="primary" icon="📅">Book a Free Call</Button>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <p className="hero__eyebrow">For Businesses Doing $1M+ ARR</p>
      <h1>
        Scale Your Business with Custom AI Agents that Work 24/7 and Cut Operational Costs in Half
      </h1>
      <p className="hero__subtitle">
        Our custom AI agents learn your workflows, automate your operations, and unlock new revenue streams... helping you save time, cut costs, and scale within 30 days.
      </p>
      <div className="hero__actions">
        <Button icon="📅">Book Your Free Consultation</Button>
      </div>
      <dl className="hero__stats">
        <div>
          <dt>📋 Free 30-minute Strategy Call</dt>
        </div>
        <div>
          <dt>⚙️ Custom-Built for Your Business</dt>
        </div>
        <div>
          <dt>⚡ Deployed within 30 Days</dt>
        </div>
      </dl>
    </div>
    <div className="hero__visual">
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '24px',
        padding: '40px',
        color: 'white',
        fontFamily: '"Courier New", monospace',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}>
        <div style={{ marginBottom: '20px', opacity: 0.7 }}>// ACME Corp Dashboard</div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#6b5fb8' }}>Active Agents</span>
        </div>
        <div style={{ marginLeft: '20px', opacity: 0.8, marginBottom: '30px' }}>
          <div>👨‍💼 Chief AI Officer - <span style={{ color: '#4caf50' }}>Running</span></div>
          <div>📊 Executive Assistant - <span style={{ color: '#4caf50' }}>Running</span></div>
          <div>📈 Marketing Officer - <span style={{ color: '#ffb347' }}>Standby</span></div>
          <div>💰 Sales Officer - <span style={{ color: '#ff6b6b' }}>Training</span></div>
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section className="partners">
    <p className="partners__text">
      600+ businesses engaged, 10,000+ people trained, with best-in-class platforms
    </p>
    <div className="partners__logos">
      <div style={{ fontSize: '1.5rem' }}>○○○ n8n</div>
      <div style={{ fontSize: '1.5rem', color: '#6b5fb8' }}>/// make</div>
      <div style={{ fontSize: '1.5rem' }}>🎯 Relevance AI Certified</div>
      <div style={{ fontSize: '1.5rem', color: '#ff6b6b' }}>zapier</div>
      <div style={{ fontSize: '1.5rem', color: '#6b5fb8' }}>∞ relay.app</div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="benefits">
    <SectionTitle
      eyebrow="Benefits"
      title="What you get with Human OS"
      description="We don't sell templates – we build AI systems that deliver real, measurable results."
    />
    <div className="benefits__content">
      <BenefitCard
        title="Custom-Built For You"
        visual={`Trigger
  └─ Personalise
  └─ Send Email`}
        description="Every system is designed from the ground up to match your workflows and goals."
      />
      <BenefitCard
        title="Complete Ownership"
        visual={`Profile ResearchedLead(
  name: John Doe
  email: john.doe@email.com
  phone: +44 7123 456789
  linkedin: linkedin.com/in...
  sources: CRM,Web,Social
)
function buildProfile()`}
        description="You own the agents, data, and infrastructure - no hidden subscriptions and lock-ins."
      />
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact__content">
      <h2>Ready to scale your operations?</h2>
      <p>
        Let's talk about how custom AI agents can transform your business. Schedule a free 30-minute strategy call with our team.
      </p>
    </div>
    <form className="contact__form">
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" />
      </div>
      <div className="form__group">
        <label htmlFor="email">Work Email</label>
        <input id="email" type="email" placeholder="you@company.com" />
      </div>
      <div className="form__group">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Your company" />
      </div>
      <div className="form__group form__group--full">
        <label htmlFor="focus">Tell us about your goals</label>
        <textarea
          id="focus"
          rows="4"
          placeholder="What workflows would you like to automate?"
        />
      </div>
      <button type="submit" className="button button--primary form__submit">
        Schedule Free Call
      </button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">Human OS © {new Date().getFullYear()}</div>
    <a href="mailto:hello@humanos.ai">hello@humanos.ai</a>
  </footer>
);

const App = () => (
  <div className="page">
    <div className="gradient-bg" aria-hidden="true" />
    <Navigation />
    <main>
      <Hero />
      <Partners />
      <Benefits />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
