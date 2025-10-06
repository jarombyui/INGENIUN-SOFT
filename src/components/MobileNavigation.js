import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'INICIO', path: '/', icon: '🏠' },
    { name: '¿QUIÉNES SOMOS?', path: '/about', icon: '👥' },
    { name: 'SERVICIOS', path: '/servicios', icon: '⚙️', hasSubmenu: true },
    { name: 'BLOG', path: '/blog', icon: '📝' },
    { name: 'CONTÁCTANOS', path: '/contacto', icon: '📞' },
  ];

  const serviceItems = [
    { name: 'ERP Moderno', path: '/servicios#erp', icon: '📊' },
    { name: 'Estandarización', path: '/servicios#estandarizacion', icon: '⚙️' },
    { name: 'Desarrollo Web', path: '/servicios#desarrollo', icon: '💻' },
    { name: 'Automatización', path: '/servicios#automatizacion', icon: '🤖' },
    { name: 'Bases de Datos', path: '/servicios#bases-datos', icon: '🗄️' },
    { name: 'Consultoría', path: '/servicios#consultoria', icon: '🔍' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón del menú móvil */}
      <motion.button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/10 backdrop-blur-sm shadow-md'
        }`}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir menú"
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-center items-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white mb-1"
            animate={{ 
              y: isOpen ? 2 : 0,
              opacity: isOpen ? 0 : 1 
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white mb-1"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ 
              y: isOpen ? -2 : 0,
              opacity: isOpen ? 0 : 1 
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      {/* Overlay del menú */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 w-80 h-full bg-gradient-to-b from-primary-900/95 to-secondary-900/95 backdrop-blur-xl shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Header del menú */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <img
                    src="/images/Ingeniumsoft_ultimo.png"
                    alt="Logo"
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <div className="text-white font-bold text-lg">INGENIUM</div>
                    <div className="text-white/70 text-xs">SOFTWARE</div>
                  </div>
                </div>
                <motion.button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navegación principal */}
              <nav className="flex-1 overflow-y-auto py-6">
                <div className="space-y-2 px-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.hasSubmenu ? (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-semibold">{item.name}</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            {serviceItems.map((service, serviceIndex) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (serviceIndex * 0.05) }}
                              >
                                <Link
                                  to={service.path}
                                  onClick={closeMenu}
                                  className="flex items-center space-x-3 p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                  <span className="text-sm">{service.icon}</span>
                                  <span className="text-sm font-medium">{service.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className="flex items-center space-x-3 p-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="font-semibold">{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer con botón de contacto */}
              <div className="p-6 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/contacto"
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold py-4 px-6 text-center rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📱 Contactar Ahora
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
