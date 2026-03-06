import { CVData } from '../types';

export async function exportToJSON(cvData: CVData): Promise<void> {
    const dataStr = JSON.stringify(cvData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cv-${cvData.personal.lastName || 'export'}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

export async function exportToHTML(cvData: CVData, templateId: string, t: any): Promise<void> {
    let TemplateComponent;
    
    switch (templateId) {
        case 'classic':
            TemplateComponent = (await import('@/components/html-templates/ClassicHTMLTemplate')).default;
            break;
        case 'modern':
            TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate')).default;
            break;
        case 'minimal':
            TemplateComponent = (await import('@/components/html-templates/MinimalHTMLTemplate')).default;
            break;
        case 'creative':
            TemplateComponent = (await import('@/components/html-templates/CreativeHTMLTemplate')).default;
            break;
        case 'executive':
            TemplateComponent = (await import('@/components/html-templates/ExecutiveHTMLTemplate')).default;
            break;
        case 'professional':
            TemplateComponent = (await import('@/components/html-templates/CompactHTMLTemplate')).default;
            break;
        case 'bold':
            TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate2')).default;
            break;
        case 'timeline':
            TemplateComponent = (await import('@/components/html-templates/TimelineHTMLTemplate')).default;
            break;
        case 'two-column':
            TemplateComponent = (await import('@/components/html-templates/TwoColumnHTMLTemplate')).default;
            break;
        case 'minimalist-pro':
            TemplateComponent = (await import('@/components/html-templates/MinimalistProHTMLTemplate')).default;
            break;
        default:
            TemplateComponent = (await import('@/components/html-templates/ModernHTMLTemplate')).default;
    }
    
    const html = TemplateComponent({ data: cvData, t });
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cv-${cvData.personal.lastName || 'export'}.html`;
    link.click();
    URL.revokeObjectURL(url);
}

export async function exportToMarkdown(cvData: CVData): Promise<void> {
    let markdown = `# ${cvData.personal.fullName}\n\n`;
    markdown += `**${cvData.personal.title}**\n\n`;
    
    if (cvData.personal.email || cvData.personal.phone) {
        markdown += `## Contact\n\n`;
        if (cvData.personal.email) markdown += `- Email: ${cvData.personal.email}\n`;
        if (cvData.personal.phone) markdown += `- Phone: ${cvData.personal.phone}\n`;
        if (cvData.personal.address) markdown += `- Address: ${cvData.personal.address}\n`;
        markdown += `\n`;
    }
    
    if (cvData.summary) {
        markdown += `## Summary\n\n${cvData.summary}\n\n`;
    }
    
    if (cvData.experience.length > 0) {
        markdown += `## Experience\n\n`;
        cvData.experience.forEach(exp => {
            markdown += `### ${exp.position}\n`;
            markdown += `**${exp.company}** | ${exp.location}\n`;
            markdown += `*${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}*\n\n`;
            markdown += `${exp.description}\n\n`;
        });
    }
    
    if (cvData.education.length > 0) {
        markdown += `## Education\n\n`;
        cvData.education.forEach(edu => {
            markdown += `### ${edu.degree}\n`;
            markdown += `**${edu.school}** | ${edu.location}\n`;
            if (!edu.hideDates) markdown += `*${edu.startDate} - ${edu.endDate}*\n`;
            if (edu.description) markdown += `\n${edu.description}\n`;
            markdown += `\n`;
        });
    }
    
    if (cvData.skills.length > 0) {
        markdown += `## Skills\n\n`;
        markdown += cvData.skills.join(' • ') + '\n\n';
    }
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cv-${cvData.personal.lastName || 'export'}.md`;
    link.click();
    URL.revokeObjectURL(url);
}
