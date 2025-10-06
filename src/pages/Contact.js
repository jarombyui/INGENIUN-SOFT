import React, { useState, useRef } from 'react';
import SEO from '../components/SEO';
import ContactParticles from '../components/ContactParticles';
import AdvancedContactEffects from '../components/AdvancedContactEffects';
import ScrollAnimation from '../components/ScrollAnimation';
import UniversalEffects from '../components/UniversalEffects';

const Contact = () => {
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
    const phone = '51950700541'; // Número de WhatsApp de contacto
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
      <div className="min-h-screen bg-gradient-to-br from-light via-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Three.js Particles for Contact */}
      {/* Universal Effects - Garantiza cobertura completa */}
      <UniversalEffects intensity={0.8} particleCount={150} colorScheme="blue" />
      
      {/* Three.js Particles for Contact */}
      <ContactParticles />
      
      {/* Advanced Contact Effects */}
      <AdvancedContactEffects />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-500-800 mb-4 font-display tracking-tight drop-shadow-lg pt-20 sm:pt-24 scroll-mt-32">
              Contáctanos
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-secondary-700 max-w-3xl mx-auto font-body px-4">
              Estamos aquí para ayudarte con tu transformación digital. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-primary-900/10 backdrop-blur-xl rounded-corporate shadow-corporate p-6 border border-primary-700/20">
              <h3 className="text-xl font-bold text-white mb-4 font-display">Información de Contacto</h3>
              
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
                    <p className="text-secondary-600 font-body">Teléfono: +51 947726382</p>
                    <p className="text-secondary-600 font-body">WhatsApp: +51 950 700 541</p>
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