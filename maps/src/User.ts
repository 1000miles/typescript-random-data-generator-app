import faker from 'faker';
import { Mappable } from './CustomMap'
// export default 'green'; // !DO NOT USE default!

// Every user we create needs to meet the interface requirements
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
