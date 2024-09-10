import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { QuintoComponenteComponent } from './quinto-componente/quinto-componente.component';



export const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'segundo-componente', component: SegundoComponenteComponent},
    {path:'terceiro-componente', component: TerceiroComponenteComponent},
    {path: 'quarto-componente', component: QuartoComponenteComponent},
    {path: 'quinto-componente', component: QuintoComponenteComponent},
    {path: '', redirectTo: '/primeiro-componente', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class approutingmodule{}