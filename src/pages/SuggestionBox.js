import React, { useState } from 'react';
import SEO from '../components/SEO';
import AboutParticles from '../components/AboutParticles';

const SuggestionBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    category: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu sugerencia! La revisaremos pronto.');
    setFormData({
      name: '',
      email: '',
      suggestion: '',
      category: 'general'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <SEO 
        title="Buzón de Sugerencias - INGENIUM SOFT"
        description="Comparte tus ideas y sugerencias para ayudarnos a mejorar nuestros servicios. Tu opinión es valiosa para seguir creciendo y ofrecer mejores soluciones."
        keywords="sugerencias ingenium soft, feedback, opiniones, mejora continua, atención al cliente"
        ogUrl="https://software-ingeniun.netlify.app/sugerencias"
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Three.js Particles for Suggestions */}
        <AboutParticles />
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
          <div className="text-center group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
            <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-1 sm:px-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl pt-28 sm:pt-32 scroll-mt-32">
                Buzón de Sugerencias
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 max-w-4xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
                Tu opinión es importante para nosotros. Ayúdanos a mejorar nuestros servicios.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary-900/10 backdrop-blur-xl rounded-lg shadow-lg p-6 border border-primary-700/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-primary/30 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-primary/30 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white/90">
                  Categoría
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-primary/30 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                >
                  <option value="general">General</option>
                  <option value="servicios">Servicios</option>
                  <option value="soporte">Soporte Técnico</option>
                </select>
              </div>

              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-white/90">
                  Tu Sugerencia
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  rows={4}
                  value={formData.suggestion}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-primary/30 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
                >
                  Enviar Sugerencia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionBox; 