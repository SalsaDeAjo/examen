import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  async login() {
    try {
      // Validar que se han proporcionado correo y contraseña
      if (!this.email || !this.password) {
        console.error('Por favor, complete todos los campos.');
        // Puedes mostrar un mensaje al usuario indicando que debe completar todos los campos.
        return;
      }

      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.email,
        this.password
      );

      // El usuario ha iniciado sesión correctamente, puedes redirigir a la página principal u otra página.
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      this.loginError = true;
    }
  }
}

