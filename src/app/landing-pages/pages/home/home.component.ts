import { MainComponent } from './../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  heroContent = {
    title: "Innovons",
    spanText: "Ensemble",
    description: "Chez InfoSys Consulting, nous nous engageons à offrir des solutions technologiques adaptées aux besoins uniques de chaque client. Découvrez comment nous pouvons transformer votre entreprise.",
    buttonText: "En savoir plus",
    buttonLink: "about",
    backgroundImage: ''
  };
  
  servicesContent = {
    title: "Pourquoi choisir InfoSys Consulting ?",
    description: "Nous accompagnons certains des projets les plus complexes dans les secteurs public et privé. Nous nous assurons que les défis d'aujourd'hui sont résolus et que demain est encore plus intelligent grâce à nos solutions technologiques avancées.",
    services: [
      {
        id: 1,
        icon: "assets/img/services/cloud_transformation.webp",
        title: "Cloud computing",
        description: "Nous facilitons la transition vers le cloud en traduisant les besoins technologiques en solutions adaptées.",
        color: "blue",
        delay: 200
      },
      {
        id: 2,
        icon: "assets/img/services/cyber_security.png",
        title: "Cybersécurité",
        description: "Nous protégeons vos données et vos systèmes en intégrant des solutions de sécurité résilientes dans chaque aspect de votre mission.",
        color: "dark-blue",
        delay: 300
      },
      {
        id: 3,
        icon: "assets/img/services/network.png",
        title: "Ingénierie Réseau",
        description: "Nous concevons des réseaux fiables et sécurisés, essentiels pour le bon fonctionnement de votre entreprise.",
        color: "blue",
        delay: 400
      },
      {
        id: 4,
        icon: "assets/img/services/training.png",
        title: "Formation",
        description: "Nos formations professionnelles transforment les ambitions en compétences opérationnelles.",
        color: "dark-blue",
        delay: 500
      },
      {
        id: 5,
        icon: "assets/img/services/web-development.jpg",
        title: "Développement Web",
        description: "Nous créons des logiciels web variés et garantissons une expérience utilisateur optimale.",
        color: "blue",
        delay: 600
      },
      {
        id: 6,
        icon: "assets/img/services/application.jpg",
        title: "Développement d'Applications",
        description: "Nous offrons une gamme de services personnalisés pour le développement d'applications.",
        color: "dark-blue",
        delay: 700
      },
      {
        id: 7,
        icon: "assets/img/services/AI.jpg",
        title: "Intelligence Artificielle",
        description: "Nous proposons des services de conseil en IA et des solutions pour atteindre vos objectifs plus rapidement.",
        color: "blue",
        delay: 800
      }
    ]
  };
  
  aboutContent = {
    title: "À propos de nous",
    description: [
      { 
        text: `
          InfoSys Consulting est une entreprise camerounaise basée aux États-Unis, spécialisée dans la fourniture de solutions technologiques pour répondre à vos besoins spécifiques. Nous offrons des services variés, notamment le développement web, les services cloud, la cybersécurité, la gestion des projets informatiques, et plus encore.
        `
      },
      { 
        text: `
          Notre équipe dévouée travaille avec passion pour trouver les solutions les plus adaptées et garantir des résultats de haute qualité. Que vous ayez besoin d'une solution technologique simple ou d'un projet complexe, InfoSys Consulting dispose des compétences et de l'expérience nécessaires pour vous aider à réussir.
        `
      }
    ],
    imageUrl: "assets/img/about.jpg"
  };
  
  testimonialsContent = {
    title: "Ce que disent nos clients !",
    description: "Nos clients satisfaits",
    testimonials: [
      {
        stars: 5,
        comment: "InfoSys Consulting a transformé notre façon de travailler grâce à leur expertise en cybersécurité et en transformation cloud. Leur équipe est professionnelle et réactive.",
        imageUrl: "assets/img/testimonials/testimonials-1.jpg",
        name: "Jean Dupont",
        position: "Directeur Technique"
      },
      {
        stars: 4,
        comment: "Le développement web réalisé par InfoSys Consulting a dépassé nos attentes. Leur compréhension des besoins et leur approche innovante nous ont permis d'atteindre nos objectifs.",
        imageUrl: "assets/img/testimonials/testimonials-5.jpg",
        name: "Marie Lefebvre",
        position: "Responsable Marketing"
      },
      {
        stars: 5,
        comment: "Les formations proposées par InfoSys Consulting sont excellentes. Elles ont permis à notre équipe de monter en compétence et d'améliorer notre gestion des projets informatiques.",
        imageUrl: "assets/img/testimonials/testimonials-4.jpg",
        name: "Paul Martin",
        position: "Chef de Projet"
      }
    ]
  };  

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }

  getStarsArray(stars: number): number[] {
      return Array(stars).fill(0);
  }
}
