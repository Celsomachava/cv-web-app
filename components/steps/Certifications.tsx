'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Certifications() {
    const { cvData, addCertification, removeCertification, updateCertification } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.certifications.title}</h2>
                <p className="text-gray-600">{t.steps.certifications.subtitle}</p>
            </div>

            <div className="space-y-6">
                {cvData.certifications.map((cert, index) => (
                    <div key={cert.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative group">
                        <button
                            onClick={() => removeCertification(cert.id)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t.steps.certifications.name}</label>
                                <input
                                    type="text"
                                    value={cert.name}
                                    onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Issuing Organization</label>
                                <input
                                    type="text"
                                    value={cert.issuer}
                                    onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="text"
                                    value={cert.date}
                                    onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none text-black placeholder-gray-400"
                                    placeholder="MM/YYYY"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={addCertification}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac hover:bg-brand-lilac/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    {t.steps.certifications.add}
                </button>
            </div>
        </div>
    );
}
