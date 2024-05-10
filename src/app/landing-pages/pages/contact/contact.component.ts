import { MainComponent } from '../../main/main.component';
import { ContactService } from './../../../utilities/services/contact.service';
import { Component } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  heroContent: { title: string, subtitle?: string, buttonText?: string } = {
    title: 'Contact Us'
  };
  contactContent: { title: string, description: string, contacts: { icon: string, label: string, info: string }[], geolocalisation: { longitude: number, latitude: number }} = { 
    title: 'Get In Touch', 
    description: 'Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.', 
    contacts: [
      { icon: 'bi bi-geo-alt', label: 'Address', info: '9994 Sowder Village Sq #508, Manassas VA 20109 USA' },
      { icon: 'bi bi-telephone', label: 'Call Us', info: '+1-855-200-7653' },
      { icon: 'bi bi-envelope', label: 'Email Us', info: 'info@cloudspaceconsulting.com' }
    ], 
    geolocalisation: { longitude: 52.3555, latitude: 4.8997 }
  };

  constructor(public appMain: MainComponent, private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadHero();
    this.loadContacts();
  }

  loadHero() {
    this.appMain.heroContent = this.heroContent;
  }

  loadContacts() {
    this.contactService.getContactData().subscribe(
      (data) => {
        this.contactContent = data;
        this.initMap(this.contactContent.geolocalisation);
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }

  initMap(geolocalisation: { longitude: number; latitude: number; }) {
    const mapProp = {
      center: new google.maps.LatLng(geolocalisation.longitude, geolocalisation.latitude),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById('map'), mapProp);
  }
}
