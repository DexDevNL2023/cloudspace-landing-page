import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { AboutService } from './../../../utilities/services/about.service';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: "About",
    spanText: "Us"
  };
  aboutContent: { title: string, description:  { text: string }[], imageUrl: string } =  {
    title: "Our vision",
    description: [
      { 
        text: `infoSys Consulting is based on the search for the most suitable technological solution for your projects or development of innovative solutions. Understanding the importance of approaching a project with the appropriate resources and tools can ensure the success of even the most complicated project.`
      },
      { 
        text: `The customer is the center of our thinking and this leads us towards results adapted to the needs of our customers. We manage value for money. Whether the project is less, fairly or more complex, our team has the necessary resources to produce a result that meets your expectations.`
      }
    ],
    imageUrl: "assets/img/about.jpg"
  };
  aboutId: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute, private aboutService: AboutService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.aboutId = +params.get('id');
        console.log(this.aboutId);
        this.loadAbouts();
    });
    AOS.init();
  }

  loadAbouts() {
    this.aboutService.getAboutById(this.aboutId).subscribe(
      (data) => {
        this.aboutContent = data;
      },
      (error) => {
        console.error("Error fetching contact data:", error);
      }
    );
    console.log(this.aboutContent);
  }
}
