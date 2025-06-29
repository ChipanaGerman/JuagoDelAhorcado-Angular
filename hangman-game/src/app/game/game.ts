import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common'; 
import { WordService } from '../services/word';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './game.html',
  styleUrls: ['./game.css'],
})
export class GameComponent implements OnInit {

  public wordToGuess = '';
  public hiddenWord: string[] = [];
  public usedLetters = new Set<string>(); 
  public attempts = 0;
  public maxAttempts = 5; 
  public letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  public gameStatus: 'playing' | 'won' | 'lost' = 'playing';
  
  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.startGame();
  }

  public startGame(): void {
    this.wordToGuess = this.wordService.getRandomWord();
    this.hiddenWord = Array(this.wordToGuess.length).fill('_');
    this.attempts = 0;
    this.usedLetters.clear();
    this.gameStatus = 'playing';
    console.log(`Palabra a adivinar (para pruebas): ${this.wordToGuess}`);
  }

  public checkLetter(letter: string): void {
    if (this.gameStatus !== 'playing' || this.usedLetters.has(letter)) {
      return;
    }

    this.usedLetters.add(letter);

    if (this.wordToGuess.includes(letter)) {
      for (let i = 0; i < this.wordToGuess.length; i++) {
        if (this.wordToGuess[i] === letter) {
          this.hiddenWord[i] = letter;
        }
      }
    } else {
      this.attempts++;
    }

    this.checkGameStatus();
  }

  private checkGameStatus(): void {
    if (!this.hiddenWord.includes('_')) {
      this.gameStatus = 'won';
    }

    if (this.attempts >= this.maxAttempts) {
      this.gameStatus = 'lost';
      this.hiddenWord = this.wordToGuess.split('');
    }
  }
}