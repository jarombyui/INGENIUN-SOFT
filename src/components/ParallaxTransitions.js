import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ParallaxTransitions = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

    // Crear sistema de partículas para transiciones
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Colores corporativos
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

      // Tamaños aleatorios
      sizes[i] = Math.random() * 2 + 0.5;

      // Velocidades aleatorias
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    // Geometría de partículas
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material de partículas
    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    // Crear sistema de partículas
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Crear formas geométricas flotantes
    const shapes = [];
    const shapeGeometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.8, 16, 16),
      new THREE.ConeGeometry(0.8, 2, 8),
      new THREE.TorusGeometry(1, 0.3, 8, 16)
    ];

    const shapeMaterials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xF59E0B, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true
      })
    ];

    for (let i = 0; i < 8; i++) {
      const geometry = shapeGeometries[i % shapeGeometries.length];
      const material = shapeMaterials[i % shapeMaterials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Variables de animación
    const clock = new THREE.Clock();
    let scrollY = 0;
    let targetScrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Event listeners
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      targetScrollY = scrollTop * 0.01;
    };

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Función de animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Suavizar el scroll
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Animar partículas
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Movimiento basado en scroll
        positions[i3 + 1] += velocities[i3 + 1] * (1 + scrollProgress * 2);
        positions[i3] += velocities[i3] * (1 + scrollProgress * 2);
        positions[i3 + 2] += velocities[i3 + 2] * (1 + scrollProgress * 2);

        // Efecto de scroll
        positions[i3 + 2] += scrollY * 0.1;

        // Resetear posición si sale del área
        if (positions[i3 + 1] > 15) positions[i3 + 1] = -15;
        if (positions[i3 + 1] < -15) positions[i3 + 1] = 15;
        if (positions[i3] > 15) positions[i3] = -15;
        if (positions[i3] < -15) positions[i3] = 15;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Rotar partículas
      particles.rotation.x = elapsedTime * 0.1;
      particles.rotation.y = elapsedTime * 0.15;

      // Animar formas geométricas
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index + 1);
        shape.rotation.y += 0.015 * (index + 1);
        shape.rotation.z += 0.005 * (index + 1);

        // Movimiento basado en scroll
        shape.position.y += Math.sin(elapsedTime + index) * 0.01;
        shape.position.x += Math.cos(elapsedTime + index) * 0.005;
        shape.position.z += scrollY * 0.05;

        // Cambiar opacidad basado en scroll
        const opacity = Math.max(0.2, 0.8 - Math.abs(scrollY) * 0.02);
        shape.material.opacity = opacity;
      });

      // Efecto de cámara basado en mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Efectos de iluminación dinámica
      directionalLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
      directionalLight.position.y = Math.cos(elapsedTime * 0.5) * 5;

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      shapeGeometries.forEach(geo => geo.dispose());
      shapeMaterials.forEach(mat => mat.dispose());
    };
  }, [scrollProgress]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParallaxTransitions;
