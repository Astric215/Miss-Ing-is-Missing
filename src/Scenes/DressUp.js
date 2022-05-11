class DressUp extends Phaser.Scene {
    constructor()
    {
        super("dressUpScene");
    }

    create() 
    {

    }

    update() 
    {
        console.log('DressUpscene');
        this.scene.start("mansionScene");
    }
}