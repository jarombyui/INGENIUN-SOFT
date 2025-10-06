import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const UniversalEffects = ({ 
  intensity = 1.0,
  particleCount = 150,
  colorScheme = 'corporate'
}) => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    console.log('🎯 Iniciando UniversalEffects...');

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    // Asegurar que el canvas esté en la posición correcta
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    
    mountRef.current.appendChild(canvas);
    console.log('✅ Canvas añadido con estilos correctos');

    // Configurar cámara
    camera.position.z = 5;

    // Crear partículas más visibles
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Colores más brillantes
    const colorPalette = {
      corporate: [
        new THREE.Color(0x00D4FF), // Cyan brillante
        new THREE.Color(0xFF6B6B), // Coral vibrante
        new THREE.Color(0x4ECDC4), // Turquesa
        new THREE.Color(0x45B7D1), // Azul cielo
        new THREE.Color(0xFFA726), // Naranja dorado
        new THREE.Color(0xE91E63), // Rosa magenta
      ],
      blue: [
        new THREE.Color(0x3B82F6),
        new THREE.Color(0x1E40AF),
        new THREE.Color(0x60A5FA),
        new THREE.Color(0x93C5FD),
      ],
      purple: [
        new THREE.Color(0x8B5CF6),
        new THREE.Color(0x7C3AED),
        new THREE.Color(0xA855F7),
        new THREE.Color(0xC084FC),
      ]
    };

    const colorsToUse = colorPalette[colorScheme] || colorPalette.corporate;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Posiciones que cubren toda la pantalla
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = (Math.random() - 0.5) * 200;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Colores aleatorios del esquema
      const randomColor = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];
      colors[i3] = randomColor.r;
      colors[i3 + 1] = randomColor.g;
      colors[i3 + 2] = randomColor.b;

      // Tamaños más grandes para mejor visibilidad
      sizes[i] = Math.random() * 3 + 1;
    }

    // Geometría de partículas
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material de partículas más visible
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        intensity: { value: intensity }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float intensity;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Animación de movimiento
          pos.y += sin(time + pos.x * 0.01) * 5.0;
          pos.x += cos(time + pos.z * 0.01) * 3.0;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -pos.z) * intensity;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          // Hacer las partículas más brillantes
          gl_FragColor = vec4(vColor, 0.8);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    console.log('✅ Partículas creadas y añadidas a la escena');

    // Crear orbes flotantes adicionales
    const orbCount = 8;
    const orbs = [];
    for (let i = 0; i < orbCount; i++) {
      const orbGeometry = new THREE.SphereGeometry(1 + Math.random() * 2, 16, 16);
      const orbColor = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: orbColor,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });
      
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 50
      );
      
      scene.add(orb);
      orbs.push(orb);
    }

    // Crear líneas de conexión
    const lineCount = 20;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 6);
    const lineColors = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100
      );

      linePositions[i * 6] = start.x;
      linePositions[i * 6 + 1] = start.y;
      linePositions[i * 6 + 2] = start.z;
      linePositions[i * 6 + 3] = end.x;
      linePositions[i * 6 + 4] = end.y;
      linePositions[i * 6 + 5] = end.z;

      const lineColor = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];
      lineColors[i * 6] = lineColor.r;
      lineColors[i * 6 + 1] = lineColor.g;
      lineColors[i * 6 + 2] = lineColor.b;
      lineColors[i * 6 + 3] = lineColor.r;
      lineColors[i * 6 + 4] = lineColor.g;
      lineColors[i * 6 + 5] = lineColor.b;
    }

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animación
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      material.uniforms.time.value = time;

      // Animar partículas
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.1;
        positions[i3] += Math.cos(time + i * 0.05) * 0.05;
      }
      geometry.attributes.position.needsUpdate = true;

      // Animar orbes
      orbs.forEach((orb, index) => {
        orb.rotation.x += 0.01;
        orb.rotation.y += 0.01;
        orb.position.y += Math.sin(time + index) * 0.1;
        orb.position.x += Math.cos(time + index * 0.5) * 0.05;
      });

      // Animar líneas
      lines.rotation.y += 0.001;

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
      console.log('🧹 Limpiando UniversalEffects...');
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas);
      }
      renderer.dispose();
    };
  }, [intensity, particleCount, colorScheme]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default UniversalEffects;

