import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { QuintoComponenteComponent } from './quinto-componente/quinto-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponenteComponent, SegundoComponenteComponent,TerceiroComponenteComponent,QuartoComponenteComponent,QuintoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-ederson';

  mostrarSegundo = false;

  onMostrarSegundo(){
    this.mostrarSegundo = true;
  }
}
