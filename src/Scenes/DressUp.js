class DressUp extends Phaser.Scene {
    constructor()
    {
        super("dressUpScene");
    }

    create() 
    {
        //clothing time
        
    }

    update() 
    {
        console.log('DressUpscene');
        this.scene.start("mansionScene");
    }
}