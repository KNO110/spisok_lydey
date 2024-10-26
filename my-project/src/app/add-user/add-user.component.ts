import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  newUser = {
    id: 0,
    name: '',
    email: '',
    age: null,
  };

  constructor(private userService: UserService) {}

  addUser() {
    this.newUser.id = Date.now();
    this.userService.addUser(this.newUser);
    this.newUser = { id: 0, name: '', email: '', age: null };
    alert('Челик успешно добавлен, йоу');
  }
}
