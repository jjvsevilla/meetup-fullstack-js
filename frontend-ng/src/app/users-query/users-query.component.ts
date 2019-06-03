import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import GET_USERS from '../graphql/query/GET_USERS';

@Component({
  selector: 'app-users-query',
  template: `
    <h3>User List (users-query component)</h3>
    <app-users-filter [isAlive]="isAlive" (onChange)="updateIsAlive($event)"></app-users-filter>

    <p *ngIf="loading">Loading users...</p>
    <p *ngIf="error">Something went wrong!</p>
    <ul *ngIf="users">
      <li *ngFor="let user of users">
        {{user.name}}
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersQueryComponent implements OnInit {
  isAlive = true;
  loading = false;
  error: any;
  users: any[];

  constructor(
    private cd: ChangeDetectorRef,
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
    this.loading = true;
    this.error = undefined;
    this.users = undefined;

    this.apollo
      .watchQuery({
        query: GET_USERS,
        variables: { isAlive }
      })
      .valueChanges
      .subscribe((result: any) => {
        this.loading = result.loading;
        this.error = result.error;
        this.users = result.data && result.data.users;
        this.cd.markForCheck();
      });
  }
}
