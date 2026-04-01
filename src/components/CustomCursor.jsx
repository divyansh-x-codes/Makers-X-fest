import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mx = 0, my = 0;
    let lastMx = 0, lastMy = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = `hsla(${170 + Math.random() * 20}, 100%, 70%, `; // Teal-ish
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        if (this.size > 0.1) this.size -= 0.02;
      }
      draw() {
        ctx.fillStyle = this.color + this.life + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 255, 209, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const onMouseMove = (e) => { 
      mx = e.clientX; 
      my = e.clientY; 
      
      const dist = Math.hypot(mx - lastMx, my - lastMy);
      if (dist > 3) {
        for (let i = 0; i < 2; i++) {
          particles.push(new Particle(mx, my));
        }
        lastMx = mx;
        lastMy = my;
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [location.pathname]);

  return (
    <canvas id="cursor-canvas" ref={canvasRef}></canvas>
  );
}
