System.register(['angular2/core', './users.service', 'angular2/http', 'angular2/common', 'angular2/router', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_service_1, http_1, common_1, router_1, user_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(usersService, fb, _router, _routerParams) {
                    this.usersService = usersService;
                    this._router = _router;
                    this._routerParams = _routerParams;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                AddUserComponent.prototype.onSubmit = function () {
                    console.log(this.form.value);
                };
                AddUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routerParams.get('id');
                    console.log(id);
                    if (!id)
                        return;
                    this.usersService.getUserById(id).subscribe(function (res) { return _this.user = res; }, function (res) {
                        if (res.status = 404) {
                            _this._router.navigate(['Home']);
                        }
                    });
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/addUsers.template.html',
                        providers: [http_1.HTTP_PROVIDERS, users_service_1.UsersService],
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, common_1.FormBuilder, router_1.Router, router_1.RouteParams])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=addUser.component.js.map