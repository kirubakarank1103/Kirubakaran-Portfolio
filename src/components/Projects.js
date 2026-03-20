import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'PG Website',
    desc: 'A fully responsive PG accommodation website with room listings, amenities, pricing, and contact features.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=220&fit=crop',
    color: '#ff3cac',
    github: 'https://github.com/kirubakarank1103',
    live: 'https://kiruba-pg-website-hgu6.onrender.com/',
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Hotel Menu App',
    desc: 'A digital hotel menu application with item listings, categories, and a clean ordering interface.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=220&fit=crop',
    color: '#2b86c5',
    github: 'https://github.com/kirubakarank1103',
    live: 'https://kiruba-hotal-menu.onrender.com/',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Real Estate Website',
    desc: 'A modern real estate platform with property listings, search filters, and detailed property views.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=220&fit=crop',
    color: '#00f5a0',
    github: 'https://github.com/kirubakarank1103',
    live: 'https://kiruba-real-estate.onrender.com',
    category: 'Full Stack',
  },
  {
    id: 4,
    title: 'Task Manager App',
    desc: 'Kanban-style project management tool with real-time updates, drag-and-drop, and team collaboration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=220&fit=crop',
    color: '#ffb347',
    github: 'https://github.com/kirubakarank1103',
    live: '#',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'REST API Service',
    desc: 'Scalable RESTful API with authentication, rate limiting, caching, and full documentation.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=220&fit=crop',
    color: '#784ba0',
    github: 'https://github.com/kirubakarank1103',
    live: '#',
    category: 'Backend',
  },
  {
    id: 6,
    title: 'Chat Application',
    desc: 'Real-time messaging app with rooms, private chats, file uploads, and emoji reactions.',
    tech: ['React', 'Socket.io', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=220&fit=crop',
    color: '#ff6b6b',
    github: 'https://github.com/kirubakarank1103',
    live: '#',
    category: 'Full Stack',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="projects-subtitle">
          Here are some of my recent builds — real projects with real code.
        </p>
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <span className="project-category" style={{ color: project.color, borderColor: project.color, background: 'rgba(0,0,0,0.7)' }}>{project.category}</span>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button onClick={() => window.open(project.github, '_blank')} className="proj-link">
                    Code
                  </button>
                  {project.live !== '#' && (
                    <button onClick={() => window.open(project.live, '_blank')} className="proj-link proj-live" style={{ color: project.color, borderColor: `${project.color}50` }}>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <button onClick={() => window.open('https://github.com/kirubakarank1103', '_blank')} className="view-all-btn">
            View All on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;