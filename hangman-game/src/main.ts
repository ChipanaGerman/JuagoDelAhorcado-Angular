import { bootstrapApplication } from '@angular/platform-browser';
import { GameComponent } from './app/game/game';

bootstrapApplication(GameComponent)
  .catch(err => console.error(err));
