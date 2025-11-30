import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="home-landing">
      <div className="welcome-card glass" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)', boxShadow: '0 8px 32px 0 rgba(21,101,192,0.12)' }}>
        <div className="navbar-brand" style={{ fontSize: '2.5rem', color: '#1565c0', marginBottom: '0.5rem', letterSpacing: '2px', textShadow: '0 2px 8px #90caf9' }}>Bedjos Solutions</div>
        <p className="subtitle" style={{ fontSize: '1.3rem', color: '#1976d2', fontWeight: '500', marginBottom: '0.5rem' }}>Signs, branding, printing, and creative services in Western Kenya.</p>
        <p className="desc" style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1.2rem', fontStyle: 'italic', background: 'rgba(21,101,192,0.05)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
          <span style={{ color: '#1976d2', fontWeight: 'bold' }}>We think.</span> <span style={{ color: '#b85c38', fontWeight: 'bold' }}>We create.</span> <span style={{ color: '#1976d2', fontWeight: 'bold' }}>We deliver.</span> <br />
          <span style={{ color: '#1565c0' }}>Explore our craft and see how we bring brands to life!</span>
        </p>
        <img src="/images/bedjos%20%20shop.jpg" alt="Bedjos Solutions Shop" style={{ width: '100%', maxWidth: '420px', borderRadius: '1rem', margin: '1rem auto', boxShadow: '0 4px 24px rgba(21,101,192,0.18)' }} />
      </div>
      <div className="gallery">
        <img src="/passbooks.jpg" alt="Security Passbooks" className="gallery-img" />
      </div>
    </section>
  );
}
