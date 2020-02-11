import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'posts', component: BlogPostsComponent },
      { path: 'post/:id', component: BlogPostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
