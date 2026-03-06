import { CVData, TemplateId } from '../types';

interface RecommendationScore {
    templateId: TemplateId;
    score: number;
    reasons: string[];
}

export function getTemplateRecommendations(cvData: CVData): RecommendationScore[] {
    const scores: RecommendationScore[] = [
        { templateId: 'classic', score: 0, reasons: [] },
        { templateId: 'modern', score: 0, reasons: [] },
        { templateId: 'minimal', score: 0, reasons: [] },
        { templateId: 'creative', score: 0, reasons: [] },
        { templateId: 'executive', score: 0, reasons: [] },
        { templateId: 'professional', score: 0, reasons: [] },
        { templateId: 'bold', score: 0, reasons: [] },
        { templateId: 'timeline', score: 0, reasons: [] },
        { templateId: 'two-column', score: 0, reasons: [] },
        { templateId: 'minimalist-pro', score: 0, reasons: [] },
    ];

    const totalExperience = cvData.experience.length;
    const totalEducation = cvData.education.length;
    const totalSkills = cvData.skills.length;
    const hasCertifications = cvData.certifications.length > 0;
    const hasLanguages = cvData.languages.length > 0;

    // Experience-based scoring
    if (totalExperience >= 5) {
        addScore(scores, 'executive', 3, 'Extensive experience');
        addScore(scores, 'timeline', 4, 'Great for showing career progression');
        addScore(scores, 'two-column', 3, 'Handles multiple experiences well');
    } else if (totalExperience >= 3) {
        addScore(scores, 'classic', 3, 'Good for mid-level experience');
        addScore(scores, 'modern', 3, 'Balanced for mid-career');
        addScore(scores, 'professional', 4, 'Efficient for multiple roles');
    } else {
        addScore(scores, 'modern', 3, 'Fresh for entry-level');
        addScore(scores, 'minimal', 3, 'Clean for limited experience');
        addScore(scores, 'minimalist-pro', 2, 'Elegant for focused content');
    }

    // Skills-based scoring
    if (totalSkills > 15) {
        addScore(scores, 'two-column', 3, 'Handles many skills well');
        addScore(scores, 'professional', 3, 'Space-efficient for skills');
    }

    // Education-based scoring
    if (totalEducation >= 3) {
        addScore(scores, 'minimal', 2, 'Good for academic backgrounds');
        addScore(scores, 'executive', 2, 'Formal for advanced degrees');
    }

    // Certifications and languages
    if (hasCertifications && hasLanguages) {
        addScore(scores, 'two-column', 2, 'Comprehensive sections');
        addScore(scores, 'classic', 2, 'Organized layout');
    }

    // Title-based recommendations
    const title = cvData.personal.title.toLowerCase();
    if (title.includes('designer') || title.includes('creative')) {
        addScore(scores, 'creative', 5, 'Perfect for creative roles');
        addScore(scores, 'bold', 4, 'Eye-catching for design');
    } else if (title.includes('developer') || title.includes('engineer')) {
        addScore(scores, 'modern', 4, 'Tech-friendly design');
        addScore(scores, 'timeline', 3, 'Shows technical progression');
    } else if (title.includes('manager') || title.includes('director')) {
        addScore(scores, 'executive', 4, 'Professional for leadership');
        addScore(scores, 'minimalist-pro', 3, 'Sophisticated for management');
    } else if (title.includes('marketing') || title.includes('sales')) {
        addScore(scores, 'bold', 4, 'Attention-grabbing');
        addScore(scores, 'creative', 3, 'Dynamic for marketing');
    }

    // Content density
    const totalContent = totalExperience + totalEducation + totalSkills + cvData.certifications.length;
    if (totalContent > 30) {
        addScore(scores, 'professional', 3, 'Handles dense content');
        addScore(scores, 'two-column', 3, 'Space-efficient');
    } else if (totalContent < 15) {
        addScore(scores, 'minimal', 3, 'Perfect for concise content');
        addScore(scores, 'minimalist-pro', 3, 'Elegant simplicity');
    }

    return scores.sort((a, b) => b.score - a.score);
}

function addScore(scores: RecommendationScore[], templateId: TemplateId, points: number, reason: string) {
    const template = scores.find(s => s.templateId === templateId);
    if (template) {
        template.score += points;
        template.reasons.push(reason);
    }
}

export function getTopRecommendations(cvData: CVData, count: number = 3): RecommendationScore[] {
    return getTemplateRecommendations(cvData).slice(0, count);
}
