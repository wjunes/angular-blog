import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.responsive.component.css']
})
export class BigCardComponent  {

@Input()
  photoCover:string = "https://dcreations.es/storage/files/1/blog/angular/novedades-angular-17/novedades-angular-17.webp"
  cardTitle:string = "Fué lanzada la nueva version de angular"
  cardDescription:string = " Confíe en las herramientas de internacionalización de Angular, la seguridad y la accesibilidad para construir todos en todo el mundo."

}
