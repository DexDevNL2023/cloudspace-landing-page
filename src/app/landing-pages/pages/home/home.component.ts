import { MainComponent } from './../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  heroContent = {
    title: 'HOME.HERO.TITLE',
    spanText: 'HOME.HERO.SPAN_TEXT',
    description: 'HOME.HERO.DESCRIPTION',
    buttonText: 'HOME.HERO.BUTTON_TEXT',
    buttonLink: 'about',
    backgroundImage: ''
  };

  servicesContent = {
    title: 'HOME.SERVICES.TITLE',
    description: 'HOME.SERVICES.DESCRIPTION',
    services: [
      {
        id: 1,
        icon: 'assets/img/services/cloud_transformation.webp',
        title: 'HOME.SERVICES.CLOUD_COMPUTING.TITLE',
        description: 'HOME.SERVICES.CLOUD_COMPUTING.DESCRIPTION',
        color: 'blue',
        delay: 200
      },
      {
        id: 2,
        icon: 'assets/img/services/cyber_security.png',
        title: 'HOME.SERVICES.CYBER_SECURITY.TITLE',
        description: 'HOME.SERVICES.CYBER_SECURITY.DESCRIPTION',
        color: 'dark-blue',
        delay: 300
      },
      {
        id: 3,
        icon: 'assets/img/services/network.png',
        title: 'HOME.SERVICES.NETWORK_ENGINEERING.TITLE',
        description: 'HOME.SERVICES.NETWORK_ENGINEERING.DESCRIPTION',
        color: 'blue',
        delay: 400
      },
      {
        id: 4,
        icon: 'assets/img/services/training.png',
        title: 'HOME.SERVICES.TRAINING.TITLE',
        description: 'HOME.SERVICES.TRAINING.DESCRIPTION',
        color: 'dark-blue',
        delay: 500
      },
      {
        id: 5,
        icon: 'assets/img/services/web-development.jpg',
        title: 'HOME.SERVICES.WEB_DEVELOPMENT.TITLE',
        description: 'HOME.SERVICES.WEB_DEVELOPMENT.DESCRIPTION',
        color: 'blue',
        delay: 600
      },
      {
        id: 6,
        icon: 'assets/img/services/application.jpg',
        title: 'HOME.SERVICES.APPLICATION_DEVELOPMENT.TITLE',
        description: 'HOME.SERVICES.APPLICATION_DEVELOPMENT.DESCRIPTION',
        color: 'dark-blue',
        delay: 700
      },
      {
        id: 7,
        icon: 'assets/img/services/AI.jpg',
        title: 'HOME.SERVICES.AI.TITLE',
        description: 'HOME.SERVICES.AI.DESCRIPTION',
        color: 'blue',
        delay: 800
      }
    ]
  };

  aboutContent = {
    title: 'HOME.ABOUT.TITLE',
    description: [
      { text: 'HOME.ABOUT.DESCRIPTION.P1' },
      { text: 'HOME.ABOUT.DESCRIPTION.P2' }
    ],
    imageUrl: 'assets/img/about.jpg'
  };

  testimonialsContent = {
    title: 'HOME.TESTIMONIALS.TITLE',
    description: 'HOME.TESTIMONIALS.DESCRIPTION',
    testimonials: [
      {
        stars: 5,
        comment: 'HOME.TESTIMONIALS.TESTIMONIAL_1.COMMENT',
        imageUrl: 'assets/img/testimonials/testimonials-1.jpg',
        name: 'HOME.TESTIMONIALS.TESTIMONIAL_1.NAME',
        position: 'HOME.TESTIMONIALS.TESTIMONIAL_1.POSITION'
      },
      {
        stars: 4,
        comment: 'HOME.TESTIMONIALS.TESTIMONIAL_2.COMMENT',
        imageUrl: 'assets/img/testimonials/testimonials-5.jpg',
        name: 'HOME.TESTIMONIALS.TESTIMONIAL_2.NAME',
        position: 'HOME.TESTIMONIALS.TESTIMONIAL_2.POSITION'
      },
      {
        stars: 5,
        comment: 'HOME.TESTIMONIALS.TESTIMONIAL_3.COMMENT',
        imageUrl: 'assets/img/testimonials/testimonials-4.jpg',
        name: 'HOME.TESTIMONIALS.TESTIMONIAL_3.NAME',
        position: 'HOME.TESTIMONIALS.TESTIMONIAL_3.POSITION'
      }
    ]
  };

  constructor(public appMain: MainComponent, private translate: TranslateService) { }

  ngOnInit(): void {
    AOS.init();
  }

  getStarsArray(stars: number): number[] {
      return Array(stars).fill(0);
  }
}
