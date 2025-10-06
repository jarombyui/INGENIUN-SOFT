import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const EffectsTest = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    console.log('🎯 Iniciando EffectsTest...');

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    console.log('✅ Renderer creado y añadido al DOM');

    // Crear una esfera simple para probar
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      wireframe: true 
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    console.log('✅ Esfera creada y añadida a la escena');

    // Posicionar la cámara
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    console.log('✅ Animación iniciada');

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('🧹 Limpiando EffectsTest...');
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ 
        background: 'rgba(255, 0, 0, 0.1)',
        border: '2px solid red'
      }}
    />
  );
};

export default EffectsTest;
