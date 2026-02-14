import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar, Linking, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react-native';
import { Theme } from './constants/Theme';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      description: 'A revolutionary financial tracking application with real-time analytics and glassmorphism UI.',
      image: require('./assets/images/project1.png'),
    },
    {
      id: 2,
      title: 'Creative Agency Portal',
      description: 'A multi-platform portfolio management system for creative professionals and agencies.',
      image: require('./assets/images/project2.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('./assets/images/profile.png')}
            style={styles.profileImage}
            contentFit="cover"
            transition={500}
          />
          <Text style={styles.name}>Rahul Yamparala</Text>
          <Text style={styles.title}>Full Stack Developer & UI Designer</Text>

          <View style={styles.socialBar}>
            <SocialIcon icon={Github} />
            <SocialIcon icon={Linkedin} />
            <SocialIcon icon={Mail} />
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Rahul Yamparala. Built with React Native.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <Pressable style={styles.socialIcon}>
      <Icon size={20} color={Theme.colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContent: {
    padding: Theme.spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: Theme.spacing.xxl,
    marginBottom: Theme.spacing.xxl,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Theme.colors.primary,
    marginBottom: Theme.spacing.md,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  title: {
    fontSize: 16,
    color: Theme.colors.secondary,
    marginBottom: Theme.spacing.lg,
  },
  socialBar: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  section: {
    marginTop: Theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.lg,
  },
  footer: {
    marginTop: Theme.spacing.xl,
    paddingTop: Theme.spacing.xl,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.border,
    alignItems: 'center',
  },
  footerText: {
    color: Theme.colors.textMuted,
    fontSize: 12,
  },
});
