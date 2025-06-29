import { CommonModule } from '@angular/common'; // <--- 1. IMPORTA ESTO
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // <--- 2. ASEGÚRATE DE QUE ESTÉ ESTO
  imports: [CommonModule], // <--- 3. AÑADE CommonModule A LOS IMPORTS
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  // Arreglo de palabras para el juego (en mayúsculas para facilitar la comparación)
  palabras: string[] = ['ANGULAR', 'REACT', 'VUE', 'JAVASCRIPT', 'TYPESCRIPT', 'HTML', 'CSS'];
  
  palabraSecreta = '';
  palabraOculta: string[] = [];
  
  letras: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letrasUsadas = new Set<string>();

  intentos = 0;
  maxIntentos = 9; // 9 imágenes (0 a 9)

  gano = false;
  perdio = false;

  ngOnInit() {
    this.iniciarJuego();
  }

  // Método para iniciar o reiniciar el juego
  iniciarJuego() {
    // 1. Seleccionar una palabra aleatoria
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[indice];

    // 2. Crear la palabra oculta con guiones bajos
    this.palabraOculta = Array(this.palabraSecreta.length).fill('_');

    // 3. Reiniciar contadores y estados
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
    this.letrasUsadas.clear();
  }

  // Método que se ejecuta al presionar una letra
  seleccionarLetra(letra: string) {
    // Si la letra ya fue usada o el juego terminó, no hacer nada
    if (this.letrasUsadas.has(letra) || this.gano || this.perdio) {
      return;
    }

    this.letrasUsadas.add(letra);

    // Verificar si la letra está en la palabra secreta
    if (this.palabraSecreta.includes(letra)) {
      // Si la letra es correcta, la revelamos en la palabra oculta
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          this.palabraOculta[i] = letra;
        }
      }
    } else {
      // Si la letra es incorrecta, incrementamos los intentos
      this.intentos++;
    }

    // Verificar el estado del juego después de cada intento
    this.verificarEstadoJuego();
  }

  private verificarEstadoJuego() {
    // 1. Verificar si ganó
    if (!this.palabraOculta.includes('_')) {
      this.gano = true;
      return;
    }

    // 2. Verificar si perdió
    if (this.intentos >= this.maxIntentos) {
      this.perdio = true;
      this.palabraOculta = this.palabraSecreta.split('');
    }
  }
}