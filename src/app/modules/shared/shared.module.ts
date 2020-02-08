import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
