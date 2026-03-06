'use client';

import { useEffect } from 'react';
import { Check } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import Image from 'next/image';

export default function TemplateSelector() {
    const { cvData, updateTemplate } = useCVContext();
    const { t } = useLanguage();
    
    useEffect(() => {
        console.log('TemplateSelector - templateId changed to:', cvData.templateId);
    }, [cvData.templateId]);

    const templates = [
        { id: 'modern' as const, name: 'Modern', image: '/templates/template1.png', description: 'Professional sidebar layout' },
        { id: 'creative' as const, name: 'Creative', image: '/templates/template2.png', description: 'Bold sidebar design' },
        { id: 'minimal' as const, name: 'Minimal', image: '/templates/template3.png', description: 'Clean and simple' },
        { id: 'executive' as const, name: 'Executive', image: '/templates/template4.png', description: 'Elegant serif design' },
        { id: 'compact' as const, name: 'Compact', image: '/templates/template5.png', description: 'Dense single column' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.template.title}</h2>
                <p className="text-gray-600">{t.steps.template.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('=== Template Click ===');
                            console.log('Clicked:', template.id);
                            console.log('Before update:', cvData.templateId);
                            updateTemplate(template.id);
                            console.log('After update call');
                        }}
                        className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 w-full text-left ${cvData.templateId === template.id
                                ? 'border-brand-lilac ring-4 ring-brand-lilac/10 scale-[1.02]'
                                : 'border-gray-300 hover:border-brand-lilac hover:scale-[1.01]'
                            }`}
                    >
                        <div className="aspect-[210/297] relative bg-gray-100">
                            <Image
                                src={template.image}
                                alt={template.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top"
                            />
                            <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 ${cvData.templateId === template.id ? 'bg-black/5' : ''
                                }`} />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900">{template.name}</span>
                                {cvData.templateId === template.id && (
                                    <div className="bg-brand-lilac text-white p-1.5 rounded-full">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
