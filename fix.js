const fs = require('fs');

const navbar = `import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['home', 'about', 'projects', 'contact'];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={\`navbar \${scrolled ? 'scrolled' : ''}\`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <div className="logo-avatar">K</div>
        </div>
        <ul className={\`nav-links \${menuOpen ? 'open' : ''}\`}>
          {navLinks.map(link => (
            <li key={link}>
              <button
                className={\`nav-link \${activeSection === link ? 'active' : ''}\`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <a href="https://github.com/kirubakarank1103" target="_blank" rel="noreferrer" className="nav-cta">
          GitHub
        </a>
        <button
          className={\`hamburger \${menuOpen ? 'open' : ''}\`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;`;

const navbarCss = `
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(20px);
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-logo {
  cursor: pointer;
  margin-right: auto;
}

.logo-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff3cac, #784ba0, #2b86c5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 800;
  color: white;
  box-shadow: 0 0 16px rgba(255, 60, 172, 0.5);
  transition: all 0.3s;
  border: 2px solid rgba(255,255,255,0.15);
}

.logo-avatar:hover {
  transform: scale(1.1);
  box-shadow: 0 0 28px rgba(255, 60, 172, 0.8);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text2);
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent1), var(--accent3));
  border-radius: 2px;
}

.nav-cta {
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 8px 20px;
  border: 1px solid var(--accent1);
  border-radius: 6px;
  color: var(--accent1);
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--accent1);
  color: white;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; margin-left: auto; }
  .nav-cta { display: none; }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 260px;
    background: var(--bg2);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    transition: right 0.3s ease;
    border-left: 1px solid var(--border);
  }
  .nav-links.open { right: 0; }
  .nav-link { font-size: 16px; padding: 12px 24px; }
}`;

const contact = `import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mdawjapl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      alert('Something went wrong. Please try again!');
    }
    setLoading(false);
  };

  const contacts = [
    { icon: '📧', label: 'Email', value: 'kirubakarank1103@email.com', href: 'mailto:kirubakarank1103@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/kirubakarank1103', href: 'https://www.linkedin.com/in/kirubakarank1103' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/kirubakarank1103', href: 'https://github.com/kirubakarank1103' },
    { icon: '📱', label: 'Mobile No', value: '6383304533', href: 'tel:6383304533' },
  ];

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">
          Let us <span className="gradient-text">Work Together</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind? I am always open to discussing new opportunities. Drop a message!
        </p>
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-info">
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <p className="contact-label">{c.label}</p>
                    <p className="contact-value">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="availability-badge">
              <span className="avail-dot" />
              <div>
                <p className="avail-title">Available for Freelance</p>
                <p className="avail-sub">Open to full-time and contract roles</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            {sent ? (
              <div className="success-msg">
                <span>🎉</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I will get back to you soon!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="hello@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="I would love to work together on..." rows={5} required />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;`;

fs.writeFileSync('src/components/Navbar.js', navbar);
fs.writeFileSync('src/components/Navbar.css', navbarCss);
fs.writeFileSync('src/components/Contact.js', contact);
console.log('Done! Logo + Contact form updated!');