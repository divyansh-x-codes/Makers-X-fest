import React, { useEffect, useRef } from 'react';

const Firecrackers = ({ active = true, duration = 5000 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const particles = [];
    const colors = ['#00FFD1', '#FF4560', '#F5A623', '#39d96a', '#FFFFFF'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 2 + 1;
        this.velocity = {
          x: (Math.random() - 0.5) * 12,
          y: (Math.random() - 0.5) * 12
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;
        this.gravity = 0.15;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
      }
    }

    const createFirework = (x, y) => {
      const particleCount = 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    let timer = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Random bursts
      if (Math.random() < 0.08 && timer < duration) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * (canvas.height * 0.7)
        );
      }

      particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        } else {
          particle.update();
          particle.draw();
        }
      });

      timer += 16; // Approx 60fps
      if (particles.length > 0 || timer < duration) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    const timeout = setTimeout(() => {
      // Allow particles to finish fading
    }, duration + 2000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      clearTimeout(timeout);
    };
  }, [active, duration]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default Firecrackers;
