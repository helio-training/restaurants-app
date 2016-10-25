export class Address {
  bulding: string;
  street: string;
  zipcode: string;
  coord: number[];

  constructor() {
    this.coord = [];
  }
}

export class Restaurant {

  _id: string;
  name: string;
  borough: string;
  address: Address;
  cuisine: string;
  grades: any;


  constructor() {
    this.address = new Address();
    this.grades = [];
  }


}
