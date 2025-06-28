import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordService } from '../services/word';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class GameComponent implements OnInit {
  word: string = '';
  displayWord: string[] = [];
  attemptsLeft: number = 6;
  usedLetters: string[] = [];
  alphabet: string[] = [];

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.word = this.wordService.getRandomWord();
    this.displayWord = Array(this.word.length).fill('_');
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  guessLetter(letter: string) {
    if (this.usedLetters.includes(letter)) return;
    this.usedLetters.push(letter);

    const positions = [...this.word].map((char, index) =>
      char.toUpperCase() === letter ? index : -1
    ).filter(index => index !== -1);

    if (positions.length > 0) {
      positions.forEach(pos => this.displayWord[pos] = this.word[pos].toUpperCase());
    } else {
      this.attemptsLeft--;
    }
  }
}
