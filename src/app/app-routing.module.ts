import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/shared/components/home/home.component';
import { AboutComponent } from './modules/shared/components/about/about.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: 'home', component: HomeComponent },

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
