import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  className = "", 
  variant = "primary", 
  type = "default",
  size = "medium",
  ...props 
}) => {
  const getButtonVariants = () => {
    switch (type) {
      case "magnetic":
        return {
          rest: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
          hover: {
            scale: 1.08,
            rotate: 2,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          },
          tap: {
            scale: 0.92,
            rotate: -1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      case "ripple":
        return {
          rest: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
          hover: {
            scale: 1.05,
            y: -2,
            boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.1)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.95,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      case "glow":
        return {
          rest: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            filter: "brightness(1)"
          },
          hover: {
            scale: 1.06,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
            filter: "brightness(1.1)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.94,
            filter: "brightness(0.9)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      case "bounce":
        return {
          rest: {
            scale: 1,
            y: 0,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
          hover: {
            scale: 1.05,
            y: -5,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          },
          tap: {
            scale: 0.9,
            y: 2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
      default:
        return {
          rest: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
          hover: {
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          },
          tap: {
            scale: 0.95,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }
        };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white";
      case "secondary":
        return "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white";
      case "outline":
        return "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white";
      case "ghost":
        return "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40";
      case "glass":
        return "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white";
      default:
        return "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "px-4 py-2 text-sm";
      case "large":
        return "px-8 py-4 text-lg";
      case "xl":
        return "px-10 py-5 text-xl";
      default:
        return "px-6 py-3 text-base";
    }
  };

  return (
    <motion.button
      variants={getButtonVariants()}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`rounded-lg font-semibold transition-colors duration-200 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
