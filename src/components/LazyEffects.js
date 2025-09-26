import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LazyEffects = ({ children, threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Cargar efectos con delay para mejor rendimiento
          setTimeout(() => {
            setIsLoaded(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className="relative">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isLoaded && children}
        </motion.div>
      )}
    </div>
  );
};

export default LazyEffects;
