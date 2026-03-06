// PDF Template: Modern – Full-width Header Bar (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function ModernHTMLTemplate2({ data, t }: Props) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                :root {
                    --accent-color: #6d54b0;
                    --text-color: #4a4a4a;
                    --bg-color: white;
                    --heading-color: #1a1a1a;
                }
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', -apple-system, sans-serif; }
            .modern-template { min-height: 297mm; background: white; }
            .header { background: var(--accent-color); color: white; padding: 50px 40px 30px; position: relative; }
            .header::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, var(--accent-color) 0%, rgba(0,0,0,0.2) 100%); }
            .photo-modern { width: 100px; height: 100px; border-radius: 50px; object-fit: cover; border: 4px solid white; margin-bottom: 20px; }
            .name-modern { font-size: 36px; font-weight: bold; margin-bottom: 8px; }
            .title-modern { font-size: 18px; opacity: 0.95; letter-spacing: 1px; }
            .contact-row { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; }
            .contact-item { display: flex; align-items: center; gap: 8px; font-size: 12px; }
            .contact-item i { font-size: 14px; }
            .content { padding: 40px; }
            .two-col { display: flex; gap: 40px; }
            .col-left { flex: 2; }
            .col-right { flex: 1; }
            .section-title { font-size: 16px; font-weight: bold; color: var(--accent-color); margin: 25px 0 15px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid var(--accent-color); padding-bottom: 5px; }
            .exp-item { margin-bottom: 20px; }
            .exp-title { font-size: 14px; font-weight: bold; color: #1a1a1a; }
            .exp-company { font-size: 12px; color: #666; margin: 2px 0; }
            .exp-date { font-size: 11px; color: #999; margin-bottom: 6px; }
            .exp-desc { font-size: 11px; color: #4a4a4a; line-height: 1.6; }
            .skill-badge { display: inline-block; background: var(--accent-color); color: white; padding: 5px 10px; border-radius: 3px; margin: 0 6px 6px 0; font-size: 10px; }
            .lang-item { margin-bottom: 10px; }
            .lang-name { font-size: 12px; font-weight: bold; color: #1a1a1a; }
            .lang-level { font-size: 10px; color: #666; }
        </style>
        <div class="modern-template">
            <div class="header">
                ${data.personal.photo ? `<img src="${data.personal.photo}" class="photo-modern" alt="Profile" />` : ''}
                <div class="name-modern">${data.personal.fullName}</div>
                <div class="title-modern">${data.personal.title}</div>
                <div class="contact-row">
                    ${data.personal.phone ? `<div class="contact-item"><i class="fa-solid fa-phone"></i> ${data.personal.phone}</div>` : ''}
                    ${data.personal.email ? `<div class="contact-item"><i class="fa-solid fa-envelope"></i> ${data.personal.email}</div>` : ''}
                    ${data.personal.address ? `<div class="contact-item"><i class="fa-solid fa-location-dot"></i> ${data.personal.address}</div>` : ''}
                    ${data.personal.linkedin ? `<div class="contact-item"><i class="fa-brands fa-linkedin"></i> LinkedIn</div>` : ''}
                    ${data.personal.website ? `<div class="contact-item"><i class="fa-solid fa-globe"></i> Website</div>` : ''}
                </div>
            </div>
            
            <div class="content">
                <div class="two-col">
                    <div class="col-left">
                        ${data.summary ? `<div class="section-title">${t.summary}</div><div class="exp-desc">${data.summary}</div>` : ''}
                        ${data.experience.length > 0 ? `<div class="section-title">${t.experience}</div>${data.experience.map(exp => `<div class="exp-item"><div class="exp-title">${exp.position}</div><div class="exp-company">${exp.company} | ${exp.location}</div><div class="exp-date">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div><div class="exp-desc">${exp.description}</div></div>`).join('')}` : ''}
                        ${data.education.length > 0 ? `<div class="section-title">${t.education}</div>${data.education.map(edu => `<div class="exp-item"><div class="exp-title">${edu.degree}</div><div class="exp-company">${edu.school} | ${edu.location}</div>${!edu.hideDates ? `<div class="exp-date">${edu.startDate} - ${edu.endDate}</div>` : ''}${edu.description ? `<div class="exp-desc">${edu.description}</div>` : ''}</div>`).join('')}` : ''}
                    </div>
                    
                    <div class="col-right">
                        ${data.skills.length > 0 ? `<div class="section-title">${t.skills}</div><div>${data.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}</div>` : ''}
                        ${data.languages.length > 0 ? `<div class="section-title">${t.languages}</div>${data.languages.map(lang => `<div class="lang-item"><div class="lang-name">${lang.language}</div><div class="lang-level">${lang.proficiency}</div></div>`).join('')}` : ''}
                        ${data.certifications.length > 0 ? `<div class="section-title">${t.certifications}</div>${data.certifications.map(cert => `<div class="exp-item"><div class="exp-title">${cert.name}</div><div class="exp-company">${cert.issuer}</div><div class="exp-date">${cert.date}</div></div>`).join('')}` : ''}
                        ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-title">${t.hobbies || 'Hobbies'}</div><div>${data.hobbies.map(hobby => `<span class="skill-badge">${hobby}</span>`).join('')}</div>` : ''}
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    `;
}
