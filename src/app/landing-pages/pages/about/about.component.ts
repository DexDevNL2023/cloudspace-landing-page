import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { AboutService } from './../../../utilities/services/about.service';
import { Component } from '@angular/core';

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
    title: "Who We Are",
    description: [
      { 
        text: `CloudSpace Consulting is passionate to find the right technology solution for your projects or product development. Understanding the importance of approaching a project with the right resources and tools can bring success for the most complicated project.`
      },
      { 
        text: `We are client focused and result-oriented. We thrive for quality and ensure the best possible results. From small sized technology solution to delivering big projects, CloudSpace Consulting is equipped with the skills and experiences that streamline the process of delivery and outcome.`
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
