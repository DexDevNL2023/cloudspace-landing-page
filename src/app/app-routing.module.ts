import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppNotfoundComponent} from './utilities/pages/notfound/app.notfound.component';
import {AppErrorComponent} from './utilities/pages/error/app.error.component';
import {AppAccessdeniedComponent} from './utilities/pages/accesdenied/app.accessdenied.component';
import {AppHelpComponent} from './utilities/pages/help/app.help.component';
import { AdminMainComponent } from './admin-pages/main/admin.main.component';
import { MainComponent } from './landing-pages/main/main.component';
import { HomeComponent } from './landing-pages/pages/home/home.component';
import { AboutComponent } from './landing-pages/pages/about/about.component';
import { ContactComponent } from './landing-pages/pages/contact/contact.component';
import { CareerComponent } from './landing-pages/pages/career/career.component';
import { LoginComponent } from './login/login.component';
import { WhatwedoComponent } from './landing-pages/pages/whatwedo/whatwedo.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: MainComponent,
                children: [
                    {path: '', component: HomeComponent},
                    {path: 'about/:id?', component: AboutComponent},
                    {path: 'contact', component: ContactComponent},
                    {path: 'career', component: CareerComponent},
                    {path: 'service/:id?', component: WhatwedoComponent}
                ]
            },
            {
                path: 'admin', component: AdminMainComponent,
                children: [
                    /* {path: '', component: DashboardComponent},
                    {path: 'admin/crud', component: AppCrudComponent}, */
                    {path: 'admin/help', component: AppHelpComponent}
                ]
            },
            {path: 'login', component: LoginComponent},
            {path: 'forgot-password', component: ForgotpasswordComponent},
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
