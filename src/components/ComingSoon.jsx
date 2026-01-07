import "../styles/ComingSoon.css";

export default function ComingSoon() {
  return (
    <div className="container">
      <header className="header">
        <h1>Triventa Exports Pvt Ltd</h1>
        <p className="tagline">
          Exporting Premium Indian Goods to the World
        </p>
      </header>

      <section className="content">
        <p className="description">
          Triventa Exports Pvt Ltd is an India-based export company
          specializing in premium-quality goods for global markets.
          We focus on quality sourcing, compliance, and long-term
          business relationships.
        </p>

        <div className="categories">
          <span>Agricultural Products</span>
          <span>Textiles & Apparel</span>
          <span>Handicrafts</span>
          <span>Specialty & Industrial Goods</span>
        </div>

        {/* Netlify Form */}
        <form
          className="notify-form"
          name="launch-notify"
          method="POST"
          data-netlify="true"
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} Triventa Exports Pvt Ltd</p>
        <p>Made in India 🇮🇳</p>
      </footer>
    </div>
  );
}