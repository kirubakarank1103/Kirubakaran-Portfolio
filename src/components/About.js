import React from 'react';
import './About.css';

const skills = [
  { name: 'React.js', level: 90, color: '#61DAFB' },
  { name: 'Node.js', level: 85, color: '#68A063' },
  { name: 'MongoDB', level: 80, color: '#47A248' },
  { name: 'Express.js', level: 85, color: '#ff3cac' },
  { name: 'Python', level: 75, color: '#FFD43B' },
  { name: 'REST APIs', level: 90, color: '#2b86c5' },
  { name: 'SQL', level: 70, color: '#00f5a0' },
  { name: 'Git & GitHub', level: 88, color: '#ffb347' },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building the web,<br />
              <span className="gradient-text">one stack at a time</span>
            </h2>
            <p className="about-text">
              I am <strong>Kirubakaran K</strong>, a Full Stack Developer who loves crafting seamless digital experiences.
            </p>
            <p className="about-text">
              I enjoy solving complex problems and shipping products that make a difference!
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
            </div>
            <div className="about-actions">
              <button
                onClick={() => window.open('https://github.com/kirubakarank1103', '_blank')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'linear-gradient(135deg, #ff3cac, #784ba0)', color: 'white', fontWeight: '700', borderRadius: '8px', fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                View GitHub
              </button>
            </div>
          </div>
          <div className="about-right">
            <div className="skills-card">
              <h3 className="skills-title">Tech Stack</h3>
              <div className="skills-list">
                {skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: skill.level + '%', background: skill.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;