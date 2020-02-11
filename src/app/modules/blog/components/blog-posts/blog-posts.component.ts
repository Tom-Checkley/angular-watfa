import { Component, OnInit } from '@angular/core';

import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  posts: Post[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts()
      .subscribe(
        res => {
          this.posts = res;
        },
        err => console.log(err)
      );
  }

}
