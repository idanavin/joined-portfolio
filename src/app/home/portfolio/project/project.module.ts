
export class Project {
  public name: string;
  public tech: string;
  public description: string;
  public coverImage: string;
  public images : string[];
  public link: string;


  constructor(name: string,tech: string,description: string,coverImage:string, images : string[],link: string){
    this.name = name;
    this.tech = tech;
    this.description = description;
    this.coverImage = coverImage;
    this.images = images;
    this.link = link;
  }
}



