'use client';

import React, { useState } from 'react';
import { CVData, TemplateId } from '@/lib/types';

interface TemplateInfo {
    id: TemplateId;
    name: string;
    category: 'Classic' | 'Modern' | 'Creative' | 'Minimalist';
    description: string;
    bestFor: string;
}

const templates: TemplateInfo[] = [
    {
        id: 'classic',
        name: 'Classic',
        category: 'Classic',
        description: 'Traditional sidebar layout with professional styling',
        bestFor: 'Banking, Finance, Corporate'
    },
    {
        id: 'executive',
        name: 'Executive',
        category: 'Classic',
        description: 'Conservative single-column design for senior roles',
        bestFor: 'C-Level, Senior Management'
    },
    {
        id: 'two-column',
        name: 'Two Column',
        category: 'Classic',
        description: 'Professional dark sidebar with modern touch',
        bestFor: 'Consulting, Legal, Traditional Industries'
    },
    {
        id: 'modern',
        name: 'Modern',
        category: 'Modern',
        description: 'Sidebar with photo and vibrant color accents',
        bestFor: 'Tech, Startups, Creative Agencies'
    },
    {
        id: 'timeline',
        name: 'Timeline',
        category: 'Modern',
        description: 'Visual timeline showcasing career progression',
        bestFor: 'Tech Professionals, Project Managers'
    },
    {
        id: 'creative',
        name: 'Creative',
        category: 'Creative',
        description: 'Bold design with creative elements',
        bestFor: 'Designers, Artists, Creative Roles'
    },
    {
        id: 'minimal',
        name: 'Minimal',
        category: 'Minimalist',
        description: 'Clean centered layout with maximum white space',
        bestFor: 'Academia, Research, Writing'
    },
    {
        id: 'minimalist-pro',
        name: 'Minimalist Pro',
        category: 'Minimalist',
        description: 'Ultra-elegant one-page design for senior professionals',
        bestFor: 'Executives, Consultants, Senior Roles'
    }
];

interface Props {
    data: CVData;
    onTemplateChange: (templateId: TemplateId) => void;
}

export default function TemplateShowcase({ data, onTemplateChange }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(data.templateId);

    const categories = ['All', 'Classic', 'Modern', 'Creative', 'Minimalist'];

    const filteredTemplates = selectedCategory === 'All'
        ? templates
        : templates.filter(t => t.category === selectedCategory);

    const handleTemplateSelect = (templateId: TemplateId) => {
        setSelectedTemplate(templateId);
        onTemplateChange(templateId);
    };

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Choose Your Template</h2>
                <div className="flex flex-wrap gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                    ? 'bg-[#6d54b0] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map(template => (
                    <div
                        key={template.id}
                        onClick={() => handleTemplateSelect(template.id)}
                        className={`cursor-pointer rounded-xl border-2 transition-all hover:shadow-xl ${selectedTemplate === template.id
                                ? 'border-[#6d54b0] shadow-lg scale-105'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        {/* Template Preview Placeholder */}
                        <div className="aspect-[210/297] bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                            {/* Template Icon/Preview */}
                            <div className="text-center p-6">
                                <div className="text-6xl mb-4">
                                    {template.category === 'Classic' && '📋'}
                                    {template.category === 'Modern' && '🎨'}
                                    {template.category === 'Creative' && '🚀'}
                                    {template.category === 'Minimalist' && '✨'}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {template.name}
                                </div>
                            </div>

                            {/* Selected Badge */}
                            {selectedTemplate === template.id && (
                                <div className="absolute top-3 right-3 bg-[#6d54b0] text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Selected
                                </div>
                            )}

                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                                {template.category}
                            </div>
                        </div>

                        {/* Template Info */}
                        <div className="p-4 bg-white rounded-b-xl">
                            <h3 className="font-bold text-lg mb-2">{template.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                            <div className="flex items-center text-xs text-gray-500">
                                <span className="font-semibold mr-1">Best for:</span>
                                <span>{template.bestFor}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Template Count */}
            <div className="mt-8 text-center text-sm text-gray-500">
                Showing {filteredTemplates.length} of {templates.length} templates
            </div>
        </div>
    );
}
