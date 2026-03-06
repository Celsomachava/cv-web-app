import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 25,
        paddingBottom: 15,
        borderBottom: `2px solid ${themeColor}`,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        color: '#444',
        marginBottom: 10,
    },
    contact: {
        fontSize: 10,
        color: '#666',
        lineHeight: 1.5,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    item: {
        marginBottom: 12,
        paddingLeft: 10,
        borderLeft: `2px solid ${themeColor}`,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 2,
    },
    itemSubtitle: {
        fontSize: 10,
        color: '#666',
        marginBottom: 2,
    },
    date: {
        fontSize: 9,
        color: '#888',
        marginBottom: 4,
    },
    description: {
        fontSize: 10,
        color: '#444',
        lineHeight: 1.4,
    },
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    skill: {
        fontSize: 10,
        color: '#444',
        paddingRight: 10,
    },
});

interface Props {
    data: CVData;
    t: any;
}

const ProfessionalTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>
                    <View style={styles.contact}>
                        <Text>📞 {data.personal.phone} | ✉ {data.personal.email}</Text>
                        <Text>📍 {data.personal.address}, {data.personal.city}, {data.personal.country}</Text>
                    </View>
                </View>

                {data.summary && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.summary}</Text>
                        <Text style={styles.description}>{data.summary}</Text>
                    </View>
                )}

                {data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.experience}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.itemTitle}>{exp.position}</Text>
                                <Text style={styles.itemSubtitle}>{exp.company}, {exp.location}</Text>
                                <Text style={styles.date}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                <Text style={styles.description}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.education}</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.itemTitle}>{edu.degree}</Text>
                                <Text style={styles.itemSubtitle}>{edu.school}, {edu.location}</Text>
                                <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.skills}</Text>
                        <View style={styles.skillsRow}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>• {skill}</Text>
                            ))}
                        </View>
                    </View>
                )}

                {data.certifications.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.certifications}</Text>
                        {data.certifications.map((cert, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.itemTitle}>{cert.name}</Text>
                                <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
                                <Text style={styles.date}>{cert.date}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default ProfessionalTemplate;
