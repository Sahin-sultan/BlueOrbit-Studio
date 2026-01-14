import React from 'react';
import { motion } from 'framer-motion';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="profile-image-section">
            <div className="profile-avatar">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="profile-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Verified Team</span>
            </div>
          </div>

          <div className="profile-content">
            <h2 className="profile-title">BlueOrbit Studio</h2>
            <p className="profile-subtitle">Premium Freelancing Team • SWM</p>
            
            <p className="profile-description">
              We are a dedicated team of professionals committed to delivering exceptional 
              digital solutions. With expertise in web development, mobile apps, UI/UX design, 
              and branding, we transform ideas into reality.
            </p>

            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>

            <div className="profile-skills">
              <span className="skill-tag">Web Development</span>
              <span className="skill-tag">Mobile Apps</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Branding</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
