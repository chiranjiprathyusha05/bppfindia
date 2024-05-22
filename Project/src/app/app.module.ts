import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { WaterComponent } from './water/water.component';
import { ForestationComponent } from './forestation/forestation.component';
import { HealthComponent } from './health/health.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Water', component: WaterComponent },
  { path: 'education', component: EducationComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'forestation', component: ForestationComponent },
  { path: 'health', component: HealthComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    AgricultureComponent,
    WaterComponent,
    ForestationComponent,
    HealthComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }