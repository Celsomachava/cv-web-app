'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { CVData, initialCVData, PersonalInfo, Experience, Education, Language, Certification, TemplateId } from '../types';

interface CVContextType {
    cvData: CVData;
    cvId: string | null;
    saveCV: (title?: string) => Promise<void>;
    loadCV: (id: string) => Promise<void>;
    updatePersonal: (field: keyof PersonalInfo, value: any) => void;
    updateSummary: (summary: string) => void;
    addExperience: () => void;
    removeExperience: (id: string) => void;
    updateExperience: (id: string, field: keyof Experience, value: any) => void;
    addEducation: () => void;
    removeEducation: (id: string) => void;
    updateEducation: (id: string, field: keyof Education, value: any) => void;
    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;
    addLanguage: () => void;
    removeLanguage: (id: string) => void;
    updateLanguage: (id: string, field: keyof Language, value: any) => void;
    addCertification: () => void;
    removeCertification: (id: string) => void;
    updateCertification: (id: string, field: keyof Certification, value: any) => void;
    addHobby: (hobby: string) => void;
    removeHobby: (hobby: string) => void;
    updateTemplate: (templateId: TemplateId) => void;
    updateColor: (color: string) => void;
    resetData: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
    const [cvData, setCVData] = useState<CVData>(initialCVData);
    const [cvId, setCvId] = useState<string | null>(null);
    const { data: session } = useSession();

    const saveCV = async (title?: string) => {
        if (!session?.user?.id) return;

        const cvTitle = title || `CV - ${new Date().toLocaleDateString()}`;

        try {
            if (cvId) {
                await fetch(`/api/cvs/${cvId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: cvTitle,
                        data: cvData,
                        templateId: cvData.templateId,
                        themeColor: cvData.themeColor,
                    }),
                });
            } else {
                const res = await fetch('/api/cvs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: cvTitle,
                        data: cvData,
                        templateId: cvData.templateId,
                        themeColor: cvData.themeColor,
                    }),
                });
                const data = await res.json();
                setCvId(data.cv.id);
            }
        } catch (error) {
            console.error('Failed to save CV:', error);
        }
    };

    const loadCV = async (id: string) => {
        try {
            const res = await fetch(`/api/cvs/${id}`);
            const data = await res.json();
            setCVData(data.cv.data);
            setCvId(data.cv.id);
        } catch (error) {
            console.error('Failed to load CV:', error);
        }
    };

    useEffect(() => {
        if (session?.user?.id && cvData !== initialCVData) {
            const timer = setTimeout(() => {
                saveCV();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [cvData, session]);

    const updatePersonal = (field: keyof PersonalInfo, value: any) => {
        setCVData((prev) => ({
            ...prev,
            personal: { ...prev.personal, [field]: value },
        }));
    };

    const updateSummary = (summary: string) => {
        setCVData((prev) => ({ ...prev, summary }));
    };

    const addExperience = () => {
        const newExperience: Experience = {
            id: `${Date.now()}-${Math.random()}`,
            position: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        };
        setCVData((prev) => ({
            ...prev,
            experience: [...prev.experience, newExperience],
        }));
    };

    const removeExperience = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            experience: prev.experience.filter((exp) => exp.id !== id),
        }));
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        setCVData((prev) => ({
            ...prev,
            experience: prev.experience.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            ),
        }));
    };

    const addEducation = () => {
        const newEducation: Education = {
            id: `${Date.now()}-${Math.random()}`,
            degree: '',
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        };
        setCVData((prev) => ({
            ...prev,
            education: [...prev.education, newEducation],
        }));
    };

    const removeEducation = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            education: prev.education.filter((edu) => edu.id !== id),
        }));
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        setCVData((prev) => ({
            ...prev,
            education: prev.education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            ),
        }));
    };

    const addSkill = (skill: string) => {
        if (!cvData.skills.includes(skill)) {
            setCVData((prev) => ({
                ...prev,
                skills: [...prev.skills, skill],
            }));
        }
    };

    const removeSkill = (skill: string) => {
        setCVData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skill),
        }));
    };

    const addLanguage = () => {
        const newLanguage: Language = {
            id: `${Date.now()}-${Math.random()}`,
            language: '',
            proficiency: 'Basic',
        };
        setCVData((prev) => ({
            ...prev,
            languages: [...prev.languages, newLanguage],
        }));
    };

    const removeLanguage = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            languages: prev.languages.filter((lang) => lang.id !== id),
        }));
    };

    const updateLanguage = (id: string, field: keyof Language, value: any) => {
        setCVData((prev) => ({
            ...prev,
            languages: prev.languages.map((lang) =>
                lang.id === id ? { ...lang, [field]: value } : lang
            ),
        }));
    };

    const addCertification = () => {
        const newCertification: Certification = {
            id: `${Date.now()}-${Math.random()}`,
            name: '',
            issuer: '',
            date: '',
            credentialId: '',
        };
        setCVData((prev) => ({
            ...prev,
            certifications: [...prev.certifications, newCertification],
        }));
    };

    const removeCertification = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            certifications: prev.certifications.filter((cert) => cert.id !== id),
        }));
    };

    const updateCertification = (id: string, field: keyof Certification, value: any) => {
        setCVData((prev) => ({
            ...prev,
            certifications: prev.certifications.map((cert) =>
                cert.id === id ? { ...cert, [field]: value } : cert
            ),
        }));
    };

    const addHobby = (hobby: string) => {
        if (!cvData.hobbies || !cvData.hobbies.includes(hobby)) {
            setCVData((prev) => ({
                ...prev,
                hobbies: [...(prev.hobbies || []), hobby],
            }));
        }
    };

    const removeHobby = (hobby: string) => {
        setCVData((prev) => ({
            ...prev,
            hobbies: (prev.hobbies || []).filter((h) => h !== hobby),
        }));
    };

    const updateTemplate = (templateId: TemplateId) => {
        setCVData((prev) => ({ ...prev, templateId }));
    };

    const updateColor = (color: string) => {
        setCVData((prev) => ({ ...prev, themeColor: color }));
    };

    const resetData = () => {
        setCVData(initialCVData);
        setCvId(null);
    };

    return (
        <CVContext.Provider
            value={{
                cvData,
                cvId,
                saveCV,
                loadCV,
                updatePersonal,
                updateSummary,
                addExperience,
                removeExperience,
                updateExperience,
                addEducation,
                removeEducation,
                updateEducation,
                addSkill,
                removeSkill,
                addLanguage,
                removeLanguage,
                updateLanguage,
                addCertification,
                removeCertification,
                updateCertification,
                addHobby,
                removeHobby,
                updateTemplate,
                updateColor,
                resetData,
            }}
        >
            {children}
        </CVContext.Provider>
    );
}

export function useCVContext() {
    const context = useContext(CVContext);
    if (context === undefined) {
        throw new Error('useCVContext must be used within a CVProvider');
    }
    return context;
}
