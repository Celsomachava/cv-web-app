'use client';

import React, { useState } from 'react';
import { CVData, TemplateId } from '@/lib/types';
import { ZoomIn, ZoomOut, Download, Eye } from 'lucide-react';

interface Props {
    data: CVData;
    templateId: TemplateId;
    onTemplateChange?: (templateId: TemplateId) => void;
}

const templateOptions: { id: TemplateId; name: string; category: string }[] = [
    { id: 'classic', name: 'Classic', category: 'Traditional' },
    { id: 'executive', name: 'Executive', category: 'Traditional' },
    { id: 'two-column', name: 'Two Column', category: 'Traditional' },
    { id: 'modern', name: 'Modern', category: 'Modern' },
    { id: 'timeline', name: 'Timeline', category: 'Modern' },
    { id: 'creative', name: 'Creative', category: 'Creative' },
    { id: 'minimal', name: 'Minimal', category: 'Minimalist' },
    { id: 'minimalist-pro', name: 'Minimalist Pro', category: 'Minimalist' },
];

export default function ResumePreview({ data, templateId, onTemplateChange }: Props) {
    const [zoom, setZoom] = useState(100);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(templateId);

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 10, 150));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 10, 50));
    };

    const handleTemplateChange = (newTemplateId: TemplateId) => {
        setSelectedTemplate(newTemplateId);
        if (onTemplateChange) {
            onTemplateChange(newTemplateId);
        }
    };

    // Group templates by category
    const groupedTemplates = templateOptions.reduce((acc, template) => {
        if (!acc[template.category]) {
            acc[template.category] = [];
        }
        acc[template.category].push(template);
        return acc;
    }, {} as Record<string, typeof templateOptions>);

    return (
        <div className="flex flex-col h-full">
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Template Selector */}
                    <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-gray-600" />
                        <select
                            value={selectedTemplate}
                            onChange={(e) => handleTemplateChange(e.target.value as TemplateId)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d54b0] bg-white"
                        >
                            {Object.entries(groupedTemplates).map(([category, templates]) => (
                                <optgroup key={category} label={category}>
                                    {templates.map(template => (
                                        <option key={template.id} value={template.id}>
                                            {template.name}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>

                    {/* Theme Color Picker */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-700">Theme:</label>
                        <input
                            type="color"
                            value={data.themeColor || '#6d54b0'}
                            className="w-10 h-10 rounded cursor-pointer border border-gray-300"
                            title="Choose theme color"
                        />
                    </div>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleZoomOut}
                        disabled={zoom <= 50}
                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Zoom Out"
                    >
                        <ZoomOut className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium min-w-[60px] text-center">
                        {zoom}%
                    </span>
                    <button
                        onClick={handleZoomIn}
                        disabled={zoom >= 150}
                        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Zoom In"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 overflow-auto p-8">
                <div
                    className="mx-auto bg-white shadow-2xl"
                    style={{
                        width: `${210 * (zoom / 100)}mm`,
                        minHeight: `${297 * (zoom / 100)}mm`,
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: 'top center',
                    }}
                >
                    {/* Template Preview Content */}
                    <div className="w-full h-full flex items-center justify-center p-12 text-center">
                        <div>
                            <div className="text-6xl mb-4">📄</div>
                            <h3 className="text-2xl font-bold mb-2">
                                {templateOptions.find(t => t.id === selectedTemplate)?.name} Template
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Preview will render here
                            </p>
                            <div className="text-sm text-gray-500">
                                A4 Size: 210mm × 297mm
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Bar */}
            <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">
                        Template: <strong>{templateOptions.find(t => t.id === selectedTemplate)?.name}</strong>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">
                        Category: <strong>{templateOptions.find(t => t.id === selectedTemplate)?.category}</strong>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                        ATS-Friendly ✓
                    </span>
                </div>
            </div>
        </div>
    );
}
