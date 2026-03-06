// PDF Template: Classic – Left Sidebar Layout (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function ClassicHTMLTemplate({ data, t }: Props) {
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
                    --bg-color: #f8f9fa;
                    --heading-color: #1a1a1a;
                }
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', -apple-system, sans-serif; }
            .classic-template { display: flex; min-height: 297mm; background: white; }
            .sidebar { width: 35%; background: #f8f9fa; padding: 40px 30px; }
            .main-content { width: 65%; padding: 40px; }
            .photo { width: 120px; height: 120px; border-radius: 60px; margin: 0 auto 30px; display: block; object-fit: cover; }
            .name { font-size: 28px; font-weight: bold; color: #1a1a1a; margin-bottom: 8px; }
            .title { font-size: 16px; color: var(--accent-color); margin-bottom: 30px; text-transform: uppercase; letter-spacing: 1px; }
            .section-title { font-size: 14px; font-weight: bold; color: #1a1a1a; margin: 30px 0 15px; text-transform: uppercase; letter-spacing: 1px; }
            .section-title-main { font-size: 14px; font-weight: bold; color: #1a1a1a; margin: 20px 0 15px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid var(--accent-color); padding-bottom: 8px; }
            .contact-line { display: flex; align-items: center; margin-bottom: 12px; }
            .contact-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0; }
            .contact-icon i { color: var(--accent-color); font-size: 16px; }
            .contact-text { font-size: 11px; color: #4a4a4a; line-height: 1.4; }
            .skill-badge { display: inline-block; background: #e9ecef; padding: 6px 12px; border-radius: 4px; margin: 0 8px 8px 0; font-size: 11px; color: #495057; }
            .experience-item { margin-bottom: 25px; }
            .exp-title { font-size: 13px; font-weight: bold; color: #1a1a1a; margin-bottom: 4px; }
            .exp-company { font-size: 12px; font-weight: bold; color: #495057; margin-bottom: 4px; }
            .exp-date { font-size: 10px; color: #868e96; margin-bottom: 8px; }
            .exp-desc { font-size: 11px; color: #4a4a4a; line-height: 1.6; }
            .lang-item { margin-bottom: 8px; }
            .lang-name { font-size: 11px; font-weight: bold; color: #1a1a1a; }
            .lang-level { font-size: 10px; color: #666; }
        </style>
        <div class="classic-template">
            <div class="sidebar">
                ${data.personal.photo ? `<img src="${data.personal.photo}" class="photo" alt="Profile" />` : ''}
                
                <div class="section-title">${t.contact}</div>
                ${data.personal.phone ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-phone"></i></div><span class="contact-text">${data.personal.phone}</span></div>` : ''}
                ${data.personal.email ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-envelope"></i></div><span class="contact-text">${data.personal.email}</span></div>` : ''}
                ${data.personal.address ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div><span class="contact-text">${data.personal.address}</span></div>` : ''}
                ${data.personal.birthDate ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-cake-candles"></i></div><span class="contact-text">${data.personal.birthDate}</span></div>` : ''}
                ${data.personal.nationality ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-flag"></i></div><span class="contact-text">${data.personal.nationality}</span></div>` : ''}
                ${data.personal.drivingLicense ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-id-card"></i></div><span class="contact-text">${data.personal.drivingLicense}</span></div>` : ''}
                ${data.personal.linkedin ? `<div class="contact-line"><div class="contact-icon"><i class="fa-brands fa-linkedin"></i></div><span class="contact-text">${data.personal.linkedin}</span></div>` : ''}
                ${data.personal.website ? `<div class="contact-line"><div class="contact-icon"><i class="fa-solid fa-globe"></i></div><span class="contact-text">${data.personal.website}</span></div>` : ''}
                ${data.personal.twitter ? `<div class="contact-line"><div class="contact-icon"><i class="fa-brands fa-x-twitter"></i></div><span class="contact-text">${data.personal.twitter}</span></div>` : ''}
                
                ${data.skills.length > 0 ? `<div class="section-title">${t.skills}</div><div>${data.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}</div>` : ''}
                ${data.languages.length > 0 ? `<div class="section-title">${t.languages}</div>${data.languages.map(lang => `<div class="lang-item"><div class="lang-name">${lang.language}</div><div class="lang-level">${lang.proficiency}</div></div>`).join('')}` : ''}
                ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-title">${t.hobbies || 'Hobbies'}</div><div>${data.hobbies.map(hobby => `<span class="skill-badge">${hobby}</span>`).join('')}</div>` : ''}
            </div>
            
            <div class="main-content">
                <div class="name">${data.personal.fullName}</div>
                <div class="title">${data.personal.title}</div>
                
                ${data.summary ? `<div class="section-title-main">${t.summary}</div><div class="exp-desc">${data.summary}</div>` : ''}
                ${data.experience.length > 0 ? `<div class="section-title-main">${t.experience}</div>${data.experience.map(exp => `<div class="experience-item"><div class="exp-title">${exp.position}</div><div class="exp-company">${exp.company} | ${exp.location}</div><div class="exp-date">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div><div class="exp-desc">${exp.description}</div></div>`).join('')}` : ''}
                ${data.education.length > 0 ? `<div class="section-title-main">${t.education}</div>${data.education.map(edu => `<div class="experience-item"><div class="exp-title">${edu.degree}</div><div class="exp-company">${edu.school} | ${edu.location}</div>${!edu.hideDates ? `<div class="exp-date">${edu.startDate} - ${edu.endDate}</div>` : ''}${edu.description ? `<div class="exp-desc">${edu.description}</div>` : ''}${edu.extraInfo ? `<div class="exp-desc">${edu.extraInfo}</div>` : ''}</div>`).join('')}` : ''}
                ${data.certifications.length > 0 ? `<div class="section-title-main">${t.certifications}</div>${data.certifications.map(cert => `<div class="experience-item"><div class="exp-title">${cert.name}</div><div class="exp-company">${cert.issuer}</div><div class="exp-date">${cert.date}</div></div>`).join('')}` : ''}
            </div>
        </div>
        </body>
        </html>
    `;
}
