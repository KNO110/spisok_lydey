import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  private _userId: number | undefined;

  @Input()
  get userId(): number | undefined {
    return this._userId;
  }
  set userId(value: number | undefined) {
    this._userId = value;
    this.loadUser();
  }

  @Output() userIdChange = new EventEmitter<number | undefined>(); /// двустороння привязка

  @Output() userDeleted = new EventEmitter<number>();

  user: any;

  constructor(private userService: UserService) {}

  ngOnChanges(): void {
    if (this._userId) {
      this.loadUser();
    }
  }

  loadUser() {
    if (this._userId) {
      this.user = this.userService.getUserById(this._userId);
    } else {
      this.user = null;
    }
  }

  //// Метод для удаления кого-то
  deleteUser() {
    this.userService.deleteUserById(this._userId!);
    this.userDeleted.emit(this._userId);
    this._userId = undefined;
    this.userIdChange.emit(this._userId); //// эмитим чтобы род компонент услышал
  }
}
