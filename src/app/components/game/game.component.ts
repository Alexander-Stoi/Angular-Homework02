import { Component, Input, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/interfaces/game-interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
  constructor() { }

  @Input() gameFromApp: GameInterface;

  shortDesc: boolean = false;

  ngOnInit(): void {
  }
 
  showDescription(){
    this.shortDesc = ! this.shortDesc
  }
 
}

