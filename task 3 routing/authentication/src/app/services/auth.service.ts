import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string) {
    // Mock authentication logic
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'mock-token');
      return of(true).pipe(
        tap(() => this.isAuthenticated = true)
      );
    } else {
      return of(false);
    }
  }

  signup(username: string, password: string) {
    // Mock signup logic
    return of(true); // In a real app, you would call an API here
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
