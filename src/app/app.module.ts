import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AbbreviationPipe } from './pipes/abbreviation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AbbreviationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
