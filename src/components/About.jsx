import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Client-Focused',
      description: 'Your success is our mission. We prioritize understanding your goals and delivering solutions that exceed expectations.'
    },
    {
      icon: '⚡',
      title: 'Agile & Efficient',
      description: 'We work smart, not just hard. Our streamlined processes ensure fast turnarounds without compromising quality.'
    },
    {
      icon: '🔒',
      title: 'Trusted Partner',
      description: 'Transparency, reliability, and integrity are at the core of everything we do. Your trust is our foundation.'
    }
  ];

  return (
    <section 
      id="about" 
      className="about"
    >
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">About Us</span>
          <h2 className="section-title">
            Building Digital Excellence,
            <span className="gradient-text"> One Project at a Time</span>
          </h2>
          <p className="section-description">
            BlueOrbit Studio is more than a freelancing brand—it's a commitment to quality, 
            innovation, and partnership. Powered by the SWM team, we combine creativity 
            with technical expertise to deliver solutions that make a real impact.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Our Story</h3>
            <p>
              Founded with a vision to bridge the gap between ambitious ideas and flawless 
              execution, BlueOrbit Studio has grown into a trusted name in the freelancing world. 
              We're a small but mighty team that believes in the power of collaboration, 
              continuous learning, and pushing creative boundaries.
            </p>
            <p>
              Every project we take on is an opportunity to prove that world-class quality 
              doesn't require a massive agency. With passion, precision, and a personal 
              touch, we deliver results that speak for themselves.
            </p>
          </motion.div>

          <motion.div 
            className="about-approach"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Our Approach</h3>
            <div className="approach-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Understand</h4>
                  <p>We dive deep into your goals, audience, and vision</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Design</h4>
                  <p>Crafting beautiful, functional solutions tailored to you</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Deliver</h4>
                  <p>Launching with precision, support, and lasting impact</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="values-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
