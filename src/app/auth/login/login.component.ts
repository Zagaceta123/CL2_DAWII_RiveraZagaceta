import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  submit(username: HTMLInputElement, password: HTMLInputElement): void {
    if (this.authService.login(username.value, password.value)) {
      console.log('Inicio de sesión exitoso');
      window.location.href = "/dashboard"
    } else {
      alert('Usuario o contraseña invalido');
    }
  }
}
