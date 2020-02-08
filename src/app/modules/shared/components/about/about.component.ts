import { Component, OnInit } from '@angular/core';
import { Banner } from '../../classes/banner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  banner: Banner = new Banner('The about page', 'http://placekitten.com/g/800/600');

  constructor() { }

  ngOnInit() {
  }

}
