import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavComponent} from './nav.component';
import {UsersComponent} from './users.component'
import {PostsComponent} from './posts.component'



@RouteConfig([
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Home', redirectTo: ['Users'] },

])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES,NavComponent,PostsComponent],
  
    
})
export class AppComponent {
}