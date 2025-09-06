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
    <div className="hero-section min-h-[600px] md:h-[800px] relative pt-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-secondary-900/90"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4 md:mb-6 font-['Montserrat'] tracking-tight pt-8">
            Transformación Digital Integral para tu Empresa
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-['Poppins'] leading-relaxed mb-4">
            ERP personalizado, estandarización de procesos, desarrollo web y automatización inteligente
          </p>
          <p className="text-xl text-white/80 mb-8 font-['Poppins']">
            Ingenium Soft: Soluciones tecnológicas que impulsan el crecimiento empresarial
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto mt-4">
          <a 
            href="/servicios"
            className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-8 rounded-corporate transition-all duration-300 transform hover:scale-105 hover:shadow-corporate-lg font-display tracking-wide text-center shadow-corporate focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
          >
            Ver Servicios
          </a>
          <a
            href="/contacto"
            className="flex-1 bg-white/95 hover:bg-white text-primary-700 font-bold py-4 px-8 rounded-corporate transition-all duration-300 transform hover:scale-105 hover:shadow-corporate-lg text-center font-display tracking-wide shadow-corporate border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          >
            Solicita tu proyecto
          </a>
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