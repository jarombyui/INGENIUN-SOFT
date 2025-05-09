import React, { useState } from 'react';

const ServiceCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter') onClick && onClick(); }}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-accent">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 text-center font-['Montserrat']">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 text-center font-['Poppins'] leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [result, setResult] = useState(null);

  // Redirecciones a cursos afines
  const handleCardClick = (index) => {
    if (index === 0) window.location.href = '/cursos#embudo-ventas-web';
    if (index === 1) window.location.href = '/cursos#creacion-de-negocios';
    if (index === 2) window.location.href = '/cursos#marketing-digital';
  };

  const services = [
    {
      title: "Transforma tu Negocio Online",
      description: "Desarrollamos páginas web y tiendas virtuales que convierten visitantes en clientes. ¡Haz crecer tu marca en internet!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm4 4h8m-8 4h8m-8 4h8" />
        </svg>
      ),
    },
    {
      title: "Automatiza y Vende Más",
      description: "Creamos sistemas y aplicaciones web a medida para automatizar procesos y aumentar tus ventas. ¡Solicita una demo gratis!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m0 0l-4 4" />
        </svg>
      ),
    },
    {
      title: "Impulsa tu Marketing Digital",
      description: "Estrategias de marketing, embudos de ventas y campañas digitales para captar más clientes y crecer tu negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
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
    <div className="py-12 sm:py-16 bg-[#E8F1F8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12 gap-4">
          <h2 className="text-5xl font-extrabold text-primary font-['Montserrat'] tracking-tight pt-24 scroll-mt-32">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      {/* Modal de verificación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative animate-fade-in">
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
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary font-['Montserrat']">Validar Certificado</h3>
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Ingrese el código de certificado"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base font-['Poppins']"
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