import React, { useState, useEffect } from 'react';
import { GameProvider } from './context/GameContext';
import { LanguageProvider } from './context/LanguageContext';
import { HeaderStats } from './components/gamification/HeaderStats';
import { FloatingPiBot } from './components/chat/FloatingPiBot';
import { OfflineNotice } from './components/ui/OfflineNotice';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Documentation } from './pages/Documentation';
import { Quiz } from './pages/Quiz';
import { Library } from './pages/Library';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { ThreeLab } from './pages/ThreeLab';
import { ARLab } from './pages/ARLab';
import { OlympiadHub } from './pages/OlympiadHub';
import './styles/global.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChapterId, setSelectedChapterId] = useState('chap_1');

  // Register PWA Service Worker for offline support
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('SW registration standby:', err);
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: 'var(--bg-main)' }}>
      {/* Offline Toast Notification */}
      <OfflineNotice />

      {/* Top Header & Mobile Bottom Nav */}
      <HeaderStats currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area filling wide screens with rich responsive proportions */}
      <main
        key={currentPage}
        className="app-main-content page-enter"
      >
        {currentPage === 'home' && (
          <Home
            onNavigate={setCurrentPage}
            onSelectChapter={(id) => setSelectedChapterId(id)}
          />
        )}

        {currentPage === 'learn' && (
          <Learn
            onNavigate={setCurrentPage}
            onSelectChapter={(id) => setSelectedChapterId(id)}
          />
        )}

        {currentPage === 'documentation' && <Documentation />}

        {currentPage === 'olympiadHub' && (
          <OlympiadHub
            onNavigate={setCurrentPage}
            onSelectChapter={(id) => setSelectedChapterId(id)}
          />
        )}

        {currentPage === 'quiz' && (
          <Quiz
            selectedChapterId={selectedChapterId}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'library' && <Library />}

        {currentPage === 'threeLab' && <ThreeLab />}

        {currentPage === 'arLab' && <ARLab />}

        {currentPage === 'dashboard' && <Dashboard />}

        {currentPage === 'profile' && <Profile />}
      </main>

      {/* Global Floating Pi-Bot Assistant */}
      <FloatingPiBot onNavigate={setCurrentPage} />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </GameProvider>
  );
}
