import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern online store with advanced filtering and payment integration',
      tech: ['React', 'Node.js', 'Stripe'],
      image: '🛍️'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard with real-time data visualization',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL'],
      image: '📊'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      category: 'mobile',
      description: 'Workout tracking app with social features',
      tech: ['React Native', 'Firebase'],
      image: '💪'
    },
    {
      id: 4,
      title: 'Brand Identity Suite',
      category: 'design',
      description: 'Complete rebrand including logo, colors, and guidelines',
      tech: ['Figma', 'Illustrator'],
      image: '🎨'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Beautiful site with online ordering and reservation system',
      tech: ['WordPress', 'WooCommerce'],
      image: '🍽️'
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      category: 'web',
      description: 'Property listing platform with advanced search',
      tech: ['React', 'Express', 'MongoDB'],
      image: '🏠'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="portfolio" 
      className="portfolio"
    >
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Projects We're
            <span className="gradient-text"> Proud Of</span>
          </h2>
          <p className="section-description">
            Explore our portfolio of successful projects across various industries. 
            Each one represents our commitment to quality and client satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="portfolio-image">
                <div className="image-placeholder">{project.image}</div>
                <div className="portfolio-overlay">
                  <a href="#contact" className="view-project-btn">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
