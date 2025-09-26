import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedAboutEffects = () => {
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

    // Company logo 3D representation
    const logoGeometry = new THREE.BoxGeometry(8, 8, 2);
    const logoMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.8,
      emissive: 0x004400
    });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 0, 0);
    scene.add(logo);

    // Floating company values
    const values = ['Innovación', 'Calidad', 'Confianza', 'Excelencia', 'Futuro'];
    const valueObjects = [];
    
    values.forEach((value, index) => {
      const geometry = new THREE.SphereGeometry(1, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.7,
        emissive: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.2)
      });
      
      const valueObject = new THREE.Mesh(geometry, material);
      const angle = (index / values.length) * Math.PI * 2;
      valueObject.position.set(
        Math.cos(angle) * 15,
        Math.sin(angle) * 15,
        (Math.random() - 0.5) * 20
      );
      
      scene.add(valueObject);
      valueObjects.push(valueObject);
    });

    // DNA helix representing growth
    const helixGeometry = new THREE.BufferGeometry();
    const helixPoints = [];
    const helixRadius = 5;
    const helixHeight = 30;
    const helixTurns = 3;
    
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * helixTurns * Math.PI * 2;
      const x = Math.cos(t) * helixRadius;
      const y = (i / 100) * helixHeight - helixHeight / 2;
      const z = Math.sin(t) * helixRadius;
      helixPoints.push(new THREE.Vector3(x, y, z));
    }
    
    helixGeometry.setFromPoints(helixPoints);
    const helixMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.6
    });
    const helix = new THREE.Line(helixGeometry, helixMaterial);
    helix.position.set(0, 0, -10);
    scene.add(helix);

    // Floating particles representing team
    const teamParticles = new THREE.BufferGeometry();
    const teamPositions = new Float32Array(50 * 3);
    const teamColors = new Float32Array(50 * 3);

    for (let i = 0; i < 50; i++) {
      teamPositions[i * 3] = (Math.random() - 0.5) * 100;
      teamPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      teamPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5);
      teamColors[i * 3] = color.r;
      teamColors[i * 3 + 1] = color.g;
      teamColors[i * 3 + 2] = color.b;
    }

    teamParticles.setAttribute('position', new THREE.BufferAttribute(teamPositions, 3));
    teamParticles.setAttribute('color', new THREE.BufferAttribute(teamColors, 3));

    const teamMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const teamParticleSystem = new THREE.Points(teamParticles, teamMaterial);
    scene.add(teamParticleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 1, 200);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 50;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate logo
      logo.rotation.x = time * 0.2;
      logo.rotation.y = time * 0.3;
      logo.position.y = Math.sin(time) * 2;
      
      // Animate company values
      valueObjects.forEach((valueObject, index) => {
        valueObject.rotation.x = time * 0.1 * (index + 1);
        valueObject.rotation.y = time * 0.05 * (index + 1);
        valueObject.position.y += Math.sin(time + index) * 0.1;
      });
      
      // Animate helix
      helix.rotation.y = time * 0.1;
      helix.position.y = Math.sin(time * 0.5) * 2;
      
      // Animate team particles
      teamParticleSystem.rotation.x = time * 0.05;
      teamParticleSystem.rotation.y = time * 0.03;
      
      // Mouse interaction
      camera.position.x = mouse.x * 5;
      camera.position.y = mouse.y * 5;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', () => {});
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      logoGeometry.dispose();
      logoMaterial.dispose();
      helixGeometry.dispose();
      helixMaterial.dispose();
      teamParticles.dispose();
      teamMaterial.dispose();
      valueObjects.forEach(valueObject => {
        valueObject.geometry.dispose();
        valueObject.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvancedAboutEffects;
