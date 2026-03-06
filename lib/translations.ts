
export type Language = 'en' | 'pt' | 'de';

export interface Translations {
    landing: {
        badge: string;
        headline: string;
        headlineHighlight: string;
        subheadline: string;
        cta: string;
        templatesTitle: string;
        templatesSubtitle: string;
        featuresTitle1: string;
        featuresDesc1: string;
        featuresTitle2: string;
        featuresDesc2: string;
        featuresTitle3: string;
        featuresDesc3: string;
        feature1: string;
        feature2: string;
        feature3: string;
        footer: string;
    };
    wizard: {
        stepOf: string;
        back: string;
        next: string;
        download: string;
        generating: string;
    };
    sidebar: {
        template: string;
        personal: string;
        summary: string;
        experience: string;
        education: string;
        skills: string;
        languages: string;
        certifications: string;
        hobbies: string;
        color: string;
        preview: string;
        download: string;
        livePreview: string;
    };
    steps: {
        template: {
            title: string;
            subtitle: string;
            modern: string;
            classic: string;
            minimal: string;
            bold: string;
        };
        personal: {
            title: string;
            subtitle: string;
            fullName: string;
            professionalTitle: string;
            email: string;
            phone: string;
            address: string;
            city: string;
            country: string;
            birthDate: string;
            photoUpload: string;
            firstName: string;
            lastName: string;
            postcode: string;
            chooseLanguage: string;
            additionalInfo: string;
            drivingLicense: string;
            nationality: string;
        };
        summary: {
            title: string;
            subtitle: string;
            placeholder: string;
        };
        experience: {
            title: string;
            subtitle: string;
            add: string;
            position: string;
            company: string;
            current: string;
            description: string;
        };
        education: {
            title: string;
            subtitle: string;
            add: string;
            degree: string;
            school: string;
        };
        skills: {
            title: string;
            subtitle: string;
            add: string;
            placeholder: string;
        };
        languages: {
            title: string;
            subtitle: string;
            add: string;
            language: string;
            proficiency: string;
        };
        certifications: {
            title: string;
            subtitle: string;
            add: string;
            name: string;
        };
        hobbies: {
            title: string;
            subtitle: string;
            add: string;
            placeholder: string;
            noHobbies: string;
        };
        color: {
            title: string;
            subtitle: string;
        };
        preview: {
            title: string;
            subtitle: string;
        };
        payment: {
            title: string;
            subtitle: string;
            description: string;
            secure: string;
            includes: string;
            pay: string;
            processing: string;
            success: string;
            successDesc: string;
            terms: string;
        };
    };
    pdf: {
        contact: string;
        skills: string;
        languages: string;
        hobbies: string;
        summary: string;
        experience: string;
        education: string;
        certifications: string;
        present: string;
    };
}

