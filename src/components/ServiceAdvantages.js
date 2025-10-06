import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import AdvantagesVisualEffects from './AdvantagesVisualEffects';
import AdvantagesInteractiveEffects from './AdvantagesInteractiveEffects';

const ServiceAdvantages = () => {
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  // Efectos 3D de fondo
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Colores impresionantes para las ventajas
    const colors = {
      primary: new THREE.Color(0x00D4FF), // Cyan brillante
      secondary: new THREE.Color(0xFF6B6B), // Coral vibrante
      accent: new THREE.Color(0x4ECDC4), // Turquesa
      success: new THREE.Color(0x45B7D1), // Azul cielo
      warning: new THREE.Color(0xFFA726), // Naranja dorado
      danger: new THREE.Color(0xE91E63), // Rosa magenta
      purple: new THREE.Color(0x9C27B0), // Púrpura
      green: new THREE.Color(0x4CAF50), // Verde esmeralda
      gold: new THREE.Color(0xFFD700), // Dorado
      silver: new THREE.Color(0xC0C0C0) // Plateado
    };

    // Partículas flotantes de ventajas
    const particleCount = 800;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      particleColors[i * 3] = randomColor.r;
      particleColors[i * 3 + 1] = randomColor.g;
      particleColors[i * 3 + 2] = randomColor.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Formas geométricas flotantes
    const shapes = [];
    const shapeCount = 15;
    const geometries = [
      new THREE.OctahedronGeometry(2),
      new THREE.TetrahedronGeometry(2),
      new THREE.IcosahedronGeometry(2),
      new THREE.TorusGeometry(2, 0.5, 8, 16)
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.MeshPhongMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.7,
        emissive: randomColor.clone().multiplyScalar(0.3)
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 150
      );
      
      scene.add(shape);
      shapes.push(shape);
    }

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 0.8, 200);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    camera.position.z = 80;

    // Animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      particleSystem.rotation.x = time * 0.02;
      particleSystem.rotation.y = time * 0.01;
      
      shapes.forEach((shape, index) => {
        shape.rotation.x = time * 0.1 * (index % 3 + 1);
        shape.rotation.y = time * 0.05 * (index % 2 + 1);
        shape.position.y += Math.sin(time + index) * 0.1;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);

  // Interacción con mouse
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
      title: 'Eficiencia Operativa',
      description: 'Automatización completa de procesos que reduce tiempos y costos operativos hasta un 70%',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(255, 193, 7, 0.3)',
      metrics: '70% menos tiempo'
    },
    {
      id: 'escalabilidad',
      title: 'Escalabilidad Total',
      description: 'Soluciones que crecen con tu empresa, desde startups hasta corporaciones multinacionales',
      icon: '📈',
      color: 'from-green-400 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      metrics: '100% escalable'
    },
    {
      id: 'personalizacion',
      title: 'Personalización Completa',
      description: 'Cada solución está diseñada específicamente para las necesidades únicas de tu negocio',
      icon: '🎯',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'rgba(147, 51, 234, 0.3)',
      metrics: '100% personalizado'
    },
    {
      id: 'integracion',
      title: 'Integración Perfecta',
      description: 'Conectamos todos tus sistemas existentes en una plataforma unificada y coherente',
      icon: '🔗',
      color: 'from-blue-400 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      metrics: '100% integrado'
    },
    {
      id: 'seguridad',
      title: 'Seguridad Avanzada',
      description: 'Protección de nivel empresarial con encriptación de grado militar y monitoreo 24/7',
      icon: '🛡️',
      color: 'from-red-400 to-rose-500',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      metrics: '99.9% seguro'
    },
    {
      id: 'soporte',
      title: 'Soporte 24/7',
      description: 'Equipo técnico especializado disponible las 24 horas para resolver cualquier incidencia',
      icon: '🚀',
      color: 'from-teal-400 to-cyan-500',
      glowColor: 'rgba(20, 184, 166, 0.3)',
      metrics: '24/7 disponible'
    },
    {
      id: 'roi',
      title: 'ROI Garantizado',
      description: 'Retorno de inversión comprobado con ahorros medibles desde el primer mes de implementación',
      icon: '💰',
      color: 'from-amber-400 to-yellow-500',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      metrics: '300% ROI'
    },
    {
      id: 'innovacion',
      title: 'Innovación Continua',
      description: 'Actualizaciones constantes con las últimas tecnologías y mejores prácticas del mercado',
      icon: '💡',
      color: 'from-indigo-400 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.3)',
      metrics: 'Siempre actualizado'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Efectos 3D de fondo */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Efectos visuales específicos para ventajas */}
      <AdvantagesVisualEffects />
      
      {/* Efectos interactivos de ventajas */}
      <AdvantagesInteractiveEffects />
      
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-rose-400 to-red-600 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título principal */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 font-display tracking-tight drop-shadow-lg">
            Ventajas de Nuestros Servicios
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
            Descubre todas las ventajas que obtienes al trabajar con INGENIUM SOFT
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-6 shadow-lg"></div>
        </motion.div>

        {/* Grid de ventajas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              variants={itemVariants}
              className="relative group"
              onHoverStart={() => setHoveredAdvantage(advantage.id)}
              onHoverEnd={() => setHoveredAdvantage(null)}
            >
              <motion.div
                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-corporate-lg p-8 shadow-corporate-xl border border-white/20 cursor-pointer overflow-hidden`}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: `0 25px 50px -12px ${advantage.glowColor}`,
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
                animate={{
                  y: mousePosition.y * 10,
                  x: mousePosition.x * 5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Icono */}
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-corporate-lg flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                  {advantage.icon}
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-4 font-display">
                  {advantage.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-white/90 text-sm font-body leading-relaxed mb-4">
                  {advantage.description}
                </p>
                
                {/* Métricas */}
                <div className={`inline-block bg-gradient-to-r ${advantage.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {advantage.metrics}
                </div>
                
                {/* Efecto de borde animado */}
                <div className="absolute inset-0 rounded-corporate-lg border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Métricas finales */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: '8+', label: 'Ventajas Clave', color: 'from-cyan-400 to-blue-500' },
            { number: '24/7', label: 'Soporte Técnico', color: 'from-purple-400 to-pink-500' },
            { number: '99.9%', label: 'Satisfacción Garantizada', color: 'from-emerald-400 to-teal-500' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
            >
              <div className={`inline-block bg-gradient-to-r ${metric.color} text-white text-4xl font-bold px-6 py-3 rounded-corporate-lg shadow-lg mb-4`}>
                {metric.number}
              </div>
              <p className="text-white/90 text-lg font-semibold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceAdvantages;
