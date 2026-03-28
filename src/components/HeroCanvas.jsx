import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let W, H;
    const particles = [];
    let animationId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Fire colors: bright yellow, amber, deep orange, red
    const fireColors = ['255, 200, 50', '255, 160, 0', '255, 80, 0', '252, 50, 0'];

    const createParticle = (yOffset = 0) => {
      const isSpark = Math.random() < 0.15; // 15% chance to be a fast moving tiny spark
      return {
        x: Math.random() * W,
        y: H + Math.random() * yOffset + 50, // Spawn slightly below screen
        vx: (Math.random() - 0.5) * 3, // Horizontal drift
        vy: isSpark ? -(Math.random() * 8 + 4) : -(Math.random() * 4 + 1.5), // Upward speed
        r: isSpark ? Math.random() * 1.5 + 0.5 : Math.random() * 4 + 1.5, // Radius
        o: Math.random() * 0.8 + 0.2, // Opacity
        c: fireColors[Math.floor(Math.random() * fireColors.length)],
        life: isSpark ? Math.random() * 0.03 + 0.01 : Math.random() * 0.015 + 0.002 // Fade rate
      };
    };

    // Initialize particles spread out initially
    for (let i = 0; i < 200; i++) {
      particles.push({
        ...createParticle(0),
        y: Math.random() * H // spread initially across the screen height
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Use screen blend mode for glowing bright fire effect
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.o -= p.life; // Fade out as it floats up
        p.r *= 0.98; // Shrink slightly

        // Add some chaotic flicker movement to horizontal velocity
        p.vx += (Math.random() - 0.5) * 0.4;

        // Slower horizontal friction to keep it organic
        p.vx *= 0.98;

        // Respawn if invisible, too small, or past the top frame
        if (p.o <= 0 || p.r <= 0.1 || p.y < -100) {
          particles[i] = createParticle(100);
          p = particles[i];
        }

        // Core spark
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.o})`;
        ctx.fill();

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.o * 0.15})`;
        ctx.fill();

        // Giant atmospheric glow for largest particles
        if (p.r > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 15, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.c},${p.o * 0.04})`;
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = 'source-over'; // Reset blend mode

      animationId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef}></canvas>;
}
