import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: 'https://www.facebook.com/profile.php?id=100088810666184', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', path: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', path: 'https://www.linkedin.com/company/105239905/admin/dashboard/in/1ssecurex-instituto-para-la-seguridad-industrial-0846a8363/', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', path: 'https://www.instagram.com/igneniun_softwares/', icon: 'fab fa-instagram' },
    { name: 'YouTube', path: 'https://www.youtube.com/@ingeniumsoftwares/@ingeniumsoftwares', icon: 'fab fa-youtube' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  const serviceLinks = [
    { name: 'ERP Moderno', path: '/servicios#erp' },
    { name: 'Estandarización', path: '/servicios#estandarizacion' },
    { name: 'Desarrollo Web', path: '/servicios#desarrollo' },
    { name: 'Automatización', path: '/servicios#automatizacion' },
    { name: 'Bases de Datos', path: '/servicios#bases-datos' },
    { name: 'Consultoría', path: '/servicios#consultoria' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-4 sm:mb-6">
              <img
                src="/images/Ingeniumsoft_ultimo.png"
                alt="Ingenium Soft Logo"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] object-contain drop-shadow-lg rounded"
              />
            </div>
            <p className="text-white/80 mb-4 text-center sm:text-left text-sm sm:text-base font-body">
              Transformación digital integral: ERP moderno, estandarización de procesos, desarrollo web y automatización inteligente para empresas de vanguardia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-accent-400 font-display">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-center sm:text-left">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent-400 transition-all duration-300 text-sm sm:text-base font-body hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-accent-400 font-display">Nuestros Servicios</h4>
            <ul className="space-y-2 text-center sm:text-left">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent-400 transition-all duration-300 text-sm sm:text-base font-body hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-accent-400 font-display">Síguenos</h4>
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white/70 hover:text-accent-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-white/10 hover:bg-white/20 p-2 rounded-corporate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl sm:text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent-400/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-sm sm:text-base font-body">
            &copy; {new Date().getFullYear()} Ingenium Soft. Todos los derechos reservados. | Transformación Digital Empresarial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 