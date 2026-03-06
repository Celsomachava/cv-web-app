'use client';

import { useState } from 'react';
import { ChevronRight, FileText, User, Briefcase, GraduationCap, Award, Languages, Trophy, Heart, Eye, CreditCard, Layout, Palette } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/translations';
import PersonalInfo from '../steps/PersonalInfoNew';
import Summary from '../steps/Summary';
import Experience from '../steps/Experience';
import Education from '../steps/Education';
import Skills from '../steps/Skills';
import LanguagesStep from '../steps/Languages';
import Certifications from '../steps/Certifications';
import Hobbies from '../steps/Hobbies';
import ColorPicker from '../steps/ColorPicker';
import TemplateSelector from '../steps/TemplateSelector';
import LivePreview from './LivePreview';
import Payment from '../steps/Payment';

const sections = [
    { id: 'template', icon: Layout, key: 'template' as const },
    { id: 'personal', icon: User, key: 'personal' as const },
    { id: 'summary', icon: FileText, key: 'summary' as const },
    { id: 'experience', icon: Briefcase, key: 'experience' as const },
    { id: 'education', icon: GraduationCap, key: 'education' as const },
    { id: 'skills', icon: Award, key: 'skills' as const },
    { id: 'languages', icon: Languages, key: 'languages' as const },
    { id: 'certifications', icon: Trophy, key: 'certifications' as const },
    { id: 'hobbies', icon: Heart, key: 'hobbies' as const },
    { id: 'color', icon: Palette, key: 'color' as const },
    { id: 'preview', icon: Eye, key: 'preview' as const },
    { id: 'payment', icon: CreditCard, key: 'download' as const },
];

export default function BuilderLayout() {
    const [activeSection, setActiveSection] = useState('template');
    const { language } = useLanguage();
    const t = translations[language];

    const renderSection = () => {
        switch (activeSection) {
            case 'template': return <TemplateSelector />;
            case 'personal': return <PersonalInfo />;
            case 'summary': return <Summary />;
            case 'experience': return <Experience />;
            case 'education': return <Education />;
            case 'skills': return <Skills />;
            case 'languages': return <LanguagesStep />;
            case 'certifications': return <Certifications />;
            case 'hobbies': return <Hobbies />;
            case 'color': return <ColorPicker />;
            case 'preview': return <LivePreview />;
            case 'payment': return <Payment />;
            default: return <PersonalInfo />;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <div className="w-72 bg-white border-r border-gray-200 overflow-y-auto p-6">
                {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all mb-2 ${
                                isActive
                                    ? 'bg-brand-lilac text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium flex-1">{t.sidebar[section.key]}</span>
                            {isActive && <ChevronRight className="w-5 h-5 flex-shrink-0" />}
                        </button>
                    );
                })}
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 overflow-y-auto flex flex-col">
                    <div className="flex-1 max-w-3xl mx-auto p-8 w-full">
                        {renderSection()}
                    </div>
                    
                    <div className="border-t border-gray-200 bg-white p-6">
                        <div className="max-w-3xl mx-auto flex justify-between">
                            <button
                                onClick={() => {
                                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                                    if (currentIndex > 0) {
                                        setActiveSection(sections[currentIndex - 1].id);
                                    }
                                }}
                                disabled={activeSection === sections[0].id}
                                className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {t.wizard.back}
                            </button>
                            <button
                                onClick={() => {
                                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                                    if (currentIndex < sections.length - 1) {
                                        setActiveSection(sections[currentIndex + 1].id);
                                    }
                                }}
                                disabled={activeSection === sections[sections.length - 1].id}
                                className="px-8 py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {t.wizard.next}
                            </button>
                        </div>
                    </div>
                </div>

                {activeSection !== 'payment' && activeSection !== 'preview' && (
                    <div className="w-[500px] bg-white border-l border-gray-200 overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
                            <h3 className="font-semibold text-gray-900">
                                {t.sidebar.livePreview}
                            </h3>
                        </div>
                        <div className="p-6">
                            <LivePreview />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
