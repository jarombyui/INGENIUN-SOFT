import React, { useState } from 'react';

const Hero = () => {
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
      
      {/* Glass Morphism Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        {/* Glass morphism container */}
        <div className="backdrop-blur-sm bg-white/5 rounded-corporate-xl p-8 md:p-12 border border-white/10 shadow-corporate-2xl max-w-5xl mx-auto">
          <div className="text-center">
            {/* Badge de tecnología */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white/90 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
              Tecnología de Vanguardia 2025
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-['Montserrat'] tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Transformación Digital
              </span>
              <br />
              <span className="text-accent-400">de Vanguardia</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-accent-400 via-white to-accent-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto font-['Poppins'] leading-relaxed mb-6 font-light">
              ERP de última generación • Automatización IA • Desarrollo Cloud • Procesos Inteligentes
            </p>
            
            <p className="text-lg md:text-xl text-white/85 mb-10 font-['Poppins'] max-w-3xl mx-auto">
              Ingenium Soft: Donde la innovación tecnológica impulsa el futuro de tu empresa
            </p>
          </div>
          
          {/* Botones con diseño moderno */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-2xl mx-auto mt-8">
            <a 
              href="/servicios"
              className="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-5 px-10 rounded-corporate transition-all duration-500 transform hover:scale-105 hover:shadow-corporate-xl font-display tracking-wide text-center shadow-corporate-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span>Explorar Servicios</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            
            <a
              href="/contacto"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-corporate transition-all duration-500 transform hover:scale-105 hover:shadow-corporate-xl text-center font-display tracking-wide shadow-corporate-lg border border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Iniciar Proyecto</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
          
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