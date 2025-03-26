import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f9fbff", minHeight: "100vh" }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "white",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
      }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4338ca" }}>WinDeck</h1>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center", fontSize: "0.9rem" }}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#waitlist" style={{
            background: "#4338ca",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            textDecoration: "none"
          }}>Join the Waitlist</a>
        </nav>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
        <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Win more clients with AI-powered proposals — in under 60 seconds.
        </h2>
        <p style={{ fontSize: "1.125rem", color: "#555" }}>
          Turn your client notes into stunning proposals without touching a doc.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="#waitlist" style={{
            background: "#4338ca",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            marginRight: "1rem"
          }}>Join the Waitlist</a>
          <a href="#how" style={{
            border: "1px solid #ccc",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none"
          }}>See How It Works</a>
        </div>

        <section id="waitlist" style={{ marginTop: "4rem", background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 0 10px rgba(0,0,0,0.04)" }}>
          <iframe
            data-tally-src="https://tally.so/embed/wvzYVX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="486"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Thank you for your interest!"
          ></iframe>
        </section>
      </main>
    </div>
  );
}

export default App;
