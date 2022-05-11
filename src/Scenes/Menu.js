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
    }

    update() 
    {
        //check if the left button is down on the mouse if so go to play
        //click to start
        if(this.input.activePointer.leftButtonDown())
        {
            this.scene.start("characterSelectionScene");
        }
    }
}