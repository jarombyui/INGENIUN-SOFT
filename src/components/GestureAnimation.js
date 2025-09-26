import React from 'react';
import { motion } from 'framer-motion';

const GestureAnimation = ({ 
  children, 
  type = "drag",
  className = "",
  ...props 
}) => {
  const getGestureProps = () => {
    switch (type) {
      case "drag":
        return {
          drag: true,
          dragConstraints: { left: -100, right: 100, top: -50, bottom: 50 },
          dragElastic: 0.2,
          whileDrag: { 
            scale: 1.1, 
            rotate: 5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          },
          dragTransition: { bounceStiffness: 300, bounceDamping: 20 }
        };
      case "pan":
        return {
          drag: "x",
          dragConstraints: { left: -200, right: 200 },
          dragElastic: 0.1,
          whileDrag: { 
            scale: 1.05,
            filter: "brightness(1.1)"
          }
        };
      case "rotate":
        return {
          drag: true,
          dragConstraints: { left: -50, right: 50, top: -50, bottom: 50 },
          dragElastic: 0.3,
          whileDrag: { 
            rotate: 360,
            scale: 1.2
          }
        };
      case "tilt":
        return {
          drag: true,
          dragConstraints: { left: -30, right: 30, top: -30, bottom: 30 },
          dragElastic: 0.5,
          whileDrag: { 
            rotateX: 15,
            rotateY: 15,
            scale: 1.1
          }
        };
      case "magnetic":
        return {
          drag: true,
          dragConstraints: { left: -100, right: 100, top: -100, bottom: 100 },
          dragElastic: 0.8,
          whileDrag: { 
            scale: 1.3,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }
        };
      case "swipe":
        return {
          drag: "x",
          dragConstraints: { left: 0, right: 0 },
          dragElastic: 0.1,
          whileDrag: { 
            scale: 0.95,
            opacity: 0.8
          },
          onDragEnd: (event, info) => {
            if (info.offset.x > 100) {
              // Swipe right action
              console.log("Swipe right detected");
            } else if (info.offset.x < -100) {
              // Swipe left action
              console.log("Swipe left detected");
            }
          }
        };
      default:
        return {
          drag: true,
          dragConstraints: { left: -50, right: 50, top: -50, bottom: 50 },
          dragElastic: 0.2,
          whileDrag: { scale: 1.05 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      style={{ 
        cursor: type === "drag" || type === "pan" || type === "rotate" || type === "tilt" || type === "magnetic" || type === "swipe" ? "grab" : "default",
        transformStyle: "preserve-3d"
      }}
      {...getGestureProps()}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GestureAnimation;
