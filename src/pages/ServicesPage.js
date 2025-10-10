import React, { useState, lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

// Lazy load efectos Three.js para reducir bundle inicial
const ServicesParticles = lazy(() => import('../components/ServicesParticles'));
const AdvancedServicesEffects = lazy(() => import('../components/AdvancedServicesEffects'));
const AdvancedServicesVisualEffects = lazy(() => import('../components/AdvancedServicesVisualEffects'));
const InteractiveServiceElements = lazy(() => import('../components/InteractiveServiceElements'));
const UniversalEffects = lazy(() => import('../components/UniversalEffects'));

const serviceDetails = [
  {
    title: "ERP Moderno y Personalizado",
    details: "Sistemas ERP personalizados y modernos que integran todos los procesos de tu empresa para una gestión eficiente y automatizada.",
    features: [
      "📊 Gestión de inventario inteligente con control automático",
      "💼 Módulo de ventas y CRM integrado",
      "💰 Contabilidad automatizada y reportes financieros",
      "👥 Recursos humanos con gestión de personal",
      "📈 Analytics avanzados y dashboards ejecutivos",
      "🔗 Integración con sistemas existentes"
    ],
    benefits: "Aumenta la eficiencia operativa en un 40% y reduce costos administrativos en un 30%",
    duration: "3-6 meses"
  },
  {
    title: "Estandarización de Procesos",
    details: "Optimizamos y estandarizamos los procesos de tu empresa mediante análisis detallado y mejores prácticas tecnológicas.",
    features: [
      "🔍 Análisis completo de procesos actuales",
      "📋 Diseño de flujos optimizados",
      "📚 Documentación detallada de procedimientos",
      "✅ Implementación de mejores prácticas",
      "🎓 Capacitación especializada del personal",
      "📊 Monitoreo y mejora continua"
    ],
    benefits: "Mejora la productividad en un 50% y reduce errores en un 60%",
    duration: "2-4 meses"
  },
  {
    title: "Desarrollo Web Personalizado",
    details: "Creamos páginas web, tiendas virtuales y aplicaciones web personalizadas con las últimas tecnologías.",
    features: [
      "🌐 Páginas web responsivas y modernas",
      "🛒 Tiendas virtuales e-commerce completas",
      "💻 Aplicaciones web personalizadas",
      "🔌 Integración con APIs y servicios externos",
      "🚀 Optimización SEO y rendimiento",
      "🛠️ Mantenimiento y soporte técnico"
    ],
    benefits: "Aumenta las conversiones en un 35% y mejora la experiencia del usuario",
    duration: "1-3 meses"
  },
  {
    title: "Automatización de Procesos",
    details: "Automatizamos tareas repetitivas y procesos complejos para aumentar la eficiencia y reducir costos.",
    features: [
      "🤖 Automatización de tareas repetitivas",
      "⚡ Workflows inteligentes y personalizados",
      "🔗 Integración completa de sistemas",
      "📱 Notificaciones automáticas",
      "📊 Procesamiento inteligente de datos",
      "❌ Reducción de errores humanos"
    ],
    benefits: "Reduce el tiempo de procesos en un 70% y elimina errores manuales",
    duration: "2-5 meses"
  },
  {
    title: "Bases de Datos Inteligentes",
    details: "Diseñamos y optimizamos bases de datos robustas que garantizan integridad, seguridad y rendimiento.",
    features: [
      "🗄️ Diseño de base de datos optimizado",
      "⚡ Optimización de consultas y rendimiento",
      "💾 Backup y recuperación automática",
      "🔒 Seguridad avanzada de datos",
      "🔄 Migración segura de datos",
      "📈 Monitoreo continuo de rendimiento"
    ],
    benefits: "Mejora el rendimiento en un 80% y garantiza la seguridad de datos",
    duration: "1-4 meses"
  },
  {
    title: "Consultoría Tecnológica",
    details: "Asesoramiento especializado en transformación digital y estrategias de implementación tecnológica.",
    features: [
      "🔍 Auditoría tecnológica completa",
      "📋 Estrategia de transformación digital",
      "🛠️ Selección de tecnologías adecuadas",
      "📅 Plan de implementación detallado",
      "🎓 Capacitación técnica especializada",
      "📊 Seguimiento y optimización continua"
    ],
    benefits: "Acelera la transformación digital y maximiza el ROI tecnológico",
    duration: "1-2 meses"
  }
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "ERP Moderno y Personalizado",
      description: "Sistemas ERP personalizados y modernos que integran todos los procesos de tu empresa.",
      icon: "📊"
    },
    {
      title: "Estandarización de Procesos",
      description: "Optimizamos y estandarizamos los procesos de tu empresa mediante análisis detallado.",
      icon: "⚙️"
    },
    {
      title: "Desarrollo Web Personalizado",
      description: "Creamos páginas web, tiendas virtuales y aplicaciones web personalizadas.",
      icon: "💻"
    },
    {
      title: "Automatización de Procesos",
      description: "Automatizamos tareas repetitivas y procesos complejos para aumentar la eficiencia.",
      icon: "🤖"
    },
    {
      title: "Bases de Datos Inteligentes",
      description: "Diseñamos y optimizamos bases de datos robustas que garantizan integridad y seguridad.",
      icon: "🗄️"
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoramiento especializado en transformación digital y estrategias de implementación.",
      icon: "🔍"
    }
  ];

  const handleOpenModal = (index) => {
    setSelectedService(serviceDetails[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <SEO 
        title="Servicios de Desarrollo de Software"
        description="Ofrecemos soluciones tecnológicas integrales: desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría digital. Transforma tu negocio con nuestras soluciones a medida."
        keywords="desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad, consultoría digital, software a medida, transformación digital"
        ogUrl="https://software-ingeniun.netlify.app/servicios"
      />
      <div className="min-h-screen bg-white pt-4 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-darkBlue-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-accent-500 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        </div>

      {/* Efectos Three.js - Lazy loading para mejor rendimiento */}
      <Suspense fallback={null}>
        <UniversalEffects intensity={1.2} particleCount={250} colorScheme="corporate" />
        <ServicesParticles />
        <AdvancedServicesEffects />
        <AdvancedServicesVisualEffects />
        <InteractiveServiceElements />
      </Suspense>
        
        {/* Glass Morphism Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
          <div className="text-center mb-4 sm:mb-6 px-4 group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
            <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-1 sm:px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl pt-24 sm:pt-28 scroll-mt-32">
                Nuestros Servicios
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 max-w-4xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
                Soluciones modernas en desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría tecnológica
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 px-4">
            {services.map((service, index) => {
              // Mapear índices a IDs de ancla
              const anchorIds = ['erp', 'estandarizacion', 'desarrollo', 'automatizacion', 'bases-datos', 'consultoria'];
              const anchorId = anchorIds[index] || '';
              
              const stepBadges = ['Paso 1', 'Paso 2', 'Paso 3', 'Tecnología', 'Automatización', 'Soporte'];
              
              return (
              <motion.div 
                key={index}
                id={anchorId}
                className="bg-white backdrop-blur-xl rounded-lg shadow-corporate-xl p-6 sm:p-8 md:p-12 transform active:scale-[0.98] transition-all duration-200 hover:shadow-corporate-2xl scroll-mt-24 border border-primary-200 relative overflow-hidden touch-manipulation"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    {/* Contenido Principal */}
                    <div className="flex-1 lg:max-w-2xl">
                      {/* Badge del paso */}
                      <div className="inline-block bg-primary-500 text-white text-sm font-bold px-3 sm:px-4 py-2 rounded-full shadow-lg mb-4 sm:mb-6">
                        {stepBadges[index]}
                      </div>
                      
                      {/* Icono grande */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
                        <div className="text-3xl sm:text-4xl text-primary-600">
                  {service.icon}
                </div>
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-darkBlue-900 mb-4 sm:mb-6 font-display leading-tight">
                  {service.title}
                </h3>
                      
                      {/* Descripción */}
                      <p className="text-base sm:text-lg text-secondary-600 mb-6 sm:mb-8 font-body leading-relaxed">
                  {service.description}
                </p>
                      
                      {/* Botones de acción */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 active:shadow-lg text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform active:scale-95 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation shadow-lg"
                          style={{ minHeight: '48px' }}
                          onClick={() => {
                            const phone = '51947726382';
                            const message = `¡Hola! 👋 Me interesa el servicio "${service.title}" de INGENIUM SOFT

📋 Servicio: ${service.title}

Me gustaría obtener más información sobre:
${service.features ? service.features.slice(0, 3).join('\n') : ''}

¿Podrían contactarme para brindarme detalles y una cotización?

¡Gracias! 😊`;
                            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          💬 Consultar por WhatsApp
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </button>
                        <button
                          className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 active:shadow-lg text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform active:scale-95 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation"
                          style={{ minHeight: '48px' }}
                          onClick={() => handleOpenModal(index)}
                        >
                          Ver Detalles
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                </div>
                    
                    {/* Imagen o elemento visual */}
                    <div className="flex-1 lg:max-w-lg">
                      <div className="relative group">
                        <img
                                 src={index === 0 ? '/images/ERP/erp-modulo-compras.jpeg' :
                                       index === 1 ? '/images/estandarizacion/estandarizacion-1.jpeg' :
                                       index === 2 ? '/images/desarrollo-web.jpeg' :
                                       index === 3 ? '/images/automatizacion/automatizacion-2.jpeg' :
                                       index === 4 ? '/images/base-datos-inteligente.jpg' :
                                       '/images/consultoria-tecnologica/digital-consulting.jpeg'}
                          alt={service.title}
                          className="w-full h-64 lg:h-80 object-cover object-center rounded-corporate-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 rounded-corporate-lg"></div>
                        {/* Badge de número de paso */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                </div>
              </div>
              </motion.div>
              )
            })}
          </div>

          {/* Modal Mejorado */}
          {modalOpen && selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
              <motion.div 
                className="bg-white backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full relative border border-primary-200 max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Botón de cerrar */}
                <button
                  className="absolute top-4 right-4 text-secondary-500 hover:text-darkBlue-900 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleCloseModal}
                  aria-label="Cerrar"
                >
                  &times;
                </button>

                {/* Header del modal */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-darkBlue-900 pr-8">
                    {selectedService.title}
                  </h3>
                  <p className="text-secondary-600 text-lg leading-relaxed">
                    {selectedService.details}
                  </p>
                </div>

                {/* Características principales */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4 text-darkBlue-900 flex items-center">
                    <span className="mr-2">✨</span>
                    Características Principales
                  </h4>
                  <div className="grid gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                        <span className="text-lg flex-shrink-0">{feature.split(' ')[0]}</span>
                        <span className="text-secondary-700 text-sm sm:text-base">{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios y duración */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-accent-50 p-4 rounded-lg">
                    <h5 className="font-bold text-accent-700 mb-2 flex items-center">
                      <span className="mr-2">📈</span>
                      Beneficios
                    </h5>
                    <p className="text-accent-600 text-sm">{selectedService.benefits}</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h5 className="font-bold text-primary-700 mb-2 flex items-center">
                      <span className="mr-2">⏱️</span>
                      Duración
                    </h5>
                    <p className="text-primary-600 text-sm font-semibold">{selectedService.duration}</p>
              </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={() => {
                      const phone = '51947726382';
                      const message = `¡Hola! Me interesa el servicio "${selectedService.title}" de INGENIUM SOFT

🏢 Empresa: INGENIUM SOFT
📱 Contacto: [Mi número]
📧 Email: [Mi email]

Me gustaría obtener más información sobre este servicio específico y sus precios.

¿Podrían brindarme más detalles? ¡Gracias!`;
                      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    💬 Consultar por WhatsApp
                  </button>
                  <button
                    className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={handleCloseModal}
                  >
                    ✅ Entendido
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Call to Action Section */}
          <div className="mt-16 bg-white backdrop-blur-xl rounded-xl shadow-lg p-8 text-center border border-primary-200">
            <h3 className="text-2xl font-bold mb-4 text-darkBlue-900">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg mb-6 text-secondary-600">
              Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu empresa
            </p>
            <button
              className="bg-accent-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                const phone = '51947726382';
                const message = `¡Hola! Me interesa conocer más sobre los servicios de INGENIUM SOFT

🏢 Empresa: INGENIUM SOFT
📱 Contacto: [Mi número]
📧 Email: [Mi email]

Me gustaría obtener más información sobre sus servicios de desarrollo de software y soluciones tecnológicas.

¿Podrían brindarme más detalles sobre sus servicios y precios? ¡Gracias!`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage; 