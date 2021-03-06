class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {

        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        //adding background here too! (in addition to menu right now)
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'dressing').setOrigin(0, 0);

            //CHANGED THESE LOCATIONS TO BE IN THE MIDDLE, OFFSET EACH CHARACTER BY 200 PIXELS
            //                                             vvv
        this.pipPos1 = new Pip(this, game.config.width/2 - 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos2 = new Pip(this, game.config.width/2, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos3 = new Pip(this, game.config.width/2 + 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos1.genClothes(1);
        this.pipPos2.genClothes(1);
        this.pipPos3.genClothes(1);


        playerPips[0] = this.pipPos1.toArr();
        playerPips[1] = this.pipPos2.toArr();
        playerPips[2] = this.pipPos3.toArr();


        this.go = this.add.image(game.config.width/2 + 300, game.config.height/2 + 200, 'continue');
        this.go.setInteractive();

        this.redraw = this.add.image(game.config.width/2 - 300, game.config.height/2 + 200, 'shuffle');
        this.redraw.setInteractive();

    
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                MenuMusic.stop();
                ButtonClick.play();
                this.scene.start("dressUpScene");
            }
            
            else if(gameObject == this.redraw)
            {
                ButtonClick.play();
                playerPips[0] = this.pipPos1.destroyPip();
                playerPips[1] = this.pipPos2.destroyPip();
                playerPips[2] = this.pipPos3.destroyPip();

                
                this.pipPos1 = new Pip(this, game.config.width/2 - 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
                this.pipPos2 = new Pip(this, game.config.width/2, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
                this.pipPos3 = new Pip(this, game.config.width/2 + 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
                this.pipPos1.genClothes(1);
                this.pipPos2.genClothes(1);
                this.pipPos3.genClothes(1);



                playerPips[0] = this.pipPos1.toArr();
                playerPips[1] = this.pipPos2.toArr();
                playerPips[2] = this.pipPos3.toArr();
                
            }
        }, this);
    }

    update() 
    {
        
    }
}