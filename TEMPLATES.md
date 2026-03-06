# CV Builder Templates Documentation

## Overview

The CV Builder includes **10 professional, ATS-friendly templates** designed to cater to different industries, career levels, and personal preferences. All templates are optimized for both web preview and PDF export.

## Template Categories

### 📘 Classic/Traditional (3 templates)
Professional templates suitable for conservative industries like banking, law, and government.

#### 1. Classic Template
- **ID**: `classic`
- **Layout**: Left sidebar (35%) with main content (65%)
- **Best For**: Traditional corporate roles, banking, finance
- **Features**:
  - Sidebar with contact info, skills, and languages
  - Clean, professional typography
  - Subtle color accents
  - Photo support

#### 2. Executive Template
- **ID**: `executive`
- **Layout**: Traditional header with single-column content
- **Best For**: Senior executives, C-level positions
- **Features**:
  - Formal, conservative design
  - Emphasis on experience and achievements
  - Minimal color usage
  - Professional spacing

#### 3. Two Column Template ⭐ NEW
- **ID**: `two-column`
- **Layout**: Dark sidebar (30%) with main content (70%)
- **Best For**: Traditional industries requiring modern touch
- **Features**:
  - Dark gradient sidebar
  - Professional color scheme
  - Comprehensive contact section
  - Ideal for banking, consulting, legal

---

### 🎨 Modern (3 templates)
Contemporary designs with color accents and modern layouts.

#### 4. Modern Template
- **ID**: `modern`
- **Layout**: Sidebar with photo and color accents
- **Best For**: Tech, creative agencies, startups
- **Features**:
  - Profile photo support
  - Vibrant color accents
  - Modern typography
  - Skill badges

#### 5. Modern Template 2
- **ID**: `modern2`
- **Layout**: Alternative modern layout
- **Best For**: Digital marketing, design, media
- **Features**:
  - Contemporary design elements
  - Flexible content sections
  - Color customization

#### 6. Timeline Template ⭐ NEW
- **ID**: `timeline`
- **Layout**: Vertical timeline with centered header
- **Best For**: Tech professionals, project managers
- **Features**:
  - Visual timeline for experience/education
  - Modern, clean design
  - Excellent for showcasing career progression
  - Color-coded timeline dots

---

### 🚀 Creative (2 templates)
Bold designs with creative elements while maintaining ATS compatibility.

#### 7. Creative Template
- **ID**: `creative`
- **Layout**: Creative multi-section layout
- **Best For**: Designers, artists, creative professionals
- **Features**:
  - Bold color usage
  - Creative section layouts
  - Visual interest while ATS-safe
  - Unique typography

#### 8. Bold Template
- **ID**: `bold`
- **Layout**: Two-column with color blocks
- **Best For**: Marketing, advertising, creative tech
- **Features**:
  - Strong visual hierarchy
  - Color block sections
  - Modern and eye-catching
  - Professional yet creative

---

### ✨ Minimalist (2 templates)
Clean, simple designs focusing on content over decoration.

#### 9. Minimal Template
- **ID**: `minimal`
- **Layout**: Centered, single-column
- **Best For**: Academia, research, writing
- **Features**:
  - Maximum white space
  - Typography-focused
  - Clean and simple
  - Easy to read

#### 10. Minimalist Pro Template ⭐ NEW
- **ID**: `minimalist-pro`
- **Layout**: Ultra-clean centered design
- **Best For**: Senior professionals, consultants, executives
- **Features**:
  - Serif headings (Playfair Display)
  - Maximum elegance and simplicity
  - Perfect for one-page resumes
  - Centered alignment throughout
  - Ideal for experienced professionals

---

## ATS-Friendly Design Principles

All templates follow these ATS (Applicant Tracking System) best practices:

### ✅ What We Do
- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- **Plain Text**: All content is selectable text, not images
- **Simple Layouts**: Flexbox and CSS Grid instead of complex tables
- **Standard Fonts**: Web-safe and Google Fonts
- **Clear Structure**: Logical section ordering
- **No Headers/Footers**: Avoid problematic page elements

### ❌ What We Avoid
- Complex tables for layout
- Text embedded in images
- Unusual fonts or symbols
- Multi-column tables
- Text boxes
- Headers and footers with critical info

---

## Template Selection Guide

### By Industry

