import React from 'react';
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
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import SuggestionBox from './pages/SuggestionBox';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import SectionTransitions from './components/SectionTransitions';
import ParallaxTransitions from './components/ParallaxTransitions';

function App() {
  // eslint-disable-next-line no-unused-vars
  const message = 'Hola, estoy interesado en los servicios de INGENIUM SOFT';
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        {/* Three.js Transitions - Global */}
        <SectionTransitions />
        <ParallaxTransitions />
        
        <Navbar />
        <main className="flex-grow relative z-10">
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
            <Route path="/sugerencias" element={<SuggestionBox />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App; 