import { Component } from '@angular/core';
import { GameInterface } from './interfaces/game-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-two';

  singleGame: GameInterface;

  sendGames(game: GameInterface) {
    this.singleGame = game;
  }

  games: GameInterface[] = [
    {
      id: 1,
      title: "Pro Evolution Soccer",
      releaseDate: new Date(1995, 7, 21),
      rating: 0.95,
      price: 10,
      shortDescription: "Pro Evolution Soccer is the first installment of Konami's Pro Evolution Soccer football video game series that was released in 2001.",
      genre: "sport",
      publisher: "Konami",
    },
    {
      id: 2,
      title: "Max Payne",
      releaseDate: new Date(2001, 7, 23),
      rating: 0.96,
      price: 15,
      shortDescription: "Max Payne is a third-person shooter video game developed by Remedy Entertainment and published by Gathering of Developers in July 2001 for Microsoft Windows.",
      genre: "third-person-shooter",
      publisher: "Gathering of Developers",
    },
    {
      id: 3,
      title: "Red Alert",
      releaseDate: new Date(1996, 11, 22),
      rating: 0.88,
      price: 12,
      shortDescription: "Command & Conquer: Red Alert is a real-time strategy video game of the Command & Conquer franchise, produced by Westwood Studios and released by Virgin Interactive Entertainment in 1996.",
      genre: "real-time-strategy",
      publisher: "	Virgin Interactive Entertainment",
    }
  ]

}
