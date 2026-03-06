'use client';

import { useCVContext } from '@/lib/context/CVContext';

export default function AdvancedCustomization() {
    const { cvData, updateThemeColor } = useCVContext();

    const presetColors = [
        { name: 'Lilac', value: '#6d54b0' },
        { name: 'Blue', value: '#2563eb' },
        { name: 'Teal', value: '#0d9488' },
        { name: 'Green', value: '#059669' },
        { name: 'Orange', value: '#ea580c' },
        { name: 'Red', value: '#dc2626' },
        { name: 'Purple', value: '#7c3aed' },
        { name: 'Navy', value: '#1e3a8a' },
    ];

    return (
        <div className="space-y-6 p-6 bg-white rounded-lg border">
            <h3 className="text-lg font-semibold">Advanced Customization</h3>

            <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Theme Color</label>
                <div className="grid grid-cols-4 gap-2">
                    {presetColors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => updateThemeColor(color.value)}
                            className={`p-3 rounded-lg border-2 transition-all ${
                                cvData.themeColor === color.value
                                    ? 'border-gray-900 ring-2 ring-gray-900'
                                    : 'border-gray-200 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
                <input
                    type="color"
                    value={cvData.themeColor}
                    onChange={(e) => updateThemeColor(e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                />
            </div>
        </div>
    );
}
