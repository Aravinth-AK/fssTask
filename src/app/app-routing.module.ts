import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublishComponent } from './components/publish/publish.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'publish',
    component:PublishComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
