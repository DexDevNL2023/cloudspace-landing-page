import { MessageService } from 'primeng/api';
import { MainComponent } from '../../main/main.component';
import { ContactService } from './../../../utilities/services/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: "Contact",
    spanText: "Us"
  };
  contactContent: { title: string, description: string, contacts: { icon: string, label: string, info: string }[] } = { 
    title: "Get In Touch", 
    description: "Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.", 
    contacts: [
      { icon: "pi pi-map-marker", label: "Address", info: "9994 Sowder Village Sq #508, Manassas VA 20109 USA" },
      { icon: "pi pi-phone", label: "Call Us", info: "+1-855-200-7653" },
      { icon: "pi pi-envelope", label: "Email Us", info: "info@cloudspaceconsulting.com" }
    ]
  };
  name: string = '';
  email: string = '';
  company: string = '';
  message: string = '';

  constructor(public appMain: MainComponent, private contactService: ContactService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContactData().subscribe(
      (data) => {
        this.contactContent = data;
      },
      (error) => {
        console.error("Error fetching contact data:", error);
      }
    );
    console.log(this.contactContent);
  }

  sendMessage() {
    // Send the email to the sales service
    // ...

    // Notify the user that the email has been sent
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Your message has been sent to the sales service.'
    });
  }
}
