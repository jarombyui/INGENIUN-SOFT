import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  stagger = 0.1,
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: duration
      }
    }
  };

  // Si children es un string, lo dividimos en palabras
  const words = typeof children === 'string' ? children.split(' ') : [children];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={textVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
