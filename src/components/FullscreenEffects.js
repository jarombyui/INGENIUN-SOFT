import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FullscreenEffects = ({ 
  particleCount = 200, 
  orbCount = 12, 
  connectionCount = 50,
  colors = ['#00D4FF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA726', '#E91E63', '#9C27B0', '#4CAF50'],
  intensity = 0.8 
}) => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Floating orbs
    const orbs = [];
    for (let i = 0; i < orbCount; i++) {
      const geometry = new THREE.SphereGeometry(1 + Math.random() * 2, 16, 16);
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.6,
        emissive: color.clone().multiplyScalar(0.3)
      });
      
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      scene.add(orb);
      orbs.push(orb);
    }

    // Particle system
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.y += sin(time + pos.x * 0.01) * 10.0;
          pos.x += cos(time + pos.z * 0.01) * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -pos.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 0.8);
        }
      `,
      transparent: true,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Connection lines
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = new Float32Array(connectionCount * 6);
    const connectionColors = new Float32Array(connectionCount * 6);

    for (let i = 0; i < connectionCount; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );

      connectionPositions[i * 6] = start.x;
      connectionPositions[i * 6 + 1] = start.y;
      connectionPositions[i * 6 + 2] = start.z;
      connectionPositions[i * 6 + 3] = end.x;
      connectionPositions[i * 6 + 4] = end.y;
      connectionPositions[i * 6 + 5] = end.z;

      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      connectionColors[i * 6] = color.r;
      connectionColors[i * 6 + 1] = color.g;
      connectionColors[i * 6 + 2] = color.b;
      connectionColors[i * 6 + 3] = color.r;
      connectionColors[i * 6 + 4] = color.g;
      connectionColors[i * 6 + 5] = color.b;
    }

    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));
    connectionGeometry.setAttribute('color', new THREE.BufferAttribute(connectionColors, 3));

    const connectionMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3
    });

    const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connections);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;

      // Animate orbs
      orbs.forEach((orb, index) => {
        orb.rotation.x += 0.01;
        orb.rotation.y += 0.01;
        orb.position.y += Math.sin(time + index) * 0.1;
        orb.position.x += Math.cos(time + index * 0.5) * 0.05;
      });

      // Animate particles
      particleMaterial.uniforms.time.value = time;

      // Animate connections
      connections.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [particleCount, orbCount, connectionCount, colors, intensity]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default FullscreenEffects;
