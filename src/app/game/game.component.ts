import {Component, OnInit} from '@angular/core';
//
import Phaser from 'phaser';
//
import {MainScene} from './main-scene';
import Center = Phaser.Scale.Center;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame!: Phaser.Game;
  gameConfig: Phaser.Types.Core.GameConfig;
  scaleConfig: Phaser.Types.Core.ScaleConfig;
  physicsConfig: Phaser.Types.Core.PhysicsConfig;

  constructor(){

    this.scaleConfig = {
      parent: 'gameContainer',
      mode: Phaser.Scale.RESIZE,
      autoCenter: Center.CENTER_BOTH,
      height: 'inherit'
    };

    this.physicsConfig = {
      default: 'matter',
        matter: {
           debug:true,
           gravity: { y: 0 }
        }
    };

    this.gameConfig = {
      type: Phaser.AUTO,
      scene: [ MainScene ],
      customEnvironment: false,
      parent: 'gameContainer',
      title: "Grim RPG",
      backgroundColor: "#18216D",
      physics: this.physicsConfig,
      scale: this.scaleConfig
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.gameConfig);
  }

}
