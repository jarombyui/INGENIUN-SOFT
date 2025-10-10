import React, { useState, lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

// Lazy load efectos Three.js para reducir bundle inicial
const UniversalEffects = lazy(() => import('../components/UniversalEffects'));
const ServicesParticles = lazy(() => import('../components/ServicesParticles'));
const AdvancedServicesEffects = lazy(() => import('../components/AdvancedServicesEffects'));
const AdvancedServicesVisualEffects = lazy(() => import('../components/AdvancedServicesVisualEffects'));
const InteractiveServiceElements = lazy(() => import('../components/InteractiveServiceElements'));

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Detectar si es móvil (para futuras optimizaciones)
  // const isMobile = window.innerWidth < 768;

  const productCategories = [
    {
      title: "Páginas Web",
      description: "Desarrollo de páginas web profesionales y landing pages optimizadas para conversión",
      icon: "🌐",
      products: [
        {
          name: "Landing Page Básica",
          description: "Página de aterrizaje profesional optimizada para maximizar conversiones. Ideal para campañas publicitarias, promociones especiales y captación de leads calificados con diseño moderno y funcional.",
          features: [
            "✅ Diseño responsivo perfecto en todos los dispositivos",
            "✅ Optimización SEO avanzada para mejor posicionamiento",
            "✅ Formulario de contacto inteligente con validación",
            "✅ Integración completa con redes sociales",
            "✅ Velocidad de carga optimizada (menos de 3 segundos)",
            "✅ Analytics básico incluido",
            "✅ Certificado SSL gratuito",
            "✅ Hosting profesional por 1 año"
          ],
          price: "Desde $299",
          duration: "1-2 semanas",
          includes: ["Diseño personalizado único", "Optimización móvil completa", "Certificado SSL", "Hosting profesional 1 año", "Soporte técnico 30 días", "Capacitación básica"]
        },
        {
          name: "Landing Page Premium",
          description: "Landing page de alta gama con tecnologías avanzadas para empresas que buscan resultados excepcionales. Incluye animaciones fluidas, A/B testing automático y dashboard de analytics en tiempo real.",
          features: [
            "✅ Todo lo incluido en la versión Básica",
            "✅ Animaciones avanzadas y micro-interacciones",
            "✅ Sistema de A/B Testing automático",
            "✅ Analytics avanzado con Google Analytics 4",
            "✅ Chat en vivo integrado con WhatsApp",
            "✅ Integración completa con CRM",
            "✅ Pop-ups inteligentes y personalizables",
            "✅ Sistema de seguimiento de conversiones",
            "✅ Optimización para Core Web Vitals",
            "✅ Backup automático diario"
          ],
          price: "Desde $599",
          duration: "2-3 semanas",
          includes: ["Diseño premium personalizado", "Animaciones y efectos avanzados", "Sistema de testing A/B", "Dashboard analytics completo", "Integración CRM", "Soporte prioritario 60 días", "Capacitación avanzada"]
        },
        {
          name: "Web Personalizada",
          description: "Sitio web corporativo completo con múltiples páginas y funcionalidades empresariales. Perfecto para empresas que necesitan una presencia digital profesional con panel administrativo completo.",
          features: [
            "✅ Múltiples páginas (hasta 15 páginas)",
            "✅ Panel administrativo intuitivo y completo",
            "✅ Sistema de gestión de contenido avanzado",
            "✅ Blog corporativo con SEO optimizado",
            "✅ Módulo de e-commerce básico integrado",
            "✅ Sistema de reservas o citas online",
            "✅ Galería multimedia profesional",
            "✅ Formularios avanzados con validación",
            "✅ Integración con Google My Business",
            "✅ Sistema de backup automático y restauración"
          ],
          price: "Desde $899",
          duration: "3-4 semanas",
          includes: ["Sitio web completo personalizado", "Panel de administración avanzado", "Sistema de gestión de contenido", "Capacitación completa del equipo", "Hosting premium 1 año", "Soporte técnico 90 días", "Manual de usuario detallado"]
        }
      ]
    },
    {
      title: "Aplicaciones Fullstack",
      description: "Desarrollo de aplicaciones web completas para e-commerce y tiendas virtuales",
      icon: "🛒",
      products: [
        {
          name: "E-commerce Básico",
          description: "Tienda virtual completa y funcional para empresas que inician en el comercio electrónico. Incluye todas las herramientas esenciales para gestionar productos, procesar pagos y administrar pedidos de manera eficiente.",
          features: [
            "✅ Catálogo de productos ilimitado con categorías",
            "✅ Carrito de compras avanzado con persistencia",
            "✅ Procesamiento de pagos seguro (Visa, Mastercard, PayPal)",
            "✅ Gestión de inventario en tiempo real",
            "✅ Panel de administración completo e intuitivo",
            "✅ SEO optimizado para mejor posicionamiento",
            "✅ Sistema de cupones y descuentos",
            "✅ Gestión de clientes y pedidos",
            "✅ Reportes de ventas básicos",
            "✅ Integración con redes sociales"
          ],
          price: "Desde $1,299",
          duration: "4-6 semanas",
          includes: ["Tienda virtual completa", "Integración de métodos de pago", "Panel administrativo avanzado", "Capacitación completa del equipo", "Hosting e-commerce 1 año", "Certificado SSL", "Soporte técnico 90 días"]
        },
        {
          name: "E-commerce Premium",
          description: "Plataforma de comercio electrónico de nivel empresarial con funcionalidades avanzadas para empresas que buscan escalabilidad y crecimiento. Incluye marketplace multi-vendor y herramientas de marketing automatizado.",
          features: [
            "✅ Todo lo incluido en la versión Básica",
            "✅ Sistema Multi-vendor (marketplace)",
            "✅ Sistema de afiliados y comisiones",
            "✅ Analytics avanzado con Google Analytics 4",
            "✅ Marketing automation y email marketing",
            "✅ API REST completa para integraciones",
            "✅ Aplicación móvil nativa (iOS/Android)",
            "✅ Sistema de reviews y calificaciones",
            "✅ Gestión avanzada de inventario multi-almacén",
            "✅ Sistema de fidelización de clientes",
            "✅ Integración con sistemas ERP",
            "✅ Dashboard ejecutivo con KPIs"
          ],
          price: "Desde $2,499",
          duration: "6-8 semanas",
          includes: ["Plataforma e-commerce avanzada", "App móvil nativa incluida", "Herramientas de marketing automation", "Documentación completa de API", "Sistema multi-vendor", "Capacitación ejecutiva", "Hosting empresarial 1 año", "Soporte prioritario 180 días"]
        }
      ]
    },
    {
      title: "CRM Único",
      description: "Sistema de gestión de relaciones con clientes personalizado para tu empresa",
      icon: "👥",
      products: [
        {
          name: "CRM Personalizado",
          description: "Sistema CRM desarrollado específicamente para las necesidades únicas de tu empresa. Optimiza la gestión de relaciones con clientes, automatiza procesos de ventas y proporciona insights valiosos para el crecimiento del negocio.",
          features: [
            "✅ Gestión completa de contactos y leads",
            "✅ Pipeline de ventas personalizable por etapas",
            "✅ Automatización de tareas y recordatorios",
            "✅ Reportes avanzados y dashboards ejecutivos",
            "✅ Integración completa con email marketing",
            "✅ Sistema de seguimiento de oportunidades",
            "✅ Gestión de documentos y archivos",
            "✅ Calendario integrado con citas y reuniones",
            "✅ Sistema de notificaciones inteligentes",
            "✅ Integración con redes sociales y WhatsApp",
            "✅ Analytics de rendimiento de ventas",
            "✅ Módulo de servicio al cliente integrado"
          ],
          price: "Desde $1,899",
          duration: "5-7 semanas",
          includes: ["CRM completamente personalizado", "Integración con sistemas existentes", "Capacitación completa del equipo", "Migración de datos incluida", "Hosting dedicado 1 año", "Soporte técnico especializado 120 días", "Manual de usuario personalizado"]
        }
      ]
    },
    {
      title: "Sistemas ERP",
      description: "Sistemas ERP completos con diferentes versiones según el tamaño de tu empresa. Elige la versión que mejor se adapte a las necesidades de tu organización",
      icon: "🏢",
      products: [
        {
          name: "ERP SOFT - VERSIÓN EMPRENDEDORA",
          description: "Sistema ERP básico diseñado específicamente para empresas emergentes de 1-5 personas. Proporciona las herramientas esenciales para gestionar inventario, ventas, finanzas y contabilidad de manera eficiente y profesional.",
          features: [
            "✅ Sistema de Inventario y Valorización completo",
            "✅ Sistema de Ventas y Facturación electrónica",
            "✅ Sistema de Cuentas por Pagar y Cobrar",
            "✅ Sistema de Caja y Bancos integrado",
            "✅ Sistema de Planillas básico",
            "✅ Sistema de Contabilidad general",
            "✅ Reportes financieros básicos",
            "✅ Backup automático de datos",
            "✅ Interfaz intuitiva y fácil de usar",
            "✅ Soporte técnico especializado"
          ],
          price: "Desde $2,999",
          duration: "6-8 semanas",
          includes: ["ERP completo personalizado", "Capacitación del equipo completo", "Migración de datos incluida", "Hosting dedicado 1 año", "Soporte técnico 90 días", "Actualizaciones y mejoras 1 año", "Manual de usuario detallado"],
          personas: "01 - 05 personas"
        },
        {
          name: "ERP SOFT - VERSIÓN MYPE",
          description: "Sistema ERP intermedio para empresas en crecimiento de 5-10 personas. Incluye funcionalidades avanzadas de logística, punto de ventas y gestión de procesos comerciales para optimizar las operaciones empresariales.",
          features: [
            "✅ Todo lo incluido en la versión Emprendedora",
            "✅ Sistema de Logística y distribución",
            "✅ Punto de Ventas (POS) integrado",
            "✅ Sistema de Cotizaciones avanzado",
            "✅ Sistema de Pedidos y seguimiento",
            "✅ Sistema de Flujo de Caja detallado",
            "✅ Dashboard ejecutivo con KPIs",
            "✅ Integración con bancos",
            "✅ Reportes gerenciales avanzados",
            "✅ Sistema de alertas automáticas"
          ],
          price: "Desde $4,499",
          duration: "8-10 semanas",
          includes: ["ERP intermedio completo", "Módulos adicionales especializados", "Capacitación extendida del equipo", "Integración con sistemas externos", "Hosting empresarial 1 año", "Soporte técnico 120 días", "Actualizaciones 1 año", "Consultoría de procesos"],
          personas: "05 - 10 personas"
        },
        {
          name: "ERP SOFT - VERSIÓN PYME",
          description: "Sistema ERP avanzado para empresas establecidas de 10-15 personas. Incluye módulos especializados para importaciones, gestión financiera avanzada y herramientas de análisis empresarial para toma de decisiones estratégicas.",
          features: [
            "✅ Todo lo incluido en la versión MYPE",
            "✅ Sistema de cuadro comparativo de proveedores",
            "✅ Sistema de Importaciones completo",
            "✅ Sistema de Emisión de Letras",
            "✅ Sistema de Fondos Fijos",
            "✅ Sistema de Cheque Voucher's",
            "✅ Analytics empresarial avanzado",
            "✅ Integración con sistemas contables",
            "✅ Módulo de compliance fiscal",
            "✅ Sistema de auditoría integrado"
          ],
          price: "Desde $6,999",
          duration: "10-12 semanas",
          includes: ["ERP avanzado completo", "Módulos especializados", "Capacitación completa ejecutiva", "Integración con sistemas contables", "Hosting empresarial premium 1 año", "Soporte técnico especializado 180 días", "Actualizaciones y mejoras 2 años", "Consultoría estratégica incluida"],
          personas: "10 - 15 personas"
        },
        {
          name: "ERP SOFT - VERSIÓN INTEGRAL",
          description: "Sistema ERP completo y empresarial para organizaciones de 15+ personas. Incluye todos los módulos disponibles: control de calidad, gestión de proyectos, presupuestos, contratos y producción. La solución más completa para empresas que buscan digitalización total.",
          features: [
            "✅ Todo lo incluido en la versión PYME",
            "✅ Sistema Control de Calidad (Aseguramiento)",
            "✅ Control Patrimonial (Activo Fijo)",
            "✅ Sistema de Proyectos y Obras",
            "✅ Sistema de Presupuestos (General/Obra)",
            "✅ SIG. Sistema de Información Gerencial",
            "✅ Sistema de Contratos",
            "✅ Sistema de Servicio al Cliente",
            "✅ Sistema de Producción completo",
            "✅ Business Intelligence avanzado",
            "✅ Integración con IoT y sensores",
            "✅ API completa para integraciones"
          ],
          price: "Desde $9,999",
          duration: "12-16 semanas",
          includes: ["ERP integral completo", "Todos los módulos disponibles", "Capacitación ejecutiva completa", "Integración con todos los sistemas", "Hosting empresarial premium 1 año", "Soporte técnico prioritario 365 días", "Actualizaciones y mejoras 3 años", "Consultoría estratégica completa", "Sistema de backup y recuperación", "Certificación de procesos"],
          personas: "15+ personas"
        }
      ]
    }
  ];

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleWhatsAppContact = (productName) => {
    const phone = '51947726382';
    const message = `¡Hola! 👋

Estoy interesado en el producto: ${productName}

¿Podrían contactarme para brindarme información detallada y una cotización?

¡Gracias! 😊`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO 
        title="Productos de Desarrollo - INGENIUM SOFT"
        description="Descubre nuestros productos: páginas web, aplicaciones fullstack, CRM personalizado y sistemas ERP completos. Soluciones tecnológicas para empresas de todos los tamaños."
        keywords="páginas web, landing page, e-commerce, tienda virtual, CRM, ERP, desarrollo de software, aplicaciones web, sistemas empresariales"
        ogUrl="https://software-ingeniun.netlify.app/productos"
      />
      <div className="min-h-screen bg-white pt-4 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements - Menos opacidad para mejor legibilidad */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-darkBlue-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-accent-500 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Efectos Three.js - Lazy loading para mejor rendimiento */}
        <Suspense fallback={null}>
          <UniversalEffects intensity={1.2} particleCount={250} colorScheme="corporate" />
          <ServicesParticles />
          <AdvancedServicesEffects />
          <AdvancedServicesVisualEffects />
          <InteractiveServiceElements />
        </Suspense>
          
        {/* Glass Morphism Pattern - Reducido para mejor legibilidad */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
         {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
         <div className="text-center mb-8 sm:mb-12 px-4 relative z-20 group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
           {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
           <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
           <div className="relative z-10 py-12 sm:py-14 lg:py-16 px-1 sm:px-2">
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl">
               Nuestros Productos
             </h2>
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary-700 max-w-5xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
               Soluciones tecnológicas completas: páginas web, aplicaciones fullstack, CRM personalizado y sistemas ERP para empresas de todos los tamaños
             </p>
           </div>
         </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 px-4">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className={`backdrop-blur-xl rounded-xl shadow-corporate border p-6 sm:p-8 ${
                  categoryIndex === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400' : // Páginas Web - Azul claro
                  categoryIndex === 1 ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-400' : // E-commerce - Verde
                  categoryIndex === 2 ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 text-white' : // CRM - Azul oscuro
                  'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-400' // ERP - Naranja claro
                }`}
              >
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-corporate ${
                    categoryIndex === 0 ? 'bg-blue-500' : // Páginas Web - Azul claro
                    categoryIndex === 1 ? 'bg-green-500' : // E-commerce - Verde
                    categoryIndex === 2 ? 'bg-slate-600' : // CRM - Azul oscuro
                    'bg-orange-500' // ERP - Naranja claro
                  }`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-['Montserrat'] tracking-tight ${
                    categoryIndex === 2 ? 'text-white' : 'text-gray-900' // CRM tiene fondo oscuro
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`text-lg sm:text-xl md:text-2xl font-['Poppins'] leading-relaxed font-medium ${
                    categoryIndex === 2 ? 'text-gray-200' : 'text-gray-700' // CRM tiene fondo oscuro
                  }`}>
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={productIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (productIndex * 0.1) }}
                      className={`backdrop-blur-xl rounded-xl p-8 shadow-corporate border hover:shadow-corporate-xl transition-all duration-500 cursor-pointer group h-full transform hover:scale-105 hover:-translate-y-2 ${
                        categoryIndex === 0 ? 'bg-blue-50 border-blue-300 hover:bg-blue-200 hover:border-blue-500 hover:shadow-blue-500/25' : // Páginas Web - Azul claro
                        categoryIndex === 1 ? 'bg-green-50 border-green-300 hover:bg-green-200 hover:border-green-500 hover:shadow-green-500/25' : // E-commerce - Verde
                        categoryIndex === 2 ? 'bg-slate-100 border-slate-400 hover:bg-slate-300 hover:border-slate-600 hover:shadow-slate-500/25' : // CRM - Azul oscuro
                        'bg-orange-50 border-orange-300 hover:bg-orange-200 hover:border-orange-500 hover:shadow-orange-500/25' // ERP - Naranja claro
                      }`}
                      onClick={() => handleOpenModal(product)}
                    >
                      <div className="text-center h-full flex flex-col">
                        <h4 className={`text-2xl sm:text-3xl font-black mb-4 font-['Montserrat'] transition-all duration-500 leading-tight group-hover:scale-110 group-hover:drop-shadow-lg ${
                          categoryIndex === 0 ? 'text-blue-700 group-hover:text-blue-900 group-hover:drop-shadow-blue-500/50' : // Páginas Web - Azul claro
                          categoryIndex === 1 ? 'text-green-700 group-hover:text-green-900 group-hover:drop-shadow-green-500/50' : // E-commerce - Verde
                          categoryIndex === 2 ? 'text-slate-700 group-hover:text-slate-900 group-hover:drop-shadow-slate-500/50' : // CRM - Azul oscuro
                          'text-orange-700 group-hover:text-orange-900 group-hover:drop-shadow-orange-500/50' // ERP - Naranja claro
                        }`}>
                          {product.name}
                        </h4>
                        <p className="text-lg text-secondary-700 mb-4 font-['Poppins'] leading-relaxed flex-grow">
                          {product.description}
                        </p>
                        
                        {/* Mostrar información de personas solo para ERP */}
                        {categoryIndex === 3 && product.personas && (
                          <div className="mb-4">
                            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-200 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                              <span className="text-sm font-bold text-orange-700 mr-2 group-hover:text-orange-800 transition-colors duration-500">👥</span>
                              <span className="text-sm font-bold text-orange-700 group-hover:text-orange-800 transition-colors duration-500">{product.personas}</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-3 mb-6">
                          {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className={`text-base font-['Poppins'] text-left font-medium transition-all duration-500 group-hover:translate-x-2 group-hover:scale-105 ${
                              categoryIndex === 0 ? 'text-secondary-700 group-hover:text-blue-700 group-hover:font-bold' : // Páginas Web - Azul claro
                              categoryIndex === 1 ? 'text-secondary-700 group-hover:text-green-700 group-hover:font-bold' : // E-commerce - Verde
                              categoryIndex === 2 ? 'text-secondary-700 group-hover:text-slate-700 group-hover:font-bold' : // CRM - Azul oscuro
                              'text-secondary-700 group-hover:text-orange-700 group-hover:font-bold' // ERP - Naranja claro
                            }`}>
                              {feature}
                            </div>
                          ))}
                          {product.features.length > 4 && (
                            <div className={`text-base font-bold font-['Poppins'] rounded-lg py-2 px-3 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg ${
                              categoryIndex === 0 ? 'text-blue-600 bg-blue-100 group-hover:bg-blue-200 group-hover:text-blue-800 group-hover:shadow-blue-500/25' : // Páginas Web - Azul claro
                              categoryIndex === 1 ? 'text-green-600 bg-green-100 group-hover:bg-green-200 group-hover:text-green-800 group-hover:shadow-green-500/25' : // E-commerce - Verde
                              categoryIndex === 2 ? 'text-slate-600 bg-slate-200 group-hover:bg-slate-300 group-hover:text-slate-800 group-hover:shadow-slate-500/25' : // CRM - Azul oscuro
                              'text-orange-600 bg-orange-100 group-hover:bg-orange-200 group-hover:text-orange-800 group-hover:shadow-orange-500/25' // ERP - Naranja claro
                            }`}>
                              +{product.features.length - 4} características más
                            </div>
                          )}
                        </div>

                        <div className={`border-t pt-6 mt-auto ${
                          categoryIndex === 0 ? 'border-blue-200' : // Páginas Web - Azul claro
                          categoryIndex === 1 ? 'border-green-200' : // E-commerce - Verde
                          categoryIndex === 2 ? 'border-slate-300' : // CRM - Azul oscuro
                          'border-orange-200' // ERP - Naranja claro
                        }`}>
                          <div className={`text-3xl font-black mb-3 font-['Montserrat'] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg ${
                            categoryIndex === 0 ? 'text-blue-600 group-hover:text-blue-800 group-hover:drop-shadow-blue-500/50' : // Páginas Web - Azul claro
                            categoryIndex === 1 ? 'text-green-600 group-hover:text-green-800 group-hover:drop-shadow-green-500/50' : // E-commerce - Verde
                            categoryIndex === 2 ? 'text-slate-600 group-hover:text-slate-800 group-hover:drop-shadow-slate-500/50' : // CRM - Azul oscuro
                            'text-orange-600 group-hover:text-orange-800 group-hover:drop-shadow-orange-500/50' // ERP - Naranja claro
                          }`}>
                            {product.price}
                          </div>
                          <div className={`text-base font-['Poppins'] mb-6 font-medium transition-all duration-500 group-hover:scale-105 group-hover:font-bold ${
                            categoryIndex === 0 ? 'text-secondary-600 group-hover:text-blue-600' : // Páginas Web - Azul claro
                            categoryIndex === 1 ? 'text-secondary-600 group-hover:text-green-600' : // E-commerce - Verde
                            categoryIndex === 2 ? 'text-secondary-600 group-hover:text-slate-600' : // CRM - Azul oscuro
                            'text-secondary-600 group-hover:text-orange-600' // ERP - Naranja claro
                          }`}>
                            ⏱️ Entrega: {product.duration}
                          </div>
                          <div className="flex flex-col gap-2">
                            <button
                              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 hover:border-2 hover:border-green-300 font-['Poppins'] text-base"
                              onClick={(e) => {
                                e.stopPropagation();
                                const phone = '51947726382';
                                const message = `¡Hola! 👋 Me interesa el producto "${product.name}" de INGENIUM SOFT

📦 Producto: ${product.name}
💰 Precio: ${product.price}
⏱️ Entrega: ${product.duration}

Me gustaría obtener más información y una cotización personalizada.

¿Podrían contactarme?

¡Gracias! 😊`;
                                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                              }}
                            >
                              💬 Cotizar por WhatsApp
                            </button>
                            <button
                              className={`w-full text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl font-['Poppins'] text-base ${
                                categoryIndex === 0 ? 'bg-blue-500 hover:bg-blue-700 hover:shadow-blue-500/50 hover:border-2 hover:border-blue-300' : // Páginas Web - Azul claro
                                categoryIndex === 1 ? 'bg-green-600 hover:bg-green-800 hover:shadow-green-600/50 hover:border-2 hover:border-green-400' : // E-commerce - Verde
                                categoryIndex === 2 ? 'bg-slate-600 hover:bg-slate-800 hover:shadow-slate-500/50 hover:border-2 hover:border-slate-400' : // CRM - Azul oscuro
                                'bg-orange-500 hover:bg-orange-700 hover:shadow-orange-500/50 hover:border-2 hover:border-orange-300' // ERP - Naranja claro
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenModal(product);
                              }}
                            >
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal para detalles del producto */}
        {modalOpen && selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full relative border border-primary-200 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-secondary-500 hover:text-darkBlue-900 transition-colors duration-200"
                onClick={handleCloseModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-darkBlue-900 mb-3 font-['Montserrat']">
                  {selectedProduct.name}
                </h3>
                <p className="text-secondary-600 font-['Poppins'] leading-relaxed mb-4">
                  {selectedProduct.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="bg-primary-100 rounded-lg p-4 flex-1">
                    <div className="text-primary-600 font-semibold mb-1 font-['Poppins']">💰 Precio</div>
                    <div className="text-2xl font-bold text-darkBlue-900 font-['Montserrat']">
                      {selectedProduct.price}
                    </div>
                  </div>
                  <div className="bg-accent-100 rounded-lg p-4 flex-1">
                    <div className="text-accent-600 font-semibold mb-1 font-['Poppins']">⏱️ Tiempo de Entrega</div>
                    <div className="text-lg font-bold text-darkBlue-900 font-['Montserrat']">
                      {selectedProduct.duration}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-darkBlue-900 mb-3 font-['Montserrat']">
                  ✨ Características Incluidas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-secondary-600 font-['Poppins']">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-darkBlue-900 mb-3 font-['Montserrat']">
                  📦 Lo que Incluye
                </h4>
                <div className="space-y-2">
                  {selectedProduct.includes.map((item, index) => (
                    <div key={index} className="flex items-center text-secondary-600 font-['Poppins']">
                      <span className="mr-2 text-primary-500">🎯</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-['Poppins']"
                  onClick={() => handleWhatsAppContact(selectedProduct.name)}
                >
                  💬 Cotizar por WhatsApp
                </button>
                <button
                  className="flex-1 bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-['Poppins']"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
