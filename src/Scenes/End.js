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
        if (clueNum == clueGoal)
        {
            this.endscreen = this.add.tileSprite(0, 0, 1000, 1000, 'success').setOrigin(0, 0);
        }
        else
        {
            this.endscreen = this.add.tileSprite(0, 0, 1000, 1000, 'failure').setOrigin(0, 0);
        }
        failNum = 0;
        clueNum = 0;
        pause = false;
        //background creation
    
        let ButtonClick = this.sound.add('button_click', 1);
        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        
       

        //check if the left button is down on the mouse if so go to play
        //click to start
        this.input.on('pointerdown', () => 
        {
            MenuMusic.stop();
            ButtonClick.play();

            this.scene.start('menuScene');
        }, this)
    }

    update() 
    {
    }
}