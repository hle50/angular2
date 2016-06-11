import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavComponent} from './nav.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {HomeComponent} from './home.component';
import {AddUserComponent} from './addUser.component';



@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent},
    { path: '/users/new', name: 'NewUser', component: AddUserComponent},
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Home', redirectTo: ['Users'] },
    {path: 'users/:id', name:'EditUser', component:AddUserComponent}

])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES,NavComponent,PostsComponent,HomeComponent],
  
    
})
export class AppComponent {
}