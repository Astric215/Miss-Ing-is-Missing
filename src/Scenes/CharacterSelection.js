class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {
        this.pipPos1 = new Pip(this, 200, 500, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos2 = new Pip(this, 500, 500, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
        this.pipPos3 = new Pip(this, 800, 500, Phaser.Math.Between(1, 11), Phaser.Math.Between(1, 4), Phaser.Math.Between(0, 1));
    }

    update() 
    {
        console.log('CharacterSelectionscene');
        this.scene.start("dressUpScene");
    }
}