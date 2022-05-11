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
        this.menubutton = this.add.rectangle(200, 200, 100, 100, 0xff0000);
        
        //check if the left button is down on the mouse if so go to play
        //click to start
        this.input.on('gameobjectdown', (pointer, gameObject) =>
            {
                console.log("pogo");
                if(gameObject == this.menubutton)
                {
                    this.scene.start("CharacterSelectionScene");
                }
            },
            this
        );
    }

    update() 
    {
        console.log('menuscene');
        
    }
}