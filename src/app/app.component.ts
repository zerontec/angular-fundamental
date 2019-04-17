import { Component, OnInit} from '@angular/core';
import {GitSearchService } from './git-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor (private GitSearchService: GitSearchService) {

  }
  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then( (response) => {
      alert("Total Librerias encontradas:"  +  response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    });

this.GitSearchService.gitUsers('leo').then((response) => {
alert("total Usuarios Encontrados:"   +  response.total_count);
}, (error) => {

  alert("error" + error.statusText);

});

  }
  title = 'app is functional!';
}