import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-white to-accent/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg">
            ¿Quiénes Somos?
          </h2>
          <p className="mt-4 text-2xl text-dark/80 max-w-3xl mx-auto font-['Poppins']">
            Ingenium Soft: Expertos en soluciones de ventas, desarrollo web y software a medida para empresas y emprendedores visionarios.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 mb-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 font-['Montserrat']">Nuestra Misión</h3>
            <p className="text-dark/80 font-['Poppins'] text-lg">Impulsar la transformación digital de nuestros clientes, creando software innovador, seguro y de alta calidad que potencie sus negocios.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/10 text-accent rounded-full p-4 mb-4 shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2 font-['Montserrat']">Nuestra Visión</h3>
            <p className="text-dark/80 font-['Poppins'] text-lg">Ser referentes en el sector tecnológico, brindando soluciones que marquen la diferencia y generen valor en cada proyecto.</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center font-['Montserrat']">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-3 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="font-semibold text-primary text-lg font-['Montserrat'] mb-1">Excelencia</h4>
              <p className="text-dark/70 font-['Poppins']">Buscamos la máxima calidad en cada línea de código y en la atención a nuestros clientes.</p>
            </div>
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary/10 text-secondary rounded-full p-4 mb-3 shadow-lg group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-semibold text-secondary text-lg font-['Montserrat'] mb-1">Integridad</h4>
              <p className="text-dark/70 font-['Poppins']">Actuamos con honestidad, transparencia y compromiso en cada proyecto.</p>
            </div>
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-accent/10 text-accent rounded-full p-4 mb-3 shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              </div>
              <h4 className="font-semibold text-accent text-lg font-['Montserrat'] mb-1">Innovación</h4>
              <p className="text-dark/70 font-['Poppins']">Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones modernas y eficientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 