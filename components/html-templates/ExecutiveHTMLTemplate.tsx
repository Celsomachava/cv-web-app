// PDF Template: Executive – Elegant Dark Theme with Serif (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function ExecutiveHTMLTemplate({ data, t }: Props) {
    const accentColor = data.themeColor || '#b8860b';
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                :root {
                    --accent-color: ${accentColor};
                    --text-color: #4a4a4a;
                    --bg-color: white;
                    --heading-color: #2a2a2a;
                }
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Georgia', 'Times New Roman', serif; }
            .executive-template { max-width: 850px; margin: 0 auto; padding: 70px 60px; min-height: 297mm; background: white; }
            .header-executive { text-align: center; margin-bottom: 50px; padding-bottom: 25px; border-bottom: 1px solid #2a2a2a; }
            .name-executive { font-size: 38px; font-weight: normal; color: #1a1a1a; margin-bottom: 12px; letter-spacing: 3px; }
            .title-executive { font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; font-family: 'Inter', sans-serif; }
            .contact-executive { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 11px; color: #4a4a4a; font-family: 'Inter', sans-serif; }
            .contact-executive span { display: flex; align-items: center; gap: 6px; }
            .contact-executive i { color: var(--accent-color); font-size: 12px; }
            .section-executive { margin-bottom: 40px; }
            .section-title-executive { font-size: 14px; font-weight: normal; color: #1a1a1a; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0; font-family: 'Inter', sans-serif; }
            .exp-executive { margin-bottom: 25px; }
            .exp-header-executive { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
            .exp-title-executive { font-size: 14px; font-weight: bold; color: #1a1a1a; }
            .exp-date-executive { font-size: 11px; color: #999; font-family: 'Inter', sans-serif; }
            .exp-company-executive { font-size: 12px; color: var(--accent-color); font-style: italic; margin-bottom: 10px; }
            .exp-desc-executive { font-size: 11px; color: #4a4a4a; line-height: 1.8; font-family: 'Inter', sans-serif; }
            .skills-executive { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .skill-executive { font-size: 11px; color: #4a4a4a; padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-family: 'Inter', sans-serif; }
            .two-col-executive { display: flex; gap: 40px; }
            .col-executive { flex: 1; }
            .lang-executive { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 11px; font-family: 'Inter', sans-serif; }
            .lang-name-executive { font-weight: 600; color: #1a1a1a; }
            .lang-level-executive { color: #666; }
        </style>
        <div class="executive-template">
            <div class="header-executive">
                <div class="name-executive">${data.personal.fullName}</div>
                <div class="title-executive">${data.personal.title}</div>
                <div class="contact-executive">
                    ${data.personal.phone ? `<span><i class="fa-solid fa-phone"></i> ${data.personal.phone}</span>` : ''}
                    ${data.personal.email ? `<span><i class="fa-solid fa-envelope"></i> ${data.personal.email}</span>` : ''}
                    ${data.personal.address || data.personal.city || data.personal.postcode || data.personal.country ? `<span><i class="fa-solid fa-location-dot"></i> ${data.personal.address || ''}${data.personal.city ? `, ${data.personal.city}` : ''}${data.personal.postcode ? ` ${data.personal.postcode}` : ''}${data.personal.country ? `, ${data.personal.country}` : ''}</span>` : ''}
                    ${data.personal.birthDate ? `<span><i class="fa-solid fa-cake-candles"></i> ${data.personal.birthDate}</span>` : ''}
                    ${data.personal.nationality ? `<span><i class="fa-solid fa-flag"></i> ${data.personal.nationality}</span>` : ''}
                    ${data.personal.drivingLicense ? `<span><i class="fa-solid fa-id-card"></i> ${data.personal.drivingLicense}</span>` : ''}
                    ${data.personal.linkedin ? `<span><i class="fa-brands fa-linkedin"></i> ${data.personal.linkedin}</span>` : ''}
                    ${data.personal.website ? `<span><i class="fa-solid fa-globe"></i> ${data.personal.website}</span>` : ''}
                    ${data.personal.twitter ? `<span><i class="fa-brands fa-x-twitter"></i> ${data.personal.twitter}</span>` : ''}
                </div>
            </div>
            
            ${data.summary ? `<div class="section-executive"><div class="section-title-executive">${t.summary}</div><div class="exp-desc-executive">${data.summary}</div></div>` : ''}
            
            ${data.experience.length > 0 ? `<div class="section-executive"><div class="section-title-executive">${t.experience}</div>${data.experience.map(exp => `<div class="exp-executive"><div class="exp-header-executive"><div class="exp-title-executive">${exp.position}</div><div class="exp-date-executive">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div></div><div class="exp-company-executive">${exp.company}, ${exp.location}</div><div class="exp-desc-executive">${exp.description}</div></div>`).join('')}</div>` : ''}
            
            ${data.education.length > 0 ? `<div class="section-executive"><div class="section-title-executive">${t.education}</div>${data.education.map(edu => `<div class="exp-executive"><div class="exp-header-executive"><div class="exp-title-executive">${edu.degree}</div>${!edu.hideDates ? `<div class="exp-date-executive">${edu.startDate} - ${edu.endDate}</div>` : ''}</div><div class="exp-company-executive">${edu.school}, ${edu.location}</div>${edu.description ? `<div class="exp-desc-executive">${edu.description}</div>` : ''}</div>`).join('')}</div>` : ''}
            
            <div class="two-col-executive">
                ${data.skills.length > 0 ? `<div class="col-executive"><div class="section-title-executive">${t.skills}</div><div class="skills-executive">${data.skills.map(skill => `<div class="skill-executive">${skill}</div>`).join('')}</div></div>` : ''}
                
                ${data.languages.length > 0 ? `<div class="col-executive"><div class="section-title-executive">${t.languages}</div>${data.languages.map(lang => `<div class="lang-executive"><span class="lang-name-executive">${lang.language}</span><span class="lang-level-executive">${lang.proficiency}</span></div>`).join('')}</div>` : ''}
            </div>
            
            ${data.certifications.length > 0 ? `<div class="section-executive"><div class="section-title-executive">${t.certifications}</div>${data.certifications.map(cert => `<div class="exp-executive"><div class="exp-title-executive">${cert.name}</div><div class="exp-company-executive">${cert.issuer} • ${cert.date}${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}</div></div>`).join('')}</div>` : ''}
            
            ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-executive"><div class="section-title-executive">${t.hobbies || 'Hobbies'}</div><div class="skills-executive">${data.hobbies.map(hobby => `<div class="skill-executive">${hobby}</div>`).join('')}</div></div>` : ''}
        </div>
        </body>
        </html>
    `;
}
