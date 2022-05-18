/*
    Menu scene wher menu stuff happens ¯\_(ツ)_/¯
*/
class Menu extends Phaser.Scene 
{
    constructor()
    {
        super("menuScene");
    }

    create() 
    {
        //background creation
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'menu').setOrigin(0, 0);
        
        this.go = this.add.rectangle(game.config.width/2 - 15, game.config.height/2, 100, 100, 0xff0000);
        this.go.setInteractive();

        //check if the left button is down on the mouse if so go to play
        //click to start
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                this.scene.start("characterSelectionScene");
            }
        }, this)
    }

    update() 
    {
    }
}