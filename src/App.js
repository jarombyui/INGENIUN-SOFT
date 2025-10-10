import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessProcess from './components/BusinessProcess';
import ModernCarousel from './components/ModernCarousel';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServiceAdvantages from './components/ServiceAdvantages';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load páginas para reducir bundle inicial
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const SuggestionBox = lazy(() => import('./pages/SuggestionBox'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load efectos Three.js solo cuando sean necesarios
const SectionTransitions = lazy(() => import('./components/SectionTransitions'));
const ParallaxTransitions = lazy(() => import('./components/ParallaxTransitions'));

function App() {
  // eslint-disable-next-line no-unused-vars
  const message = 'Hola, estoy interesado en los servicios de INGENIUM SOFT';
  
  // Detectar si es móvil para optimizar efectos
  const isMobile = window.innerWidth < 768;
  
  console.log('App se está renderizando, isMobile:', isMobile);
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative bg-white">
        {/* WhatsApp Button - SIEMPRE VISIBLE */}
        <WhatsAppButton />
        
        {/* Three.js Transitions - Solo en desktop para mejor rendimiento */}
        {!isMobile && (
          <Suspense fallback={null}>
            <SectionTransitions />
            <ParallaxTransitions />
          </Suspense>
        )}
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="hero-section">
                    <Hero />
                  </div>
                  <div className="services-section">
                    <Services />
                  </div>
                  <div className="process-section">
                    <BusinessProcess />
                  </div>
                  <div className="advantages-section">
                    <ServiceAdvantages />
                  </div>
                  <div className="carousel-section">
                    <ModernCarousel />
                  </div>
                  <div className="stats-section">
                    <StatsSection />
                  </div>
                  <div className="testimonials-section">
                    <TestimonialsSection />
                  </div>
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/sugerencias" element={<SuggestionBox />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 