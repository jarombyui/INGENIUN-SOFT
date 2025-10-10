import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';

// Lazy load efectos Three.js para reducir bundle inicial
const AboutParticles = lazy(() => import('../components/AboutParticles'));
const AdvancedAboutEffects = lazy(() => import('../components/AdvancedAboutEffects'));
const UniversalEffects = lazy(() => import('../components/UniversalEffects'));

const About = () => {
  // Detectar si es móvil
  const isMobile = window.innerWidth < 768;
  
  return (
    <>
      <SEO 
        title="Sobre Nosotros"
        description="Conoce a INGENIUM SOFT, expertos en soluciones de ventas, desarrollo web y software a medida. Descubre nuestra misión, visión y valores que nos hacen únicos en el sector tecnológico."
        keywords="ingenium soft, sobre nosotros, misión, visión, valores, empresa de software, desarrollo web, software a medida"
        ogUrl="https://software-ingeniun.netlify.app/about"
      />
             <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 opacity-5">
                 <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500 rounded-full blur-xl animate-pulse-slow"></div>
                 <div className="absolute top-1/3 right-20 w-24 h-24 bg-primary-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                 <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-darkBlue-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
               </div>

               {/* Glass Morphism Pattern */}
               <div className="absolute inset-0 opacity-20">
                 <div className="absolute inset-0" style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundRepeat: 'repeat'
                 }}></div>
               </div>

      {/* Efectos Three.js - Solo en desktop con lazy loading */}
      {!isMobile && (
        <Suspense fallback={null}>
          <UniversalEffects intensity={1.0} particleCount={200} colorScheme="corporate" />
          <AboutParticles />
          <AdvancedAboutEffects />
        </Suspense>
      )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
          <div className="text-center mb-12 sm:mb-16 px-4 group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
            <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-1 sm:px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl pt-24 sm:pt-28 scroll-mt-32">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 max-w-4xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
                Ingenium Soft: Especialistas en transformación digital, implementación de ERP, estandarización de procesos y desarrollo de software empresarial de vanguardia.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 mb-12 sm:mb-16 px-4">
            <div className="bg-white backdrop-blur-xl rounded-corporate-xl shadow-corporate-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-primary-200 group">
              <div className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4 shadow-corporate group-hover:bg-primary-200 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-darkBlue-900 mb-2 font-display group-hover:text-primary-600 transition-colors duration-300">Nuestra Misión</h3>
              <p className="text-secondary-600 font-body text-lg group-hover:text-secondary-700 transition-colors duration-300">Transformar empresas mediante soluciones tecnológicas integrales, implementando ERP modernos, estandarizando procesos y desarrollando software que impulse el crecimiento empresarial.</p>
            </div>

            <div className="bg-white backdrop-blur-xl rounded-corporate-xl shadow-corporate-2xl p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-primary-200 group">
              <div className="bg-accent-100 text-accent-600 rounded-full p-4 mb-4 shadow-corporate group-hover:bg-accent-200 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-darkBlue-900 mb-2 font-display group-hover:text-accent-600 transition-colors duration-300">Nuestra Visión</h3>
              <p className="text-secondary-600 font-body text-lg group-hover:text-secondary-700 transition-colors duration-300">Ser líderes en transformación digital empresarial, reconocidos por nuestra excelencia en implementación de ERP, optimización de procesos y desarrollo de software innovador.</p>
            </div>
          </div>

          <div className="bg-white backdrop-blur-lg rounded-corporate-xl shadow-corporate-2xl p-10 border border-primary-200">
            <h3 className="text-2xl font-bold text-darkBlue-900 mb-8 text-center font-display">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-primary-100 text-primary-600 rounded-full p-4 mb-3 shadow-corporate group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-semibold text-darkBlue-900 text-lg font-display mb-1 group-hover:text-primary-600 transition-colors duration-300">Excelencia</h4>
                <p className="text-secondary-600 font-body group-hover:text-secondary-700 transition-colors duration-300">Buscamos la máxima calidad en cada línea de código y en la atención a nuestros clientes.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-secondary-100 text-secondary-600 rounded-full p-4 mb-3 shadow-corporate group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-semibold text-darkBlue-900 text-lg font-display mb-1 group-hover:text-secondary-600 transition-colors duration-300">Integridad</h4>
                <p className="text-secondary-600 font-body group-hover:text-secondary-700 transition-colors duration-300">Actuamos con honestidad, transparencia y compromiso en cada proyecto.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-accent-100 text-accent-600 rounded-full p-4 mb-3 shadow-corporate group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                </div>
                <h4 className="font-semibold text-darkBlue-900 text-lg font-display mb-1 group-hover:text-accent-600 transition-colors duration-300">Innovación</h4>
                <p className="text-secondary-600 font-body group-hover:text-secondary-700 transition-colors duration-300">Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones modernas y eficientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 