| Industry | Recommended Templates |
|----------|----------------------|
| **Technology** | Timeline, Modern, Creative |
| **Finance/Banking** | Two Column, Classic, Executive |
| **Legal** | Two Column, Classic, Executive |
| **Creative/Design** | Creative, Bold, Modern |
| **Healthcare** | Classic, Minimal, Two Column |
| **Education** | Minimal, Minimalist Pro, Classic |
| **Marketing** | Bold, Creative, Modern |
| **Consulting** | Minimalist Pro, Executive, Two Column |
| **Startups** | Timeline, Modern, Creative |

### By Career Level

| Career Level | Recommended Templates |
|--------------|----------------------|
| **Entry Level** | Modern, Timeline, Minimal |
| **Mid-Level** | Classic, Two Column, Modern |
| **Senior** | Executive, Minimalist Pro, Two Column |
| **Executive/C-Level** | Minimalist Pro, Executive, Two Column |

### By Resume Length

| Length | Recommended Templates |
|--------|----------------------|
| **One Page** | Minimalist Pro, Minimal, Compact |
| **Two Pages** | Timeline, Classic, Modern |
| **Multiple Pages** | Executive, Two Column, Classic |

---

## Customization

### Theme Colors

All templates support custom theme colors. The default is `#6d54b0` (lilac), but you can customize:

```typescript
{
  themeColor: "#6d54b0" // Your brand color
}
```

### Sections Included

Each template supports these sections:
- ✅ Personal Information
- ✅ Professional Summary
- ✅ Work Experience
- ✅ Education
- ✅ Skills
- ✅ Languages
- ✅ Certifications
- ✅ Hobbies (optional)

---

## PDF Generation

### Methods Available

1. **@react-pdf/renderer** (Default)
   - Native PDF generation
   - Consistent output
   - Smaller file sizes
   - Fast rendering

2. **Puppeteer** (Alternative)
   - HTML-to-PDF conversion
   - Pixel-perfect rendering
   - Matches web preview exactly
   - Larger file sizes

### Best Practices

- **Fonts**: Use Google Fonts or system fonts
- **Page Size**: A4 (210mm × 297mm)
- **Margins**: 15-25mm on all sides
- **Page Breaks**: Automatic handling
- **Colors**: RGB for web, CMYK for print

---

## Usage Examples

### Selecting a Template

```typescript
import { CVData } from '@/lib/types';

const cvData: CVData = {
  templateId: 'timeline', // Choose your template
  themeColor: '#6d54b0',
  personal: { /* ... */ },
  // ... rest of data
};
```

### Switching Templates

Templates can be switched dynamically without losing data:

```typescript
// Change template while preserving data
setCVData(prev => ({
  ...prev,
  templateId: 'minimalist-pro'
}));
```

---

## Template Comparison

| Template | Columns | Photo | Color Usage | Best For |
|----------|---------|-------|-------------|----------|
| Classic | 2 | ✅ | Low | Traditional |
| Executive | 1 | ❌ | Minimal | Senior roles |
| Two Column | 2 | ❌ | Medium | Professional |
| Modern | 2 | ✅ | High | Tech/Creative |
| Modern 2 | 2 | ✅ | High | Digital |
| Timeline | 1 | ❌ | Medium | Career progression |
| Creative | 2 | ✅ | High | Design |
| Bold | 2 | ✅ | High | Marketing |
| Minimal | 1 | ❌ | Low | Academia |
| Minimalist Pro | 1 | ❌ | Minimal | Executives |

---

## Tips for Best Results

### 1. Content Length
- Keep bullet points concise
- Use action verbs
- Quantify achievements
- Aim for 1-2 pages

### 2. Visual Balance
- Don't overcrowd sections
- Use white space effectively
- Maintain consistent spacing
- Balance text density

### 3. Color Selection
- Choose colors that match your industry
- Ensure good contrast for readability
- Test in both color and grayscale
- Consider printing in black & white

### 4. Photo Guidelines (if applicable)
- Professional headshot
- Neutral background
- High resolution (at least 400x400px)
- Square aspect ratio
- Appropriate attire

---

## Accessibility

All templates are designed with accessibility in mind:
- ✅ High contrast ratios
- ✅ Readable font sizes (minimum 9pt)
- ✅ Logical reading order
- ✅ Semantic HTML structure
- ✅ Screen reader compatible

---

## Support & Customization

For custom template requests or modifications:
1. Copy an existing template
2. Modify styles and layout
3. Add to template selector
4. Update type definitions

---

**Last Updated**: December 2025  
**Total Templates**: 10  
**All Templates ATS-Compliant**: ✅
