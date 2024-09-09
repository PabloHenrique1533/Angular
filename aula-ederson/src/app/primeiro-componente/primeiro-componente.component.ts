import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  constructor(private router: Router) {}

  navegandoNoComponente(route: string) {
    this.router.navigate([`/${route}`]);
  }
}