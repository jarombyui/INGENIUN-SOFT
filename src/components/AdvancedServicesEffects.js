import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedServicesEffects = () => {
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

    // Floating service icons
    const serviceIcons = [];
    const iconGeometries = [
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.SphereGeometry(2, 16, 16),
      new THREE.ConeGeometry(2, 4, 8),
      new THREE.CylinderGeometry(2, 2, 4, 8),
      new THREE.TorusGeometry(2, 0.5, 8, 16),
      new THREE.OctahedronGeometry(2)
    ];

    for (let i = 0; i < 20; i++) {
      const geometry = iconGeometries[Math.floor(Math.random() * iconGeometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.3, 0.8, 0.6),
        transparent: true,
        opacity: 0.4,
        emissive: new THREE.Color().setHSL(0.6 + Math.random() * 0.3, 0.8, 0.2)
      });
      
      const icon = new THREE.Mesh(geometry, material);
      icon.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100
      );
      icon.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(icon);
      serviceIcons.push(icon);
    }

    // Connection lines between services
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(60 * 3); // 20 lines with 3 points each
    
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      );
      
      linePositions[i * 6] = start.x;
      linePositions[i * 6 + 1] = start.y;
      linePositions[i * 6 + 2] = start.z;
      linePositions[i * 6 + 3] = end.x;
      linePositions[i * 6 + 4] = end.y;
      linePositions[i * 6 + 5] = end.z;
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.3
    });
    
    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // Floating particles
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 0.8, 150);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 80;

    // Scroll-based animation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate service icons
      serviceIcons.forEach((icon, index) => {
        icon.rotation.x += 0.01 * (index % 3 + 1);
        icon.rotation.y += 0.005 * (index % 2 + 1);
        icon.position.y += Math.sin(time + index) * 0.2;
        icon.position.x += Math.cos(time + index * 0.5) * 0.1;
      });
      
      // Animate particles
      particleSystem.rotation.x = time * 0.05;
      particleSystem.rotation.y = time * 0.03;
      
      // Scroll-based camera movement
      camera.position.y = scrollY * 0.1;
      camera.rotation.x = scrollY * 0.0001;
      
      // Animate connection lines
      connectionLines.rotation.z = time * 0.02;
      
      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      serviceIcons.forEach(icon => {
        icon.geometry.dispose();
        icon.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvancedServicesEffects;
