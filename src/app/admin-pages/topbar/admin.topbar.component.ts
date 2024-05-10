import { Component } from '@angular/core';
import { AdminMainComponent } from '../main/admin.main.component';

@Component({
  selector: 'admin-topbar',
  templateUrl: './admin.topbar.component.html'
})
export class AdminTopBarComponent {

    constructor(public appMain: AdminMainComponent) {}
}
