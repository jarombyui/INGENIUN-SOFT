import React, { useState, useRef } from 'react';
import ScrollEffects from './ScrollEffects';
import AdvancedServicesEffects from './AdvancedServicesEffects';
import { motion, useInView } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

const ServiceCard = ({ title, description, icon, image, video, badge, badgeColor, onClick }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <AnimatedCard
      className="relative bg-white/10 backdrop-blur-xl rounded-corporate-lg shadow-corporate p-6 hover:shadow-corporate-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-white/20 group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter') onClick && onClick(); }}
    >
      {/* Badge superior */}
      {badge && (
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse`}>
          {badge}
        </div>
      )}
      
      {/* Espacio para imagen o video con efectos modernos */}
      <div className="relative mb-6 h-48 bg-gradient-to-br from-white/20 to-white/10 rounded-corporate-lg overflow-hidden border border-white/20 shadow-inner group-hover:shadow-corporate-lg transition-all duration-500">
        {/* Overlay con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>
        
        {image && !showVideo && (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${
              image.includes('automatizacion-1.jpeg') 
                ? 'object-top' 
                : 'object-center'
            }`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        )}
        {video && showVideo && (
          <video
            src={video}
            className="w-full h-full object-cover object-center"
            controls
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        )}
        
        {/* Placeholder mejorado cuando no hay imagen o video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm" style={{ display: image || video ? 'none' : 'flex' }}>
          <div className="w-20 h-20 text-white opacity-80 group-hover:text-accent-400 group-hover:scale-110 transition-all duration-300">{icon}</div>
        </div>
        
        {/* Botón para alternar entre imagen y video - mejorado */}
        {image && video && (
          <button
            className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg z-20"
            onClick={(e) => {
              e.stopPropagation();
              setShowVideo(!showVideo);
            }}
            aria-label={showVideo ? "Mostrar imagen" : "Mostrar video"}
          >
            {showVideo ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            )}
          </button>
        )}
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
      </div>
      
      {/* Icono principal mejorado */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-white group-hover:from-white/30 group-hover:to-white/20 group-hover:text-accent-400 group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm">{icon}</div>
      </div>
      
      {/* Contenido del texto */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-accent-400 transition-colors duration-300 leading-tight">{title}</h3>
        <p className="text-base text-white/90 font-body leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
      </div>
      
      {/* Indicador de interacción */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Borde animado */}
      <div className="absolute inset-0 rounded-corporate-lg border-2 border-transparent group-hover:border-primary-300/50 transition-all duration-300"></div>
    </AnimatedCard>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [result, setResult] = useState(null);
  
  // Ref para detectar cuando la sección es visible
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  // Función para manejar clicks en las tarjetas
  const handleCardClick = (index) => {
    // Redirigir a la página de servicios correspondiente
    if (index === 0) window.location.href = '/servicios#erp'; // Análisis de Negocio -> ERP
    if (index === 1) window.location.href = '/servicios#estandarizacion'; // Estandarización de Procesos
    if (index === 2) window.location.href = '/servicios#erp'; // Automatización con ERP -> ERP
    if (index === 3) window.location.href = '/servicios#automatizacion'; // Automatización de Procesos
    if (index === 4) window.location.href = '/servicios#consultoria'; // Consultoría Digital
  };

  const services = [
    {
      title: "Análisis de Negocio",
      description: "Entendemos profundamente tu empresa, procesos actuales y oportunidades de mejora para diseñar la solución perfecta que se adapte a tus necesidades.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      image: "/images/procesos/analisis-procesos-4.jpeg",
      badge: "Paso 1",
      badgeColor: "from-blue-500 to-blue-600"
    },
    {
      title: "Estandarización de Procesos",
      description: "Optimizamos y estandarizamos tus procesos mediante análisis detallado y mejores prácticas tecnológicas para máxima eficiencia operativa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: "/images/estandarizacion/estandarizacion-1.jpeg",
      badge: "Paso 2",
      badgeColor: "from-purple-500 to-purple-600"
    },
    {
      title: "Automatización con ERP",
      description: "Implementamos sistemas ERP personalizados que automatizan la gestión de todas las áreas de tu empresa, integrando procesos estandarizados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: "/images/ERP/erp-modulo-compras.jpeg",
      badge: "Paso 3",
      badgeColor: "from-green-500 to-green-600"
    },
    {
      title: "Automatización de Procesos",
      description: "Automatizamos tareas repetitivas y procesos complejos para maximizar eficiencia, reducir errores y liberar tiempo para actividades estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/automatizacion/automatizacion-1.jpeg"
    },
    {
      title: "Consultoría Digital",
      description: "Estrategias de transformación digital personalizadas. Auditorías tecnológicas, roadmaps de implementación y acompañamiento en la adopción de nuevas tecnologías.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: "/images/consultoria-tecnologica/digital-consulting.jpeg"
    }
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    const match = inputCode.match(/ISSGRE-049-(\d{3,})/);
    if (inputCode.includes('ISSGRE-049') && match) {
      const num = parseInt(match[1], 10);
      if (num > 40) {
        setResult({ valid: true, message: '¡Certificado válido!' });
        return;
      }
    }
    setResult({ valid: false, message: 'Certificado no válido o código incorrecto.' });
  };

  return (
    <div ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Glass Morphism Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Three.js Scroll Effects */}
      <ScrollEffects />
      
      {/* Advanced Services Effects */}
      <AdvancedServicesEffects />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl font-extrabold text-white font-display tracking-tight pt-24 scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-4 shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.8 }}
          ></motion.div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: index % 2 === 0 ? 80 : -80,  // Alternar dirección: arriba/abajo
                  scale: 0.8,
                  rotateX: index % 2 === 0 ? -15 : 15
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    mass: 0.8,
                    duration: 1,
                    delay: index * 0.2
                  }
                }
              }}
              whileHover={{
                y: -20,
                scale: 1.1,
                rotateY: 8,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  mass: 0.6
                }
              }}
              whileTap={{
                scale: 0.95,
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25
                }
              }}
              className="transform-gpu"
            >
              <motion.div
                initial={{ 
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                  borderColor: "rgba(255,255,255,0.1)"
                }}
                whileHover={{
                  boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
                  borderColor: "rgba(255,255,255,0.6)",
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                className="relative"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  video={service.video}
                  badge={service.badge}
                  badgeColor={service.badgeColor}
                  onClick={() => handleCardClick(index)}
                />
                
                {/* Efecto de brillo mejorado en hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-corporate-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "100%",
                      transition: {
                        duration: 1,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  
                  {/* Partículas flotantes mejoradas */}
                  <motion.div
                    className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0.4, 1.2, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0
                    }}
                  />
                  <motion.div
                    className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-8 w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    animate={{
                      y: [0, -18, 0],
                      opacity: [0, 1, 0],
                      scale: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Modal de verificación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative animate-fade-in border border-white/20">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold"
              onClick={() => {
                setShowModal(false);
                setInputCode('');
                setResult(null);
              }}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-['Montserrat']">Validar Certificado</h3>
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Ingrese el código de certificado"
                className="w-full border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm sm:text-base font-['Poppins'] bg-white/10 text-white placeholder-white/70"
                value={inputCode}
                onChange={e => setInputCode(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-2 px-4 rounded-md hover:from-accent-600 hover:to-accent-700 transition-all duration-300 font-semibold font-['Montserrat'] shadow-lg"
              >
                Verificar
              </button>
            </form>
            {result && (
              <div className={`mt-4 p-3 rounded-md text-center font-bold text-sm sm:text-base ${
                result.valid 
                  ? 'bg-green-100 text-green-700 border border-green-400' 
                  : 'bg-red-100 text-red-700 border border-red-400'
              } font-['Poppins']`}>
                {result.message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services; 