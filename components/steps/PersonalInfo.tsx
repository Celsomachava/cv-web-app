'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Camera, X } from 'lucide-react';
import Image from 'next/image';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function PersonalInfo() {
    const { cvData, updatePersonal } = useCVContext();
    const { personal } = cvData;
    const { t } = useLanguage();

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
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.personal.title}</h2>
                <p className="text-gray-600">{t.steps.personal.subtitle}</p>
            </div>

            {/* Photo Upload */}
            <div className="flex justify-center">
                <div
                    {...getRootProps()}
                    className={`relative w-32 h-32 rounded-full border-2 border-dashed cursor-pointer transition-all duration-300 group overflow-hidden ${isDragActive ? 'border-brand-lilac bg-brand-lilac/5' : 'border-gray-300 hover:border-brand-lilac'
                        }`}
                >
                    <input {...getInputProps()} />

                    {personal.photo ? (
                        <>
                            <Image
                                src={personal.photo}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={removePhoto}
                                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
                                >
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.fullName}</label>
                    <input
                        type="text"
                        value={personal.fullName}
                        onChange={(e) => updatePersonal('fullName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. John Doe"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.professionalTitle}</label>
                    <input
                        type="text"
                        value={personal.title}
                        onChange={(e) => updatePersonal('title', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. Software Engineer"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.email}</label>
                    <input
                        type="email"
                        value={personal.email}
                        onChange={(e) => updatePersonal('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.phone}</label>
                    <input
                        type="tel"
                        value={personal.phone}
                        onChange={(e) => updatePersonal('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.address}</label>
                    <input
                        type="text"
                        value={personal.address}
                        onChange={(e) => updatePersonal('address', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. 123 Main St, Apt 4B"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.city}</label>
                    <input
                        type="text"
                        value={personal.city}
                        onChange={(e) => updatePersonal('city', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. New York"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.country}</label>
                    <input
                        type="text"
                        value={personal.country}
                        onChange={(e) => updatePersonal('country', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                        placeholder="e.g. USA"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.steps.personal.birthDate}</label>
                    <input
                        type="date"
                        value={personal.birthDate}
                        onChange={(e) => updatePersonal('birthDate', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    />
                </div>
            </div>
        </div>
    );
}
