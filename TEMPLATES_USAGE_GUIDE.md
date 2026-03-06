# CV Builder - Templates Usage Guide

## 🎨 Complete Template Collection

This CV builder includes **10 professional, ATS-friendly templates** designed for various industries and career levels. All templates are optimized for both web preview and PDF export using Puppeteer.

---

## 📋 Template Overview

### 1. **Classic Template** 
- **ID**: `classic`
- **Category**: Traditional
- **Layout**: Left sidebar (35%) + Main content (65%)
- **Best For**: Banking, Finance, Corporate, Legal
- **Features**:
  - Professional sidebar with contact info
  - Clean typography
  - Photo support
  - Skill badges
  - ATS-optimized structure

**When to use**: Conservative industries, traditional corporate roles, when you need a proven professional look.

---

### 2. **Modern Template**
- **ID**: `modern`
- **Category**: Modern
- **Layout**: Sidebar with vibrant accents
- **Best For**: Tech, Startups, Creative Agencies
- **Features**:
  - Colorful accent elements
  - Profile photo support
  - Modern typography
  - Flexible sections
  - Icon integration

**When to use**: Tech companies, startups, digital agencies, when you want to show personality while staying professional.

---

### 3. **Minimal Template**
- **ID**: `minimal`
- **Category**: Minimalist
- **Layout**: Centered single-column
- **Best For**: Academia, Research, Writing, Consulting
- **Features**:
  - Maximum white space
  - Typography-focused
  - Ultra-clean design
  - Easy to scan
  - Perfect for one-page resumes

**When to use**: Academic positions, research roles, when content should speak for itself, senior consultants.

---

### 4. **Creative Template**
- **ID**: `creative`
- **Category**: Creative
- **Layout**: Bold colored sidebar (38%) + Main (62%)
- **Best For**: Design, Marketing, Advertising, Media
- **Features**:
  - Bold color usage (customizable)
  - Creative section layouts
  - Visual interest
  - Still ATS-compatible
  - Rounded skill badges

**When to use**: Creative industries, marketing roles, when you want to stand out, portfolio-based careers.

---

### 5. **Executive Template**
- **ID**: `executive`
- **Category**: Traditional
- **Layout**: Centered with serif typography
- **Best For**: C-Level, Senior Management, Executives
- **Features**:
  - Elegant serif fonts (Georgia)
  - Formal and conservative
  - Emphasis on achievements
  - Minimal color usage
  - Professional spacing

**When to use**: Executive positions, C-level roles, board positions, senior leadership.

---

### 6. **Professional/Compact Template**
- **ID**: `professional`
- **Category**: Modern
- **Layout**: Compact efficient layout
- **Best For**: Mid-level professionals, Project Managers
- **Features**:
  - Space-efficient design
  - Professional appearance
  - Comprehensive sections
  - Easy to read
  - Ideal for 1-2 pages

**When to use**: When you have lots of content, mid-career professionals, project management roles.

---

### 7. **Bold Template**
- **ID**: `bold`
- **Category**: Creative
- **Layout**: Two-column with color blocks
- **Best For**: Marketing, Sales, Creative Tech
- **Features**:
  - Strong visual hierarchy
  - Color block sections
  - Modern and eye-catching
  - Professional yet creative
  - Great for presentations

**When to use**: Marketing roles, sales positions, when you need to make a strong first impression.

---

### 8. **Timeline Template** ⭐
- **ID**: `timeline`
- **Category**: Modern
- **Layout**: Vertical timeline with centered header
- **Best For**: Tech Professionals, Project Managers, Career Changers
- **Features**:
  - Visual timeline for experience
  - Color-coded timeline dots
  - Excellent for showing progression
  - Modern clean design
  - Story-telling layout

**When to use**: When you want to highlight career progression, tech roles, project management, career transitions.

---

### 9. **Two Column Template** ⭐
- **ID**: `two-column`
- **Category**: Traditional
- **Layout**: Dark gradient sidebar (30%) + Main (70%)
- **Best For**: Banking, Consulting, Legal, Professional Services
- **Features**:
  - Professional dark sidebar
  - Comprehensive contact section
  - Traditional yet modern
  - Excellent information density
  - Perfect for detailed resumes

**When to use**: Professional services, consulting, when you need to include lots of information professionally.

---

