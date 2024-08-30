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
    interestedTitle: 'FOOTER.INTERESTED_TITLE',
    interestedDescription: 'FOOTER.INTERESTED_DESCRIPTION',
    contactButtonText: 'FOOTER.CONTACT_BUTTON_TEXT',
    logoUrl: 'assets/img/logo.png',
    usefulLinks: [
      { label: 'FOOTER.USEFUL_LINKS.HOME', link: '/', subMenu: [] },
      { label: 'FOOTER.USEFUL_LINKS.ABOUT_US', link: '/about', subMenu: [
        { id: 'who-we-are', label: 'FOOTER.USEFUL_LINKS.WHO_WE_ARE' },
        { id: 'why-us', label: 'FOOTER.USEFUL_LINKS.WHY_US' }
      ] },
      { label: 'FOOTER.USEFUL_LINKS.CAREERS', link: '/career', subMenu: [] },
      { label: 'FOOTER.USEFUL_LINKS.CONTACT', link: '/contact', subMenu: [] }
    ],
    whatWeDo: [
      { id: 1, label: 'FOOTER.WHAT_WE_DO.CLOUD_TRANSFORMATION', link: '/service' },
      { id: 2, label: 'FOOTER.WHAT_WE_DO.CYBERSECURITY', link: '/service' },
      { id: 3, label: 'FOOTER.WHAT_WE_DO.NETWORK_ENGINEERING', link: '/service' },
      { id: 4, label: 'FOOTER.WHAT_WE_DO.TRAINING', link: '/service' },
      { id: 5, label: 'FOOTER.WHAT_WE_DO.WEB_DEVELOPMENT', link: '/service' },
      { id: 6, label: 'FOOTER.WHAT_WE_DO.APPLICATION_DEVELOPMENT', link: '/service' },
      { id: 7, label: 'FOOTER.WHAT_WE_DO.ARTIFICIAL_INTELLIGENCE', link: '/service' }
    ],
    address: 'FOOTER.ADDRESS',
    phone: 'FOOTER.PHONE',
    email: 'FOOTER.EMAIL',
    copyright: 'FOOTER.COPYRIGHT'
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
