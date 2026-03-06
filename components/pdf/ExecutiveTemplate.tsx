import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 30,
        paddingBottom: 20,
        borderBottom: `3px solid ${themeColor}`,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        color: themeColor,
        marginBottom: 15,
    },
    contactRow: {
        flexDirection: 'row',
        gap: 20,
        fontSize: 10,
        color: '#666',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    item: {
        marginBottom: 15,
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 3,
    },
    itemSubtitle: {
        fontSize: 11,
        color: '#444',
        marginBottom: 2,
    },
    date: {
        fontSize: 10,
        color: '#888',
        marginBottom: 5,
    },
    description: {
        fontSize: 10,
        color: '#444',
        lineHeight: 1.5,
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    skillBadge: {
        backgroundColor: '#f0f0f0',
        padding: '5 10',
        borderRadius: 4,
        fontSize: 10,
    },
});

interface Props {
    data: CVData;
    t: any;
}

const ExecutiveTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>
                    <View style={styles.contactRow}>
                        {data.personal.phone && <Text>📞 {data.personal.phone}</Text>}
                        {data.personal.email && <Text>✉ {data.personal.email}</Text>}
                        {data.personal.city && <Text>🌍 {data.personal.city}, {data.personal.country}</Text>}
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
                                <Text style={styles.itemSubtitle}>{exp.company} | {exp.location}</Text>
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
                                <Text style={styles.itemSubtitle}>{edu.school} | {edu.location}</Text>
                                <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.skills}</Text>
                        <View style={styles.skillsGrid}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skillBadge}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default ExecutiveTemplate;
