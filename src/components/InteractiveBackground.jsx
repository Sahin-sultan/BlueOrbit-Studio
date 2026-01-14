import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Wave class for flowing curves
    class Wave {
      constructor(yPos, amplitude, frequency, speed, color) {
        this.yPos = yPos;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.color = color;
      }

      draw(time) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = this.yPos + 
                   Math.sin((x * this.frequency) + (time * this.speed)) * this.amplitude +
                   Math.sin((x * this.frequency * 0.5) + (time * this.speed * 1.2)) * (this.amplitude * 0.5);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create multiple waves
    const waves = [
      new Wave(canvas.height * 0.7, 80, 0.003, 0.02, 'rgba(0, 212, 255, 0.03)'),
      new Wave(canvas.height * 0.75, 60, 0.004, 0.025, 'rgba(0, 153, 255, 0.05)'),
      new Wave(canvas.height * 0.8, 50, 0.005, 0.03, 'rgba(0, 212, 255, 0.08)'),
    ];

    // Animation loop
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = 'rgba(10, 13, 31, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw cursor glow
      const gradient = ctx.createRadialGradient(
        mousePosition.current.x,
        mousePosition.current.y,
        0,
        mousePosition.current.x,
        mousePosition.current.y,
        300
      );
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.15)');
      gradient.addColorStop(0.5, 'rgba(0, 153, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(10, 13, 31, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach(wave => wave.draw(time));

      // Draw subtle particles
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      ctx.fillStyle = 'rgba(0, 212, 255, 0.4)';
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width * 0.4) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.002 + i * 2) * canvas.height * 0.3) + canvas.height * 0.5;
        const size = Math.sin(time * 0.003 + i) * 1 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 1;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="interactive-canvas" />
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </>
  );
};

export default InteractiveBackground;
