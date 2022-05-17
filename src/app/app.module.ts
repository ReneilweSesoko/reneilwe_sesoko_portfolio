import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurriculmVitaeComponent } from './components/curriculm-vitae/curriculm-vitae.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    FooterComponent,
    CurriculmVitaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
