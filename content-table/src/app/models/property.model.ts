export class Property {
    address: Address;
    userId: User;
    units: Unit[];
}

export class Address {
    streetNo: String;
    addressLine1: String;
    addressLine2: String;
    city: String;
    province: String;
    country: String;
    postalCode: String;
}

export class Unit {
    num_rooms: number;
    kitchen: number;
    washroom: number;
    parking: number;
    currentRent: Rent;
}

export class Rent {
    startDate: Date;
    endDate: Date;
    amount: number;
}

export class User {
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    status: string;
    dob: Date;
    properties: Property[];
}

class Person {

}
