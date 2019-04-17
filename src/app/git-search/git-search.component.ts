import { Component, OnInit } from '@angular/core';
import {GitSearch } from '../git-search';
import {GitSearchService} from '../git-search.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch; //interfaces caracteristicas 
  searchQuery: string;

  constructor( private GitSearchService: GitSearchService) { }

  ngOnInit() {

this.GitSearchService.gitSearch('angular').then( (response) => {
  console.log(response)
  this.searchResults = response; // vas ser algual a al respuesta 
}, (error) => {
  alert("Error: " + error.statusText)
})

  }

gitSearch = () => {
  this.GitSearchService.gitSearch(this.searchQuery).then((response) => {

this.searchResults = response;
  }, (error) => {
    alert("Error:" + error.statusText);
  })

}


}