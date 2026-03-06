'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { generatePDF } from '@/lib/utils/generatePDF';
import { generateSimplePDF } from '@/lib/utils/generateSimplePDF';
import TemplateSelector from '../steps/TemplateSelector';
import PersonalInfo from '../steps/PersonalInfo';
import Summary from '../steps/Summary';
import Experience from '../steps/Experience';
import Education from '../steps/Education';
import Skills from '../steps/Skills';
import Languages from '../steps/Languages';
import Certifications from '../steps/Certifications';
import Hobbies from '../steps/Hobbies';
import Preview from '../steps/Preview';
import Payment from '../steps/Payment';

const steps = [
    { id: 'template', title: 'Template' },
    { id: 'personal', title: 'Personal Info' },
    { id: 'summary', title: 'Summary' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'languages', title: 'Languages' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'hobbies', title: 'Hobbies' },
    { id: 'preview', title: 'Preview' },
    { id: 'payment', title: 'Payment' },
];

interface StepWizardProps {
    onBack?: () => void;
}

export default function StepWizard({ onBack }: StepWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const { cvData } = useCVContext();
    const { t } = useLanguage();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        } else if (onBack) {
            onBack();
        }
    };

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            await generatePDF(cvData, 'en');
        } catch (error) {
            console.error('Failed to generate PDF:', error);
            // Fallback to simple PDF
            generateSimplePDF(cvData);
        } finally {
            setIsGenerating(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0: return <TemplateSelector />;
            case 1: return <PersonalInfo />;
            case 2: return <Summary />;
            case 3: return <Experience />;
            case 4: return <Education />;
            case 5: return <Skills />;
            case 6: return <Languages />;
            case 7: return <Certifications />;
            case 8: return <Hobbies />;
            case 9: return <Preview />;
            case 10: return <Payment />;
            default: return null;
        }
    };

    return (
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 md:p-8">
            {/* Step Navigation */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-4">
                    <span>{t.wizard.stepOf} {currentStep + 1} / {steps.length}</span>
                    <span className="text-brand-lilac">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                
                {/* Step Line Navigation */}
                <div className="flex items-center justify-between relative overflow-x-auto pb-4">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
                    <div 
                        className="absolute top-1/2 left-0 h-0.5 bg-brand-lilac -translate-y-1/2 transition-all duration-500"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    ></div>
                    
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col items-center min-w-0 flex-shrink-0">
                            <div className={`
                                w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all duration-300 z-10
                                ${index <= currentStep 
                                    ? 'bg-brand-lilac text-white shadow-lg' 
                                    : 'bg-white border-2 border-gray-200 text-gray-400'
                                }
                            `}>
                                {index < currentStep ? '✓' : index + 1}
                            </div>
                            <span className={`
                                mt-1 md:mt-2 text-xs font-medium transition-colors duration-300 text-center max-w-12 md:max-w-16 leading-tight
                                ${index <= currentStep ? 'text-brand-lilac' : 'text-gray-400'}
                            `}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8 animate-fade-in">
                {renderStep()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                    {t.wizard.back}
                </button>

                {currentStep < steps.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
                    >
                        {t.wizard.next}
                        <ChevronRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
}
