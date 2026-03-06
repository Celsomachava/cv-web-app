'use client';

import { useState, useEffect } from 'react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Loader2 } from 'lucide-react';

export default function LivePreview() {
    const { cvData } = useCVContext();
    const { language } = useLanguage();
    const [pdfPreview, setPdfPreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const generatePreview = async () => {
            setIsLoading(true);
            try {
                const { translations } = await import('@/lib/translations');
                const t = translations[language].pdf;
                
                let TemplateComponent;
                
                switch (cvData.templateId) {
                    case 'modern':
                        TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate')).default;
                        break;
                    case 'creative':
                        TemplateComponent = (await import('@/components/html-templates/CreativeHTMLTemplate')).default;
                        break;
                    case 'minimal':
                        TemplateComponent = (await import('@/components/html-templates/MinimalHTMLTemplate')).default;
                        break;
                    case 'executive':
                        TemplateComponent = (await import('@/components/html-templates/ExecutiveHTMLTemplate')).default;
                        break;
                    case 'compact':
                        TemplateComponent = (await import('@/components/html-templates/CompactHTMLTemplate')).default;
                        break;
                    default:
                        TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate')).default;
                }
                
                const html = TemplateComponent({ data: cvData, t });
                setPdfPreview(html);
            } catch (error) {
                console.error('Failed to generate preview:', error);
            } finally {
                setIsLoading(false);
            }
        };

        generatePreview();
    }, [cvData, language]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-brand-lilac animate-spin mb-4" />
                <p className="text-gray-600 text-sm">Generating preview...</p>
            </div>
        );
    }

    if (!pdfPreview) {
        return (
            <div className="text-center py-12 text-gray-500">
                <p>Failed to generate preview</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <style>{`:root { --accent-color: ${cvData.themeColor || '#6d54b0'}; }`}</style>
            <div 
                className="border border-gray-200 rounded-lg bg-white overflow-auto"
                style={{ height: 'calc(100vh - 200px)', transform: 'scale(0.7)', transformOrigin: 'top left', width: '142%' }}
                dangerouslySetInnerHTML={{ __html: pdfPreview }}
            />
        </div>
    );
}
