// PDF Template: Minimal – Ultra Clean Monochrome (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function MinimalHTMLTemplate({ data, t }: Props) {
    const accentColor = data.themeColor || '#6d54b0';
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
                    --heading-color: #1a1a1a;
                }
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', -apple-system, sans-serif; }
            .minimal-template { max-width: 800px; margin: 0 auto; padding: 60px 50px; min-height: 297mm; background: white; }
            .header-minimal { text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #e0e0e0; }
            .photo-minimal { width: 80px; height: 80px; border-radius: 40px; object-fit: cover; margin: 0 auto 20px; display: block; }
            .name-minimal { font-size: 32px; font-weight: 300; color: #1a1a1a; margin-bottom: 8px; letter-spacing: 2px; }
            .title-minimal { font-size: 14px; color: var(--accent-color); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; }
            .contact-minimal { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; font-size: 11px; color: #666; }
            .contact-minimal span { display: flex; align-items: center; gap: 5px; }
            .contact-minimal i { color: var(--accent-color); font-size: 12px; }
            .section-minimal { margin-bottom: 35px; }
            .section-title-minimal { font-size: 12px; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 1px solid var(--accent-color); }
            .exp-item-minimal { margin-bottom: 20px; padding-left: 20px; border-left: 2px solid #f0f0f0; }
            .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px; }
            .exp-title-minimal { font-size: 13px; font-weight: 600; color: #1a1a1a; }
            .exp-date-minimal { font-size: 10px; color: #999; }
            .exp-company-minimal { font-size: 11px; color: #666; margin-bottom: 8px; }
            .exp-desc-minimal { font-size: 11px; color: #4a4a4a; line-height: 1.7; }
            .skills-minimal { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill-minimal { font-size: 11px; color: #4a4a4a; padding: 4px 0; border-bottom: 1px solid #e0e0e0; }
            .lang-minimal { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 11px; }
            .lang-name-minimal { font-weight: 600; color: #1a1a1a; }
            .lang-level-minimal { color: #666; }
        </style>
        <div class="minimal-template">
            <div class="header-minimal">
                ${data.personal.photo ? `<img src="${data.personal.photo}" class="photo-minimal" alt="Profile" />` : ''}
                <div class="name-minimal">${data.personal.fullName}</div>
                <div class="title-minimal">${data.personal.title}</div>
                <div class="contact-minimal">
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
            
            ${data.summary ? `<div class="section-minimal"><div class="section-title-minimal">${t.summary}</div><div class="exp-desc-minimal">${data.summary}</div></div>` : ''}
            
            ${data.experience.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.experience}</div>${data.experience.map(exp => `<div class="exp-item-minimal"><div class="exp-header"><div class="exp-title-minimal">${exp.position}</div><div class="exp-date-minimal">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div></div><div class="exp-company-minimal">${exp.company} | ${exp.location}</div><div class="exp-desc-minimal">${exp.description}</div></div>`).join('')}</div>` : ''}
            
            ${data.education.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.education}</div>${data.education.map(edu => `<div class="exp-item-minimal"><div class="exp-header"><div class="exp-title-minimal">${edu.degree}</div>${!edu.hideDates ? `<div class="exp-date-minimal">${edu.startDate} - ${edu.endDate}</div>` : ''}</div><div class="exp-company-minimal">${edu.school} | ${edu.location}</div>${edu.description ? `<div class="exp-desc-minimal">${edu.description}</div>` : ''}</div>`).join('')}</div>` : ''}
            
            ${data.skills.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.skills}</div><div class="skills-minimal">${data.skills.map(skill => `<div class="skill-minimal">${skill}</div>`).join('')}</div></div>` : ''}
            
            ${data.languages.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.languages}</div>${data.languages.map(lang => `<div class="lang-minimal"><span class="lang-name-minimal">${lang.language}</span><span class="lang-level-minimal">${lang.proficiency}</span></div>`).join('')}</div>` : ''}
            
            ${data.certifications.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.certifications}</div>${data.certifications.map(cert => `<div class="exp-item-minimal"><div class="exp-title-minimal">${cert.name}</div><div class="exp-company-minimal">${cert.issuer} • ${cert.date}${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}</div></div>`).join('')}</div>` : ''}
            
            ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-minimal"><div class="section-title-minimal">${t.hobbies || 'Hobbies'}</div><div class="skills-minimal">${data.hobbies.map(hobby => `<div class="skill-minimal">${hobby}</div>`).join('')}</div></div>` : ''}
        </div>
        </body>
        </html>
    `;
}
