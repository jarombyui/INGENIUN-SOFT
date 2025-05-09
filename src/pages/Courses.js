import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Embudo de Ventas Web',
      description: 'Aprende a crear y optimizar embudos de ventas digitales para captar y convertir clientes en internet.',
      duration: '3 semanas',
      level: 'Intermedio',
      image: '/images/cursos-images/envudo-ventas.png',
      price: 'S/ 1400 + IGV',
      schedule: 'Lunes y Miércoles',
      time: '7:00 PM - 9:00 PM'
    },
    {
      id: 2,
      title: 'Creación de Negocios',
      description: 'Descubre cómo lanzar tu propio negocio digital desde cero, validando ideas y estructurando tu emprendimiento.',
      duration: '1 mes',
      level: 'Básico a intermedio',
      image: '/images/cursos-images/crear-negocio.jpg',
      price: 'S/ 1200 + IGV',
      schedule: 'Sábados',
      time: '10:00 AM - 1:00 PM'
    },
    {
      id: 3,
      title: 'Marketing Digital',
      description: 'Domina las estrategias y herramientas clave para promocionar productos y servicios en internet.',
      duration: '3 semanasa 1 mes',
      level: 'Intermedio',
      image: '/images/cursos-images/marketing-digital.jpg',
      price: 'S/ 320 + IGV',
      schedule: 'Martes y Jueves',
      time: '7:00 PM - 9:00 PM'
    },
    {
      id: 4,
      title: 'Técnicas de Ventas',
      description: 'Aprende técnicas modernas de ventas para aumentar tus resultados tanto en el mundo digital como presencial.',
      duration: '2 semanas a 4 semanas',
      level: 'Básico a intermedio',
      image: '/images/cursos-images/tecnicas-de-ventas.png',
      price: 'S/ 1050 + IGV',
      schedule: 'Viernes',
      time: '6:00 PM - 8:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary mb-4 font-['Montserrat'] tracking-tight drop-shadow-lg pt-24 scroll-mt-32">
            Nuestros Cursos
          </h2>
          <p className="mt-4 text-2xl text-dark/80 max-w-3xl mx-auto font-['Poppins']">
            Aprende marketing, ventas y negocios digitales con Ingenium Soft
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-xl border-2 border-accent/30 hover:border-accent transform hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-light rounded-t-2xl flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 font-sans">{course.title}</h3>
                <p className="text-dark/70 mb-4 font-sans">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-dark/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-dark/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm text-dark/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course.time}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 rounded-lg transition-colors duration-300 font-semibold shadow-md hover:shadow-lg mt-auto"
                  onClick={() => {
                    const phone = '51947726382';
                    const message = `Hola, quiero cotizar el curso: ${course.title}`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Cotiza Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 