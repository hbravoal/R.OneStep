import { GalleryComponent } from './Components/gallery/gallery.component';
import { InscriptionsComponent } from './Components/inscriptions/inscriptions.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component :  HomeComponent
  },
  {
    path: 'Home', component : HomeComponent
  },
  {
    path: 'About' , component : AboutComponent
  },
  {
    path : 'Inscriptions' , component : InscriptionsComponent
  },
  {
    path : 'Gallery' , component : GalleryComponent
  },
  {
    path: '**' , component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
