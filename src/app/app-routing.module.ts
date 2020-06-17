import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RideComponent } from './components/ride/ride.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {path: '', component: RideComponent },
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
