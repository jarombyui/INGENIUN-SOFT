import React, { useState, useEffect } from 'react';

const ImageTest = () => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageError, setImageError] = useState(null);

  useEffect(() => {
    const testImage = new Image();
    testImage.onload = () => {
      console.log('✅ Imagen ERP-Login cargada correctamente');
      setImageStatus('loaded');
    };
    testImage.onerror = (error) => {
      console.error('❌ Error cargando imagen ERP-Login:', error);
      setImageError('Error al cargar la imagen');
      setImageStatus('error');
    };
    testImage.src = '/images/ERP/erp-login.jpeg';
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Test de Imagen ERP-Login</h3>
      <div className="mb-4">
        <p><strong>Estado:</strong> {imageStatus}</p>
        {imageError && <p className="text-red-600"><strong>Error:</strong> {imageError}</p>}
      </div>
      
      {imageStatus === 'loaded' && (
        <div>
          <img 
            src="/images/ERP/erp-login.jpeg" 
            alt="ERP Login Test" 
            className="w-full h-64 object-cover rounded-lg"
            onError={(e) => {
              console.error('Error mostrando imagen:', e);
              setImageError('Error al mostrar la imagen');
            }}
          />
          <p className="text-green-600 mt-2">✅ Imagen cargada y mostrada correctamente</p>
        </div>
      )}
      
      {imageStatus === 'error' && (
        <div className="text-red-600">
          <p>❌ No se pudo cargar la imagen</p>
          <p className="text-sm">Ruta: /images/ERP/erp-login.jpeg</p>
        </div>
      )}
    </div>
  );
};

export default ImageTest;
