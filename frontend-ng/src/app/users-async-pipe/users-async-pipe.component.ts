import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import GET_USERS from '../graphql/query/GET_USERS';

@Component({
  selector: 'app-users-async-pipe',
  template: `
    <h3>User List (users-async-pipe component)</h3>
    <app-users-filter [isAlive]="isAlive" (onChange)="updateIsAlive($event)"></app-users-filter>

    <ul>
      <li *ngFor="let entry of data | async | select: 'users'">
        Score: {{entry.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class UsersAsyncPipeComponent implements OnInit {
  isAlive = true;
  data: Observable<any>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.getUsers(this.isAlive);
  }

  updateIsAlive(event) {
    this.isAlive = event;
    this.getUsers(this.isAlive);
  }

  getUsers(isAlive = true) {
    this.data = this.apollo.watchQuery({
      query: GET_USERS,
      variables: { isAlive }
    }).valueChanges;
  }
}
