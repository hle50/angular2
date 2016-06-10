import {Component} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    templateUrl: './app/addUsers.template.html',
    providers: [HTTP_PROVIDERS, UsersService],
})

export class AddUserComponent {
    onSubmit(f) {
        console.log(f);
    }
    constructor(private usersService: UsersService) {

    }

}