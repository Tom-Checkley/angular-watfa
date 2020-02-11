import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/classes/post';
import { Banner } from 'src/app/classes/banner';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post$: any;
  post: Post;
  banner: Banner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.blogService.getPost(params.get('id')))
    );

    this.post$.subscribe(
      res => {
        this.post = res;

        this.banner = {
          title: this.post.title,
          bgImgUrl: 'http://placekitten.com/g/800/600'
        };
      },
      err => {
        console.error(err);
      }
    );
  }

}
