import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-herosub',
  templateUrl: './herosub.component.html'
})
export class HerosubComponent {
  @Input() heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string };

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
  }
}
