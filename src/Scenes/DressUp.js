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
        this.p1 = new Pip(this, 465, 375*2, playerPips[0][2], playerPips[0][3], playerPips[0][4]);
        this.p2 = new Pip(this, 465, 375 , playerPips[1][2], playerPips[1][3], playerPips[1][4]);
        this.p3 = new Pip(this, 465, 375*2, playerPips[2][2], playerPips[2][3], playerPips[2][4]);
        this.p1.genClothes(0, playerPips[0][5]);
        this.p2.genClothes(0, playerPips[1][5]);
        this.p3.genClothes(0, playerPips[2][5]);
        this.p1.setScale(3.5);
        this.p2.setScale(3.5);
        this.p3.setScale(3.5);

        this.trgt = this.p2;
        this.ind = 1;

        this.agentname = this.add.text(game.config.width/2 - 25, game.config.height/2 - 125,agentNames[1]);

        this.agentstr = this.add.text(game.config.width/2 - 250, game.config.height/2 - 60, "Strength: " + this.p2.stats[0]);
        this.agentdex = this.add.text(game.config.width/2 - 250, game.config.height/2 - 20, "Dexterity: " + this.p2.stats[1]);
        this.agentcon = this.add.text(game.config.width/2 - 250, game.config.height/2 + 20, "Constitution: " + this.p2.stats[2]);
        this.agentint = this.add.text(game.config.width/2 - 250, game.config.height/2 + 60, "Intelligence: " + this.p2.stats[3]);
        this.agentwis = this.add.text(game.config.width/2 - 250, game.config.height/2 + 100, "Wisdom: " + this.p2.stats[4]);
        this.agentcha = this.add.text(game.config.width/2 - 250, game.config.height/2 + 140, "Charisma: " + this.p2.stats[5]);

        //move on
        this.go = this.add.image(game.config.width/2 + 300, game.config.height/2 + 200, 'continue');
        //this.go = this.add.rectangle(game.config.width/2 + 300, game.config.height/2 + 200, 100, 20, 0x0000ff);
        //this.add.text(game.config.width/2 + 260, game.config.height/2 + 190, 'CONTINUE');
        this.go.setInteractive();

        this.selectNext = this.add.image(game.config.width/2, game.config.height/2 - 60, 'purchase');
        //this.selectNext = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 32, 20, 20, 0xff0000);
        this.add.text(game.config.width/2 + 30, game.config.height/2 - 60, 'Next').setOrigin(0.5);
        this.selectNext.setInteractive();
        
        this.selectPrev = this.add.image(game.config.width/2, game.config.height/2 - 40, 'purchase');
        //this.selectNext = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 32, 20, 20, 0xff0000);
        this.add.text(game.config.width/2 + 30, game.config.height/2 - 40, 'Prev').setOrigin(0.5);
        this.selectPrev.setInteractive();

        this.redrawHat = this.add.image(game.config.width/2 + 50, game.config.height/2, 'purchase');
        //this.redrawHat = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 32, 20, 20, 0xff0000);
        this.add.text(game.config.width/2 + 125, game.config.height/2, 'Purchase Hat').setOrigin(0.5);
        this.redrawHat.setInteractive();

        this.redrawDress = this.add.image(game.config.width/2 + 50, game.config.height/2 + 32, 'purchase');
        //this.redrawDress = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 82, 20, 20, 0x427888);
        this.add.text(game.config.width/2 + 130, game.config.height/2 + 32, 'Purchase Dress').setOrigin(0.5);
        this.redrawDress.setInteractive();

        this.redrawShirt = this.add.image(game.config.width/2 + 50, game.config.height/2 + 82, 'purchase');
        //this.redrawShirt = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 82, 20, 20, 0x427888);
        this.add.text(game.config.width/2 + 130, game.config.height/2 + 82, 'Purchase Shirt').setOrigin(0.5);
        this.redrawShirt.setInteractive();

        this.redrawPant = this.add.image(game.config.width/2 + 50, game.config.height/2 + 150, 'purchase');
        //this.redrawPant = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 150, 20, 20, 0x183687);
        this.add.text(game.config.width/2 + 125, game.config.height/2 + 150, 'Purchase Pant').setOrigin(0.5);
        this.redrawPant.setInteractive();


        this.redrawShoes = this.add.image(game.config.width/2 + 50, game.config.height/2 + 200, 'purchase');
        //this.redrawShoes = this.add.rectangle(game.config.width/2 + 50, game.config.height/2 + 150, 20, 20, 0x183687);
        this.add.text(game.config.width/2 + 125, game.config.height/2 + 200, 'Purchase Shoes').setOrigin(0.5);
        this.redrawShoes.setInteractive();

        
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                MenuMusic.stop();
                ButtonClick.play();
                this.scene.start("mansionScene");
            }
            else if(gameObject == this.selectNext)
            {
                ButtonClick.play();
                //REDRAW HAT
                if(this.ind >= playerPips.length-1)
                {
                    this.ind = 0;
                }
                else
                {
                    this.ind += 1;
                }
                this.changetrgt();
            }
            else if(gameObject == this.selectPrev)
            {
                ButtonClick.play();
                //REDRAW HAT
                if(this.ind <= 0)
                {
                    this.ind = 2;
                }
                else
                {
                    this.ind -= 1;
                }
                this.changetrgt();
            }            
            else if(gameObject == this.redrawHat)
            {
                ButtonClick.play();
                //REDRAW HAT
                this.trgt.incoClothes(0);
                playerPips[this.ind] = this.trgt.toArr();
            }
            else if(gameObject == this.redrawDress)
            {
                ButtonClick.play();
                //REDRAW HAT
                this.trgt.incoClothes(1);
                playerPips[this.ind] = this.trgt.toArr();
            }
            else if(gameObject == this.redrawShirt)
            {
                ButtonClick.play();
                //CHANGE HERE FOR SHIRT
                this.trgt.incoClothes(2);
                playerPips[this.ind] = this.trgt.toArr();
            }
            else if(gameObject == this.redrawPant)
            {
                ButtonClick.play();
                //CHANGE HERE FOR PANTS
                this.trgt.incoClothes(3);
                playerPips[this.ind] = this.trgt.toArr();
            }
            else if(gameObject == this.redrawShoes)
            {
                ButtonClick.play();
                //CHANGE HERE FOR PANTS
                this.trgt.incoClothes(4);
                playerPips[this.ind] = this.trgt.toArr();
            }
        });
    }

    update() 
    {
        this.agentstr.text = "Strength: " + this.trgt.stats[0];
        this.agentdex.text = "Dexterity: " + this.trgt.stats[1];
        this.agentcon.text = "Constitution: " + this.trgt.stats[2];
        this.agentint.text = "Intelligence: " + this.trgt.stats[3];
        this.agentwis.text = "Wisdom: " + this.trgt.stats[4];
        this.agentcha.text = "Charisma: " + this.trgt.stats[5];

    }

    changetrgt()
    {
        this.trgt.y *= 2;
        if(this.ind == 0)
        {
            this.trgt = this.p1;
        }
        else if(this.ind == 1)
        {
            this.trgt = this.p2;
        }
        else if(this.ind == 2)
        {
            this.trgt = this.p3;
        }
        this.agentname.text = agentNames[this.ind];
        this.trgt.y /= 2;
        console.log(this.ind);
    }
}