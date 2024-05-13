import { MainComponent } from '../../main/main.component';
import { ContactService } from './../../../utilities/services/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: 'Contact',
    spanText: 'Us',
  };
  contactContent: { title: string, description: string, contacts: { icon: string, label: string, info: string }[], mapUrl: string } = { 
    title: 'Get In Touch', 
    description: 'Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.', 
    contacts: [
      { icon: 'pi pi-geo-alt', label: 'Address', info: '9994 Sowder Village Sq #508, Manassas VA 20109 USA' },
      { icon: 'pi pi-telephone', label: 'Call Us', info: '+1-855-200-7653' },
      { icon: 'pi pi-envelope', label: 'Email Us', info: 'info@cloudspaceconsulting.com' }
    ], 
    // URL de la carte Google Maps
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.0656249076906!2d-77.53745632473166!3d38.73925627175832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65dde9798c63f%3A0xa5e3ca280c42c49c!2sHistoric%20District%2C%209994%20Sowder%20Village%20Square%20%23508%2C%20Manassas%2C%20VA%2020109%2C%20USA!5e0!3m2!1sen!2s!4v1695741233666!5m2!1sen!2s'
  };

  constructor(public appMain: MainComponent, private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContactData().subscribe(
      (data) => {
        this.contactContent = data;
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }
}
