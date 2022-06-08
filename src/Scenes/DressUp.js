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
        this.p1 = new Pip(this, 465, 375*2, playerPips[0][2], playerPips[0][3], playerPips[0][4]);
        this.p2 = new Pip(this, 465, 375 , playerPips[1][2], playerPips[1][3], playerPips[1][4]);
        this.p3 = new Pip(this, 465, 375*2, playerPips[2][2], playerPips[2][3], playerPips[2][4]);
        this.p1.genClothes(0, playerPips[0][5], playerPips[0][6]);
        this.p2.genClothes(0, playerPips[1][5], playerPips[1][6]);
        this.p3.genClothes(0, playerPips[2][5], playerPips[2][6]);
        this.p1.setScale(3.5);
        this.p2.setScale(3.5);
        this.p3.setScale(3.5);

        this.trgt = this.p2;
        this.ind = 1;

        this.agentSelectCurrent = this.add.text(game.config.width/2 + 65, game.config.height/2 - 135, "Current Agent:");
        this.agentname = this.add.text(game.config.width/2 + 205, game.config.height/2 - 135,agentNames[1]);

        this.agentstr = this.add.text(game.config.width/2 - 250, game.config.height/2 - 60, "Strength: " + this.p2.stats[0]);
        this.agentdex = this.add.text(game.config.width/2 - 250, game.config.height/2 - 20, "Sneakiness: " + this.p2.stats[1]);
        this.agentcon = this.add.text(game.config.width/2 - 250, game.config.height/2 + 20, "Tolerance: " + this.p2.stats[2]);
        this.agentint = this.add.text(game.config.width/2 - 250, game.config.height/2 + 60, "Knowledge: " + this.p2.stats[3]);
        this.agentwis = this.add.text(game.config.width/2 - 250, game.config.height/2 + 100, "Observation: " + this.p2.stats[4]);
        this.agentcha = this.add.text(game.config.width/2 - 250, game.config.height/2 + 140, "Sexiness: " + this.p2.stats[5]);

        //move on
        this.info = this.add.image(game.config.width/2 - 300, game.config.height/2 + 140, 'info');
        this.info.setInteractive();
        //this.infoGraphic = this.add.image(0, 0,'stats');
        //this.infoGraphic.alpha = 0.0;

        this.go = this.add.image(game.config.width/2 + 300, game.config.height/2 + 200, 'continue');
        this.go.setInteractive();

        this.selectNext = this.add.image(game.config.width/2 + 75, game.config.height/2 - 100, 'purchase');
        this.add.text(game.config.width/2 + 90, game.config.height/2 - 108, 'Next Character', { color: '#ffffff', align: 'left' });
        this.selectNext.setInteractive();
        
        this.selectPrev = this.add.image(game.config.width/2 + 75, game.config.height/2 - 75, 'purchase');
        this.add.text(game.config.width/2 + 90, game.config.height/2 - 83, 'Previous Character', { color: '#ffffff', align: 'left' });
        this.selectPrev.setInteractive();

        this.redrawHat = this.add.image(game.config.width/2 + 50, game.config.height/2, 'purchase');
        this.add.text(game.config.width/2 + 65, game.config.height/2 - 8, 'Purchase Hat');
        this.redrawHat.setInteractive();

        this.redrawDress = this.add.image(game.config.width/2 + 50, game.config.height/2 + 32, 'purchase');
        this.add.text(game.config.width/2 + 65, game.config.height/2 + 23, 'Purchase Dress');
        this.redrawDress.setInteractive();

        this.redrawShirt = this.add.image(game.config.width/2 + 50, game.config.height/2 + 82, 'purchase');
        this.add.text(game.config.width/2 + 65, game.config.height/2 + 74, 'Purchase Shirt');
        this.redrawShirt.setInteractive();

        this.redrawPant = this.add.image(game.config.width/2 + 50, game.config.height/2 + 150, 'purchase');
        this.add.text(game.config.width/2 + 65, game.config.height/2 + 142, 'Purchase Pant');
        this.redrawPant.setInteractive();


        this.redrawShoes = this.add.image(game.config.width/2 + 50, game.config.height/2 + 200, 'purchase');
        this.add.text(game.config.width/2 + 65, game.config.height/2 + 190, 'Purchase Shoes');
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
            else if(gameObject == this.info)
            {
                MenuMusic.stop();
                ButtonClick.play();
                this.scene.start("statGraphic");
            }
            else if(gameObject == this.infoGraphic)
            {
                ButtonClick.play();
                this.infoGraphic.visible = false;
                this.infoGraphic.disableInteractive() 
                
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
       // this.infoGraphic.visible = false;
       // if(this.infoGraphic.visible)
       // {
       //     //show stats graphic
      //     this.infoGraphic.alpha = 1; 
       // }
        //else
        //{
      //hide stats graphic
     //  this.infoGraphic.alpha = 0.0; 
       // }
   


        this.agentstr.text = "Strength: " + this.trgt.stats[0];
        this.agentdex.text = "Sneakiness: " + this.trgt.stats[1];
        this.agentcon.text = "Tolerance: " + this.trgt.stats[2];
        this.agentint.text = "Knowledge: " + this.trgt.stats[3];
        this.agentwis.text = "Observation: " + this.trgt.stats[4];
        this.agentcha.text = "Sexiness: " + this.trgt.stats[5];

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
        //console.log(this.ind);
    }
}