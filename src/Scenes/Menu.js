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
        pip1 = new Pip(this, 100, 100, 1, 1, 1, 1);
        pip1.moveTo(200,200, 1000, 'power0', 0);
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
            this.scene.start("playScene");
        }
    }
}