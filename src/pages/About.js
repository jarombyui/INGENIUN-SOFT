import React from 'react';
import SEO from '../components/SEO';
import AboutParticles from '../components/AboutParticles';
import AdvancedAboutEffects from '../components/AdvancedAboutEffects';
import ScrollAnimation from '../components/ScrollAnimation';
import UniversalEffects from '../components/UniversalEffects';

const About = () => {
  return (
    <>
      <SEO 
        title="Sobre Nosotros"
        description="Conoce a INGENIUM SOFT, expertos en soluciones de ventas, desarrollo web y software a medida. Descubre nuestra misión, visión y valores que nos hacen únicos en el sector tecnológico."
        keywords="ingenium soft, sobre nosotros, misión, visión, valores, empresa de software, desarrollo web, software a medida"
        ogUrl="https://software-ingeniun.netlify.app/about"
      />
             <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 opacity-10">
                 <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-xl animate-pulse-slow"></div>
                 <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                 <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
               </div>

               {/* Glass Morphism Pattern */}
               <div className="absolute inset-0 opacity-20">
                 <div className="absolute inset-0" style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundRepeat: 'repeat'
                 }}></div>
               </div>

      {/* Universal Effects - Garantiza cobertura completa */}
      <UniversalEffects intensity={1.0} particleCount={200} colorScheme="corporate" />
      
      {/* Three.js Particles for About */}
      <AboutParticles />
      
      {/* Advanced About Effects */}
      <AdvancedAboutEffects />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-display tracking-tight drop-shadow-lg pt-20 sm:pt-24 scroll-mt-32">
              ¿Quiénes Somos?
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body px-4">
              Ingenium Soft: Especialistas en transformación digital, implementación de ERP, estandarización de procesos y desarrollo de software empresarial de vanguardia.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 mb-12 sm:mb-16 px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-corporate-xl shadow-corporate-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 rounded-full p-4 mb-4 shadow-corporate group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-2 font-display group-hover:text-primary-900 transition-colors duration-300">Nuestra Misión</h3>
              <p className="text-secondary-700 font-body text-lg group-hover:text-secondary-800 transition-colors duration-300">Transformar empresas mediante soluciones tecnológicas integrales, implementando ERP modernos, estandarizando procesos y desarrollando software que impulse el crecimiento empresarial.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-corporate-xl shadow-corporate-2xl p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 text-accent-600 rounded-full p-4 mb-4 shadow-corporate group-hover:from-accent-200 group-hover:to-accent-300 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-accent-700 mb-2 font-display group-hover:text-accent-800 transition-colors duration-300">Nuestra Visión</h3>
              <p className="text-secondary-700 font-body text-lg group-hover:text-secondary-800 transition-colors duration-300">Ser líderes en transformación digital empresarial, reconocidos por nuestra excelencia en implementación de ERP, optimización de procesos y desarrollo de software innovador.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-corporate-xl shadow-corporate-2xl p-10 border border-white/20">
            <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center font-display">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 rounded-full p-4 mb-3 shadow-corporate group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-semibold text-primary-800 text-lg font-display mb-1 group-hover:text-primary-900 transition-colors duration-300">Excelencia</h4>
                <p className="text-secondary-600 font-body group-hover:text-secondary-700 transition-colors duration-300">Buscamos la máxima calidad en cada línea de código y en la atención a nuestros clientes.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-600 rounded-full p-4 mb-3 shadow-corporate group-hover:from-secondary-500 group-hover:to-secondary-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-semibold text-secondary-800 text-lg font-display mb-1 group-hover:text-secondary-900 transition-colors duration-300">Integridad</h4>
                <p className="text-secondary-600 font-body group-hover:text-secondary-700 transition-colors duration-300">Actuamos con honestidad, transparencia y compromiso en cada proyecto.</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent-100 to-accent-200 text-accent-600 rounded-full p-4 mb-3 shadow-corporate group-hover:from-accent-500 group-hover:to-accent-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                </div>
                <h4 className="font-semibold text-accent-700 text-lg font-display mb-1 group-hover:text-accent-800 transition-colors duration-300">Innovación</h4>
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