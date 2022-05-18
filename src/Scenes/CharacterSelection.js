class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'menu').setOrigin(0, 0);
            //CHANGED THESE LOCATIONS TO BE IN THE MIDDLE, OFFSET EACH CHARACTER BY 200 PIXELS
            //                                             vvv
        this.pipPos1 = new Pip(this, game.config.width/2 - 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos2 = new Pip(this, game.config.width/2, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos3 = new Pip(this, game.config.width/2 + 200, game.config.height/2, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));


        //adding background here too! (in addition to menu right now)
        

        pip1 = this.pipPos1.toArr();
        pip2 = this.pipPos2.toArr();
        pip3 = this.pipPos3.toArr();
        this.go = this.add.rectangle(game.config.width/2 + 100, game.config.height/2 + 170, 100, 20, 0xff00ff);
        this.add.text(game.config.width/2 + 65, game.config.height/2 + 162, 'Continue');
        this.go.setInteractive();
        this.redraw = this.add.rectangle(game.config.width/2 - 100, game.config.height/2 + 170, 100, 20, 0xff0000);
        this.add.text(game.config.width/2 - 135, game.config.height/2 + 162, 'Shuffle')
        this.redraw.setInteractive();


        /*
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                this.scene.start("dressUpScene");
            }
            
            else if(gameObeject == this.redraw)
            {
                   
            }
        }, this)
        */
    }

    update() 
    {
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                this.scene.start("dressUpScene");
            }
            
            else if(gameObject == this.redraw)
            {
                this.scene.restart();
            }
        }, this)
    }
}