import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        padding: 40,
    },
    header: {
        textAlign: 'center',
        marginBottom: 30,
        paddingBottom: 20,
        borderBottom: `3px solid ${themeColor}`,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a202c',
        marginBottom: 6,
        letterSpacing: -0.5,
    },
    title: {
        fontSize: 14,
        color: themeColor,
        fontWeight: 'bold',
        marginBottom: 15,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: 9,
        color: '#4a5568',
        gap: 15,
    },
    contactItem: {
        marginHorizontal: 8,
    },
    summarySection: {
        marginBottom: 25,
    },
    summaryText: {
        fontSize: 10,
        lineHeight: 1.6,
        color: '#4a5568',
        textAlign: 'justify',
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1a202c',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 15,
        marginTop: 20,
        paddingBottom: 6,
        borderBottom: `2px solid ${themeColor}`,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    timelineMarker: {
        width: 30,
        alignItems: 'center',
        marginRight: 15,
    },
    timelineDot: {
        width: 10,
        height: 10,
        backgroundColor: themeColor,
        borderRadius: 5,
        marginTop: 3,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#e2e8f0',
        marginTop: 5,
    },
    timelineContent: {
        flex: 1,
    },
    timelineTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1a202c',
        marginBottom: 3,
    },
    timelineSubtitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 4,
    },
    timelineMeta: {
        fontSize: 9,
        color: '#718096',
        marginBottom: 6,
    },
    timelineDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: '#4a5568',
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 25,
    },
    skillItem: {
        backgroundColor: '#f7fafc',
        padding: '6 10',
        borderRadius: 4,
        fontSize: 9,
        color: '#2d3748',
        fontWeight: 'bold',
        marginRight: 8,
        marginBottom: 8,
        borderLeft: `3px solid ${themeColor}`,
    },
    twoColumnGrid: {
        flexDirection: 'row',
        gap: 30,
        marginBottom: 25,
    },
    column: {
        flex: 1,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderBottom: '1px solid #e2e8f0',
    },
    languageName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#2d3748',
    },
    languageLevel: {
        fontSize: 9,
        color: '#718096',
    },
    certItem: {
        marginBottom: 12,
    },
    certName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#2d3748',
    },
    certIssuer: {
        fontSize: 9,
        color: '#718096',
    },
});

interface Props {
    data: CVData;
    t: any;
}

const TimelineTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName || ''}</Text>
                    <Text style={styles.title}>{data.personal.title || ''}</Text>
                    <View style={styles.contactInfo}>
                        {data.personal.email && <Text style={styles.contactItem}>📧 {data.personal.email}</Text>}
                        {data.personal.phone && <Text style={styles.contactItem}>📱 {data.personal.phone}</Text>}
                        {data.personal.address && <Text style={styles.contactItem}>📍 {data.personal.address}</Text>}
                        {data.personal.linkedin && <Text style={styles.contactItem}>🔗 {data.personal.linkedin}</Text>}
                    </View>
                </View>

                {/* Summary */}
                {data.summary && (
                    <View style={styles.summarySection}>
                        <Text style={styles.sectionTitle}>{t.summary || 'Professional Summary'}</Text>
                        <Text style={styles.summaryText}>{data.summary}</Text>
                    </View>
                )}

                {/* Experience Timeline */}
                {data.experience && data.experience.length > 0 && (
                    <View>
                        <Text style={styles.sectionTitle}>{t.experience || 'Work Experience'}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.timelineItem}>
                                <View style={styles.timelineMarker}>
                                    <View style={styles.timelineDot} />
                                    {index < data.experience.length - 1 && <View style={styles.timelineLine} />}
                                </View>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTitle}>{exp.position || ''}</Text>
                                    <Text style={styles.timelineSubtitle}>
                                        {exp.company || ''}{exp.location ? ` • ${exp.location}` : ''}
                                    </Text>
                                    <Text style={styles.timelineMeta}>
                                        {exp.startDate || ''} - {exp.current ? (t.present || 'Present') : (exp.endDate || '')}
                                    </Text>
                                    {exp.description && <Text style={styles.timelineDescription}>{exp.description}</Text>}
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Education Timeline */}
                {data.education && data.education.length > 0 && (
                    <View>
                        <Text style={styles.sectionTitle}>{t.education || 'Education'}</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={styles.timelineItem}>
                                <View style={styles.timelineMarker}>
                                    <View style={styles.timelineDot} />
                                    {index < data.education.length - 1 && <View style={styles.timelineLine} />}
                                </View>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTitle}>{edu.degree || ''}</Text>
                                    <Text style={styles.timelineSubtitle}>
                                        {edu.school || ''}{edu.location ? ` • ${edu.location}` : ''}
                                    </Text>
                                    {!edu.hideDates && (
                                        <Text style={styles.timelineMeta}>
                                            {edu.startDate || ''} - {edu.endDate || ''}
                                        </Text>
                                    )}
                                    {edu.description && <Text style={styles.timelineDescription}>{edu.description}</Text>}
                                    {edu.extraInfo && <Text style={styles.timelineDescription}>{edu.extraInfo}</Text>}
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <View>
                        <Text style={styles.sectionTitle}>{t.skills || 'Skills'}</Text>
                        <View style={styles.skillsGrid}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skillItem}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}

                {/* Languages & Certifications */}
                {((data.languages && data.languages.length > 0) || (data.certifications && data.certifications.length > 0)) && (
                    <View style={styles.twoColumnGrid}>
                        {data.languages && data.languages.length > 0 && (
                            <View style={styles.column}>
                                <Text style={styles.sectionTitle}>{t.languages || 'Languages'}</Text>
                                {data.languages.map((lang, index) => (
                                    <View key={index} style={styles.languageItem}>
                                        <Text style={styles.languageName}>{lang.language}</Text>
                                        <Text style={styles.languageLevel}>{lang.proficiency}</Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        {data.certifications && data.certifications.length > 0 && (
                            <View style={styles.column}>
                                <Text style={styles.sectionTitle}>{t.certifications || 'Certifications'}</Text>
                                {data.certifications.map((cert, index) => (
                                    <View key={index} style={styles.certItem}>
                                        <Text style={styles.certName}>{cert.name}</Text>
                                        <Text style={styles.certIssuer}>{cert.issuer} • {cert.date}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default TimelineTemplate;
