'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useCVContext } from '@/lib/context/CVContext';
import { generatePDFPuppeteer } from '@/lib/utils/generatePDFPuppeteer';
import PaysuitePayment from '../payment/PaysuitePayment';

export default function Payment() {
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const { t, language } = useLanguage();
    const { cvData } = useCVContext();

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            await generatePDFPuppeteer(cvData, language);
        } catch (error) {
            console.error('Failed to generate PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    if (paymentComplete) {
        return (
            <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Download className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.steps.payment.success}</h2>
                <p className="text-gray-600">{t.steps.payment.successDesc}</p>
                
                <button
                    onClick={handleDownload}
                    disabled={isGenerating}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {t.wizard.generating}
                        </>
                    ) : (
                        <>
                            <Download className="w-5 h-5" />
                            {t.wizard.download}
                        </>
                    )}
                </button>
            </div>
        );
    }

    return <PaysuitePayment onPaymentSuccess={() => setPaymentComplete(true)} />;
}