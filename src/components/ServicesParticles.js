import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ServicesParticles = () => {
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

    // Crear partículas para Servicios - más técnicas
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Colores corporativos técnicos
    const color1 = new THREE.Color(0x3B82F6);
    const color2 = new THREE.Color(0x10B981);
    const color3 = new THREE.Color(0x8B5CF6);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Posiciones aleatorias
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      // Colores aleatorios
      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.4) color = color1;
      else if (colorChoice < 0.7) color = color2;
      else color = color3;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Tamaños uniformes
      sizes[i] = Math.random() * 1 + 1;
    }

    // Geometría de partículas
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material de partículas técnico
    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    // Crear sistema de partículas
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Crear formas geométricas técnicas
    const shapes = [];
    const shapeGeometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.4, 16, 16),
      new THREE.ConeGeometry(0.4, 1, 8),
      new THREE.TorusGeometry(0.6, 0.2, 8, 16)
    ];

    const shapeMaterials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xF59E0B, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      })
    ];

    for (let i = 0; i < 6; i++) {
      const geometry = shapeGeometries[i % shapeGeometries.length];
      const material = shapeMaterials[i % shapeMaterials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 15;
      
      scene.add(mesh);
      shapes.push(mesh);
    }

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
      const time = elapsedTime * 0.2;

      // Rotar partículas
      particles.rotation.x = time * 0.08;
      particles.rotation.y = time * 0.12;

      // Efecto de movimiento basado en mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.015;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.015;
      camera.lookAt(scene.position);

      // Animar partículas individuales
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.008;
        positions[i3] += Math.cos(time + i * 0.1) * 0.004;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Animar formas geométricas
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index + 1);
        shape.rotation.y += 0.008 * (index + 1);
        shape.rotation.z += 0.003 * (index + 1);

        // Movimiento sutil
        shape.position.y += Math.sin(elapsedTime + index) * 0.005;
        shape.position.x += Math.cos(elapsedTime + index) * 0.002;
      });

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
      shapeGeometries.forEach(geo => geo.dispose());
      shapeMaterials.forEach(mat => mat.dispose());
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

export default ServicesParticles;
