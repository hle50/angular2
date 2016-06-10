import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    templateUrl:'./app/users.template.html',
    providers: [HTTP_PROVIDERS, UsersService],
    directives:[ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit {
    data =[];
    constructor(private usersService: UsersService) {

    }
    ngOnInit() {
        this.usersService.getUsers().subscribe(users => this.data = users);
    }
}