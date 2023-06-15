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
  gameConfig: Phaser.Types.Core.GameConfig;
  scaleConfig: Phaser.Types.Core.ScaleConfig;

  constructor(){
    this.scaleConfig = {
      parent: 'gameContainer',
      mode: Phaser.Scale.RESIZE,
      width: 512,
      height: 768
    }
    this.gameConfig = {
      type: Phaser.AUTO,      
      scene: [ MainScene ],
      customEnvironment: false,
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
      scale: this.scaleConfig
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.gameConfig);
  }

}
