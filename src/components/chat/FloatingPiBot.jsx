import React, { useState, useRef, useEffect } from 'react';
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
      text: t('pibot_greeting') || 'Hello! I am Pi-Bot, your AI Math tutor. Ask me any ICSE question!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { text: t('pibot_quick_algebra') || 'How to solve simultaneous equations?' },
    { text: t('pibot_quick_geometry') || 'State Mid-Point Theorem' },
    { text: t('pibot_quick_fractions') || 'How to add unlike fractions?' },
    { text: "HCF of 12 and 18" },
    { text: "Explain Pythagoras Theorem" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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
        handleSend("Explain the Pythagoras Theorem and formula");
      }, 2200);
    }
  };

  return (
    <>
      {/* Global Floating Action Button */}
      <div
        onClick={toggleOpen}
        className="pibot-floating-btn animate-float hover-lift"
        title={t('pibot_title') || 'Ask Pi-Bot'}
        aria-label="Open AI Math Assistant"
      >
        <Bot size={22} />
        <span style={{
          position: 'absolute', top: -2, right: -2, width: '10px', height: '10px',
          backgroundColor: 'var(--primary)', borderRadius: '50%', border: '2px solid #fff'
        }} />
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="pibot-modal-window animate-pop">
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1cb0f6, #00f0ff)',
            color: '#fff',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.25)', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1rem', fontWeight: '800' }}>
                  {t('pibot_title') || 'Pi-Bot'}
                </h3>
                <span style={{ fontSize: '0.7rem', opacity: 0.9, fontWeight: '700' }}>
                  24/7 AI Math Companion
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Mode Selector Toggle: Hint Mode vs Full Explanation */}
          <div style={{
            display: 'flex',
            backgroundColor: 'var(--bg-main)',
            padding: '5px',
            gap: '6px',
            borderBottom: '1px solid var(--border-light)'
          }}>
            <button
              onClick={() => setMode('full')}
              style={{
                flex: 1, padding: '5px', borderRadius: 'var(--radius-full)', border: 'none',
                backgroundColor: mode === 'full' ? 'var(--primary)' : 'transparent',
                color: mode === 'full' ? '#fff' : 'var(--text-muted)',
                fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.76rem', cursor: 'pointer'
              }}
            >
              📖 {t('solution') || 'Full Solution'}
            </button>
            <button
              onClick={() => setMode('hint')}
              style={{
                flex: 1, padding: '5px', borderRadius: 'var(--radius-full)', border: 'none',
                backgroundColor: mode === 'hint' ? 'var(--purple)' : 'transparent',
                color: mode === 'hint' ? '#fff' : 'var(--text-muted)',
                fontWeight: '700', fontFamily: 'var(--font-rounded)', fontSize: '0.76rem', cursor: 'pointer'
              }}
            >
              💡 {t('hints') || 'Step Clues'}
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: m.sender === 'user' ? 'var(--secondary)' : 'var(--bg-main)',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                  padding: '10px 14px',
                  borderRadius: m.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  maxWidth: '88%',
                  fontSize: '0.88rem',
                  lineHeight: '1.45',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '6px 10px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp.text)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card-solid)',
                  fontSize: '0.72rem',
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
          <div style={{ padding: '8px 10px', display: 'flex', gap: '6px', backgroundColor: 'var(--bg-card-solid)', borderTop: '1px solid var(--border-light)', alignItems: 'center' }}>
            <input
              type="text"
              placeholder={isListening ? "Listening to your voice..." : (t('pibot_placeholder') || "Ask any math problem...")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-light)',
                fontSize: '0.85rem',
                outline: 'none',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)',
                minWidth: 0
              }}
            />

            {/* Mic Voice Input Button */}
            <button
              onClick={handleToggleVoiceInput}
              title="Voice Input"
              aria-label="Voice Input"
              style={{
                padding: '8px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: isListening ? 'var(--accent)' : 'var(--bg-main)',
                color: isListening ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0
              }}
            >
              <Mic size={16} />
            </button>

            <Button3D variant="secondary" size="sm" onClick={() => handleSend()} icon={Send} style={{ flexShrink: 0, padding: '8px 12px' }}>
              {t('pibot_send') || 'Ask'}
            </Button3D>
          </div>
        </div>
      )}
    </>
  );
};
