import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvantagesVisualEffects = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Colores impresionantes para ventajas
    const advantageColors = {
      efficiency: new THREE.Color(0xFFD700), // Dorado para eficiencia
      scalability: new THREE.Color(0x4CAF50), // Verde para escalabilidad
      personalization: new THREE.Color(0x9C27B0), // Púrpura para personalización
      integration: new THREE.Color(0x2196F3), // Azul para integración
      security: new THREE.Color(0xF44336), // Rojo para seguridad
      support: new THREE.Color(0x00BCD4), // Cyan para soporte
      roi: new THREE.Color(0xFF9800), // Naranja para ROI
      innovation: new THREE.Color(0x673AB7) // Índigo para innovación
    };

    // Partículas de ventajas
    const advantageParticles = [];
    const particleCount = 200;
    
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 1.5, 16, 16);
      const colorKeys = Object.keys(advantageColors);
      const randomColor = advantageColors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.MeshPhongMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.8,
        emissive: randomColor.clone().multiplyScalar(0.3)
      });
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 300
      );
      
      // Velocidad de movimiento
      particle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        ),
        originalColor: randomColor.clone()
      };
      
      scene.add(particle);
      advantageParticles.push(particle);
    }

    // Formas geométricas representando ventajas
    const advantageShapes = [];
    const shapeCount = 12;
    const geometries = [
      new THREE.OctahedronGeometry(3),
      new THREE.TetrahedronGeometry(3),
      new THREE.IcosahedronGeometry(3),
      new THREE.TorusGeometry(3, 1, 8, 16),
      new THREE.ConeGeometry(2, 4, 8),
      new THREE.BoxGeometry(4, 4, 4)
    ];
    
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const colorKeys = Object.keys(advantageColors);
      const randomColor = advantageColors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.MeshPhongMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.6,
        emissive: randomColor.clone().multiplyScalar(0.2),
        wireframe: Math.random() > 0.5
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 200
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Datos de animación
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        originalColor: randomColor.clone()
      };
      
      scene.add(shape);
      advantageShapes.push(shape);
    }

    // Líneas de conexión entre ventajas
    const connectionLines = [];
    const lineCount = 20;
    
    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(6);
      
      positions[0] = (Math.random() - 0.5) * 200;
      positions[1] = (Math.random() - 0.5) * 200;
      positions[2] = (Math.random() - 0.5) * 150;
      positions[3] = (Math.random() - 0.5) * 200;
      positions[4] = (Math.random() - 0.5) * 200;
      positions[5] = (Math.random() - 0.5) * 150;
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const colorKeys = Object.keys(advantageColors);
      const randomColor = advantageColors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.LineBasicMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.4
      });
      
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      connectionLines.push(line);
    }

    // Iluminación avanzada
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Luces de punto coloreadas
    const pointLights = [
      new THREE.PointLight(advantageColors.efficiency, 0.8, 200),
      new THREE.PointLight(advantageColors.scalability, 0.8, 200),
      new THREE.PointLight(advantageColors.personalization, 0.8, 200),
      new THREE.PointLight(advantageColors.integration, 0.8, 200)
    ];
    
    pointLights.forEach((light, index) => {
      light.position.set(
        Math.cos(index * Math.PI / 2) * 100,
        Math.sin(index * Math.PI / 2) * 100,
        0
      );
      scene.add(light);
    });

    camera.position.z = 120;

    // Animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animar partículas de ventajas
      advantageParticles.forEach((particle, index) => {
        particle.position.add(particle.userData.velocity);
        
        // Rebotar en los bordes
        if (Math.abs(particle.position.x) > 200) particle.userData.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 200) particle.userData.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 150) particle.userData.velocity.z *= -1;
        
        // Cambio de color dinámico
        const colorKeys = Object.keys(advantageColors);
        const newColor = advantageColors[colorKeys[Math.floor((time + index) % colorKeys.length)]];
        particle.material.color.lerp(newColor, 0.01);
      });
      
      // Animar formas de ventajas
      advantageShapes.forEach((shape, index) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        shape.position.y += Math.sin(time * 2 + index) * 0.5;
        shape.position.x += Math.cos(time * 1.5 + index) * 0.3;
        
        // Cambio de color dinámico
        const colorKeys = Object.keys(advantageColors);
        const newColor = advantageColors[colorKeys[Math.floor((time + index) % colorKeys.length)]];
        shape.material.color.lerp(newColor, 0.005);
      });
      
      // Animar líneas de conexión
      connectionLines.forEach((line, index) => {
        line.rotation.z = time * 0.01 * (index % 3 + 1);
        line.material.opacity = 0.3 + Math.sin(time * 2 + index) * 0.2;
      });
      
      // Rotación general de la escena
      scene.rotation.y = time * 0.01;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      advantageParticles.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
      advantageShapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      connectionLines.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvantagesVisualEffects;
