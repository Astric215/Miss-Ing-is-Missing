class Credits extends Phaser.Scene 
{
    constructor()
    {
        super("creditsScene");
    }

    create() 
    {
        
        //background creation
        this.infoGraphic = this.add.tileSprite(0, 0, 1000, 1000, 'credits').setOrigin(0, 0);
        ButtonClick = this.sound.add('button_click', 1);
        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        this.input.on('pointerdown', () => 
        {
            MenuMusic.stop();
            ButtonClick.play();

            this.scene.start('menuScene');
        }, this)
    }
}