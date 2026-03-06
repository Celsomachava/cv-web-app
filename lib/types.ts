// TypeScript interfaces for CV data structure

export interface PersonalInfo {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
    birthDate: string;
    nationality: string;
    drivingLicense: string;
    linkedin: string;
    website: string;
    twitter: string;
    title: string;
    photo?: string; // base64 encoded image
}

export interface Experience {
    id: string;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    hideDates?: boolean;
    extraInfo?: string;
}

export interface Language {
    id: string;
    language: string;
    proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
}

export type TemplateId = 'modern' | 'creative' | 'minimal' | 'executive' | 'compact';

export interface CVData {
    templateId: TemplateId;
    themeColor: string;
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
    languages: Language[];
    certifications: Certification[];
    hobbies: string[];
}

export const initialCVData: CVData = {
    templateId: 'modern',
    themeColor: '#6d54b0',
    personal: {
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postcode: '',
        country: '',
        birthDate: '',
        nationality: '',
        drivingLicense: '',
        linkedin: '',
        website: '',
        twitter: '',
        title: '',
        photo: undefined,
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: [],
    certifications: [],
    hobbies: [],
};
