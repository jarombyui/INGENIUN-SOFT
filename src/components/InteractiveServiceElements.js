import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const InteractiveServiceElements = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 'erp',
      title: 'ERP Moderno',
      icon: '🏢',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      id: 'estandarizacion',
      title: 'Estandarización',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(147, 51, 234, 0.3)'
    },
    {
      id: 'desarrollo',
      title: 'Desarrollo Web',
      icon: '💻',
      color: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    {
      id: 'automatizacion',
      title: 'Automatización',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.3)'
    },
    {
      id: 'bases-datos',
      title: 'Bases de Datos',
      icon: '🗄️',
      color: 'from-teal-500 to-cyan-500',
      glowColor: 'rgba(20, 184, 166, 0.3)'
    },
    {
      id: 'consultoria',
      title: 'Consultoría',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500',
      glowColor: 'rgba(234, 179, 8, 0.3)'
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Floating service orbs */}
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="absolute"
          style={{
            left: `${20 + (index % 3) * 30}%`,
            top: `${20 + Math.floor(index / 3) * 30}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: hoveredService === service.id ? 1.2 : 1,
            opacity: 1,
            x: mousePosition.x * 20,
            y: mousePosition.y * 20
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            delay: index * 0.1
          }}
          onHoverStart={() => setHoveredService(service.id)}
          onHoverEnd={() => setHoveredService(null)}
        >
          <motion.div
            className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl shadow-2xl cursor-pointer`}
            whileHover={{ 
              scale: 1.3,
              boxShadow: `0 0 30px ${service.glowColor}`,
              rotate: 360
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: hoveredService === service.id ? 360 : 0,
              boxShadow: hoveredService === service.id 
                ? `0 0 40px ${service.glowColor}` 
                : '0 10px 20px rgba(0,0,0,0.1)'
            }}
            transition={{ duration: 0.5 }}
          >
            {service.icon}
          </motion.div>
          
          {/* Service title */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredService === service.id ? 1 : 0,
              y: hoveredService === service.id ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.div>
        </motion.div>
      ))}

      {/* Interactive connection lines */}
      {services.map((service, index) => (
        <motion.div
          key={`line-${service.id}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: hoveredService === service.id ? 1 : 0.3,
            opacity: hoveredService === service.id ? 1 : 0.5
          }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-full h-full">
            <motion.line
              x1={`${20 + (index % 3) * 30}%`}
              y1={`${20 + Math.floor(index / 3) * 30}%`}
              x2="50%"
              y2="50%"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: hoveredService === service.id ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Gradient definitions */}
      <svg className="absolute inset-0 pointer-events-none">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveServiceElements;
