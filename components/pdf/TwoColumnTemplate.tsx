import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '30%',
        backgroundColor: '#2c3e50',
        color: '#FFFFFF',
        padding: 25,
    },
    mainContent: {
        width: '70%',
        padding: 30,
        backgroundColor: '#FFFFFF',
    },
    sidebarSection: {
        marginBottom: 25,
    },
    sidebarTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 12,
        paddingBottom: 6,
        borderBottom: `2px solid ${themeColor}`,
        color: '#FFFFFF',
    },
    contactItem: {
        marginBottom: 10,
        fontSize: 9,
        lineHeight: 1.5,
    },
    contactLabel: {
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 2,
    },
    skillTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        padding: '5 10',
        borderRadius: 4,
        marginRight: 6,
        marginBottom: 6,
        fontSize: 9,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    languageItem: {
        marginBottom: 10,
    },
    languageName: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#FFFFFF',
    },
    languageLevel: {
        fontSize: 8,
        color: '#bdc3c7',
    },
    header: {
        marginBottom: 25,
        paddingBottom: 20,
        borderBottom: `3px solid ${themeColor}`,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 6,
        letterSpacing: -0.5,
    },
    jobTitle: {
        fontSize: 13,
        color: themeColor,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    contentSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2c3e50',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        marginBottom: 12,
        marginTop: 15,
        paddingBottom: 6,
        borderBottom: '2px solid #ecf0f1',
    },
    summaryText: {
        fontSize: 10,
        lineHeight: 1.6,
        color: '#34495e',
        textAlign: 'justify',
    },
    item: {
        marginBottom: 15,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 3,
    },
    itemSubtitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 4,
    },
    itemMeta: {
        fontSize: 9,
        color: '#7f8c8d',
        marginBottom: 6,
    },
    itemDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: '#34495e',
    },
    certItem: {
        marginBottom: 12,
    },
    certName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    certDetails: {
        fontSize: 9,
        color: '#7f8c8d',
    },
});

interface Props {
    data: CVData;
    t: any;
}

const TwoColumnTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Sidebar */}
                <View style={styles.sidebar}>
                    {/* Contact Information */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>Contact</Text>
                        {data.personal.phone && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Phone</Text>
                                <Text>{data.personal.phone}</Text>
                            </View>
                        )}
                        {data.personal.email && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Email</Text>
                                <Text>{data.personal.email}</Text>
                            </View>
                        )}
                        {data.personal.address && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Address</Text>
                                <Text>{data.personal.address}</Text>
                            </View>
                        )}
                        {data.personal.city && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>City</Text>
                                <Text>{data.personal.city}{data.personal.postcode ? `, ${data.personal.postcode}` : ''}</Text>
                            </View>
                        )}
                        {data.personal.country && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Country</Text>
                                <Text>{data.personal.country}</Text>
                            </View>
                        )}
                        {data.personal.linkedin && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>LinkedIn</Text>
                                <Text>{data.personal.linkedin}</Text>
                            </View>
                        )}
                        {data.personal.website && (
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Website</Text>
                                <Text>{data.personal.website}</Text>
                            </View>
                        )}
                    </View>

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <View style={styles.sidebarSection}>
                            <Text style={styles.sidebarTitle}>{t.skills || 'Skills'}</Text>
                            <View style={styles.skillsContainer}>
                                {data.skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillTag}>{skill}</Text>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Languages */}
                    {data.languages && data.languages.length > 0 && (
                        <View style={styles.sidebarSection}>
                            <Text style={styles.sidebarTitle}>{t.languages || 'Languages'}</Text>
                            {data.languages.map((lang, index) => (
                                <View key={index} style={styles.languageItem}>
                                    <Text style={styles.languageName}>{lang.language}</Text>
                                    <Text style={styles.languageLevel}>{lang.proficiency}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Additional Info */}
                    {(data.personal.birthDate || data.personal.nationality || data.personal.drivingLicense) && (
                        <View style={styles.sidebarSection}>
                            <Text style={styles.sidebarTitle}>Personal Info</Text>
                            {data.personal.birthDate && (
                                <View style={styles.contactItem}>
                                    <Text style={styles.contactLabel}>Birth Date</Text>
                                    <Text>{data.personal.birthDate}</Text>
                                </View>
                            )}
                            {data.personal.nationality && (
                                <View style={styles.contactItem}>
                                    <Text style={styles.contactLabel}>Nationality</Text>
                                    <Text>{data.personal.nationality}</Text>
                                </View>
                            )}
                            {data.personal.drivingLicense && (
                                <View style={styles.contactItem}>
                                    <Text style={styles.contactLabel}>License</Text>
                                    <Text>{data.personal.drivingLicense}</Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>

                {/* Right Main Content */}
                <View style={styles.mainContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.name}>{data.personal.fullName || ''}</Text>
                        <Text style={styles.jobTitle}>{data.personal.title || ''}</Text>
                    </View>

                    {/* Professional Summary */}
                    {data.summary && (
                        <View style={styles.contentSection}>
                            <Text style={styles.sectionTitle}>{t.summary || 'Professional Summary'}</Text>
                            <Text style={styles.summaryText}>{data.summary}</Text>
                        </View>
                    )}

                    {/* Work Experience */}
                    {data.experience && data.experience.length > 0 && (
                        <View style={styles.contentSection}>
                            <Text style={styles.sectionTitle}>{t.experience || 'Work Experience'}</Text>
                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.item}>
                                    <Text style={styles.itemTitle}>{exp.position || ''}</Text>
                                    <Text style={styles.itemSubtitle}>
                                        {exp.company || ''}{exp.location ? ` • ${exp.location}` : ''}
                                    </Text>
                                    <Text style={styles.itemMeta}>
                                        {exp.startDate || ''} - {exp.current ? (t.present || 'Present') : (exp.endDate || '')}
                                    </Text>
                                    {exp.description && <Text style={styles.itemDescription}>{exp.description}</Text>}
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <View style={styles.contentSection}>
                            <Text style={styles.sectionTitle}>{t.education || 'Education'}</Text>
                            {data.education.map((edu, index) => (
                                <View key={index} style={styles.item}>
                                    <Text style={styles.itemTitle}>{edu.degree || ''}</Text>
                                    <Text style={styles.itemSubtitle}>
                                        {edu.school || ''}{edu.location ? ` • ${edu.location}` : ''}
                                    </Text>
                                    {!edu.hideDates && (
                                        <Text style={styles.itemMeta}>
                                            {edu.startDate || ''} - {edu.endDate || ''}
                                        </Text>
                                    )}
                                    {edu.description && <Text style={styles.itemDescription}>{edu.description}</Text>}
                                    {edu.extraInfo && <Text style={styles.itemDescription}>{edu.extraInfo}</Text>}
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Certifications */}
                    {data.certifications && data.certifications.length > 0 && (
                        <View style={styles.contentSection}>
                            <Text style={styles.sectionTitle}>{t.certifications || 'Certifications'}</Text>
                            {data.certifications.map((cert, index) => (
                                <View key={index} style={styles.certItem}>
                                    <Text style={styles.certName}>{cert.name}</Text>
                                    <Text style={styles.certDetails}>
                                        {cert.issuer} • {cert.date}{cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default TwoColumnTemplate;
