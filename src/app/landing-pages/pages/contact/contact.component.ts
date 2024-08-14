import { MessageService } from 'primeng/api';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { EmailService } from '../../../utilities/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  heroContent = {
    title: "We are here",
    spanText: "to help you",
    description: "Do you have questions or need assistance? Don't hesitate to contact us for quick and accurate responses. We are here to provide you with the best possible service.",
    buttonText: "InfoSys Consulting",
    buttonLink: "",
    backgroundImage: 'assets/img/banners/banner-contact.jpg'
  };
  contactContent = {
    title: "Get in Touch",
    description: "We would be happy to answer any questions and discuss your needs. Here’s how you can reach us:",
    contacts: [
      {
        icon: "pi pi-map-marker",
        label: "Address",
        info: "462 Vandegrift Road, Stafford VA 22554"
      },
      {
        icon: "pi pi-phone",
        label: "Call Us",
        info: "(001) 571-572-2578"
      },
      {
        icon: "pi pi-envelope",
        label: "Send Us an Email",
        info: "info@infosys.com"
      }
    ]
  };  
  lastname: string = '';
  firstname: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  message: string = '';

  constructor(public appMain: MainComponent, private messageService: MessageService, private emailService: EmailService) { }

  ngOnInit(): void {
    AOS.init();
  }

  /* sendMessage() {
    // Envoyer l'email au service commercial
    this.emailService.sendEmail(this.firstname, this.lastname, this.email, this.phone, this.message)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Votre message a été transmis au service commercial.'
        });
      })
      .catch((error) => {
        console.error('Erreur EmailJS :', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ultérieurement.'
        });
      });
    }   */

    sendMessage() {
      // Envoyer l'email au service commercial
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Votre message a été transmis au service commercial.'
      });
    }      
}
