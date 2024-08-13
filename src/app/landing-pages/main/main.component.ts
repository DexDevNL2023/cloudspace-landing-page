import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import AOS from "aos";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  isBannerVisible = true;

  constructor(private router: Router, public appMain: AppComponent) {
  }
  ngOninit():void{
    AOS.init();
  }

  closeBanner(): void {
    this.isBannerVisible = false;
  }

  goToHome(): void {
    // Naviguez vers Home page
    this.router.navigate(['/']);
  }

  // Définissez une fonction pour naviguer vers le composant contact
  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  // Définissez une fonction pour naviguer vers le composant useful links
  navigateToUsefulLinks(link: string): void {
    this.router.navigate([link]); 
  }

  // Définissez une fonction pour naviguer vers le composant what we do
  navigateToWhatWeDo(link: string, id: number): void {
    const url = `${link}/${id}`;
    this.router.navigate([url]); 
  }

  scrollTo(elementId: string): void {
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }
}
