import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css','./content.responsive.component.css']
})
export class ContentComponent {
  photoCover:string = "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/1843/tony-stark-homem-de-ferro-data-morte-17-outubro-2023-6b7f97c58bab48.jpg"
  contentTitle:string= "LAS NOTICIAS"
  contentDescription:string= "El mundo del cine"
}
