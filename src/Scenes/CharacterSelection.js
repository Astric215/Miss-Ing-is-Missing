class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("characterSelectionScene");
    }

    create() 
    {

    }

    update() 
    {
        console.log('CharacterSelectionscene');
        this.scene.start("dressUpScene");
    }
}