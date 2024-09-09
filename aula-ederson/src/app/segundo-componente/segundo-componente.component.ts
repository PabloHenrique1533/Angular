import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  constructor(private router: Router){}

  navegandoNoComponente(){}
}
