import React, { useState } from 'react';
import SEO from '../components/SEO';

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
    title: "Desarrollo Web y Aplicaciones",
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
      title: "Desarrollo Web y Aplicaciones",
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-primary mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-2xl text-dark/80 max-w-3xl mx-auto font-['Poppins']">
              Soluciones modernas en desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría tecnológica
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              // Mapear índices a IDs de ancla
              const anchorIds = ['erp', 'estandarizacion', 'desarrollo', 'automatizacion', 'bases-datos', 'consultoria'];
              const anchorId = anchorIds[index] || '';
              
              return (
                <div 
                  key={index}
                  id={anchorId}
                  className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl scroll-mt-24"
                >
                <div className="text-4xl mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
                <div className="mt-6 text-center">
                  <button
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-300"
                    onClick={() => handleOpenModal(index)}
                  >
                    Saber más
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              )
            })}
          </div>

          {/* Modal */}
          {modalOpen && selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                  onClick={handleCloseModal}
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 text-primary">{selectedService.title}</h3>
                <p className="text-gray-700 text-lg">{selectedService.details}</p>
              </div>
            </div>
          )}

          {/* Call to Action Section */}
          <div className="mt-16 bg-primary rounded-xl shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg mb-6">
              Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu empresa
            </p>
            <button
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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