import React, { useState, useEffect } from 'react';

const ModernCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    {
      src: '/images/negocio_inteligente.jpg',
      title: 'ERP Moderno y Personalizado',
      description: 'Sistemas de gestión empresarial que integran todos los procesos de tu empresa'
    },
    {
      src: '/images/TECNICAS-VENTAS.jpg',
      title: 'Estandarización de Procesos',
      description: 'Optimizamos y estandarizamos tus procesos para máxima eficiencia operativa'
    },
    {
      src: '/images/MAS-CLIENTES.jpg',
      title: 'Desarrollo Web Avanzado',
      description: 'Aplicaciones web modernas y escalables con las últimas tecnologías'
    },
    {
      src: '/images/ABRIR-NEGOCIO.jpg',
      title: 'Automatización Inteligente',
      description: 'Automatizamos procesos complejos para reducir costos y aumentar productividad'
    },
    {
      src: '/images/DIGITAL-MARKETING.jpg',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento especializado en transformación digital y modernización empresarial'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  // Funciones para navegación manual
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
  };

  // Funciones para touch/swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 font-display tracking-tight mb-6">
            Nuestras Soluciones en Acción
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-body leading-relaxed">
            Descubre cómo transformamos empresas con tecnología de vanguardia y procesos optimizados
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-6 shadow-lg"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-corporate-lg overflow-hidden shadow-corporate-2xl border border-white/20 group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Images Container */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div key={index} className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}>
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Modern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center">
              <div className={`transform transition-all duration-1000 delay-300 ${
                currentImageIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl font-['Montserrat'] tracking-wide">
                  {images[currentImageIndex].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 drop-shadow-lg max-w-4xl font-['Poppins'] leading-relaxed">
                  {images[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modern Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`relative transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-12 h-3 bg-white rounded-full shadow-lg' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full hover:scale-125'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a la imagen ${index + 1}`}
                >
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Autoplay Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-6 left-6 bg-black/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              aria-label={isAutoPlay ? "Pausar autoplay" : "Activar autoplay"}
            >
              {isAutoPlay ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/servicios'}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-corporate transition-all duration-300 transform hover:scale-105 hover:shadow-corporate-lg font-display tracking-wide shadow-corporate focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Ver Todos Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCarousel;
