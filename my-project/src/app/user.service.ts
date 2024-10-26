import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /////// Челики
  private users = [
    { id: 1, name: 'Mr. Nenis', email: 'mr.nenis777@gmail.com', age: 25 },
    { id: 2, name: 'Старый бох', email: 'stariy.god@ukr.net', age: 24 },
    { id: 3, name: 'Челикс', email: 'chtoto.tam@gmail.com', age: 28 }
  ];

  constructor() {}

  /// получаем юзеров
  getUsers() {
    return this.users;
  }

  //// Ищем по айдишке
  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  /// впихиваем нового чела в компашку
  addUser(user: any) {
    this.users.push(user);
  }

  ////// по айди убиваем чела, в плане не в реале
  deleteUserById(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
  //// обнова группы, йоу
updateUser(updatedUser: any) {
  const index = this.users.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    this.users[index] = updatedUser;
  }
}

}
