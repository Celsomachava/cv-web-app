'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useState } from 'react';

export default function Education() {
    const { cvData, addEducation, removeEducation, updateEducation } = useCVContext();
    const { t, language } = useLanguage();
    const [showOptional, setShowOptional] = useState<{[key: string]: boolean}>({});

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.education.title}</h2>
                <p className="text-gray-600">{t.steps.education.subtitle}</p>
            </div>

            <div className="space-y-6">
                {cvData.education.map((edu, index) => (
                    <div key={edu.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative group">
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Nome da instituição' : 'Name of institution'}
                            />
                            <input
                                type="text"
                                value={edu.location}
                                onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder="Location"
                            />
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Grau ou curso' : 'Degree or course'}
                            />
                            <input
                                type="text"
                                value={edu.description || ''}
                                onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                placeholder={language === 'pt' ? 'Curso' : 'Course'}
                            />
                            {!edu.hideDates && (
                                <>
                                    <input
                                        type="month"
                                        value={edu.startDate}
                                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                        placeholder={language === 'pt' ? 'Data de início (mês)' : 'Start date (month)'}
                                    />
                                    <input
                                        type="month"
                                        value={edu.endDate}
                                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                        placeholder={language === 'pt' ? 'Data de término (mês)' : 'End date (month)'}
                                    />
                                </>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={edu.hideDates || false}
                                    onChange={(e) => updateEducation(edu.id, 'hideDates', e.target.checked)}
                                    className="w-4 h-4 text-brand-lilac border-gray-300 rounded focus:ring-brand-lilac"
                                />
                                {language === 'pt' ? 'Ocultar datas desta entrada de educação' : 'Hide dates from this education entry'}
                            </label>
                        </div>
                        
                        <button
                            onClick={() => setShowOptional({...showOptional, [edu.id]: !showOptional[edu.id]})}
                            className="text-brand-lilac text-sm font-medium hover:text-brand-lilac-dark transition-colors mb-4"
                        >
                            {showOptional[edu.id] ? '- ' : '+ '}{language === 'pt' ? 'Adicionar informações adicionais à educação (opcional)' : 'Add additional information to education (optional)'}
                        </button>
                        
                        {showOptional[edu.id] && (
                            <textarea
                                value={edu.extraInfo || ''}
                                onChange={(e) => updateEducation(edu.id, 'extraInfo', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400 min-h-[100px]"
                                placeholder={language === 'pt' ? 'Informações adicionais...' : 'Additional information...'}
                            />
                        )}
                    </div>
                ))}

                <button
                    onClick={addEducation}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac hover:bg-brand-lilac/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    {t.steps.education.add}
                </button>
            </div>
        </div>
    );
}
