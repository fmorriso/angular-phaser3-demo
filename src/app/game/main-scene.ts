export class MainScene extends Phaser.Scene {
    private updateCount: number = 0;

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
        this.updateCount++;
        if(this.updateCount < 10)
        {
          console.log('update method');
        }
        
      }
}
