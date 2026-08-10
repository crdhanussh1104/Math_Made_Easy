import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { Box, Eye, RefreshCw } from 'lucide-react';

export const CubeViewer = () => {
  const mountRef = useRef(null);
  const [wireframe, setWireframe] = useState(false);
  const [shapeType, setShapeType] = useState('cube'); // cube, sphere, cone, cylinder
  const [stats, setStats] = useState({ faces: 6, edges: 12, vertices: 8 });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 340;
    const height = 280;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a');

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(3, 3, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Geometry selection
    let geometry;
    if (shapeType === 'sphere') {
      geometry = new THREE.SphereGeometry(1.5, 24, 24);
    } else if (shapeType === 'cone') {
      geometry = new THREE.ConeGeometry(1.4, 2.5, 24);
    } else if (shapeType === 'cylinder') {
      geometry = new THREE.CylinderGeometry(1.2, 1.2, 2.4, 24);
    } else {
      geometry = new THREE.BoxGeometry(2, 2, 2);
    }

    const material = new THREE.MeshStandardMaterial({
      color: shapeType === 'cube' ? 0x58cc02 : shapeType === 'sphere' ? 0x1cb0f6 : shapeType === 'cone' ? 0xffc800 : 0xce82ff,
      wireframe: wireframe,
      roughness: 0.3,
      metalness: 0.2
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Edges outline
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }));
    mesh.add(line);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.008;
      mesh.rotation.y += 0.012;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [wireframe, shapeType]);

  const handleSelectShape = (type) => {
    setShapeType(type);
    if (type === 'cube') setStats({ faces: 6, edges: 12, vertices: 8 });
    else if (type === 'sphere') setStats({ faces: '1 Curved', edges: 0, vertices: 0 });
    else if (type === 'cone') setStats({ faces: 2, edges: 1, vertices: 1 });
    else if (type === 'cylinder') setStats({ faces: 3, edges: 2, vertices: 0 });
  };

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700' }}>
          Interactive 3D Math Lab 🧊
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Inspect 3D solids in real-time, toggle wireframe, and count faces, edges & vertices!
        </p>
      </div>

      {/* Shape Selector Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['cube', 'sphere', 'cone', 'cylinder'].map(st => (
          <button
            key={st}
            onClick={() => handleSelectShape(st)}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: shapeType === st ? 'var(--secondary)' : 'var(--bg-main)',
              color: shapeType === st ? '#fff' : 'var(--text-muted)',
              fontWeight: '700',
              fontFamily: 'var(--font-rounded)',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {st}
          </button>
        ))}
      </div>

      {/* 3D Canvas Mounting Area */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          maxWidth: '360px',
          height: '280px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--border-light)'
        }}
      />

      {/* 3D Properties Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', width: '100%', maxWidth: '360px' }}>
        <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '700', fontFamily: 'var(--font-rounded)' }}>
          <div style={{ fontSize: '0.75rem' }}>Faces</div>
          <div style={{ fontSize: '1.2rem' }}>{stats.faces}</div>
        </div>
        <div style={{ padding: '10px', backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '700', fontFamily: 'var(--font-rounded)' }}>
          <div style={{ fontSize: '0.75rem' }}>Edges</div>
          <div style={{ fontSize: '1.2rem' }}>{stats.edges}</div>
        </div>
        <div style={{ padding: '10px', backgroundColor: 'var(--purple-light)', color: 'var(--purple)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '700', fontFamily: 'var(--font-rounded)' }}>
          <div style={{ fontSize: '0.75rem' }}>Vertices</div>
          <div style={{ fontSize: '1.2rem' }}>{stats.vertices}</div>
        </div>
      </div>

      <Button3D variant="outline" size="sm" onClick={() => setWireframe(!wireframe)} icon={Eye}>
        {wireframe ? 'Solid View' : 'Wireframe View'}
      </Button3D>
    </CardRounded>
  );
};
