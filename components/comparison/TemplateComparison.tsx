'use client';

import { useState, useEffect } from 'react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { TemplateId } from '@/lib/types';
import { Check } from 'lucide-react';

export default function TemplateComparison() {
    const { cvData, updateTemplate } = useCVContext();
    const { language } = useLanguage();
    const [selectedTemplates, setSelectedTemplates] = useState<TemplateId[]>(['classic', 'modern']);
    const [previews, setPreviews] = useState<Record<string, string>>({});

    const templates: { id: TemplateId; name: string }[] = [
        { id: 'classic', name: 'Classic' },
        { id: 'modern', name: 'Modern' },
        { id: 'minimal', name: 'Minimal' },
        { id: 'creative', name: 'Creative' },
        { id: 'executive', name: 'Executive' },
        { id: 'professional', name: 'Professional' },
        { id: 'bold', name: 'Bold' },
        { id: 'timeline', name: 'Timeline' },
        { id: 'two-column', name: 'Two Column' },
        { id: 'minimalist-pro', name: 'Minimalist Pro' },
    ];

    useEffect(() => {
        const loadPreviews = async () => {
            const { translations } = await import('@/lib/translations');
            const t = translations[language].pdf;

            for (const templateId of selectedTemplates) {
                let TemplateComponent;
                switch (templateId) {
                    case 'classic':
                        TemplateComponent = (await import('@/components/html-templates/ClassicHTMLTemplate')).default;
                        break;
                    case 'modern':
                        TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate')).default;
                        break;
                    case 'minimal':
                        TemplateComponent = (await import('@/components/html-templates/MinimalHTMLTemplate')).default;
                        break;
                    case 'creative':
                        TemplateComponent = (await import('@/components/html-templates/CreativeHTMLTemplate')).default;
                        break;
                    case 'executive':
                        TemplateComponent = (await import('@/components/html-templates/ExecutiveHTMLTemplate')).default;
                        break;
                    case 'professional':
                        TemplateComponent = (await import('@/components/html-templates/CompactHTMLTemplate')).default;
                        break;
                    case 'bold':
                        TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate2')).default;
                        break;
                    case 'timeline':
                        TemplateComponent = (await import('@/components/html-templates/TimelineHTMLTemplate')).default;
                        break;
                    case 'two-column':
                        TemplateComponent = (await import('@/components/html-templates/TwoColumnHTMLTemplate')).default;
                        break;
                    case 'minimalist-pro':
                        TemplateComponent = (await import('@/components/html-templates/MinimalistProHTMLTemplate')).default;
                        break;
                }
                const html = TemplateComponent({ data: cvData, t });
                setPreviews(prev => ({ ...prev, [templateId]: html }));
            }
        };
        loadPreviews();
    }, [selectedTemplates, cvData, language]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4">Compare Templates</h2>
                <div className="flex flex-wrap gap-2">
                    {templates.map((template) => (
                        <button
                            key={template.id}
                            onClick={() => {
                                if (selectedTemplates.includes(template.id)) {
                                    setSelectedTemplates(selectedTemplates.filter(t => t !== template.id));
                                } else if (selectedTemplates.length < 3) {
                                    setSelectedTemplates([...selectedTemplates, template.id]);
                                }
                            }}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                selectedTemplates.includes(template.id)
                                    ? 'border-brand-lilac bg-brand-lilac/10'
                                    : 'border-gray-200 hover:border-gray-400'
                            }`}
                        >
                            {template.name}
                            {selectedTemplates.includes(template.id) && <Check className="inline ml-2 w-4 h-4" />}
                        </button>
                    ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">Select up to 3 templates to compare</p>
            </div>

            <div className={`grid gap-6 ${selectedTemplates.length === 2 ? 'grid-cols-2' : selectedTemplates.length === 3 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                {selectedTemplates.map((templateId) => (
                    <div key={templateId} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                            <h3 className="font-semibold">{templates.find(t => t.id === templateId)?.name}</h3>
                            <button
                                onClick={() => updateTemplate(templateId)}
                                className="px-3 py-1 bg-brand-lilac text-white text-sm rounded hover:bg-brand-lilac/90"
                            >
                                Use This
                            </button>
                        </div>
                        <div 
                            className="bg-white overflow-auto"
                            style={{ height: '600px', transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%' }}
                            dangerouslySetInnerHTML={{ __html: previews[templateId] || '' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
