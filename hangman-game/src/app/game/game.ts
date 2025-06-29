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
}
  