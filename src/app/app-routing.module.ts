import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeResolver } from './home/home.resolver';

const routes: Routes = [
  {
    path:'home',
      loadComponent:()=>
        import('./home/home.component')
          .then((m)=>m.HomeComponent),
      resolve:{
        homeResolver
    }
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
