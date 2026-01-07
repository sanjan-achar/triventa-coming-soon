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

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      {/* SIDE NAV */}
      <nav className="side-nav">
        <a href="#home" className="nav-link">
          <span>00. </span>
          <small>HOME</small>
        </a>
        <a href="#about" className="nav-link">
          <span>01. </span>
          <small>ABOUT</small>
        </a>
        <a href="#services" className="nav-link">
          <span>02. </span>
          <small>SERVICES</small>
        </a>
        <a href="#contact" className="nav-link">
          <span>03. </span>
          <small>CONTACT</small>
        </a>
      </nav>

      {/* CENTER CONTENT */}
      <main className="center">
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

        <form
          name="launch-notify"
          method="POST"
          data-netlify="true"
          className="notify-form"
        >
          <input type="hidden" name="form-name" value="launch-notify" />
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit">Notify Me</button>
        </form>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>+91 91480 25018 · info@triventaexports.com</p>
        <p>© 2026 Triventa Exports Pvt Ltd · Made in India 🇮🇳</p>
      </footer>
    </div>
  );
}