import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {
  apiUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }

  /** 
   * get a single user
   */
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }

}
