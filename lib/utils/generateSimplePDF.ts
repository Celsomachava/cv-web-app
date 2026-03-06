import { CVData } from '../types';

function getTemplateStyles(templateId: string) {
    const baseStyles = `
        @page { margin: 0; size: A4; }
        * { box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; color: #333; line-height: 1.5; font-size: 12px; }
        .page { width: 210mm; min-height: 297mm; margin: 0 auto; background: white; display: flex; flex-direction: column; }
        .section { margin-bottom: 20px; }
        .experience-item, .education-item, .cert-item { margin-bottom: 15px; page-break-inside: avoid; }
        .job-title, .degree, .cert-name { font-weight: 600; font-size: 13px; margin-bottom: 3px; }
        .company, .school, .cert-issuer { font-size: 12px; color: #666; margin-bottom: 2px; }
        .date { font-size: 11px; color: #888; margin-bottom: 5px; }
        .description { font-size: 11px; line-height: 1.4; }
        .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill { background: #f0f0f0; padding: 4px 8px; border-radius: 12px; font-size: 10px; display: inline-block; }
        .languages .lang-item { margin-bottom: 8px; }
        .lang-name { font-weight: 600; font-size: 11px; }
        .lang-level { font-size: 10px; color: #666; }
    `;
    
    switch (templateId) {
        case 'modern':
            return baseStyles + `
                .page { flex-direction: row; }
                .sidebar { width: 35%; background: #f8f9fa; padding: 25px; min-height: 297mm; }
                .main-content { width: 65%; padding: 30px; }
                .photo { width: 120px; height: 120px; border-radius: 60px; margin: 0 auto 20px; display: block; object-fit: cover; }
                .name { font-size: 24px; font-weight: 700; color: #1a1a1a; margin-bottom: 5px; }
                .title { font-size: 14px; color: #6d54b0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
                .section-title { font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; margin-top: 25px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #6d54b0; padding-bottom: 5px; }
                .sidebar-title { font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px; }
                .contact-info { margin-bottom: 20px; }
                .contact-item { margin-bottom: 8px; font-size: 11px; color: #4a4a4a; }
                .skill { background: #e9ecef; color: #495057; }
            `;
        case 'classic':
            return baseStyles + `
                .page { padding: 40px; }
                .header { text-align: center; border-bottom: 1px solid #000; padding-bottom: 20px; margin-bottom: 25px; }
                .name { font-size: 24px; font-weight: 700; color: #000; text-transform: uppercase; margin-bottom: 5px; }
                .title { font-size: 14px; color: #444; margin-bottom: 10px; }
                .contact-info { display: flex; justify-content: center; gap: 15px; font-size: 10px; color: #666; flex-wrap: wrap; }
                .section-title { font-size: 12px; font-weight: 700; border-bottom: 1px solid #ccc; padding-bottom: 3px; margin-bottom: 12px; text-transform: uppercase; }
                .item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3px; }
                .skill { background: #f0f0f0; color: #333; }
            `;
        case 'minimal':
            return baseStyles + `
                .page { padding: 50px; }
                .header { margin-bottom: 35px; }
                .name { font-size: 28px; font-weight: 300; color: #000; margin-bottom: 5px; }
                .title { font-size: 14px; color: #666; margin-bottom: 15px; }
                .contact-info { font-size: 10px; color: #666; line-height: 1.5; }
                .section-title { font-size: 11px; font-weight: 600; color: #000; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; margin-top: 25px; }
                .item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3px; }
                .skills-grid { gap: 0; }
                .skill { background: none; padding: 0; border-radius: 0; margin-right: 15px; color: #444; }
                .skill:after { content: '•'; margin-left: 15px; }
                .skill:last-child:after { content: ''; margin-left: 0; }
            `;
        case 'bold':
            return baseStyles + `
                .page { flex-direction: row; }
                .sidebar { width: 40%; background: #1a1a1a; color: white; padding: 30px; min-height: 297mm; }
                .main-content { width: 60%; padding: 30px; }
                .photo { width: 150px; height: 150px; border-radius: 10px; margin: 0 auto 30px; display: block; object-fit: cover; }
                .name { font-size: 32px; font-weight: 700; color: #1a1a1a; text-transform: uppercase; margin-bottom: 5px; }
                .title { font-size: 14px; color: #6d54b0; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 30px; }
                .section-title { font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 15px; margin-top: 15px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #6d54b0; padding-bottom: 5px; }
                .sidebar-title { font-size: 14px; font-weight: 700; color: white; margin-bottom: 15px; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #6d54b0; padding-bottom: 5px; }
                .contact-item { margin-bottom: 10px; }
                .contact-label { font-size: 8px; color: #888; text-transform: uppercase; margin-bottom: 2px; }
                .contact-value { font-size: 10px; color: white; }
                .skill-item { margin-bottom: 8px; }
                .skill-name { font-size: 10px; color: white; margin-bottom: 2px; }
                .skill-bar { height: 3px; background: #333; border-radius: 1px; position: relative; }
                .skill-fill { height: 100%; background: #6d54b0; border-radius: 1px; width: 80%; }
                .company, .school, .cert-issuer { color: #6d54b0; }
            `;
        default:
            return baseStyles;
    }
}

