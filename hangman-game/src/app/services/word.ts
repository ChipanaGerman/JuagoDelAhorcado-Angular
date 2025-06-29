import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words = ['MESSI', 'RONALDO', 'NEYMAR', 'MBAPPE', 'HAALAND', 'MODRIC', 'KROOS', 'VINICIUS', 'BENZEMA', 'LEWANDOWSKI',
 'SALAH', 'MANE', 'DE BRUYNE', 'GRIEZMANN', 'PEDRI', 'GAVI', 'FODEN', 'SANE', 'MUSIALA', 'BELLINGHAM',
 'CASEMIRO', 'BRUNO', 'FERNANDES', 'RAFAELLEAO', 'LUKAKU', 'OSIMHEN', 'MARTINEZ', 'DYBALA', 'DI MARIA', 'VALVERDE',
 'KIMMICH', 'ALABA', 'RUDIGER', 'VAN DIJK', 'ALEXANDERARNOLD', 'RODRI', 'JOAOFELIX', 'ANSUFATI', 'GREALISH', 'RASHFORD',
 'DONNARUMMA', 'COURTOIS', 'TER STEGEN', 'OBLAK', 'MAIGNAN', 'NUNO MENDES', 'THEOHERNANDEZ', 'DAVIES', 'UPAMECANO', 'MILITAO']

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
}
