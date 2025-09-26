import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, type = "fade" }) => {
  const getPageVariants = () => {
    switch (type) {
      case "slide":
        return {
          initial: {
            opacity: 0,
            x: 100,
            scale: 0.95
          },
          in: {
            opacity: 1,
            x: 0,
            scale: 1
          },
          out: {
            opacity: 0,
            x: -100,
            scale: 1.05
          }
        };
      case "scale":
        return {
          initial: {
            opacity: 0,
            scale: 0.8,
            rotateY: 15
          },
          in: {
            opacity: 1,
            scale: 1,
            rotateY: 0
          },
          out: {
            opacity: 0,
            scale: 1.2,
            rotateY: -15
          }
        };
      case "flip":
        return {
          initial: {
            opacity: 0,
            rotateX: 90,
            scale: 0.9
          },
          in: {
            opacity: 1,
            rotateX: 0,
            scale: 1
          },
          out: {
            opacity: 0,
            rotateX: -90,
            scale: 1.1
          }
        };
      default: // fade
        return {
          initial: {
            opacity: 0,
            y: 30,
            scale: 0.98,
            filter: "blur(10px)"
          },
          in: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
          },
          out: {
            opacity: 0,
            y: -30,
            scale: 1.02,
            filter: "blur(10px)"
          }
        };
    }
  };

  const getPageTransition = () => {
    switch (type) {
      case "slide":
        return {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.8
        };
      case "scale":
        return {
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.7
        };
      case "flip":
        return {
          type: "spring",
          stiffness: 350,
          damping: 28,
          duration: 0.9
        };
      default: // fade
        return {
          type: "tween",
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: 0.8
        };
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={getPageVariants()}
      transition={getPageTransition()}
      className="w-full"
      style={{ transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
