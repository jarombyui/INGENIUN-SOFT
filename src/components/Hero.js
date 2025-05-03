import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [result, setResult] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/images/negocio_inteligente.jpg',
      title: 'Transforma tu negocio con tecnología inteligente',
      description: 'Soluciones digitales que impulsan el crecimiento empresarial'
    },
    {
      src: '/images/MAS-CLIENTES.jpg',
      title: 'Conecta con más clientes',
      description: 'Amplía tu alcance y aumenta tus ventas con nuestra tecnología'
    },
    {
      src: '/images/ABRIR-NEGOCIO.jpg',
      title: 'Tu negocio, nuestra prioridad',
      description: 'Desarrollamos soluciones a medida para tu emprendimiento'
    },
    {
      src: '/images/DIGITAL-MARKETING.jpg',
      title: 'Marketing digital efectivo',
      description: 'Estrategias digitales que generan resultados reales'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="hero-section h-[800px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="mb-8 flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}>
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center',
                      filter: 'brightness(0.7)',
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg font-['Montserrat'] tracking-wide">
                      {image.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-2xl font-['Poppins'] leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Montserrat'] tracking-wide">
          Impulsa tu negocio con soluciones de software a medida
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl font-['Poppins'] leading-relaxed">
          Desarrollo de páginas web, bases de datos y aplicaciones web personalizadas
        </p>
        <p className="text-lg md:text-xl mb-8 font-['Poppins']">
          Ingenium Soft: Innovación, calidad y tecnología para tu empresa
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            to="/servicios"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Montserrat'] tracking-wide"
          >
            Ver Servicios
          </Link>
          <Link
            to="/contacto"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center font-['Montserrat'] tracking-wide"
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
            <h3 className="text-2xl font-bold mb-4 text-primary font-['Montserrat']">Validar Certificado</h3>
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