import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    this.authService.signup(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      } else {
        alert('Signup failed');
      }
    });
  }
}
