import { Routes } from '@angular/router';
import { Pregunta2Component } from './dashboard/preguntas/pregunta-2/pregunta-2.component';
import { Pregunta3Component } from './dashboard/preguntas/pregunta-3/pregunta-3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
  {path: "dashboard", component: DashboardComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "pregunta2", component: Pregunta2Component},
      {path: "pregunta3", component: Pregunta3Component},
    ]
  },
  {path: "", redirectTo: "dashboard/home", pathMatch: "full"},
];
