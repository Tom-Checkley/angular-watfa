import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => of(err))
      );
  }

  getPost(id) {
    console.log(typeof(id), id);
    const url = `${this.postsUrl}/${id}`;
    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
