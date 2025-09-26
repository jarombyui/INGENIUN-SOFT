import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  type = "default",
  stagger = 0.1,
  ...props 
}) => {
  const getCardVariants = () => {
    switch (type) {
      case "flip":
        return {
          hidden: {
            opacity: 0,
            rotateY: 90,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: delay
            }
          },
          hover: {
            rotateY: 5,
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.95,
            rotateY: -2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      case "slide":
        return {
          hidden: {
            opacity: 0,
            x: -50,
            scale: 0.9
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: delay
            }
          },
          hover: {
            x: 5,
            scale: 1.03,
            y: -5,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.97,
            x: -2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      case "bounce":
        return {
          hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: delay
            }
          },
          hover: {
            y: -15,
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          },
          tap: {
            scale: 0.9,
            y: 5,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      default:
        return {
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(5px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: delay
            }
          },
          hover: {
            y: -8,
            scale: 1.02,
            filter: "brightness(1.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.98,
            filter: "brightness(0.95)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
    }
  };

  return (
    <motion.div
      variants={getCardVariants()}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
