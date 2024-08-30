import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  heroContent = { 
    title: 'ABOUT.HERO.TITLE',
    spanText: 'ABOUT.HERO.SPAN_TEXT',
    backgroundImage: 'assets/img/banners/banner-about.jpg'
  };
aboutContent = {
    title: 'ABOUT.TITLE',
    description: [],
    imageUrl: "assets/img/banners/infosys-consulting-offices-timisoara-1.jpg"
  };
  aboutId: string | null = null;

  constructor(public appMain: MainComponent, private route: ActivatedRoute, private translate: TranslateService) {
    this.translate.get('ABOUT.DESCRIPTION').subscribe((texts: string[]) => {
      this.aboutContent.description = texts.map(text => ({ text }));
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.aboutId = params.get('id');
        console.log(this.aboutId);
    });
    AOS.init();

    // Listen to language changes
    this.translate.onLangChange.subscribe(() => {
      this.translate.get('ABOUT.DESCRIPTION').subscribe((texts: string[]) => {
        this.aboutContent.description = texts.map(text => ({ text }));
      });
    });
  }

  ngAfterViewInit(): void {
    if (this.aboutId) {
      setTimeout(() => {
        this.scrollTo(this.aboutId);
      }, 500); // Ajout d'un délai pour s'assurer que le DOM est prêt
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
