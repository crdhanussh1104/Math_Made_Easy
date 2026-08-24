import React, { useState } from 'react';
import { Bot, Send, Volume2, Sparkles, X, MessageSquare, Mic, HelpCircle, Lightbulb, ArrowRight, Smile } from 'lucide-react';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { speechFx } from '../../utils/speech';
import { soundFx } from '../../utils/audioSynth';
import { solveMathQuestion } from '../../services/aiMathSolver';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';

export const FloatingPiBot = ({ onNavigate }) => {
  const { markAskedPiBot } = useGame();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('full'); // 'full' vs 'hint'
  const [messages, setMessages] = useState([
    {
      sender: 'pibot',
      text: t('pibot_greeting')
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const quickPrompts = [
    { text: t('pibot_quick_algebra') },
    { text: t('pibot_quick_geometry') },
    { text: t('pibot_quick_fractions') },
    { text: "HCF of 12 and 18" },
    { text: "If radius is 6 cm find diameter" }
  ];

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
    soundFx.playClick();
  };

  const handleSend = (textOverride) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    if (markAskedPiBot) markAskedPiBot();

    const newMsgs = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMsgs);
    setInput('');
    soundFx.playClick();

    setTimeout(() => {
      // Use full AI Math Solver to answer EVERY question
      const aiReply = solveMathQuestion(textToSend, mode);
      setMessages(prev => [...prev, { sender: 'pibot', text: aiReply }]);
      speechFx.speak(aiReply.replace(/[*_#]/g, ''));
    }, 400);
  };

  const handleToggleVoiceInput = () => {
    setIsListening(!isListening);
    soundFx.playClick();
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        handleSend("What are applications of trigonometry");
      }, 2500);
    }
  };

  return (
    <>
      {/* Global Floating Action Button */}
      <div
        onClick={toggleOpen}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 400,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-hover) 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          cursor: 'pointer',
          border: '2px solid #ffffff',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s'
        }}
        className="animate-float hover-lift"
        title={t('pibot_title')}
      >
        <Bot size={24} />
        <span style={{
          position: 'absolute', top: -2, right: -2, width: '12px', height: '12px',
          backgroundColor: 'var(--primary)', borderRadius: '50%', border: '2px solid #fff'
        }} />
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div
          className="animate-pop"
          style={{
            position: 'fixed',
            bottom: '155px',
            right: '24px',
            zIndex: 500,
            width: 'calc(100vw - 48px)',
            maxWidth: '420px',
            height: '520px',
            backgroundColor: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '2px solid var(--border-card)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1cb0f6, #00f0ff)',
            color: '#fff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <Bot size={22} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.1rem', fontWeight: '800' }}>
                  {t('pibot_title')}
                </h3>
                <span style={{ fontSize: '0.72rem', opacity: 0.9, fontWeight: '700' }}>
                  24/7 AI Math Companion
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Mode Selector Toggle: Hint Mode vs Full Explanation */}
          <div style={{
            display: 'flex',
            backgroundColor: 'var(--bg-main)',
            padding: '6px',
            gap: '6px',
            borderBottom: '1px solid var(--border-light)'
          }}>
            <button
              onClick={() => setMode('full')}
              style={{
                flex: 1, padding: '6px', borderRadius: 'var(--radius-full)', border: 'none',
                backgroundColor: mode === 'full' ? 'var(--primary)' : 'transparent',
                color: mode === 'full' ? '#fff' : 'var(--text-muted)',
                fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.78rem', cursor: 'pointer'
              }}
            >
              📖 {t('solution')}
            </button>
            <button
              onClick={() => setMode('hint')}
              style={{
                flex: 1, padding: '6px', borderRadius: 'var(--radius-full)', border: 'none',
                backgroundColor: mode === 'hint' ? 'var(--purple)' : 'transparent',
                color: mode === 'hint' ? '#fff' : 'var(--text-muted)',
                fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.78rem', cursor: 'pointer'
              }}
            >
              💡 {t('hints')}
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: m.sender === 'user' ? 'var(--secondary)' : 'var(--bg-main)',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  maxWidth: '85%',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Prompt Chips */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '8px 12px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp.text)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card-solid)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                ⚡ {qp.text}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '12px', display: 'flex', gap: '8px', backgroundColor: 'var(--bg-card-solid)', borderTop: '1px solid var(--border-light)' }}>
            <input
              type="text"
              placeholder={isListening ? "Listening to your voice..." : t('pibot_placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-light)',
                fontSize: '0.88rem',
                outline: 'none',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)'
              }}
            />

            {/* Mic Voice Input Button */}
            <button
              onClick={handleToggleVoiceInput}
              title="Voice Input"
              style={{
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: isListening ? 'var(--accent)' : 'var(--bg-main)',
                color: isListening ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center'
              }}
            >
              <Mic size={18} />
            </button>

            <Button3D variant="secondary" size="sm" onClick={() => handleSend()} icon={Send}>
              {t('pibot_send')}
            </Button3D>
          </div>
        </div>
      )}
    </>
  );
};

