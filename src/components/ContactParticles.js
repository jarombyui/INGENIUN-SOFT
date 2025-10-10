import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ContactParticles = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Configuración de la escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configuración de la cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Configuración del renderer - Optimizado para rendimiento
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // Desactivado para mejor rendimiento
      powerPreference: "high-performance",
      precision: 'lowp'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limitado para mejor rendimiento
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Crear partículas para Contacto - Optimizado
    const particleCount = 70; // Reducido de 120 a 70
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Colores corporativos más vibrantes
    const color1 = new THREE.Color(0x3B82F6);
    const color2 = new THREE.Color(0x10B981);
    const color3 = new THREE.Color(0x8B5CF6);
    const color4 = new THREE.Color(0xF59E0B);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Posiciones aleatorias
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      // Colores aleatorios
      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.25) color = color1;
      else if (colorChoice < 0.5) color = color2;
      else if (colorChoice < 0.75) color = color3;
      else color = color4;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Tamaños variados
      sizes[i] = Math.random() * 2 + 1;
    }

    // Geometría de partículas
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material de partículas más dinámico
    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    // Crear sistema de partículas
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Variables de animación
    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;

    // Event listeners para interacción con mouse
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Función de animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const time = elapsedTime * 0.4;

      // Rotar partículas
      particles.rotation.x = time * 0.1;
      particles.rotation.y = time * 0.15;

      // Efecto de movimiento basado en mouse
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.8 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Animar partículas individuales
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.01;
        positions[i3] += Math.cos(time + i * 0.1) * 0.005;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Manejo de resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ContactParticles;
