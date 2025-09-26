import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedBlogEffects = () => {
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

    // Floating blog post representations
    const blogPosts = [];
    const postCount = 15;
    
    for (let i = 0; i < postCount; i++) {
      const geometry = new THREE.BoxGeometry(4, 6, 0.5);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6),
        transparent: true,
        opacity: 0.7,
        emissive: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.2)
      });
      
      const post = new THREE.Mesh(geometry, material);
      post.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100
      );
      post.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(post);
      blogPosts.push(post);
    }

    // Knowledge network connections
    const networkGeometry = new THREE.BufferGeometry();
    const networkPositions = new Float32Array(postCount * 6);
    
    for (let i = 0; i < postCount; i++) {
      const start = blogPosts[i].position;
      const endIndex = Math.floor(Math.random() * postCount);
      const end = blogPosts[endIndex].position;
      
      networkPositions[i * 6] = start.x;
      networkPositions[i * 6 + 1] = start.y;
      networkPositions[i * 6 + 2] = start.z;
      networkPositions[i * 6 + 3] = end.x;
      networkPositions[i * 6 + 4] = end.y;
      networkPositions[i * 6 + 5] = end.z;
    }
    
    networkGeometry.setAttribute('position', new THREE.BufferAttribute(networkPositions, 3));
    
    const networkMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.3
    });
    
    const network = new THREE.LineSegments(networkGeometry, networkMaterial);
    scene.add(network);

    // Floating knowledge particles
    const knowledgeParticles = new THREE.BufferGeometry();
    const knowledgePositions = new Float32Array(200 * 3);
    const knowledgeColors = new Float32Array(200 * 3);

    for (let i = 0; i < 200; i++) {
      knowledgePositions[i * 3] = (Math.random() - 0.5) * 300;
      knowledgePositions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      knowledgePositions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5);
      knowledgeColors[i * 3] = color.r;
      knowledgeColors[i * 3 + 1] = color.g;
      knowledgeColors[i * 3 + 2] = color.b;
    }

    knowledgeParticles.setAttribute('position', new THREE.BufferAttribute(knowledgePositions, 3));
    knowledgeParticles.setAttribute('color', new THREE.BufferAttribute(knowledgeColors, 3));

    const knowledgeMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const knowledgeParticleSystem = new THREE.Points(knowledgeParticles, knowledgeMaterial);
    scene.add(knowledgeParticleSystem);

    // Floating topic tags
    const topicTags = [];
    const topics = ['AI', 'Web', 'Mobile', 'Cloud', 'Data', 'Security', 'DevOps', 'IoT'];
    
    topics.forEach((topic, index) => {
      const geometry = new THREE.SphereGeometry(1, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.8,
        emissive: new THREE.Color().setHSL(0.6 + index * 0.1, 0.8, 0.3)
      });
      
      const tag = new THREE.Mesh(geometry, material);
      tag.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 80
      );
      
      scene.add(tag);
      topicTags.push(tag);
    });

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
      
      // Animate blog posts
      blogPosts.forEach((post, index) => {
        post.rotation.x = time * 0.1 * (index % 3 + 1);
        post.rotation.y = time * 0.05 * (index % 2 + 1);
        post.position.y += Math.sin(time + index) * 0.1;
        post.position.x += Math.cos(time + index * 0.5) * 0.05;
      });
      
      // Animate knowledge particles
      knowledgeParticleSystem.rotation.x = time * 0.03;
      knowledgeParticleSystem.rotation.y = time * 0.02;
      
      // Animate topic tags
      topicTags.forEach((tag, index) => {
        tag.rotation.x = time * 0.1 * (index + 1);
        tag.rotation.y = time * 0.05 * (index + 1);
        tag.position.y += Math.sin(time + index) * 0.2;
      });
      
      // Animate network
      network.rotation.z = time * 0.01;
      
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
      networkGeometry.dispose();
      networkMaterial.dispose();
      knowledgeParticles.dispose();
      knowledgeMaterial.dispose();
      blogPosts.forEach(post => {
        post.geometry.dispose();
        post.material.dispose();
      });
      topicTags.forEach(tag => {
        tag.geometry.dispose();
        tag.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvancedBlogEffects;
