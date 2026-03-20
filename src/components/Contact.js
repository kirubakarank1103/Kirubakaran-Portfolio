import React, { useState } from 'react';
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

export default Contact;