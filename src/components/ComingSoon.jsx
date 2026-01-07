import { useEffect, useState } from "react";
import "../styles/ComingSoon.css";

export default function ComingSoon() {
  const launchDate = new Date("2026-03-01T00:00:00");

  const calculateTimeLeft = () => {
    const diff = launchDate - new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  /* NAV ACTIVE ON SCROLL */
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            const active = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", { method: "POST", body: data })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => alert("Submission failed"));
  };

  return (
    <div className="page">
      {/* SIDE NAV */}
      <nav className="side-nav">
        <a href="#home" className="nav-link active">
          <span>00.</span><small>HOME</small>
        </a>
        <a href="#about" className="nav-link">
          <span>01.</span><small>ABOUT</small>
        </a>
        <a href="#services" className="nav-link">
          <span>02.</span><small>SERVICES</small>
        </a>
        <a href="#contact" className="nav-link">
          <span>03.</span><small>CONTACT</small>
        </a>
      </nav>

      <main className="center">
        {/* HOME */}
        <section id="home">
          <h1>TRIVENTA EXPORTS</h1>
          <h2>Your Gateway to Global Market</h2>
          <p className="status">UNDER CONSTRUCTION</p>

          {timeLeft && (
            <div className="countdown">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div className="time-box" key={label}>
                  <span className="number">{value}</span>
                  <span className="label">{label.toUpperCase()}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3 className="contact-heading">03. CONTACT US</h3>

          <form
            name="business-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="notify-form"
          >
            <input type="hidden" name="form-name" value="business-enquiry" />
            <input type="hidden" name="bot-field" />

            <textarea
              name="message"
              placeholder="Tell us what you're looking for (products, quantity, destination, etc.)"
              required
            />

            <div className="contact-row">
              <input type="email" name="email" placeholder="Your email address" />
              <input type="tel" name="phone" placeholder="Your phone / WhatsApp number" />
            </div>

            <button type="submit" disabled={submitted}>
              {submitted ? "Requested" : "Request a Callback"}
            </button>

            <small className="privacy-note">
              We respect your privacy. No spam.
            </small>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>+91 91480 25018 · info@triventaexports.com</p>
        <p>© 2026 Triventa Exports Pvt Ltd · Made in India 🇮🇳</p>
      </footer>
    </div>
  );
}