export const en: Translations = {
    landing: {
        badge: 'Professional CV Builder',
        headline: 'Create a Resume that',
        headlineHighlight: 'Gets You Hired',
        subheadline: 'Stand out with professional templates. Fast, easy, and free.',
        cta: 'Create Your CV Now',
        templatesTitle: 'Choose Your Perfect Template',
        templatesSubtitle: 'Select from our professionally designed templates',
        featuresTitle1: 'Easy to Fill',
        featuresDesc1: 'Step-by-step wizard guides you',
        featuresTitle2: 'Premium Design',
        featuresDesc2: 'Modern layouts that catch attention',
        featuresTitle3: 'Instant Download',
        featuresDesc3: 'Download PDF without watermarks',
        feature1: 'Free to use',
        feature2: 'No registration required',
        feature3: 'Secure & Private',
        footer: '© 2025 Kernup Group. All rights reserved.',
    },
    wizard: {
        stepOf: 'Step',
        back: 'Back',
        next: 'Next',
        download: 'Download CV',
        generating: 'Generating...',
    },
    sidebar: {
        template: 'Template',
        personal: 'Personal Info',
        summary: 'Summary',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        languages: 'Languages',
        certifications: 'Certifications',
        hobbies: 'Hobbies',
        color: 'Color',
        preview: 'Preview',
        download: 'Download',
        livePreview: 'Live Preview',
    },
    steps: {
        template: {
            title: 'Choose Your Template',
            subtitle: 'Select a professional template',
            modern: 'Modern',
            classic: 'Classic',
            minimal: 'Minimal',
            bold: 'Bold',
        },
        personal: {
            title: 'Personal Information',
            subtitle: 'Tell us about yourself',
            fullName: 'Full Name',
            professionalTitle: 'Professional Title',
            email: 'Email',
            phone: 'Phone',
            address: 'Address',
            city: 'City',
            country: 'Country',
            birthDate: 'Date of Birth',
            photoUpload: 'Upload Photo',
            firstName: 'First name',
            lastName: 'Surname',
            postcode: 'Postcode',
            chooseLanguage: 'Choose the language for your resume',
            additionalInfo: 'Additional information (optional)',
            drivingLicense: 'Driving licence',
            nationality: 'Nationality',
        },
        summary: {
            title: 'Professional Summary',
            subtitle: 'Write a brief overview',
            placeholder: 'Brief summary of your experience...',
        },
        experience: {
            title: 'Work Experience',
            subtitle: 'Add your professional experience',
            add: 'Add Experience',
            position: 'Position',
            company: 'Company',
            current: 'I currently work here',
            description: 'Description',
        },
        education: {
            title: 'Education',
            subtitle: 'Add your education',
            add: 'Add Education',
            degree: 'Degree',
            school: 'School',
        },
        skills: {
            title: 'Skills',
            subtitle: 'Add your skills',
            add: 'Add Skill',
            placeholder: 'e.g. React',
        },
        languages: {
            title: 'Languages',
            subtitle: 'Add languages',
            add: 'Add Language',
            language: 'Language',
            proficiency: 'Proficiency',
        },
        certifications: {
            title: 'Certifications',
            subtitle: 'Add certifications',
            add: 'Add Certification',
            name: 'Certification Name',
        },
        hobbies: {
            title: 'Hobbies & Interests',
            subtitle: 'Add your hobbies',
            add: 'Add Hobby',
            placeholder: 'e.g. Photography',
            noHobbies: 'No hobbies added yet',
        },
        color: {
            title: 'Choose Color',
            subtitle: 'Select your CV color theme',
        },
        preview: {
            title: 'Preview Your CV',
            subtitle: 'Review your information before payment',
        },
        payment: {
            title: 'Complete Payment',
            subtitle: 'Secure payment to download your CV',
            description: 'One-time payment for professional CV download',
            secure: 'Secure payment with Stripe',
            includes: 'What\'s included:',
            pay: 'Pay',
            processing: 'Processing...',
            success: 'Payment Successful!',
            successDesc: 'Your CV is ready for download',
            terms: 'By proceeding, you agree to our terms of service',
        },
    },
    pdf: {
        contact: 'Contact',
        skills: 'Skills',
        languages: 'Languages',
        hobbies: 'Hobbies & Interests',
        summary: 'Summary',
        experience: 'Experience',
        education: 'Education',
        certifications: 'Certifications',
        present: 'Present',
    },
};

