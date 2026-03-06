'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Globe, User, LogOut, LogIn, Home } from 'lucide-react';

export default function Header() {
    const { language, setLanguage, mounted } = useLanguage();
    const { data: session, status } = useSession();

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative" style={{ width: '30px', height: '30px' }}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            sizes="30px"
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl text-gray-900">
                        {mounted ? (language === 'pt' ? 'Construtor de CV' : language === 'de' ? 'Lebenslauf-Generator' : 'CV Builder') : 'CV Builder'}
                    </span>
                </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-brand-lilac transition-colors">
                        <Home className="w-4 h-4" />
                        <span className="hidden sm:inline">{mounted ? (language === 'pt' ? 'Início' : language === 'de' ? 'Startseite' : 'Home') : 'Home'}</span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as 'en' | 'pt' | 'de')}
                        className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-brand-lilac transition-colors"
                    >
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>

                    {status === 'loading' ? (
                        <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                    ) : session ? (
                        <div className="flex items-center gap-3">
                            <Link href="/account" className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-brand-lilac transition-colors">
                                <User className="w-4 h-4" />
                                <span className="hidden sm:inline">Account</span>
                            </Link>
                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">Sign out</span>
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="flex items-center gap-2 px-4 py-2 bg-brand-lilac text-white rounded-lg text-sm font-medium hover:bg-brand-lilac/90 transition-colors"
                        >
                            <LogIn className="w-4 h-4" />
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
