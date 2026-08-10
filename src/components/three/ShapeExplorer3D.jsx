import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { soundFx } from '../../utils/audioSynth';
import { Box, Eye, RefreshCw } from 'lucide-react';

export const ShapeExplorer3D = () => {
  const mountRef = useRef(null);
  const [shapeType, setShapeType] = useState('cube'); // cube, cuboid, sphere, cylinder, cone, pyramid, prism
  const [wireframe, setWireframe] = useState(false);
  const [showEdges, setShowEdges] = useState(true);
  const [showFaces, setShowFaces] = useState(true);

  // Dimensions
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1.5);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const w = currentMount.clientWidth || 360;
    const h = 280;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a');

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(4, 3, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Create Geometry based on shapeType
    let geom;
    let colorHex = 0x58cc02;

    if (shapeType === 'cuboid') {
      geom = new THREE.BoxGeometry(width, height, 1.5);
      colorHex = 0x1cb0f6;
    } else if (shapeType === 'sphere') {
      geom = new THREE.SphereGeometry(radius, 24, 24);
      colorHex = 0xce82ff;
    } else if (shapeType === 'cylinder') {
      geom = new THREE.CylinderGeometry(radius, radius, height, 24);
      colorHex = 0xff9600;
    } else if (shapeType === 'cone') {
      geom = new THREE.ConeGeometry(radius, height, 24);
      colorHex = 0xffc800;
    } else if (shapeType === 'pyramid') {
      geom = new THREE.ConeGeometry(radius, height, 4); // 4-sided pyramid
      colorHex = 0xff4b4b;
    } else if (shapeType === 'prism') {
      geom = new THREE.CylinderGeometry(radius, radius, height, 3); // Triangular prism
      colorHex = 0x2bdeac;
    } else {
      geom = new THREE.BoxGeometry(width, width, width);
      colorHex = 0x58cc02;
    }

    const mat = new THREE.MeshStandardMaterial({
      color: colorHex,
      wireframe: wireframe,
      visible: showFaces,
      roughness: 0.3,
      metalness: 0.2
    });

    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    // Edges
    let lineSegments;
    if (showEdges) {
      const edgesGeom = new THREE.EdgesGeometry(geom);
      lineSegments = new THREE.LineSegments(edgesGeom, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }));
      mesh.add(lineSegments);
    }

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geom.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [shapeType, wireframe, showEdges, showFaces, width, height, radius]);

  // Real-time calculations
  const calculateStats = () => {
    if (shapeType === 'cube') {
      const s = width;
      return { sa: (6 * s * s).toFixed(1), vol: (s * s * s).toFixed(1), f: 6, e: 12, v: 8 };
    } else if (shapeType === 'cuboid') {
      const l = width, h = height, w = 1.5;
      return { sa: (2 * (l * h + h * w + l * w)).toFixed(1), vol: (l * h * w).toFixed(1), f: 6, e: 12, v: 8 };
    } else if (shapeType === 'sphere') {
      const r = radius;
      return { sa: (4 * Math.PI * r * r).toFixed(1), vol: ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(1), f: 1, e: 0, v: 0 };
    } else if (shapeType === 'cylinder') {
      const r = radius, h = height;
      return { sa: (2 * Math.PI * r * (r + h)).toFixed(1), vol: (Math.PI * r * r * h).toFixed(1), f: 3, e: 2, v: 0 };
    } else if (shapeType === 'cone') {
      const r = radius, h = height, l = Math.sqrt(r * r + h * h);
      return { sa: (Math.PI * r * (r + l)).toFixed(1), vol: ((1 / 3) * Math.PI * r * r * h).toFixed(1), f: 2, e: 1, v: 1 };
    } else if (shapeType === 'pyramid') {
      const b = radius * 2, h = height;
      return { sa: (b * b + 2 * b * Math.sqrt((b / 2) * (b / 2) + h * h)).toFixed(1), vol: ((1 / 3) * b * b * h).toFixed(1), f: 5, e: 8, v: 5 };
    } else {
      const r = radius, h = height;
      return { sa: (2 * (0.5 * r * h) + 3 * r * h).toFixed(1), vol: (0.5 * r * r * h).toFixed(1), f: 5, e: 9, v: 6 };
    }
  };

  const stats = calculateStats();

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      {/* Shapes Selector */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['cube', 'cuboid', 'sphere', 'cylinder', 'cone', 'pyramid', 'prism'].map(s => (
          <button
            key={s}
            onClick={() => { setShapeType(s); soundFx.playClick(); }}
            style={{
              padding: '6px 12px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: shapeType === s ? 'var(--primary)' : 'var(--bg-main)',
              color: shapeType === s ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer',
              textTransform: 'capitalize', fontSize: '0.8rem'
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        style={{
          width: '100%', maxWidth: '380px', height: '260px',
          borderRadius: 'var(--radius-md)', overflow: 'hidden',
          boxShadow: 'var(--shadow-md)', border: '2px solid var(--border-light)'
        }}
      />

      {/* Dimension Sliders */}
      <div style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '380px' }}>
        {(shapeType === 'cube' || shapeType === 'cuboid') && (
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>Width: {width}m</label>
            <input type="range" min="1" max="4" step="0.5" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
          </div>
        )}
        {(shapeType === 'cuboid' || shapeType === 'cylinder' || shapeType === 'cone' || shapeType === 'pyramid' || shapeType === 'prism') && (
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>Height: {height}m</label>
            <input type="range" min="1" max="4" step="0.5" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          </div>
        )}
        {(shapeType === 'sphere' || shapeType === 'cylinder' || shapeType === 'cone' || shapeType === 'pyramid' || shapeType === 'prism') && (
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>Radius: {radius}m</label>
            <input type="range" min="0.8" max="2.5" step="0.2" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
          </div>
        )}
      </div>

      {/* Real-Time Mathematical Calculations Banner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', width: '100%', maxWidth: '380px', textAlign: 'center' }}>
        <div style={{ padding: '8px 4px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', fontWeight: '800' }}>
          <div style={{ fontSize: '0.65rem' }}>Surface Area</div>
          <div style={{ fontSize: '0.9rem' }}>{stats.sa} m²</div>
        </div>
        <div style={{ padding: '8px 4px', backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', borderRadius: 'var(--radius-sm)', fontWeight: '800' }}>
          <div style={{ fontSize: '0.65rem' }}>Volume</div>
          <div style={{ fontSize: '0.9rem' }}>{stats.vol} m³</div>
        </div>
        <div style={{ padding: '8px 4px', backgroundColor: 'var(--warning-light)', color: 'var(--orange)', borderRadius: 'var(--radius-sm)', fontWeight: '800' }}>
          <div style={{ fontSize: '0.65rem' }}>Faces</div>
          <div style={{ fontSize: '0.9rem' }}>{stats.f}</div>
        </div>
        <div style={{ padding: '8px 4px', backgroundColor: 'var(--purple-light)', color: 'var(--purple)', borderRadius: 'var(--radius-sm)', fontWeight: '800' }}>
          <div style={{ fontSize: '0.65rem' }}>Edges</div>
          <div style={{ fontSize: '0.9rem' }}>{stats.e}</div>
        </div>
        <div style={{ padding: '8px 4px', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', borderRadius: 'var(--radius-sm)', fontWeight: '800' }}>
          <div style={{ fontSize: '0.65rem' }}>Vertices</div>
          <div style={{ fontSize: '0.9rem' }}>{stats.v}</div>
        </div>
      </div>
    </CardRounded>
  );
};
