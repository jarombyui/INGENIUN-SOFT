import React, { useState, useRef } from 'react';

const initialBlogPosts = [
  {
    id: 1,
    title: 'Tragedia en mina de oro Séguéla: Un trabajador fallecido por explosión de extintor',
    excerpt: 'Un accidente mortal en la mina Séguéla, operada por Fortuna Mining, dejó un trabajador fallecido tras la explosión de un extintor durante labores de mantenimiento. El hecho resalta la importancia de protocolos rigurosos de SST en minería.',
    date: '25 de Febrero, 2025',
    author: 'Inspenet / Fortuna Mining',
    category: 'Accidentes Mineros',
    image: '/images/mina-zequele.jpg',
    readTime: '4 min',
    tags: ['Minería', 'Accidentes', 'SST', 'Seguridad']
  },
  {
    id: 2,
    title: 'Stilfontein, Sudáfrica: 87 mineros muertos tras meses de encierro',
    excerpt: 'Un enfrentamiento entre la policía y mineros ilegales en la mina de oro Stilfontein terminó con al menos 87 fallecidos. La falta de protocolos de seguridad y la negligencia de las autoridades agravaron la tragedia.',
    date: '16 de Enero, 2025',
    author: 'AP / BBC / Wikipedia',
    category: 'Desastre Minero',
    image: '/images/87-enciero-mineria.jpg',
    readTime: '6 min',
    tags: ['Minería', 'Sudáfrica', 'Accidentes', 'SST']
  },
  {
    id: 3,
    title: 'La falta de SST sigue costando vidas en la gran minería',
    excerpt: 'Expertos internacionales advierten que la ausencia de una cultura de Seguridad y Salud en el Trabajo (SST) sigue siendo la principal causa de accidentes fatales en grandes empresas mineras alrededor del mundo.',
    date: '23 de Abril, 2025',
    author: 'Equipo ISSEGUREX',
    category: 'Prevención',
    image: '/images/gran-mineria.jpg',
    readTime: '5 min',
    tags: ['SST', 'Prevención', 'Minería', 'Empresas']
  }
];

const fallbackPosts = [
  {
    id: 4,
    title: 'Explosión en mina de cobre en Chile deja varios heridos',
    excerpt: 'Un accidente en una mina de cobre en el norte de Chile dejó varios trabajadores heridos. La investigación apunta a fallas en los protocolos de seguridad.',
    date: '10 de Marzo, 2025',
    author: 'Agencia Reuters',
    category: 'Accidentes Mineros',
    image: '/images/chile-explosion.jpg',
    readTime: '3 min',
    tags: ['Minería', 'Chile', 'Accidentes', 'SST']
  },
  {
    id: 5,
    title: 'Colapso en mina de oro en Perú: consecuencias de la falta de SST',
    excerpt: 'El colapso de una galería en una mina de oro peruana evidenció la falta de supervisión y capacitación en seguridad, resultando en pérdidas humanas y económicas.',
    date: '2 de Febrero, 2025',
    author: 'El Comercio',
    category: 'Desastre Minero',
    image: '/images/derrumbe-peru.jpg',
    readTime: '4 min',
    tags: ['Minería', 'Perú', 'Accidentes', 'SST']
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
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog ISSEGUREX
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Noticias recientes y casos reales: la importancia de la Seguridad y Salud en el Trabajo (SST) en minería y grandes empresas.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-normal break-words">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary-dark transition-colors duration-300 font-semibold">
                      Leer más →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Ver más artículos'}
          </button>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Blog; 