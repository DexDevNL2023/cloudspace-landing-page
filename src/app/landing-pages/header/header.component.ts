import { Component, ElementRef, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';
import AOS from "aos";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerContent = {
    color: '#3D72B4',
    logoUrl: 'assets/img/logo.png',
    menuItems: [
        { label: 'Home', link: '/', subMenu: [] },
        { label: 'About Us', link: '/about', subMenu: [] },
        {
            label: 'What We Do',
            link: '/service',
            subMenu: [
                { id: 1, label: 'Cloud Transformation' },
                { id: 2, label: 'Cybersecurity' },
                { id: 3, label: 'Network Engineering' },
                { id: 4, label: 'Training' },
                { id: 5, label: 'Web Development' },
                { id: 6, label: 'Application Development' },
                { id: 7, label: 'Artificial Intelligence' }
            ]
        },
        { label: 'Careers', link: '/career', subMenu: [] }
    ]
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] } = { label: 'Home', link: '/', subMenu: [] };
  currentLanguage: string = 'fr';
  dropdownVisible = false;

  constructor(public appMain: MainComponent, private el: ElementRef) {
    // Ajoutez l'écouteur d'événement de défilement à la fenêtre
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnInit(): void {
    AOS.init();
    this.menuItemSelected = { label: 'Home', link: '/', subMenu: [] };
    this.currentLanguage = 'fr';
  }

  // Fonction pour gérer le défilement de la page
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
      // Vérifiez si le clic n'est pas à l'intérieur du menu
      if (!this.el.nativeElement.contains(event.target)) {
          this.dropdownVisible = false;
      }
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
  }
}
