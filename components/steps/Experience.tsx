'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Experience() {
    const { cvData, addExperience, removeExperience, updateExperience } = useCVContext();
    const { t, language } = useLanguage();

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.experience.title}</h2>
                <p className="text-gray-600">{t.steps.experience.subtitle}</p>
            </div>

            <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                    <div key={exp.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative group">
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Posição/função' : 'Position/role'}
                            />
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Nome da empresa' : 'Company or organisation name'}
                            />
                            <input
                                type="text"
                                value={exp.location}
                                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                                className="md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Cidade' : 'Town or city'}
                            />
                            <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black"
                            />
                            <input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black"
                                disabled={exp.current}
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                className="w-4 h-4 text-brand-lilac border-gray-300 rounded focus:ring-brand-lilac"
                            />
                            <label className="text-sm text-gray-700">{language === 'pt' ? 'Trabalho aqui atualmente' : 'I currently work here'}</label>
                        </div>

                        <textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none h-24 resize-none text-black placeholder-gray-400"
                            placeholder={language === 'pt' ? 'Descrição' : 'Description'}
                        />
                    </div>
                ))}

                <button
                    onClick={addExperience}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac hover:bg-brand-lilac/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    {t.steps.experience.add}
                </button>
            </div>
        </div>
    );
}
