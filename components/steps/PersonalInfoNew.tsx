'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Camera, X, Plus, Globe } from 'lucide-react';
import Image from 'next/image';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function PersonalInfoNew() {
    const { cvData, updatePersonal } = useCVContext();
    const { personal } = cvData;
    const { t, language, setLanguage } = useLanguage();
    const [showOptional, setShowOptional] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                updatePersonal('photo', e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    }, [updatePersonal]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        maxFiles: 1,
        multiple: false
    });

    const removePhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        updatePersonal('photo', '');
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.personal.title}</h2>
                <p className="text-gray-600">{t.steps.personal.subtitle}</p>
            </div>

            {/* Photo Upload */}
            <div className="flex justify-center">
                <div
                    {...getRootProps()}
                    className={`relative w-32 h-32 rounded-full border-2 border-dashed cursor-pointer transition-all duration-300 group overflow-hidden ${
                        isDragActive ? 'border-brand-lilac bg-brand-lilac/5' : 'border-gray-300 hover:border-brand-lilac'
                    }`}
                >
                    <input {...getInputProps()} />
                    {personal.photo ? (
                        <>
                            <Image src={personal.photo} alt="Profile" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button onClick={removePhoto} className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-brand-lilac transition-colors">
                            <Camera className="w-8 h-8 mb-1" />
                            <span className="text-xs font-medium">{t.steps.personal.photoUpload}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    value={personal.firstName}
                    onChange={(e) => {
                        updatePersonal('firstName', e.target.value);
                        updatePersonal('fullName', `${e.target.value} ${personal.lastName}`.trim());
                    }}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.firstName}
                />
                <input
                    type="text"
                    value={personal.lastName}
                    onChange={(e) => {
                        updatePersonal('lastName', e.target.value);
                        updatePersonal('fullName', `${personal.firstName} ${e.target.value}`.trim());
                    }}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.lastName}
                />
                <input
                    type="text"
                    value={personal.country}
                    onChange={(e) => updatePersonal('country', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.country}
                />
                <input
                    type="text"
                    value={personal.city}
                    onChange={(e) => updatePersonal('city', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.city}
                />
                <input
                    type="text"
                    value={personal.postcode}
                    onChange={(e) => updatePersonal('postcode', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.postcode}
                />
                <input
                    type="tel"
                    value={personal.phone}
                    onChange={(e) => updatePersonal('phone', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.phone}
                />
                <input
                    type="email"
                    value={personal.email}
                    onChange={(e) => updatePersonal('email', e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.email}
                    required
                />
                <input
                    type="text"
                    value={personal.title}
                    onChange={(e) => updatePersonal('title', e.target.value)}
                    className="md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    placeholder={t.steps.personal.professionalTitle}
                />
                
                <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t.steps.personal.chooseLanguage}
                    </label>
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'pt' | 'de')}
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black"
                        >
                            <option value="en">English</option>
                            <option value="pt">Português</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Optional Fields */}
            <div className="border-t pt-6">
                <button
                    onClick={() => setShowOptional(!showOptional)}
                    className="text-brand-lilac font-medium hover:text-brand-lilac-dark transition-colors"
                >
                    {showOptional ? '- ' : '+ '}{t.steps.personal.additionalInfo}
                </button>

                {showOptional && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => document.getElementById('birthDate')?.focus()}
                            className="px-4 py-3 rounded-xl border border-gray-200 hover:border-brand-lilac transition-colors text-left text-gray-600"
                        >
                            <Plus className="w-4 h-4 inline mr-2" />
                            {t.steps.personal.birthDate}
                        </button>
                        <input
                            id="birthDate"
                            type="date"
                            value={personal.birthDate}
                            onChange={(e) => updatePersonal('birthDate', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black"
                        />
                        
                        <input
                            type="text"
                            value={personal.drivingLicense}
                            onChange={(e) => updatePersonal('drivingLicense', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder={t.steps.personal.drivingLicense}
                        />
                        <input
                            type="text"
                            value={personal.nationality}
                            onChange={(e) => updatePersonal('nationality', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder={t.steps.personal.nationality}
                        />
                        <input
                            type="url"
                            value={personal.linkedin}
                            onChange={(e) => updatePersonal('linkedin', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder="LinkedIn"
                        />
                        <input
                            type="url"
                            value={personal.website}
                            onChange={(e) => updatePersonal('website', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder="Website"
                        />
                        <input
                            type="text"
                            value={personal.twitter}
                            onChange={(e) => updatePersonal('twitter', e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder="X (former Twitter)"
                        />
                        <input
                            type="text"
                            value={personal.address}
                            onChange={(e) => updatePersonal('address', e.target.value)}
                            className="md:col-span-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                            placeholder={t.steps.personal.address}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
