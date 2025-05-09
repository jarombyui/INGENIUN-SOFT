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
    { name: 'Cursos', path: '/cursos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  return (
    <footer className="bg-[#205081] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-4 sm:mb-6">
              <img
                src="/images/Ingeniumsoft_ultimo.png"
                alt="Ingenium Soft Logo"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] object-contain drop-shadow-lg rounded"
              />
            </div>
            <p className="text-white/80 mb-4 text-center sm:text-left text-sm sm:text-base font-['Poppins']">
              Soluciones de software, desarrollo web y tecnología para empresas modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-accent font-['Montserrat']">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-center sm:text-left">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm sm:text-base font-['Poppins']"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-accent font-['Montserrat']">Síguenos</h4>
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
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
        <div className="border-t border-accent/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-sm sm:text-base font-['Poppins']">
            &copy; {new Date().getFullYear()} Ingenium Soft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 