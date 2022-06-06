class DressUp extends Phaser.Scene {
    constructor()
    {
        super("dressUpScene");
    }

    create() 
    {
        //clothing time
        this.menu = this.add.tileSprite(0, 0, 1000, 1000, 'dressing').setOrigin(0, 0);
        this.p1 = new Pip(this, 465, 375*2, playerPips[0][2], playerPips[0][3], playerPips[0][4]);
        this.p2 = new Pip(this, 465, 375 , playerPips[1][2], playerPips[1][3], playerPips[1][4]);
        this.p3 = new Pip(this, 465, 375*2, playerPips[2][2], playerPips[2][3], playerPips[2][4]);
        this.p1.genClothes(0, playerPips[0][5]);
        this.p2.genClothes(0, playerPips[1][5]);
        this.p3.genClothes(0, playerPips[2][5]);

        

        //move on
        this.go = this.add.rectangle(game.config.width/2 + 300, game.config.height/2 + 200, 40, 20, 0x0000ff);
        this.add.text(game.config.width/2 + 290, game.config.height/2 + 190, 'GO');
        this.go.setInteractive();
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                ButtonClick.play();
                this.scene.start("mansionScene");
            }
        });
    }

    update() 
    {
        console.log('DressUpscene');
    }
}