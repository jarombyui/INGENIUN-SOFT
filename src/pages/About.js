import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Quiénes Somos?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ingenium Soft es una empresa líder en el desarrollo de soluciones de software a medida: páginas web, bases de datos y aplicaciones personalizadas para empresas y emprendedores.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Impulsar la transformación digital de nuestros clientes, creando software innovador, seguro y de alta calidad que potencie sus negocios.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser referentes en el sector tecnológico, brindando soluciones que marquen la diferencia y generen valor en cada proyecto.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Excelencia</h4>
              <p className="text-gray-600">Buscamos la máxima calidad en cada línea de código y en la atención a nuestros clientes.</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Integridad</h4>
              <p className="text-gray-600">Actuamos con honestidad, transparencia y compromiso en cada proyecto.</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Innovación</h4>
              <p className="text-gray-600">Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones modernas y eficientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 