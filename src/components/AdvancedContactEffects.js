import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedContactEffects = () => {
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

    // Communication network
    const networkNodes = [];
    const nodeCount = 30;
    
    for (let i = 0; i < nodeCount; i++) {
      const geometry = new THREE.SphereGeometry(1, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6),
        transparent: true,
        opacity: 0.8,
        emissive: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.3)
      });
      
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 100
      );
      
      scene.add(node);
      networkNodes.push(node);
    }

    // Connection lines between nodes
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = new Float32Array(nodeCount * 6);
    
    for (let i = 0; i < nodeCount; i++) {
      const start = networkNodes[i].position;
      const endIndex = Math.floor(Math.random() * nodeCount);
      const end = networkNodes[endIndex].position;
      
      connectionPositions[i * 6] = start.x;
      connectionPositions[i * 6 + 1] = start.y;
      connectionPositions[i * 6 + 2] = start.z;
      connectionPositions[i * 6 + 3] = end.x;
      connectionPositions[i * 6 + 4] = end.y;
      connectionPositions[i * 6 + 5] = end.z;
    }
    
    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));
    
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.4
    });
    
    const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connections);

    // Floating contact icons
    const contactIcons = [];
    const iconTypes = ['phone', 'email', 'location', 'chat', 'video'];
    
    iconTypes.forEach((type, index) => {
      let geometry;
      switch (type) {
        case 'phone':
          geometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 8);
          break;
        case 'email':
          geometry = new THREE.BoxGeometry(2, 1.5, 0.2);
          break;
        case 'location':
          geometry = new THREE.ConeGeometry(1, 3, 8);
          break;
        case 'chat':
          geometry = new THREE.SphereGeometry(1.5, 16, 16);
          break;
        case 'video':
          geometry = new THREE.BoxGeometry(2, 1.5, 0.5);
          break;
        default:
          geometry = new THREE.SphereGeometry(1, 16, 16);
      }
      
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.7,
        emissive: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.2)
      });
      
      const icon = new THREE.Mesh(geometry, material);
      icon.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      );
      
      scene.add(icon);
      contactIcons.push(icon);
    });

    // Message particles
    const messageParticles = new THREE.BufferGeometry();
    const messagePositions = new Float32Array(100 * 3);
    const messageColors = new Float32Array(100 * 3);

    for (let i = 0; i < 100; i++) {
      messagePositions[i * 3] = (Math.random() - 0.5) * 200;
      messagePositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      messagePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5);
      messageColors[i * 3] = color.r;
      messageColors[i * 3 + 1] = color.g;
      messageColors[i * 3 + 2] = color.b;
    }

    messageParticles.setAttribute('position', new THREE.BufferAttribute(messagePositions, 3));
    messageParticles.setAttribute('color', new THREE.BufferAttribute(messageColors, 3));

    const messageMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const messageParticleSystem = new THREE.Points(messageParticles, messageMaterial);
    scene.add(messageParticleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 0.8, 200);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 80;

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
      
      // Animate network nodes
      networkNodes.forEach((node, index) => {
        node.rotation.x = time * 0.1 * (index % 3 + 1);
        node.rotation.y = time * 0.05 * (index % 2 + 1);
        node.position.y += Math.sin(time + index) * 0.1;
        node.position.x += Math.cos(time + index * 0.5) * 0.05;
      });
      
      // Animate contact icons
      contactIcons.forEach((icon, index) => {
        icon.rotation.x = time * 0.1 * (index + 1);
        icon.rotation.y = time * 0.05 * (index + 1);
        icon.position.y += Math.sin(time + index) * 0.2;
      });
      
      // Animate message particles
      messageParticleSystem.rotation.x = time * 0.03;
      messageParticleSystem.rotation.y = time * 0.02;
      
      // Animate connections
      connections.rotation.z = time * 0.01;
      
      // Mouse interaction
      camera.position.x = mouse.x * 10;
      camera.position.y = mouse.y * 10;
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
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      messageParticles.dispose();
      messageMaterial.dispose();
      networkNodes.forEach(node => {
        node.geometry.dispose();
        node.material.dispose();
      });
      contactIcons.forEach(icon => {
        icon.geometry.dispose();
        icon.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvancedContactEffects;
