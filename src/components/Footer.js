import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: 'https://www.facebook.com/profile.php?id=100088810666184', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', path: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', path: 'https://www.linkedin.com/in/1ssecurex-instituto-para-la-seguridad-industrial-0846a8363/', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', path: 'https://www.instagram.com/1sse.curex/', icon: 'fab fa-instagram' },
    { name: 'YouTube', path: 'https://www.youtube.com/@ISSEGUREInstitutoparalaSegurid', icon: 'fab fa-youtube' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img
                src="/images/Ingeniumsoft_ultimo.png"
                alt="Ingenium Soft Logo"
                className="h-24 w-auto max-w-[300px] object-contain drop-shadow-lg rounded"
              />
            </div>
            <p className="text-white/80 mb-4 text-center md:text-left">
              Soluciones de software, desarrollo web y tecnología para empresas modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4 text-accent">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4 text-accent">Síguenos</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white/70 hover:text-accent transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-accent mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Ingenium Soft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 