class CharacterSelection extends Phaser.Scene {
    constructor()
    {
        super("CharacterSelectionScene");
    }

    create() 
    {

    }

    update() 
    {
        console.log('CharacterSelectionscene');
        this.scene.start("DressUpScene");
    }
}