import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span style={{ color: 'var(--accent1)' }}>&lt;</span>
          <span style={{ background: 'linear-gradient(135deg, var(--accent1), var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KK</span>
          <span style={{ color: 'var(--accent1)' }}>/&gt;</span>
        </div>
        <p className="footer-copy">
          Designed & Built by <span>Kirubakaran K</span> · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/kirubakarank1103" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kirubakarank1103" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;