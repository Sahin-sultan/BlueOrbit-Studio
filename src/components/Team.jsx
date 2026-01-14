import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Team.css';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Shaan',
      role: 'Lead Developer & Founder',
      testimonial: 'BlueOrbit Studio by SWM Team is the most concentrated, connected, and helpful freelancing partner. We understand the joys and pains of growing your business. We\'ve been able to connect, guide, and coach our clients as they continue pushing through their journey.',
      image: '👨‍💻',
      company: 'SWM Team'
    },
    {
      name: 'Waqas',
      role: 'UI/UX Designer',
      testimonial: 'Working with clients to create exceptional digital experiences is my passion. At SWM, we believe in the power of great design to transform businesses and create lasting impressions that drive real results.',
      image: '🎨',
      company: 'SWM Team'
    },
    {
      name: 'Mehran',
      role: 'Backend Specialist',
      testimonial: 'Building robust, scalable systems that power amazing products is what drives me. Every line of code is an opportunity to create something that makes a difference in how businesses operate and serve their customers.',
      image: '⚙️',
      company: 'SWM Team'
    }
  ];

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevMember();
    } else if (info.offset.x < -threshold) {
      nextMember();
    }
  };

  const currentMember = teamMembers[activeIndex];

  return (
    <section 
      id="team" 
      className="team"
    >
      <div className="team-container">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Meet SWM Team</span>
          <h2 className="section-title">
            Founders that
            <span className="gradient-text"> believe in us</span>
          </h2>
        </motion.div>

        <div className="testimonial-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: 'grabbing' }}
            >
              <div className="testimonial-image-wrapper">
                <div className="geometric-border">
                  <div className="corner corner-tl"></div>
                  <div className="corner corner-tr"></div>
                  <div className="corner corner-bl"></div>
                  <div className="corner corner-br"></div>
                </div>
                <div className="member-image">
                  <div className="avatar-large">{currentMember.image}</div>
                </div>
              </div>

              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{currentMember.testimonial}</p>
                <div className="member-details">
                  <h3 className="member-name">{currentMember.name}</h3>
                  <p className="member-title">{currentMember.role}</p>
                  <div className="company-badge">{currentMember.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="navigation-buttons">
            <button 
              className="nav-btn nav-prev" 
              onClick={prevMember}
              aria-label="Previous member"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-btn nav-next" 
              onClick={nextMember}
              aria-label="Next member"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="dots-indicator">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
