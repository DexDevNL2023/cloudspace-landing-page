import { MainComponent } from '../../main/main.component';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {
  heroContent: any = {
    title: 'WHATWEDO.HERO.TITLE',
    spanText: 'WHATWEDO.HERO.SPAN_TEXT',
    description: 'WHATWEDO.HERO.DESCRIPTION',
    buttonText: 'WHATWEDO.HERO.BUTTON_TEXT',
    buttonLink: '/services',
    backgroundImage: ''
  };
  whatwedoContents: any[] = [];  
  whatwedoContent: any;
  whatwedoid: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute, private translate: TranslateService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    AOS.init();

    // Fetch and set the contents initially
    this.route.paramMap.subscribe(params => {
      this.whatwedoid = +params.get("id");
      this.updateHeroContent();
      this.loadWhatwedos();
    });

    // Listen to language change events and update content accordingly
    this.translate.onLangChange.subscribe(() => {
      this.loadWhatwedos();
    });
  }

  updateHeroContent() {
    const images = {
      1: 'assets/img/banners/banner-cloud.webp',
      2: 'assets/img/banners/banner-secure.jpg',
      3: 'assets/img/banners/banner-training.jpg',
      4: 'assets/img/banners/banner-networks.jpg',
      5: 'assets/img/banners/banner-web.jpg',
      6: 'assets/img/banners/banner-mobile.jpg',
      7: 'assets/img/banners/banner-iai.jpg'
    };
    this.heroContent.backgroundImage = images[this.whatwedoid] || '';
  }

  loadWhatwedos() {
    this.translate.get('WHATWEDO.CONTENTS').subscribe(translations => {
      this.whatwedoContents = translations;
      this.whatwedoContent = this.whatwedoContents.find(content => content.id === this.whatwedoid);
      if (!this.whatwedoContent) {
        console.error("Content not found for id:", this.whatwedoid);
      }
      console.log(this.whatwedoContent);
      this.cdr.detectChanges(); // Trigger change detection manually
    });
  }
}
