import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScrollAnimation = ({ 
  children, 
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getAnimationVariants = () => {
    switch (animation) {
      case "fadeUp":
        return {
          hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case "fadeDown":
        return {
          hidden: { 
            opacity: 0, 
            y: -50,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case "fadeLeft":
        return {
          hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case "fadeRight":
        return {
          hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case "scale":
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.5,
            rotate: -10
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
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
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case "slideUp":
        return {
          hidden: { 
            opacity: 0, 
            y: 100,
            filter: "blur(10px)"
          },
          visible: { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
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
          }
        };
      default:
        return {
          hidden: { 
            opacity: 0, 
            y: 30
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={controls}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
