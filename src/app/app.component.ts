import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    menuMode = 'slim';

    inputStyle = 'outlined';

    ripple: boolean;

    name = 'InfoSys';

    theme = 'teal-yellow';

    color = '#3D72B4';

    logoUrl = 'assets/layout/images/logo-white.png';
            
    faviconUrl = 'assets/layout/images/favicon-white.ico';

    lightMenu = true;

    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;
    }
}
