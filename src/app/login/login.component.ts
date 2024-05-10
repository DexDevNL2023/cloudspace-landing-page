import { AppComponent } from './../app.component';
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../utilities/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    rememberMe: boolean = false;
    items = [
        {
            imageUrl: 'assets/layout/images/landing/abouts.webp',
            title: 'Unlimited Inbox',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            imageUrl: 'assets/layout/images/landing/contacts.webp',
            title: 'Data Security',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            imageUrl: 'assets/layout/images/landing/offers.webp',
            title: 'Cloud Backup Williams',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    constructor(public app: AppComponent, private router: Router, private loginService: LoginService) {
    }

    ngOnInit(): void {
      // Récupérer la valeur de rememberMe depuis le stockage local (ou tout autre endroit où vous le stockez)
      const rememberMeValue = localStorage.getItem('rememberMe');
      this.rememberMe = rememberMeValue === 'true'; // Convertir en boolean
  
      // Rediriger directement vers DashboardComponent si rememberMe est true
      if (this.rememberMe) {
        this.router.navigate(['/admin']);
      }
    }

    login(): void {
      this.loginService.login(this.email, this.password).subscribe(
        (response) => {
          // Gérer la réponse de la requête de connexion
          console.log('Login successful!', response);

          // Sauvegarder l'état "Remember me" localement si activé
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            // Vous pouvez également sauvegarder l'email de l'utilisateur
            localStorage.setItem('email', this.email);
          } else {
            // Supprimer les données "Remember me" du localStorage si désactivé
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('email');
          }

          // Rediriger directement vers DashboardComponent 
          this.router.navigate(['/admin']);
        },
        (error) => {
          // Gérer les erreurs de la requête de connexion
          console.error('Login failed!', error);
        }
      );
    }
      
    forgotPassword(): void {
      // Rediriger l'utilisateur vers la page de réinitialisation du mot de passe
      this.router.navigate(['/forgot-password']);
    }
}