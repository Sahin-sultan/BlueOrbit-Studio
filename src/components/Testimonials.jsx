import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "BlueOrbit Studio delivered our e-commerce platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Project-Based Feedback",
      role: "E-commerce Platform",
      rating: 5
    },
    {
      id: 2,
      content: "The team transformed our outdated website into a modern, responsive design. Communication was clear and the process was smooth throughout.",
      author: "Project-Based Feedback",
      role: "Website Redesign",
      rating: 5
    },
    {
      id: 3,
      content: "Outstanding mobile app development. The SWM team brought our vision to life with clean code and beautiful UI/UX design.",
      author: "Project-Based Feedback",
      role: "Mobile Application",
      rating: 5
    },
    {
      id: 4,
      content: "Professional branding services that truly captured our company's essence. The deliverables were comprehensive and exactly what we needed.",
      author: "Project-Based Feedback",
      role: "Brand Identity",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Client Feedback</span>
          <h2 className="section-title">Trusted by Teams Worldwide</h2>
          <p className="section-description">
            Real feedback from projects we've delivered with dedication and precision.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="testimonial-content">"{testimonial.content}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>

              <div className="card-decoration"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
