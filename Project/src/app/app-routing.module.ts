import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WaterComponent } from './water/water.component';
import { EducationComponent } from './education/education.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ForestationComponent } from './forestation/forestation.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'water', component: WaterComponent },
  { path: 'education', component: EducationComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'forestation', component: ForestationComponent },
  { path: 'health', component: HealthComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
