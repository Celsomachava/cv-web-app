'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Hobbies() {
    const { cvData, addHobby, removeHobby } = useCVContext();
    const { t } = useLanguage();
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            addHobby(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.hobbies.title}</h2>
                <p className="text-gray-600">{t.steps.hobbies.subtitle}</p>
            </div>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={t.steps.hobbies.placeholder}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-6 py-3 bg-brand-lilac text-white rounded-xl font-medium hover:bg-brand-lilac/90 transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        {t.steps.hobbies.add}
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {cvData.hobbies && cvData.hobbies.map((hobby, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium group hover:bg-red-50 transition-colors"
                        >
                            <span>{hobby}</span>
                            <button
                                onClick={() => removeHobby(hobby)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {(!cvData.hobbies || cvData.hobbies.length === 0) && (
                    <div className="text-center py-8 text-gray-400">
                        <p>{t.steps.hobbies.noHobbies}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
