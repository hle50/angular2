import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {ArchiveComponent} from './archive.component';
import {NavComponent} from './nav.component';
import {UsersComponent} from './users.component'



@RouteConfig([
    { path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true },
    //{ path: '/archive/:year/:month', name: 'Archive', component: ArchiveComponent },
    { path: '/*other', name: 'Home', redirectTo: ['Users'] },

])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES,NavComponent],
  
    
})
export class AppComponent {
}