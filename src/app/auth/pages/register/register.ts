import { Component } from '@angular/core';
import { RegisterForm } from "../../components/register-form/register-form";
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  create(data: any) {
    this.authService.register(data).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }

}
