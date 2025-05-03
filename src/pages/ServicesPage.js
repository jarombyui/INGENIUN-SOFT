import React, { useState } from 'react';

const serviceDetails = [
  {
    title: "Desarrollo de Páginas Web",
    details: "Creamos sitios web modernos, responsivos y optimizados para tu negocio o emprendimiento. Incluye sitios corporativos, landing pages, tiendas online (e-commerce) y optimización SEO para mejorar tu presencia digital.",
  },
  {
    title: "Aplicaciones Web Personalizadas",
    details: "Desarrollamos aplicaciones web a medida para automatizar procesos, mejorar la gestión y ofrecer experiencias únicas a tus usuarios. Sistemas de gestión, portales de clientes, dashboards interactivos e integraciones con APIs externas.",
  },
  {
    title: "Bases de Datos y Backend",
    details: "Diseño, implementación y mantenimiento de bases de datos seguras y escalables. Modelado de datos, bases SQL y NoSQL, desarrollo de APIs REST y GraphQL, migración y optimización de datos.",
  },
  {
    title: "Ciberseguridad y Protección de Datos",
    details: "Protegemos tus sistemas y datos con auditorías de seguridad, implementación de firewalls, backups, recuperación ante desastres y capacitación en buenas prácticas de seguridad digital.",
  },
  {
    title: "Consultoría y Transformación Digital",
    details: "Te asesoramos en la adopción de nuevas tecnologías, automatización de procesos, migración a la nube y soporte técnico para impulsar la digitalización de tu empresa.",
  }
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Desarrollo de Páginas Web",
      description: "Sitios corporativos, landing pages, e-commerce y optimización SEO.",
      icon: "🌐"
    },
    {
      title: "Aplicaciones Web Personalizadas",
      description: "Sistemas de gestión, portales, dashboards e integraciones a medida.",
      icon: "🛠️"
    },
    {
      title: "Bases de Datos y Backend",
      description: "Modelado, implementación y mantenimiento de bases de datos seguras.",
      icon: "🗄️"
    },
    {
      title: "Ciberseguridad y Protección de Datos",
      description: "Auditoría, firewalls, backups y capacitación en seguridad digital.",
      icon: "🛡️"
    },
    {
      title: "Consultoría y Transformación Digital",
      description: "Diagnóstico, automatización, migración a la nube y soporte.",
      icon: "💡"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones modernas en desarrollo web, aplicaciones personalizadas, bases de datos, ciberseguridad y consultoría tecnológica
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
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
          ))}
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
              const phone = '51947726382'; // Reemplaza con el número de WhatsApp de contacto
              const message = 'Hola, estoy interesado en los servicios de INGENIUM SOFT.';
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 