import React from 'react';
import { CVData } from '../types';
import { translations, Language } from '../translations';

export async function generatePDF(cvData: CVData, language: Language) {
    try {
        const ReactPDF = await import('@react-pdf/renderer');
        const pdf = ReactPDF.pdf;
        const ModernTemplate = (await import('@/components/pdf/ModernTemplate')).default;
        const MinimalTemplate = (await import('@/components/pdf/MinimalTemplate')).default;
        const ExecutiveTemplate = (await import('@/components/pdf/ExecutiveTemplate')).default;
        const CreativeTemplate = (await import('@/components/pdf/CreativeTemplate')).default;
        const ProfessionalTemplate = (await import('@/components/pdf/ProfessionalTemplate')).default;

        const t = translations[language].pdf;
        let template: React.ReactElement;

        switch (cvData.templateId) {
            case 'modern':
                template = <ModernTemplate data={cvData} t={t} />;
                break;
            case 'minimal':
                template = <MinimalTemplate data={cvData} t={t} />;
                break;
            case 'executive':
                template = <ExecutiveTemplate data={cvData} t={t} />;
                break;
            case 'creative':
                template = <CreativeTemplate data={cvData} t={t} />;
                break;
            case 'compact':
                template = <ProfessionalTemplate data={cvData} t={t} />;
                break;
            default:
                template = <ModernTemplate data={cvData} t={t} />;
        }

        const blob = await pdf(template).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `CV-${cvData.personal.fullName || 'Resume'}-${cvData.templateId}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Failed to generate PDF:', error);
        throw new Error('PDF generation failed. Please try again.');
    }
}
