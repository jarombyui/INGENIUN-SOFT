import React, { useState } from 'react';

const ServiceCard = ({ title, description, icon, image, video, badge, badgeColor, onClick }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="relative bg-white/95 backdrop-blur-sm rounded-corporate-lg shadow-corporate p-6 hover:shadow-corporate-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-white/30 group"
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
      <div className="relative mb-6 h-48 bg-gradient-to-br from-primary-50 to-secondary-100 rounded-corporate-lg overflow-hidden border border-primary-200 shadow-inner group-hover:shadow-corporate-lg transition-all duration-500">
        {/* Overlay con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>
        
        {image && !showVideo && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
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
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100/80 to-accent-100/80 backdrop-blur-sm" style={{ display: image || video ? 'none' : 'flex' }}>
          <div className="w-20 h-20 text-primary-400 opacity-70 group-hover:text-accent-500 group-hover:scale-110 transition-all duration-300">{icon}</div>
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
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary-600 group-hover:from-primary-200 group-hover:to-primary-300 group-hover:text-primary-700 group-hover:scale-110 transition-all duration-300 shadow-lg">{icon}</div>
      </div>
      
      {/* Contenido del texto */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary-800 mb-3 font-display group-hover:text-primary-900 transition-colors duration-300 leading-tight">{title}</h3>
        <p className="text-base text-secondary-600 font-body leading-relaxed group-hover:text-secondary-700 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Indicador de interacción */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Borde animado */}
      <div className="absolute inset-0 rounded-corporate-lg border-2 border-transparent group-hover:border-primary-300/50 transition-all duration-300"></div>
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
      title: "ERP Moderno y Personalizado",
      description: "Sistemas ERP de última generación que integran IA y automatización. Gestión completa con módulos de inventario, ventas, contabilidad, recursos humanos y analytics avanzados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: "/images/ERP-1.jpg",
      video: "/videos/erp-demo.mp4",
      badge: "Más Popular",
      badgeColor: "from-accent-500 to-accent-600"
    },
    {
      title: "Estandarización de Procesos",
      description: "Metodologías ágiles y lean para optimizar procesos empresariales. Implementación de mejores prácticas con herramientas de análisis y monitoreo en tiempo real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      image: "/images/estandarizacion-procesos.jpg",
      video: "/videos/procesos-optimizacion.mp4"
    },
    {
      title: "Desarrollo Web Cloud",
      description: "Aplicaciones web progresivas (PWA) con arquitectura cloud-native. React, Node.js, microservicios y deployment automático. Escalabilidad garantizada.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: "/images/desarrollo-web.jpg",
      video: "/videos/desarrollo-web-demo.mp4",
      badge: "Tecnología 2025",
      badgeColor: "from-primary-500 to-primary-600"
    },
    {
      title: "Automatización IA",
      description: "Inteligencia artificial aplicada a procesos empresariales. Machine Learning, chatbots inteligentes, análisis predictivo y automatización cognitiva.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/automatizacion-procesos.jpg",
      video: "/videos/automatizacion-demo.mp4",
      badge: "IA Avanzada",
      badgeColor: "from-success-500 to-success-600"
    },
    {
      title: "Big Data & Analytics",
      description: "Arquitecturas de datos modernas con almacenamiento cloud, data lakes y herramientas de business intelligence. Insights en tiempo real para decisiones estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      image: "/images/base-datos.jpg",
      video: "/videos/base-datos-demo.mp4"
    },
    {
      title: "Consultoría Digital",
      description: "Estrategias de transformación digital personalizadas. Auditorías tecnológicas, roadmaps de implementación y acompañamiento en la adopción de nuevas tecnologías.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: "/images/consultoria-tecnologica.jpg",
      video: "/videos/consultoria-demo.mp4"
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
    <div className="py-12 sm:py-16 bg-gradient-to-br from-light via-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12 gap-4">
          <h2 className="text-5xl font-extrabold text-primary-800 font-display tracking-tight pt-24 scroll-mt-32">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-4 shadow-lg"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              video={service.video}
              badge={service.badge}
              badgeColor={service.badgeColor}
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