### 10. **Minimalist Pro Template** ⭐
- **ID**: `minimalist-pro`
- **Category**: Minimalist
- **Layout**: Ultra-clean centered design
- **Best For**: Senior Professionals, Consultants, Executives
- **Features**:
  - Serif headings (Playfair Display)
  - Maximum elegance
  - Perfect for one-page resumes
  - Centered alignment
  - Sophisticated simplicity

**When to use**: Senior positions, executive roles, when less is more, experienced professionals with strong credentials.

---

## 🎯 Template Selection Guide

### By Industry

| Industry | Primary Choice | Alternative |
|----------|---------------|-------------|
| **Technology** | Timeline, Modern | Creative, Bold |
| **Finance/Banking** | Two Column, Classic | Executive |
| **Legal** | Two Column, Executive | Classic |
| **Creative/Design** | Creative, Bold | Modern |
| **Healthcare** | Classic, Two Column | Minimal |
| **Education/Academia** | Minimal, Minimalist Pro | Classic |
| **Marketing** | Bold, Creative | Modern |
| **Consulting** | Minimalist Pro, Two Column | Executive |
| **Startups** | Timeline, Modern | Creative |
| **Sales** | Bold, Modern | Professional |

### By Career Level

| Career Level | Recommended Templates |
|--------------|----------------------|
| **Entry Level (0-2 years)** | Modern, Timeline, Minimal |
| **Mid-Level (3-7 years)** | Classic, Professional, Two Column |
| **Senior (8-15 years)** | Executive, Two Column, Timeline |
| **Executive/C-Level (15+ years)** | Minimalist Pro, Executive, Two Column |

### By Resume Length

| Target Length | Best Templates |
|---------------|----------------|
| **One Page** | Minimalist Pro, Minimal, Professional |
| **Two Pages** | Timeline, Classic, Modern, Two Column |
| **Multiple Pages** | Executive, Two Column, Classic |

---

## 🛠️ How to Use Templates

### 1. Selecting a Template

```typescript
import { CVData } from '@/lib/types';

const cvData: CVData = {
  templateId: 'timeline', // Choose from 10 templates
  themeColor: '#6d54b0', // Customize accent color
  personal: { /* ... */ },
  // ... rest of data
};
```

### 2. Switching Templates Dynamically

Templates can be switched without losing data:

```typescript
// In your component
const { updateTemplate } = useCVContext();

// Switch template
updateTemplate('minimalist-pro');
```

### 3. Customizing Theme Color

All templates support custom theme colors:

```typescript
{
  themeColor: "#6d54b0" // Default lilac
  themeColor: "#2563eb" // Blue
  themeColor: "#dc2626" // Red
  themeColor: "#059669" // Green
  themeColor: "#7c3aed" // Purple
}
```

---

## ✅ ATS-Friendly Design Principles

All templates follow these best practices:

### What We Do ✅
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Plain Text**: All content is selectable text, not images
- **Simple Layouts**: Flexbox and CSS Grid (no complex tables)
- **Standard Fonts**: Google Fonts and web-safe fonts
- **Clear Structure**: Logical section ordering
- **No Headers/Footers**: Avoid problematic page elements
- **Consistent Spacing**: Proper margins and padding
- **High Contrast**: Readable text colors

### What We Avoid ❌
- Complex tables for layout
- Text embedded in images
- Unusual fonts or symbols
- Multi-column tables
- Text boxes
- Headers/footers with critical info
- Excessive graphics
- Non-standard section names

---

## 📄 PDF Generation

### Puppeteer Method (Default)

The app uses Puppeteer for HTML-to-PDF conversion:

```typescript
// API Route: /api/generate-pdf/route.ts
const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
});
```

**Advantages**:
- Pixel-perfect rendering
- Matches web preview exactly
- Supports all CSS features
- Embedded fonts work perfectly

### Alternative: @react-pdf/renderer

Available as fallback for native PDF generation.

---

## 🎨 Customization Tips

### 1. Color Selection by Industry

