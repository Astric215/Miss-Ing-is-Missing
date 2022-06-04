class DressUp extends Phaser.Scene {
    constructor()
    {
        super("dressUpScene");
    }

    create() 
    {

        let MenuMusic = this.sound.add('menu_music', 1);

        MenuMusic.setLoop(true);
        MenuMusic.play();
        //clothing time
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'dressing').setOrigin(0, 0);
        let ButtonClick = this.sound.add('button_click', 1);
        this.p1 = new Pip(this, game.config.width/2, game.config.height*2, playerPips[0][2], playerPips[0][3], playerPips[0][4]);
        this.p2 = new Pip(this, 465, 375 , playerPips[1][2], playerPips[1][3], playerPips[1][4]);
        this.p3 = new Pip(this, game.config.width/2, game.config.height*2, playerPips[2][2], playerPips[2][3], playerPips[2][4]);
        this.p1.genClothes(0, playerPips[0][5]);
        this.p2.genClothes(0, playerPips[1][5]);
        this.p3.genClothes(0, playerPips[2][5]);
        this.p2.setScale(3.5);

        

        //move on
        this.go = this.add.image(game.config.width/2 + 300, game.config.height/2 + 200, 'continue');
        //this.go = this.add.rectangle(game.config.width/2 + 300, game.config.height/2 + 200, 100, 20, 0x0000ff);
        //this.add.text(game.config.width/2 + 260, game.config.height/2 + 190, 'CONTINUE');
        this.go.setInteractive();


        this.redrawHat = this.add.image(game.config.width/2 + 50, game.config.height/2 + 32, 'purchase');
        //this.redrawHat = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 32, 20, 20, 0xff0000);
        this.add.text(game.config.width/2 + 125, game.config.height/2 + 32, 'Purchase Hat').setOrigin(0.5);
        this.redrawHat.setInteractive();

        this.redrawShirt = this.add.image(game.config.width/2 + 50, game.config.height/2 + 82, 'purchase');
        //this.redrawShirt = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 82, 20, 20, 0x427888);
        this.add.text(game.config.width/2 + 130, game.config.height/2 + 82, 'Purchase Shirt').setOrigin(0.5);
        this.redrawShirt.setInteractive();

        this.redrawPant = this.add.image(game.config.width/2 + 50, game.config.height/2 + 150, 'purchase');
        //this.redrawPant = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 150, 20, 20, 0x183687);
        this.add.text(game.config.width/2 + 125, game.config.height/2 + 150, 'Purchase Pant').setOrigin(0.5);
        this.redrawPant.setInteractive();

        
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                MenuMusic.stop();
                ButtonClick.play();
                this.scene.start("mansionScene");
            }
            else if(gameObject == this.redrawHat)
            {
                ButtonClick.play();
                //REDRAW HAT
                this.p2.genClothes(1);
                playerPips[1] = this.p2.toArr();
            }
            else if(gameObject == this.redrawShirt)
            {
                ButtonClick.play();
                //CHANGE HERE FOR SHIRT
                this.p2.genClothes(1);
                playerPips[1] = this.p2.toArr();
            }
            else if(gameObject == this.redrawPant)
            {
                ButtonClick.play();
                //CHANGE HERE FOR PANTS
                this.p2.genClothes(1);
                playerPips[1] = this.p2.toArr();
            }
        });
    }

    update() 
    {
        console.log('DressUpscene');
    }
}