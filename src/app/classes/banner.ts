export class Banner {
  title: string;
  bgImgUrl: string;
  subtitle?: string;
  cssVariant?: string;

  constructor(
    title: string,
    bgImgUrl: string,
    subtitle?: string,
    cssVariant?: string
  ) {
    this.title = title;
    this.bgImgUrl = bgImgUrl;
    this.subtitle = subtitle;
    this.cssVariant = cssVariant;
  }
}
