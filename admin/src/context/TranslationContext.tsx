// Translation context for Admin Dashboard
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { vi, type TranslationKeys } from '../locales/vi';

type TranslationContextType = {
  t: TranslationKeys;
  locale: string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const contextValue: TranslationContextType = {
    t: vi,
    locale: 'vi',
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}

// Helper hook for easier access to translations
export function useT() {
  const { t } = useTranslation();
  return t;
}
