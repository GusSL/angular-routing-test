import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User | null>;
  public currentUserType: string;

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.currentUserSubject.next(new User('Chad', 'admin'));
      localStorage.setItem('user_type', 'admin');
      return true;
    } else if (username === 'user' && password === 'user') {
      this.currentUserSubject.next(new User('Maria', 'user'));
      localStorage.setItem('user_type', 'user');
      return true;
    } else if (username === 'guest' && password === 'guest') {
      this.currentUserSubject.next(new User('John', 'guest'));
      localStorage.setItem('user_type', 'guest');
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('user_type');

    // Reload all the window to "unload" the last module
    location.reload();
    //this.router.navigate(['/login']);
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
