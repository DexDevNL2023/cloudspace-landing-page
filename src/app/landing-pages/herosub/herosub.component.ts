import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import AOS from "aos";

@Component({
  selector: 'app-herosub',
  templateUrl: './herosub.component.html'
})
export class HerosubComponent {
  @Input() heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string, backgroundImage?: string };

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }
}
