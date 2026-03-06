'use client';

import { useCVContext } from '@/lib/context/CVContext';
import { getTopRecommendations } from '@/lib/utils/templateRecommendation';
import { Sparkles } from 'lucide-react';

export default function TemplateRecommendations() {
    const { cvData, updateTemplate } = useCVContext();
    const recommendations = getTopRecommendations(cvData, 3);

    const templateNames: Record<string, string> = {
        'classic': 'Classic',
        'modern': 'Modern',
        'minimal': 'Minimal',
        'creative': 'Creative',
        'executive': 'Executive',
        'professional': 'Professional',
        'bold': 'Bold',
        'timeline': 'Timeline',
        'two-column': 'Two Column',
        'minimalist-pro': 'Minimalist Pro',
    };

    return (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Recommended for You</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
                Based on your experience, skills, and role, we recommend these templates:
            </p>

            <div className="space-y-3">
                {recommendations.map((rec, index) => (
                    <div 
                        key={rec.templateId}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-all"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-semibold text-gray-900">
                                        {index + 1}. {templateNames[rec.templateId]}
                                    </span>
                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                                        {rec.score} points
                                    </span>
                                </div>
                                <ul className="mt-2 space-y-1">
                                    {rec.reasons.slice(0, 2).map((reason, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => updateTemplate(rec.templateId)}
                                className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                Use
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