export const pt: Translations = {
    landing: {
        badge: 'Criador de CV Profissional',
        headline: 'Crie um Currículo que',
        headlineHighlight: 'Conquista Empregos',
        subheadline: 'Destaque-se com modelos profissionais. Rápido, fácil e grátis.',
        cta: 'Criar Meu CV Agora',
        templatesTitle: 'Escolha seu Modelo',
        templatesSubtitle: 'Selecione um modelo profissional',
        featuresTitle1: 'Fácil de Preencher',
        featuresDesc1: 'Assistente passo a passo',
        featuresTitle2: 'Design Premium',
        featuresDesc2: 'Layouts modernos',
        featuresTitle3: 'Download Instantâneo',
        featuresDesc3: 'Baixe PDF sem marca d\'água',
        feature1: 'Grátis para usar',
        feature2: 'Sem registro necessário',
        feature3: 'Seguro e Privado',
        footer: '© 2025 Kernup Group. Todos os direitos reservados.',
    },
    wizard: {
        stepOf: 'Passo',
        back: 'Voltar',
        next: 'Próximo',
        download: 'Baixar CV',
        generating: 'Gerando...',
    },
    sidebar: {
        template: 'Modelo',
        personal: 'Informações Pessoais',
        summary: 'Resumo',
        experience: 'Experiência',
        education: 'Educação',
        skills: 'Habilidades',
        languages: 'Idiomas',
        certifications: 'Certificações',
        hobbies: 'Hobbies',
        color: 'Cor',
        preview: 'Visualizar',
        download: 'Baixar',
        livePreview: 'Visualização',
    },
    steps: {
        template: {
            title: 'Escolha seu Modelo',
            subtitle: 'Selecione um modelo profissional',
            modern: 'Moderno',
            classic: 'Clássico',
            minimal: 'Minimalista',
            bold: 'Arrojado',
        },
        personal: {
            title: 'Informações Pessoais',
            subtitle: 'Conte-nos sobre você',
            fullName: 'Nome Completo',
            professionalTitle: 'Título Profissional',
            email: 'E-mail',
            phone: 'Telefone',
            address: 'Endereço',
            city: 'Cidade',
            country: 'País',
            birthDate: 'Data de Nascimento',
            photoUpload: 'Carregar Foto',
            firstName: 'Nome',
            lastName: 'Sobrenome',
            postcode: 'Código postal',
            chooseLanguage: 'Escolha o idioma para o seu currículo',
            additionalInfo: 'Informações adicionais (opcional)',
            drivingLicense: 'Carta de condução',
            nationality: 'Nacionalidade',
        },
        summary: {
            title: 'Resumo Profissional',
            subtitle: 'Escreva um breve resumo',
            placeholder: 'Breve resumo da sua experiência...',
        },
        experience: {
            title: 'Experiência Profissional',
            subtitle: 'Adicione sua experiência',
            add: 'Adicionar Experiência',
            position: 'Cargo',
            company: 'Empresa',
            current: 'Trabalho aqui atualmente',
            description: 'Descrição',
        },
        education: {
            title: 'Educação',
            subtitle: 'Adicione sua formação',
            add: 'Adicionar Educação',
            degree: 'Grau',
            school: 'Escola',
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Adicione suas habilidades',
            add: 'Adicionar Habilidade',
            placeholder: 'ex: React',
        },
        languages: {
            title: 'Idiomas',
            subtitle: 'Adicione idiomas',
            add: 'Adicionar Idioma',
            language: 'Idioma',
            proficiency: 'Proficiência',
        },
        certifications: {
            title: 'Certificações',
            subtitle: 'Adicione certificações',
            add: 'Adicionar Certificação',
            name: 'Nome da Certificação',
        },
        hobbies: {
            title: 'Hobbies e Interesses',
            subtitle: 'Adicione seus hobbies',
            add: 'Adicionar Hobby',
            placeholder: 'ex: Fotografia',
            noHobbies: 'Nenhum hobby adicionado ainda',
        },
        color: {
            title: 'Escolher Cor',
            subtitle: 'Selecione a cor do seu CV',
        },
        preview: {
            title: 'Visualizar CV',
            subtitle: 'Revise suas informações antes do pagamento',
        },
        payment: {
            title: 'Completar Pagamento',
            subtitle: 'Pagamento seguro para baixar seu CV',
            description: 'Pagamento único para download profissional do CV',
            secure: 'Pagamento seguro com Stripe',
            includes: 'O que está incluído:',
            pay: 'Pagar',
            processing: 'Processando...',
            success: 'Pagamento Realizado!',
            successDesc: 'Seu CV está pronto para download',
            terms: 'Ao prosseguir, você concorda com nossos termos de serviço',
        },
    },
    pdf: {
        contact: 'Contato',
        skills: 'Habilidades',
        languages: 'Idiomas',
        hobbies: 'Hobbies e Interesses',
        summary: 'Resumo',
        experience: 'Experiência',
        education: 'Educação',
        certifications: 'Certificações',
        present: 'Atual',
    },
};
export const de: Translations = {
    landing: {
        badge: 'Professioneller Lebenslauf-Generator',
        headline: 'Erstellen Sie einen Lebenslauf, der',
        headlineHighlight: 'Sie einstellt',
        subheadline: 'Heben Sie sich mit professionellen Vorlagen ab. Schnell, einfach und kostenlos.',
        cta: 'Jetzt Lebenslauf erstellen',
        templatesTitle: 'Wählen Sie Ihre perfekte Vorlage',
        templatesSubtitle: 'Wählen Sie aus unseren professionell gestalteten Vorlagen',
        featuresTitle1: 'Einfach auszufüllen',
        featuresDesc1: 'Schritt-für-Schritt-Assistent führt Sie',
        featuresTitle2: 'Premium-Design',
        featuresDesc2: 'Moderne Layouts, die Aufmerksamkeit erregen',
        featuresTitle3: 'Sofortiger Download',
        featuresDesc3: 'PDF ohne Wasserzeichen herunterladen',
        feature1: 'Kostenlos zu verwenden',
        feature2: 'Keine Registrierung erforderlich',
        feature3: 'Sicher & Privat',
        footer: '© 2025 Kernup Group. Alle Rechte vorbehalten.',
    },
    wizard: {
        stepOf: 'Schritt',
        back: 'Zurück',
        next: 'Weiter',
        download: 'Lebenslauf herunterladen',
        generating: 'Wird generiert...',
    },
    sidebar: {
        template: 'Vorlage',
        personal: 'Persönliche Informationen',
        summary: 'Zusammenfassung',
        experience: 'Erfahrung',
        education: 'Bildung',
        skills: 'Fähigkeiten',
        languages: 'Sprachen',
        certifications: 'Zertifizierungen',
        hobbies: 'Hobbys',
        color: 'Farbe',
        preview: 'Vorschau',
        download: 'Herunterladen',
        livePreview: 'Live-Vorschau',
    },
    steps: {
        template: {
            title: 'Wählen Sie Ihre Vorlage',
            subtitle: 'Wählen Sie eine professionelle Vorlage',
            modern: 'Modern',
            classic: 'Klassisch',
            minimal: 'Minimal',
            bold: 'Fett',
        },
        personal: {
            title: 'Persönliche Informationen',
            subtitle: 'Erzählen Sie uns von sich',
            fullName: 'Vollständiger Name',
            professionalTitle: 'Berufsbezeichnung',
            email: 'E-Mail',
            phone: 'Telefon',
            address: 'Adresse',
            city: 'Stadt',
            country: 'Land',
            birthDate: 'Geburtsdatum',
            photoUpload: 'Foto hochladen',
            firstName: 'Vorname',
            lastName: 'Nachname',
            postcode: 'Postleitzahl',
            chooseLanguage: 'Wählen Sie die Sprache für Ihren Lebenslauf',
            additionalInfo: 'Zusätzliche Informationen (optional)',
            drivingLicense: 'Führerschein',
            nationality: 'Nationalität',
        },
        summary: {
            title: 'Berufliche Zusammenfassung',
            subtitle: 'Schreiben Sie eine kurze Übersicht',
            placeholder: 'Kurze Zusammenfassung Ihrer Erfahrung...',
        },
        experience: {
            title: 'Berufserfahrung',
            subtitle: 'Fügen Sie Ihre Berufserfahrung hinzu',
            add: 'Erfahrung hinzufügen',
            position: 'Position',
            company: 'Unternehmen',
            current: 'Ich arbeite derzeit hier',
            description: 'Beschreibung',
        },
        education: {
            title: 'Bildung',
            subtitle: 'Fügen Sie Ihre Ausbildung hinzu',
            add: 'Bildung hinzufügen',
            degree: 'Abschluss',
            school: 'Schule',
        },
        skills: {
            title: 'Fähigkeiten',
            subtitle: 'Fügen Sie Ihre Fähigkeiten hinzu',
            add: 'Fähigkeit hinzufügen',
            placeholder: 'z.B. React',
        },
        languages: {
            title: 'Sprachen',
            subtitle: 'Sprachen hinzufügen',
            add: 'Sprache hinzufügen',
            language: 'Sprache',
            proficiency: 'Kenntnisstand',
        },
        certifications: {
            title: 'Zertifizierungen',
            subtitle: 'Zertifizierungen hinzufügen',
            add: 'Zertifizierung hinzufügen',
            name: 'Zertifizierungsname',
        },
        hobbies: {
            title: 'Hobbys & Interessen',
            subtitle: 'Fügen Sie Ihre Hobbys hinzu',
            add: 'Hobby hinzufügen',
            placeholder: 'z.B. Fotografie',
            noHobbies: 'Noch keine Hobbys hinzugefügt',
        },
        color: {
            title: 'Farbe wählen',
            subtitle: 'Wählen Sie Ihr Lebenslauf-Farbthema',
        },
        preview: {
            title: 'Vorschau Ihres Lebenslaufs',
            subtitle: 'Überprüfen Sie Ihre Informationen vor der Zahlung',
        },
        payment: {
            title: 'Zahlung abschließen',
            subtitle: 'Sichere Zahlung zum Herunterladen Ihres Lebenslaufs',
            description: 'Einmalige Zahlung für professionellen Lebenslauf-Download',
            secure: 'Sichere Zahlung mit Stripe',
            includes: 'Was ist enthalten:',
            pay: 'Bezahlen',
            processing: 'Wird verarbeitet...',
            success: 'Zahlung erfolgreich!',
            successDesc: 'Ihr Lebenslauf ist zum Download bereit',
            terms: 'Mit dem Fortfahren stimmen Sie unseren Nutzungsbedingungen zu',
        },
    },
    pdf: {
        contact: 'Kontakt',
        skills: 'Fähigkeiten',
        languages: 'Sprachen',
        hobbies: 'Hobbys & Interessen',
        summary: 'Zusammenfassung',
        experience: 'Erfahrung',
        education: 'Bildung',
        certifications: 'Zertifizierungen',
        present: 'Gegenwart',
    },
};
export const translations = { en, pt, de };
