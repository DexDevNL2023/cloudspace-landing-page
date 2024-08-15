import { MainComponent } from './../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  heroContent = {
    title: "Let's Innovate",
    spanText: "Together",
    description: "At InfoSys Consulting, we are committed to providing technology solutions tailored to the unique needs of each client. Discover how we can transform your business.",
    buttonText: "Learn More",
    buttonLink: "about",
    backgroundImage: ''
  };
  servicesContent = {
    title: "Why Choose InfoSys Consulting?",
    description: "We support some of the most complex projects in the public and private sectors. We ensure that today's challenges are solved and that tomorrow is even smarter through our advanced technology solutions.",
    services: [
      {
        id: 1,
        icon: "assets/img/services/cloud_transformation.webp",
        title: "Cloud Computing",
        description: "We facilitate the transition to the cloud by translating technological needs into tailored solutions.",
        color: "blue",
        delay: 200
      },
      {
        id: 2,
        icon: "assets/img/services/cyber_security.png",
        title: "Cybersecurity",
        description: "We protect your data and systems by integrating resilient security solutions into every aspect of your mission.",
        color: "dark-blue",
        delay: 300
      },
      {
        id: 3,
        icon: "assets/img/services/network.png",
        title: "Network Engineering",
        description: "We design reliable and secure networks, essential for the smooth operation of your business.",
        color: "blue",
        delay: 400
      },
      {
        id: 4,
        icon: "assets/img/services/training.png",
        title: "Training",
        description: "Our professional training transforms ambitions into operational skills.",
        color: "dark-blue",
        delay: 500
      },
      {
        id: 5,
        icon: "assets/img/services/web-development.jpg",
        title: "Web Development",
        description: "We create a variety of web software and ensure an optimal user experience.",
        color: "blue",
        delay: 600
      },
      {
        id: 6,
        icon: "assets/img/services/application.jpg",
        title: "Application Development",
        description: "We offer a range of personalized services for application development.",
        color: "dark-blue",
        delay: 700
      },
      {
        id: 7,
        icon: "assets/img/services/AI.jpg",
        title: "Artificial Intelligence",
        description: "We provide AI consulting services and solutions to help you achieve your goals faster.",
        color: "blue",
        delay: 800
      }
    ]
  };
  aboutContent = {
    title: "About Us",
    description: [
      { 
        text: `
          InfoSys Consulting is a company based in the United States, specializing in providing technology solutions to meet your specific needs. We offer a variety of services, including web development, cloud services, cybersecurity, IT project management, and more.
        `
      },
      { 
        text: `
          Our dedicated team works with passion to find the most suitable solutions and ensure high-quality results. Whether you need a simple technology solution or a complex project, InfoSys Consulting has the skills and experience to help you succeed.
        `
      }
    ],
    imageUrl: "assets/img/about.jpg"
  };
  testimonialsContent = {
    title: "What Our Clients Say!",
    description: "Our satisfied clients",
    testimonials: [
      {
        stars: 5,
        comment: "InfoSys Consulting has transformed our way of working through their expertise in cybersecurity and cloud transformation. Their team is professional and responsive.",
        imageUrl: "assets/img/testimonials/testimonials-1.jpg",
        name: "John Doe",
        position: "Technical Director"
      },
      {
        stars: 4,
        comment: "The web development done by InfoSys Consulting exceeded our expectations. Their understanding of our needs and innovative approach allowed us to achieve our goals.",
        imageUrl: "assets/img/testimonials/testimonials-5.jpg",
        name: "Marie Smith",
        position: "Marketing Manager"
      },
      {
        stars: 5,
        comment: "The training provided by InfoSys Consulting is excellent. It has allowed our team to upskill and improve our IT project management.",
        imageUrl: "assets/img/testimonials/testimonials-4.jpg",
        name: "Paul Martin",
        position: "Project Manager"
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
