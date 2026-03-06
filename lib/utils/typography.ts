// Global typography standards for all templates
export const typography = {
    fontFamily: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        serif: "'Georgia', 'Times New Roman', serif",
    },
    fontSize: {
        name: '28px',
        title: '16px',
        sectionTitle: '14px',
        itemTitle: '13px',
        itemSubtitle: '12px',
        body: '11px',
        small: '10px',
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    lineHeight: {
        tight: '1.4',
        normal: '1.6',
        relaxed: '1.8',
    },
    spacing: {
        sectionMargin: '30px',
        itemMargin: '25px',
        elementMargin: '8px',
    },
    colors: {
        text: '#4a4a4a',
        heading: '#1a1a1a',
        muted: '#666',
        light: '#999',
    },
};

export const getTypographyStyles = () => `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: ${typography.fontFamily.primary}; }
    .name { font-size: ${typography.fontSize.name}; font-weight: ${typography.fontWeight.bold}; color: ${typography.colors.heading}; margin-bottom: ${typography.spacing.elementMargin}; }
    .title { font-size: ${typography.fontSize.title}; color: var(--accent-color); margin-bottom: ${typography.spacing.sectionMargin}; text-transform: uppercase; letter-spacing: 1px; }
    .section-title { font-size: ${typography.fontSize.sectionTitle}; font-weight: ${typography.fontWeight.bold}; color: ${typography.colors.heading}; margin: ${typography.spacing.sectionMargin} 0 15px; text-transform: uppercase; letter-spacing: 1px; }
    .section-title-main { font-size: ${typography.fontSize.sectionTitle}; font-weight: ${typography.fontWeight.bold}; color: ${typography.colors.heading}; margin: 20px 0 15px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid var(--accent-color); padding-bottom: ${typography.spacing.elementMargin}; }
    .contact-text { font-size: ${typography.fontSize.body}; color: ${typography.colors.text}; line-height: ${typography.lineHeight.tight}; }
    .skill-badge { display: inline-block; background: #e9ecef; padding: 6px 12px; border-radius: 4px; margin: 0 8px 8px 0; font-size: ${typography.fontSize.body}; color: #495057; }
    .lang-name { font-size: ${typography.fontSize.body}; font-weight: ${typography.fontWeight.bold}; color: ${typography.colors.heading}; }
    .lang-level { font-size: ${typography.fontSize.small}; color: ${typography.colors.muted}; }
    .experience-item { margin-bottom: ${typography.spacing.itemMargin}; }
    .exp-title { font-size: ${typography.fontSize.itemTitle}; font-weight: ${typography.fontWeight.bold}; color: ${typography.colors.heading}; margin-bottom: 4px; }
    .exp-company { font-size: ${typography.fontSize.itemSubtitle}; font-weight: ${typography.fontWeight.bold}; color: #495057; margin-bottom: 4px; }
    .exp-date { font-size: ${typography.fontSize.small}; color: ${typography.colors.light}; margin-bottom: ${typography.spacing.elementMargin}; }
    .exp-desc { font-size: ${typography.fontSize.body}; color: ${typography.colors.text}; line-height: ${typography.lineHeight.normal}; }
`;
