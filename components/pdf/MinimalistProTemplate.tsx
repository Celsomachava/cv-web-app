import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        padding: '25mm 30mm',
    },
    header: {
        textAlign: 'center',
        marginBottom: 35,
        paddingBottom: 20,
        borderBottom: '1px solid #e0e0e0',
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 10,
        letterSpacing: -1,
    },
    title: {
        fontSize: 11,
        color: '#666',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 3,
        marginBottom: 18,
    },
    contactBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: 9,
        color: '#666',
        gap: 15,
    },
    contactSeparator: {
        color: '#ccc',
        marginHorizontal: 8,
    },
    summarySection: {
        marginBottom: 30,
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 10,
        lineHeight: 1.7,
        color: '#444',
        textAlign: 'center',
        maxWidth: '80%',
    },
    section: {
        marginBottom: 28,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
    item: {
        marginBottom: 18,
        paddingBottom: 18,
        borderBottom: '1px solid #f0f0f0',
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 6,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    itemDate: {
        fontSize: 9,
        color: '#999',
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 10,
        color: '#666',
        marginBottom: 8,
    },
    itemDescription: {
        fontSize: 9,
        lineHeight: 1.6,
        color: '#555',
    },
    skillsContainer: {
        alignItems: 'center',
    },
    skillsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '80%',
    },
    skillItem: {
        fontSize: 10,
        color: '#444',
        marginHorizontal: 8,
        marginBottom: 6,
    },
    twoColSection: {
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'center',
    },
    column: {
        flex: 1,
        maxWidth: '40%',
    },
    subsectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1a1a1a',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 15,
        textAlign: 'center',
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottom: '1px solid #f5f5f5',
    },
    languageName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333',
    },
    languageLevel: {
        fontSize: 9,
        color: '#999',
    },
    certItem: {
        marginBottom: 15,
        textAlign: 'center',
    },
    certName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
    },
    certDetails: {
        fontSize: 8,
        color: '#999',
    },
});

interface Props {
    data: CVData;
    t: any;
}

const MinimalistProTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName || ''}</Text>
                    <Text style={styles.title}>{data.personal.title || ''}</Text>
                    <View style={styles.contactBar}>
                        {data.personal.email && <Text>{data.personal.email}</Text>}
                        {data.personal.email && data.personal.phone && <Text style={styles.contactSeparator}>|</Text>}
                        {data.personal.phone && <Text>{data.personal.phone}</Text>}
                        {(data.personal.email || data.personal.phone) && data.personal.address && <Text style={styles.contactSeparator}>|</Text>}
                        {data.personal.address && <Text>{data.personal.address}</Text>}
                        {data.personal.linkedin && (
                            <>
                                <Text style={styles.contactSeparator}>|</Text>
                                <Text>{data.personal.linkedin}</Text>
                            </>
                        )}
                    </View>
                </View>

                {/* Professional Summary */}
                {data.summary && (
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryText}>{data.summary}</Text>
                    </View>
                )}

                {/* Work Experience */}
                {data.experience && data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.experience || 'Experience'}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{exp.position || ''}</Text>
                                    <Text style={styles.itemDate}>
                                        {exp.startDate || ''} – {exp.current ? (t.present || 'Present') : (exp.endDate || '')}
                                    </Text>
                                </View>
                                <Text style={styles.itemSubtitle}>
                                    {exp.company || ''}{exp.location ? ` • ${exp.location}` : ''}
                                </Text>
                                {exp.description && <Text style={styles.itemDescription}>{exp.description}</Text>}
                            </View>
                        ))}
                    </View>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.education || 'Education'}</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{edu.degree || ''}</Text>
                                    {!edu.hideDates && (
                                        <Text style={styles.itemDate}>
                                            {edu.startDate || ''} – {edu.endDate || ''}
                                        </Text>
                                    )}
                                </View>
                                <Text style={styles.itemSubtitle}>
                                    {edu.school || ''}{edu.location ? ` • ${edu.location}` : ''}
                                </Text>
                                {edu.description && <Text style={styles.itemDescription}>{edu.description}</Text>}
                                {edu.extraInfo && <Text style={styles.itemDescription}>{edu.extraInfo}</Text>}
                            </View>
                        ))}
                    </View>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.skills || 'Skills'}</Text>
                        <View style={styles.skillsContainer}>
                            <View style={styles.skillsList}>
                                {data.skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillItem}>
                                        {skill}{index < data.skills.length - 1 ? ' •' : ''}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </View>
                )}

                {/* Languages & Certifications */}
                {((data.languages && data.languages.length > 0) || (data.certifications && data.certifications.length > 0)) && (
                    <View style={styles.section}>
                        <View style={styles.twoColSection}>
                            {data.languages && data.languages.length > 0 ? (
                                <View style={styles.column}>
                                    <Text style={styles.subsectionTitle}>{t.languages || 'Languages'}</Text>
                                    {data.languages.map((lang, index) => (
                                        <View key={index} style={styles.languageItem}>
                                            <Text style={styles.languageName}>{lang.language}</Text>
                                            <Text style={styles.languageLevel}>{lang.proficiency}</Text>
                                        </View>
                                    ))}
                                </View>
                            ) : <View style={styles.column} />}

                            {data.certifications && data.certifications.length > 0 ? (
                                <View style={styles.column}>
                                    <Text style={styles.subsectionTitle}>{t.certifications || 'Certifications'}</Text>
                                    {data.certifications.map((cert, index) => (
                                        <View key={index} style={styles.certItem}>
                                            <Text style={styles.certName}>{cert.name}</Text>
                                            <Text style={styles.certDetails}>{cert.issuer} • {cert.date}</Text>
                                        </View>
                                    ))}
                                </View>
                            ) : <View style={styles.column} />}
                        </View>
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default MinimalistProTemplate;