| Industry | Recommended Colors |
|----------|-------------------|
| **Finance** | Navy (#1e3a8a), Dark Gray (#374151) |
| **Tech** | Blue (#2563eb), Purple (#7c3aed) |
| **Creative** | Vibrant colors, your brand color |
| **Healthcare** | Teal (#0d9488), Blue (#0284c7) |
| **Legal** | Dark Blue (#1e40af), Black (#1f2937) |
| **Education** | Green (#059669), Blue (#2563eb) |

### 2. Content Guidelines

**Professional Summary**: 3-4 sentences, 50-80 words
**Experience Bullets**: 3-5 per role, start with action verbs
**Skills**: 8-16 relevant skills
**Education**: Include GPA if >3.5 and recent graduate

### 3. Photo Guidelines (if applicable)

- Professional headshot
- Neutral background
- High resolution (min 400x400px)
- Square aspect ratio
- Appropriate business attire
- Friendly, professional expression

---

## 📊 Template Comparison Matrix

| Template | Columns | Photo | Color | Density | Best For |
|----------|---------|-------|-------|---------|----------|
| Classic | 2 | ✅ | Low | Medium | Traditional |
| Modern | 2 | ✅ | High | Medium | Tech |
| Minimal | 1 | ❌ | Low | Low | Academia |
| Creative | 2 | ✅ | High | Medium | Design |
| Executive | 1 | ❌ | Minimal | Low | C-Level |
| Professional | 2 | ✅ | Medium | High | Mid-career |
| Bold | 2 | ✅ | High | Medium | Marketing |
| Timeline | 1 | ❌ | Medium | Medium | Career Story |
| Two Column | 2 | ❌ | Medium | High | Professional |
| Minimalist Pro | 1 | ❌ | Minimal | Low | Senior |

---

## 🚀 Best Practices

### For Maximum ATS Compatibility

1. **Use standard section names**: Experience, Education, Skills
2. **Avoid graphics for critical info**: Use text only
3. **Keep formatting simple**: No complex layouts
4. **Use standard fonts**: Inter, Roboto, Arial, Georgia
5. **Include keywords**: Match job description
6. **Use bullet points**: For easy scanning
7. **Avoid tables**: Use divs with flexbox/grid
8. **Test in grayscale**: Ensure readability without color

### For Visual Appeal

1. **Consistent spacing**: Use same margins throughout
2. **Hierarchy**: Clear visual distinction between sections
3. **White space**: Don't overcrowd the page
4. **Alignment**: Keep elements aligned
5. **Color**: Use accent color sparingly
6. **Typography**: Max 2-3 font sizes per section

### For Content

1. **Quantify achievements**: Use numbers and percentages
2. **Action verbs**: Start bullets with strong verbs
3. **Relevance**: Tailor to job description
4. **Conciseness**: Be brief but impactful
5. **Honesty**: Never exaggerate or lie
6. **Proofreading**: Zero typos or errors

---

## 🔧 Technical Implementation

### Template Structure

Each template is a TypeScript function that returns HTML string:

```typescript
interface Props {
    data: CVData;
    t: any; // Translations
}

export default function TemplateNameHTMLTemplate({ data, t }: Props) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                /* Template-specific styles */
            </style>
        </head>
        <body>
            <!-- Template content -->
        </body>
        </html>
    `;
}
```

### Adding a New Template

1. Create new file in `/components/html-templates/`
2. Follow naming convention: `YourTemplateHTMLTemplate.tsx`
3. Implement the template function
4. Add to `LivePreview.tsx` switch statement
5. Add to `TemplateSelector.tsx` array
6. Update `types.ts` TemplateId type
7. Create preview image in `/public/templates/`

---

## 📱 Responsive Design

All templates are designed for A4 paper size (210mm × 297mm) but include responsive considerations:

- **Desktop Preview**: Scaled to fit screen
- **PDF Export**: Full A4 size
- **Print**: Optimized with @media print rules

---

## 🌐 Internationalization

Templates support multiple languages through the translation system:

```typescript
const { t, language } = useLanguage();

// Translations available for:
// - Section titles (Experience, Education, Skills, etc.)
// - UI elements (Present, Contact, etc.)
// - Supported languages: English, German, Spanish, French, etc.
```

---

## 📞 Support

For issues or custom template requests:
1. Check existing templates for similar layouts
2. Copy and modify an existing template
3. Follow ATS-friendly guidelines
4. Test PDF output thoroughly

---

## 📝 Version History

- **v1.0** - Initial 10 templates
- All templates ATS-compliant ✅
- Puppeteer PDF generation ✅
- Full customization support ✅

---

**Last Updated**: December 2024  
**Total Templates**: 10  
**ATS Compliance**: 100%  
**PDF Generation**: Puppeteer + @react-pdf/renderer
