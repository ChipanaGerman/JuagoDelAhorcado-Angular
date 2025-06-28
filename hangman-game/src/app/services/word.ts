import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words = ['angular', 'typescript', 'programacion', 'ahorcado', 'computadora'];

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
}
