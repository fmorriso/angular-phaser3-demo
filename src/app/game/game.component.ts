import { Component, OnInit } from '@angular/core';
//
import Phaser from 'phaser';
//
import { MainScene } from './main-scene';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame!: Phaser.Game; 
  config: Phaser.Types.Core.GameConfig;

  constructor(){
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      title: "Grim RPG",
      backgroundColor: "#18216D",
      physics: {
        default: 'matter',
        matter: {
           debug:true,
           gravity: { y: 0 }
        }
      },
    };
  }

  ngOnInit(): void {
    
  }

}
