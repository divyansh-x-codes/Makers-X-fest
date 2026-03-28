import { useMemo } from 'react';

const COLORS = [
  'rgba(255, 140, 0, 0.9)',   // deep orange
  'rgba(255, 69, 0, 0.85)',   // red-orange
  'rgba(255, 200, 0, 0.9)',   // golden yellow
  'rgba(255, 100, 0, 0.8)',   // orange
  'rgba(255, 50, 0, 0.7)',    // red
  'rgba(245, 166, 35, 0.95)', // amber
  'rgba(255, 220, 50, 0.85)', // bright yellow
];

export default function FireSparkles({ count = 60 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 2,          // 2–7px
      duration: Math.random() * 4 + 3,       // 3–7s
      delay: Math.random() * 6,              // 0–6s stagger
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      drift: (Math.random() - 0.5) * 120,    // horizontal drift px
      blur: Math.random() * 3,               // 0–3px blur
      opacity: Math.random() * 0.6 + 0.4,   // 0.4–1.0
    }));
  }, [count]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Radial fire glow at bottom */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120%',
        height: '70%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,80,0,0.35) 0%, rgba(255,40,0,0.15) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Secondary amber glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '50%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(245,166,35,0.2) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Dark top vignette so text is readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, #060608 0%, rgba(6,6,8,0.6) 30%, rgba(6,6,8,0.2) 60%, rgba(6,6,8,0.05) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Spark particles */}
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * (1.5 + Math.random())}px`,
            borderRadius: '50% 50% 30% 30%',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 4}px ${p.color}`,
            filter: `blur(${p.blur}px)`,
            opacity: 0,
            animation: `fireRise ${p.duration}s ${p.delay}s ease-in infinite`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes fireRise {
          0%   { transform: translateY(0)           translateX(0)              scale(1);   opacity: 0; }
          10%  { opacity: var(--particle-opacity, 0.9); }
          50%  { transform: translateY(-45vh)        translateX(calc(var(--drift) * 0.5))  scale(0.7); opacity: 0.6; }
          85%  { transform: translateY(-85vh)        translateX(var(--drift))              scale(0.3); opacity: 0.2; }
          100% { transform: translateY(-100vh)       translateX(var(--drift))              scale(0.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