function generateModernTemplate(cvData: CVData) {
    const personal = cvData.personal || {};
    const skills = cvData.skills || [];
    const languages = cvData.languages || [];
    const experience = cvData.experience || [];
    const education = cvData.education || [];
    const certifications = cvData.certifications || [];
    
    return `
        <div class="sidebar">
            ${personal.photo ? `<img src="${personal.photo}" alt="Photo" class="photo" />` : ''}
            
            <div class="sidebar-title">Contact</div>
            <div class="contact-info">
                ${personal.email ? `<div class="contact-item">${personal.email}</div>` : ''}
                ${personal.phone ? `<div class="contact-item">${personal.phone}</div>` : ''}
                ${personal.address ? `<div class="contact-item">${personal.address}</div>` : ''}
                ${personal.city ? `<div class="contact-item">${personal.city}, ${personal.country || ''}</div>` : ''}
            </div>

            ${skills.length > 0 ? `
                <div class="sidebar-title">Skills</div>
                <div class="skills-grid">
                    ${skills.map(skill => `<span class="skill">${skill || ''}</span>`).join('')}
                </div>
            ` : ''}

            ${languages.length > 0 ? `
                <div class="sidebar-title">Languages</div>
                <div class="languages">
                    ${languages.map(lang => `
                        <div class="lang-item">
                            <div class="lang-name">${lang.language || ''}</div>
                            <div class="lang-level">${lang.proficiency || ''}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="main-content">
            <div class="name">${personal.fullName || 'Professional CV'}</div>
            <div class="title">${personal.title || ''}</div>

            ${cvData.summary ? `
                <div class="section-title">Summary</div>
                <div class="description">${cvData.summary}</div>
            ` : ''}

            ${experience.length > 0 ? `
                <div class="section-title">Experience</div>
                ${experience.map(exp => `
                    <div class="experience-item">
                        <div class="job-title">${exp.position || ''}</div>
                        <div class="company">${exp.company || ''} | ${exp.location || ''}</div>
                        <div class="date">${exp.startDate || ''} - ${exp.current ? 'Present' : (exp.endDate || '')}</div>
                        <div class="description">${exp.description || ''}</div>
                    </div>
                `).join('')}
            ` : ''}

            ${education.length > 0 ? `
                <div class="section-title">Education</div>
                ${education.map(edu => `
                    <div class="education-item">
                        <div class="degree">${edu.degree || ''}</div>
                        <div class="school">${edu.school || ''} | ${edu.location || ''}</div>
                        <div class="date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                        ${edu.description ? `<div class="description">${edu.description}</div>` : ''}
                    </div>
                `).join('')}
            ` : ''}

            ${certifications.length > 0 ? `
                <div class="section-title">Certifications</div>
                ${certifications.map(cert => `
                    <div class="cert-item">
                        <div class="cert-name">${cert.name || ''}</div>
                        <div class="cert-issuer">${cert.issuer || ''}</div>
                        <div class="date">${cert.date || ''}</div>
                    </div>
                `).join('')}
            ` : ''}
        </div>
    `;
}

function generateClassicTemplate(cvData: CVData) {
    const personal = cvData.personal || {};
    const skills = cvData.skills || [];
    const languages = cvData.languages || [];
    const experience = cvData.experience || [];
    const education = cvData.education || [];
    const certifications = cvData.certifications || [];
    
    return `
        <div class="header">
            <div class="name">${personal.fullName || 'Professional CV'}</div>
            <div class="title">${personal.title || ''}</div>
            <div class="contact-info">
                ${personal.email ? `<span>${personal.email}</span>` : ''}
                ${personal.phone ? `<span>|</span><span>${personal.phone}</span>` : ''}
                ${personal.city ? `<span>|</span><span>${personal.city}, ${personal.country || ''}</span>` : ''}
            </div>
        </div>

        ${cvData.summary ? `
            <div class="section">
                <div class="section-title">Summary</div>
                <div class="description">${cvData.summary}</div>
            </div>
        ` : ''}

        ${experience.length > 0 ? `
            <div class="section">
                <div class="section-title">Experience</div>
                ${experience.map(exp => `
                    <div class="experience-item">
                        <div class="item-header">
                            <div class="job-title">${exp.position || ''}</div>
                            <div class="date">${exp.startDate || ''} - ${exp.current ? 'Present' : (exp.endDate || '')}</div>
                        </div>
                        <div class="company">${exp.company || ''}, ${exp.location || ''}</div>
                        <div class="description">${exp.description || ''}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        ${education.length > 0 ? `
            <div class="section">
                <div class="section-title">Education</div>
                ${education.map(edu => `
                    <div class="education-item">
                        <div class="item-header">
                            <div class="degree">${edu.degree || ''}</div>
                            <div class="date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                        </div>
                        <div class="school">${edu.school || ''}, ${edu.location || ''}</div>
                        ${edu.description ? `<div class="description">${edu.description}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        ` : ''}

        ${skills.length > 0 ? `
            <div class="section">
                <div class="section-title">Skills</div>
                <div class="skills-grid">
                    ${skills.map(skill => `<span class="skill">${skill || ''}</span>`).join('')}
                </div>
            </div>
        ` : ''}

        ${languages.length > 0 ? `
            <div class="section">
                <div class="section-title">Languages</div>
                <div class="languages">
                    ${languages.map(lang => `
                        <div class="lang-item">
                            <span class="lang-name">${lang.language || ''}</span> - <span class="lang-level">${lang.proficiency || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        ${certifications.length > 0 ? `
            <div class="section">
                <div class="section-title">Certifications</div>
                ${certifications.map(cert => `
                    <div class="cert-item">
                        <div class="cert-name">${cert.name || ''}</div>
                        <div class="cert-issuer">${cert.issuer || ''}</div>
                        <div class="date">${cert.date || ''}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function generateMinimalTemplate(cvData: CVData) {
    const personal = cvData.personal || {};
    const skills = cvData.skills || [];
    const languages = cvData.languages || [];
    const experience = cvData.experience || [];
    const education = cvData.education || [];
    const certifications = cvData.certifications || [];
    
    return `
        <div class="header">
            <div class="name">${personal.fullName || 'Professional CV'}</div>
            <div class="title">${personal.title || ''}</div>
            <div class="contact-info">
                ${personal.email ? `${personal.email}` : ''}
                ${personal.phone ? ` • ${personal.phone}` : ''}
                <br>
                ${personal.address ? `${personal.address}, ` : ''}${personal.city ? `${personal.city}, ${personal.country || ''}` : ''}
            </div>
        </div>

        ${cvData.summary ? `
            <div class="section">
                <div class="section-title">Summary</div>
                <div class="description">${cvData.summary}</div>
            </div>
        ` : ''}

        ${experience.length > 0 ? `
            <div class="section">
                <div class="section-title">Experience</div>
                ${experience.map(exp => `
                    <div class="experience-item">
                        <div class="item-header">
                            <div class="job-title">${exp.position || ''}</div>
                            <div class="date">${exp.startDate || ''} - ${exp.current ? 'Present' : (exp.endDate || '')}</div>
                        </div>
                        <div class="company">${exp.company || ''}, ${exp.location || ''}</div>
                        <div class="description">${exp.description || ''}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        ${education.length > 0 ? `
            <div class="section">
                <div class="section-title">Education</div>
                ${education.map(edu => `
                    <div class="education-item">
                        <div class="item-header">
                            <div class="degree">${edu.degree || ''}</div>
                            <div class="date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                        </div>
                        <div class="school">${edu.school || ''}, ${edu.location || ''}</div>
                        ${edu.description ? `<div class="description">${edu.description}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        ` : ''}

        ${skills.length > 0 ? `
            <div class="section">
                <div class="section-title">Skills</div>
                <div class="skills-grid">
                    ${skills.map(skill => `<span class="skill">${skill || ''}</span>`).join('')}
                </div>
            </div>
        ` : ''}

        ${languages.length > 0 ? `
            <div class="section">
                <div class="section-title">Languages</div>
                <div class="languages">
                    ${languages.map(lang => `
                        <div class="lang-item">
                            <span class="lang-name">${lang.language || ''}</span> - <span class="lang-level">${lang.proficiency || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        ${certifications.length > 0 ? `
            <div class="section">
                <div class="section-title">Certifications</div>
                ${certifications.map(cert => `
                    <div class="cert-item">
                        <div class="cert-name">${cert.name || ''}</div>
                        <div class="cert-issuer">${cert.issuer || ''}</div>
                        <div class="date">${cert.date || ''}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function generateBoldTemplate(cvData: CVData) {
    const personal = cvData.personal || {};
    const skills = cvData.skills || [];
    const languages = cvData.languages || [];
    const experience = cvData.experience || [];
    const education = cvData.education || [];
    const certifications = cvData.certifications || [];
    
    return `
        <div class="sidebar">
            ${personal.photo ? `<img src="${personal.photo}" alt="Photo" class="photo" />` : ''}
            
            <div class="sidebar-title">Contact</div>
            <div class="contact-item">
                <div class="contact-label">Email</div>
                <div class="contact-value">${personal.email || ''}</div>
            </div>
            <div class="contact-item">
                <div class="contact-label">Phone</div>
                <div class="contact-value">${personal.phone || ''}</div>
            </div>
            <div class="contact-item">
                <div class="contact-label">Address</div>
                <div class="contact-value">${personal.address || ''}</div>
                <div class="contact-value">${personal.city ? `${personal.city}, ${personal.country || ''}` : ''}</div>
            </div>

            ${skills.length > 0 ? `
                <div class="sidebar-title">Skills</div>
                ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-name">${skill || ''}</div>
                        <div class="skill-bar">
                            <div class="skill-fill"></div>
                        </div>
                    </div>
                `).join('')}
            ` : ''}

            ${languages.length > 0 ? `
                <div class="sidebar-title">Languages</div>
                ${languages.map(lang => `
                    <div class="contact-item">
                        <div class="contact-value">${lang.language || ''}</div>
                        <div class="contact-label">${lang.proficiency || ''}</div>
                    </div>
                `).join('')}
            ` : ''}
        </div>

        <div class="main-content">
            <div class="name">${personal.fullName || 'Professional CV'}</div>
            <div class="title">${personal.title || ''}</div>

            ${cvData.summary ? `
                <div class="section-title">Summary</div>
                <div class="description">${cvData.summary}</div>
            ` : ''}

            ${experience.length > 0 ? `
                <div class="section-title">Experience</div>
                ${experience.map(exp => `
                    <div class="experience-item">
                        <div class="job-title">${exp.position || ''}</div>
                        <div class="company">${exp.company || ''} | ${exp.location || ''}</div>
                        <div class="date">${exp.startDate || ''} - ${exp.current ? 'Present' : (exp.endDate || '')}</div>
                        <div class="description">${exp.description || ''}</div>
                    </div>
                `).join('')}
            ` : ''}

            ${education.length > 0 ? `
                <div class="section-title">Education</div>
                ${education.map(edu => `
                    <div class="education-item">
                        <div class="degree">${edu.degree || ''}</div>
                        <div class="school">${edu.school || ''} | ${edu.location || ''}</div>
                        <div class="date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                        ${edu.description ? `<div class="description">${edu.description}</div>` : ''}
                    </div>
                `).join('')}
            ` : ''}

            ${certifications.length > 0 ? `
                <div class="section-title">Certifications</div>
                ${certifications.map(cert => `
                    <div class="cert-item">
                        <div class="cert-name">${cert.name || ''}</div>
                        <div class="cert-issuer">${cert.issuer || ''}</div>
                        <div class="date">${cert.date || ''}</div>
                    </div>
                `).join('')}
            ` : ''}
        </div>
    `;
}

export function generateSimplePDF(cvData: CVData) {
    try {
        // Validate cvData
        if (!cvData || !cvData.personal) {
            throw new Error('Invalid CV data provided');
        }

        const templateStyles = getTemplateStyles(cvData.templateId);
        
        let templateContent = '';
        switch (cvData.templateId) {
            case 'modern':
                templateContent = generateModernTemplate(cvData);
                break;
            case 'classic':
                templateContent = generateClassicTemplate(cvData);
                break;
            case 'minimal':
                templateContent = generateMinimalTemplate(cvData);
                break;
            case 'bold':
                templateContent = generateBoldTemplate(cvData);
                break;
            default:
                templateContent = generateModernTemplate(cvData);
        }
        
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CV - ${cvData.personal.fullName || 'Professional CV'}</title>
    <style>
        ${templateStyles}
        @media print {
            .page { margin: 0; box-shadow: none; }
            body { margin: 0; }
        }
    </style>
</head>
<body>
    <div class="page">
        ${templateContent}
    </div>
</body>
</html>`;

        // Open in new window for printing
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            try {
                newWindow.document.write(htmlContent);
                newWindow.document.close();
                
                // Wait for content to load before printing
                newWindow.onload = () => {
                    setTimeout(() => {
                        try {
                            newWindow.print();
                        } catch (printError) {
                            console.error('Print error:', printError);
                            alert('There was an error printing the PDF. Please try again.');
                        }
                    }, 500);
                };
            } catch (windowError) {
                console.error('Window operation error:', windowError);
                alert('There was an error opening the print window. Please check your browser settings.');
            }
        } else {
            alert('Unable to open print window. Please check if pop-ups are blocked.');
        }
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('There was an error generating the PDF. Please try again.');
    }
}