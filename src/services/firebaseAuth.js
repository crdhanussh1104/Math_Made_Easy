import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAfNl0uDjmv5t3ZLFzGi8fYTSaY_kzdxcI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "math-made-easy-1-10.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "math-made-easy-1-10",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "math-made-easy-1-10.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "108713269461",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:108713269461:web:638f38e47b873a30292a5c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-H9M0CDRQDT"
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

// Configure Google OAuth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

/**
 * Sign in with real Google OAuth Popup
 * Opens accounts.google.com account chooser
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return {
      success: true,
      user: {
        uid: user.uid,
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        photoURL: user.photoURL
      }
    };
  } catch (error) {
    console.error('Firebase Google Sign-In Error:', error);
    return {
      success: false,
      code: error.code,
      message: error.message
    };
  }
};

/**
 * Sign out from Google & Firebase
 */
export const logOutGoogle = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Firebase Sign-Out Error:', error);
    return { success: false, error };
  }
};

/**
 * Listen for Google Auth state changes
 */
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
