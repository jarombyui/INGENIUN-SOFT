import React, { useState, useRef, lazy, Suspense } from 'react';
import SEO from '../components/SEO';

// Lazy load efectos Three.js para reducir bundle inicial
const ContactParticles = lazy(() => import('../components/ContactParticles'));
const AdvancedContactEffects = lazy(() => import('../components/AdvancedContactEffects'));
const UniversalEffects = lazy(() => import('../components/UniversalEffects'));

const Contact = () => {
  // Detectar si es móvil
  const isMobile = window.innerWidth < 768;
  
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, error: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, error: false, message: '' });

    // WhatsApp
    const phone = '51947726382'; // Número de WhatsApp de contacto
    const message = `¡Hola! Soy ${formData.user_name} y me gustaría contactarlos por lo siguiente:

📧 Email: ${formData.user_email}
📱 Teléfono: ${formData.user_phone}
📝 Asunto: ${formData.subject}
🔧 Servicio de interés: ${formData.service}
💬 Mensaje: ${formData.message}

Espero su respuesta. ¡Gracias!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setLoading(false);
    setStatus({ show: true, error: false, message: 'Redirigiendo a WhatsApp...' });
    setFormData({
      user_name: '',
      user_email: '',
      user_phone: '',
      subject: '',
      service: '',
      message: ''
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
        title="Contacto - INGENIUM SOFT"
        description="Contáctanos para discutir tus necesidades de software. Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM. Ubicados en Ate, Lima, Perú."
        keywords="contacto ingenium soft, desarrollo de software lima, consultoría tecnológica perú, soporte técnico software"
        ogUrl="https://software-ingeniun.netlify.app/contacto"
      />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Three.js Particles for Contact - Solo en desktop */}
      {/* Efectos Three.js - Solo en desktop con lazy loading */}
      {!isMobile && (
        <Suspense fallback={null}>
          <UniversalEffects intensity={0.8} particleCount={150} colorScheme="blue" />
          <ContactParticles />
          <AdvancedContactEffects />
        </Suspense>
      )}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
          <div className="text-center px-4 group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
            <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-1 sm:px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl pt-24 sm:pt-28 scroll-mt-32">
                Contáctanos
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 max-w-4xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
                Estamos aquí para ayudarte con tu transformación digital. Envíanos un mensaje y te responderemos lo antes posible.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white backdrop-blur-xl rounded-corporate shadow-corporate p-6 border border-primary-200">
              <h3 className="text-xl font-bold text-darkBlue-900 mb-4 font-display">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-secondary-600 font-body">Dirección: Urb. Santa Patricia, La Molina, Lima, Lima</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-secondary-600 font-body">Teléfono: +51 947 726 382</p>
                    <p className="text-secondary-600 font-body">WhatsApp: +51 947 726 382</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-secondary-600 font-body">Email: ingeniumsoftwares@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary-800 mb-2 font-display">Horario de Atención</h4>
                <p className="text-secondary-600 font-body">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-secondary-600 font-body">Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-900/10 backdrop-blur-xl rounded-corporate shadow-corporate p-6 border border-primary-700/20">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-white/90">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-white/90">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  />
                </div>

                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium text-white/90">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/90">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/90">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Implementación de ERP Moderno">Implementación de ERP Moderno</option>
                    <option value="Estandarización de Procesos">Estandarización de Procesos</option>
                    <option value="Desarrollo Web y Aplicaciones">Desarrollo Web y Aplicaciones</option>
                    <option value="Automatización de Procesos">Automatización de Procesos</option>
                    <option value="Bases de Datos Inteligentes">Bases de Datos Inteligentes</option>
                    <option value="Consultoría Tecnológica">Consultoría Tecnológica</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary-700/30 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-primary-900/20 text-white placeholder-white/70"
                  />
                </div>

                {status.show && (
                  <div 
                    className={`p-4 rounded-md ${
                      status.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-corporate transition-all duration-300 font-display font-semibold shadow-corporate hover:shadow-corporate-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 