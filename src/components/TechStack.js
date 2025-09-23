import React, { useState } from 'react';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      name: 'React',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M18.5 12c0-.78-2.56-1.84-6.5-1.84S5.5 11.22 5.5 12s2.56 1.84 6.5 1.84 6.5-1.06 6.5-1.84M12 13.63c-1.78 0-3.44-.31-4.68-.83-.69-.29-1.2-.61-1.54-.83-.34-.22-.78-.78-.78-1.97s.44-1.75.78-1.97c.34-.22.85-.54 1.54-.83 1.24-.52 2.9-.83 4.68-.83s3.44.31 4.68.83c.69.29 1.2.61 1.54.83.34.22.78.78.78 1.97s-.44 1.75-.78 1.97c-.34.22-.85.54-1.54.83-1.24.52-2.9.83-4.68.83z"/>
        </svg>
      ),
      color: 'from-blue-400 to-blue-600',
      description: 'Biblioteca frontend moderna'
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.31,6.63 3,7.15 3,7.71V16.29C3,16.85 3.31,17.37 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.69,17.37 21,16.85 21,16.29V7.71C21,7.15 20.69,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L18.22,6.56L12,10.05L5.78,6.56L12,3.05M5,8.26L11,11.75V19.25L5,15.75V8.26M13,11.75L19,8.26V15.75L13,19.25V11.75Z"/>
        </svg>
      ),
      color: 'from-green-400 to-green-600',
      description: 'Runtime JavaScript del servidor'
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.64C14.86,20.18 14.4,20.64 13.86,20.64C13.32,20.64 12.86,20.18 12.86,19.64C12.86,19.1 13.32,18.64 13.86,18.64C14.4,18.64 14.86,19.1 14.86,19.64M22,9.86A2.86,2.86 0 0,0 19.14,7H14.86A2.86,2.86 0 0,0 12,9.86V13.61C12,15.19 10.72,16.46 9.14,16.46H3.86A2.86,2.86 0 0,0 1,19.32V16.46H4.86C5.4,16.46 5.86,16 5.86,15.46C5.86,14.92 5.4,14.46 4.86,14.46H2V9.86A2.86,2.86 0 0,1 4.86,7H9.14A2.86,2.86 0 0,1 12,9.86V7H14.86A2.86,2.86 0 0,0 17.72,4.28H9.86A2.86,2.86 0 0,0 7,7.14V10.89C7,12.47 5.72,13.75 4.14,13.75H2.86A2.86,2.86 0 0,0 0,16.61V19.14A2.86,2.86 0 0,0 2.86,22H7.14A2.86,2.86 0 0,0 10,19.14V15.39C10,13.81 11.28,12.54 12.86,12.54H18.11C19.69,12.54 20.96,11.26 20.96,9.68V7H22V9.86Z"/>
        </svg>
      ),
      color: 'from-yellow-400 to-yellow-600',
      description: 'IA y Machine Learning'
    },
    {
      name: 'Docker',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21.1H22V19.1H20V17.1H18V15.1H16V13.1H14V11.1H12V9.1H10V11.1H8V13.1H6V15.1H4V17.1H2V21.1M4,19.1V17.1H6V15.1H8V13.1H10V15.1H8V17.1H6V19.1H4M12,13.1V11.1H14V9.1H16V7.1H18V9.1H16V11.1H14V13.1H12M14,11.1H16V9.1H18V7.1H20V9.1H18V11.1H16V13.1H14V11.1Z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700',
      description: 'Contenedores y DevOps'
    },
    {
      name: 'AWS',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.966.966 0 01.112.256c0 .112-.064.224-.192.336l-.64.416c-.088.064-.176.096-.256.096-.112 0-.224-.056-.336-.152-.112-.112-.208-.232-.288-.376-.08-.144-.16-.304-.256-.488-.64.752-1.44 1.128-2.4 1.128-.688 0-1.239-.192-1.663-.576-.424-.384-.632-.896-.632-1.536 0-.68.24-1.231.72-1.655.48-.424 1.12-.632 1.919-.632.264 0 .537.024.825.064.288.048.584.112.889.2v-.648c0-.672-.144-1.144-.424-1.423-.288-.279-.776-.416-1.471-.416-.32 0-.648.04-.993.12-.344.08-.68.184-1.015.32-.144.064-.256.104-.32.128-.064.016-.112.024-.144.024-.128 0-.192-.096-.192-.288v-.448c0-.152.024-.264.064-.336.048-.072.128-.144.248-.2.336-.176.736-.32 1.215-.44.48-.12.992-.184 1.543-.184 1.177 0 2.04.264 2.591.8.551.536.823 1.344.823 2.424v3.176zm-3.28 1.232c.256 0 .528-.048.808-.144.288-.096.543-.272.775-.504.144-.152.248-.32.32-.512.064-.192.104-.416.104-.672v-.32c-.232-.064-.48-.112-.744-.144-.264-.032-.52-.048-.775-.048-.56 0-.969.112-1.231.336-.264.224-.392.537-.392.953 0 .384.096.672.288.864.2.2.48.296.847.296zm6.353.816c-.16 0-.271-.032-.335-.08-.064-.048-.12-.16-.168-.32l-1.871-6.104c-.048-.16-.072-.264-.072-.336 0-.128.064-.2.2-.2h.807c.168 0 .28.032.336.08.064.048.112.16.152.32L10.56 9.68l1.519-4.256c.04-.16.088-.272.152-.32.064-.048.184-.08.352-.08h.656c.168 0 .288.032.352.08.064.048.112.16.152.32L15.28 9.68l1.583-4.256c.048-.16.104-.272.152-.32.064-.048.176-.08.336-.08h.768c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.008.048-.024.112-.048.208l-1.919 6.104c-.048.16-.104.272-.168.32-.064.048-.176.08-.336.08h-.704c-.168 0-.288-.032-.352-.08-.064-.048-.112-.16-.152-.32l-1.535-4.048L12.535 10.24c-.04.16-.088.272-.152.32-.064.048-.184.08-.352.08h-.704zm11.048.272c-.464 0-.928-.056-1.368-.168-.44-.112-.784-.24-1.023-.392-.144-.088-.24-.184-.279-.272-.04-.088-.064-.184-.064-.288v-.464c0-.192.072-.288.2-.288.048 0 .096.008.152.032.056.016.136.048.224.08.296.128.616.224.952.288.336.064.664.096.993.096.528 0 .937-.096 1.231-.272.296-.184.44-.44.44-.768 0-.224-.064-.416-.2-.568-.128-.152-.368-.296-.704-.424l-1.015-.32c-.512-.16-.889-.4-1.135-.704-.248-.304-.368-.64-.368-1.016 0-.296.064-.56.2-.792.128-.232.304-.432.528-.592.224-.16.487-.28.799-.368.312-.088.647-.128.999-.128.2 0 .408.016.608.04.2.032.392.072.576.12.176.048.344.104.496.168.152.064.272.128.36.2.088.064.152.136.2.208.048.072.064.16.064.264v.432c0 .192-.072.288-.2.288-.064 0-.168-.032-.312-.096-.488-.224-1.039-.336-1.647-.336-.48 0-.856.08-1.128.248-.272.168-.408.408-.408.728 0 .224.072.416.216.568.144.152.408.304.792.44l.991.32c.504.16.872.384 1.104.672.232.288.352.624.352.992 0 .304-.064.576-.184.816-.12.24-.296.448-.528.624-.232.176-.512.312-.849.408-.328.104-.696.152-1.095.152z"/>
        </svg>
      ),
      color: 'from-orange-400 to-orange-600',
      description: 'Servicios cloud escalables'
    },
    {
      name: 'TensorFlow',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.416 5.311l-6.168-3.564v14.019L12.46 24V0l10.248 5.856v5.311z"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-700',
      description: 'Machine Learning avanzado'
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,2C6.47,2 2,6.243 2,11.497V22L4.267,20.267C5.094,20.884 6.086,21.267 7.164,21.267C9.411,21.267 11.234,19.444 11.234,17.197C11.234,14.95 9.411,13.127 7.164,13.127C6.086,13.127 5.094,13.51 4.267,14.127V11.497C4.267,7.486 7.714,4.267 12.001,4.267C16.288,4.267 19.735,7.486 19.735,11.497V14.127C18.908,13.51 17.916,13.127 16.838,13.127C14.591,13.127 12.768,14.95 12.768,17.197C12.768,19.444 14.591,21.267 16.838,21.267C17.916,21.267 18.908,20.884 19.735,20.267L22.002,22V11.497C22.002,6.243 17.532,2 12.001,2M7.164,15.394C8.168,15.394 8.967,16.193 8.967,17.197C8.967,18.201 8.168,19 7.164,19C6.16,19 5.361,18.201 5.361,17.197C5.361,16.193 6.16,15.394 7.164,15.394M16.838,15.394C17.842,15.394 18.641,16.193 18.641,17.197C18.641,18.201 17.842,19 16.838,19C15.834,19 15.035,18.201 15.035,17.197C15.035,16.193 15.834,15.394 16.838,15.394Z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-800',
      description: 'Base de datos robusta'
    },
    {
      name: 'Kubernetes',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 0 2.778-1.067l-1.786-1.356zm-4.91.676l2.414-.999-.01.007-1.357 1.785a5.159 5.159 0 0 0-1.047-2.793zm8.124-1.045l2.414.999a5.171 5.171 0 0 0-1.067-2.778l-1.356 1.786.009-.007zm-.676-4.91l.999 2.414-.007-.01 1.785-1.357a5.159 5.159 0 0 0-2.793-1.047l.016 0zm-5.071.007a5.159 5.159 0 0 0-2.793 1.047l1.785 1.357-.007.01.999-2.414h.016zm2.328 5.025c.842 0 1.524-.682 1.524-1.524s-.682-1.524-1.524-1.524-1.524.682-1.524 1.524.682 1.524 1.524 1.524z"/>
        </svg>
      ),
      color: 'from-blue-400 to-purple-600',
      description: 'Orquestación de contenedores'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 font-display">
            Tecnologías de Vanguardia
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-body leading-relaxed">
            Utilizamos las tecnologías más avanzadas del mercado para crear soluciones robustas y escalables
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-6 shadow-lg"></div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-corporate-lg p-6 shadow-corporate hover:shadow-corporate-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/30 cursor-pointer"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-corporate-lg p-3 text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                {tech.icon}
              </div>
              
              {/* Tech Name */}
              <h3 className="text-lg font-bold text-primary-800 text-center mb-2 font-display group-hover:text-primary-900 transition-colors duration-300">
                {tech.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-secondary-600 text-center font-body group-hover:text-secondary-700 transition-colors duration-300">
                {tech.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-corporate-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-corporate-lg border-2 border-transparent group-hover:border-primary-300/50 transition-all duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-corporate-lg"></div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-corporate-xl p-8 shadow-corporate-lg border border-white/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-800 mb-2 font-display">8+</div>
              <div className="text-secondary-600 font-body">Tecnologías Core</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-800 mb-2 font-display">24/7</div>
              <div className="text-secondary-600 font-body">Monitoreo & Soporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-800 mb-2 font-display">99.9%</div>
              <div className="text-secondary-600 font-body">Uptime Garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
