import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogPostsComponent,
    BlogCardComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
