import React from 'react';
import { CameraMode } from '../components/ar/CameraMode';

export const ARLab = () => {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <CameraMode />
    </div>
  );
};
