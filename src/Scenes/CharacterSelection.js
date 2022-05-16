class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {
        this.pipPos1 = new Pip(this, 100, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos2 = new Pip(this, 300, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos3 = new Pip(this, 500, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        pip1 = this.pipPos1.toArr();
        pip2 = this.pipPos2.toArr();
        pip3 = this.pipPos3.toArr();
        this.go = this.add.rectangle(game.config.width/2, game.config.height/2, 100, 20, 0xff0000);
        this.go.setInteractive();
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            console.log(gameObject);
            if(gameObject == this.go)
            {
                this.scene.start("dressUpScene");
            }
        }, this)
    }

    update() 
    {
    }
}