import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Serverrepense} from '../classes/serverrepense';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  urlapi = environment.api;
  connected_email = '';

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post<Serverrepense>(`${this.urlapi}user/login`, {credentials: credentials});
  }

  register(user) {
    return this.http.post<Serverrepense>(`${this.urlapi}user/register`, {utilisateur: user});
  }

  set_email($email) {
    // this.connected_email = $email;
    localStorage.setItem('email', $email);
  }

  get_email() {
    // return this.connected_email;
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == undefined) {
      return '';
    }
    return localStorage.getItem('email');
  }
}
