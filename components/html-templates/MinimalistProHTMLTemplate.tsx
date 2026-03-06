// Minimalist Pro Template - Ultra-clean one-page design (ATS-friendly)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function MinimalistProHTMLTemplate({ data, t }: Props) {
    return `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            .minimalist-pro-template { 
                font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif; 
                width: 210mm; 
                min-height: 297mm; 
                padding: 25mm 30mm;
                margin: 0 auto;
                background: white;
                color: #1a1a1a;
            }
            .header {
                text-align: center;
                margin-bottom: 50px;
                padding-bottom: 30px;
                border-bottom: 1px solid #e0e0e0;
            }
            .name {
                font-family: 'Playfair Display', serif;
                font-size: 42px;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 12px;
                letter-spacing: -1px;
            }
            .title {
                font-size: 14px;
                color: #666;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 25px;
            }
            .contact-bar {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 25px;
                font-size: 11px;
                color: #666;
            }
            .contact-separator { color: #ccc; }
            .summary-section {
                max-width: 650px;
                margin: 0 auto 45px;
                text-align: center;
            }
            .summary-text {
                font-size: 13px;
                line-height: 1.9;
                color: #444;
            }
            .section { margin-bottom: 40px; }
            .section-title {
                font-family: 'Playfair Display', serif;
                font-size: 18px;
                font-weight: 700;
                color: #1a1a1a;
                text-align: center;
                margin-bottom: 30px;
                letter-spacing: 1px;
            }
            .item {
                margin-bottom: 28px;
                padding-bottom: 28px;
                border-bottom: 1px solid #f0f0f0;
            }
            .item:last-child { border-bottom: none; }
            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin-bottom: 8px;
            }
            .item-title {
                font-size: 14px;
                font-weight: 600;
                color: #1a1a1a;
            }
            .item-date {
                font-size: 11px;
                color: #999;
                font-weight: 600;
            }
            .item-subtitle {
                font-size: 13px;
                color: #666;
                margin-bottom: 10px;
            }
            .item-description {
                font-size: 12px;
                line-height: 1.8;
                color: #555;
            }
            .skills-container { max-width: 700px; margin: 0 auto; }
            .skills-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 15px;
            }
            .skill-item {
                font-size: 12px;
                color: #444;
                padding: 8px 0;
                position: relative;
            }
            .skill-item::after {
                content: '•';
                position: absolute;
                right: -10px;
                color: #ccc;
            }
            .skill-item:last-child::after { content: ''; }
            .two-col-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 50px;
                max-width: 700px;
                margin: 0 auto;
            }
            .subsection-title {
                font-size: 13px;
                font-weight: 600;
                color: #1a1a1a;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin-bottom: 18px;
                text-align: center;
            }
            .language-item {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #f5f5f5;
            }
            .language-name {
                font-size: 12px;
                font-weight: 600;
                color: #333;
            }
            .language-level {
                font-size: 11px;
                color: #999;
            }
            .cert-item {
                margin-bottom: 18px;
                text-align: center;
            }
            .cert-name {
                font-size: 12px;
                font-weight: 600;
                color: #333;
                margin-bottom: 4px;
            }
            .cert-details {
                font-size: 10px;
                color: #999;
            }
        </style>
        <div class="minimalist-pro-template">
            <div class="header">
                <div class="name">${data.personal.fullName || ''}</div>
                <div class="title">${data.personal.title || ''}</div>
                <div class="contact-bar">
                    ${data.personal.email ? `<span>${data.personal.email}</span>` : ''}
                    ${data.personal.email && data.personal.phone ? '<span class="contact-separator">|</span>' : ''}
                    ${data.personal.phone ? `<span>${data.personal.phone}</span>` : ''}
                    ${(data.personal.email || data.personal.phone) && data.personal.address ? '<span class="contact-separator">|</span>' : ''}
                    ${data.personal.address ? `<span>${data.personal.address}</span>` : ''}
                    ${data.personal.linkedin ? `<span class="contact-separator">|</span><span>${data.personal.linkedin}</span>` : ''}
                </div>
            </div>
            
            ${data.summary ? `
            <div class="summary-section">
                <div class="summary-text">${data.summary}</div>
            </div>
            ` : ''}
            
            ${data.experience && data.experience.length > 0 ? `
            <div class="section">
                <div class="section-title">${t.experience || 'Experience'}</div>
                ${data.experience.map(exp => `
                    <div class="item">
                        <div class="item-header">
                            <div class="item-title">${exp.position || ''}</div>
                            <div class="item-date">${exp.startDate || ''} – ${exp.current ? (t.present || 'Present') : (exp.endDate || '')}</div>
                        </div>
                        <div class="item-subtitle">${exp.company || ''}${exp.location ? ` • ${exp.location}` : ''}</div>
                        ${exp.description ? `<div class="item-description">${exp.description}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}
            
            ${data.education && data.education.length > 0 ? `
            <div class="section">
                <div class="section-title">${t.education || 'Education'}</div>
                ${data.education.map(edu => `
                    <div class="item">
                        <div class="item-header">
                            <div class="item-title">${edu.degree || ''}</div>
                            ${!edu.hideDates ? `<div class="item-date">${edu.startDate || ''} – ${edu.endDate || ''}</div>` : ''}
                        </div>
                        <div class="item-subtitle">${edu.school || ''}${edu.location ? ` • ${edu.location}` : ''}</div>
                        ${edu.description ? `<div class="item-description">${edu.description}</div>` : ''}
                        ${edu.extraInfo ? `<div class="item-description">${edu.extraInfo}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}
            
            ${data.skills && data.skills.length > 0 ? `
            <div class="section">
                <div class="section-title">${t.skills || 'Skills'}</div>
                <div class="skills-container">
                    <div class="skills-list">
                        ${data.skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
            ` : ''}
            
            ${(data.languages && data.languages.length > 0) || (data.certifications && data.certifications.length > 0) ? `
            <div class="section">
                <div class="two-col-section">
                    ${data.languages && data.languages.length > 0 ? `
                    <div>
                        <div class="subsection-title">${t.languages || 'Languages'}</div>
                        ${data.languages.map(lang => `
                            <div class="language-item">
                                <span class="language-name">${lang.language}</span>
                                <span class="language-level">${lang.proficiency}</span>
                            </div>
                        `).join('')}
                    </div>
                    ` : '<div></div>'}
                    
                    ${data.certifications && data.certifications.length > 0 ? `
                    <div>
                        <div class="subsection-title">${t.certifications || 'Certifications'}</div>
                        ${data.certifications.map(cert => `
                            <div class="cert-item">
                                <div class="cert-name">${cert.name}</div>
                                <div class="cert-details">${cert.issuer} • ${cert.date}</div>
                            </div>
                        `).join('')}
                    </div>
                    ` : '<div></div>'}
                </div>
            </div>
            ` : ''}
        </div>
    `;
}
