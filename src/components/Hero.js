import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="hero-section h-[600px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="mb-8 flex flex-col items-center justify-center">
          <img
            src="/images/Ingeniumsoft_ultimo.png"
            alt="Ingenium Soft Logo"
            className="h-40 w-auto max-w-sm object-contain rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-300"
          />
          <img
            src="/images/negocio_inteligente.jpg"
            alt="Negocio Inteligente"
            className="h-32 w-32 object-cover rounded-full shadow-xl animate-spin-slow border-4 border-accent mt-4"
            style={{ animation: 'spin 10s linear infinite' }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Impulsa tu negocio con soluciones de software a medida
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Desarrollo de páginas web, bases de datos y aplicaciones web personalizadas
        </p>
        <p className="text-lg md:text-xl mb-8">
          Ingenium Soft: Innovación, calidad y tecnología para tu empresa
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            to="/servicios"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Servicios
          </Link>
          <Link
            to="/contacto"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            Solicita tu proyecto
          </Link>
        </div>
      </div>
      {/* Modal de verificación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Validar Certificado</h3>
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Ingrese el código de certificado"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                value={inputCode}
                onChange={e => setInputCode(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 font-semibold"
              >
                Verificar
              </button>
            </form>
            {result && (
              <div className={`mt-4 p-3 rounded-md text-center font-bold ${result.valid ? 'bg-green-100 text-green-700 border border-green-400' : 'bg-red-100 text-red-700 border border-red-400'}`}>
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