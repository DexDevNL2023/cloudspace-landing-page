import { HeroService } from './../../../utilities/services/hero.service';
import { MainComponent } from './../../main/main.component';
import { DataService } from './../../../utilities/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: "InfoSys technology Consulting",
    spanText: "Empowered by Innovation",
    description: "Process efficiency, cost reductions, and increased time to market – for business growth, cloud adoption is a non-negotiable.",
    buttonText: "Get Started",
    buttonLink: "about"
  };
  servicesContent: {
    title: string,
    description: string,
    services: { id: number; icon: string; title: string; description: string; color?: string; delay?: number }[] } = {
    title: "Why CloudSpace?",
    description: "The people supporting some of the most complex government and commercial projects across the country. We ensure today is safe and tomorrow is smarter. Offering the technology transformations, strategy and mission services needed to get the job done. Enough about us. Let’s get to work.",
    services: [
      {
        id: 1,
        icon: "assets/img/services/cloud_transformation.png",
        title: "Cloud Transformation",
        description: "We translate the language of the cloud into the language of the mission.",
        color: "blue",
        delay: 200
      },
      {
        id: 2,
        icon: "assets/img/services/cyber_security.png",
        title: "Cyber Security",
        description: "We secure today, embedding resilient cyber solutions into every aspect of the mission.",
        color: "dark-blue",
        delay: 300
      },
      {
        id: 3,
        icon: "assets/img/services/network.png",
        title: "Networking Engineering",
        description: "We understand the importance of networking and can help you establish a reliable and secure network.",
        color: "blue",
        delay: 400
      },
      {
        id: 4,
        icon: "assets/img/services/training.png",
        title: "Training",
        description: "Our career training turn ambitions into job-ready skills.",
        color: "dark-blue",
        delay: 500
      },
      {
        id: 5,
        icon: "assets/img/services/web-development.jpg",
        title: "Web Development",
        description: "Web development services help create all types of web software and ensure a great experience for web users.",
        color: "blue",
        delay: 600
      },
      {
        id: 6,
        icon: "assets/img/services/application.jpg",
        title: "Application Development",
        description: "We offer a wide range of personalized services in applications",
        color: "dark-blue",
        delay: 700
      },
      {
        id: 7,
        icon: "assets/img/services/AI.jpg",
        title: "Artificial Intelligence",
        description: "We offer AI consulting services and solutions that will help you achieve your business goals faster.",
        color: "blue",
        delay: 800
      },
      {
        id: 8,
        icon: "assets/img/services/manage_services.jpg",
        title: "Managed Services (NOC & SOC)",
        description: "Our experts are well-versed in customer networking and security needs.",
        color: "dark-blue",
        delay: 900
      }
    ]
  };
  aboutContent: { title: string, description: { text: string }[], imageUrl: string } =  {
    title: "About Us",
    description: [
      { 
        text:  `
        InfoSys technology Consulting - Cloud Transformation | Cyber Security | IT Training |  Web & Apps Development | Networking | Artificial Intelligence | NOC & SOC is passionate about finding the right technological solution for your projects
          or product development. Understanding the importance of approaching a project with the appropriate
          resources and tools can ensure the success of even the most complicated project.
        ` 
      },
      { 
        text: `
          We are customer and results focused. We aim for quality and guarantee the best possible results. Whether
          dealing with a small technology solution or delivering large projects, InfoSys technology Consulting has the
          skills and experiences that streamline the delivery process and results.
        `
      }
    ],
    imageUrl: "assets/img/about.jpg"
  };
  testimonialsContent: {
    title: string,
    description: string,
    testimonials: { stars: number; comment: string; imageUrl: string; name: string; position?: string }[] } =  {
    title: "What people say about us!",
    description: "Our Happy Clients",
    testimonials: [
      {
        stars: 3,
        comment: "These guys are true to their commitment. My office has really enjoyed working with CloudSpace Consulting",
        imageUrl: "assets/img/testimonials/testimonials-5.jpg",
        name: "Dr Kelly Johnson"
      },
      {
        stars: 5,
        comment: "As a tech startup, we initially managed all of our office IT in-house. As we grew, we wanted to spend more and more of our time on our technology and product and CloudSpace has allowed us to do that. They've scaled with us and successfully managed the technical portion. They're always prompt and willing to go the extra mile and we're looking forward to continued growth with InfoSys technology Consulting in the future!",
        imageUrl: "assets/img/testimonials/testimonials-1.jpg",
        name: "Zaman Mo",
        position: "Ops Manager WWK"
      },
      {
        stars: 1,
        comment: "It was a pleasure to work with InfoSys technology Consulting engineers. They were able to quickly understand what matters most and get us focused on finding the best solution. The combination of their real-world startup experience and empathetic listening skills make them a truly unique team.",
        imageUrl: "assets/img/testimonials/testimonials-4.jpg",
        name: "Palmer Smith",
        position: "CTO, Frizl"
      }
    ]
  };

  constructor(public appMain: MainComponent, private dataService: DataService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.loadHero();
    this.loadServices();
    this.loadAbout();
    this.loadTestimonials();
  }

  loadHero() {
    this.heroService.getHeroData().subscribe(
      (data) => {
        this.heroContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadServices() {
    this.dataService.getServices().subscribe(
      (data) => {
        this.servicesContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadAbout() {
    this.dataService.getAbout().subscribe(
      (data) => {
        this.aboutContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadTestimonials() {
    this.dataService.getTestimonials().subscribe(
      (data) => {
        this.testimonialsContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getStarsArray(stars: number): number[] {
      return Array(stars).fill(0);
  }
}
