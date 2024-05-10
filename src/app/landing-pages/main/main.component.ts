import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  isBannerVisible = true;
  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string };

  constructor(private router: Router, public appMain: AppComponent) {
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
    console.log(link);
    console.log(id);
    const url = `${link}/${id}`;
    console.log(url);
    this.router.navigate([url]);
  }
}
