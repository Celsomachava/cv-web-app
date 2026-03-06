'use client';

import { useState } from 'react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Download, Loader2 } from 'lucide-react';
import { TemplateId } from '@/lib/types';

const TEMPLATES: { id: TemplateId; name: string }[] = [
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

export default function TemplatePreviewGenerator() {
    const { cvData } = useCVContext();
    const { language } = useLanguage();
    const [generating, setGenerating] = useState<string | null>(null);
    const [previews, setPreviews] = useState<Record<string, string>>({});

    const generatePreview = async (templateId: TemplateId) => {
        setGenerating(templateId);
        try {
            const { translations } = await import('@/lib/translations');
            const t = translations[language].pdf;

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
        } catch (error) {
            console.error('Failed to generate preview:', error);
        } finally {
            setGenerating(null);
        }
    };

    const generateAllPreviews = async () => {
        for (const template of TEMPLATES) {
            await generatePreview(template.id);
        }
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Template Preview Generator</h2>
                <button
                    onClick={generateAllPreviews}
                    disabled={generating !== null}
                    className="px-4 py-2 bg-brand-lilac text-white rounded-lg hover:bg-brand-lilac/90 disabled:opacity-50"
                >
                    Generate All Previews
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEMPLATES.map((template) => (
                    <div key={template.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">{template.name}</h3>
                            <button
                                onClick={() => generatePreview(template.id)}
                                disabled={generating === template.id}
                                className="p-2 hover:bg-gray-100 rounded"
                            >
                                {generating === template.id ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Download className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                        {previews[template.id] && (
                            <div 
                                className="border rounded overflow-hidden"
                                style={{ height: '300px', transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%' }}
                                dangerouslySetInnerHTML={{ __html: previews[template.id] }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
