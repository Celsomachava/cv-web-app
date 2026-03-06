# CV Builder - Developer Guide

## 🏗️ Project Structure

```
cv-builder/
├── app/
│   ├── api/
│   │   └── generate-pdf/
│   │       └── route.ts          # Puppeteer PDF generation endpoint
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── builder/
│   │   ├── BuilderLayout.tsx     # Main builder container
│   │   └── LivePreview.tsx       # Real-time template preview
│   ├── html-templates/           # 10 HTML templates for PDF
│   │   ├── ClassicHTMLTemplate.tsx
│   │   ├── ModernHTMLTemplate.tsx
│   │   ├── MinimalHTMLTemplate.tsx
│   │   ├── CreativeHTMLTemplate.tsx
│   │   ├── ExecutiveHTMLTemplate.tsx
│   │   ├── CompactHTMLTemplate.tsx
│   │   ├── ModernHTMLTemplate2.tsx
│   │   ├── TimelineHTMLTemplate.tsx
│   │   ├── TwoColumnHTMLTemplate.tsx
│   │   └── MinimalistProHTMLTemplate.tsx
│   ├── pdf/                      # @react-pdf/renderer templates (alternative)
│   ├── steps/                    # Wizard steps
│   │   ├── TemplateSelector.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Preview.tsx
│   │   └── Payment.tsx
│   └── wizard/
│       └── StepWizard.tsx        # Multi-step form controller
├── lib/
│   ├── context/
│   │   ├── CVContext.tsx         # Global CV data state
│   │   └── LanguageContext.tsx   # i18n support
│   ├── data/
│   │   └── mockData.json         # Sample CV data
│   ├── utils/
│   │   ├── generatePDF.tsx       # @react-pdf/renderer method
│   │   └── generatePDFPuppeteer.ts # Puppeteer method
│   ├── translations.ts           # Multi-language support
│   └── types.ts                  # TypeScript interfaces
└── public/
    └── templates/                # Template preview images
```

---

## 🎯 Core Concepts

### 1. Template System

**Two-Layer Architecture**:
- **HTML Templates** (`/components/html-templates/`): Used for PDF generation via Puppeteer
- **React PDF Templates** (`/components/pdf/`): Alternative using @react-pdf/renderer

**Why Two Systems?**
- HTML templates: Pixel-perfect, matches preview exactly, full CSS support
- React PDF: Native PDF generation, smaller files, no browser needed

### 2. Data Flow

```
User Input → CVContext → LivePreview → HTML Template → Puppeteer → PDF
```

1. User fills form in wizard steps
2. Data stored in CVContext (React Context API)
3. LivePreview dynamically loads correct template
4. Template renders with user data
5. Puppeteer converts HTML to PDF
6. User downloads PDF

### 3. Template Selection

```typescript
// types.ts
export type TemplateId = 
  | 'classic' 
  | 'modern' 
  | 'minimal' 
  | 'creative' 
  | 'executive' 
  | 'professional' 
  | 'bold' 
  | 'timeline' 
  | 'two-column' 
  | 'minimalist-pro';

// CVContext
const [cvData, setCVData] = useState<CVData>({
  templateId: 'modern',
  themeColor: '#6d54b0',
  // ... other data
});
```

---

## 🔧 Key Components

### LivePreview Component

**Purpose**: Real-time preview of selected template

**How it works**:
```typescript
// Dynamically imports template based on templateId
switch (cvData.templateId) {
  case 'classic':
    TemplateComponent = (await import('@/components/html-templates/ClassicHTMLTemplate')).default;
    break;
  // ... other cases
}

const html = TemplateComponent({ data: cvData, t });
setPdfPreview(html);
```

**Key Features**:
- Dynamic template loading
- Real-time updates
- Scaled preview (70% zoom)
- Accent color injection

### TemplateSelector Component

**Purpose**: Visual template picker

**Structure**:
```typescript
const templates = [
  { 
    id: 'classic', 
    name: 'Classic', 
    image: '/templates/template1.png',
    description: 'Traditional sidebar layout'
  },
  // ... 9 more templates
];
```

**Features**:
- Grid layout (3 columns on desktop)
- Preview images
- Active state indication
- Click to select

### PDF Generation API

**Endpoint**: `/api/generate-pdf/route.ts`

**Process**:
```typescript
1. Receive HTML + accent color
2. Launch Puppeteer browser
3. Set page content
4. Wait for fonts/styles to load
5. Generate PDF (A4, with background)
6. Return PDF blob
```

**Configuration**:
```typescript
const pdf = await page.pdf({
  format: 'A4',           // 210mm × 297mm
  printBackground: true,  // Include colors/backgrounds
  margin: { 
    top: 0, 
    right: 0, 
    bottom: 0, 
    left: 0 
  }
});
```

---

## 🎨 Creating a New Template

### Step-by-Step Guide

#### 1. Create Template File

