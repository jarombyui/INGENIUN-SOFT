import React from 'react';

const ImpressiveColorScheme = () => {
  const impressiveColors = {
    // Colores principales impresionantes
    primary: {
      50: '#E3F2FD',   // Azul cielo claro
      100: '#BBDEFB',  // Azul cielo
      200: '#90CAF9',  // Azul cielo medio
      300: '#64B5F6',  // Azul cielo
      400: '#42A5F5',  // Azul cielo
      500: '#2196F3',  // Azul principal
      600: '#1E88E5',  // Azul oscuro
      700: '#1976D2',  // Azul más oscuro
      800: '#1565C0',  // Azul muy oscuro
      900: '#0D47A1'   // Azul profundo
    },
    
    secondary: {
      50: '#F3E5F5',   // Púrpura claro
      100: '#E1BEE7',  // Púrpura
      200: '#CE93D8',  // Púrpura medio
      300: '#BA68C8',  // Púrpura
      400: '#AB47BC',  // Púrpura
      500: '#9C27B0',  // Púrpura principal
      600: '#8E24AA',  // Púrpura oscuro
      700: '#7B1FA2',  // Púrpura más oscuro
      800: '#6A1B9A',  // Púrpura muy oscuro
      900: '#4A148C'   // Púrpura profundo
    },
    
    accent: {
      50: '#E8F5E8',   // Verde esmeralda claro
      100: '#C8E6C9',  // Verde esmeralda
      200: '#A5D6A7',  // Verde esmeralda medio
      300: '#81C784',  // Verde esmeralda
      400: '#66BB6A',  // Verde esmeralda
      500: '#4CAF50',  // Verde esmeralda principal
      600: '#43A047',  // Verde esmeralda oscuro
      700: '#388E3C',  // Verde esmeralda más oscuro
      800: '#2E7D32',  // Verde esmeralda muy oscuro
      900: '#1B5E20'   // Verde esmeralda profundo
    },
    
    success: {
      50: '#E0F2F1',   // Turquesa claro
      100: '#B2DFDB',  // Turquesa
      200: '#80CBC4',  // Turquesa medio
      300: '#4DB6AC',  // Turquesa
      400: '#26A69A',  // Turquesa
      500: '#009688',  // Turquesa principal
      600: '#00897B',  // Turquesa oscuro
      700: '#00796B',  // Turquesa más oscuro
      800: '#00695C',  // Turquesa muy oscuro
      900: '#004D40'   // Turquesa profundo
    },
    
    warning: {
      50: '#FFF3E0',   // Naranja dorado claro
      100: '#FFE0B2',  // Naranja dorado
      200: '#FFCC80',  // Naranja dorado medio
      300: '#FFB74D',  // Naranja dorado
      400: '#FFA726',  // Naranja dorado
      500: '#FF9800',  // Naranja dorado principal
      600: '#FB8C00',  // Naranja dorado oscuro
      700: '#F57C00',  // Naranja dorado más oscuro
      800: '#EF6C00',  // Naranja dorado muy oscuro
      900: '#E65100'   // Naranja dorado profundo
    },
    
    danger: {
      50: '#FFEBEE',   // Rosa magenta claro
      100: '#FFCDD2',  // Rosa magenta
      200: '#EF9A9A',  // Rosa magenta medio
      300: '#E57373',  // Rosa magenta
      400: '#EF5350',  // Rosa magenta
      500: '#F44336',  // Rosa magenta principal
      600: '#E53935',  // Rosa magenta oscuro
      700: '#D32F2F',  // Rosa magenta más oscuro
      800: '#C62828',  // Rosa magenta muy oscuro
      900: '#B71C1C'   // Rosa magenta profundo
    },
    
    // Colores especiales impresionantes
    gold: {
      50: '#FFFDE7',   // Dorado claro
      100: '#FFF9C4',  // Dorado
      200: '#FFF59D',  // Dorado medio
      300: '#FFF176',  // Dorado
      400: '#FFEE58',  // Dorado
      500: '#FFEB3B',  // Dorado principal
      600: '#FDD835',  // Dorado oscuro
      700: '#FBC02D',  // Dorado más oscuro
      800: '#F9A825',  // Dorado muy oscuro
      900: '#F57F17'   // Dorado profundo
    },
    
    silver: {
      50: '#FAFAFA',   // Plateado claro
      100: '#F5F5F5',  // Plateado
      200: '#EEEEEE',  // Plateado medio
      300: '#E0E0E0',  // Plateado
      400: '#BDBDBD',  // Plateado
      500: '#9E9E9E',  // Plateado principal
      600: '#757575',  // Plateado oscuro
      700: '#616161',  // Plateado más oscuro
      800: '#424242',  // Plateado muy oscuro
      900: '#212121'   // Plateado profundo
    },
    
    // Colores de gradiente impresionantes
    gradients: {
      ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      sunset: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      forest: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      fire: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      aurora: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      galaxy: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      neon: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
      cosmic: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      electric: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
      tropical: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  };

  return impressiveColors;
};

export default ImpressiveColorScheme;
