class Menu extends Phaser.Scene {
    constructor()
    {
        super("menuScene");
    }

    create() 
    {

    }

    update() 
    {
        console.log('menuscene');
        
        //check if the left button is down on the mouse if so go to play
        //click to start
        if(this.input.activePointer.leftButtonDown()){
            this.scene.start("playScene");
        }
    }
}