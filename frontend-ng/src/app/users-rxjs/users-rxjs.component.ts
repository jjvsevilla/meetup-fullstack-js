import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import GET_USERS from '../graphql/query/GET_USERS';

@Component({
  selector: 'app-users-rxjs',
  template: `
    <h3>User List (users-rxjs component)</h3>
    <app-users-filter [isAlive]="isAlive" (onChange)="updateIsAlive($event)"></app-users-filter>

    <ul>
      <li *ngFor="let user of data | async">
        Score: {{user.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class UsersRxjsComponent implements OnInit {
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
    }).valueChanges
      .pipe(
        map(({ data }) => (data as any).users)
      );
  }
}
