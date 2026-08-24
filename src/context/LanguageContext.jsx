import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LANGUAGES, translations } from '../i18n/translations';

const LANGUAGE_STORAGE_KEY = 'MATH_MADE_EASY_LANGUAGE';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key, paramsOrFallback, fallback) => key,
  languages: LANGUAGES,
  currentLanguageMeta: LANGUAGES[0]
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (e) {
      console.warn('Could not read language from localStorage', e);
    }
    return 'en';
  });

  const setLanguage = useCallback((newLang) => {
    if (translations[newLang]) {
      setLanguageState(newLang);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
        // Also update html lang attribute
        document.documentElement.lang = newLang;
      } catch (e) {
        console.warn('Could not save language to localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Translate key with optional parameters and fallback
   * Usage:
   * t('header_streak', { streak: 5 })
   * t('home_hero_title')
   * t('custom_key', 'Default text')
   */
  const t = useCallback((key, paramsOrFallback = {}, fallbackString = '') => {
    const isParamObject = typeof paramsOrFallback === 'object' && paramsOrFallback !== null;
    const fallback = typeof paramsOrFallback === 'string' ? paramsOrFallback : fallbackString;
    const params = isParamObject ? paramsOrFallback : {};

    // 1. Check current language
    let text = translations[language]?.[key];

    // 2. Fallback to English if missing in target language
    if (!text && language !== 'en') {
      text = translations.en?.[key];
    }

    // 3. Fallback to provided fallback string or key itself
    if (!text) {
      text = fallback || key;
    }

    // Interpolate {paramName} placeholders
    if (typeof text === 'string' && Object.keys(params).length > 0) {
      return text.replace(/\{(\w+)\}/g, (match, paramName) => {
        return params[paramName] !== undefined ? params[paramName] : match;
      });
    }

    return text;
  }, [language]);

  const currentLanguageMeta = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      languages: LANGUAGES,
      currentLanguageMeta
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
