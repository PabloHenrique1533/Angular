import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css',
  template: '<h1>meu primeiro componente</h1>'
})
export class PrimeiroComponenteComponent {
nome: string = 'pablo';
idade: string = '19';
}
