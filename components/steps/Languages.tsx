'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Languages() {
    const { cvData, addLanguage, removeLanguage, updateLanguage } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.languages.title}</h2>
                <p className="text-gray-600">{t.steps.languages.subtitle}</p>
            </div>

            <div className="space-y-4">
                {cvData.languages.map((lang, index) => (
                    <div key={lang.id} className="flex gap-4 items-start">
                        <div className="flex-1 space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t.steps.languages.language}</label>
                            <input
                                type="text"
                                value={lang.language}
                                onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t.steps.languages.proficiency}</label>
                            <select
                                value={lang.proficiency}
                                onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none bg-white text-black placeholder-gray-400"
                            >
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Native">Native</option>
                            </select>
                        </div>
                        <button
                            onClick={() => removeLanguage(lang.id)}
                            className="mt-8 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                ))}

                <button
                    onClick={addLanguage}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac hover:bg-brand-lilac/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    {t.steps.languages.add}
                </button>
            </div>
        </div>
    );
}
