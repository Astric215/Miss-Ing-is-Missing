class DressUp extends Phaser.Scene {
    constructor()
    {
        super("DressUpScene");
    }

    create() 
    {

    }

    update() 
    {
        console.log('DressUpscene');
        this.scene.start("MansionScene");
    }
}