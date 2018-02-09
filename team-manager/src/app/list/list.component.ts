import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players = [];

  constructor(
    private _dataServive: DataService,
    private _http: Http,
    ) { this.reveal(); }

  ngOnInit() {
  }

  reveal() {
    this._http.get('/players')
    .subscribe(
      (players) => {
        console.log('Got response from the server');
        this.players = players.json();
        console.log(this.players);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  remove(id) {
    this._http.delete(`/players/${id}`)
    .subscribe(
      (response) => {
        console.log('Got response from the server');
        console.log(response);
        this.reveal();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
