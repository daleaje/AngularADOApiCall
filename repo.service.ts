import {Injectable} from '@angular/core';
import {Observable, throwError, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalService} from './global.service';
import {Repos} from '../models/repos';

@Injectable({
  providedIn: 'root'
})

export class RepoService{
  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
){}
}

getRepositories(apiUrl, token): Observable<Repos>{
  const httpOptions: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Request-Headers':'*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // 'Authorization': 'Basic ' + btoa('username': + personalToken)
    'Authorization': `Bearer ${token}`
  }
  return this.http.get<repos>(apiUrl, httpOptions);
}

}
