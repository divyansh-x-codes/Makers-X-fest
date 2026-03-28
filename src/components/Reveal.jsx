import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Immediately visible if already in viewport on mount (fixes mobile nav issue)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={domRef} className={`reveal ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
