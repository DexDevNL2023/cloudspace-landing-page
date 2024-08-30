import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerContent = {
    color: '#3D72B4',
    logoUrl: 'assets/img/logo.png',
    menuItems: [
      { label: 'HEADER.HOME', link: '/', subMenu: [] },
      {
        label: 'HEADER.ABOUT_US',
        link: '/about',
        subMenu: [
          { id: 'who-we-are', label: 'HEADER.WHO_WE_ARE' },
          { id: 'why-us', label: 'HEADER.WHY_US' }
        ]
      },
      {
        label: 'HEADER.WHAT_WE_DO',
        link: '/service',
        subMenu: [
          { id: 1, label: 'HEADER.CLOUD_TRANSFORMATION' },
          { id: 2, label: 'HEADER.CYBERSECURITY' },
          { id: 3, label: 'HEADER.NETWORK_ENGINEERING' },
          { id: 4, label: 'HEADER.TRAINING' },
          { id: 5, label: 'HEADER.WEB_DEVELOPMENT' },
          { id: 6, label: 'HEADER.APPLICATION_DEVELOPMENT' },
          { id: 7, label: 'HEADER.ARTIFICIAL_INTELLIGENCE' }
        ]
      },
      { label: 'HEADER.CAREERS', link: '/career', subMenu: [] },
      { label: 'HEADER.CONTACTS', link: '/contact', subMenu: [] }
    ]
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] } = { label: 'HOME', link: '/', subMenu: [] };
  currentLanguage: string = 'en';
  dropdownVisible = false;
  mobileMenuVisible = false;

  constructor(public appMain: MainComponent, private el: ElementRef, private translate: TranslateService, private cdr: ChangeDetectorRef) {
    // Initialiser les paramètres de traduction
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);

    // Ajoutez l'écouteur d'événement de défilement à la fenêtre
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnInit(): void {
    AOS.init();
  }

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

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr';
    this.translate.use(this.currentLanguage);
    // Rafraîchir le template après le changement de langue
    this.cdr.detectChanges();
  }
}
