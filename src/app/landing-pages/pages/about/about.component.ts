import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  heroContent = { 
    title: "About",
    spanText: "Us",
    backgroundImage: 'assets/img/banners/banner-about.jpg'
  };
aboutContent = {
    title: "Our Vision",
    description: [
        { 
            text: `InfoSys Consulting is a company based in the United States, specializing in providing innovative technological solutions to help our clients achieve their goals. We take pride in our roots and our commitment to delivering high-quality services tailored to the unique needs of each client.`
        },
        { 
            text: `Our expertise spans several key areas: web development, cloud services, network and security, as well as IT project management. Whether you are a small business looking to establish your online presence or a large organization in need of a secure cloud infrastructure, we have the skills and experience to support you.`
        },
        { 
            text: `At InfoSys Consulting, we strive to stay at the forefront of technology to deliver sustainable and innovative solutions. Our dedicated team works closely with you to ensure that every project is completed successfully, on time, and within budget.`
        }
    ],
    imageUrl: "assets/img/banners/infosys-consulting-offices-timisoara-1.jpg"
  };
  aboutId: number;

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }
}
