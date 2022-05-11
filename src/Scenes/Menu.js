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
    }

    create() 
    {

    }

    update() 
    {
        console.log('menuscene');
        
        //check if the left button is down on the mouse if so go to play
        //click to start
        if(this.input.activePointer.leftButtonDown())
        {
            this.scene.start("CharacterSelectionScene");
        }
    }
}