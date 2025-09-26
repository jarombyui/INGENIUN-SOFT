import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ScrollEffects = () => {
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

    // Configuración del renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Crear geometrías 3D flotantes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.8, 8),
      new THREE.TorusGeometry(0.3, 0.1, 8, 16)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xF59E0B, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      })
    ];

    const meshes = [];
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Posiciones aleatorias
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 15;
      
      // Rotaciones aleatorias
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Variables de animación
    const clock = new THREE.Clock();
    let scrollY = 0;
    let targetScrollY = 0;

    // Event listener para scroll
    const handleScroll = () => {
      targetScrollY = window.scrollY * 0.01;
    };

    window.addEventListener('scroll', handleScroll);

    // Función de animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Suavizar el scroll
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Animar meshes
      meshes.forEach((mesh, index) => {
        // Rotación continua
        mesh.rotation.x += 0.01 * (index + 1);
        mesh.rotation.y += 0.015 * (index + 1);
        mesh.rotation.z += 0.005 * (index + 1);

        // Movimiento basado en scroll
        mesh.position.y += Math.sin(elapsedTime + index) * 0.002;
        mesh.position.x += Math.cos(elapsedTime + index) * 0.001;

        // Efecto de scroll
        mesh.position.z += scrollY * 0.1;

        // Cambiar opacidad basado en scroll
        const opacity = Math.max(0.2, 0.8 - Math.abs(scrollY) * 0.1);
        mesh.material.opacity = opacity;
      });

      // Rotar la cámara sutilmente
      camera.position.x = Math.sin(elapsedTime * 0.1) * 0.5;
      camera.position.y = Math.cos(elapsedTime * 0.1) * 0.3;
      camera.lookAt(scene.position);

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
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

export default ScrollEffects;
