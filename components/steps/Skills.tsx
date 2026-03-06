'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Skills() {
    const { cvData, addSkill, removeSkill } = useCVContext();
    const { t } = useLanguage();
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (newSkill.trim()) {
            addSkill(newSkill.trim());
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        removeSkill(skillToRemove);
    };

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.skills.title}</h2>
                <p className="text-gray-600">{t.steps.skills.subtitle}</p>
            </div>

            <form onSubmit={handleAddSkill} className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder={t.steps.skills.placeholder}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-brand-lilac text-white rounded-xl font-medium hover:bg-brand-lilac-dark transition-colors"
                >
                    {t.steps.skills.add}
                </button>
            </form>

            <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                    >
                        <span>{skill}</span>
                        <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
