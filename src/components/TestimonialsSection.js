import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Directora de Operaciones",
      company: "Manufacturas del Norte S.A.",
      content: "La implementación del ERP personalizado transformó completamente nuestros procesos. Ahora tenemos visibilidad total de nuestras operaciones y hemos reducido los tiempos de respuesta en un 60%.",
      rating: 5,
      service: "Implementación de ERP",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Gerente General",
      company: "Distribuidora Central",
      content: "La estandarización de procesos que realizó Ingenium Soft nos permitió optimizar nuestro flujo de trabajo y aumentar la productividad del equipo en un 45%. Excelente servicio profesional.",
      rating: 5,
      service: "Estandarización de Procesos",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "CEO",
      company: "TechStart Solutions",
      content: "El desarrollo de nuestra aplicación web personalizada superó todas nuestras expectativas. La interfaz es intuitiva y el rendimiento es excepcional. Recomiendo totalmente sus servicios.",
      rating: 5,
      service: "Desarrollo Web",
      image: "/images/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "Director de TI",
      company: "Grupo Empresarial del Sur",
      content: "La automatización de nuestros procesos administrativos nos ha ahorrado más de 20 horas semanales. El equipo de Ingenium Soft es altamente profesional y conocedor.",
      rating: 5,
      service: "Automatización de Procesos",
      image: "/images/testimonial-4.jpg"
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
          <div className="bg-white/90 backdrop-blur-sm rounded-corporate-xl p-8 md:p-12 shadow-corporate-2xl border border-white/20 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 text-accent-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-secondary-700 mb-8 font-body leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Service Badge */}
              <div className="inline-block bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonials[currentTestimonial].service}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary-800 font-display">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-secondary-600 font-body">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-primary-600 font-body font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 ${
                  index === currentTestimonial
                    ? 'bg-accent-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
