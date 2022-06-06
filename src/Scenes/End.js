/*
    End scene wher End stuff happens ¯\_(ツ)_/¯
*/
class End extends Phaser.Scene 
{
    constructor()
    {
        super("endScene");
    }

    create() 
    {
        
        //background creation
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'menu').setOrigin(0, 0);
        this.menuHover = this.add.tileSprite(0, 0, 1000, 1000, 'menuHover').setOrigin(0, 0);
        this.menuHover.alpha = 0.0;
        let ButtonClick = this.sound.add('button_click', 1);
        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        
        this.go = this.add.rectangle(675, 165, 180, 100, 0xff0000);
        this.go.setInteractive();
        this.go.input.alwaysEnabled = true;
        this.go.alpha = 0.0;

        this.go.on("pointerover", () => { this.menuHover.alpha = 1; })
        this.go.on("pointerout", () => { this.menuHover.alpha = 0.0; });
    

        //check if the left button is down on the mouse if so go to play
        //click to start
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                MenuMusic.stop();
                ButtonClick.play();

                this.scene.start("characterSelectionScene");
            }
        }, this)
    }

    update() 
    {
    }
}