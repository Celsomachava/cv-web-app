'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, en, pt, de } from '../translations';
import { useSession } from 'next-auth/react';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'pt';
    
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('en')) return 'en';
    
    return 'pt'; // Default fallback
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('pt');
    const [mounted, setMounted] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        // Priority: localStorage > user profile > browser detection > default (pt)
        const savedLang = localStorage.getItem('language') as Language;
        const userLang = (session?.user as any)?.language as Language;
        
        if (savedLang) {
            setLanguageState(savedLang);
        } else if (userLang) {
            setLanguageState(userLang);
            localStorage.setItem('language', userLang);
        } else {
            const detectedLang = detectBrowserLanguage();
            setLanguageState(detectedLang);
        }
        
        setMounted(true);
    }, [session]);

    const setLanguage = async (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        
        // Save to user profile if logged in
        if (session?.user) {
            try {
                await fetch('/api/user/language', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language: lang }),
                });
            } catch (error) {
                console.error('Failed to save language preference');
            }
        }
    };

    const translations = language === 'en' ? en : language === 'pt' ? pt : de;

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations,
                mounted,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
