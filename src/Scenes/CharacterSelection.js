class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {
        pip1 = new Pip(this, 100, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        pip1arr = pip1.list;
        pip2 = new Pip(this, 300, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        pip1arr = pip2.list;
        pip3 = new Pip(this, 500, 200, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        pip1arr = pip3.list;
        this.go = this.add.rectangle(320, 340, 100, 20, 0xff0000);
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