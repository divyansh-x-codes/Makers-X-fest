import { useMemo } from 'react';

const FIRE_COLORS = [
  'rgba(255, 140, 0, 0.95)',
  'rgba(255, 69, 0, 0.9)',
  'rgba(255, 200, 0, 0.95)',
  'rgba(255, 100, 0, 0.85)',
  'rgba(245, 166, 35, 1)',
  'rgba(255, 220, 50, 0.9)',
  'rgba(255, 60, 0, 0.8)',
];

export default function FireSparkles({ count = 60 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 7,
      color: FIRE_COLORS[Math.floor(Math.random() * FIRE_COLORS.length)],
      drift: (Math.random() - 0.5) * 100,
      blur: Math.random() * 2,
    }));
  }, [count]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Bottom fire source glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '110%',
        height: '55%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,80,0,0.32) 0%, rgba(255,40,0,0.12) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70%',
        height: '40%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(245,166,35,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Rising fire sparks */}
      {particles.map(p => (
        <span key={p.id} style={{
          position: 'absolute',
          bottom: '-8px',
          left: p.left,
          width: `${p.size}px`,
          height: `${p.size * 2}px`,
          borderRadius: '50% 50% 35% 35%',
          backgroundColor: p.color,
          boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 5}px ${p.color}`,
          filter: `blur(${p.blur}px)`,
          opacity: 0,
          animation: `fireRise ${p.duration}s ${p.delay}s ease-in infinite`,
          '--drift': `${p.drift}px`,
        }} />
      ))}

      <style>{`
        @keyframes fireRise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          8%   { opacity: 0.95; }
          50%  { transform: translateY(-40vh) translateX(calc(var(--drift) * 0.5)) scale(0.6); opacity: 0.5; }
          85%  { transform: translateY(-80vh) translateX(var(--drift)) scale(0.25); opacity: 0.15; }
          100% { transform: translateY(-100vh) translateX(var(--drift)) scale(0.05); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
