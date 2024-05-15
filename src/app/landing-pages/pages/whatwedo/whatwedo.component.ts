import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import { WhatwedoService } from '../../../utilities/services/whatwedo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: "What we",
    spanText: "do"
  };
  whatwedoContent: { title: string, description: { text: string }[], imageUrl: string, sections: { title: string, description: string, subSections: { imgSrc: string, title: string, description?: string }[] }[] } = { 
    title: "What web solution do you need?", 
    description: [
      { 
        text: `Web development services help create all types of web software and ensure a great experience for web users.`
      },
      { 
        text: `Different types of web solutions may seem similar from the outside, but we approach them differently and know what the winning factors are in each case.`
      }
    ],
    imageUrl: "assets/img/services/main.jpg",
    sections: [
        {
            title: "Technology",
            description: "We design systems that deliver increased speed, savings and security. From FISMA and FedRAMP to the Department of Defense Impact Levels, we have the experience customers require.",
            subSections: [
                { imgSrc: "assets/img/services/cloud_transformation1.png", title: "Cloud Automation" },
                { imgSrc: "assets/img/services/cyber_security.png", title: "Cyber" },
                { imgSrc: "assets/img/services/cloudarchictect.jpg", title: "Cloud Architecture" }
            ]
        },
        {
            title: "Services",
            description: "We work with our customers to determine the optimal cloud model best suited for their immediate needs and for their long-term cloud operations. Our partnership approach helps agencies to better anticipate requirements, streamline costs and incorporate best-practice maintenance services.",
            subSections: [
                { imgSrc: "assets/img/services/cloudoperation.jpg", title: "Cloud Operations" },
                { imgSrc: "assets/img/services/cloudmanagment.jpg", title: "Cloud Management" },
                { imgSrc: "assets/img/services/migration.jpg", title: "Cloud Migration" },
                { imgSrc: "assets/img/services/strategy.jpg", title: "Cloud Strategy" }
            ]
        },
        {
            title: "Partners",
            description: "We offer our customers the power of choice through a vast cloud ecosystem of cloud service providers and cloud partners. Our cloud alliances include emerging companies to bring the latest technologies to overcome our customers’ biggest challenges.",
            subSections: [
                { imgSrc: "assets/img/services/allience.jpg", title: "Cloud Alliances" },
                { imgSrc: "assets/img/services/brokage.jpg", title: "Cloud Brokerage" },
                { imgSrc: "assets/img/services/training.jpg", title: "Cloud Training" }
            ]
        }
    ]
  };
  whatwedoId: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute, private whatwedoService: WhatwedoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.whatwedoId = +params.get("id");
        this.loadWhatwedos();
    });
  }

  loadWhatwedos() {
    this.whatwedoService.getWhatwedoById(this.whatwedoId).subscribe(
      (data) => {
        this.whatwedoContent = data;
      },
      (error) => {
        console.error("Error fetching contact data:", error);
      }
    );
    console.log(this.whatwedoContent);
  }
}
