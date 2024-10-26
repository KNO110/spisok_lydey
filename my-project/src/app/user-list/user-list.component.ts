import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { UserFilterPipe } from '../user-filter.pipe';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserFilterPipe, UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: any[] = [];
  selectedUserId: number | undefined;
  searchText: string = '';


  ////ссылка на элемент аштимлавовлои, как выговорить!??!? Короче ссылка на элемент по индефекатору userlist, а элементреф позволяет чё-то там с ним
  @ViewChild('userList') userListRef!: ElementRef;


  ////принимает через конструктор лего дупло объект сервиса userservice. Позволяет получить данные о челиксе
  constructor(private userService: UserService) {}


  ///метод получения списка челиков через getuserr из userservice, и сохраняем в переменную users компонента
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


  //// после того, как щабллоны компонента загружены, выводит в консоль лог
  ngAfterViewInit() {
    console.log('Йоу, список:', this.userListRef.nativeElement);
  }


  /// при выборе челика в списке, берёт айдишник, для записи в книжку ёжика, для (click)="onSelectUser(user.id)" в html
  onSelectUser(id: number) {
    this.selectedUserId = id;
  }



////// когда удаляем, исключает тех чей айдишник совпадт с deletedUserId
  onUserDeleted(deletedUserId: number) {
    this.users = this.users.filter((user) => user.id !== deletedUserId);
    this.selectedUserId = undefined;
  }
}
