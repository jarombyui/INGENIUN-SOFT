import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu Public Key
emailjs.init("AzFBOg4U8pNyIYUgb");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 