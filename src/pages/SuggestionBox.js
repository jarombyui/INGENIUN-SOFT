import React, { useState } from 'react';

const SuggestionBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    category: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu sugerencia! La revisaremos pronto.');
    setFormData({
      name: '',
      email: '',
      suggestion: '',
      category: 'general'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Buzón de Sugerencias
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tu opinión es importante para nosotros. Ayúdanos a mejorar nuestros servicios.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Categoría
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="general">General</option>
                <option value="cursos">Cursos</option>
                <option value="servicios">Servicios</option>
                <option value="soporte">Soporte Técnico</option>
              </select>
            </div>

            <div>
              <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">
                Tu Sugerencia
              </label>
              <textarea
                id="suggestion"
                name="suggestion"
                rows={4}
                value={formData.suggestion}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Enviar Sugerencia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox; 