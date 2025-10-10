import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const SectionTransitions = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

    // Crear geometrías para transiciones
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.ConeGeometry(1, 3, 8),
      new THREE.TorusGeometry(1.5, 0.5, 16, 32),
      new THREE.OctahedronGeometry(1.5),
      new THREE.TetrahedronGeometry(1.5)
    ];

    // Materiales con colores corporativos
    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xF59E0B, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xEF4444, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06B6D4, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      })
    ];

    // Crear objetos 3D
    const meshes = [];
    for (let i = 0; i < 6; i++) {
      const geometry = geometries[i];
      const material = materials[i];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Posiciones iniciales
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      // Rotaciones iniciales
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Escala inicial
      mesh.scale.setScalar(0.5);
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3B82F6, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Variables de animación
    const clock = new THREE.Clock();
    let scrollY = 0;
    let targetScrollY = 0;

    // Detectar secciones
    const sections = [
      { name: 'hero', element: document.querySelector('.hero-section') },
      { name: 'services', element: document.querySelector('.services-section') },
      { name: 'process', element: document.querySelector('.process-section') },
      { name: 'stats', element: document.querySelector('.stats-section') },
      { name: 'testimonials', element: document.querySelector('.testimonials-section') }
    ];

    // Función para detectar sección actual
    const getCurrentSection = () => {
      const windowHeight = window.innerHeight;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            return i;
          }
        }
      }
      return 0;
    };

    // Event listener para scroll
    const handleScroll = () => {
      const newSection = getCurrentSection();
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        setIsTransitioning(true);
        
        // Transición de morphing
        meshes.forEach((mesh, index) => {
          const targetGeometry = geometries[(newSection + index) % geometries.length];
          const targetMaterial = materials[(newSection + index) % materials.length];
          
          // Cambiar geometría gradualmente
          setTimeout(() => {
            mesh.geometry.dispose();
            mesh.geometry = targetGeometry;
            mesh.material = targetMaterial;
          }, index * 100);
        });
        
        setTimeout(() => setIsTransitioning(false), 1000);
      }
      
      targetScrollY = window.scrollY * 0.01;
    };

    window.addEventListener('scroll', handleScroll);

    // Función de animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Suavizar el scroll
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Animar meshes con transiciones
      meshes.forEach((mesh, index) => {
        if (isTransitioning) {
          // Efectos de transición
          mesh.rotation.x += 0.02 * (index + 1);
          mesh.rotation.y += 0.03 * (index + 1);
          mesh.rotation.z += 0.01 * (index + 1);
          
          // Escala pulsante durante transición
          const scale = 0.5 + Math.sin(elapsedTime * 2 + index) * 0.2;
          mesh.scale.setScalar(scale);
        } else {
          // Animación normal
          mesh.rotation.x += 0.005 * (index + 1);
          mesh.rotation.y += 0.008 * (index + 1);
          mesh.rotation.z += 0.003 * (index + 1);
          
          // Movimiento orgánico
          mesh.position.y += Math.sin(elapsedTime + index) * 0.01;
          mesh.position.x += Math.cos(elapsedTime + index) * 0.005;
          
          // Escala suave
          const scale = 0.5 + Math.sin(elapsedTime * 0.5 + index) * 0.1;
          mesh.scale.setScalar(scale);
        }

        // Efecto de scroll
        mesh.position.z += scrollY * 0.1;

        // Cambiar opacidad basado en scroll
        const opacity = Math.max(0.3, 0.8 - Math.abs(scrollY) * 0.05);
        mesh.material.opacity = opacity;
      });

      // Rotar la cámara sutilmente
      camera.position.x = Math.sin(elapsedTime * 0.1) * 0.5;
      camera.position.y = Math.cos(elapsedTime * 0.1) * 0.3;
      camera.lookAt(scene.position);

      // Efectos de iluminación dinámica
      pointLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
      pointLight.position.y = Math.cos(elapsedTime * 0.5) * 5;
      pointLight.color.setHSL((elapsedTime * 0.1) % 1, 0.7, 0.5);

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
  }, [currentSection, isTransitioning]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default SectionTransitions;
