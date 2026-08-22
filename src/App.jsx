import React, { useState, useEffect } from 'react';
import { GameProvider } from './context/GameContext';
import { HeaderStats } from './components/gamification/HeaderStats';
import { FloatingPiBot } from './components/chat/FloatingPiBot';
import { OfflineNotice } from './components/ui/OfflineNotice';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Quiz } from './pages/Quiz';
import { Library } from './pages/Library';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { ThreeLab } from './pages/ThreeLab';
import { ARLab } from './pages/ARLab';
import { OlympiadHub } from './pages/OlympiadHub';
import { Home as HomeIcon, BookOpen, HelpCircle, BookMarked, BarChart3, User, Box, Camera, Trophy } from 'lucide-react';
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

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'learn', label: 'Syllabus Map', icon: BookOpen },
    { id: 'olympiadHub', label: 'Olympiad Hub', icon: Trophy },
    { id: 'quiz', label: 'Practice Quiz', icon: HelpCircle },
    { id: 'library', label: 'Digital Library', icon: BookMarked },
    { id: 'threeLab', label: '3D Math Lab', icon: Box },
    { id: 'arLab', label: 'AR Explorer', icon: Camera },
    { id: 'dashboard', label: 'Progress Report', icon: BarChart3 },
    { id: 'profile', label: 'Avatar & Shop', icon: User }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: 'var(--bg-main)' }}>
      {/* Offline Toast Notification */}
      <OfflineNotice />

      {/* Top Header */}
      <HeaderStats currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area filling wide screens with rich proportions */}
      <main
        key={currentPage}
        className="page-enter"
        style={{
          flex: 1,
          padding: '28px 32px 100px 32px',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%'
        }}
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
      <AppContent />
    </GameProvider>
  );
}
