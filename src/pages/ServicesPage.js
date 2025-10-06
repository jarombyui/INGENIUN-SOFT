import React, { useState } from 'react';
import SEO from '../components/SEO';
import ServicesParticles from '../components/ServicesParticles';
import AdvancedServicesEffects from '../components/AdvancedServicesEffects';
import AdvancedServicesVisualEffects from '../components/AdvancedServicesVisualEffects';
import InteractiveServiceElements from '../components/InteractiveServiceElements';
import ScrollAnimation from '../components/ScrollAnimation';
import UniversalEffects from '../components/UniversalEffects';
import { motion } from 'framer-motion';

const serviceDetails = [
  {
    title: "ERP Moderno y Personalizado",
    details: "Sistemas ERP personalizados y modernos que integran todos los procesos de tu empresa para una gestión eficiente y automatizada. Incluye gestión de inventario inteligente, módulo de ventas y CRM, contabilidad automatizada, recursos humanos integrado, reportes y analytics avanzados, e integración con sistemas existentes.",
  },
  {
    title: "Estandarización de Procesos",
    details: "Optimizamos y estandarizamos los procesos de tu empresa mediante análisis detallado y mejores prácticas tecnológicas. Incluye análisis de procesos actuales, diseño de flujos optimizados, documentación de procedimientos, implementación de mejores prácticas, capacitación del personal y monitoreo y mejora continua.",
  },
  {
    title: "Desarrollo Web Personalizado",
    details: "Creamos páginas web, tiendas virtuales y aplicaciones web personalizadas con las últimas tecnologías. Incluye páginas web responsivas, tiendas virtuales e-commerce, aplicaciones web personalizadas, integración con APIs, optimización SEO y mantenimiento y soporte.",
  },
  {
    title: "Automatización de Procesos",
    details: "Automatizamos tareas repetitivas y procesos complejos para aumentar la eficiencia y reducir costos. Incluye automatización de tareas repetitivas, workflows inteligentes, integración de sistemas, notificaciones automáticas, procesamiento de datos y reducción de errores humanos.",
  },
  {
    title: "Bases de Datos Inteligentes",
    details: "Diseñamos y optimizamos bases de datos robustas que garantizan integridad, seguridad y rendimiento. Incluye diseño de base de datos, optimización de consultas, backup y recuperación, seguridad de datos, migración de datos y monitoreo de rendimiento.",
  },
  {
    title: "Consultoría Tecnológica",
    details: "Asesoramiento especializado en transformación digital y estrategias de implementación tecnológica. Incluye auditoría tecnológica, estrategia de transformación digital, selección de tecnologías, plan de implementación, capacitación técnica y seguimiento y optimización.",
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-rose-400 to-red-600 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        </div>

      {/* Universal Effects - Garantiza cobertura completa */}
      <UniversalEffects intensity={1.2} particleCount={250} colorScheme="corporate" />
      
      {/* Three.js Particles for Services */}
      <ServicesParticles />
      
      {/* Advanced Services Effects */}
      <AdvancedServicesEffects />
      
      {/* Advanced Visual Effects */}
      <AdvancedServicesVisualEffects />
      
      {/* Interactive Service Elements */}
      <InteractiveServiceElements />
        
        {/* Glass Morphism Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-20 sm:pt-24 scroll-mt-32">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-['Poppins'] px-4">
              Soluciones modernas en desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría tecnológica
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16 px-4">
            {services.map((service, index) => {
              // Mapear índices a IDs de ancla
              const anchorIds = ['erp', 'estandarizacion', 'desarrollo', 'automatizacion', 'bases-datos', 'consultoria'];
              const anchorId = anchorIds[index] || '';
              
              // Colores impresionantes para cada servicio
              const stepColors = [
                'from-cyan-500 to-blue-600', // ERP - Cyan a Azul
                'from-purple-500 to-pink-600', // Estandarización - Púrpura a Rosa
                'from-emerald-500 to-teal-600', // Desarrollo Web - Esmeralda a Turquesa
                'from-orange-500 to-red-600', // Automatización - Naranja a Rojo
                'from-yellow-500 to-orange-600', // Bases de Datos - Amarillo a Naranja
                'from-rose-500 to-pink-600' // Consultoría - Rosa a Rosa
              ];
              
              const stepBadges = ['Paso 1', 'Paso 2', 'Paso 3', 'Tecnología', 'Automatización', 'Soporte'];
              
              return (
              <motion.div 
                key={index}
                id={anchorId}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg shadow-corporate-xl p-6 sm:p-8 md:p-12 transform active:scale-[0.98] transition-all duration-200 hover:shadow-corporate-2xl scroll-mt-24 border border-white/20 relative overflow-hidden touch-manipulation"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    {/* Contenido Principal */}
                    <div className="flex-1 lg:max-w-2xl">
                      {/* Badge del paso */}
                      <div className={`inline-block bg-gradient-to-r ${stepColors[index]} text-white text-sm font-bold px-3 sm:px-4 py-2 rounded-full shadow-lg mb-4 sm:mb-6`}>
                        {stepBadges[index]}
                      </div>
                      
                      {/* Icono grande */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
                        <div className="text-3xl sm:text-4xl text-white">
                  {service.icon}
                </div>
                      </div>
                      
                      {/* Título */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-display leading-tight">
                  {service.title}
                </h3>
                      
                      {/* Descripción */}
                      <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 font-body leading-relaxed">
                  {service.description}
                </p>
                      
                      {/* Botón de acción */}
                  <button
                        className={`inline-flex items-center bg-gradient-to-r ${stepColors[index]} active:shadow-lg text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation`}
                        style={{ minHeight: '48px' }}
                    onClick={() => handleOpenModal(index)}
                  >
                        Conocer más detalles
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-corporate-lg"></div>
                        {/* Badge de número de paso */}
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${stepColors[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>
              )
            })}
          </div>

          {/* Modal */}
          {modalOpen && selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in border border-white/20">
                <button
                  className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold"
                  onClick={handleCloseModal}
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedService.title}</h3>
                <p className="text-white/90 text-lg">{selectedService.details}</p>
              </div>
            </div>
          )}

          {/* Call to Action Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg p-8 text-white text-center border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu empresa
            </p>
            <button
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold py-3 px-8 rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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