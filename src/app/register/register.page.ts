import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  // Definir las propiedades con valores por defecto o como vacías
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  async register() {
    try {
      // Validar que se han proporcionado nombre, correo y contraseña
      if (!this.name || !this.email || !this.password) {
        console.error('Por favor, complete todos los campos.');
        // Puedes mostrar un mensaje al usuario indicando que debe completar todos los campos.
        return;
      }

      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );

      // El usuario se ha registrado correctamente, puedes redirigir a la página principal u otra página.
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario.
    }
  }
}

