import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Timer to drop the gates after 2.8s
    const timer = setTimeout(() => {
      setLoading(false);
      // Unlock scroll after animation finishes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1500); 
    }, 2800); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none overflow-hidden bg-[#060608]"
           exit={{ opacity: 0, transition: { duration: 0.2, delay: 1.5 } }} // Background fades last
        >
          {/* Glowing particle effect in the center gap when opening */}
          <motion.div 
             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-screen bg-[#F5A623] blur-[150px] z-10 opacity-40 pointer-events-none"
             exit={{ opacity: 0, filter: "blur(200px)", transition: { duration: 0.8 } }}
          />

          {/* Left Door Panel */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#3d261d] z-20 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.9)]"
            initial={{ x: 0 }}
            exit={{ x: '-100%', transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }}
          >
            {/* The image is forced to be 200% width of the half-container, i.e., 100vw, and anchored to left */}
            <img 
               src="/assets/palace-doors.png" 
               className="absolute left-0 top-0 w-[200%] h-full max-w-none object-cover object-left" 
               alt="Ornate Left Gate" 
               style={{ borderRight: '2px solid rgba(255,166,35,0.4)' }}
            />
          </motion.div>

          {/* Right Door Panel */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#3d261d] z-20 overflow-hidden shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
            initial={{ x: 0 }}
            exit={{ x: '100%', transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }}
          >
            {/* The image is anchored right, completing the right half of the texture perfectly */}
            <img 
               src="/assets/palace-doors.png" 
               className="absolute right-0 top-0 w-[200%] h-full max-w-none object-cover object-right" 
               alt="Ornate Right Gate"
               style={{ borderLeft: '2px solid rgba(255,166,35,0.4)' }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
