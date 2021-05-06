import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<User | null>;

  constructor() { 
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
}

login (username: string, password: string) {
  if (username === "admin" && password === "admin") {
    this.currentUserSubject.next(new User('Chad', 'admin'));
    return true;
  } else if (username === "user" && password === "user") {
    this.currentUserSubject.next(new User('Maria', 'user'));
    return true;
  } else if (username === "guest" && password === "guest") {
    this.currentUserSubject.next(new User('John', 'guest'));
    return true;
  }
  return false;
}

logout() {
  this.currentUserSubject.next(null);
  location.reload();
}

}

class User {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}