import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { 

  }

  addUser(user:User): Observable<User>{
    return this.http.post<User>(this.baseUrl,user);
  }

  getUsers(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
