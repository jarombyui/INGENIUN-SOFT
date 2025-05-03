import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Consultoría en Seguridad',
      description: 'Asesoramiento especializado en seguridad integral para empresas y organizaciones.',
      icon: '🔒',
      features: [
        'Análisis de Riesgos',
        'Planes de Seguridad',
        'Auditorías de Seguridad',
        'Capacitación del Personal'
      ]
    },
    {
      id: 2,
      title: 'Vigilancia y Protección',
      description: 'Servicios de seguridad física y protección de instalaciones.',
      icon: '👮',
      features: [
        'Vigilancia 24/7',
        'Control de Accesos',
        'Rondas de Seguridad',
        'Monitoreo CCTV'
      ]
    },
    {
      id: 3,
      title: 'Ciberseguridad',
      description: 'Protección de sistemas informáticos y datos digitales.',
      icon: '💻',
      features: [
        'Análisis de Vulnerabilidades',
        'Protección de Datos',
        'Seguridad de Redes',
        'Respuesta a Incidentes'
      ]
    },
    {
      id: 4,
      title: 'Capacitación',
      description: 'Programas de formación en seguridad para empresas y profesionales.',
      icon: '📚',
      features: [
        'Cursos Especializados',
        'Simulacros de Emergencia',
        'Talleres Prácticos',
        'Certificaciones'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones integrales en seguridad para tu empresa u organización
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Servicios Incluidos:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300">
                Solicitar Cotización
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 