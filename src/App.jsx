import { useMemo, useState } from 'react';

const initialForm = {
  businessName: '',
  ownerName: '',
  city: '',
  challenge: 'low online visibility',
  budget: '₹25,000 - ₹50,000',
  goals: 'get more inquiries',
};

const pricingPlans = [
  {
    title: 'Starter Website',
    price: '₹18,000',
    features: ['5-page responsive website', 'WhatsApp inquiry link', 'Basic SEO', 'AI-ready content strategy'],
  },
  {
    title: 'Growth Marketing',
    price: '₹12,000/month',
    features: ['Local ads strategy', 'Instagram content plan', 'Lead capture funnel', 'Competitor trend review'],
  },
  {
    title: 'Premium Growth Bundle',
    price: '₹28,000',
    features: ['Website + marketing', 'AI strategy report', 'Referral partner support', 'Priority WhatsApp help'],
  },
];

const referralSteps = [
  'Register as a referral partner with just your name and WhatsApp number.',
  'Receive AI script guidance and ready-to-share promotion messages.',
  'Earn ₹1,000 for every verified sale without any qualification requirement.',
];

const highlightFeatures = [
  'AI-powered competitor comparison for saree shops and local stores.',
  'Automated weekly feature recommendations based on market trends.',
  'Transparent pricing with value breakdown for every package.',
  'Instant customer contact through WhatsApp integration.',
];

function App() {
  const [form, setForm] = useState(initialForm);
  const [report, setReport] = useState(null);

  const aiReport = useMemo(() => {
    if (!report) return null;
    return report;
  }, [report]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const summary = `Based on ${form.businessName || 'your business'}, the main challenge is ${form.challenge}. The best next move is a ${form.goals} focused website with local digital marketing for ${form.city || 'your city'}.`;
    const plan = {
      summary,
      recommendations: [
        'Build a mobile-first showcase site with WhatsApp inquiry flow.',
        'Run targeted local marketing and competitor tracking each month.',
        'Add trust signals like customer reviews, product galleries, and FAQs.',
      ],
      budget: form.budget,
    };
    setReport(plan);
  };

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="brand">GrowAI</div>
        <a className="nav-link" href="#assessment">Assessment</a>
        <a className="nav-link" href="#pricing">Pricing</a>
        <a className="nav-link" href="#partners">Partners</a>
      </nav>

      <header className="hero">
        <div className="hero-copy-wrapper">
          <p className="eyebrow">AI-Driven Digital Growth Platform</p>
          <h1>Fast-track your local business growth with website, marketing, and referral automation.</h1>
          <p className="hero-copy">
            Designed for saree shops, boutiques, and small retailers who want a professional online presence, more customers, and instant WhatsApp support.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#assessment">Get Your Growth Plan</a>
            <a className="secondary-btn" href="#pricing">View Pricing</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Why business owners choose us</h3>
          <ul>
            <li>AI-reviewed growth recommendations</li>
            <li>Transparent pricing with clear value</li>
            <li>Instant WhatsApp seller support</li>
            <li>Referral earning program with zero barriers</li>
          </ul>
        </div>
      </header>

      <section className="feature-strip">
        {highlightFeatures.map((item) => (
          <div className="feature-pill" key={item}>{item}</div>
        ))}
      </section>

      <main>
        <section id="assessment" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">1. Customer Pain-Point Analysis</p>
            <h2>Tell us what is holding your business back</h2>
          </div>
          <div className="assessment-layout">
            <form onSubmit={handleSubmit} className="assessment-form">
              <input value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} placeholder="Business name" required />
              <input value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} placeholder="Owner name" required />
              <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" required />
              <select value={form.challenge} onChange={(e) => setForm({ ...form, challenge: e.target.value })}>
                <option value="low online visibility">Low online visibility</option>
                <option value="few inquiries">Few inquiries</option>
                <option value="no digital presence">No digital presence</option>
                <option value="hard to explain services">Hard to explain the services</option>
              </select>
              <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000+">₹1,00,000+</option>
              </select>
              <select value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })}>
                <option value="get more inquiries">Get more inquiries</option>
                <option value="sell online better">Sell online better</option>
                <option value="build trust">Build trust</option>
              </select>
              <button className="primary-btn" type="submit">Generate AI Report</button>
            </form>

            <div className="assessment-info">
              <h3>Smart analysis in seconds</h3>
              <p>Submit your challenge and our AI-style engine will summarize the best website and marketing next steps for your business.</p>
              <ul>
                <li>Identify digital gaps</li>
                <li>Recommend website features</li>
                <li>Simplify marketing investment</li>
              </ul>
            </div>
          </div>

          {aiReport && (
            <div className="report-card">
              <h3>AI-generated recommendation report</h3>
              <p>{aiReport.summary}</p>
              <ul>
                {aiReport.recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p><strong>Suggested budget:</strong> {aiReport.budget}</p>
            </div>
          )}
        </section>

        <section id="pricing" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">2. Transparent Pricing & Value Proposition</p>
            <h2>Clear packages made for growth</h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div className="pricing-card" key={plan.title}>
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature) => (<li key={feature}>{feature}</li>))}
                </ul>
                <a className="secondary-btn" href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20discuss%20the%20{plan.title}%20package" target="_blank" rel="noreferrer">Book a call</a>
              </div>
            ))}
          </div>
          <div className="whatsapp-box">
            <h3>Instant WhatsApp support</h3>
            <p>Customers can message instantly, and you get faster lead responses, clearer proposals, and higher trust.</p>
            <a className="primary-btn" href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20grow%20my%20business" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </section>

        <section id="partners" className="section-card partner-section">
          <div className="section-heading">
            <p className="eyebrow">3. Referral Partner Program</p>
            <h2>Earn ₹1,000 for every successful sale</h2>
          </div>
          <div className="partner-layout">
            <div>
              <p>Join the referral program with zero qualification required. We provide AI-powered partner training, doubt clearing, and sales messaging.</p>
              <ul>
                {referralSteps.map((step) => (<li key={step}>{step}</li>))}
              </ul>
            </div>
            <div className="partner-card partner-highlight">
              <h3>Partner support</h3>
              <p><strong>No degrees needed.</strong> Just share the link and get guidance.</p>
              <p><strong>₹1,000 per sale.</strong> Paid after the customer signs up.</p>
              <p><strong>Continuous AI help.</strong> We guide partners with messages, scripts, and answers.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <p className="eyebrow">4. Continuous Improvement</p>
            <h2>AI-based competitor analysis and feature updates</h2>
          </div>
          <div className="improvement-grid">
            <div className="improvement-card">
              <h3>Competitor insights</h3>
              <p>Compare your local competitors and get a weekly update on what features are converting visitors.</p>
            </div>
            <div className="improvement-card">
              <h3>New market features</h3>
              <p>Receive recommendations for trending website features like customer reviews, live chat, offers, and product filters.</p>
            </div>
            <div className="improvement-card">
              <h3>Growth roadmap</h3>
              <p>Always know what to add next with AI suggestions tailored to your business segment.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div>
          <p className="eyebrow">Ready to grow?</p>
          <h2>Launch your digital growth plan today.</h2>
        </div>
        <a className="primary-btn" href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20start%20my%20digital%20growth%20project" target="_blank" rel="noreferrer">Start on WhatsApp</a>
      </footer>
    </div>
  );
}

export default App;
