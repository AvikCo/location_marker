import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable { //implements Mappable is totally optional 
  // it only helps us identify the error while building the User and make sure it can work with CustomMap
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string{
    return `
    <h1>User Name: ${this.name}</h1>
    `
  }

}