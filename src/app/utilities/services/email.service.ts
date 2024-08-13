
import { Injectable } from '@angular/core';
//import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    private serviceID = 'service_mgqizxj'; // Remplacez par votre service ID
    private templateID = 'template_mj8c8rx'; // Remplacez par votre template ID
    private publicKey = 'gaiMu2IvehMQD3LJz'; // Utilisez votre clé publique ici

    constructor() {
    }

    sendEmail(firstName: string, lastName: string, email: string, phone: string, message: string) {
        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            to_name: 'Équipe de vente',
            from_email: email,
            message: message,
            phone: phone
        };
        return templateParams;
        //return emailjs.sendForm(this.serviceID, this.templateID, templateParams, {publicKey: this.publicKey});
    }
}