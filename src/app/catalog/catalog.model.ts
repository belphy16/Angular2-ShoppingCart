export class Catalog {
  public name : string;
  public  desc;
  public imagePath;

  constructor(name:string,desc:string,imagePath:string){
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
