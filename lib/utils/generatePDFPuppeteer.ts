import { CVData } from '../types';
import { translations, Language } from '../translations';
import ModernHTMLTemplate from '@/components/html-templates/ModernHTMLTemplate';
import MinimalHTMLTemplate from '@/components/html-templates/MinimalHTMLTemplate';
import CreativeHTMLTemplate from '@/components/html-templates/CreativeHTMLTemplate';
import ExecutiveHTMLTemplate from '@/components/html-templates/ExecutiveHTMLTemplate';
import CompactHTMLTemplate from '@/components/html-templates/CompactHTMLTemplate';

export async function generatePDFPuppeteer(cvData: CVData, language: Language) {
    try {
        const t = translations[language].pdf;
        
        // Generate HTML based on template
        let html = '';
        switch (cvData.templateId) {
            case 'modern':
                html = ModernHTMLTemplate({ data: cvData, t });
                break;
            case 'minimal':
                html = MinimalHTMLTemplate({ data: cvData, t });
                break;
            case 'creative':
                html = CreativeHTMLTemplate({ data: cvData, t });
                break;
            case 'executive':
                html = ExecutiveHTMLTemplate({ data: cvData, t });
                break;
            case 'compact':
                html = CompactHTMLTemplate({ data: cvData, t });
                break;
            default:
                html = ModernHTMLTemplate({ data: cvData, t });
                break;
        }
        
        // Call API to generate PDF
        const response = await fetch('/api/generate-pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                html,
                accentColor: cvData.themeColor || '#6d54b0'
            })
        });
        
        if (!response.ok) {
            throw new Error('PDF generation failed');
        }
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `CV-${cvData.personal.fullName || 'Resume'}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Failed to generate PDF:', error);
        throw error;
    }
}
