import React from 'react';

const navigation = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
];

const capabilities = [
  {
    title: "Intelligent Agents",
    description:
      "Deploy autonomous AI agents that blend human intuition with machine precision to operate 24/7 across your workflows.",
    icon: "🤖",
  },
  {
    title: "Cognitive Automation",
    description:
      "Redesign legacy processes with adaptive AI systems that learn from every interaction and evolve with your business.",
    icon: "🧠",
  },
  {
    title: "Decision OS",
    description:
      "Bring cross-team intelligence into a single command center that drives real-time decisions and measurable outcomes.",
    icon: "🛰️",
  },
];

const processSteps = [
  {
    title: "Diagnosis",
    description:
      "We surface the hidden friction in your operations and model the potential impact of AI interventions.",
    number: "01",
  },
  {
    title: "Co-Design",
    description:
      "Product strategists, designers, and engineers collaborate with your teams to build human-centered AI workflows.",
    number: "02",
  },
  {
    title: "Deployment",
    description:
      "We launch continuously-improving systems with measurable KPIs and guardrails for responsible innovation.",
    number: "03",
  },
];

const testimonials = [
  {
    quote:
      "Human OS translated our domain expertise into a living intelligence layer. We now resolve client issues before they surface.",
    name: "Alex Castillo",
    role: "Chief Experience Officer, Luma Labs",
  },
  {
    quote:
      "Their team thinks in systems. The Decision OS gave our operators superpowers and cut cycle times by 46% in three months.",
    name: "Mara Chen",
    role: "VP Operations, Northwind Logistics",
  },
];

const insights = [
  {
    title: "Designing Hybrid Intelligence Teams",
    description:
      "Playbook for blending human judgment with agentic automation across enterprise functions.",
    tag: "Article",
  },
  {
    title: "Building Responsible AI Control Rooms",
    description:
      "A framework for observability, fail-safes, and governance inside mission-critical AI systems.",
    tag: "Guide",
  },
  {
    title: "From Pilots to Production AI",
    description:
      "How to evolve beyond prototypes and launch production-ready AI experiences within 90 days.",
    tag: "Playbook",
  },
];

const caseStudies = [
  {
    company: "Nova Energy",
    headline: "Predictive maintenance intelligence prevented 8 weeks of downtime.",
    metric: "72% reduction in unplanned outages",
  },
  {
    company: "Atlas Finance",
    headline: "Risk analysts collaborate with AI co-pilots to surface compliant insights.",
    metric: "3.4x faster scenario modeling",
  },
];

