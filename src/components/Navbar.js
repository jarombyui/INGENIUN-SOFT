import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Función para manejar el hover del dropdown
  const handleDropdownMouseEnter = useCallback(() => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(true);
  }, [dropdownTimeout]);

  const handleDropdownMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); // Delay de 1000ms antes de cerrar
    setDropdownTimeout(timeout);
  }, []);

  // Función para manejar click en el botón de servicios
  const handleServicesClick = useCallback((e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  }, [dropdownOpen]);

  // Función para cerrar dropdown al hacer click fuera
  const handleClickOutside = useCallback((e) => {
    if (dropdownOpen && !e.target.closest('.dropdown-container')) {
      setDropdownOpen(false);
    }
  }, [dropdownOpen]);

  // Agregar event listener para clicks fuera del dropdown
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [dropdownOpen, handleClickOutside]);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const menuItems = [
    { name: 'INICIO', path: '/' },
    { name: '¿QUIÉNES SOMOS?', path: '/about' },
    { name: 'SERVICIOS', path: '/servicios', hasDropdown: true },
    { name: 'CURSOS', path: '/cursos' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTÁCTANOS', path: '/contacto' },
  ];

  const serviceItems = [
    { name: 'ERP Moderno', path: '/servicios#erp' },
    { name: 'Estandarización', path: '/servicios#estandarizacion' },
    { name: 'Desarrollo Web', path: '/servicios#desarrollo' },
    { name: 'Automatización', path: '/servicios#automatizacion' },
    { name: 'Bases de Datos', path: '/servicios#bases-datos' },
    { name: 'Consultoría', path: '/servicios#consultoria' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-corporate-lg border-b border-white/20' 
        : 'bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Modernizado */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                <img
                  src="/images/Ingeniumsoft_ultimo.png"
                  alt="Ingenium Soft Logo"
                  className="h-16 w-16 object-cover drop-shadow-2xl rounded-full border-3 border-white/30 shadow-corporate-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-corporate-2xl group-hover:border-primary-400/50 relative z-10"
                />
                {/* Anillo animado */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-400/50 opacity-0 group-hover:opacity-100 animate-pulse-neon transition-all duration-500"></div>
                {/* Efecto de brillo mejorado */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-primary-200/10 to-accent-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="font-bold text-lg bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                  INGENIUM
                </div>
                <div className="text-xs text-secondary-600 group-hover:text-cyber-600 transition-colors duration-300 font-medium tracking-wide">
                  SOFTWARE
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group dropdown-container">
                {item.hasDropdown ? (
                  <div
                    className={`${
                      scrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-400'
                    } px-3 py-2 text-sm lg:text-base font-semibold transition-all duration-300 tracking-wide cursor-pointer flex items-center space-x-1 relative`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                    onClick={handleServicesClick}
                  >
                    <span>{item.name}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`${
                      scrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-400'
                    } px-3 py-2 text-sm lg:text-base font-semibold transition-all duration-300 tracking-wide relative group`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && dropdownOpen && (
                  <>
                    {/* Área invisible de conexión más grande */}
                    <div 
                      className="absolute top-full left-0 w-80 h-6 bg-transparent z-40"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    ></div>
                    <div 
                      className="absolute top-full left-0 mt-6 w-80 bg-white/95 backdrop-blur-xl rounded-corporate shadow-corporate-2xl border border-white/40 py-4 z-50 animate-fade-in"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                    <div className="px-3">
                      <div className="text-sm font-bold text-primary-800 uppercase tracking-wider mb-3 px-3 border-b border-primary-200 pb-2">
                        Nuestros Servicios
                      </div>
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-6 py-5 text-base text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold hover:translate-x-3 rounded-corporate group shadow-sm hover:shadow-lg min-h-[60px] flex items-center"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className="flex items-center space-x-4 w-full">
                            <div className="w-4 h-4 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125 flex-shrink-0"></div>
                            <span className="font-semibold tracking-wide flex-grow">{service.name}</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-primary-200 mt-3 pt-3 mx-3">
                      <Link
                        to="/servicios"
                        className="block px-6 py-4 text-sm font-bold text-primary-700 hover:text-white hover:bg-gradient-to-r hover:from-accent-500 hover:to-accent-600 transition-all duration-300 rounded-corporate text-center shadow-sm hover:shadow-lg min-h-[50px] flex items-center justify-center"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Ver todos los servicios →
                      </Link>
                    </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } p-2 rounded-corporate transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500`}
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-corporate-lg rounded-b-corporate border border-white/20">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block text-secondary-700 hover:text-primary-600 hover:bg-primary-50 px-3 py-3 text-base font-medium transition-all duration-200 rounded-corporate hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1 bg-primary-50 rounded-corporate p-3 border border-primary-200">
                    <div className="text-sm font-bold text-primary-800 uppercase tracking-wider mb-3 px-2 border-b border-primary-300 pb-2">
                      Servicios
                    </div>
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 px-4 py-3 text-base font-semibold transition-all duration-300 rounded-corporate hover:translate-x-2 flex items-center space-x-3 shadow-sm hover:shadow-md"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="font-semibold tracking-wide">{service.name}</span>
                      </Link>
                    ))}
                    <Link
                      to="/servicios"
                      className="block text-primary-700 hover:text-white hover:bg-gradient-to-r hover:from-accent-500 hover:to-accent-600 px-4 py-3 text-sm font-bold transition-all duration-300 rounded-corporate hover:translate-x-2 text-center shadow-sm hover:shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 