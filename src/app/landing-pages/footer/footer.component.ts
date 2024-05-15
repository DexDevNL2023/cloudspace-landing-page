import { FooterDataService } from './../../utilities/services/footer.data.service';
import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerContent = {
    color: '#3D72B4',
    interestedTitle: 'Interested in our services?',
    interestedDescription: 'Get in touch today!',
    contactButtonText: 'Contact Us',
    logoUrl: 'assets/img/logo.jpeg',
    usefulLinks: [
      { label: 'Home', link: '/', subMenu: [] },
      { label: 'About us', link: '/about', subMenu: [
        { id: 1, label: 'Who We Are' },
        { id: 2, label: 'Why CloudSpace' },
      ] },
      { label: 'Career', link: '/career', subMenu: [] },
      { label: 'Contact Us', link: '/contact', subMenu: [] }
    ],
    whatWeDo: [
      { id: 1, label: 'Cloud Transformation', link: '/service' },
      { id: 2, label: 'Cyber Security', link: '/services' },
      { id: 3, label: 'Networking Engineering', link: '/service' },
      { id: 4, label: 'Training', link: '/service' },
      { id: 5, label: 'Web Development', link: '/service' },
      { id: 6, label: 'Application Development', link: '/service' },
      { id: 7, label: 'Artificial Intelligence', link: '/service' },
      { id: 8, label: 'NOC & SOC', link: '/service' }
    ],
    address: '9994 Sowder Village, Sq #508, Manassas VA 20109',
    phone: '+1-855-200-7653',
    email: 'info@cloudspaceconsulting.com',
    copyright: 'CloudSpace Consulting LLC © 2023'
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] };
  dropdownVisible = false;

  constructor(public appMain: MainComponent, private footerDataService: FooterDataService) { }

  ngOnInit(): void {
    this.loadFooterData();
  }

  loadFooterData() {
    this.footerDataService.getFooterData().subscribe(
      (data) => {
        this.footerContent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
      console.log(this.menuItemSelected.subMenu);
  }
}