const Button = ({ variant = "primary", children }) => (
  <a className={`button button--${variant}`} href="#contact">
    {children}
  </a>
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
    <span className="capability-card__icon" aria-hidden="true">
      {icon}
    </span>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

const ProcessStep = ({ number, title, description }) => (
  <article className="card process-step">
    <span className="process-step__number">{number}</span>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </article>
);

const TestimonialCard = ({ quote, name, role }) => (
  <article className="card testimonial-card">
    <p className="testimonial-card__quote">“{quote}”</p>
    <div className="testimonial-card__author">
      <span className="testimonial-card__name">{name}</span>
      <span className="testimonial-card__role">{role}</span>
    </div>
  </article>
);

const InsightCard = ({ title, description, tag }) => (
  <article className="card insight-card">
    <span className="insight-card__tag">{tag}</span>
    <h3>{title}</h3>
    <p>{description}</p>
    <a className="insight-card__link" href="#contact">
      Read more →
    </a>
  </article>
);

const CaseStudyCard = ({ company, headline, metric }) => (
  <article className="card case-study-card">
    <span className="case-study-card__company">{company}</span>
    <h3>{headline}</h3>
    <p className="case-study-card__metric">{metric}</p>
    <a className="case-study-card__link" href="#contact">
      Explore engagement →
    </a>
  </article>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <span className="footer__logo">Human OS</span>
      <p>Intelligence infrastructure for ambitious teams.</p>
    </div>
    <div className="footer__right">
      <a href="mailto:hello@humanos.ai">hello@humanos.ai</a>
      <span>© {new Date().getFullYear()} Human OS. All rights reserved.</span>
    </div>
  </footer>
);

const Navigation = () => (
  <nav className="nav">
    <a className="nav__brand" href="#">
      Human OS
    </a>
    <div className="nav__links">
      {navigation.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
    <Button variant="ghost">Start a project</Button>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <p className="hero__eyebrow">AI Agency for Operator-Led Teams</p>
      <h1>
        Build the Human Operating System that fuses people, process, and intelligent agents.
      </h1>
      <p className="hero__subtitle">
        We design and deploy human-centered AI systems that automate the repetitive, amplify the creative, and deliver
        compounding operational leverage.
      </p>
      <div className="hero__actions">
        <Button>Book a discovery session</Button>
        <Button variant="ghost">Watch product walkthrough</Button>
      </div>
      <dl className="hero__stats">
        <div>
          <dt>90-day launch</dt>
          <dd>From idea to intelligent workflow in one quarter.</dd>
        </div>
        <div>
          <dt>4.8 CSAT</dt>
          <dd>Measured across 37 post-implementation reviews.</dd>
        </div>
        <div>
          <dt>$65M</dt>
          <dd>Aggregate value unlocked for our partners in 2024.</dd>
        </div>
      </dl>
    </div>
    <div className="hero__visual">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__panel">
        <span className="hero__panel-eyebrow">Live Signal</span>
        <h3>Ops Control Room</h3>
        <ul>
          <li>
            <span>Agentic intake triage</span>
            <strong>92% auto-resolved</strong>
          </li>
          <li>
            <span>Insight synthesis</span>
            <strong>2.4 min to action</strong>
          </li>
          <li>
            <span>Human override</span>
            <strong>Trust index 98%</strong>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact__content">
      <h2>Activate your Human Operating System</h2>
      <p>
        Tell us about your team, your data environment, and the decisions you want to transform. We respond within one
        business day.
      </p>
    </div>
    <form className="contact__form">
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Casey Jordan" />
      </div>
      <div className="form__group">
        <label htmlFor="email">Work Email</label>
        <input id="email" type="email" placeholder="you@company.com" />
      </div>
      <div className="form__group">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Acme Inc." />
      </div>
      <div className="form__group form__group--full">
        <label htmlFor="focus">What should we focus on?</label>
        <textarea
          id="focus"
          rows="4"
          placeholder="Describe your workflows, bottlenecks, and desired outcomes."
        />
      </div>
      <button type="submit" className="button button--primary form__submit">
        Submit
      </button>
    </form>
  </section>
);

const App = () => (
  <div className="page">
    <div className="gradient-bg" aria-hidden="true" />
    <Navigation />
    <main>
      <Hero />
      <section id="capabilities" className="section section--grid">
        <SectionTitle
          eyebrow="Capabilities"
          title="Engineers of the human-plus-AI operating model"
          description="We orchestrate intelligent systems around the people who make pivotal decisions in your organization."
        />
        <div className="grid grid--three">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <SectionTitle
          eyebrow="Process"
          title="From diagnostic to continuous learning"
          description="Every engagement ships with impact modeling, insight observability, and a human-in-the-loop safety net."
        />
        <div className="grid grid--three">
          {processSteps.map((step) => (
            <ProcessStep key={step.title} {...step} />
          ))}
        </div>
      </section>

      <section id="case-studies" className="section section--inverse">
        <SectionTitle eyebrow="Case Studies" title="Outcomes from teams running on Human OS" />
        <div className="grid grid--two">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.company} {...study} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by leaders modernizing their operating systems"
        />
        <div className="grid grid--two">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section id="insights" className="section">
        <SectionTitle
          eyebrow="Insights"
          title="Thinking at the edge of human-computer collaboration"
        />
        <div className="grid grid--three">
          {insights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
