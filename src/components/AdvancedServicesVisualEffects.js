import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedServicesVisualEffects = () => {
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

    // Impressive color palette
    const colors = {
      primary: new THREE.Color(0x00D4FF), // Cyan brillante
      secondary: new THREE.Color(0xFF6B6B), // Coral vibrante
      accent: new THREE.Color(0x4ECDC4), // Turquesa
      success: new THREE.Color(0x45B7D1), // Azul cielo
      warning: new THREE.Color(0xFFA726), // Naranja dorado
      danger: new THREE.Color(0xE91E63), // Rosa magenta
      purple: new THREE.Color(0x9C27B0), // Púrpura
      green: new THREE.Color(0x4CAF50), // Verde esmeralda
      gold: new THREE.Color(0xFFD700), // Dorado
      silver: new THREE.Color(0xC0C0C0) // Plateado
    };

    // Floating service orbs with impressive colors
    const serviceOrbs = [];
    const orbCount = 25;
    
    for (let i = 0; i < orbCount; i++) {
      const geometry = new THREE.SphereGeometry(2 + Math.random() * 3, 32, 32);
      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.MeshPhongMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.8,
        emissive: randomColor.clone().multiplyScalar(0.3),
        shininess: 100
      });
      
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 150
      );
      
      // Add wireframe for extra visual appeal
      const wireframe = new THREE.WireframeGeometry(geometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.3
      });
      const wireframeMesh = new THREE.LineSegments(wireframe, wireframeMaterial);
      orb.add(wireframeMesh);
      
      scene.add(orb);
      serviceOrbs.push(orb);
    }

    // Colorful connection network
    const networkGeometry = new THREE.BufferGeometry();
    const networkPositions = new Float32Array(orbCount * 6);
    const networkColors = new Float32Array(orbCount * 3);
    
    for (let i = 0; i < orbCount; i++) {
      const start = serviceOrbs[i].position;
      const endIndex = Math.floor(Math.random() * orbCount);
      const end = serviceOrbs[endIndex].position;
      
      networkPositions[i * 6] = start.x;
      networkPositions[i * 6 + 1] = start.y;
      networkPositions[i * 6 + 2] = start.z;
      networkPositions[i * 6 + 3] = end.x;
      networkPositions[i * 6 + 4] = end.y;
      networkPositions[i * 6 + 5] = end.z;
      
      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      networkColors[i * 3] = randomColor.r;
      networkColors[i * 3 + 1] = randomColor.g;
      networkColors[i * 3 + 2] = randomColor.b;
    }
    
    networkGeometry.setAttribute('position', new THREE.BufferAttribute(networkPositions, 3));
    networkGeometry.setAttribute('color', new THREE.BufferAttribute(networkColors, 3));
    
    const networkMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });
    
    const network = new THREE.LineSegments(networkGeometry, networkMaterial);
    scene.add(network);

    // Impressive particle system
    const particleCount = 1500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      particleColors[i * 3] = randomColor.r;
      particleColors[i * 3 + 1] = randomColor.g;
      particleColors[i * 3 + 2] = randomColor.b;

      sizes[i] = Math.random() * 4 + 1;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Advanced shader material for particles
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform vec2 mouse;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Impressive wave animation
          pos.y += sin(pos.x * 0.01 + time * 2.0) * 8.0;
          pos.x += cos(pos.z * 0.01 + time * 1.5) * 5.0;
          
          // Mouse interaction with impressive effects
          vec2 mouseInfluence = (mouse - 0.5) * 4.0;
          pos.xy += mouseInfluence * 20.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (400.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Floating geometric shapes with impressive colors
    const shapes = [];
    const shapeCount = 20;
    const geometries = [
      new THREE.OctahedronGeometry(3),
      new THREE.TetrahedronGeometry(3),
      new THREE.IcosahedronGeometry(3),
      new THREE.TorusGeometry(2, 0.5, 8, 16),
      new THREE.ConeGeometry(2, 4, 8)
    ];
    
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      
      const material = new THREE.MeshPhongMaterial({
        color: randomColor,
        transparent: true,
        opacity: 0.7,
        emissive: randomColor.clone().multiplyScalar(0.4),
        shininess: 150,
        wireframe: Math.random() > 0.5
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 200
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(shape);
      shapes.push(shape);
    }

    // Impressive lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Multiple colored point lights
    const pointLights = [
      new THREE.PointLight(colors.primary, 1, 200),
      new THREE.PointLight(colors.secondary, 1, 200),
      new THREE.PointLight(colors.accent, 1, 200),
      new THREE.PointLight(colors.success, 1, 200)
    ];
    
    pointLights.forEach((light, index) => {
      light.position.set(
        Math.cos(index * Math.PI / 2) * 50,
        Math.sin(index * Math.PI / 2) * 50,
        0
      );
      scene.add(light);
    });

    // Camera position
    camera.position.z = 100;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      particleMaterial.uniforms.mouse.value.copy(mouse);
    };

    // Scroll-based animation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      particleMaterial.uniforms.time.value = time;
      
      // Animate service orbs with impressive effects
      serviceOrbs.forEach((orb, index) => {
        orb.rotation.x = time * 0.2 * (index % 3 + 1);
        orb.rotation.y = time * 0.1 * (index % 2 + 1);
        orb.position.y += Math.sin(time + index) * 0.5;
        orb.position.x += Math.cos(time + index * 0.3) * 0.3;
        orb.position.z += Math.sin(time * 0.5 + index) * 0.2;
        
        // Color cycling
        const colorKeys = Object.keys(colors);
        const newColor = colors[colorKeys[Math.floor((time + index) % colorKeys.length)]];
        orb.material.color.lerp(newColor, 0.01);
      });
      
      // Animate particles with impressive movement
      particleSystem.rotation.x = time * 0.05;
      particleSystem.rotation.y = time * 0.03;
      
      // Animate shapes with impressive rotations
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.02 * (index + 1);
        shape.rotation.y += 0.01 * (index + 1);
        shape.position.y += Math.sin(time + index) * 0.3;
        shape.position.x += Math.cos(time + index * 0.5) * 0.2;
      });
      
      // Animate network with impressive effects
      network.rotation.z = time * 0.02;
      
      // Scroll-based camera movement
      camera.position.y = scrollY * 0.05;
      camera.rotation.x = scrollY * 0.0002;
      
      // Mouse interaction
      camera.position.x = mouse.x * 15;
      camera.position.y = mouse.y * 15;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      networkGeometry.dispose();
      networkMaterial.dispose();
      serviceOrbs.forEach(orb => {
        orb.geometry.dispose();
        orb.material.dispose();
        orb.children.forEach(child => {
          child.geometry.dispose();
          child.material.dispose();
        });
      });
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default AdvancedServicesVisualEffects;
