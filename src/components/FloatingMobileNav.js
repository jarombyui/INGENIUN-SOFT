import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Mostrar en móviles cuando se hace scroll hacia abajo
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostrar después de 100px de scroll
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Establecer tab activo basado en la ruta actual
    const path = location.pathname;
    if (path === '/') setActiveTab('home');
    else if (path === '/about') setActiveTab('about');
    else if (path === '/servicios') setActiveTab('services');
    else if (path === '/blog') setActiveTab('blog');
    else if (path === '/contacto') setActiveTab('contact');
    else setActiveTab('');
  }, [location]);

  const navItems = [
    { id: 'home', path: '/', icon: '🏠', label: 'Inicio' },
    { id: 'about', path: '/about', icon: '👥', label: 'Nosotros' },
    { id: 'services', path: '/servicios', icon: '⚙️', label: 'Servicios' },
    { id: 'blog', path: '/blog', icon: '📝', label: 'Blog' },
    { id: 'contact', path: '/contacto', icon: '📞', label: 'Contacto' },
  ];

  if (typeof window === 'undefined') return null;

  return (
    <AnimatePresence>
      {isVisible && window.innerWidth < 768 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-primary-900/95 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 px-2 py-2">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300 ${
                      activeTab === item.id
                        ? 'bg-accent-500/20 text-accent-400'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-medium mt-1">{item.label}</span>
                  </Link>
                  
                  {/* Indicador activo */}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-500/20 rounded-full border border-accent-400/30"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMobileNav;
