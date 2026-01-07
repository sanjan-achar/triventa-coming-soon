import "../styles/ComingSoon.css";

export default function ComingSoon() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1>Triventa Exports Pvt Ltd</h1>
        <p className="tagline">Your Gateway to Global Market</p>
      </header>

      {/* MAIN CONTENT */}
      <section className="content">
        <p className="description">
          Triventa Exports Pvt Ltd is an India-based export company
          specializing in supplying fresh agricultural produce
          to international markets with strict quality standards
          and reliable logistics.
        </p>

        {/* PRODUCTS */}
        <div className="categories">
          <span>🥬 Fresh Vegetables</span>
          <span>🍎 Fresh Fruits</span>
          <span>☕ Premium Coffee Beans</span>
        </div>

        {/* TRUST SECTION */}
        <div className="trust-section">
          <div className="trust-card">
            <h4>🌱 Farm Fresh Quality</h4>
            <p>Sourced directly from trusted Indian farmers.</p>
          </div>
          <div className="trust-card">
            <h4>🚢 Export-Ready Logistics</h4>
            <p>Packaging and compliance for global shipping.</p>
          </div>
          <div className="trust-card">
            <h4>✅ Quality Assurance</h4>
            <p>Strict quality checks at every stage.</p>
          </div>
        </div>

        {/* NETLIFY FORM */}
        <form
          name="launch-notify"
          method="POST"
          data-netlify="true"
          className="notify-form"
        >
          <input type="hidden" name="form-name" value="launch-notify" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email for updates"
            required
          />
          <button type="submit">Notify Me</button>
        </form>

        {/* CONTACT */}
        <div className="contact-box">
          <a href="tel:+919148025018">📞 +91 91480 25018</a>
          <a href="mailto:info@triventaexports.com">
            📧 info@triventaexports.com
          </a>
          <a
            href="https://www.linkedin.com/company/triventa-exports/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn: Triventa Exports
          </a>
        </div>

        <p className="launch">🚀 Website launching soon</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Triventa Exports Pvt Ltd</p>
        <p>Made in India 🇮🇳</p>
      </footer>
    </div>
  );
}