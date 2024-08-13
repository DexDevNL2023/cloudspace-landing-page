import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent {

  heroContent = {
    title: "Rejoignez",
    spanText: "notre équipe",
    description: "Découvrez les opportunités de carrière chez InfoSys Consulting. Nous sommes à la recherche de talents passionnés pour nous aider à transformer le futur de la technologie. Explorez nos offres d'emploi et postulez pour rejoindre notre équipe innovante.",
    buttonText: "Voir les Offres",
    buttonLink: "careers",
    backgroundImage: 'assets/img/banners/banner-carrer.jpg'
  };  
  
  careerContent = [
    {
      title: "Ingénieur DevOps",
      description: "Ce poste, sous la responsabilité du Directeur Technique (CTO), travaillera avec notre CTO et les leaders d'équipe de développement sur des projets et des pratiques DevOps.",
      location: "100% Télétravail",
      responsibilities: [
        "Concevoir, mettre en œuvre et tester les processus de construction, de déploiement et de gestion de configuration de CloudSpace.",
        "Construire et tester des outils d'automatisation pour la fourniture d'infrastructure.",
        "Gérer les déploiements de code dans tous les environnements.",
        "Surveiller les indicateurs et développer des moyens d'améliorer.",
        "Construire, maintenir et surveiller les normes de configuration.",
        "Assurer la gestion quotidienne et l'administration des projets.",
        "Construire et maintenir l'infrastructure de surveillance et de journalisation des applications.",
        "Améliorer le développement de l'infrastructure et des applications.",
        "Gérer les outils CI et CD avec l'équipe.",
        "Documenter, concevoir et mettre à jour divers processus et pratiques de développement."
      ],
      qualifications: [
        "Diplôme technique de 4 ans ou expérience équivalente.",
        "2 ans d'expérience préalable en tant qu'ingénieur DevOps.",
        "Expérience pratique avec des outils de gestion de configuration et de déploiement d'applications comme Ansible.",
        "Familiarité avec Docker, Kubernetes, Prometheus, Grafana et AWS.",
        "Compétences en communication et souci du détail."
      ]
    },
    {
      title: "Ingénieur en Sécurité Cybernétique",
      description: "InfoSys Consulting recherche un Ingénieur en Sécurité Cybernétique (Support à l'Infrastructure de Défense Cybernétique) pour notre site client à Washington, DC.",
      location: "Washington, DC",
      responsibilities: [
        "Concevoir, développer, intégrer, mettre en œuvre, exploiter et analyser des technologies de sécurité cybernétique.",
        "Fournir un support pour garantir que les produits et services respectent toutes les politiques/procédures d'Assurance de l'Information, les exigences de défense réseau et les meilleures pratiques.",
        "Assurer le soutien aux activités de protection et aux actions de réponse pour les systèmes d'Information Technologique gouvernementaux."
      ],
      qualifications: [
        "BS/BA et 8+ années d'expérience dans la discipline CND ou un MA/MS avec 6+ années d'expérience pertinente. Un candidat sans diplôme avec 12+ années d'expérience pertinente peut également être considéré.",
        "6+ années d'expérience dans la conception, le développement, l'intégration, la mise en œuvre, l'exploitation et l'analyse des technologies de sécurité cybernétique.",
        "Certifications préférées : CISSP, GCIA, CEH, CNDA, GCIH ou CSIH.",
        "Connaissance préalable de Splunk, des audits et des technologies cloud fortement souhaitée."
      ]
    },
    {
      title: "Ingénieur Réseau Cloud",
      description: "Le rôle d'Ingénieur Cloud/Infrastructure est d'aider le client à maintenir l'infrastructure réseau et cloud actuelle.",
      location: "Télétravail avec jusqu'à 25% de déplacements chez les clients autour de la région de Washington DC.",
      responsibilities: [
        "Interagir avec les clients, les fournisseurs et le personnel technique pour analyser les besoins commerciaux et techniques relatifs à l'infrastructure réseau et cloud.",
        "Configurer, tester et produire des documents détaillés de déploiement dans les délais impartis.",
        "Travailler en étroite collaboration avec le Chef de Projet pour établir et fournir une direction technique cohérente, collecter et analyser les indicateurs de performance, établir et faire respecter les accords de niveau de service.",
        "Documenter les normes et propositions d'ingénierie, diriger ou assister dans le développement des conceptions d'architecture/ingénierie de sécurité, des modifications et de la gestion de configuration.",
        "Compétences interpersonnelles et service client solides en plus de la capacité à gérer et prioriser efficacement les projets et tâches individuels. Compétences supérieures en communication écrite et orale. Compétences en gestion des fournisseurs requises."
      ],
      qualifications: [
        "5+ années d'expérience en opérations réseau à grande échelle ; Routeurs, Switches et Équilibreurs de Charge.",
        "2+ années d'expérience opérationnelle pratique avec Amazon Web Services (AWS). Certification AWS fortement recommandée.",
        "Diplôme en informatique ou expérience professionnelle équivalente, avec un minimum de 8-10 années d'expérience pratique dans la mise en œuvre et l'administration de réseaux complexes, multi-sites et multi-fournisseurs dans un environnement géographiquement distribué.",
        "Expérience opérationnelle AWS : 2 ans (Requis).",
        "Certifications souhaitées : CCNP, ITIL, AWS Certified Cloud Practitioner, AWS Certified Solutions Architect Associate."
      ]
    },
    {
      title: "Développeur Frontend",
      description: "Nous recherchons un Développeur Frontend talentueux pour rejoindre notre équipe de développement. Vous travaillerez sur des projets passionnants, en utilisant les technologies web modernes pour créer des interfaces utilisateur attrayantes et fonctionnelles.",
      location: "Télétravail avec possibilité de présence au bureau selon les besoins.",
      responsibilities: [
        "Développer des applications web interactives et responsives en utilisant HTML, CSS, et JavaScript.",
        "Collaborer avec les concepteurs UX/UI pour traduire les maquettes en interfaces fonctionnelles.",
        "Assurer la compatibilité des applications avec différents navigateurs et appareils.",
        "Participer aux revues de code et à l'amélioration continue des processus de développement.",
        "Déboguer et optimiser les performances des applications web."
      ],
      qualifications: [
        "Diplôme en informatique ou expérience équivalente.",
        "2+ années d'expérience en développement frontend.",
        "Maîtrise des technologies web telles que HTML, CSS, JavaScript, et frameworks modernes comme React ou Angular.",
        "Expérience avec les outils de gestion de version comme Git.",
        "Compétences en résolution de problèmes et en communication."
      ]
    },
    {
      title: "Chef de Projet Informatique",
      description: "Nous recherchons un Chef de Projet Informatique pour superviser la gestion et l'exécution de projets technologiques complexes. Vous serez responsable de la coordination des équipes, du suivi des délais et du budget, et de la communication avec les parties prenantes.",
      location: "Washington, DC",
      responsibilities: [
        "Gérer et coordonner tous les aspects des projets informatiques du début à la fin.",
        "Développer des plans de projet détaillés et des échéanciers.",
        "Assurer le suivi des budgets et des ressources.",
        "Communiquer régulièrement avec les parties prenantes pour assurer l'alignement sur les objectifs du projet.",
        "Évaluer les risques et développer des plans d'atténuation."
      ],
      qualifications: [
        "Diplôme en gestion de projet ou domaine connexe.",
        "5+ années d'expérience en gestion de projets informatiques.",
        "Certification PMP ou similaire est un plus.",
        "Expérience avec les méthodologies Agile et Scrum.",
        "Compétences organisationnelles et en communication exceptionnelles."
      ]
    },
    {
      title: "Analyste en Intelligence Artificielle",
      description: "Nous recherchons un Analyste en Intelligence Artificielle pour développer des modèles d'IA et fournir des insights basés sur les données. Vous travaillerez avec nos équipes pour concevoir et mettre en œuvre des solutions d'IA innovantes.",
      location: "100% Télétravail",
      responsibilities: [
        "Développer et tester des modèles d'IA et de machine learning.",
        "Analyser de grandes quantités de données pour extraire des insights pertinents.",
        "Collaborer avec les équipes de développement pour intégrer les solutions d'IA dans les produits existants.",
        "Assurer la qualité et l'efficacité des modèles d'IA.",
        "Rester à jour avec les dernières avancées en matière d'IA et de machine learning."
      ],
      qualifications: [
        "Diplôme en informatique, mathématiques ou domaine connexe.",
        "3+ années d'expérience en développement de modèles d'IA et de machine learning.",
        "Expérience avec des outils et frameworks d'IA comme TensorFlow, PyTorch ou scikit-learn.",
        "Compétences en analyse de données et en programmation en Python.",
        "Excellentes compétences en résolution de problèmes et en communication."
      ]
    }
  ];
  
  avatars = [
    'assets/img/blocks/avatars/avatar-f-1.png',
    'assets/img/blocks/avatars/avatar-f-2.png',
    'assets/img/blocks/avatars/avatar-m-1.png',
    'assets/img/blocks/avatars/avatar-m-2.png',
    'assets/img/blocks/avatars/avatar-f-3.png'
  ];

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }
}
