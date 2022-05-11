import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from "./components/standings/standings.component";
import { RacesComponent } from "./components/races/races.component";

const routes: Routes = [
  { path: 'standings', component: StandingsComponent },
  { path: 'standings/:year', component: RacesComponent },
  { path: '', redirectTo: '/standings', pathMatch: 'full'},
  { path: '**', redirectTo: '/standings', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
