# CV Builder - 10 Template Quick Reference

## Template Overview

### 📘 Classic/Traditional (3)

#### 1. Classic
- **ID**: `classic`
- **Layout**: 35/65 sidebar
- **File**: `ClassicHTMLTemplate.tsx`
- **Color**: Low
- **Photo**: Yes
- **Best For**: Banking, Finance, Corporate

#### 2. Executive  
- **ID**: `executive`
- **Layout**: Single column
- **File**: `ExecutiveHTMLTemplate.tsx`
- **Color**: Minimal
- **Photo**: No
- **Best For**: C-Level, Senior Management

#### 3. Two Column ⭐ NEW
- **ID**: `two-column`
- **Layout**: 30/70 dark sidebar
- **File**: `TwoColumnHTMLTemplate.tsx`
- **Color**: Medium
- **Photo**: No
- **Best For**: Consulting, Legal, Traditional

---

### 🎨 Modern (3)

#### 4. Modern
- **ID**: `modern`
- **Layout**: Sidebar with photo
- **File**: `ModernHTMLTemplate.tsx`
- **Color**: High
- **Photo**: Yes
- **Best For**: Tech, Startups, Creative Agencies

#### 5. Modern 2
- **ID**: `modern2`
- **Layout**: Alternative modern
- **File**: `ModernHTMLTemplate2.tsx`
- **Color**: High
- **Photo**: Yes
- **Best For**: Digital Marketing, Design, Media

#### 6. Timeline ⭐ NEW
- **ID**: `timeline`
- **Layout**: Vertical timeline
- **File**: `TimelineHTMLTemplate.tsx`
- **Color**: Medium
- **Photo**: No
- **Best For**: Tech Professionals, Project Managers

---

### 🚀 Creative (2)

#### 7. Creative
- **ID**: `creative`
- **Layout**: Creative multi-section
- **File**: `CreativeHTMLTemplate.tsx`
- **Color**: High
- **Photo**: Yes
- **Best For**: Designers, Artists, Creative

#### 8. Bold
- **ID**: `bold`
- **Layout**: Two-column with color blocks
- **File**: `BoldTemplate.tsx` (PDF only currently)
- **Color**: High
- **Photo**: Yes
- **Best For**: Marketing, Advertising

---

### ✨ Minimalist (2)

#### 9. Minimal
- **ID**: `minimal`
- **Layout**: Centered single-column
- **File**: `MinimalHTMLTemplate.tsx`
- **Color**: Low
- **Photo**: No
- **Best For**: Academia, Research, Writing

#### 10. Minimalist Pro ⭐ NEW
- **ID**: `minimalist-pro`
- **Layout**: Ultra-clean centered
- **File**: `MinimalistProHTMLTemplate.tsx`
- **Color**: Minimal
- **Photo**: No
- **Best For**: Senior Executives, Consultants

---

## Quick Selection Guide

### By Industry
- **Tech**: Timeline, Modern, Creative
- **Finance**: Two Column, Classic, Executive
- **Legal**: Two Column, Classic, Executive
- **Creative**: Creative, Bold, Modern
- **Consulting**: Minimalist Pro, Executive, Two Column

### By Career Level
- **Entry**: Modern, Timeline, Minimal
- **Mid**: Classic, Two Column, Modern
- **Senior**: Executive, Minimalist Pro, Two Column
- **Executive**: Minimalist Pro, Executive, Two Column

### By Page Count
- **One Page**: Minimalist Pro, Minimal, Compact
- **Two Pages**: Timeline, Classic, Modern
- **Multi-Page**: Executive, Two Column, Classic

---

## File Locations

### HTML Templates
`components/html-templates/`
- TimelineHTMLTemplate.tsx ⭐
- TwoColumnHTMLTemplate.tsx ⭐
- MinimalistProHTMLTemplate.tsx ⭐
- ClassicHTMLTemplate.tsx
- ModernHTMLTemplate.tsx
- ModernHTMLTemplate2.tsx
- MinimalHTMLTemplate.tsx
- CreativeHTMLTemplate.tsx
- ExecutiveHTMLTemplate.tsx
- CompactHTMLTemplate.tsx

### PDF Templates
`components/pdf/`
- TimelineTemplate.tsx ⭐
- TwoColumnTemplate.tsx ⭐
- MinimalistProTemplate.tsx ⭐
- ClassicTemplate.tsx
- ModernTemplate.tsx
- MinimalTemplate.tsx
- BoldTemplate.tsx
- ExecutiveTemplate.tsx
- CreativeTemplate.tsx
- ProfessionalTemplate.tsx

---

## Usage

```typescript
import { CVData } from '@/lib/types';

const cvData: CVData = {
  templateId: 'timeline', // Choose any template ID
  themeColor: '#6d54b0',
  personal: { /* ... */ },
  // ... rest of data
};
```

---

**Total Templates**: 10  
**New Templates**: 3 (Timeline, Two Column, Minimalist Pro)  
**All ATS-Compliant**: ✅
