import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import { WhatwedoService } from '../../../utilities/services/whatwedo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: 'Whatwedo',
  };
  contactContent: { title: string, description: string, contacts: { icon: string, label: string, info: string }[], geolocalisation: { longitude: number, latitude: number }} = { 
    title: 'Get In Touch', 
    description: 'Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.', 
    contacts: [
      { icon: 'pi pi-geo-alt', label: 'Address', info: '9994 Sowder Village Sq #508, Manassas VA 20109 USA' },
      { icon: 'pi pi-telephone', label: 'Call Us', info: '+1-855-200-7653' },
      { icon: 'pi pi-envelope', label: 'Email Us', info: 'info@cloudspaceconsulting.com' }
    ], 
    geolocalisation: { longitude: 52.3555, latitude: 4.8997 }
  };
  id: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute, private whatwedoService: WhatwedoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.id = +params.get('id');
        this.loadWhatwedos();
    });
  }

  loadWhatwedos() {
    this.whatwedoService.getWhatwedoById(this.id).subscribe(
      (data) => {
        this.contactContent = data;
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }
}
