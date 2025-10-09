import React from 'react';

const BusinessProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Entendemos tu Negocio",
      description: "Analizamos profundamente tu empresa, sus objetivos, desafíos y oportunidades de mejora.",
      image: "/images/procesos/analisis-procesos-5.jpeg",
      details: [
        "Análisis de procesos actuales",
        "Identificación de cuellos de botella",
        "Evaluación de tecnologías existentes",
        "Mapeo de flujos de trabajo"
      ],
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Estandarizamos Procesos",
      description: "Optimizamos y estandarizamos tus procesos mediante análisis detallado y mejores prácticas.",
      image: "/images/estandarizacion/estandarizacion-5.jpeg",
      details: [
        "Diseño de flujos optimizados",
        "Documentación de procedimientos",
        "Implementación de mejores prácticas",
        "Capacitación del personal"
      ],
      icon: "⚙️",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      title: "Automatizamos con Software",
      description: "Implementamos soluciones tecnológicas que automatizan la gestión de todas las áreas.",
      image: "/images/ERP/erp-modulo-produccion.jpeg",
      details: [
        "Desarrollo de ERP personalizado",
        "Automatización de procesos",
        "Integración de sistemas",
        "Monitoreo y mejora continua"
      ],
      icon: "🚀",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-primary-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-darkBlue-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Glass Morphism Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkBlue-900 font-display tracking-tight mb-4 sm:mb-6">
            Nuestro Proceso de Transformación
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto font-body leading-relaxed px-4">
            Un enfoque metodológico comprobado que garantiza resultados exitosos en la digitalización de tu empresa
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6 shadow-lg"></div>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 sm:space-y-16">
          {processSteps.map((step, index) => (
            <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className="flex-1 lg:max-w-lg">
                <div className="bg-white backdrop-blur-xl rounded-lg p-6 sm:p-8 shadow-corporate-lg border border-primary-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg mb-4 sm:mb-0 sm:mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-primary-500 uppercase tracking-wider">Paso {step.step}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-darkBlue-900 font-display">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 text-base sm:text-lg mb-4 sm:mb-6 font-body leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
                        <span className="text-secondary-600 font-medium text-sm sm:text-base">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 lg:max-w-2xl">
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-corporate-xl border border-primary-200 transition-transform duration-300 active:scale-95"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg">
                    {step.step}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 sm:p-8 shadow-corporate-lg border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-display">
              ¿Listo para Transformar tu Empresa?
            </h3>
            <p className="text-white/90 mb-4 sm:mb-6 font-body text-sm sm:text-base">
              Comienza tu proceso de transformación digital con nuestro enfoque metodológico probado
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contacto'}
                className="bg-gradient-to-r from-primary-500 to-primary-600 active:from-primary-600 active:to-primary-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform active:scale-95 hover:shadow-corporate-lg font-display tracking-wide shadow-corporate focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 touch-manipulation"
                style={{ minHeight: '48px' }}
              >
                Solicitar Consultoría Gratuita
              </button>
              <button 
                onClick={() => window.location.href = '/servicios'}
                className="bg-gradient-to-r from-accent-500 to-accent-600 active:from-accent-600 active:to-accent-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform active:scale-95 hover:shadow-corporate-lg font-display tracking-wide shadow-corporate focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 touch-manipulation"
                style={{ minHeight: '48px' }}
              >
                Ver Nuestros Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
