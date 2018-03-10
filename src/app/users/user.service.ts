import { Injectable } from '@angular/core';
import {AppSettings} from '../appsettings/appSettings';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {

  private allUsersUrl = AppSettings.API_ENDPOINT+'/user';

  constructor( private http: Http) { }

  getAllUsers() : Observable<User[]>{
    return this.http.get(this.allUsersUrl)
    .map((response : Response) => <User[]> response.json())
    .do(data=> console.log(JSON.stringify(data)));
  }

}
