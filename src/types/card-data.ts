export class ImgCardItem {
  title: string;
  subtitle: string;
  description: string;
  footer: string;
  cardLink: string;
  imgLink: string;
  imgAlt: string;
  tags: Array<string>;

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
    this.tags = [...data.tags];
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
  tags: Array<string>;
}
