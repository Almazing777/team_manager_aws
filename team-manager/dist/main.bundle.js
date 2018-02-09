webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-player/add-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Add Player</h1>\n<section>\n  <div class=\"create\">\n    <form (submit)=\"create()\" #formData=\"ngForm\">\n      <div>Player Name:\n        <input type=\"text\" name=\"name\"\n        required\n        minlength=\"2\"\n        [(ngModel)]=\"player.name\"\n        #name=\"ngModel\">\n        <div *ngIf = \"(name.touched) && name.errors\">\n          <div *ngIf=\"name.errors.required\">\n            You must enter valid name.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            Name must be atleast {{ name.errors.minlength.requiredLength}} characters.\n          </div>\n        </div>\n      </div>\n      <div>Preferred Position:\n        <input type=\"text\" name=\"position\"\n        [(ngModel)]=\"player.position\"\n        #position = \"ngModel\"\n        required\n        minlength=\"2\">\n        <div *ngIf = \"(position.touched) && position.errors\">\n          <div *ngIf=\"position.errors.required\">\n            You must enter valid position name.\n          </div>\n          <div *ngIf=\"position.errors.minlength\">\n            Position must be atleast {{ position.errors.minlength.requiredLength}} characters.\n          </div>\n        </div>\n      </div>\n      <input type='submit' value=\"Add\" [disabled]=\"!formData.valid\">\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/add-player/add-player.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(_dataServive, _http, _router) {
        this._dataServive = _dataServive;
        this._http = _http;
        this._router = _router;
        this.player = {
            name: '',
            position: ''
        };
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponent.prototype.create = function () {
        var _this = this;
        this._http.post('/players', this.player)
            .subscribe(function (response) {
            console.log('Got response from the server');
            console.log(_this.player);
            _this._router.navigate(['/players/list']);
        }, function (err) {
            console.log(err);
        });
    };
    AddPlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-player',
            template: __webpack_require__("../../../../../src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            http_1.Http,
            router_1.Router])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());
exports.AddPlayerComponent = AddPlayerComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var players_component_1 = __webpack_require__("../../../../../src/app/players/players.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/list/list.component.ts");
var add_player_component_1 = __webpack_require__("../../../../../src/app/add-player/add-player.component.ts");
var player_status_component_1 = __webpack_require__("../../../../../src/app/player-status/player-status.component.ts");
var game_component_1 = __webpack_require__("../../../../../src/app/game/game.component.ts");
var routes = [
    { path: '', redirectTo: 'players/list', pathMatch: 'full' },
    { path: 'players', component: players_component_1.PlayersComponent, children: [
            { path: 'list', component: list_component_1.ListComponent },
            { path: 'addplayer', component: add_player_component_1.AddPlayerComponent }
        ] },
    { path: 'status', component: player_status_component_1.PlayerStatusComponent, children: [
            { path: 'game/:id', component: game_component_1.GameComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\r\n  width: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/players', 'list']\">Manage Players</a> | <a [routerLink]=\"['/status', 'game', 1]\">Manage Player Status</a>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var players_component_1 = __webpack_require__("../../../../../src/app/players/players.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/list/list.component.ts");
var add_player_component_1 = __webpack_require__("../../../../../src/app/add-player/add-player.component.ts");
var player_status_component_1 = __webpack_require__("../../../../../src/app/player-status/player-status.component.ts");
var game_component_1 = __webpack_require__("../../../../../src/app/game/game.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                players_component_1.PlayersComponent,
                list_component_1.ListComponent,
                add_player_component_1.AddPlayerComponent,
                player_status_component_1.PlayerStatusComponent,
                game_component_1.GameComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.players = [];
    }
    DataService.prototype.index = function (callback) {
        this._http.get('/players').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    DataService.prototype.create = function (player) {
        return this._http.post("/players/list", player)
            .subscribe(function (response) {
            console.log('Got response from the server');
        }, function (err) {
            console.log(err);
        });
    };
    DataService.prototype.destroy = function (id, callback) {
        this._http.delete("/players/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 *ngIf=game1>Player Status - Game 1</h1>\n<h1 *ngIf=game2>Player Status - Game 2</h1>\n<h1 *ngIf=game3>Player Status - Game 3</h1>\n\n<h3><button (click)=\"Game(1)\">Game 1</button> | <button (click)=\"Game(2)\">Game 2</button> | <button (click)=\"Game(3)\">Game 3</button></h3>\n\n<table>\n    <tr>\n        <th>Name</th>\n        <th>Status</th>\n    </tr>\n    <tr *ngFor=\"let player of players\">\n        <td>{{player.name}}</td>\n        <td><button type=\"button\" name=\"playing\">Playing</button><button type=\"button\" name=\"notPlaying\">Not Playing</button><button type=\"button\" name=\"undecided\">Undecided</button></td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var GameComponent = /** @class */ (function () {
    function GameComponent(_dataServive, _http) {
        this._dataServive = _dataServive;
        this._http = _http;
        this.game1 = true;
        this.game2 = false;
        this.game3 = false;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    GameComponent.prototype.Game = function (game) {
        if (game === 1) {
            this.game1 = true;
            this.game2 = false;
            this.game3 = false;
            return this.game1;
        }
        if (game === 2) {
            this.game1 = false;
            this.game2 = true;
            this.game3 = false;
            return this.game2;
        }
        if (game === 3) {
            this.game1 = false;
            this.game2 = false;
            this.game3 = true;
            return this.game3;
        }
    };
    GameComponent.prototype.getPlayers = function () {
        var _this = this;
        this._dataServive.index(function (players) { return _this.players = players; });
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            http_1.Http])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;


/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th, td {\r\n  border: 1px solid black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <th>Player Name</th>\n    <th>Preferred Position</th>\n    <th>Actions</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.name}}</td>\n      <td>{{player.position}}</td>\n      <td><button (click)=\"remove(player._id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(_dataServive, _http) {
        this._dataServive = _dataServive;
        this._http = _http;
        this.players = [];
        this.reveal();
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.reveal = function () {
        var _this = this;
        this._http.get('/players')
            .subscribe(function (players) {
            console.log('Got response from the server');
            _this.players = players.json();
            console.log(_this.players);
        }, function (err) {
            console.log(err);
        });
    };
    ListComponent.prototype.remove = function (id) {
        var _this = this;
        this._http.delete("/players/" + id)
            .subscribe(function (response) {
            console.log('Got response from the server');
            console.log(response);
            _this.reveal();
        }, function (err) {
            console.log(err);
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            http_1.Http])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent() {
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
    };
    PlayerStatusComponent = __decorate([
        core_1.Component({
            selector: 'app-player-status',
            template: __webpack_require__("../../../../../src/app/player-status/player-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player-status/player-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
}());
exports.PlayerStatusComponent = PlayerStatusComponent;


/***/ }),

/***/ "../../../../../src/app/players/players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/players/players.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <a [routerLink]=\"['/players','list']\">List</a>\n  <a [routerLink]=\"['/players','addplayer']\">Add player</a>\n</p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/players/players.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = __decorate([
        core_1.Component({
            selector: 'app-players',
            template: __webpack_require__("../../../../../src/app/players/players.component.html"),
            styles: [__webpack_require__("../../../../../src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map