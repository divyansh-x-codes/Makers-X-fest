import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cur = cursorRef.current;
    const curRing = ringRef.current;
    if (!cur || !curRing) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e) => { 
      mx = e.clientX; 
      my = e.clientY; 
    };
    
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animateCursor = () => {
      cur.style.transform = `translate(${mx - 6}px,${my - 6}px)`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      curRing.style.transform = `translate(${rx - 18}px,${ry - 18}px)`;
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    animateCursor();

    const attachHovers = () => {
      document.querySelectorAll('a, button, .event-card, .event-checkbox').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const handleMouseEnter = () => {
      cur.style.transform += ' scale(2)'; 
      curRing.style.width = '60px'; 
      curRing.style.height = '60px'; 
      curRing.style.borderColor = 'rgba(245,166,35,0.8)';
    };

    const handleMouseLeave = () => {
      curRing.style.width = '36px'; 
      curRing.style.height = '36px'; 
      curRing.style.borderColor = 'rgba(245,166,35,0.5)';
    }

    // Delay attaching to ensure DOM updates since we navigate client-side
    const timer = setTimeout(attachHovers, 300);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
      document.querySelectorAll('a, button, .event-card, .event-checkbox').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]); // Re-attach when path changes

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
