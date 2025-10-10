import React, { useState, useRef, lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

// Lazy load efectos Three.js para reducir bundle inicial
const AboutParticles = lazy(() => import('../components/AboutParticles'));
const AdvancedBlogEffects = lazy(() => import('../components/AdvancedBlogEffects'));
const UniversalEffects = lazy(() => import('../components/UniversalEffects'));

const initialBlogPosts = [
  {
    id: 1,
    title: '🚀 Cómo Aumentar las Ventas de tu Empresa con una Página Web Moderna',
    excerpt: 'Descubre las estrategias probadas que están usando las empresas más exitosas para multiplicar sus ventas con una presencia web profesional y moderna.',
    date: '15 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Crecimiento Empresarial',
    image: '/images/blog-images/tendencias-web.png',
    readTime: '5 min',
    tags: ['Ventas', 'Empresa', 'Web', 'Crecimiento'],
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>💰 La Página Web: Tu Mejor Vendedor 24/7</h2>
        <p>¿Sabías que una página web profesional puede aumentar las ventas de tu empresa hasta un <strong>300%</strong>? En la era digital, tu sitio web es el primer contacto que tienen tus clientes potenciales con tu negocio, y puede ser la diferencia entre el éxito y el fracaso.</p>
        
        <h3>🎯 Por Qué Tu Empresa Necesita una Web Moderna</h3>
        <p>El <strong>85% de los consumidores</strong> investiga en internet antes de comprar. Si tu empresa no tiene presencia digital, estás perdiendo clientes valiosos. Una página web moderna no solo te da credibilidad, sino que funciona como tu mejor vendedor, trabajando las 24 horas del día.</p>
        
        <h3>📈 Casos de Éxito Reales</h3>
        <p>Empresas que implementaron páginas web profesionales han visto aumentos del <strong>250% en sus ventas</strong> en solo 6 meses. Desde restaurantes locales hasta empresas de servicios, la presencia digital está transformando negocios de todos los tamaños.</p>
        
        <h3>🚀 Estrategias que Funcionan</h3>
        <p>Una página web efectiva incluye: <strong>diseño atractivo</strong>, <strong>velocidad de carga rápida</strong>, <strong>formularios de contacto</strong>, y <strong>testimonios de clientes</strong>. Estos elementos trabajan juntos para convertir visitantes en clientes fieles.</p>
        
        <h3>💡 El ROI de Invertir en tu Web</h3>
        <p>El retorno de inversión en una página web profesional es inmediato. Mientras que un vendedor puede atender a unos pocos clientes por día, tu web puede atender a <strong>cientos o miles</strong> simultáneamente, multiplicando tus oportunidades de venta.</p>
      </div>
    `
  },
  {
    id: 2,
    title: '🤖 Automatiza tu Empresa con IA: Ahorra Tiempo y Dinero',
    excerpt: 'Descubre cómo la Inteligencia Artificial puede revolucionar tu negocio, automatizando procesos y aumentando la productividad hasta un 400%.',
    date: '10 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Automatización Empresarial',
    image: '/images/blog-images/IA-SOFTWARE.jpg',
    readTime: '6 min',
    tags: ['IA', 'Automatización', 'Productividad', 'Ahorro'],
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>💰 La IA: Tu Aliada para Ahorrar Tiempo y Dinero</h2>
        <p>¿Sabías que las empresas que implementan IA ahorran hasta <strong>$50,000 anuales</strong> en costos operativos? La Inteligencia Artificial no es solo para grandes corporaciones, también puede transformar tu pequeña o mediana empresa.</p>
        
        <h3>🤖 Automatización que Funciona</h3>
        <p>La IA puede automatizar tareas repetitivas como <strong>atención al cliente</strong>, <strong>procesamiento de pedidos</strong>, y <strong>análisis de datos</strong>. Esto libera a tu equipo para enfocarse en tareas más estratégicas y creativas.</p>
        
        <h3>📊 Casos Reales de Éxito</h3>
        <p>Una empresa de servicios logró reducir sus costos operativos en <strong>60%</strong> implementando chatbots de IA para atención al cliente. Otra empresa automatizó su inventario y aumentó la eficiencia en <strong>300%</strong>.</p>
        
        <h3>🚀 Implementación Simple</h3>
        <p>No necesitas ser un experto en tecnología. Las herramientas de IA modernas son <strong>fáciles de usar</strong> y se integran perfectamente con tus sistemas existentes. En solo semanas puedes ver resultados tangibles.</p>
        
        <h3>💡 ROI Inmediato</h3>
        <p>El retorno de inversión en IA es rápido y medible. Desde <strong>ahorro en costos laborales</strong> hasta <strong>aumento en ventas</strong>, la IA se paga sola en pocos meses y genera beneficios a largo plazo.</p>
      </div>
    `
  },
  {
    id: 3,
    title: '📊 Organiza tu Información: Bases de Datos que Impulsan tu Negocio',
    excerpt: 'Aprende cómo organizar y gestionar la información de tu empresa para tomar mejores decisiones y aumentar la eficiencia hasta un 200%.',
    date: '5 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Gestión Empresarial',
    image: '/images/blog-images/Optimizar-Base-Dato.jpg',
    readTime: '4 min',
    tags: ['Datos', 'Organización', 'Eficiencia', 'Decisiones'],
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>📈 Transforma tu Empresa con Datos Organizados</h2>
        <p>¿Sabías que las empresas con datos bien organizados toman decisiones <strong>3 veces más rápidas</strong> y aumentan sus ganancias hasta un <strong>200%</strong>? La organización de información es la clave del éxito empresarial moderno.</p>
        
        <h3>🎯 Por Qué Organizar tus Datos es Crucial</h3>
        <p>Sin datos organizados, tu empresa funciona "a ciegas". Un sistema de gestión de información te permite <strong>rastrear ventas</strong>, <strong>analizar clientes</strong>, y <strong>predecir tendencias</strong> para tomar decisiones inteligentes.</p>
        
        <h3>💰 Casos de Éxito Reales</h3>
        <p>Una empresa de retail logró aumentar sus ventas en <strong>180%</strong> organizando su inventario con un sistema de datos. Otra empresa redujo sus costos operativos en <strong>40%</strong> automatizando el seguimiento de clientes.</p>
        
        <h3>🚀 Implementación Paso a Paso</h3>
        <p>No necesitas ser un experto en tecnología. Comienza organizando <strong>información de clientes</strong>, <strong>inventario</strong>, y <strong>ventas</strong>. Un sistema simple puede transformar completamente tu negocio en semanas.</p>
        
        <h3>💡 Beneficios Inmediatos</h3>
        <p>Con datos organizados podrás: <strong>identificar tus mejores clientes</strong>, <strong>optimizar inventario</strong>, <strong>reducir costos</strong>, y <strong>aumentar ventas</strong>. Es la inversión más rentable que puede hacer tu empresa.</p>
      </div>
    `
  }
];

const fallbackPosts = [
  {
    id: 4,
    title: '📱 Atrae Más Clientes con Marketing Digital: Estrategias que Funcionan',
    excerpt: 'Descubre las técnicas de marketing digital que están usando las empresas más exitosas para atraer clientes y aumentar sus ventas hasta un 500%.',
    date: '28 de Febrero, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Marketing Digital',
    image: '/images/blog-images/marketing-empresas.jpg',
    readTime: '5 min',
    tags: ['Marketing', 'Clientes', 'Ventas', 'Digital'],
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>🎯 Marketing Digital: Tu Arma Secreta para Atraer Clientes</h2>
        <p>¿Sabías que las empresas que usan marketing digital efectivo aumentan sus ventas hasta un <strong>500%</strong>? En la era digital, el marketing tradicional ya no es suficiente. Necesitas estrategias digitales que realmente funcionen.</p>
        
        <h3>📱 Redes Sociales que Generan Ventas</h3>
        <p>Facebook, Instagram y LinkedIn son tus mejores aliados para atraer clientes. Con <strong>contenido atractivo</strong> y <strong>estrategias específicas</strong>, puedes convertir seguidores en clientes fieles y aumentar tus ventas significativamente.</p>
        
        <h3>💰 Casos de Éxito Reales</h3>
        <p>Una empresa local logró aumentar sus ventas en <strong>300%</strong> usando Facebook Ads dirigidos. Otra empresa triplicó sus clientes con una estrategia de Instagram bien ejecutada. El marketing digital funciona cuando se hace correctamente.</p>
        
        <h3>🚀 Estrategias que Funcionan</h3>
        <p>No necesitas ser un experto en marketing. Con <strong>contenido de valor</strong>, <strong>interacción constante</strong>, y <strong>ofertas atractivas</strong>, puedes construir una comunidad de clientes leales que compren repetidamente.</p>
        
        <h3>💡 ROI Inmediato</h3>
        <p>El marketing digital tiene un retorno de inversión medible y rápido. Desde <strong>aumento en ventas</strong> hasta <strong>mejor reconocimiento de marca</strong>, cada estrategia digital se traduce en beneficios tangibles para tu negocio.</p>
      </div>
    `
  },
  {
    id: 5,
    title: '🔒 Protege tu Empresa: Seguridad Digital que Funciona',
    excerpt: 'Aprende las estrategias de seguridad digital que están usando las empresas más exitosas para proteger su información y evitar pérdidas millonarias.',
    date: '20 de Febrero, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Seguridad Empresarial',
    image: '/images/blog-images/seguridad-web.png',
    readTime: '6 min',
    tags: ['Seguridad', 'Protección', 'Empresa', 'Datos'],
    content: `
      <div className="prose prose-lg max-w-none">
        <h2>🛡️ Protege tu Empresa: Seguridad Digital que Funciona</h2>
        <p>¿Sabías que el <strong>60% de las empresas</strong> que sufren un ciberataque quiebran en 6 meses? La seguridad digital no es opcional, es una necesidad crítica para proteger tu negocio y la información de tus clientes.</p>
        
        <h3>🚨 Amenazas Reales que Afectan a las Empresas</h3>
        <p>Los ciberataques están aumentando <strong>300%</strong> cada año. Desde <strong>robo de datos</strong> hasta <strong>secuestro de información</strong>, las amenazas digitales pueden costar millones a tu empresa y destruir tu reputación.</p>
        
        <h3>💰 Costos Reales de la Inseguridad</h3>
        <p>Una empresa promedio pierde <strong>$4.5 millones</strong> por un ciberataque. Además de los costos directos, enfrentan <strong>multas legales</strong>, <strong>pérdida de clientes</strong>, y <strong>daño reputacional</strong> que puede ser irreversible.</p>
        
        <h3>🔒 Estrategias de Protección que Funcionan</h3>
        <p>No necesitas ser un experto en tecnología. Con <strong>contraseñas seguras</strong>, <strong>copias de seguridad</strong>, <strong>software actualizado</strong>, y <strong>capacitación del equipo</strong>, puedes proteger tu empresa de la mayoría de amenazas.</p>
        
        <h3>💡 Inversión Inteligente en Seguridad</h3>
        <p>Invertir en seguridad digital es <strong>100 veces más barato</strong> que recuperarse de un ataque. Una estrategia de seguridad bien implementada protege tu negocio y da confianza a tus clientes.</p>
      </div>
    `
  }
];

const NEWS_API_URL = 'https://newsdata.io/api/1/news?apikey=pub_42094e7e2e2e4b6b8e7e7e7e7e7e7e7e7e7e7&q=mining%20accident%20accidente%20mina%20safety%20seguridad&language=es,en';

const Blog = () => {
  // Detectar si es móvil
  const isMobile = window.innerWidth < 768;
  
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const errorImages = useRef({});

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      if (data.results && Array.isArray(data.results) && data.results.length > 0) {
        const newPosts = data.results.slice(0, 6).map((item, idx) => ({
          id: `api-${item.link || item.title || idx}`,
          title: item.title,
          excerpt: item.description || item.content || '',
          date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' }) : '',
          author: item.source_id || 'Fuente externa',
          category: 'Noticia Minera',
          image: item.image_url || '/images/blog-sst.jpg',
          readTime: '5 min',
          tags: ['Minería', 'Accidentes', 'SST']
        }));
        setBlogPosts(prev => [...prev, ...newPosts]);
      } else {
        setBlogPosts(prev => [...prev, ...fallbackPosts]);
        setError('No se encontraron más artículos en la API. Mostrando artículos destacados.');
      }
    } catch (err) {
      setBlogPosts(prev => [...prev, ...fallbackPosts]);
      setError('Error al cargar noticias externas. Mostrando artículos destacados.');
    }
    setLoading(false);
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <>
      <SEO 
        title="Blog - INGENIUM SOFT"
        description="Descubre las últimas tendencias en desarrollo de software, tecnología y negocios digitales. Artículos sobre desarrollo web, IA, bases de datos y más."
        keywords="blog ingenium soft, desarrollo de software, tendencias tecnológicas, inteligencia artificial, bases de datos, seguridad informática"
        ogUrl="https://software-ingeniun.netlify.app/blog"
      />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Three.js Particles for Blog - Solo en desktop */}
      {/* Efectos Three.js - Solo en desktop con lazy loading */}
      {!isMobile && (
        <Suspense fallback={null}>
          <UniversalEffects intensity={0.9} particleCount={180} colorScheme="blue" />
          <AboutParticles />
          <AdvancedBlogEffects />
        </Suspense>
      )}
      
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-darkBlue-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-500 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-accent-500 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Glass Morphism Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Cabecera mejorada: más abajo y contenedor más estrecho */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 px-4 group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Fondo más estrecho horizontalmente para ver más efectos 3D */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -mx-2 sm:-mx-3 transition-all duration-500 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-xl"></div>
            <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-1 sm:px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-darkBlue-900 mb-2 font-['Montserrat'] tracking-tight drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:text-blue-800 group-hover:drop-shadow-2xl pt-24 sm:pt-28 scroll-mt-32">
                Blog INGENIUM SOFT
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 max-w-4xl mx-auto font-['Poppins'] leading-relaxed font-medium transition-all duration-500 group-hover:text-gray-800 group-hover:scale-102">
                Descubre las últimas tendencias en desarrollo de software, tecnología y negocios digitales.
              </p>
              <div className="w-20 sm:w-24 h-1 bg-primary-500 mx-auto rounded-full mt-3 sm:mt-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600"></div>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {blogPosts.map((post, idx) => {
              const key = typeof post.id === 'string' ? post.id : `local-${post.id}`;
              return (
                <motion.div 
                  key={key} 
                  className="bg-white backdrop-blur-xl rounded-corporate-lg shadow-corporate-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-corporate-2xl border border-primary-200 relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  {/* Efecto de brillo animado */}
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover object-center rounded-t-corporate-lg shadow-md group-hover:scale-110 transition-transform duration-500"
                      onError={e => {
                        if (!errorImages.current[key]) {
                          errorImages.current[key] = true;
                          e.target.src = '/images/blog-sst.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-primary-500/10 rounded-t-corporate-lg"></div>
                    
                    {/* Overlay con información */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-bold text-white bg-primary-500 rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 text-xs font-bold text-white bg-accent-500 rounded-full shadow-lg">
                        {post.readTime}
                      </span>
                    </div>
                    </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-darkBlue-900 mb-3 whitespace-normal break-words font-['Montserrat'] group-hover:text-primary-600 transition-colors duration-300">{post.title}</h3>
                    <p className="text-secondary-600 mb-4 font-['Poppins'] leading-relaxed">{post.excerpt}</p>
                    
                    {/* Tags con colores sólidos */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.map((tag, index) => {
                        const tagColors = [
                          'bg-primary-500',
                          'bg-accent-500',
                          'bg-darkBlue-500',
                          'bg-secondary-500'
                        ];
                        const colorClass = tagColors[index % tagColors.length];
                        return (
                          <span key={index} className={`px-3 py-1 text-xs font-bold text-white ${colorClass} rounded-full shadow-lg`}>
                          #{tag}
                        </span>
                        );
                      })}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center mr-3 shadow-lg">
                          <span className="text-white text-lg">👤</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-darkBlue-900 font-['Poppins']">{post.author}</p>
                          <p className="text-xs text-secondary-500 font-['Poppins']">{post.date}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleReadMore(post)}
                        className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-600 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 font-['Montserrat']"
                      >
                        Leer más →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-corporate-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-bold shadow-corporate-xl hover:shadow-corporate-2xl transform hover:scale-105 font-['Montserrat'] relative overflow-hidden group"
              onClick={handleLoadMore}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Cargando...
                  </>
                ) : (
                  <>
                    <span>Ver más artículos</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </span>
            </motion.button>
            {error && <p className="mt-4 text-red-400 font-['Poppins'] bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">{error}</p>}
          </motion.div>
        </div>
      </div>

      {/* Modal para mostrar contenido completo */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div 
            className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-corporate-lg shadow-corporate-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">📝</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-['Montserrat']">{selectedPost.title}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-white/70 font-['Poppins']">{selectedPost.author}</span>
                    <span className="text-sm text-white/70 font-['Poppins']">{selectedPost.date}</span>
                    <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                      {selectedPost.category}
                    </span>
          </div>
        </div>
      </div>
              <button 
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {selectedPost.content ? (
                <div 
                  className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-white/90 prose-strong:text-cyan-400 prose-h2:text-2xl prose-h3:text-xl"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-3xl">📄</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-['Montserrat']">Contenido no disponible</h3>
                  <p className="text-white/70 font-['Poppins']">Este artículo no tiene contenido completo disponible.</p>
                </div>
              )}
            </div>

            {/* Footer del modal */}
            <div className="flex items-center justify-between p-6 border-t border-white/20 bg-gradient-to-r from-white/5 to-white/10">
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags && selectedPost.tags.map((tag, index) => {
                  const tagColors = [
                    'from-cyan-500 to-blue-600',
                    'from-purple-500 to-pink-600',
                    'from-emerald-500 to-teal-600',
                    'from-orange-500 to-red-600',
                    'from-yellow-500 to-orange-600'
                  ];
                  const colorClass = tagColors[index % tagColors.length];
                  return (
                    <span key={index} className={`px-3 py-1 text-xs font-bold text-white bg-gradient-to-r ${colorClass} rounded-full shadow-lg`}>
                      #{tag}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white/70 font-['Poppins']">Tiempo de lectura: {selectedPost.readTime}</span>
                <button 
                  onClick={handleCloseModal}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-6 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 font-['Montserrat']"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Blog; 