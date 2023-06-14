export class MainScene extends Phaser.Scene {
    constructor() {
        const sceneConfig:Phaser.Types.Scenes.SettingsConfig = {
            key: 'MainScene'
        }
        
        super(sceneConfig);
      }

      create() {
        console.log('create method');
      }
      preload() {
        console.log('preload method');
      }
      override update(){
        console.log('update method');
      }
}
