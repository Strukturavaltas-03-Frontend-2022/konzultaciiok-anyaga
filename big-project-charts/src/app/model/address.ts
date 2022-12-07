export class Address {
    id: number = 0;
    city: string = 'Budapest';
    street: {name: string, number: number} = {
        name: 'Kiss',
        number: 33,
    };
}
