import React, { useState, useRef } from 'react';

const initialBlogPosts = [
  {
    id: 1,
    title: 'Tendencias en Desarrollo Web 2024',
    excerpt: 'Descubre las últimas tecnologías y frameworks que están revolucionando el desarrollo web, desde React y Next.js hasta las nuevas APIs de navegador.',
    date: '15 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Desarrollo Web',
    image: '/images/blog-images/tendencias-web.png',
    readTime: '5 min',
    tags: ['Web', 'Tecnología', 'React', 'Next.js']
  },
  {
    id: 2,
    title: 'Inteligencia Artificial en el Desarrollo de Software',
    excerpt: 'Cómo la IA está transformando la forma en que desarrollamos software, desde la generación de código hasta la optimización de procesos.',
    date: '10 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Inteligencia Artificial',
    image: '/images/blog-images/IA-SOFTWARE.jpg',
    readTime: '6 min',
    tags: ['IA', 'Desarrollo', 'Innovación', 'Tecnología']
  },
  {
    id: 3,
    title: 'Optimización de Bases de Datos para Empresas',
    excerpt: 'Estrategias y mejores prácticas para optimizar el rendimiento de tus bases de datos y mejorar la experiencia del usuario.',
    date: '5 de Marzo, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Bases de Datos',
    image: '/images/blog-images/Optimizar-Base-Dato.jpg',
    readTime: '4 min',
    tags: ['Bases de Datos', 'Optimización', 'Empresas', 'Rendimiento']
  }
];

const fallbackPosts = [
  {
    id: 4,
    title: 'Marketing Digital para Empresas de Software',
    excerpt: 'Estrategias efectivas para promocionar tu empresa de software y llegar a más clientes potenciales en el mundo digital.',
    date: '28 de Febrero, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Marketing Digital',
    image: '/images/blog-images/marketing-empresas.jpg',
    readTime: '5 min',
    tags: ['Marketing', 'Digital', 'Empresas', 'Software']
  },
  {
    id: 5,
    title: 'Seguridad en Aplicaciones Web',
    excerpt: 'Principales amenazas y mejores prácticas para proteger tus aplicaciones web y los datos de tus usuarios.',
    date: '20 de Febrero, 2024',
    author: 'Equipo Ingenium Soft',
    category: 'Seguridad',
    image: '/images/blog-images/seguridad-web.png',
    readTime: '6 min',
    tags: ['Seguridad', 'Web', 'Aplicaciones', 'Datos']
  }
];

const NEWS_API_URL = 'https://newsdata.io/api/1/news?apikey=pub_42094e7e2e2e4b6b8e7e7e7e7e7e7e7e7e7e7&q=mining%20accident%20accidente%20mina%20safety%20seguridad&language=es,en';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-['Montserrat'] tracking-wide">
            Blog INGENIUM SOFT
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
            Descubre las últimas tendencias en desarrollo de software, tecnología y negocios digitales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => {
            const key = typeof post.id === 'string' ? post.id : `local-${post.id}`;
            return (
              <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-t-xl shadow-md"
                    onError={e => {
                      if (!errorImages.current[key]) {
                        errorImages.current[key] = true;
                        e.target.src = '/images/blog-sst.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-t-xl"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime} de lectura</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-normal break-words font-['Montserrat']">{post.title}</h3>
                  <p className="text-gray-600 mb-4 font-['Poppins']">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags && post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        <span className="text-gray-500">👤</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 font-['Poppins']">{post.author}</p>
                        <p className="text-xs text-gray-500 font-['Poppins']">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary-dark transition-colors duration-300 font-semibold font-['Montserrat']">
                      Leer más →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-md hover:shadow-lg font-['Montserrat']"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Ver más artículos'}
          </button>
          {error && <p className="mt-4 text-red-500 font-['Poppins']">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Blog; 