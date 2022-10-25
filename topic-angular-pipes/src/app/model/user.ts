export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthDate?: Date = new Date();
  active?: boolean = true;
}
