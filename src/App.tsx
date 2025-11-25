import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Language = 'fr' | 'en';

const translations: Record<
  Language,
  {
    header: {
      tagline: string;
      location: string;
      email: string;
      phone: string;
      license: string;
      githubLabel: string;
      linkedinLabel: string;
    };
    profile: { title: string; text: string };
    education: { title: string; items: { period: string; description: string }[] };
    experiences: {
      title: string;
      items: {
        period: string;
        company: string;
        role: string;
        bullets: string[];
      }[];
    };
    skills: {
      title: string;
      softTitle: string;
      hardTitle: string;
      soft: { label: string; value: number; display: string }[];
      hard: { label: string; value: number; display: string }[];
    };
    portfolio: {
      title: string;
      cta: string;
      projects: {
        title: string;
        description: string;
        image: string;
        link: string;
        alt: string;
      }[];
    };
    extra: { title: string; items: { label: string; value: string }[] };
    footer: string;
    labels: { languageToggle: string; themeToggle: string };
  }
> = {
  fr: {
    header: {
      tagline: 'Développeur Web - Fullstack JS',
      location: 'France / Belgique / Luxembourg',
      email: 'antoine.raimand@gmail.com',
      phone: '06 88 08 80 97',
      license: 'Permis B Véhiculé',
      githubLabel: 'github.com/AntoineRai',
      linkedinLabel: 'LinkedIn',
    },
    profile: {
      title: 'Profil',
      text:
        "Développeur web polyvalent, passionné par la création d'applications performantes et le travail en équipe. Orienté optimisation et innovation, avec une approche centrée sur l'agilité et la collaboration.",
    },
    education: {
      title: 'Formations',
      items: [
        {
          period: '2023 - 2025',
          description: 'Master Informatique spécialité Développement Web, Lille Ynov Campus',
        },
        {
          period: '2022 - 2023',
          description: 'Bachelor Informatique Administrateur Système et Réseaux, Lille Ynov Campus',
        },
        {
          period: '2020 - 2022',
          description: 'DUT Informatique, IUT de Maubeuge',
        },
      ],
    },
    experiences: {
      title: 'Expériences',
      items: [
        {
          period: '07/2021 - 09/2025',
          company: 'Cap Habitat',
          role: 'Responsable du pôle informatique',
          bullets: [
            'Gestion des différents sites internet de la société.',
            "Réalisation de scripts d'automatisation avec Apps Script.",
            "Création d'une application mobile Flutter pour un motel.",
            "Maintenance d'un serveur Windows avec gestion des sauvegardes, du VPN et des licences Remote Desktop.",
          ],
        },
        {
          period: '2025',
          company: 'YTechUnion',
          role: 'DevOps Web',
          bullets: [
            'Réalisation de sites pour divers projets étudiants.',
            'Utilisation de la méthode Agile pour la gestion de projets.',
            'Intégration de pipelines CI/CD pour automatiser les déploiements.',
            'Communication efficace avec les clients sur les aspects techniques.',
          ],
        },
        {
          period: '2024',
          company: 'Craft2Give',
          role: 'Développeur Back-end',
          bullets: [
            "Réalisation d'une API Node.js sécurisée avec des tokens JWT.",
            "Déploiement d'un socle API sur serveur Linux avec Docker.",
            "Containerisation de l'application pour un déploiement simplifié via Docker.",
          ],
        },
        {
          period: '2024',
          company: 'LearnCyber',
          role: "Responsable de l'équipe des développeurs",
          bullets: [
            'Sensibilisation à la cybersécurité auprès de lycéens.',
            "Mise en place de sprints Agile pour la réalisation d'un site vitrine.",
            "Création d'ateliers interactifs pour animer les interventions.",
          ],
        },
      ],
    },
    skills: {
      title: 'Compétences',
      softTitle: 'Soft Skills',
      hardTitle: 'Hard Skills',
      soft: [
        { label: 'Résilience au changement', value: 90, display: '90%' },
        { label: "Esprit d'optimisation", value: 85, display: '85%' },
        { label: 'Vulgarisation', value: 80, display: '80%' },
      ],
      hard: [
        { label: 'ReactJS / NextJS', value: 75, display: '75%' },
        { label: 'NodeJS', value: 85, display: '85%' },
        { label: 'TailwindCSS', value: 80, display: '80%' },
      ],
    },
    portfolio: {
      title: 'Quelques projets',
      cta: 'Voir le projet',
      projects: [
        {
          title: 'Narcisse',
          description: "Site vitrine pour une agence de photographe.",
          image: '/portfolio/project1.png',
          link: 'https://narcisse.vercel.app/',
          alt: 'Projet Narcisse',
        },
        {
          title: 'Craft2Give',
          description: 'Projet étudiant qui a permis de récolter plus de 500€ pour la SPA.',
          image: '/portfolio/project2.jfif',
          link: 'https://www.ynov.com/campus/lille/actualites/un-projet-etudiant-carritatif',
          alt: 'Projet Craft2Give',
        },
        {
          title: 'BrightPath',
          description:
            "Application de gestion de carrière et de développement professionnel propulsée par l'IA.",
          image: '/portfolio/brightpath.png',
          link: 'https://antoineraimand.fr',
          alt: 'Projet BrightPath',
        },
      ],
    },
    extra: {
      title: 'Informations complémentaires',
      items: [
        { label: 'Langues', value: 'Anglais B2 - 860 TOEIC' },
        {
          label: "Centres d'intérêts",
          value: 'Jeux vidéo de stratégie, Musculation, Veille technologique',
        },
      ],
    },
    footer: 'Fait avec',
    labels: {
      languageToggle: 'Basculer la langue',
      themeToggle: 'Basculer le mode sombre',
    },
  },
  en: {
    header: {
      tagline: 'Web Developer - Fullstack JS',
      location: 'France / Belgium / Luxembourg',
      email: 'antoine.raimand@gmail.com',
      phone: '+33 6 88 08 80 97',
      license: 'Driving license B - Car owner',
      githubLabel: 'github.com/AntoineRai',
      linkedinLabel: 'LinkedIn',
    },
    profile: {
      title: 'Profile',
      text:
        'Versatile web developer, passionate about creating performant applications and collaborating with teams. Optimization-focused mindset with an agile and innovation-driven approach.',
    },
    education: {
      title: 'Education',
      items: [
        {
          period: '2023 - 2025',
          description: "Master's Degree in Web Development, Lille Ynov Campus",
        },
        {
          period: '2022 - 2023',
          description: 'Bachelor in System & Network Administration, Lille Ynov Campus',
        },
        {
          period: '2020 - 2022',
          description: 'Computer Science DUT, IUT de Maubeuge',
        },
      ],
    },
    experiences: {
      title: 'Experience',
      items: [
        {
          period: '07/2021 - 09/2025',
          company: 'Cap Habitat',
          role: 'Head of IT Department',
          bullets: [
            'Managed all corporate websites and their evolutions.',
            'Built automation scripts with Google Apps Script.',
            'Created a Flutter mobile app for a motel.',
            'Maintained a Windows server with backups, VPN, and Remote Desktop licensing.',
          ],
        },
        {
          period: '2025',
          company: 'YTechUnion',
          role: 'Web DevOps',
          bullets: [
            'Delivered websites for multiple student initiatives.',
            'Adopted Agile rituals to steer project delivery.',
            'Integrated CI/CD pipelines to automate deployments.',
            'Acted as the technical point of contact for stakeholders.',
          ],
        },
        {
          period: '2024',
          company: 'Craft2Give',
          role: 'Back-end Developer',
          bullets: [
            'Built a secure Node.js API leveraging JWT tokens.',
            'Deployed the API stack on Linux servers with Docker.',
            'Containerized the application for streamlined releases.',
          ],
        },
        {
          period: '2024',
          company: 'LearnCyber',
          role: 'Lead Developer',
          bullets: [
            'Raised cyber-security awareness among high school students.',
            'Organized Agile sprints to deliver a showcase website.',
            'Created interactive workshops to animate sessions.',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      softTitle: 'Soft Skills',
      hardTitle: 'Hard Skills',
      soft: [
        { label: 'Change resilience', value: 90, display: '90%' },
        { label: 'Optimization mindset', value: 85, display: '85%' },
        { label: 'Tech storytelling', value: 80, display: '80%' },
      ],
      hard: [
        { label: 'ReactJS / NextJS', value: 75, display: '75%' },
        { label: 'NodeJS', value: 85, display: '85%' },
        { label: 'TailwindCSS', value: 80, display: '80%' },
      ],
    },
    portfolio: {
      title: 'Selected projects',
      cta: 'Open project',
      projects: [
        {
          title: 'Narcisse',
          description: 'Showcase website for a photography agency.',
          image: '/portfolio/project1.png',
          link: 'https://narcisse.vercel.app/',
          alt: 'Narcisse project preview',
        },
        {
          title: 'Craft2Give',
          description: 'Student initiative that raised over €500 for the SPA charity.',
          image: '/portfolio/project2.jfif',
          link: 'https://www.ynov.com/campus/lille/actualites/un-projet-etudiant-carritatif',
          alt: 'Craft2Give project preview',
        },
        {
          title: 'BrightPath',
          description: 'AI-powered career management and professional growth platform.',
          image: '/portfolio/brightpath.png',
          link: 'https://antoineraimand.fr',
          alt: 'BrightPath project preview',
        },
      ],
    },
    extra: {
      title: 'Additional information',
      items: [
        { label: 'Languages', value: 'English B2 - TOEIC 860' },
        {
          label: 'Interests',
          value: 'Strategy video games, Fitness, Tech watch',
        },
      ],
    },
    footer: 'Built with',
    labels: {
      languageToggle: 'Switch language',
      themeToggle: 'Toggle dark mode',
    },
  },
};

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return true;
    }
    return true;
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang') as Language | null;
      if (stored === 'fr' || stored === 'en') {
        return stored;
      }
      return 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = translations[language];
  const flag = language === 'fr' ? '🇫🇷' : '🇬🇧';
  const toggleLanguage = () => setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  const currentYear = new Date().getFullYear();

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        {/* Toggle dark mode */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            aria-label={t.labels.languageToggle}
            className="rounded-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:scale-105 transition flex items-center justify-center text-lg"
            onClick={toggleLanguage}
          >
            <span role="img" aria-label={language === 'fr' ? 'Drapeau français' : 'English flag'}>
              {flag}
            </span>
          </button>
          <button
            aria-label={t.labels.themeToggle}
            className="rounded-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
            onClick={() => setDark(d => !d)}
          >
            {dark ? (
              <span role="img" aria-label="Soleil">🌞</span>
            ) : (
              <span role="img" aria-label="Lune">🌙</span>
            )}
          </button>
        </div>

        {/* Header avec logo React */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-gray-200 dark:border-gray-700 pb-6 mb-6"
        >
          <div className="flex flex-row items-center gap-3 flex-1 justify-center sm:justify-start">
            <motion.span 
              className="inline-flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="4" fill="#61DAFB"/>
                <g stroke="#61DAFB" strokeWidth="2" fill="none">
                  <ellipse rx="16" ry="6.5" cx="20" cy="20"/>
                  <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(60 20 20)"/>
                  <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(120 20 20)"/>
                </g>
              </svg>
            </motion.span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Antoine Raimand</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center sm:text-left">{t.header.tagline}</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.header.location}
            </span>
            <a href="mailto:antoine.raimand@gmail.com" className="hover:underline flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.header.email}
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.header.phone}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              {t.header.license}
            </span>
            <a href="https://github.com/AntoineRai" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.header.githubLabel}
            </a>
            <a href="https://www.linkedin.com/in/antoine-raimand/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {t.header.linkedinLabel}
            </a>
          </div>
        </motion.header>

        {/* Profil */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t.profile.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              {t.profile.text}
            </p>
          </div>
        </motion.section>

        {/* Formations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">{t.education.title}</h2>
            <ul className="space-y-2">
              {t.education.items.map(item => (
                <li key={`${item.period}-${item.description}`}>
                  <span className="font-bold">{item.period}</span> — {item.description}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Expériences */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">{t.experiences.title}</h2>
            <div className="space-y-4">
              {t.experiences.items.map(experience => (
                <div key={`${experience.company}-${experience.period}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-bold">{experience.period}</span>
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200">{experience.role}</div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                    {experience.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Compétences */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-4 tracking-wide text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t.skills.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">{t.skills.softTitle}</h3>
                <ul className="space-y-3">
                  {t.skills.soft.map(skill => (
                    <li className="flex flex-col gap-1" key={skill.label}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{skill.label}</span>
                        <span className="text-xs text-gray-500">{skill.display}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">{t.skills.hardTitle}</h3>
                <ul className="space-y-3">
                  {t.skills.hard.map(skill => (
                    <li className="flex flex-col gap-1" key={skill.label}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{skill.label}</span>
                        <span className="text-xs text-gray-500">{skill.display}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Portfolio */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-4 tracking-wide text-gray-800 dark:text-gray-100">{t.portfolio.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.portfolio.projects.map(project => (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={project.title}>
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center"
                    >
                      {t.portfolio.cta}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Infos complémentaires */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">{t.extra.title}</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
              {t.extra.items.map(item => (
                <li key={item.label}>
                  <span className="font-semibold">{item.label} :</span> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-4 mt-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 px-2">
        <span>
          &copy; {currentYear} Antoine Raimand &middot; {t.footer}{' '}
          <span className="inline-block align-middle">
            <svg width="18" height="18" viewBox="0 0 40 40" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="4" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="2" fill="none">
                <ellipse rx="16" ry="6.5" cx="20" cy="20" />
                <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(60 20 20)" />
                <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(120 20 20)" />
              </g>
            </svg>
          </span>{' '}
          React
        </span>
      </footer>
    </main>
  );
} 
