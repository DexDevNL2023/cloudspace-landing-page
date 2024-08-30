import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent {
  heroContent = {
    title: 'CAREER.HERO.TITLE',
    spanText: 'CAREER.HERO.SPAN_TEXT',
    description: 'CAREER.HERO.DESCRIPTION',
    buttonText: 'CAREER.HERO.BUTTON_TEXT',
    buttonLink: 'CAREER.HERO.BUTTON_LINK',
    backgroundImage: 'assets/img/banners/banner-carrer.jpg'
  };
  careerContent = [];  
  avatars = [
    'assets/img/blocks/avatars/avatar-f-1.png',
    'assets/img/blocks/avatars/avatar-f-2.png',
    'assets/img/blocks/avatars/avatar-m-1.png',
    'assets/img/blocks/avatars/avatar-m-2.png',
    'assets/img/blocks/avatars/avatar-f-3.png'
  ];

  constructor(public appMain: MainComponent, private translate: TranslateService) {
    this.translate.get('CAREER.JOBS').subscribe(translations => {
      this.careerContent = translations;
    });
  }

  ngOnInit(): void {
    AOS.init();

    // Listen to language changes
    this.translate.onLangChange.subscribe(() => {
      this.translate.get('CAREER.JOBS').subscribe(translations => {
        this.careerContent = translations;
      });
    });
  }
}
