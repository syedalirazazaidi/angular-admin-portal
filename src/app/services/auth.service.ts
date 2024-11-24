import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    if (email === 'admin@example.com' && password === 'password') {
      this.loggedIn.next(true);
      localStorage.setItem('authToken', 'your-token');
      return this.loggedIn.asObservable();
    } else {
      this.loggedIn.next(false);
      return this.loggedIn.asObservable();
    }
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
