export class ImgCardItem {
  title: string;
  subtitle: string;
  description: string;
  footer: string;
  cardLink: string;
  imgLink: string;
  imgAlt: string;

  public constructor(data: ImgCardData) {
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.description = data.description;
    this.footer = data.projectDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
    });
    this.cardLink = data.cardLink;
    this.imgLink = data.imgLink;
    this.imgAlt = data.imgAlt;
  }
}

export interface ImgCardData {
  title: string;
  subtitle: string;
  description: string;
  projectDate: Date;
  cardLink: string;
  imgLink: string;
  imgAlt: string;
}
