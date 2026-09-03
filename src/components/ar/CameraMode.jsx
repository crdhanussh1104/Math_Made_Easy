import React, { useState, useEffect, useRef } from 'react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { BadgeChip } from '../ui/BadgeChip';
import { RewardModal } from '../gamification/RewardModal';
import { arEngine } from '../../services/arDetectionEngine';
import { soundFx } from '../../utils/audioSynth';
import { triggerConfetti } from '../../utils/confetti';
import { useGame } from '../../context/GameContext';
import {
  Camera, RefreshCw, CheckCircle2, Sparkles, PlusCircle, Trash2,
  Box, Scale, Hash, PieChart, Ruler, Layers, Upload, Download, Eye, Image as ImageIcon
} from 'lucide-react';

export const CameraMode = () => {
  const { addXP, addGems } = useGame();
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const [hasWebcam, setHasWebcam] = useState(false);
  const [streamActive, setStreamActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null); // Captured snapshot base64
  const [activeActivity, setActiveActivity] = useState('count'); // count, hcf, lcm, fractions, measurement
  const [arTags, setArTags] = useState([]);
  const [measurePoints, setMeasurePoints] = useState([]);
  
  // Clean initial state (no dummy numbers before photo/tagging!)
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [showRewardModal, setShowRewardModal] = useState(false);

  const activities = [
    { id: 'count', label: '1. Count Real Objects', icon: Hash, color: '#58cc02' },
    { id: 'hcf', label: '2. HCF of Counted Objects', icon: Layers, color: '#1cb0f6' },
    { id: 'lcm', label: '3. LCM of Counted Objects', icon: Sparkles, color: '#ce82ff' },
    { id: 'fractions', label: '4. Fraction Grid Overlay', icon: PieChart, color: '#ff9600' },
    { id: 'measurement', label: '5. AR Virtual Ruler & Area', icon: Ruler, color: '#ec4899' }
  ];

  // Initialize Camera Stream cleanly
  useEffect(() => {
    let activeStream = null;

    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'environment' }
        });
        activeStream = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setHasWebcam(true);
            setStreamActive(true);
          };
        }
      } catch (err) {
        console.warn('Webcam permission dismissed or unavailable:', err);
        setHasWebcam(false);
        setStreamActive(false);
      }
    }

    setupCamera();

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Snap Photo from Live Camera Stream
  const handleSnapPhoto = () => {
    if (!videoRef.current || !streamActive) {
      alert('Camera is not active. You can upload a photo using the "Upload Image File" button!');
      return;
    }

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    setCapturedImage(dataUrl);
    soundFx.playCorrect();
  };

  // Upload Photo File Fallback
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCapturedImage(event.target.result);
        soundFx.playCorrect();
      };
      reader.readAsDataURL(file);
    }
  };

  // Retake / Clear Photo Snapshot
  const handleRetakePhoto = () => {
    setCapturedImage(null);
    setArTags([]);
    setMeasurePoints([]);
    setNumA(0);
    setNumB(0);
    soundFx.playClick();
  };

  // Tap Viewfinder or Photo to Tag Real World Objects
  const handleCanvasClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (activeActivity === 'measurement') {
      if (measurePoints.length >= 2) {
        setMeasurePoints([{ x, y }]);
      } else {
        setMeasurePoints(prev => [...prev, { x, y }]);
      }
    } else {
      const newTagCount = arTags.length + 1;
      const newTag = { id: Date.now(), x, y, label: `Item #${newTagCount}` };
      const updatedTags = [...arTags, newTag];
      setArTags(updatedTags);

      // Dynamically update Num A with actual tagged objects count!
      setNumA(updatedTags.length);
      if (numB === 0) setNumB(updatedTags.length * 2);
    }
    soundFx.playClick();
  };

  const handleClearTags = () => {
    setArTags([]);
    setMeasurePoints([]);
    setNumA(0);
    setNumB(0);
    soundFx.playClick();
  };

  const [completedActivities, setCompletedActivities] = useState([]);

  const handleCompleteActivity = () => {
    soundFx.playCorrect();
    triggerConfetti('levelUp');
    if (!completedActivities.includes(activeActivity)) {
      addXP(50);
      addGems(20);
      setCompletedActivities(prev => [...prev, activeActivity]);
    }
    setShowRewardModal(true);
  };

  // Calculate Real Distance between 2 points in Ruler mode
  let calculatedDistanceCm = 0;
  if (measurePoints.length === 2) {
    const dx = measurePoints[1].x - measurePoints[0].x;
    const dy = measurePoints[1].y - measurePoints[0].y;
    const pixelDist = Math.sqrt(dx * dx + dy * dy);
    calculatedDistanceCm = Math.round(pixelDist / 12);
  }

  // Math Calculations for Counted Real Objects (Only when values exist!)
  const totalCount = arTags.length;
  const calculatedHCF = (numA > 0 || numB > 0) ? arEngine.calculateHCF(numA || 1, numB || 1) : 0;
  const calculatedLCM = (numA > 0 || numB > 0) ? arEngine.calculateLCM(numA || 1, numB || 1) : 0;

  const isPhotoReady = capturedImage !== null;

  return (
    <CardRounded style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.5rem', fontWeight: '800' }}>
          📷 Real-World AR Math Camera & Object Analyzer
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
          Snap a photo of real objects on your desk, tap to count items, and overlay real AR Math calculations!
        </p>
      </div>

      {/* Activity Selector Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '100%', paddingBottom: '6px' }}>
        {activities.map(act => (
          <button
            key={act.id}
            onClick={() => { setActiveActivity(act.id); soundFx.playClick(); }}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none',
              backgroundColor: activeActivity === act.id ? act.color : 'var(--bg-main)',
              color: activeActivity === act.id ? '#fff' : 'var(--text-muted)',
              fontWeight: '700', fontFamily: 'var(--font-rounded)', cursor: 'pointer',
              whiteSpace: 'nowrap', fontSize: '0.85rem', transition: 'all 0.2s ease'
            }}
          >
            {act.label}
          </button>
        ))}
      </div>

      {/* Camera / Photo Snapshot Interactive Canvas */}
      <div
        onClick={handleCanvasClick}
        style={{
          width: '100%',
          maxWidth: '640px',
          height: '360px',
          backgroundColor: '#0f172a',
          borderRadius: 'var(--radius-md)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid var(--secondary)',
          cursor: 'crosshair',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        {/* 1. Render Captured Image Snapshot or Live Video Stream */}
        {capturedImage ? (
          <img
            src={capturedImage}
            alt="Real World AR Snapshot"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: hasWebcam ? 'block' : 'none'
            }}
          />
        )}

        {/* 2. Initial Prompt Guide Overlay before photo capture */}
        {!capturedImage && (
          <div style={{
            position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.45)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: '#fff', textAlign: 'center', padding: '24px', pointerEvents: 'none'
          }}>
            <Camera size={48} color="var(--secondary)" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', fontWeight: '800' }}>
              {hasWebcam ? 'Live Camera Feed Ready' : 'Camera Standby Mode'}
            </h4>
            <p style={{ fontSize: '0.88rem', opacity: 0.9, marginTop: '4px', maxWidth: '380px' }}>
              Click <strong>"📸 Snap Photo & Analyze Object"</strong> below to take a picture of items on your desk!
            </p>
          </div>
        )}

        {/* 3. OVERLAY: Count Objects Tags (Only when tags exist!) */}
        {activeActivity === 'count' && arTags.map((tag, i) => (
          <div
            key={tag.id}
            className="animate-pop"
            style={{
              position: 'absolute', left: `${tag.x - 20}px`, top: `${tag.y - 20}px`,
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: '#58cc02', color: '#fff', fontWeight: '800', fontSize: '1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '3px solid #fff', boxShadow: '0 0 14px #58cc02', pointerEvents: 'none'
            }}
          >
            {i + 1}
          </div>
        ))}

        {/* 4. OVERLAY: HCF / LCM Calculation Box (ONLY WHEN PHOTO IS CAPTURED OR TAGS EXIST!) */}
        {(activeActivity === 'hcf' || activeActivity === 'lcm') && (isPhotoReady || totalCount > 0) && (
          <div style={{
            position: 'absolute', top: '16px', backgroundColor: 'rgba(15, 23, 42, 0.92)',
            color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius-md)',
            border: '2px solid var(--secondary)', textAlign: 'center', fontWeight: '800',
            boxShadow: '0 8px 20px rgba(0,0,0,0.4)', pointerEvents: 'none'
          }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              REAL PHOTO OBJECTS AR CALCULATION:
            </div>
            <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-rounded)', marginTop: '4px' }}>
              {activeActivity === 'hcf' ? `HCF(${numA}, ${numB}) = ${calculatedHCF}` : `LCM(${numA}, ${numB}) = ${calculatedLCM}`}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
              (Based on {totalCount > 0 ? `${totalCount} tagged objects in your photo` : 'photo objects'})
            </div>
          </div>
        )}

        {/* 5. OVERLAY: Fractions Grid (ONLY WHEN PHOTO IS CAPTURED OR TAGS EXIST!) */}
        {activeActivity === 'fractions' && (isPhotoReady || totalCount > 0) && (
          <div style={{
            position: 'absolute', width: '220px', height: '220px',
            border: '4px solid #ff9600', borderRadius: '50%', display: 'grid',
            gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', overflow: 'hidden',
            pointerEvents: 'none', boxShadow: '0 0 20px rgba(255, 150, 0, 0.5)'
          }}>
            <div style={{ backgroundColor: 'rgba(255, 150, 0, 0.45)', border: '1px stroke #fff' }} />
            <div style={{ backgroundColor: 'rgba(255, 150, 0, 0.45)', border: '1px stroke #fff' }} />
            <div style={{ backgroundColor: 'rgba(255, 150, 0, 0.45)', border: '1px stroke #fff' }} />
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px stroke #fff' }} />
            <span style={{ position: 'absolute', top: '42%', left: '32%', color: '#fff', fontWeight: '800', fontSize: '1.3rem', textShadow: '0 2px 4px #000' }}>3/4 Shaded</span>
          </div>
        )}

        {/* 6. OVERLAY: AR Virtual Ruler Measurement */}
        {activeActivity === 'measurement' && (
          <>
            {measurePoints.map((pt, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute', left: `${pt.x - 10}px`, top: `${pt.y - 10}px`,
                  width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ec4899',
                  border: '2px solid #fff', boxShadow: '0 0 10px #ec4899', pointerEvents: 'none'
                }}
              />
            ))}

            {measurePoints.length === 2 && (
              <div style={{
                position: 'absolute', top: '16px', backgroundColor: 'rgba(15, 23, 42, 0.92)',
                color: '#fff', padding: '12px 20px', borderRadius: 'var(--radius-md)',
                border: '2px solid #ec4899', textAlign: 'center', fontWeight: '800',
                pointerEvents: 'none'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#ec4899' }}>Simulated AR Pixel Distance:</div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-rounded)' }}>
                  Length = {calculatedDistanceCm} cm | Estimated Area = {calculatedDistanceCm * 6} cm²
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Primary Photo Capture & Upload Controls Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', width: '100%', maxWidth: '640px' }}>
        
        {!capturedImage ? (
          <Button3D variant="warning" size="md" onClick={handleSnapPhoto} icon={Camera}>
            📸 Snap Photo & Analyze Object
          </Button3D>
        ) : (
          <Button3D variant="purple" size="md" onClick={handleRetakePhoto} icon={RefreshCw}>
            🔄 Retake Live Photo
          </Button3D>
        )}

        {/* Hidden File Input for Image Upload */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />

        <Button3D
          variant="secondary"
          size="md"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          icon={Upload}
        >
          📁 Upload Image File
        </Button3D>
      </div>

      {/* Dynamic Inputs for Counted Photo Objects (Shown only when photo is snapped or active) */}
      {(activeActivity === 'hcf' || activeActivity === 'lcm') && (isPhotoReady || totalCount > 0) && (
        <div style={{
          display: 'flex', gap: '16px', alignItems: 'center', backgroundColor: 'var(--bg-main)',
          padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)'
        }}>
          <label style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-main)' }}>First Group Count (Num A):</label>
          <input
            type="number"
            value={numA}
            onChange={(e) => setNumA(Number(e.target.value))}
            style={{ width: '70px', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', fontSize: '0.95rem' }}
          />
          <label style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-main)' }}>Second Group Count (Num B):</label>
          <input
            type="number"
            value={numB}
            onChange={(e) => setNumB(Number(e.target.value))}
            style={{ width: '70px', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-light)', fontWeight: '800', fontSize: '0.95rem' }}
          />
        </div>
      )}

      {/* Action Footer */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button3D variant="outline" size="sm" onClick={handleClearTags} icon={Trash2}>
          Clear Photo Tags ({arTags.length})
        </Button3D>

        <Button3D variant="primary" size="md" onClick={handleCompleteActivity} icon={Sparkles}>
          Complete AR Activity (+50 XP)
        </Button3D>
      </div>

      {/* Reward Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onContinue={() => setShowRewardModal(false)}
        score={100}
        xpEarned={50}
        gemsEarned={20}
      />
    </CardRounded>
  );
};
