import { Component } from '@angular/core';
import { LoginForm } from "../../components/login-form/login-form";
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  create(data: any) {
    this.authService.login(data).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }

}
