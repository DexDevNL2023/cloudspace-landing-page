import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {
  heroContent = {
    title: "Nos Services",
    spanText: "de qualité",
    description: "Découvrez comment nos services peuvent transformer votre entreprise. Nous nous engageons à fournir des solutions innovantes et adaptées à vos besoins spécifiques.",
    buttonText: "En savoir plus",
    buttonLink: "/services",
    backgroundImage: ''
  };

  whatwedoContents = [
    {
      id: 1,
      title: "Que peut faire l'informatique en nuage pour vous ?",
      description: [
        {
          text: `Nos services d'informatique en nuage aident les entreprises à passer sans heurts aux plateformes cloud, garantissant évolutivité et efficacité.`
        },
        {
          text: `De la stratégie cloud au déploiement, nous personnalisons des solutions qui s'alignent sur vos objectifs commerciaux et vos besoins en matière de sécurité.`
        }
      ],
      imageUrl: "assets/img/services/cloud_transformation.webp",
      sections: [
        {
          title: "Technologie",
          description: "Nous exploitons des technologies cloud avancées pour améliorer la vitesse, la sécurité et l'efficacité de votre infrastructure.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_architecture.webp", title: "Architecture Cloud", description: "Conception d'infrastructures cloud robustes et évolutives.", color: "blue" },
            { imgSrc: "assets/img/services/cloud_automation.png", title: "Automatisation Cloud", description: "Automatisation des processus cloud pour améliorer l'efficacité.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Nos services cloud couvrent tout, de la stratégie initiale à la gestion et à l'optimisation continues.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_migration.jpg", title: "Migration Cloud", description: "Migration transparente de données et d'applications vers le cloud.", color: "blue" },
            { imgSrc: "assets/img/services/cloud_management.jpg", title: "Gestion du Cloud", description: "Gestion complète des environnements cloud.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Nous collaborons avec des fournisseurs de services cloud leaders pour offrir les meilleures solutions adaptées à vos besoins.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_partners.webp", title: "Partenariats Cloud", description: "Exploiter les partenariats pour des solutions cloud améliorées.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Comment protégeons-nous vos données avec la cybersécurité ?",
      description: [
        {
          text: `Nos services de cybersécurité protègent votre entreprise avec des solutions de sécurité de pointe conçues pour se défendre contre les menaces évolutives.`
        },
        {
          text: `Nous intégrons des mesures de sécurité dans tous les aspects de votre entreprise pour garantir une protection robuste.`
        }
      ],
      imageUrl: "assets/img/services/cyber_security.png",
      sections: [
        {
          title: "Technologie",
          description: "Nos technologies de sécurité protègent vos actifs numériques contre une variété de menaces.",
          subSections: [
            { imgSrc: "assets/img/services/security_architecture.png", title: "Architecture de Sécurité", description: "Conception de systèmes et de réseaux sécurisés.", color: "blue" },
            { imgSrc: "assets/img/services/threat_detection.png", title: "Détection des Menaces", description: "Identifier et neutraliser rapidement les menaces.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Nous fournissons une gamme de services de cybersécurité pour protéger votre organisation à tous les niveaux.",
          subSections: [
            { imgSrc: "assets/img/services/incident_response.png", title: "Réponse aux Incidents", description: "Réponse rapide aux violations de sécurité.", color: "blue" },
            { imgSrc: "assets/img/services/security_assessment.png", title: "Évaluation de la Sécurité", description: "Évaluation complète de la posture de sécurité.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Collaborer avec des fournisseurs de sécurité de premier plan pour renforcer vos défenses.",
          subSections: [
            { imgSrc: "assets/img/services/security_partners.png", title: "Partenaires de Sécurité", description: "Exploiter les partenariats pour des solutions de sécurité améliorées.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Ingénierie le futur des solutions réseau",
      description: [
        {
          text: `Nos services d'ingénierie réseau garantissent que votre entreprise dispose d'une infrastructure fiable et sécurisée qui soutient la croissance et l'innovation.`
        },
        {
          text: `Nous concevons et mettons en œuvre des solutions réseau qui maximisent les performances et la disponibilité.`
        }
      ],
      imageUrl: "assets/img/services/network.png",
      sections: [
        {
          title: "Technologie",
          description: "Nous utilisons des technologies réseau de pointe pour offrir une connectivité fiable et sécurisée.",
          subSections: [
            { imgSrc: "assets/img/services/network_design.png", title: "Conception Réseau", description: "Création d'architectures réseau efficaces.", color: "blue" },
            { imgSrc: "assets/img/services/network_security.png", title: "Sécurité Réseau", description: "Protéger les réseaux contre les accès non autorisés.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Nos services réseau englobent la conception, le déploiement et la gestion pour assurer des performances optimales.",
          subSections: [
            { imgSrc: "assets/img/services/network_management.png", title: "Gestion du Réseau", description: "Gestion et surveillance des performances du réseau.", color: "blue" },
            { imgSrc: "assets/img/services/network_optimization.png", title: "Optimisation du Réseau", description: "Amélioration de l'efficacité et de la vitesse du réseau.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Nous collaborons avec des fournisseurs de technologie réseau de premier plan pour offrir les meilleures solutions.",
          subSections: [
            { imgSrc: "assets/img/services/network_partners.png", title: "Partenariats Réseau", description: "Établir des partenariats solides pour des solutions réseau supérieures.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Transformez vos compétences avec nos programmes de formation",
      description: [
        {
          text: `Nos services de formation sont conçus pour doter votre équipe des compétences dont elle a besoin pour exceller dans l'environnement concurrentiel d'aujourd'hui.`
        },
        {
          text: `Nous proposons des programmes de formation sur mesure qui comblent le fossé entre les compétences actuelles et les besoins futurs.`
        }
      ],
      imageUrl: "assets/img/services/training.png",
      sections: [
        {
          title: "Technologie",
          description: "Nos programmes de formation couvrent un large éventail de sujets technologiques pour améliorer les capacités de votre équipe.",
          subSections: [
            { imgSrc: "assets/img/services/tech_training.png", title: "Formation Tech", description: "Formation à jour sur les dernières technologies.", color: "blue" },
            { imgSrc: "assets/img/services/soft_skills.png", title: "Compétences Douces", description: "Développement de compétences interpersonnelles essentielles.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Nous proposons une suite complète de services de formation pour répondre aux besoins de votre organisation.",
          subSections: [
            { imgSrc: "assets/img/services/corporate_training.png", title: "Formation en Entreprise", description: "Formation sur mesure pour les équipes d'entreprise.", color: "blue" },
            { imgSrc: "assets/img/services/individual_training.png", title: "Formation Individuelle", description: "Programmes de formation personnalisés pour les individus.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Collaborer avec des leaders de l'industrie pour offrir des solutions de formation à la pointe de la technologie.",
          subSections: [
            { imgSrc: "assets/img/services/training_partners.png", title: "Partenaires de Formation", description: "S'associer à des experts pour offrir une formation de premier ordre.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Développement web adapté à votre entreprise",
      description: [
        {
          text: `Nos services de développement web fournissent aux entreprises des solutions web innovantes et robustes qui améliorent l'expérience utilisateur et l'engagement.`
        },
        {
          text: `Nous adaptons chaque projet pour répondre aux besoins uniques de nos clients, en assurant une fonctionnalité et une esthétique optimales.`
        }
      ],
      imageUrl: "assets/img/services/web-development.jpg",
      sections: [
        {
          title: "Technologie",
          description: "Utiliser les dernières technologies web pour construire des applications web performantes et sécurisées.",
          subSections: [
            { imgSrc: "assets/img/services/frontend_development.png", title: "Développement Frontend", description: "Création d'interfaces utilisateur engageantes.", color: "blue" },
            { imgSrc: "assets/img/services/backend_development.png", title: "Développement Backend", description: "Construction de systèmes backend robustes.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Nos services de développement web englobent la conception, le développement et l'optimisation pour des performances maximales.",
          subSections: [
            { imgSrc: "assets/img/services/web_design.png", title: "Conception Web", description: "Création de designs web modernes et attrayants.", color: "blue" },
            { imgSrc: "assets/img/services/ecommerce.png", title: "E-commerce", description: "Développement de plateformes e-commerce performantes.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Collaboration avec des leaders technologiques pour offrir des solutions web avancées.",
          subSections: [
            { imgSrc: "assets/img/services/web_partners.png", title: "Partenaires Web", description: "Travailler avec des partenaires de premier plan pour des solutions web de qualité.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Développement d'Applications",
      description: [
        {
          text: `Nous offrons une gamme complète de services personnalisés pour le développement d'applications, allant de la conception à la mise en œuvre et à la maintenance.`
        },
        {
          text: `Nos solutions sont adaptées à vos besoins spécifiques pour garantir que vos applications répondent parfaitement à vos exigences et offrent une expérience utilisateur optimale.`
        }
      ],
      imageUrl: "assets/img/services/application.jpg",
      sections: [
        {
          title: "Technologie",
          description: "Utilisation des dernières technologies pour créer des applications innovantes et performantes.",
          subSections: [
            { imgSrc: "assets/img/services/mobile_development.png", title: "Développement Mobile", description: "Création d'applications mobiles pour iOS et Android.", color: "blue" },
            { imgSrc: "assets/img/services/web_application.png", title: "Applications Web", description: "Développement d'applications web robustes et interactives.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Des services complets pour répondre à tous vos besoins en développement d'applications.",
          subSections: [
            { imgSrc: "assets/img/services/app_design.png", title: "Conception d'Applications", description: "Conception intuitive et élégante pour une expérience utilisateur optimale.", color: "blue" },
            { imgSrc: "assets/img/services/app_maintenance.png", title: "Maintenance d'Applications", description: "Support et mise à jour continue pour garantir la performance de vos applications.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Nous collaborons avec des experts pour offrir des solutions d'application de premier ordre.",
          subSections: [
            { imgSrc: "assets/img/services/app_partners.png", title: "Partenariats en Développement", description: "Exploiter les partenariats pour des solutions d'application améliorées.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Intelligence Artificielle",
      description: [
        {
          text: `Nous proposons des services de conseil en intelligence artificielle (IA) pour vous aider à intégrer des solutions IA qui boostent l'efficacité et innovent vos processus métiers.`
        },
        {
          text: `Nos services comprennent la mise en œuvre d'algorithmes d'apprentissage automatique, d'analytique avancée et d'autres technologies IA pour vous aider à atteindre vos objectifs plus rapidement.`
        }
      ],
      imageUrl: "assets/img/services/AI.jpg",
      sections: [
        {
          title: "Technologie",
          description: "Mise en œuvre des dernières avancées en intelligence artificielle pour transformer vos processus d'affaires.",
          subSections: [
            { imgSrc: "assets/img/services/machine_learning.png", title: "Apprentissage Automatique", description: "Développement de modèles d'apprentissage automatique personnalisés.", color: "blue" },
            { imgSrc: "assets/img/services/natural_language_processing.png", title: "Traitement du Langage Naturel", description: "Solutions pour comprendre et traiter le langage humain.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Des solutions IA sur mesure pour répondre à vos besoins spécifiques.",
          subSections: [
            { imgSrc: "assets/img/services/ai_consulting.png", title: "Conseil en IA", description: "Conseil pour l'intégration et l'optimisation des technologies IA.", color: "blue" },
            { imgSrc: "assets/img/services/ai_integration.png", title: "Intégration de l'IA", description: "Intégration des solutions IA dans vos systèmes existants.", color: "dark-blue" }
          ]
        },
        {
          title: "Partenaires",
          description: "Collaboration avec des leaders de l'industrie pour offrir des solutions IA de pointe.",
          subSections: [
            { imgSrc: "assets/img/services/ai_partners.png", title: "Partenariats en IA", description: "Partenariats avec des experts en IA pour des solutions innovantes.", color: "dark-blue" }
          ]
        }
      ]
    }
  ];

  whatwedoContent: any; // This will hold the specific content to display
  whatwedoId: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    this.route.paramMap.subscribe(params => {
        this.whatwedoId = +params.get("id");
        switch (this.whatwedoId) {
          case 1:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-cloud.webp';
            break;
          case 2:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-secure.jpg';
            break;
          case 3:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-training.jpg';
            break;
          case 4:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-networks.jpg';
            break;
          case 5:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-web.jpg';
            break;
          case 6:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-mobile.jpg';
            break;
          case 7:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-iai.jpg';
            break;
          default:
            this.heroContent.backgroundImage = '';
            break;
        }
        this.loadWhatwedos();
    });
  }
 
  loadWhatwedos() {
    // Trouver le contenu basé sur l'id
    this.whatwedoContent = this.whatwedoContents.find(content => content.id === this.whatwedoId);
    
    // Assurez-vous que whatwedoContent est défini
    if (!this.whatwedoContent) {
      console.error("Content not found for id:", this.whatwedoId);
    }
    console.log(this.whatwedoContent);
  }
}
