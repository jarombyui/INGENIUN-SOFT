import React, { useState, useEffect, useMemo } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  const stats = useMemo(() => [
    {
      number: 41,
      suffix: '+',
      label: 'Proyectos Completados',
      description: 'ERP, automatización y desarrollo web',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 38,
      suffix: '+',
      label: 'Empresas Atendidas',
      description: 'De múltiples sectores industriales',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: 10,
      suffix: '+',
      label: 'Años de Experiencia',
      description: 'En transformación digital',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 95,
      suffix: '%',
      label: 'Satisfacción del Cliente',
      description: 'Resultados garantizados',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.number / steps;

        const timer = setInterval(() => {
          currentStep++;
          setCounts(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.min(Math.floor(increment * currentStep), stat.number)
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible, stats]);

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 font-display">
            Números que Hablan
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-body">
            Resultados tangibles en transformación digital empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-corporate-lg p-8 text-center shadow-corporate hover:shadow-corporate-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 rounded-full mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-primary-800 mb-2 font-display">
                {counts[Object.keys(counts)[index]]}{stat.suffix}
              </div>
              
              <h3 className="text-lg font-semibold text-primary-800 mb-2 font-display">
                {stat.label}
              </h3>
              
              <p className="text-secondary-600 text-sm font-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
