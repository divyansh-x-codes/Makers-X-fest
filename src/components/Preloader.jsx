import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sounds';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [canEnter, setCanEnter] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Suggest interaction after a short delay
    const timer = setTimeout(() => {
      setCanEnter(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleEnter = () => {
    setStarted(true);
    // Play firecracker sound - now it will work because of user interaction!
    playSound('firework');
    
    // Wait for gate animation then remove preloader
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2500);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#060608]"
           exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
        >
          {/* Interaction Button */}
          <AnimatePresence>
            {canEnter && !started && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="absolute z-[100] flex flex-col items-center gap-6"
              >
                <button 
                  onClick={handleEnter}
                  className="enter-fest-btn"
                >
                  ENTER MAKERS X
                </button>
                <div className="text-[#00FFD1] font-mono text-sm tracking-[0.2em] animate-pulse">
                  CLICK TO UNLOCK FESTIVAL
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Door Panel */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#3d261d] z-20 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.9)]"
            initial={{ x: 0 }}
            animate={started ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <img 
               src="/assets/palace-doors.png" 
               className="absolute left-0 top-0 w-[200%] h-full max-w-none object-cover object-left" 
               alt="Left Gate" 
               style={{ borderRight: '2px solid rgba(0,255,209,0.3)' }}
            />
          </motion.div>

          {/* Right Door Panel */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#3d261d] z-20 overflow-hidden shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
            initial={{ x: 0 }}
            animate={started ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <img 
               src="/assets/palace-doors.png" 
               className="absolute right-0 top-0 w-[200%] h-full max-w-none object-cover object-right" 
               alt="Right Gate"
               style={{ borderLeft: '2px solid rgba(0,255,209,0.3)' }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
