import React, { useState, useEffect } from 'react';
import { GameProvider } from './context/GameContext';
import { LanguageProvider } from './context/LanguageContext';
import { HeaderStats } from './components/gamification/HeaderStats';
import { FloatingPiBot } from './components/chat/FloatingPiBot';
import { OfflineNotice } from './components/ui/OfflineNotice';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Home } from './pages/Home';

import { Learn } from './pages/Learn';
import { Quiz } from './pages/Quiz';
import { Library } from './pages/Library';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { ThreeLab } from './pages/ThreeLab';
import { ARLab } from './pages/ARLab';
import { OlympiadHub } from './pages/OlympiadHub';
import './styles/global.css';

const VALID_PAGES = ['home', 'learn', 'olympiadHub', 'quiz', 'library', 'threeLab', 'arLab', 'dashboard', 'profile'];

const getInitialPage = () => {
  try {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (VALID_PAGES.includes(hash)) return hash;
    const saved = localStorage.getItem('mme_currentPage');
    if (VALID_PAGES.includes(saved)) return saved;
  } catch (e) {
    console.warn('Unable to read initial page from hash/storage:', e);
  }
  return 'home';
};

const getInitialChapter = () => {
  try {
    return localStorage.getItem('mme_selectedChapterId') || 'chap_1';
  } catch (e) {
    return 'chap_1';
  }
};

function AppContent() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedChapterId, setSelectedChapterIdState] = useState(getInitialChapter);

  const navigateTo = (page) => {
    if (VALID_PAGES.includes(page)) {
      setCurrentPage(page);
      try {
        window.location.hash = page;
        localStorage.setItem('mme_currentPage', page);
      } catch (e) {}
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const setSelectedChapterId = (chapId) => {
    setSelectedChapterIdState(chapId);
    if (chapId) {
      try {
        localStorage.setItem('mme_selectedChapterId', chapId);
      } catch (e) {}
    }
  };

  // Sync hash and page state on browser back/forward and page refresh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
        try {
          localStorage.setItem('mme_currentPage', hash);
        } catch (e) {}
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Ensure hash reflects current page on load
    const currentHash = window.location.hash.replace(/^#\/?/, '');
    if (currentHash !== currentPage && VALID_PAGES.includes(currentPage)) {
      window.location.hash = currentPage;
    }
    try {
      localStorage.setItem('mme_currentPage', currentPage);
    } catch (e) {}

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

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
      <HeaderStats currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area filling wide screens with rich responsive proportions */}
      <ErrorBoundary key={currentPage}>
        <main
          className="app-main-content page-enter"
        >
          {currentPage === 'home' && (
            <Home
              onNavigate={navigateTo}
              onSelectChapter={setSelectedChapterId}
            />
          )}

          {currentPage === 'learn' && (
            <Learn
              selectedChapterId={selectedChapterId}
              onNavigate={navigateTo}
              onSelectChapter={setSelectedChapterId}
            />
          )}

          {currentPage === 'olympiadHub' && (
            <OlympiadHub
              onNavigate={navigateTo}
              onSelectChapter={setSelectedChapterId}
            />
          )}

          {currentPage === 'quiz' && (
            <Quiz
              selectedChapterId={selectedChapterId}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'library' && <Library />}

          {currentPage === 'threeLab' && <ThreeLab />}

          {currentPage === 'arLab' && <ARLab />}

          {currentPage === 'dashboard' && <Dashboard />}

          {currentPage === 'profile' && <Profile />}
        </main>
      </ErrorBoundary>


      {/* Global Floating Pi-Bot Assistant */}
      <FloatingPiBot onNavigate={navigateTo} />
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
