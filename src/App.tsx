import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (window.Tally) window.Tally.loadEmbeds();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #eee'
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          color: '#4f46e5',
          margin: 0
        }}>WinDeck</h1>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <a href="#features" style={{ textDecoration: 'none', color: '#111' }}>Features</a>
          <a href="#pricing" style={{ textDecoration: 'none', color: '#111' }}>Pricing</a>
          <a href="#resources" style={{ textDecoration: 'none', color: '#111' }}>Resources</a>
          <a href="#waitlist" style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: '500'
          }}>Join the Waitlist</a>
        </nav>
      </header>

      <main style={{ padding: "3rem 2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "auto" }}>
        <span style={{
          backgroundColor: "#e0e7ff",
          color: "#3730a3",
          fontSize: "0.75rem",
          padding: "0.25rem 0.5rem",
          borderRadius: "999px",
          fontWeight: "600",
        }}>
          AI-Powered Proposal Generator
        </span>

        <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginTop: "1rem" }}>
          Win more clients with AI-powered proposals — in under 60 seconds.
        </h2>

        <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#555" }}>
          Turn your client notes into stunning proposals without touching a doc.
        </p>

        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <a href="#waitlist" style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#4f46e5",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}>
            Join the Waitlist
          </a>
          <a href="#how" style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}>
            See How It Works
          </a>
        </div>

        <section id="form" style={{ marginTop: "4rem" }}>
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
    </>
  );
};

export default App;
