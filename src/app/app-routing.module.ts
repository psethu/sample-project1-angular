import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RideComponent } from './components/ride/ride.component';


const routes: Routes = [
  {path: '', component: RideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
