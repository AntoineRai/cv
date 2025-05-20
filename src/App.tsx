import { useState, useEffect } from 'react';

export default function App() {
  // Mode sombre activé par défaut
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return true; // dark par défaut
    }
    return true;
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

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        {/* Toggle dark mode */}
        <div className="flex justify-end mb-4">
          <button
            aria-label="Toggle dark mode"
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
        <header className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          <div className="flex flex-row items-center gap-3 flex-1 justify-center sm:justify-start">
            {/* Logo React SVG */}
            <span className="inline-flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="4" fill="#61DAFB"/>
                <g stroke="#61DAFB" strokeWidth="2" fill="none">
                  <ellipse rx="16" ry="6.5" cx="20" cy="20"/>
                  <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(60 20 20)"/>
                  <ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(120 20 20)"/>
                </g>
              </svg>
            </span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Antoine Raimand</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center sm:text-left">Développeur Web</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span>Lille et alentours</span>
            <a href="mailto:antoine.raimand@gmail.com" className="hover:underline">antoine.raimand@gmail.com</a>
            <span>06 88 08 80 97</span>
            <span>Permis B Véhicule</span>
            <a href="https://github.com/AntoineRai" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/AntoineRai</a>
            <a href="https://www.linkedin.com/in/antoine-raimand/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </header>

        {/* Profil */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">Profil</h2>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              Développeur web polyvalent, passionné par la création d'applications performantes et le travail en équipe. Orienté optimisation et innovation, avec une approche centrée sur l'agilité et la collaboration.
            </p>
          </div>
        </section>

        {/* Formations */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">Formations</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">2023 - 2025</span> — Mastère Informatique spécialité Développement Web, Lille Ynov Campus
              </li>
              <li>
                <span className="font-bold">2022 - 2023</span> — Bachelor Informatique Administrateur Système et Réseaux, Lille Ynov Campus
              </li>
              <li>
                <span className="font-bold">2020 - 2022</span> — DUT Informatique, IUT de Maubeuge
              </li>
            </ul>
          </div>
        </section>

        {/* Expériences */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">Expériences</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-bold">07/2021 - 09/2025</span>
                  <span className="font-semibold">Cap Habitat</span>
                </div>
                <div className="font-semibold text-gray-700 dark:text-gray-200">Responsable du pôle informatique</div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>Gestion des différents sites internet de la société.</li>
                  <li>Réalisation de scripts d'automatisation avec Apps Script.</li>
                  <li>Création d'une application mobile Flutter pour un motel.</li>
                  <li>Maintenance d'un serveur Windows avec gestion des sauvegardes, du VPN et des licences Remote Desktop.</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-bold">2025</span>
                  <span className="font-semibold">YTechUnion</span>
                </div>
                <div className="font-semibold text-gray-700 dark:text-gray-200">DevOps Web</div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>Réalisation de sites pour divers projets étudiants.</li>
                  <li>Utilisation de la méthode Agile pour la gestion de projets.</li>
                  <li>Intégration de pipelines CI/CD pour automatiser les déploiements.</li>
                  <li>Communication efficace avec les clients sur les aspects techniques.</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-bold">2024</span>
                  <span className="font-semibold">Craft2Give</span>
                </div>
                <div className="font-semibold text-gray-700 dark:text-gray-200">Développeur Back-end</div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>Réalisation d'une API Node.js sécurisée avec des tokens JWT.</li>
                  <li>Déploiement d'un socle API sur serveur Linux avec Docker.</li>
                  <li>Containerisation de l'application pour un déploiement simplifié via Docker.</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-bold">2024</span>
                  <span className="font-semibold">LearnCyber</span>
                </div>
                <div className="font-semibold text-gray-700 dark:text-gray-200">Responsable de l'équipe des développeurs</div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>Sensibilisation à la cybersécurité auprès des collègues.</li>
                  <li>Mise en place de sprints Agile pour la réalisation d'un site vitrine.</li>
                  <li>Création d'ateliers interactifs pour animer les interventions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">Compétences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Soft Skills</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>Résilience au changement</li>
                  <li>Esprit d'optimisation continue</li>
                  <li>Vulgarisation</li>
                  <li>Communication interdisciplinaire</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Hard Skills</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
                  <li>ReactJS / NextJS</li>
                  <li>NodeJS</li>
                  <li>TailwindCSS</li>
                  <li>AWS</li>
                  <li>GitHub Actions</li>
                  <li>Gestion de projet Agile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infos complémentaires */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 border border-gray-100 dark:border-gray-700 max-w-md mx-auto sm:max-w-full">
            <h2 className="text-xl font-semibold mb-2 tracking-wide text-gray-800 dark:text-gray-100">Informations complémentaires</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm ml-2">
              <li><span className="font-semibold">Langues :</span> Anglais B2 - 860 TOEIC</li>
              <li><span className="font-semibold">Centres d'intérêts :</span> Jeux vidéo de stratégie, Musculation, Veille technologique</li>
              <li><span className="font-semibold">Projets personnels :</span> <a href="https://antoineraimand.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200">antoineraimand.fr</a></li>
            </ul>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-4 mt-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 px-2">
        <span>&copy; {new Date().getFullYear()} Antoine Raimand &middot; Fait avec <span className="inline-block align-middle"><svg width="18" height="18" viewBox="0 0 40 40" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="4" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2" fill="none"><ellipse rx="16" ry="6.5" cx="20" cy="20"/><ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(60 20 20)"/><ellipse rx="16" ry="6.5" cx="20" cy="20" transform="rotate(120 20 20)"/></g></svg></span> React</span>
      </footer>
    </main>
  );
} 