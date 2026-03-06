// PDF Template: Compact – Dense Single Column (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function CompactHTMLTemplate({ data, t }: Props) {
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
            .compact-template { max-width: 750px; margin: 0 auto; padding: 40px 45px; min-height: 297mm; background: white; }
            .header-compact { display: flex; justify-content: space-between; align-items: start; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid var(--accent-color); }
            .header-left { flex: 1; }
            .header-right { text-align: right; }
            .name-compact { font-size: 26px; font-weight: bold; color: #1a1a1a; margin-bottom: 5px; }
            .title-compact { font-size: 13px; color: var(--accent-color); text-transform: uppercase; letter-spacing: 1px; }
            .contact-compact { font-size: 10px; color: #666; line-height: 1.6; }
            .contact-compact div { margin-bottom: 3px; }
            .contact-compact i { color: var(--accent-color); margin-right: 5px; font-size: 11px; }
            .section-compact { margin-bottom: 20px; }
            .section-title-compact { font-size: 12px; font-weight: bold; color: white; background: var(--accent-color); padding: 5px 12px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .exp-compact { margin-bottom: 15px; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0; }
            .exp-compact:last-child { border-bottom: none; }
            .exp-header-compact { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
            .exp-title-compact { font-size: 12px; font-weight: bold; color: #1a1a1a; }
            .exp-date-compact { font-size: 9px; color: #999; }
            .exp-company-compact { font-size: 11px; color: #666; margin-bottom: 5px; }
            .exp-desc-compact { font-size: 10px; color: #4a4a4a; line-height: 1.5; }
            .skills-compact { display: flex; flex-wrap: wrap; gap: 6px; }
            .skill-compact { font-size: 9px; background: #f0f0f0; color: #4a4a4a; padding: 4px 8px; border-radius: 3px; }
            .two-col-compact { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .lang-compact { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 10px; }
            .lang-name-compact { font-weight: 600; color: #1a1a1a; }
            .lang-level-compact { color: #666; }
            .summary-compact { font-size: 10px; color: #4a4a4a; line-height: 1.6; }
        </style>
        <div class="compact-template">
            <div class="header-compact">
                <div class="header-left">
                    <div class="name-compact">${data.personal.fullName}</div>
                    <div class="title-compact">${data.personal.title}</div>
                </div>
                <div class="header-right">
                    <div class="contact-compact">
                        ${data.personal.phone ? `<div><i class="fa-solid fa-phone"></i> ${data.personal.phone}</div>` : ''}
                        ${data.personal.email ? `<div><i class="fa-solid fa-envelope"></i> ${data.personal.email}</div>` : ''}
                        ${data.personal.address || data.personal.city || data.personal.postcode || data.personal.country ? `<div><i class="fa-solid fa-location-dot"></i> ${data.personal.address || ''}${data.personal.city ? `, ${data.personal.city}` : ''}${data.personal.postcode ? ` ${data.personal.postcode}` : ''}${data.personal.country ? `, ${data.personal.country}` : ''}</div>` : ''}
                        ${data.personal.birthDate ? `<div><i class="fa-solid fa-cake-candles"></i> ${data.personal.birthDate}</div>` : ''}
                        ${data.personal.nationality ? `<div><i class="fa-solid fa-flag"></i> ${data.personal.nationality}</div>` : ''}
                        ${data.personal.drivingLicense ? `<div><i class="fa-solid fa-id-card"></i> ${data.personal.drivingLicense}</div>` : ''}
                        ${data.personal.linkedin ? `<div><i class="fa-brands fa-linkedin"></i> ${data.personal.linkedin}</div>` : ''}
                        ${data.personal.website ? `<div><i class="fa-solid fa-globe"></i> ${data.personal.website}</div>` : ''}
                        ${data.personal.twitter ? `<div><i class="fa-brands fa-x-twitter"></i> ${data.personal.twitter}</div>` : ''}
                    </div>
                </div>
            </div>
            
            ${data.summary ? `<div class="section-compact"><div class="section-title-compact">${t.summary}</div><div class="summary-compact">${data.summary}</div></div>` : ''}
            
            ${data.experience.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.experience}</div>${data.experience.map(exp => `<div class="exp-compact"><div class="exp-header-compact"><div class="exp-title-compact">${exp.position}</div><div class="exp-date-compact">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div></div><div class="exp-company-compact">${exp.company} | ${exp.location}</div><div class="exp-desc-compact">${exp.description}</div></div>`).join('')}</div>` : ''}
            
            ${data.education.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.education}</div>${data.education.map(edu => `<div class="exp-compact"><div class="exp-header-compact"><div class="exp-title-compact">${edu.degree}</div>${!edu.hideDates ? `<div class="exp-date-compact">${edu.startDate} - ${edu.endDate}</div>` : ''}</div><div class="exp-company-compact">${edu.school} | ${edu.location}</div>${edu.description ? `<div class="exp-desc-compact">${edu.description}</div>` : ''}</div>`).join('')}</div>` : ''}
            
            <div class="two-col-compact">
                ${data.skills.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.skills}</div><div class="skills-compact">${data.skills.map(skill => `<span class="skill-compact">${skill}</span>`).join('')}</div></div>` : ''}
                
                ${data.languages.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.languages}</div>${data.languages.map(lang => `<div class="lang-compact"><span class="lang-name-compact">${lang.language}</span><span class="lang-level-compact">${lang.proficiency}</span></div>`).join('')}</div>` : ''}
            </div>
            
            ${data.certifications.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.certifications}</div>${data.certifications.map(cert => `<div class="exp-compact"><div class="exp-title-compact">${cert.name}</div><div class="exp-company-compact">${cert.issuer} • ${cert.date}${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}</div></div>`).join('')}</div>` : ''}
            
            ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-compact"><div class="section-title-compact">${t.hobbies || 'Hobbies'}</div><div class="skills-compact">${data.hobbies.map(hobby => `<span class="skill-compact">${hobby}</span>`).join('')}</div></div>` : ''}
        </div>
        </body>
        </html>
    `;
}
