import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template:`
    <h1>HOME</h1>
    <ul>
        <li *ngFor='#item of data'>
            <a [routerLink]="['Archive',{year: item.year, month:item.month}]">{{item.year}}/{{item.month}}</a>
        </li>
    </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})


export class HomeComponent implements OnInit{
    data;
    constructor(){
        
    }
    
    ngOnInit(){
        this.data = [{year: 2011, month: 4},{year: 2011, month: 5}, {year: 2011, month: 6}]
    }
    
}