```typescript
// components/html-templates/MyNewHTMLTemplate.tsx
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function MyNewHTMLTemplate({ data, t }: Props) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                :root {
                    --accent-color: ${data.themeColor || '#6d54b0'};
                }
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Inter', -apple-system, sans-serif;
                    background: white;
                }
                .my-template {
                    width: 210mm;
                    min-height: 297mm;
                    padding: 20mm;
                    margin: 0 auto;
                }
                /* Your custom styles */
            </style>
        </head>
        <body>
            <div class="my-template">
                <h1>${data.personal.fullName}</h1>
                <h2>${data.personal.title}</h2>
                <!-- Your template structure -->
            </div>
        </body>
        </html>
    `;
}
```

#### 2. Update Type Definitions

```typescript
// lib/types.ts
export type TemplateId = 
  | 'classic' 
  | 'modern' 
  // ... existing
  | 'my-new-template'; // Add your template
```

#### 3. Add to LivePreview

```typescript
// components/builder/LivePreview.tsx
switch (cvData.templateId) {
  // ... existing cases
  case 'my-new-template':
    TemplateComponent = (await import('@/components/html-templates/MyNewHTMLTemplate')).default;
    break;
}
```

#### 4. Add to TemplateSelector

```typescript
// components/steps/TemplateSelector.tsx
const templates = [
  // ... existing templates
  { 
    id: 'my-new-template' as const, 
    name: 'My New Template', 
    image: '/templates/my-template.png',
    description: 'Description of your template'
  },
];
```

#### 5. Create Preview Image

- Create a preview image (recommended: 420×594px for A4 ratio)
- Save to `/public/templates/my-template.png`

---

## 📐 Template Design Guidelines

### ATS-Friendly Requirements

✅ **DO**:
- Use semantic HTML (div, section, h1-h6, p, ul, li)
- Use flexbox or CSS grid for layout
- Keep text as actual text (not images)
- Use standard fonts (Google Fonts, system fonts)
- Maintain logical reading order
- Use consistent spacing
- Ensure high contrast (4.5:1 minimum)

❌ **DON'T**:
- Use HTML tables for layout
- Embed text in images
- Use complex positioning (absolute/fixed)
- Use headers/footers with critical info
- Use unusual fonts or symbols
- Create multi-column tables
- Use text boxes or form elements

### A4 Page Specifications

```css
.template {
  width: 210mm;      /* A4 width */
  min-height: 297mm; /* A4 height */
  padding: 15-25mm;  /* Safe margins */
  margin: 0 auto;
  background: white;
}
```

### Color Usage

```css
:root {
  --accent-color: ${data.themeColor || '#6d54b0'};
  --text-color: #2d3748;
  --heading-color: #1a202c;
  --bg-color: white;
}

/* Use accent color sparingly */
.section-title {
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
}
```

### Typography Scale

```css
/* Recommended font sizes */
.name { font-size: 32-38px; }
.title { font-size: 16-18px; }
.section-title { font-size: 14-16px; }
.body-text { font-size: 11-13px; }
.meta-text { font-size: 10-11px; }
```

### Spacing System

```css
/* Consistent spacing */
--space-xs: 8px;
--space-sm: 12px;
--space-md: 20px;
--space-lg: 30px;
--space-xl: 40px;
```

---

## 🔄 State Management

### CVContext

**Purpose**: Global state for CV data

**Usage**:
```typescript
import { useCVContext } from '@/lib/context/CVContext';

function MyComponent() {
  const { cvData, updatePersonal, updateTemplate } = useCVContext();
  
  // Update personal info
  updatePersonal({ firstName: 'John', lastName: 'Doe' });
  
  // Change template
  updateTemplate('timeline');
  
  // Access data
  console.log(cvData.personal.fullName);
}
```

**Available Methods**:
- `updatePersonal(data: Partial<PersonalInfo>)`
- `updateSummary(summary: string)`
- `updateExperience(experience: Experience[])`
- `updateEducation(education: Education[])`
- `updateSkills(skills: string[])`
- `updateLanguages(languages: Language[])`
- `updateCertifications(certifications: Certification[])`
- `updateTemplate(templateId: TemplateId)`
- `updateThemeColor(color: string)`

---

## 🌐 Internationalization

### Adding Translations

```typescript
// lib/translations.ts
export const translations = {
  en: {
    pdf: {
      summary: 'Professional Summary',
      experience: 'Work Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      certifications: 'Certifications',
      present: 'Present',
      contact: 'Contact',
    }
  },
  de: {
    pdf: {
      summary: 'Zusammenfassung',
      experience: 'Berufserfahrung',
      // ... German translations
    }
  }
};
```

### Using Translations in Templates

```typescript
export default function MyTemplate({ data, t }: Props) {
  return `
    <div class="section-title">${t.experience}</div>
    <div class="date">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div>
  `;
}
```

---

## 🧪 Testing Templates

### Manual Testing Checklist

- [ ] Preview renders correctly
- [ ] All sections display properly
- [ ] Data binding works (personal, experience, education, etc.)
- [ ] Theme color applies correctly
- [ ] PDF generation works
- [ ] PDF matches preview
- [ ] Fonts load correctly
- [ ] Icons display (Font Awesome)
- [ ] Page breaks are appropriate
- [ ] Text is selectable in PDF
- [ ] No layout overflow
- [ ] Responsive scaling works
- [ ] Print styles apply

### Test with Different Data

```typescript
// Test with minimal data
const minimalData = {
  personal: { fullName: 'John Doe', title: 'Developer' },
  experience: [],
  education: [],
  skills: [],
};

