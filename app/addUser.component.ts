import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {User} from './user';
@Component({
    templateUrl: './app/addUsers.template.html',
    providers: [HTTP_PROVIDERS, UsersService],
})

export class AddUserComponent implements OnInit {
    form: ControlGroup;

    user = new User();

    title:string;
    onSubmit() {
        console.log(this.form.value);
    }

    constructor(private usersService: UsersService,
         fb: FormBuilder, private _router: Router, private _routerParams: RouteParams ) {
          this.form = fb.group({
             name: ['',Validators.required],
             email: ['',Validators.required],
             phone: [],
             address: fb.group({
                 street: [],
                 suite: [],
                 city:[],
                 zipcode:[]
             })
             

          });  
    }

    ngOnInit(){
        var id = this._routerParams.get('id');
        console.log(id);
        if(!id) return;
        this.usersService.getUserById(id).subscribe(res=>this.user = res,
                                        res=>{
                                            if(res.status = 404){
                                                this._router.navigate(['Home']);
                                            }
                                        })

    }

}