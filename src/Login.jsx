import { useState } from "react";

// Login component - shown before the user accesses the main app
export default function Login({ onLogin }) {
  // Track email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // Full screen centered layout with dark gradient background
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>FOSSEE Workshop Booking</h2>
        <p style={styles.subtext}>Sign in to continue</p>

        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* Calls the onLogin prop passed from App.js to set loggedIn to true */}
        <button onClick={onLogin} style={styles.button}>
          Sign In
        </button>

        <p style={styles.footer}>A FOSSEE Initiative · IIT Bombay</p>
      </div>
    </div>
  );
}

// Inline styles kept here to avoid extra CSS file for a small component
const styles = {
  // Full screen flex container with dark gradient
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    padding: "20px",
  },
  // White card centered on screen
  card: {
    background: "#fff",
    padding: "36px 32px",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "360px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "6px",
  },
  subtext: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "24px",
  },
  // Shared style for both email and password inputs
  input: {
    width: "100%",
    padding: "11px 14px",
    margin: "8px 0",
    border: "1.5px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "15px",
    fontFamily: "inherit",
    color: "#1e293b",
    background: "#f8fafc",
    boxSizing: "border-box",
    outline: "none",
  },
  // Primary blue submit button
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    background: "#1d4ed8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  // Small footer text at bottom of card
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#94a3b8",
  },
};