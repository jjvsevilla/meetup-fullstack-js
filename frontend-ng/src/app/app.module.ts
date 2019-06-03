import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { UsersQueryComponent } from './users-query/users-query.component';
import { UsersAsyncPipeComponent } from './users-async-pipe/users-async-pipe.component';
import { UsersRxjsComponent } from './users-rxjs/users-rxjs.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersQueryComponent,
    UsersAsyncPipeComponent,
    UsersRxjsComponent,
    UsersFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
