import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../../classes/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banner: Banner;

  constructor() { }

  ngOnInit() {
    this.createBanner();
  }

  createBanner(): Banner {
    return this.banner = {
      title: 'Welcome to the Angular WATFA',
      bgImgUrl: 'http://placekitten.com/g/800/600',
      subtitle: 'You\'ll hopefully learn some stuff and get to see some pictures of kittens',
      cssVariant: 'full'
    };
  }

}
