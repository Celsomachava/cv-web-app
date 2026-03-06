import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';

const createStyles = (themeColor: string) => StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    leftColumn: {
        width: '30%',
        backgroundColor: themeColor,
        padding: 30,
        color: '#FFFFFF',
    },
    rightColumn: {
        width: '70%',
        padding: 30,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
        textAlign: 'center',
    },
    title: {
        fontSize: 12,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
        opacity: 0.9,
    },
    sectionTitleLeft: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 15,
        textTransform: 'uppercase',
    },
    sectionTitleRight: {
        fontSize: 14,
        fontWeight: 'bold',
        color: themeColor,
        marginBottom: 15,
        marginTop: 10,
        textTransform: 'uppercase',
    },
    contactItem: {
        fontSize: 9,
        color: '#FFFFFF',
        marginBottom: 8,
        opacity: 0.95,
    },
    skillItem: {
        fontSize: 10,
        color: '#FFFFFF',
        marginBottom: 6,
        opacity: 0.95,
    },
    item: {
        marginBottom: 15,
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    itemSubtitle: {
        fontSize: 11,
        color: '#666',
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
});

interface Props {
    data: CVData;
    t: any;
}

const CreativeTemplate: React.FC<Props> = ({ data, t }) => {
    const styles = createStyles(data.themeColor || '#6d54b0');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.leftColumn}>
                    {data.personal.photo && (
                        <Image src={data.personal.photo} style={styles.photo} />
                    )}
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>

                    <Text style={styles.sectionTitleLeft}>{t.contact}</Text>
                    {data.personal.phone && <Text style={styles.contactItem}>📞 {data.personal.phone}</Text>}
                    {data.personal.email && <Text style={styles.contactItem}>✉ {data.personal.email}</Text>}
                    {data.personal.address && <Text style={styles.contactItem}>📍 {data.personal.address}</Text>}

                    {data.skills.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleLeft}>{t.skills}</Text>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skillItem}>• {skill}</Text>
                            ))}
                        </View>
                    )}

                    {data.languages.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleLeft}>{t.languages}</Text>
                            {data.languages.map((lang, index) => (
                                <Text key={index} style={styles.skillItem}>{lang.language} - {lang.proficiency}</Text>
                            ))}
                        </View>
                    )}

                    {data.hobbies && data.hobbies.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleLeft}>{t.hobbies}</Text>
                            {data.hobbies.map((hobby, index) => (
                                <Text key={index} style={styles.skillItem}>• {hobby}</Text>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.rightColumn}>
                    {data.summary && (
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.sectionTitleRight}>{t.summary}</Text>
                            <Text style={styles.description}>{data.summary}</Text>
                        </View>
                    )}

                    {data.experience.length > 0 && (
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.sectionTitleRight}>{t.experience}</Text>
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
                        <View>
                            <Text style={styles.sectionTitleRight}>{t.education}</Text>
                            {data.education.map((edu, index) => (
                                <View key={index} style={styles.item}>
                                    <Text style={styles.itemTitle}>{edu.degree}</Text>
                                    <Text style={styles.itemSubtitle}>{edu.school} | {edu.location}</Text>
                                    <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default CreativeTemplate;
