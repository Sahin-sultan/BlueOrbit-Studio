import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. From wireframes to polished designs, we craft experiences that convert.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Responsive Design']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, fast, and scalable websites built with cutting-edge technologies. Performance and SEO optimized.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'API Integration', 'CMS Development']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
      features: ['React Native', 'Flutter', 'Progressive Web Apps', 'App Store Deployment']
    },
    {
      icon: '🚀',
      title: 'Brand Identity',
      description: 'Complete brand packages including logos, color schemes, typography, and brand guidelines.',
      features: ['Logo Design', 'Brand Strategy', 'Marketing Materials', 'Style Guides']
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Boost your website speed, improve Core Web Vitals, and enhance overall user experience.',
      features: ['Speed Analysis', 'Code Optimization', 'CDN Setup', 'Caching Strategies']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your digital products running smoothly. Updates, fixes, and improvements.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Feature Enhancements']
    }
  ];

  return (
    <section 
      id="services" 
      className="services"
    >
      {/* Scrolling Text Banner */}
      <div className="scrolling-banner">
        <div className="scrolling-text">
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Branding</span>
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Branding</span>
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Branding</span>
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Branding</span>
        </div>
      </div>
      
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Everything You Need to
            <span className="gradient-text"> Succeed Online</span>
          </h2>
          <p className="section-description">
            From concept to launch and beyond, we offer comprehensive services 
            tailored to bring your vision to life and drive measurable results.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
