class Intro extends Phaser.Scene {
    constructor(){
        super("introScene");
    }
 

    create() {

        ButtonClick = this.sound.add('button_click', 1);
        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        
        // setup anim
        this.anims.create({
          key:'introAnim01',
          frames: this.anims.generateFrameNames('introAtlas', {
              prefix: 'introFrame_',
              start: 96,
              end: 107,
              suffix: '',
              zeroPad: 4
          }),
          frameRate: 30,
       });

       
        // setup anim
        this.anims.create({
          key:'introAnim02',
          frames: this.anims.generateFrameNames('introAtlas', {
              prefix: 'introFrame_',
              start: 0,
              end: 95,
              suffix: '',
              zeroPad: 4
          }),
          frameRate: 10,
       });
 
        //background creation
        this.style = { font: "40px Arial", fill: "#ff0000", align: "center", wordWrap: { width: 1500 } };
        this.Prompt = new Phaser.GameObjects.Text(this, 450, 450 , "Click Anywhere to Continue", this.style);
        this.Prompt.setInteractive();
    

        this.introScene = this.add.sprite(0, 0, 'introFrame_0107').setOrigin(0, 0);
        this.introScene.playReverse('introAnim01');
        this.introScene.playReverse('introAnim02');
        this.introScene.stopOnFrame('introFrame_0000');
        this.input.on('pointerdown', () => 
        {
            MenuMusic.stop();
            ButtonClick.play();

            this.scene.start('menuScene');
        }, this)
    }
}
 
     
