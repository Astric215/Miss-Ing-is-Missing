class Tutorial extends Phaser.Scene 
{
    constructor()
    {
        super("tutorialScene");
    }

    create() 
    {
        
        //background creation
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'tutorial').setOrigin(0, 0);
        ButtonClick = this.sound.add('button_click', 1);
        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        this.input.on('pointerdown', () => 
        {
            MenuMusic.stop();
            ButtonClick.play();

            this.scene.start('characterSelectionScene');
        }, this)
    }
}