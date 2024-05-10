import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { LoginService } from '../utilities/services/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent {
  email: string = '';
  items = [
      {
          icon: 'pi-cog',
          title: 'Unlimited Inbox'
      },
      {
          icon: 'pi-shopping-cart',
          title: 'Data Security'
      },
      {
          icon: 'pi pi-check',
          title: 'Cloud Backup Williams'
      }
  ];

  constructor(public app: AppComponent, private router: Router, private loginService: LoginService, private messageService: MessageService) {
  }

  // Définissez une fonction pour naviguer vers le composant de connexion
  navigateToLogin(): void {
      this.router.navigate(['/login']);
  }

  forgotPassword() {
    this.loginService.forgotPassword(this.email).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Password reset email sent successfully'});
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Failed to send password reset email'});
      }
    );
  }
}
