import React, { useEffect, useState } from 'react';
import { Globe, Sparkles } from 'lucide-react';

const GOOGLE_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇮🇳' },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्', flag: '🇮🇳' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' }
];

export const GoogleTranslate = ({ variant = 'login' }) => {
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    // 1. Initialize callback
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,te,ta,kn,ml,mr,bn,gu,pa,or,as,ur,sa,es,fr,de,ar,zh-CN,ja',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
      }
    };

    // 2. Load script
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.googleTranslateElementInit) {
      try {
        window.googleTranslateElementInit();
      } catch (e) {}
    }

    // Check existing cookie
    try {
      const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z\-]+)/);
      if (match && match[1]) {
        setActiveLang(match[1]);
      }
    } catch (e) {}
  }, []);

  const changeGoogleTranslateLanguage = (langCode) => {
    setActiveLang(langCode);
    
    // Set cookies for Google Translate
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    
    // Also try selecting the internal select element if available
    const selectElem = document.querySelector('.goog-te-combo');
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      // Reload page to apply google translate cookie
      window.location.reload();
    }
  };

  return (
    <div className="google-translate-wrapper" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      {/* Official Google Translate Gadget Container */}
      <div id="google_translate_element" style={{ display: 'inline-block' }}></div>
    </div>
  );
};
