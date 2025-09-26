import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AdvantagesInteractiveEffects = () => {
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
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

  const advantages = [
    {
      id: 'eficiencia',
      title: 'Eficiencia',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(255, 193, 7, 0.4)',
      position: { x: 20, y: 20 }
    },
    {
      id: 'escalabilidad',
      title: 'Escalabilidad',
      icon: '📈',
      color: 'from-green-400 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      position: { x: 80, y: 20 }
    },
    {
      id: 'personalizacion',
      title: 'Personalización',
      icon: '🎯',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'rgba(147, 51, 234, 0.4)',
      position: { x: 20, y: 50 }
    },
    {
      id: 'integracion',
      title: 'Integración',
      icon: '🔗',
      color: 'from-blue-400 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      position: { x: 80, y: 50 }
    },
    {
      id: 'seguridad',
      title: 'Seguridad',
      icon: '🛡️',
      color: 'from-red-400 to-rose-500',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      position: { x: 20, y: 80 }
    },
    {
      id: 'soporte',
      title: 'Soporte',
      icon: '🚀',
      color: 'from-teal-400 to-cyan-500',
      glowColor: 'rgba(20, 184, 166, 0.4)',
      position: { x: 80, y: 80 }
    },
    {
      id: 'roi',
      title: 'ROI',
      icon: '💰',
      color: 'from-amber-400 to-yellow-500',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      position: { x: 50, y: 35 }
    },
    {
      id: 'innovacion',
      title: 'Innovación',
      icon: '💡',
      color: 'from-indigo-400 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.4)',
      position: { x: 50, y: 65 }
    }
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Orbes de ventajas flotantes */}
      {advantages.map((advantage, index) => (
        <motion.div
          key={advantage.id}
          className="absolute"
          style={{
            left: `${advantage.position.x}%`,
            top: `${advantage.position.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: hoveredAdvantage === advantage.id ? 1.3 : 1,
            opacity: 1,
            x: mousePosition.x * 15,
            y: mousePosition.y * 15
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            delay: index * 0.1
          }}
          onHoverStart={() => setHoveredAdvantage(advantage.id)}
          onHoverEnd={() => setHoveredAdvantage(null)}
        >
          <motion.div
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${advantage.color} flex items-center justify-center text-2xl shadow-2xl cursor-pointer`}
            whileHover={{ 
              scale: 1.4,
              boxShadow: `0 0 30px ${advantage.glowColor}`,
              rotate: 360
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: hoveredAdvantage === advantage.id ? 360 : 0,
              boxShadow: hoveredAdvantage === advantage.id 
                ? `0 0 40px ${advantage.glowColor}` 
                : '0 10px 20px rgba(0,0,0,0.1)'
            }}
            transition={{ duration: 0.5 }}
          >
            {advantage.icon}
          </motion.div>
          
          {/* Título de la ventaja */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredAdvantage === advantage.id ? 1 : 0,
              y: hoveredAdvantage === advantage.id ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            {advantage.title}
          </motion.div>
        </motion.div>
      ))}

      {/* Líneas de conexión animadas */}
      {advantages.map((advantage, index) => (
        <motion.div
          key={`line-${advantage.id}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: hoveredAdvantage === advantage.id ? 1 : 0.3,
            opacity: hoveredAdvantage === advantage.id ? 1 : 0.5
          }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-full h-full">
            <motion.line
              x1={`${advantage.position.x}%`}
              y1={`${advantage.position.y}%`}
              x2="50%"
              y2="50%"
              stroke="url(#advantageGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: hoveredAdvantage === advantage.id ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Definiciones de gradientes */}
      <svg className="absolute inset-0 pointer-events-none">
        <defs>
          <linearGradient id="advantageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#4CAF50" />
            <stop offset="50%" stopColor="#9C27B0" />
            <stop offset="75%" stopColor="#2196F3" />
            <stop offset="100%" stopColor="#F44336" />
          </linearGradient>
        </defs>
      </svg>

      {/* Partículas flotantes de ventajas */}
      {[...Array(30)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Efectos de ondas */}
      {hoveredAdvantage && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div 
            className="absolute w-32 h-32 border-2 border-white/30 rounded-full"
            style={{
              left: `${advantages.find(a => a.id === hoveredAdvantage)?.position.x || 50}%`,
              top: `${advantages.find(a => a.id === hoveredAdvantage)?.position.y || 50}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default AdvantagesInteractiveEffects;
