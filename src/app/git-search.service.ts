import { Injectable } from '@angular/core';
import { GitSearch} from './git-search';
import { query } from '@angular/core/src/render3/query';
import { HttpClient } from '@angular/common/http';
import { map, take} from 'rxjs/operators';
import {GitUsers} from './git-users';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

cachedValues: Array<{ [query: string]: GitSearch }> = [];

 cachedvaluesa: Array<{ [query: string]: GitUsers  }> = [];

  constructor(private http: HttpClient) {

  }

  gitSearch = (query: string): Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitSearch)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }

gitUsers = (query: string): Promise<GitUsers> => {

  let promise = new Promise<GitUsers>((resolve, reject) => {

    if ( this.cachedvaluesa[query]) {

      resolve(this.cachedvaluesa[query])
    }
    else {
      this.http.get('https://api.github.com/search/users?q=' + query)
      .toPromise()
      .then((response) => {
        resolve(response as GitUsers)
      }, (error) => {
        reject(error);
      })
    }
  })
  return promise;
    }


}