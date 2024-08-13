import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import AOS from "aos";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerContent = {
    color: '#3D72B4',
    interestedTitle: 'Intéressé par nos services ?',
    interestedDescription: 'Contactez-nous dès aujourd\'hui !',
    contactButtonText: 'Contactez-nous',
    logoUrl: 'assets/img/logo.png',
    usefulLinks: [
      { label: 'Accueil', link: '/', subMenu: [] },
      { label: 'Qui sommes-nous', link: '/about', subMenu: [] },
      { label: 'Carrières', link: '/career', subMenu: [] },
      { label: 'Contacts', link: '/contact', subMenu: [] }
    ],
    whatWeDo: [
      { id: 1, label: 'Transformation Cloud', link: '/service' },
      { id: 2, label: 'Cybersécurité', link: '/service' },
      { id: 3, label: 'Ingénierie Réseau', link: '/service' },
      { id: 4, label: 'Formation', link: '/service' },
      { id: 5, label: 'Développement Web', link: '/service' },
      { id: 6, label: 'Développement d\'Applications', link: '/service' },
      { id: 7, label: 'Intelligence Artificielle', link: '/service' }
    ],
    address: '9994 Sowder Village, Sq #508, Manassas VA 20109',
    phone: '+1-855-200-7653',
    email: 'info@cloudspaceconsulting.com',
    copyright: 'IT-Consulting Teleo © 2023'
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] };
  dropdownVisible = false;

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
      console.log(this.menuItemSelected.subMenu);
  }
}
