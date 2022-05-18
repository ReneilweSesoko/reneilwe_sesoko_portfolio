import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculmVitaeComponent } from './pages/curriculm-vitae/curriculm-vitae.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cv', component: CurriculmVitaeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
