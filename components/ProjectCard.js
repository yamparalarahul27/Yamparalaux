import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Theme } from '../constants/Theme';

export default function ProjectCard({ title, description, image }) {
    return (
        <Pressable style={styles.card}>
            <Image
                source={image}
                style={styles.image}
                contentFit="cover"
                transition={500}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {description}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Theme.colors.surface,
        borderRadius: Theme.borderRadius.lg,
        overflow: 'hidden',
        marginBottom: Theme.spacing.lg,
        borderWidth: 1,
        borderColor: Theme.colors.border,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        padding: Theme.spacing.md,
    },
    title: {
        color: Theme.colors.text,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: Theme.spacing.xs,
    },
    description: {
        color: Theme.colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
    },
});
