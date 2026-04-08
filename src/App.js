import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      name: "Python Basics Workshop",
      date: "10 April 2026",
      seats: 25,
      tag: "Beginner",
      desc: "Learn core Python concepts through hands-on examples and simple exercises designed for first-time programmers.",
    },
    {
      id: 2,
      name: "Web Development Bootcamp",
      date: "14 April 2026",
      seats: 18,
      tag: "Beginner",
      desc: "Introduction to HTML, CSS, and frontend development fundamentals for students with no prior experience.",
    },
    {
      id: 3,
      name: "AI and ML Starter Session",
      date: "20 April 2026",
      seats: 12,
      tag: "Intermediate",
      desc: "A beginner-friendly session on artificial intelligence and machine learning with real-world examples.",
    },
  ]);

  const [form, setForm] = useState({ name: "", email: "", workshop: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.workshop) newErrors.workshop = "Please select a workshop.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWorkshops((prev) =>
        prev.map((w) =>
          w.name === form.workshop && w.seats > 0
            ? { ...w, seats: w.seats - 1 }
            : w
        )
      );
      setSubmitted(true);
      setForm({ name: "", email: "", workshop: "" });
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <a href="#home" className="nav-brand" aria-label="Workshop Booking Home" title="Go to homepage">
          <span className="brand-dot" aria-hidden="true">◆</span>
          Workshop Booking
        </a>

        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
        </button>

        <div className={`navLinks ${menuOpen ? "nav-open" : ""}`} role="menubar">
          <button role="menuitem" onClick={() => scrollTo("home")}>
            Home
          </button>
          <button role="menuitem" onClick={() => scrollTo("workshops")}>
            Workshops
          </button>
          <button role="menuitem" onClick={() => scrollTo("book")} className="nav-cta">
            Book Now
          </button>
          <button
            role="menuitem"
            className="nav-cta"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      </nav>

      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-badge" aria-label="Open for registrations">
          <span className="pulse-dot" aria-hidden="true" /> Open for Registrations
        </div>

        <h1 id="hero-heading">
          Learn. Build. <span className="highlight">Grow.</span>
        </h1>

        <p>
          Discover hands-on workshops designed for students. Check availability,
          pick your session, and secure your spot in seconds.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => scrollTo("workshops")}
            aria-label="Browse all upcoming workshops"
          >
            Browse Workshops
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollTo("book")}
            aria-label="Jump to booking form"
          >
            Book a Seat →
          </button>
        </div>

        <div className="hero-stats" aria-label="Workshop statistics">
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Workshops</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">55</span>
            <span className="stat-label">Total Seats</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">Free</span>
            <span className="stat-label">Entry</span>
          </div>
        </div>
      </section>

      <section
        className="workshopSection"
        id="workshops"
        aria-labelledby="workshops-heading"
      >
        <div className="section-header">
          <p className="section-eyebrow">Upcoming Sessions</p>
          <h2 id="workshops-heading">Available Workshops</h2>
        </div>

        <div className="cards" role="list">
          {workshops.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--grey-400)" }}>
              No workshops available at the moment. Check back soon!
            </p>
          )}
          {workshops.map((item) => {
            const isFull = item.seats === 0;

            return (
              <article
                className={`card ${isFull ? "card-full" : ""}`}
                key={item.id}
                role="listitem"
                aria-label={`${item.name}, ${item.date}, ${item.seats} seats left`}
              >
                <div className="card-top">
                  <span className={`tag tag-${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                  {isFull && <span className="tag tag-full">Full</span>}
                </div>

                <h3>{item.name}</h3>
                <p className="date" aria-label={`Date: ${item.date}`}>
                  📅 {item.date}
                </p>
                <p className="card-desc">{item.desc}</p>

                <div className="card-footer">
                  <div
                    className="seats-bar"
                    role="meter"
                    aria-valuenow={item.seats}
                    aria-valuemin={0}
                    aria-valuemax={25}
                    aria-label={`${item.seats} seats remaining`}
                  >
                    <div
                      className="seats-fill"
                      style={{ width: `${(item.seats / 25) * 100}%` }}
                    />
                  </div>

                  <p className={`seats ${item.seats <= 5 ? "seats-low" : ""}`}>
                    {isFull ? "No seats available" : `${item.seats} seats left`}
                  </p>

                  <button
                    className={`btn-book ${isFull ? "btn-disabled" : ""}`}
                    onClick={() => {
                      setForm((f) => ({ ...f, workshop: item.name }));
                      scrollTo("book");
                    }}
                    disabled={isFull}
                    aria-label={
                      isFull
                        ? `${item.name} is fully booked`
                        : `Book ${item.name}`
                    }
                  >
                    {isFull ? "Fully Booked" : "Book Now"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bookSection" id="book" aria-labelledby="book-heading">
        <div className="section-header">
          <p className="section-eyebrow">Reserve Your Spot</p>
          <h2 id="book-heading">Book Your Seat</h2>
        </div>

        <div className="formBox" role="region" aria-label="Booking form">
          {submitted ? (
            <div className="success-msg" role="alert" aria-live="polite">
              <span className="success-icon" aria-hidden="true">
                ✓
              </span>
              <h3>Booking Confirmed!</h3>
              <p>You're all set. Check your email for the confirmation details.</p>
              <button className="btn-primary" onClick={handleReset}>
                Book Another
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Jyo Sakthi"
                  value={form.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="field-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. you@college.edu"
                  value={form.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="workshop">Select Workshop</label>
                <select
                  id="workshop"
                  name="workshop"
                  value={form.workshop}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.workshop}
                >
                  <option value="">-- Choose a workshop --</option>
                  {workshops.map((w) => (
                    <option key={w.id} value={w.name} disabled={w.seats === 0}>
                      {w.name} {w.seats === 0 ? "(Full)" : `(${w.seats} seats)`}
                    </option>
                  ))}
                </select>
                {errors.workshop && (
                  <span className="field-error" role="alert">
                    {errors.workshop}
                  </span>
                )}
              </div>

              <button
                className="btn-primary btn-full"
                onClick={handleSubmit}
                aria-label="Confirm your workshop booking"
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="footer" role="contentinfo" aria-label="Site footer">
        <p>© 2026 Workshop Booking · Built with React</p>
        <p className="footer-sub">A FOSSEE Initiative · IIT Bombay</p>
      </footer>
    </div>
  );
}

export default App;