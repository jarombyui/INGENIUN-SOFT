import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://software-ingeniun.netlify.app/images/Ingeniumsoft_ultimo.png",
  ogUrl,
  ogType = "website"
}) => {
  const defaultTitle = "INGENIUM SOFT - Soluciones Tecnológicas Empresariales";
  const defaultDescription = "Transforma tu negocio con soluciones de software personalizadas. Desarrollo web, aplicaciones móviles y sistemas de gestión empresarial.";
  const defaultKeywords = "software empresarial, desarrollo web, aplicaciones móviles, sistemas de gestión, consultoría tecnológica, INGENIUM SOFT";

  return (
    <Helmet>
      <title>{title ? `${title} | INGENIUM SOFT` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={ogUrl || "https://software-ingeniun.netlify.app"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="INGENIUM SOFT" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ingeniumsoft" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl || "https://software-ingeniun.netlify.app"} />
    </Helmet>
  );
};

export default SEO; 