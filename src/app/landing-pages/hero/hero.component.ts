import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() heroContent: { title: string, spanText?: string, description?: string, buttonText?: string };

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
  }
}
