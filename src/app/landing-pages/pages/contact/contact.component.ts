import { MessageService } from 'primeng/api';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { EmailService } from '../../../utilities/services/email.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  heroContent = {
    title: 'CONTACT.HERO.TITLE',
    spanText: 'CONTACT.HERO.SPAN_TEXT',
    description: 'CONTACT.HERO.DESCRIPTION',
    buttonText: 'CONTACT.HERO.BUTTON_TEXT',
    buttonLink: '',
    backgroundImage: 'assets/img/banners/banner-contact.jpg'
  };
  contactContent = {
    title: 'CONTACT.TITLE',
    description: 'CONTACT.DESCRIPTION',
    backgroundImage: 'assets/img/blocks/contacts/contact-2.jpg',
    contacts: [
      {
        icon: 'pi pi-map-marker',
        label: 'CONTACT.ADDRESS_LABEL',
        info: 'CONTACT.ADDRESS_INFO'
      },
      {
        icon: 'pi pi-phone',
        label: 'CONTACT.CALL_LABEL',
        info: 'CONTACT.CALL_INFO'
      },
      {
        icon: 'pi pi-envelope',
        label: 'CONTACT.EMAIL_LABEL',
        info: 'CONTACT.EMAIL_INFO'
      }
    ]
  };
  lastname: string = '';
  firstname: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  message: string = '';

  constructor(public appMain: MainComponent, private messageService: MessageService, private emailService: EmailService, private translate: TranslateService) { }

  ngOnInit(): void {
    AOS.init();
  }

  /* sendMessage() {
    // Envoyer l'email au service commercial
    this.emailService.sendEmail(this.firstname, this.lastname, this.email, this.phone, this.message)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('CONTACT.MESSAGE_SUCCESS_SUMMARY'),
          detail: this.translate.instant('CONTACT.MESSAGE_SUCCESS_DETAIL')
        });
      })
      .catch((error) => {
        console.error('Erreur EmailJS :', error);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('CONTACT.MESSAGE_ERROR_SUMMARY'),
          detail: this.translate.instant('CONTACT.MESSAGE_ERROR_DETAIL')
        });
      });
    }   */

    sendMessage() {
      // Envoyer l'email au service commercial
      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('CONTACT.MESSAGE_SUCCESS_SUMMARY'),
        detail: this.translate.instant('CONTACT.MESSAGE_SUCCESS_DETAIL')
      });
    }      
}
