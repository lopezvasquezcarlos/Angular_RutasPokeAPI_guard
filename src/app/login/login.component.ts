import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
     // Verifica si ya está autenticado
    //  if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/dashboard']);
    // }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
      }
    });
  }


}
