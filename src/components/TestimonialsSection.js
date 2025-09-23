import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Directora de Operaciones",
      company: "Manufacturas del Norte S.A.",
      content: "La implementación del ERP con IA integrada transformó completamente nuestros procesos. Ahora tenemos visibilidad predictiva de nuestras operaciones y hemos reducido los tiempos de respuesta en un 60%, con análisis en tiempo real que nos permiten tomar decisiones estratégicas inmediatas.",
      rating: 5,
      service: "ERP + IA Analytics",
      avatar: "MG",
      color: "from-purple-400 to-purple-600",
      metrics: { efficiency: "+60%", time: "24/7", roi: "300%" }
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Gerente General",
      company: "Distribuidora Central",
      content: "La estandarización de procesos con metodologías ágiles que realizó Ingenium Soft nos permitió optimizar nuestro flujo de trabajo y aumentar la productividad del equipo en un 45%. La implementación de microservicios revolucionó nuestra arquitectura tecnológica.",
      rating: 5,
      service: "DevOps & Automatización",
      avatar: "CR",
      color: "from-green-400 to-green-600",
      metrics: { productivity: "+45%", deployment: "10x", downtime: "-90%" }
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "CEO",
      company: "TechStart Solutions",
      content: "El desarrollo de nuestra PWA con arquitectura cloud-native superó todas nuestras expectativas. La aplicación es ultra-rápida, funciona offline y el rendimiento es excepcional. La escalabilidad automática nos permite crecer sin límites.",
      rating: 5,
      service: "PWA Cloud-Native",
      avatar: "AM",
      color: "from-blue-400 to-blue-600",
      metrics: { speed: "300%", users: "10K+", uptime: "99.9%" }
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "Director de TI",
      company: "Grupo Empresarial del Sur",
      content: "La implementación de Machine Learning en nuestros procesos administrativos nos ha ahorrado más de 20 horas semanales. Los chatbots inteligentes y la automatización cognitiva han revolucionado nuestra operación. ROI del 400% en el primer año.",
      rating: 5,
      service: "ML & Automatización Cognitiva",
      avatar: "RS",
      color: "from-orange-400 to-orange-600",
      metrics: { automation: "85%", savings: "20h/sem", roi: "400%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-accent-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 font-display">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-body">
            Testimonios reales de empresas que han transformado sus operaciones con nuestras soluciones
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white/95 backdrop-blur-md rounded-corporate-xl p-8 md:p-12 shadow-corporate-2xl border border-white/30 max-w-5xl mx-auto relative overflow-hidden group">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full translate-y-12 -translate-x-12 blur-xl"></div>
            
            <div className="relative z-10">
              {/* Quote Icon with Tech Style */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full mb-6 shadow-lg animate-glow">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="text-center">
                {/* Service Badge with Tech Design */}
                <div className={`inline-block bg-gradient-to-r ${testimonials[currentTestimonial].color} text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse-slow`}>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {testimonials[currentTestimonial].service}
                  </span>
                </div>

                {/* Rating with Modern Style */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Content with Better Typography */}
                <blockquote className="text-xl md:text-2xl text-secondary-700 mb-8 font-body leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Metrics Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                  {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value], index) => (
                    <div key={key} className="bg-white/80 backdrop-blur-sm rounded-corporate p-3 border border-white/30 shadow-corporate">
                      <div className="text-lg font-bold text-primary-700">{value}</div>
                      <div className="text-xs text-secondary-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Author with Modern Avatar */}
                <div className="flex items-center justify-center space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/50`}>
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-primary-800 font-display mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-secondary-600 font-body mb-1">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-primary-600 font-body font-semibold">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-corporate-xl border-2 border-transparent group-hover:border-primary-300/30 transition-all duration-500"></div>
          </div>

          {/* Modern Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`group relative transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 ${
                  index === currentTestimonial
                    ? 'scale-110'
                    : 'hover:scale-105'
                }`}
                aria-label={`Ver testimonio de ${testimonial.name}`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? `bg-gradient-to-r ${testimonial.color} shadow-lg`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}>
                </div>
                {index === currentTestimonial && (
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${testimonial.color} animate-ping opacity-75`}></div>
                )}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {testimonial.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
