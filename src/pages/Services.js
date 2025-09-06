import React from 'react';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'ERP Moderno y Personalizado',
      description: 'Sistemas ERP personalizados y modernos que integran todos los procesos de tu empresa para una gestión eficiente y automatizada.',
      icon: '📊',
      image: '/images/negocio_inteligente.jpg',
      video: '/videos/erp-demo.mp4',
      features: [
        'Gestión de Inventario Inteligente',
        'Módulo de Ventas y CRM',
        'Contabilidad Automatizada',
        'Recursos Humanos Integrado',
        'Reportes y Analytics Avanzados',
        'Integración con Sistemas Existentes'
      ]
    },
    {
      id: 2,
      title: 'Estandarización de Procesos',
      description: 'Optimizamos y estandarizamos los procesos de tu empresa mediante análisis detallado y mejores prácticas tecnológicas.',
      icon: '⚙️',
      image: '/images/TECNICAS-VENTAS.jpg',
      video: '/videos/procesos-optimizacion.mp4',
      features: [
        'Análisis de Procesos Actuales',
        'Diseño de Flujos Optimizados',
        'Documentación de Procedimientos',
        'Implementación de Mejores Prácticas',
        'Capacitación del Personal',
        'Monitoreo y Mejora Continua'
      ]
    },
    {
      id: 3,
      title: 'Desarrollo Web y Aplicaciones',
      description: 'Creamos páginas web, tiendas virtuales y aplicaciones web personalizadas con las últimas tecnologías.',
      icon: '💻',
      image: '/images/MAS-CLIENTES.jpg',
      video: '/videos/desarrollo-web-demo.mp4',
      features: [
        'Páginas Web Responsivas',
        'Tiendas Virtuales E-commerce',
        'Aplicaciones Web Personalizadas',
        'Integración con APIs',
        'Optimización SEO',
        'Mantenimiento y Soporte'
      ]
    },
    {
      id: 4,
      title: 'Automatización de Procesos',
      description: 'Automatizamos tareas repetitivas y procesos complejos para aumentar la eficiencia y reducir costos.',
      icon: '🤖',
      image: '/images/ABRIR-NEGOCIO.jpg',
      video: '/videos/automatizacion-demo.mp4',
      features: [
        'Automatización de Tareas Repetitivas',
        'Workflows Inteligentes',
        'Integración de Sistemas',
        'Notificaciones Automáticas',
        'Procesamiento de Datos',
        'Reducción de Errores Humanos'
      ]
    },
    {
      id: 5,
      title: 'Bases de Datos Inteligentes',
      description: 'Diseñamos y optimizamos bases de datos robustas que garantizan integridad, seguridad y rendimiento.',
      icon: '🗄️',
      image: '/images/DIGITAL-MARKETING.jpg',
      video: '/videos/base-datos-demo.mp4',
      features: [
        'Diseño de Base de Datos',
        'Optimización de Consultas',
        'Backup y Recuperación',
        'Seguridad de Datos',
        'Migración de Datos',
        'Monitoreo de Rendimiento'
      ]
    },
    {
      id: 6,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento especializado en transformación digital y estrategias de implementación tecnológica.',
      icon: '🔍',
      image: '/images/negocio_inteligente.jpg',
      video: '/videos/consultoria-demo.mp4',
      features: [
        'Auditoría Tecnológica',
        'Estrategia de Transformación Digital',
        'Selección de Tecnologías',
        'Plan de Implementación',
        'Capacitación Técnica',
        'Seguimiento y Optimización'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary-800 sm:text-4xl font-display">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="mt-4 text-lg text-secondary-600 font-body">
            Transformamos tu empresa con tecnología de vanguardia y procesos optimizados
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} id={service.id === 1 ? 'erp' : service.id === 2 ? 'estandarizacion' : service.id === 3 ? 'desarrollo' : service.id === 4 ? 'automatizacion' : service.id === 5 ? 'bases-datos' : 'consultoria'} className="bg-white/95 backdrop-blur-sm rounded-corporate shadow-corporate p-6 transform hover:scale-105 hover:shadow-corporate-xl transition-all duration-300 overflow-hidden border border-white/20 group">
              {/* Espacio para imagen o video */}
              <div className="relative mb-6 h-48 bg-gradient-to-br from-primary-50 to-secondary-100 rounded-corporate overflow-hidden border border-primary-100">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                {service.video && (
                  <video
                    src={service.video}
                    className="w-full h-full object-cover"
                    controls
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                {/* Placeholder cuando no hay imagen o video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100/50 to-accent-100/50" style={{ display: service.image || service.video ? 'none' : 'flex' }}>
                  <span className="text-6xl opacity-60 text-primary-400 group-hover:text-accent-500 transition-colors duration-300">{service.icon}</span>
                </div>
                {/* Botón para alternar entre imagen y video */}
                {service.image && service.video && (
                  <button
                    className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = e.target.parentElement.querySelector('video');
                      const img = e.target.parentElement.querySelector('img');
                      if (video && img) {
                        if (video.style.display === 'none') {
                          video.style.display = 'block';
                          img.style.display = 'none';
                        } else {
                          video.style.display = 'none';
                          img.style.display = 'block';
                        }
                      }
                    }}
                    aria-label="Alternar entre imagen y video"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 text-primary-500 group-hover:text-accent-500 transition-colors duration-300">{service.icon}</span>
                <h3 className="text-xl font-bold text-primary-800 group-hover:text-primary-900 transition-colors duration-300 font-display">{service.title}</h3>
              </div>
              <p className="text-secondary-600 mb-4 font-body group-hover:text-secondary-700 transition-colors duration-300">{service.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-primary-800 mb-2 font-display">Servicios Incluidos:</h4>
                <ul className="list-disc list-inside text-secondary-600 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="font-body">{feature}</li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => window.location.href = '/contacto'}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-corporate transition-all duration-300 font-display font-semibold shadow-corporate hover:shadow-corporate-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Solicitar Cotización
              </button>
            </div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <div className="mt-16">
          <StatsSection />
        </div>

        {/* Sección de testimonios */}
        <div className="mt-16">
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
};

export default Services; 