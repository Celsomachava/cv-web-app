'use client';

import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

const colors = [
    { name: 'Purple', value: '#6d54b0' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Indigo', value: '#6366f1' },
];

export default function ColorPicker() {
    const { cvData, updateColor } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.steps.color.title}
                </h2>
                <p className="text-gray-600">
                    {t.steps.color.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {colors.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => updateColor(color.value)}
                        className={`relative h-20 rounded-xl transition-all ${
                            cvData.themeColor === color.value
                                ? 'ring-4 ring-offset-2 ring-brand-lilac scale-105'
                                : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.value }}
                    >
                        {cvData.themeColor === color.value && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
