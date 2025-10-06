import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import AdvancedHeroEffects from './AdvancedHeroEffects';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [result, setResult] = useState(null);

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

  const handleExploreServices = () => {
    navigate('/servicios');
  };

  const handleStartProject = () => {
    navigate('/servicios');
  };

  return (
    <div className="hero-section min-h-[600px] md:h-[800px] relative pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/negocio_inteligente.jpg" 
          alt="Transformación Digital" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-secondary-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Three.js Particle System */}
      <ParticleBackground />
      
      {/* Advanced Hero Effects */}
      <AdvancedHeroEffects />
      
      {/* Glass Morphism Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        {/* Glass morphism container */}
        <div className="backdrop-blur-sm bg-white/5 rounded-corporate-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 shadow-corporate-2xl max-w-5xl mx-auto">
          <div className="text-center">
            {/* Badge de tecnología */}
            <motion.div 
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-semibold text-white/90 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
              <span className="hidden sm:inline">• Análisis • Estandarización • Automatización</span>
              <span className="sm:hidden">Análisis • Estandarización • Automatización</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 font-['Montserrat'] tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
                Entendemos tu Negocio
              </span>
              <span className="text-accent-400 block mt-2">Lo Estandarizamos y Automatizamos</span>
            </motion.h1>
            
            <motion.div 
              className="w-24 sm:w-32 h-1 bg-gradient-to-r from-accent-400 via-white to-accent-600 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.8 }}
            ></motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto font-['Poppins'] leading-relaxed mb-4 sm:mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="text-accent-300">🔍 Análisis</span> → <span className="text-purple-300">⚙️ Estandarización</span> → <span className="text-green-300">🚀 Automatización</span>
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 font-['Poppins'] max-w-3xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Un enfoque metodológico comprobado que transforma tu empresa paso a paso con tecnología que se adapta a tus procesos
            </motion.p>
                  </div>
          
          {/* Botones con diseño moderno - Optimizado para móvil */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto mt-6 sm:mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <AnimatedButton
              as="button"
              onClick={handleExploreServices}
              variant="secondary"
              type="magnetic"
              size="large"
              className="group relative overflow-hidden py-4 sm:py-5 px-6 sm:px-10 rounded-lg font-display tracking-wide text-center w-full sm:min-w-[200px] touch-manipulation"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="font-semibold">Explorar Servicios</span>
                <svg className="w-5 h-5 ml-2 group-active:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-active:translate-x-full transition-transform duration-300"></div>
            </AnimatedButton>
            
            <AnimatedButton
              as="button"
              onClick={handleStartProject}
              variant="glass"
              type="glow"
              size="large"
              className="group relative overflow-hidden py-4 sm:py-5 px-6 sm:px-10 rounded-lg font-display tracking-wide text-center w-full sm:min-w-[200px] touch-manipulation"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-active:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-semibold">Iniciar Proyecto</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-active:translate-x-full transition-transform duration-300"></div>
            </AnimatedButton>
          </motion.div>
          
          {/* Indicadores de confianza */}
          <div className="flex justify-center items-center gap-8 mt-12 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>41+ Proyectos</span>
                </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>95% Satisfacción</span>
              </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10+ Años</span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal de verificación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => {
                setShowModal(false);
                setInputCode('');
                setResult(null);
              }}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary font-['Montserrat']">Validar Certificado</h3>
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Ingrese el código de certificado"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-black font-['Poppins']"
                value={inputCode}
                onChange={e => setInputCode(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 font-semibold font-['Montserrat']"
              >
                Verificar
              </button>
            </form>
            {result && (
              <div className={`mt-4 p-3 rounded-md text-center font-bold ${result.valid ? 'bg-green-100 text-green-700 border border-green-400' : 'bg-red-100 text-red-700 border border-red-400'} font-['Poppins']`}>
                {result.message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero; 