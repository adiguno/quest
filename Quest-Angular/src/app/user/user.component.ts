import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = {id: 1, username: 'asdf', points: 0};
  }

}

export interface User {
  id: number;
  username: string;
  points: number;
}