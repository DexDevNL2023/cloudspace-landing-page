import { HeaderDataService } from './../../utilities/services/header.data.service';
import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerContent: {
    color: string,
    logoUrl: string,
    menuItems: {
      label: string,
      link: string,
      subMenu: {
        id: number,
        label: string }[] }[] } = {
    color: '#3D72B4',
    logoUrl: 'assets/img/logo.jpeg',
    menuItems: [
      { label: 'Home', link: '/', subMenu: [] },
      {
        label: 'About Us',
        link: '/about',
        subMenu: [
          { id: 1, label: 'Who We Are' },
          { id: 2, label: 'Why CloudSpace' },
        ],
      },
      {
        label: 'What We Do',
        link: '/services',
        subMenu: [
          { id: 1, label: 'Cloud Transformation' },
          { id: 2, label: 'Cyber Security' },
          { id: 3, label: 'Training' },
          { id: 4, label: 'Network Engineering' },
          { id: 5, label: 'Web Development' },
          { id: 6, label: 'Application Development' },
          { id: 7, label: 'Artificial Intelligence' },
          { id: 8, label: 'Managed Services (NOC & SOC)' },
        ],
      },
      { label: 'Career', link: '/career', subMenu: [] },
      { label: 'Contact Us', link: '/contact', subMenu: [] },
    ],
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] } = { label: 'Home', link: '/', subMenu: [] };
  currentLanguage: string = 'fr';
  dropdownVisible = false;

  constructor(public appMain: MainComponent, private el: ElementRef, private router: Router, private translate: TranslateService, private cdr: ChangeDetectorRef, private headerDataService: HeaderDataService) {
    // Ajoutez l'écouteur d'événement de défilement à la fenêtre
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('fr');
    // Rafraîchir le template après le chargement des données
    this.cdr.detectChanges();
  
    this.loadFooterData();

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

  loadFooterData() {
    this.headerDataService.getHeaderData().subscribe(
      (data) => {
        this.headerContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr';
    this.translate.use(this.currentLanguage);
    // Rafraîchir le template après le changement de langue
    this.cdr.detectChanges();
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
      console.log(this.menuItemSelected.subMenu);
  }
}
