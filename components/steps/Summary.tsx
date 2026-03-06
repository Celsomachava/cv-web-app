'use client';

import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Summary() {
    const { cvData, updateSummary } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.summary.title}</h2>
                <p className="text-gray-600">{t.steps.summary.subtitle}</p>
            </div>

            <div className="space-y-4">
                <textarea
                    value={cvData.summary}
                    onChange={(e) => updateSummary(e.target.value)}
                    placeholder={t.steps.summary.placeholder}
                    className="w-full h-48 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all resize-none text-black placeholder-gray-400"
                />
                <div className="flex justify-between text-sm text-gray-500">
                    <span>{cvData.summary.length} characters</span>
                </div>
            </div>
        </div>
    );
}
