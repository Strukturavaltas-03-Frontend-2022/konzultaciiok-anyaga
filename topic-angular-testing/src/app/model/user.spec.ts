/*
export class User {
  // {"id":1,"name":"Cad Bedford","email":"cbedford0@symantec.com","category":"Guest"}
  [x: string]: any;
  id: number = 0;
  name: string = '';
  email: string = '';
  category: string = '';
}
*/
import { User } from './user';

describe('Testing User class.', () => {
  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
    expect(user instanceof User).toBeTrue();
  });

  it('id should be exist', () => {
    const user = new User();
    expect(typeof user.id).not.toEqual('undefined');
    expect(typeof user.id).toEqual('number');
  });
});
