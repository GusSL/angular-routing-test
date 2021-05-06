import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(user => {
      console.log(user);

      if (user) {
        this.router.navigate([user.role])
      }
      
    })
  }

  authenticate() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.authService.login(this.username, this.password));
    
  }

}
