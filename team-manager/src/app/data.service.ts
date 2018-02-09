import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from './player';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  players = [];

    constructor(private _http: Http) { }

    index(callback) {
      this._http.get('/players').subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    create(player) {
      return this._http.post(`/players/list`, player)
      .subscribe (
        (response) => {
          console.log('Got response from the server');
        },
        (err) => {
          console.log(err);
        }
      );
    }

    destroy(id: string, callback) {
      this._http.delete(`/players/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

  }
