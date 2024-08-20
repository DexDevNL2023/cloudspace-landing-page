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
    interestedTitle: 'Interested in our services?',
    interestedDescription: 'Contact us today!',
    contactButtonText: 'Contact Us',
    logoUrl: 'assets/img/logo.png',
    usefulLinks: [
        { label: 'Home', link: '/', subMenu: [] },
        { label: 'About us', link: '/about', subMenu: [
          { id: 'who-we-are', label: 'Who We Are' },
          { id: 'why-us', label: 'Why InfoSys Consulting' },
        ] },
        { label: 'Careers', link: '/career', subMenu: [] },
        { label: 'Contact', link: '/contact', subMenu: [] }
    ],
    whatWeDo: [
        { id: 1, label: 'Cloud Transformation', link: '/service' },
        { id: 2, label: 'Cybersecurity', link: '/service' },
        { id: 3, label: 'Network Engineering', link: '/service' },
        { id: 4, label: 'Training', link: '/service' },
        { id: 5, label: 'Web Development', link: '/service' },
        { id: 6, label: 'Application Development', link: '/service' },
        { id: 7, label: 'Artificial Intelligence', link: '/service' }
    ],
    address: '462 Vandegrift Road,  Stafford VA 22554',
    phone: '(001) 571-572-2578',
    email: 'info@infosysconsulting.com',
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
