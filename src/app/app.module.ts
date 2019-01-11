import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { InscriptionsComponent } from './Components/inscriptions/inscriptions.component';
import { SliderComponent } from './Components/slider/slider.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InscriptionsComponent,
    SliderComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
