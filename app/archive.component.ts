import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

@Component({
    template:`
    <h2>ARCHIVE</h2>
    {{month}} {{year}}
    `,
})

export class ArchiveComponent implements OnInit {
    month;
    year;
    constructor(private _routeParams: RouteParams) {

    }
    ngOnInit() {
        this.year = this._routeParams.get('year');
        this.month = this._routeParams.get('month');
    }
}