// Test with maximum data
const maximalData = {
  personal: { /* all fields */ },
  experience: [/* 5+ entries */],
  education: [/* 3+ entries */],
  skills: [/* 20+ skills */],
  languages: [/* 5+ languages */],
  certifications: [/* 5+ certs */],
};
```

---

## 🚀 Performance Optimization

### Template Loading

Templates are dynamically imported to reduce initial bundle size:

```typescript
// Lazy loading
const TemplateComponent = (await import('@/components/html-templates/ClassicHTMLTemplate')).default;
```

### PDF Generation

Puppeteer configuration for optimal performance:

```typescript
const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage', // Reduce memory usage
  ]
});
```

### Font Loading

Use Google Fonts with preconnect:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🐛 Common Issues & Solutions

### Issue: PDF doesn't match preview

**Solution**: Ensure `printBackground: true` in Puppeteer config and use `@media print` styles.

### Issue: Fonts not loading in PDF

**Solution**: Use `waitUntil: 'networkidle0'` when setting page content.

### Issue: Colors not showing in PDF

**Solution**: Add print color adjustment:
```css
@media print {
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
```

### Issue: Page breaks in wrong places

**Solution**: Use CSS page break properties:
```css
.section {
  page-break-inside: avoid;
}
```

### Issue: Template not updating in preview

**Solution**: Check that template is added to LivePreview switch statement and templateId matches.

---

## 📦 Dependencies

### Core Dependencies

```json
{
  "next": "16.0.5",
  "react": "19.2.0",
  "puppeteer": "^24.32.0",
  "@react-pdf/renderer": "^4.3.1",
  "tailwindcss": "^4"
}
```

### Why Puppeteer?

- Pixel-perfect HTML to PDF conversion
- Full CSS support (flexbox, grid, custom fonts)
- Matches web preview exactly
- Handles complex layouts
- Better than alternatives for this use case

### Why @react-pdf/renderer as Alternative?

- Native PDF generation (no browser needed)
- Smaller file sizes
- Faster for simple layouts
- Good for server environments without Chrome

---

## 🔐 Security Considerations

### Input Sanitization

Always sanitize user input before rendering:

```typescript
// Escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
```

### Puppeteer Security

```typescript
// Use sandbox mode in production
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox'] // Only for development
});
```

---

## 📈 Future Enhancements

### Potential Features

1. **Custom Template Builder**: Visual editor for creating templates
2. **Template Marketplace**: Share/download community templates
3. **AI Suggestions**: Content recommendations based on role
4. **Version Control**: Save multiple CV versions
5. **Collaboration**: Share and get feedback
6. **Analytics**: Track which templates perform best
7. **A/B Testing**: Test different templates
8. **Export Formats**: Word, HTML, JSON

### Template Ideas

- **Infographic Template**: Visual data representation
- **Portfolio Template**: For designers/developers
- **Academic Template**: For researchers/professors
- **International Template**: Multi-language support
- **Video Resume Template**: QR code to video intro

---

## 🤝 Contributing

### Adding a Template

1. Fork the repository
2. Create template file following conventions
3. Update all necessary files (types, LivePreview, TemplateSelector)
4. Test thoroughly
5. Create preview image
6. Submit pull request with:
   - Template file
   - Preview image
   - Documentation updates
   - Test results

### Code Style

- Use TypeScript
- Follow existing naming conventions
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable names

---

## 📚 Resources

### Design Inspiration

- [Reactive Resume](https://rxresu.me/)
- [CV Genius](https://cvgenius.com/)
- [Canva Resume Templates](https://www.canva.com/resumes/)
- [Novoresume](https://novoresume.com/)

### Technical References

- [Puppeteer Documentation](https://pptr.dev/)
- [@react-pdf/renderer Docs](https://react-pdf.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

### ATS Guidelines

- [Jobscan ATS Guide](https://www.jobscan.co/applicant-tracking-systems)
- [Resume Worded ATS Tips](https://resumeworded.com/ats-resume)

---

## 📞 Support

For technical questions or issues:
1. Check this documentation
2. Review existing templates
3. Test with mockData.json
4. Check browser console for errors
5. Verify Puppeteer installation

---

**Version**: 1.0  
**Last Updated**: December 2024  
**Maintainer**: CV Builder Team
